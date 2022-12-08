---
id: 4303
title: How To Install Nextcloud On A Synology NAS
date: 2021-01-21T19:13:00+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=4303
permalink: /install-nextcloud-on-synology/
description:
  - Nextcloud vs Synology is somewhat of a dilemma, but this post shows you how to install Nextcloud on Synology so you have the best of both.
categories:
  - De-Googling
---
<p class="has-medium-font-size">
  This post should tell you everything you need to know to install Nextcloud instance on your Synology NAS without using Docker.
</p>

I previously published a post on [how to setup Pi-Hole on a Synology](/how-to-setup-pi-hole-on-a-synology-nas/) and since then a number of people have asked for a guide on how to install Nextcloud on a Synology. After lots of tinkering, this post is the result.

I&#8217;ve talked about [Nextcloud vs Synology](/synology-vs-nextcloud-which-is-better-for-a-home-server/) before, and why I think Synology is the better choice for a home server. However, by using this guide you don&#8217;t need to choose &#8211; you can install Nextcloud on your Synology NAS!

This is likely to be another long post, so let&#8217;s get cracking shall we?

## Setup DNS {#h-setup-dns}

Once Nextcloud is all setup and working on your Synology NAS, you will probably want to access it via a nice URL, usually a subdomain like `nextcloud.example.com`. If that&#8217;s the case, make sure you log into the DNS provider for your domain (this is usually the registrar you registered the domain with) and configure an `A` record that points to the public IP address of your Synology NAS.

By doing this first we&#8217;re giving the DNS a chance to propagate, so when we come to setup public access later on, we won&#8217;t encounter any DNS issues and we should have the [Let&#8217;s Encrypt](https://letsencrypt.org/) certificate issued on our first attempt.

More on that later though. Once you have the DNS record configured, head over to your Synology NAS, as there&#8217;s some work for us to do there next…

## Install packages {#h-install-packages}

The first thing you&#8217;re going to need to do is login to your Synology and install a few packages (if you don&#8217;t have them installed already). The packages you need to install are:

  * **Synology Web Station**
  * **Apache HTTP server** &#8211; make sure you install the latest version. At the time of writing this post, that is `2.4`.
  * **PHP** &#8211; again, go for the latest version available. At the time of writing, that is `7.4`.
  * **MariaDB** &#8211; you guessed it, get the latest version. At the time of writing, that is `10`.
  * When you install MariaDB, you will be asked to set a password **remember this password and make sure it&#8217;s secure**.
  * Leave the port set to `3307`.
  * **phpMyAdmin** &#8211; this package is optional, but will allow you to manage your MariaDB databases should you need to.

All of these packages are available from the main Synology repository, so you shouldn&#8217;t have to do anything clever to get them installed. Just open up the **Package Center** and search for each package.

### Configure Apache & PHP {#h-configure-apache-php}

Now the pre-requisite applications are installed, you need to tell **Web Station** to use Apache & PHP. To do this, open up **Web Station** and go to the **General Settings** tab. Change the **HTTP back-end server** dropdown to be Apache and the **PHP** dropdown to be the version you just installed. Nextcloud runs on PHP, so if we don&#8217;t do this, Nextcloud won&#8217;t work.

<img loading="lazy" width="984" height="576" src="/assets/images/wp-images/2021/01/web-station-config.png" alt="Synology Web Station config" class="wp-image-4304" srcset="/assets/images/wp-images/2021/01/web-station-config.png 984w, /assets/images/wp-images/2021/01/web-station-config-610x357.png 610w, /assets/images/wp-images/2021/01/web-station-config-768x450.png 768w" sizes="(max-width: 984px) 100vw, 984px" />  

Next, go into the **PHP Settings** tab, highlight the version of PHP you&#8217;re using and click the **Edit** button. Under **Extensions** select everything. Then click on the **Core** tab, search for `memory_limit` and change it to `512M`.

<img loading="lazy" width="745" height="644" src="/assets/images/wp-images/2021/01/php-memory-limit.png" alt="Synology PHP memory limit" class="wp-image-4305" srcset="/assets/images/wp-images/2021/01/php-memory-limit.png 745w, /assets/images/wp-images/2021/01/php-memory-limit-610x527.png 610w" sizes="(max-width: 745px) 100vw, 745px" />  

Finally, click **OK** to apply those configuration changes.

