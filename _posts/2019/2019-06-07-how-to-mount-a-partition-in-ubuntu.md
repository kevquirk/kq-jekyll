---
title: How To Mount A Partition In Ubuntu
layout: post
guid: https://kevq.uk/?p=319
permalink: /how-to-mount-a-partition-in-ubuntu/
categories:
  - Technology
---
If you want to mount a partition in Ubuntu, all you really need to do is plug the drive into your machine and open your file browser. However, what if you want to ensure that partition always mounts on boot?

Well, fear no more intrepid Ubuntu explorer, because I have you covered. This quick and simple guide will show you how to mount a partition in Ubuntu and ensure it’s always mounted automatically on boot.

## Step One: Recon {#h-step-one-recon}

First things first – we need to get some basic information about the partition, like the drive it sits on, before we start configuring the mount point.

Run the following command in terminal to work out which partition/drive is the one you want to mount.

<pre class="wp-block-code"><code>lsblk -o name,mountpoint,label,size,fstype,uuid | egrep -v "^loop"</code></pre>

This command will show all the devices and partitions that your user can see on the system. We’re using the `egrep` command to remove all `squashfs` partitions that snap packages use. This way the output is much cleaner.

The output should look similar to the image below. I am going to be mounting the NTFS partition that’s on sdb1 (show below in the red box).

<img loading="lazy" width="815" height="527" src="/assets/images/wp-images/2019/11/hard-drive-terminal-output.jpg" alt="" class="wp-image-320" srcset="/assets/images/wp-images/2019/11/hard-drive-terminal-output.jpg 815w, /assets/images/wp-images/2019/11/hard-drive-terminal-output-300x194.jpg 300w, /assets/images/wp-images/2019/11/hard-drive-terminal-output-768x497.jpg 768w" sizes="(max-width: 815px) 100vw, 815px" />  

## Step Two: The Setup {#h-step-two-the-setup}

We can see from the output above that the drive I’m trying to mount (in my case a USB HDD) is already mounted at `/media/kev/TOSHIBA EXT`, but I want to ensure he drive always mounts at `/media/backups`.

Create the directory that will be used as the mount point for the partition:

<pre class="wp-block-code"><code>sudo mkdir /media/backups</code></pre>

Next, we will edit the fstab file which contains all the mount point configuration for the system.

<pre class="wp-block-code"><code>sudo nano /etc/fstab</code></pre>

You need add a line to the bottom of the `fstab` file that contains the config for the partition you want to mount. That line should look something like this:

<pre class="wp-block-code"><code># Mount point for my USB backup drive
UUID="843671A53671993E"  /media/backups  nfts  defaults  0  2</code></pre>

Note the UUID and the part that says &#8216;ntfs&#8217;. The partition I’m trying to mount is NTFS, so I have entered &#8216;ntfs&#8217; to my fstab entry. However, if you’re using a different filesystem, for example EXT4, you would put &#8216;ext4&#8217; here.

The UUID was printed out when we did the recon earlier. It’s the long hexadecimal string. These are different lengths depending on the filesystem type.

Finally, you need to mount the partition at the new location. That’s just a single command:

<pre class="wp-block-code"><code>sudo mount -av</code></pre>

If you run the &#8216;lsblk&#8217; command again, you should now see your partition mounted at the new location. If you don’t, reboot your machine.

## Step 3: Set Permissions {#h-step-3-set-permissions}

You may not have to do this step, but I thought I’d include it just in case. You may find that when you browse your newly mounted partition, that you can’t write anything to it. Let’s fix that.

You will need to take ownership of the partition with the &#8216;chown&#8217; command, then change the permissions with the &#8216;chmod&#8217; command. In this case we will set the permissions to 755.

If you want to learn more about Linux filesystem permissions, [this is a great guide](https://linuxhandbook.com/linux-file-permissions).

<pre class="wp-block-code"><code>sudo chown -R user:group /mount/point/path
sudo chmod -R 755 /mount/point/path</code></pre>

Be sure to update the parts of the above commands show in red to suit your system. In most cases, your user and group names will likely be the same. For me, the commands look like this:

<pre class="wp-block-code"><code>sudo chown -R kev:kev /media/backups
sudo chmod -R 755 /media/backups</code></pre>

## That’s it! {#h-that-s-it}

If you want to mount a partition in Ubuntu, the process really is this simple. Whilst most long-term Linux users will likely know this process like the back of their hand, this can be a very frustrating process for new users.

This process can be useful for all kinds of things, but really comes into its own when you want to permanently reference a partition, like setting up backup routines on a server. I know it helped me when [setting up my home server](/building-my-home-server).
