---
id: 300
title: How To Backup Nextcloud
date: 2020-06-19T08:20:00+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=300
permalink: /how-to-backup-nextcloud/
description:
  - Nextcloud is a fantastic system, but it's not your backup. This post will show you how to backup Nextcloud so you can ensure your data is safe.
categories:
  - De-Googling
  - Technology
---
<p class="notice">
  &#8220;How To Backup Nextcloud&#8221; was originally written on 03 July 2019, but has been updated on 19 June 2020.
</p>

I recently wrote a guide on [how to setup your own Nextcloud server](/how-to-setup-a-nextcloud-server-in-ubuntu); it&#8217;s a great way of ensuring your personal data is kept private. However, it&#8217;s also important to backup [Nextcloud](https://nextcloud.com) too.

## Isn&#8217;t Nextcloud My Backup? {#h-isn-t-nextcloud-my-backup}

No it isn&#8217;t. Nextcloud is not a backup solution, it&#8217;s a way of syncing your data, but it&#8217;s not a backup. Think about it, if you delete a file from computer A, that deletion will immediately be synced everywhere via Nextcloud. There are protections in place, such as the trash bin and version control, but Nextcloud is not a backup solution.

Since [building my own server](/building-my-home-server) I have come up with a pretty decent way of backing up my data that follows the 3-2-1 principle of backing data up.

<blockquote class="wp-block-quote">
  <p>
    At least 3 copies of your data, on 2 different storage media, 1 of which needs to be off-site.
  </p>

  <cite>&#8212; The 3-2-1 backup rule</cite>
</blockquote>

## Requirements {#h-requirements}

In order to effectively backup Nextcloud, there are a few pieces of hardware and software involved. There is an initial cost to the hardware, but it isn&#8217;t significant.

To backup Nextcloud you will need:

  1. An Ubuntu based server running the Nextcloud Snap
  2. A USB hard drive that is at least double the size of the data you&#8217;re backing up (I&#8217;d recommend getting the biggest you can afford)
  3. Duplicati backup software installed on your Nextcloud server
  4. A [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) account
  5. Around 30-60 minutes to set it all up

At this point I will assume that you have connected and mounted your USB hard drive to the server. If you haven&#8217;t done that yet, take a look at my guide on [how to mount a partition in Ubuntu](/how-to-mount-a-partition-in-ubuntu).

<p class="notice">
  Note: this process is designed around the Nextcloud Snap installation, not the manual installation.
</p>

## Overview {#h-overview}

Following this post, you will be able to do the following:

  1. Automatically backup your entire Nextcloud instance (including your database) every day
  2. Create a log file so you can see if the backup worked
  3. Sync the backup to B2 cloud storage (it will be encrypted before transmission)
  4. Delete old backups so your hard drive doesn&#8217;t fill up
  5. Receive email alerts once the backup completes

## User Setup {#h-user-setup}

I would reccomend using a dedicated user for backing up. This will allow us to keep the backup routine separate from the normal user account you use, making the setup more secure.

In this guide, I will be using `ncbackup` as the user account. You can use whatever username you feel is appropriate. Let&#8217;s start by creating the user and the directories we will need to store our backups.

<pre class="wp-block-code language-bash"><code># Create new user
sudo adduser ncbackup

# Switch to new user account
su - ncbackup

# Make directories for Backups
mkdir Backups
mkdir Backups/Logs

# Logout to switch back to normal user
logout</code></pre>

Now we have the directories setup, let&#8217;s create the script that will run our backups. In this example, I&#8217;m using nano, but feel free to use any text editor you like. To learn more about nano, [click here](https://linux.die.net/man/1/nano).

<pre class="wp-block-code language-bash"><code>nano /usr/sbin/ncbackup.sh</code></pre>

We&#8217;re using the `usr/sbin` directory because it is used for system-wide binaries that require elevated privileges. You can store your script wherever you like, but `usr/sbin` is good practice.

## Backup Nextcloud {#h-backup-nextcloud}

Populate the file with the following, ensuring you change the username and path to whatever the appropriate values are for your setup.

<pre class="wp-block-code language-bash"><code>#!/bin/bash
# Output to a logfile
exec &&gt; /home/ncbackup/Backups/Logs/"$(date '+%Y-%m-%d').txt"
echo "Starting Nextcloud export..."