### Enable TC/IP connections on MariaDB {#h-enable-tc-ip-connections-on-mariadb}

The final thing to do in this part is to open up the **MariaDB** application and check the box that says **Enable TCP/IP connection**. This is needed so Nextcloud can connect to our database when we configure it later on.

Leave the port as `3307` and click **Apply**.

## Enable SSH access & setup folders {#h-enable-ssh-access-setup-folders}

You now need to enable SSH access to your Synology NAS so you can log into the command line of your Synology and configure some stuff (don&#8217;t worry, there isn&#8217;t much to do here).

To enable SSH access, go to **Control Panel** on your Synology and select **Terminal & SNMP**. Finally, check the **Enable SSH service** option. By default the port is 22, it&#8217;s up to you if you want to change this.

<p class="notice">
  I&#8217;d <strong>strongly</strong> recommend making sure the SSH port is closed on your router <strong>before</strong> doing this. Otherwise you will be opening up your Synology via SSH to the Internet. Bad times.
</p>

Before we hop over to the command line, we need to create a shared folder within Synology that will store all our Nextcloud data. So while still in **Control Panel**, head over to the **Shared Folder** tool and create a new shared folder.

Give the folder a name of `nextcloud` and set the **Description** to something like _&#8220;This is where the Nextcloud data is stored.&#8221;_ For most people, the location will be `volume1`. Keep clicking **Next** on all other windows &#8211; you don&#8217;t need to change any other options.

<img loading="lazy" width="798" height="581" src="/assets/images/wp-images/2021/01/synology-shared-folder-01.png" alt="Synology shared folder" class="wp-image-4306" srcset="/assets/images/wp-images/2021/01/synology-shared-folder-01.png 798w, /assets/images/wp-images/2021/01/synology-shared-folder-01-610x444.png 610w, /assets/images/wp-images/2021/01/synology-shared-folder-01-768x559.png 768w" sizes="(max-width: 798px) 100vw, 798px" />  

Once you have completed the shared folder wizard, click **Apply**. You will now be asked to set permissions. Leave everything default and click **OK**. We will set additional permissions from SSH in a second.

### Time to SSH {#h-time-to-ssh}

Ok, we&#8217;re done in the Synology GUI for the time being. It&#8217;s now time to _really_ get our hand dirty in the command line. Open your favourite command line tool and SSH into your Synology. You will be asked for your user password to login via SSH. If you set a custom port for SSH, you will need to express that in your SSH command with the `-p` flag.

So let&#8217;s say my username is `john`, my internal Synology IP address is `192.168.0.10` and the SSH port is `2222`, my SSH command will look like this:

<pre class="wp-block-code"><code>ssh john@192.168.0.10 -p2222</code></pre>

Once in, we need to elevate our privileges to `root`. To do this, run the following command (you will need to enter your password again):

<pre class="wp-block-code"><code>sudo su -</code></pre>

Now change directory into the Web Station directory:

<pre class="wp-block-code"><code>cd /volume1/web</code></pre>

<p class="notice">
  <strong>Note:</strong> The command above assumes that your Synology is working from <strong>volume1</strong>. You can confirm this by opening the <strong>Storage Manager</strong> on your Synology to see what volumes you have configured.
</p>

Now let&#8217;s create a directory that will store the front end web component of Nextcloud:

<pre class="wp-block-code"><code>mkdir nextcloud</code></pre>

Because we have created this folder as `root`, we need to make the Web Station `http` user the owner of the `nextcloud` folder. We also need to change the folder permissions so `http` can access and manage the data in this folder. We do this with the following commands:

<pre class="wp-block-code"><code>chown -R http:http nextcloud
chmod -R 0770 nextcloud</code></pre>

The `0770` permission we have just given to `nextcloud` allows for the `http` user and the `http` group to have read/write access and no one else. While we&#8217;re here, let&#8217;s give `http` access to the `nextcloud` shared folder we created earlier as well so it can write to that folder too:

<pre class="wp-block-code"><code>chown -R http:http /volume1/nextcloud
chmod -R 0770 /volume1/nextcloud</code></pre>

At this point you may be confused as to why we have two different folders, both called `nextcloud`. Let me take a second to explain…

The shared folder we made (`/volume1/nextcloud`) is going to be used for our Nextcloud data only. So this folder will never be exposed to the internet. The web folder (`/volume1/web/nextcloud`) contains the website files for the Internet facing part of Nextcloud. By keeping the two directories separate, we make our Nextcloud configuration more secure.

### Pulling down Nextcloud {#h-pulling-down-nextcloud}

We&#8217;re nearly finished in the SSH session. The last thing to do is pull down the Nextcloud Web Installer package. To do this, navigate to \[https://nextcloud.com\](), click on the **Get Nextcloud** button and select **Server Packages**.

A popup will now appear. Select the **Web Installer** tab. Right click the link on step 1 of the instructions (highlighted below) and select **Copy Link Location**. This will copy a link to the web installer file so we can download it to our Synology.

<img loading="lazy" width="1111" height="750" src="/assets/images/wp-images/2021/01/nextcloud-web-installer.png" alt="Nextcloud web installer" class="wp-image-4307" srcset="/assets/images/wp-images/2021/01/nextcloud-web-installer.png 1111w, /assets/images/wp-images/2021/01/nextcloud-web-installer-610x412.png 610w, /assets/images/wp-images/2021/01/nextcloud-web-installer-768x518.png 768w" sizes="(max-width: 1111px) 100vw, 1111px" />  

Back to the SSH session. Change directory into the `nextcloud` folder, then pull down the Nextcloud web installer:

<pre class="wp-block-code"><code>cd nextcloud
curl -O https://download.nextcloud.com/server/installer/setup-nextcloud.php</code></pre>

Your Synology will now pull down the Nextcloud web installer. We&#8217;re done with SSH for the time being, but leave the session open as we need to make one more change later on.

## Setup Nextcloud {#h-setup-nextcloud}

We&#8217;re now ready to install Nextcloud on our Synology NAS. So, open up a browser and navigate to the following address:

<pre class="wp-block-code"><code>http:&#47;&#47;&lt;internal-nas-ip&gt;/nextcloud/setup-nextcloud.php</code></pre>

So if the internal IP address for my Synology is `192.168.0.10`, the URL I would visit is

<pre class="wp-block-code"><code>http:&#47;&#47;192.168.0.10/nextcloud/setup-nextcloud.php</code></pre>

At this point you should see the Nextcloud setup wizard. Click the **Next** button to get started.

<img loading="lazy" width="1111" height="623" src="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-01.png" alt="Setup wizard step 01" class="wp-image-4308" srcset="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-01.png 1111w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-01-610x342.png 610w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-01-768x431.png 768w" sizes="(max-width: 1111px) 100vw, 1111px" />  

Nextcloud will then run a dependency check and because we enabled all the PHP extensions earlier, there should be no issues. In the field asking where Nextcloud should be installed, delete `nextcloud` and replace it with a single dot:

<img loading="lazy" width="1111" height="623" src="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-02.png" alt="Setup wizard step 02" class="wp-image-4309" srcset="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-02.png 1111w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-02-610x342.png 610w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-02-768x431.png 768w" sizes="(max-width: 1111px) 100vw, 1111px" />  

Click **Next** again to continue. This may take a minute or so, but be patient as Nextcloud is being installed. Once it&#8217;s done, you will get a message telling you that **Nextcloud is now installed**.

Awesome. We now need to configure our database and data folders. So, click **Next** to continue.

### Configure Nextcloud {#h-configure-nextcloud}

There are a number of options to configure here. First things first, enter the **username** and **password** you want to use with Nextcloud. This will be the admin account, so make sure you choose a [strong password](/why-your-password-is-probably-crap/).

Next, click on the **Storage & database** option to expand the configuration options. Under **Data folder** delete the contents and replace it with `/volume1/nextcloud`. This is the shared folder we created earlier.

By default, Nextcloud is configured to use SQLite, but that can cause all kinds of performance issues, so change this option to **MySQL/MariaDB** and fill in the details as follows:

  * **Username:** root
  * **Password:** The password you set when you installed MariaDB earlier
  * **Database name:** This can be anything you like, let&#8217;s go with `nextcloud`
  * Delete `localhost` and replace it with `127.0.0.1:3307`

<img loading="lazy" width="1094" height="937" src="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-03.png" alt="Setup wizard step 03" class="wp-image-4310" srcset="/assets/images/wp-images/2021/01/nextcloud-setup-wizard-03.png 1094w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-03-610x522.png 610w, /assets/images/wp-images/2021/01/nextcloud-setup-wizard-03-768x658.png 768w" sizes="(max-width: 1094px) 100vw, 1094px" />  

Finally, I&#8217;d recommend leaving **Install recommended apps** checked. Then click **Finish setup**. Once again this step may take a minute or so to complete. Don&#8217;t worry, Nextcloud is doing a lot of work in the background to get stuff configured &#8211; it&#8217;s normal.

<p class="notice">
  At this point you <strong>MIGHT</strong> get a 504 error. <strong>Don&#8217;t worry, Nextcloud has installed. This is just a weird bug in Nextcloud</strong>. Leave it for 5 minutes and refresh the page; you should then see the Nextcloud login page.
</p>

That&#8217;s it! Nextcloud is now installed on your Synology NAS. We now need to configure your Synology so you can actually access Nextcloud from the Internet…

## Configure external access {#h-configure-external-access}

At this point we need to flip back to the Synology web interface so we can configure a new virtual host in **Web Station**. Open up the **Web Station** application and click on the **Virtual Hosts** tab. From here, click on the **Create** button to setup a new virtual host.

In this example, I&#8217;m going to use the `nextcloud.kevsweb.dev` sub-domain. So anywhere you see this domain listed, make sure you replace it with the sub-domain you intend to use for Nextcloud.

In the virtual host window, select the **Name-based** option and enter your sub-domain as the **hostname**. Keep **Port** checked; this means the virtual host will use the standard HTTP/HTTPs ports, so you won&#8217;t have to append your Nextcloud URL with a port number. If you prefer to set a custom port for Nextcloud, just change the settings as you see fit.

Next, set the **Document root** to `web/nextcloud`.

Finally, under **HTTPS settings**, check the **HSTS** option. Set the **HTTP back-end server** dropdown to Apache and the **PHP** dropdown to the version you installed earlier. Once you&#8217;re done, the virtual host config window should look something like this:

<div class="wp-block-image">
  <img loading="lazy" width="505" height="565" src="/assets/images/wp-images/2021/01/synology-virtual-host.png" alt="Virtual host config" class="wp-image-4311" />
</div>

Click **OK** and you will get a message relating to assigning permissions to this virtual host. Click **Yes** on this message.

### Configure SSL certificate {#h-configure-ssl-certificate}

If you were to visit your Nextcloud instance using your URL now, you browser is likely to complain about the lack of SSL. So we need to enable SSL so that we can use HTTPS for Nextcloud &#8211; this is so Nextcloud stay secure and [doesn&#8217;t leak your password to the world](/why-https-is-important/).

Still in the Synology web interface, open up the **Control Panel** and select **Security**, then **Certificate**. Click on the **Add** button to create a new certificate for Nextcloud.

  * In the first window make sure **Add a new certificate** is checked and click **Next**.
  * On the second window, give the new certificate a description like _&#8220;Nexctloud certificate&#8221;_, select **Get a certificate from Let&#8217;s Encrypt** and click **Next** again.
  * On the third window, enter the domain name you want to use, in my case that&#8217;s `nextcloud.kevsweb.dev` and an email address. Leave the **Subject Alternative name** field blank.
  * Finally, click the **Apply** button and assuming the DNS changes you made earlier have propagated, the certificate should be issued successfully.

<img loading="lazy" width="726" height="51" src="/assets/images/wp-images/2021/01/nextcloud-certificate-synology.png" alt="Nextcloud certificate on synology" class="wp-image-4312" srcset="/assets/images/wp-images/2021/01/nextcloud-certificate-synology.png 726w, /assets/images/wp-images/2021/01/nextcloud-certificate-synology-610x43.png 610w" sizes="(max-width: 726px) 100vw, 726px" />  

Still in the certificate tab, click on the **Configure** button. In the popup that appears, look for the Nextcloud virtual host that you created earlier &#8211; this will be shown as a domain name &#8211; and change the certificate from the default option to the Nextcloud certificate you just created.

<div class="wp-block-image">
  <img loading="lazy" width="539" height="28" src="/assets/images/wp-images/2021/01/synology-select-certificate.png" alt="Synology select certificate" class="wp-image-4313" />
</div>

Finally, click **OK** to apply those changes. Now if you visit your Nextcloud instance in your browser, you should see a valid certificate and no warning message. Instead, you will now get an **Untrusted Domain** error message similar to this:

<img loading="lazy" width="1220" height="647" src="/assets/images/wp-images/2021/01/nextcloud-untrust-error-1220x647.png" alt="Nextcloud untrust error" class="wp-image-4314" srcset="/assets/images/wp-images/2021/01/nextcloud-untrust-error-1220x647.png 1220w, /assets/images/wp-images/2021/01/nextcloud-untrust-error-610x324.png 610w, /assets/images/wp-images/2021/01/nextcloud-untrust-error-768x407.png 768w, /assets/images/wp-images/2021/01/nextcloud-untrust-error.png 1244w" sizes="(max-width: 1220px) 100vw, 1220px" />  

Remember I told you earlier there&#8217;s something else we need to do to in the SSH session? Well, this is that thing. So flip back to your SSH session, make sure you&#8217;re still logged in as `root`, change directory to `/volume1/web/nexctloud/config` and edit the `config.php` file.

<p class="notice">
  <strong>Note:</strong> I personally prefer to use <strong>nano</strong> to edit files on the command line, but it&#8217;s not installed on Synology by default. If you want to install nano, <a href="https://anto.online/guides/how-to-install-nano-on-your-synology-nas/">follow this guide</a>.
</p>

Once you&#8217;re editing `config.php`, look for a section of the config file that looks like this (replacing the example IP address with your own):

<pre class="wp-block-code"><code>  array (
    0 =&gt; '192.168.0.10',
  ),</code></pre>

To add our domain as a trusted domain in Nextcloud, add a new line so the config file looks like this:

<pre class="wp-block-code"><code>  array (
    0 =&gt; '192.168.0.10',
    1 =&gt; 'nextcloud.kevsweb.dev',
  ),</code></pre>

Save `config.php` and exit the file. You can now logout of the SSH session. If you head back to your browser and refresh your screen, you should now be presented with the Nextcloud login screen:

<img loading="lazy" width="1220" height="647" src="/assets/images/wp-images/2021/01/nextcloud-login-1220x647.png" alt="Nextcloud login" class="wp-image-4315" srcset="/assets/images/wp-images/2021/01/nextcloud-login-1220x647.png 1220w, /assets/images/wp-images/2021/01/nextcloud-login-610x324.png 610w, /assets/images/wp-images/2021/01/nextcloud-login-768x407.png 768w, /assets/images/wp-images/2021/01/nextcloud-login.png 1244w" sizes="(max-width: 1220px) 100vw, 1220px" />  

<p class="has-medium-font-size">
  Congratulations! You just installed Nextcloud on a Synology NAS.
</p>

You should now be able to login to your Nextcloud instance using the credentials your configured during the setup process.

## Conclusion {#h-conclusion}

By following this process you should now have a fairly secure Nextcloud install running on your Synology. If you want to test the security of your instance, head over to the [Nextcloud security scan tool](https://scan.nextcloud.com) to scan your new instance. You _should_ get an A+ rating ([report for my test server](https://scan.nextcloud.com/results/af4f0daa-9a6f-4e94-8d0a-ac51e59fcc57)).

<img loading="lazy" width="1220" height="656" src="/assets/images/wp-images/2021/01/nextcloud-security-scan-1220x656.png" alt="Nextcloud security scan results" class="wp-image-4316" srcset="/assets/images/wp-images/2021/01/nextcloud-security-scan-1220x656.png 1220w, /assets/images/wp-images/2021/01/nextcloud-security-scan-610x328.png 610w, /assets/images/wp-images/2021/01/nextcloud-security-scan-768x413.png 768w, /assets/images/wp-images/2021/01/nextcloud-security-scan.png 1227w" sizes="(max-width: 1220px) 100vw, 1220px" />  

I was considering writing this tutorial using Docker, rather than a non-containerised version. But it seems that not all Synology devices have Docker available to them, so I decided this would be a more accessible option. Plus, it should be lighter on resources than running a stack of Docker containers.

I hope you found this post useful. Just like my recent [how to build a Jekyll site](/how-to-build-jekyll-site-simple-css/) post, this has been another big post with lots of work gone into it. If you have found it useful, [please consider buying me a coffee](/buy-me-a-coffee/) to say thanks &#8211; I really would appreciate it. ?

**I think this is enough writing for one day. So until next time folks; Kev, out.**