# Run a Nextcloud backup
nextcloud.export
echo "Export complete"
echo "Compressing backup..."

# Compress backed up folder
tar -zcf /home/ncbackup/Backups/"$(date '+%Y-%m-%d').tar.gz" /var/snap/nextcloud/common/backups/*
echo "Nextcloud backup successfully compressed to /home/ncbackup/Backups"

# Remove uncompressed backup data
rm -rf /var/snap/nextcloud/common/backups/*
echo "Removing backups older than 14 days..."

# Remove backups and logs older than 14 days
find /home/ncbackup/Backups -mtime +14 -type f -delete
find /home/ncbackup/Backups/Logs -mtime +14 -type f -delete
echo "Complete"

echo "Nextcloud backup completed successfully."</code></pre>

Now we need to make our backup script executable:

<pre class="wp-block-code language-bash"><code>sudo chmod +x /usr/sbin/ncbackup.sh</code></pre>

A lot of the commands in our script will require `sudo` access, but we don’t want to give full `sudo` access to our `ncbackup` user, as it doesn’t need elevated rights globally. However, we do want to be able to run the backup script with `sudo` rights, and we want to do it without requiring a password.

To accomplish this, we need to use `visudo`. We can configure `visudo` to allow the `ncbackup` user to run the backup script as `sudo`, without a password. Crucially, the `ncbackup` user will not be able to run anything else as `sudo`.

<pre class="wp-block-code"><code># Allow ncbackup to run script as sudo
ncbackup ALL=(ALL) NOPASSWD: /usr/sbin/ncbackup.sh

# Open visudo
sudo visudo

# Allow ncbackup to run script as sudo
ncbackup ALL=(ALL) NOPASSWD: /usr/sbin/ncbackup.sh</code></pre>

Enabling `sudo` access for the backup script introduces another potential security risk. The `ncbackup` user can run the backup script as `sudo` without a password. So a threat actor could potentially edit the script and run any command as `sudo` without a password.

<p class="medium">
  Bad times.
</p>

However, we saved the script in `/usr/sbin`, which means the `ncbackup` user will not be able to edit the `ncbackup.sh` script. By doing so, we have prevented the system from becoming insecure.

As an extra layer of security, we will stop the `ncbackup` user from being able to login to the server at all:

<pre class="wp-block-code language-bash"><code>sudo usermod -s /sbin/nologin ncbackup</code></pre>

If at a later date you need to be able to login using the `ncbackup` user, you can revert change this by running the following command:

<pre class="wp-block-code language-bash"><code>sudo usermod -s /bin/bash ncbackup</code></pre>

## Schedule Backups {#h-schedule-backups}

Now have the backup script setup, we need to schedule the backup to run automatically; for this, we will use Cron.

Run the following command to enter the Cron settings for the `ncbackup` user:

<pre class="wp-block-code language-bash"><code>sudo crontab -u ncbackup -e</code></pre>

Once you’re in `crontab`, you need to add the following lines to the bottom of the file:

<pre class="wp-block-code language-bash"><code># Nextcloud backup cron (runs as 2am daily)
0 2 * * * sudo /usr/sbin/ncbackup.sh</code></pre>

The settings above will run the backup script at 02:00am every day. You can change this to whatever value you like, but I would recommend running the backup every day.

The first value represents minutes, then hours, then days etc. So if you wanted to run the backup at 03:30am, your Crontab entry would look something like this:

<pre class="wp-block-code language-bash"><code># Nextcloud backup cron (runs as 03:30am daily)
30 3 * * * sudo /usr/sbin/ncbackup.sh</code></pre>

## Now Wait… {#h-now-wait}

That’s most of the setup complete at this point. The next thing to do is to wait 24 hours for your backup to complete automatically (or you could run the script manually yourself).

Once the script has run, you should see a tar.gz file within your backup folder with a name that corresponds to the date the backup ran:

<pre class="wp-block-code language-bash"><code>kev@server:~$ ls /home/ncbackup/Backups/
2020-06-10.tar.gz  Logs</code></pre>

Within the Logs folder, you should also see a `<date>.txt` file that corresponds to the backup. You can open this to see how your backup went:

<pre class="wp-block-code language-bash"><code>kev@server:~$ cat /home/ncbackup/Backups/Logs/2020-06-10.txt
Starting Nextcloud export...
WARNING: This functionality is still experimental and under
development, use at your own risk. Note that the CLI interface is unstable, so beware if using from within scripts.
Enabling maintenance mode...
done
Exporting apps...
              0 100%    0.00kB/s    0:00:00 (xfr#0, to-chk=0/1)
Exporting database...
Exporting config...
Exporting data...
         15.90M 100%  109.87MB/s    0:00:00 (xfr#105, to-chk=0/139)
Successfully exported /var/snap/nextcloud/common/backups/20190703-130201
Disabling maintenance mode...
done
Export complete
Compressing backup...
tar: Removing leading `/' from member names
Nextcloud backup successfully compressed to /home/ncbackup/Backups
Removing backups older than 14 days...
find: ‘./home/ncbackup/Backups/’: No such file or directory
Complete
Nextcloud backup completed successfully.</code></pre>

With the echo statements we put in the script, you can see at what point in the backup things failed, if they do in fact fail.

<p class="notice">
  <strong>Note:</strong> there are masses of improvements that can be added to this script, but this satisfies my needs. If you do add improvements, please <a href="https://kevq.uk/contact/">let me know</a> and I&#8217;ll post an update.
</p>

## Setup Duplicati {#h-setup-duplicati}

You now have a single layer of backups for Nextcloud. However, if you want to abide by the 3-2-1 rule of backups (which I highly recommend), then we now need to use Duplicati to add additional layers to our backup routine.

To install Duplicati, [go to this link](https://www.duplicati.com/download) and right click _‘copy link location‘_ on the Ubuntu DEB. Then amend the commands below as appropriate.

<pre class="wp-block-code language-bash"><code># Download Duplicati DEB
wget https://updates.duplicati.com/beta/duplicati_&#91;version].deb

# Install Duplicati
sudo dpkg -i duplicati_&#91;version].deb

# If you get a dependency error, run the following
sudo apt --fix-broken install</code></pre>

We now need to enable the Systemd service for Duplicati so it runs automatically on boot:

<pre class="wp-block-code language-bash"><code># Enable Duplicati service
sudo systemctl enable duplicati

# Start the Duplicati service
sudo systemctl start duplicati</code></pre>

By default the Duplicati service will only listen on localhost, so if you try to access the IP of the server from another device, you won’t get the Duplcati webGUI.

To fix this, edit the `DAEMON_OPTS` option within the Duplicati config to the following:

<pre class="wp-block-code language-bash"><code># Open Duplicati config
sudo nano /etc/default/duplicati

# Additional options that are passed to the Daemon.
DAEMON_OPTS="--webservice-interface=all"</code></pre>

Restart Duplicati so the config changes take affect:

<pre class="wp-block-code language-bash"><code>sudo systemctl restart duplicati</code></pre>

You should now be able to access the Duplicati web interface by going to `http://server-ip:8200`. You will be asked to set a password for Duplicati when you first login, **make sure this is a strong one**!

<p class="notice-red">
  <strong>Security Note:</strong> My server is hosted at home, and I don’t expose port 8200 to the internet. If your server is not at home, then I would strongly suggest you configure something like IP Tables, or Digital Ocean firewall, to restrict access to port 8200.
</p>

## Configure Duplicati Backups {#h-configure-duplicati-backups}

Now its time to configure our backups in Duplicati. We will configure 2 backup routines – 1 to USB and another to Backblaze B2 for off-site.

Let’s do the USB backup first. Within the Duplicati webGUI, click on the `Add Backup` button to the left of the screen.

This is a very straightforward process where you choose the destination (our USB drive), the source (the output from our backup script) and the schedule.

<img loading="lazy" width="1024" height="563" src="/assets/images/wp-images/2019/11/Duplicati-NC-USB-1024x563.png" alt="Duplicati USB Backup" class="wp-image-301" srcset="/assets/images/wp-images/2019/11/Duplicati-NC-USB-1024x563.png 1024w, /assets/images/wp-images/2019/11/Duplicati-NC-USB-300x165.png 300w, /assets/images/wp-images/2019/11/Duplicati-NC-USB-768x422.png 768w, /assets/images/wp-images/2019/11/Duplicati-NC-USB.png 1287w" sizes="(max-width: 1024px) 100vw, 1024px" />  

When creating your backup routines in Duplicati, always ensure you encrypt your backups and use a strong passphrase.

Also, always make sure your Duplicati backups run at different times to your other backups. Personally, I go for the following setup:

  * **02:00** – Local Nextcloud backup script runs via Cron
  * **03:00** – Duplicati backs up to USB
  * **04:00** – Duplicati backs up to Backblaze B2

I always leave the Backblaze backup to run last, as it then has up to 22 hrs to complete the upload before the next backup starts, so they shouldn’t interfere with one another.

### Off-Site Backups {#h-off-site-backups}

When it comes to configuring your Backblaze backups, change the destination from Local to `B2 Cloud Storage`. You will need your B2 bucket information and application keys from to complete the config.

<img loading="lazy" width="1024" height="549" src="/assets/images/wp-images/2019/11/Duplicati-Backblaze-1024x549.png" alt="" class="wp-image-302" srcset="/assets/images/wp-images/2019/11/Duplicati-Backblaze-1024x549.png 1024w, /assets/images/wp-images/2019/11/Duplicati-Backblaze-300x161.png 300w, /assets/images/wp-images/2019/11/Duplicati-Backblaze-768x412.png 768w, /assets/images/wp-images/2019/11/Duplicati-Backblaze.png 1283w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Once you have entered your Backblaze Bucket information, click Test Connection to make sure Duplicati can write to your B2 bucket correctly.

<p class="notice">
  <strong>Important note:</strong> You will need to add payment information to your Backblaze account before backing up, otherwise your backups will fail.
</p>

To give you an idea of what Backblaze costs, I’m currently backing up around 150GB of data to my Buckets, and I’m charged less than $1/month.

Personally, I only keep 7 days of backups on BackBlaze, as I only have it for disaster recovery, where all my local backups have failed. I don’t need data retention in the cloud, that’s what my USB drive is for.

## Duplicati Email Notifications {#h-duplicati-email-notifications}

You can configure email notifications for Duplicati backups, this way you will always know if your backups are working.

To do this, head into the Duplicati WebGUI and click on the `Settings` option to the left of screen, scroll all the way down to the bottom where it says `Default options`. Click the option that says `Edit as text`, the paste the following into the field:

<pre class="wp-block-code language-bash"><code># Change as needed
--send-mail-url=smtp://your.smtp.server:587/?starttls=when-available
--send-mail-any-operation=true
--send-mail-subject=Duplicati %PARSEDRESULT%, %OPERATIONNAME% report for %backup-name%
--send-mail-to=your@email.com
--send-mail-username=smtp-username
--send-mail-password=smtp-password
--send-mail-from=Backup Mailer &lt;backups@email.com&gt;</code></pre>

I personally use [Amazon SES](https://aws.amazon.com/ses/) for this, but you should be able to use any SMTP server.

## That&#8217;s It! {#h-that-s-it}

You’re done. That’s it. Finito. You now know how to backup Nextcloud in such a way that it abides by the cardinal 3-2-1 backup rule, and it lets you know when your backups have run.

<p class="has-text-align-center notice-red medium">
  <strong>TEST YOUR BACKUPS!</strong>
</p>

I can’t stress this enough. Once your backups have been running for a few days, make sure you run a test restore (not on your live system) to make sure you can get your data back. After all, there’s no point in having backups if you can’t restore from them!

To restore the backups you have made of Nextcloud into a vanilla Nextcloud snap installation, you need to decompress your backup to `/var/snap/nextcloud/common` then use the `nextcloud.import` command to restore it:

<pre class="wp-block-code language-bash"><code># Decompress your backup
tar -xvzf /path/to/nexcloud/backup.tar.gz -C /var/snap/nextcloud/common

# Restore your Nextcloud backup
sudo nextcloud.import /var/snap/nextcloud/common/backup-to-restore</code></pre>

Yes, restoring your Nextcloud snap from backup really is that simple!

## Conclusion {#h-conclusion}

This is by no means the perfect way to backup Nextcloud, but it does work and it has worked for me for quite some time now. You may have a different/better way of backing up, if you do, please leave comment below, or [get in touch with me](https://kevq.uk/contact/).

Finally, I’d like to thank my friend Thomas from work, who helped improve my script a little and gave me a couple of ideas to improve to the security.

Thanks, Tom. 🙂
