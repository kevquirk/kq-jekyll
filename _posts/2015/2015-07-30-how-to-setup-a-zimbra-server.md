---
title: 'How to Setup a Zimbra Server'
date: '2015-07-30T11:59:00+01:00'
layout: post
permalink: /how-to-setup-a-zimbra-server/
categories:
    - De-Googling
    - Technology
---

**Gmail is an awesome service, right? It’s free, it works, and it’s great! However, have you ever wondered why it’s free? Well, it’s free because you’re the product. Google uses your data in a number of ways in order to make money. Don’t believe me? Watch [this documentary](https://web.archive.org/web/20160526194202/http://www.zippcast.com/video/89a6fc53b1baaf6f8b2), then come back and tell me your thoughts.**

**Ok, so you believe me now? Great. Let’s get on with my guide on how to setup a Zimbra server, so you can say goodbye to Gmail!**

First things first, a few prerequisites. Setting up and running your own mail server isn’t the easiest thing to do. So if you’re not particularly technical, I would recommend you purchase a more privacy aware email service instead. Companies like [FastMail](https://web.archive.org/web/20160526194202/https://www.fastmail.com/) are relatively cheap, and will look after your privacy.

If you’re happy to move forward and run your own Zimbra mail server, then keep following this guide. **Note:** I am assuming you guys are at a particular technical level, so I will be making some assumptions as we go. If you get stuck at any point, fire a comment below and I’ll do what I can to help.

## Step One: Get A Server

You’re going to need a server in order to host your Zimbra mail server on. You can either buy a server yourself, and run it from home (like I do), or you can get a hosted VPS. You will need one with around 4GB of RAM, as Zimbra is a big piece of software. I would recommend using [OpenVZ](https://web.archive.org/web/20160526194202/https://openvz.io/), I’ve used them in the past (and still do for some things), they are awesome.

Now, you might be thinking *“what’s the point in moving from Gmail if someone else is hosting my server anyway?”* The point is, OpenVZ won’t have access to your data, so they won’t be mining you like Google do. ultimately, you’re not going to be the product any more.

Once you have your sever, make sure you install **Ubuntu 12.04 x64 MINIMAL** (14.04 should work, but I haven’t tested it yet). The minimal install is very important. If you don’t see the minimal install initially, re-install your VPS from the control panel, and you should see all the minimal OS images.

## Step Two: Set Up Zimbra

Now you have your server running Ubuntu 12.04 x64 Minimal, it’s time to start installing Zimbra. So connect to your server via SSH (I would recommend changing the default root password, and setting up SSH keys also, just for extra security).

**Make sure you have pointed your MX records at the server IP address BEFORE starting the installation. The installer will check the MX records, and it will cause problems with the installation if it can’t resolve them.**

First of all, install the pre-requisites required for the install:

`sudo apt-get install netcat libidn11 libpcre3 libgmp3c2 libexpat1 libstdc++6 libperl5.14 sysstat sqlite3`

Once you’ve done that, go to the [Zimbra download page](https://web.archive.org/web/20160526194202/http://www.zimbra.com/downloads/os-downloads.html) and get the link for the latest version (right click, copy link location). Then, back to the CLI and use wget to download the latest tar.gz file:

`wget https://files.zimbra.com/downloads/8.6.0_GA/zcs-8.6.0_GA_1153.UBUNTU12_64.20141215195814.tgz`

Next, extract the installer files and CD into the new folder:

`tar -zxvf zcs-8.6.0_GA_1153.UBUNTU12_64.20141215195814.tgz<br></br>cd zcs-8.6.0_GA_1153.UBUNTU12_64.20141215195814`

Now edit your /etc/hosts file so it looks something like this (substitute the domain name and “hostname” for your domain name and server hostname):

`nano /etc/hosts<br></br>11.22.33.44 my.emailserver.com hostname<br></br>127.0.0.1 localhost`

**Note:** the “domain name” is the actual URL you will use to browse to the email server. So if you own mydomain.com, and the email server will be mail.mydomain.com, you would enter mail.mydomain.com in the hostfile.

You can now run the installer:

`./install.sh`

The installer will then run an check for all the pre-requisites. Some may be missing. If there are any missing, cancel the installation and install them. For example, if perl &amp; unzip are missing, cancel the installer and run:

`apt-get install libmodule-install-perl<br></br>apt-get install unzip`

Once all the missing pre-requisites are installed, re-run the installer (same command as before). Once you’ve agreed with the license agreements, and confirmed all the requirements are in place, and you actually want to run the installer, it will ask you to confirm what’s to be installed. Here’s what you need:

- **zimbra-ldap** – Yes
- **zimbra-logger** – Yes
- **zimbra-mta** – Yes
- **zimbra-snmp** – Yes
- **zimbra-store** – Yes
- **zimbra-apache** – Yes
- **zimbra-spell**  – Yes
- **zimbra-memcached** – No
- **zimbra-proxy** – No

Once the install has finished, you will need to configure the admin password. You will need to select *Zimbra Store &gt; Admin user/password* then change the default password. Once that’s done, hit *r* to return to the main menu, the *a* to apply the config.

That’s it. Zimbra is now installed. Here are the addresses you need:

- https://your.server.com:7071 – this is the admin console.
- https://your.server.com – this is the user console (ie the webmail interface).

**Note:** Once set up, I would recommend changing the username of the “admin” user to something more secure – the last thing you need is someone getting in with a simple brute force attack.

## Step Three: Mobile Sync

Out of the box, Zimbra supports POP/IMAP, CalDAV &amp; CardDAV. But I personally prefer to use ActiveSync. If you want to add this functionality, you can use a paid for Zimlet (a Zimlet is a plugin for Zimbra) call [Zextras](https://web.archive.org/web/20160526194202/http://www.zextras.com/). The ActiveSync Zimlet (Zextras Mobile) is only 2EURO per license per year.

You have to buy a minimum of 10 licenses, but 20EURO per year isn’t a lot to pay for having ActiveSync functionalilty for up to 10 devices. Here’s how to install Zextras (you can initially use it for 30 days as a trial):

Log in to the CLI as root, and fetch the latest installer via wget:  
`wget http://www.zextras.com/download/zextras_suite-latest.tgz`

Once you have the file, extract it and CD into the newly created folder:

`tar -zxvf zextras_suite-latest.tgz<br></br>cd zextras_suite-[version-number]`

Now run the installer:

`./install.sh all`

The installer will now run. Once it’s run, you can go into the admin console for Zimbra, and you will see the Zextras menu. By default, all the Zextras Zimlets are enabled. But you can easily turn off the ones you don’t want from the admin interface.

Once you have Zextras Mobile running on Zimbra, just add a new corporate (Exchange) account to your mobile device(s) using the following details:

- Server: the address of your server – eg: mail.myserver.com
- Username: your email address.
- Password: your password.
- SSL enabled.
- If there’s an option to accept all certificates, then select it (this isn’t necessary if you’re using a proper signed certificate).

**UPDATE:** I’ve since discovered [Zcal](https://web.archive.org/web/20160526194202/http://www.appsropos.com/portfolio/zcal-zimbra-calendar-sync/) &amp; [Zcard](https://web.archive.org/web/20160526194202/http://www.appsropos.com/portfolio/zcard-zimbra-contacts-sync/) which are mobile apps that allow you sync your calendar &amp; contacts with your device and they require absolutely zero server side config. There is a charge for these apps, collectively they cost £5.98 (around $8.00) but it is a one off payment, rather than the yearly licensing of Zextras.

I’ve also had to use there support, as I found a small bug. They fixed the bug and rolled out and update within 36 hours, and that was delayed because of a national holiday. I’d actually recommend Zcal &amp; Zcard over Zextras. For mail, just set up plain old IMAP – all is working great.

## Step Four: Certificates

By default, Zimbra uses self-signed certificates. That’s fine, they will secure your connection, but you will always get the annoying certificate warning that everyone hates:

![Certificate warning](/assets/images/certificate-warning.webp)

So let’s look at installing a proper signed certificate, so you no longer get these popups. You don’t need to pay for a certificate, you can get a free one from [StartSSL](https://web.archive.org/web/20160526194202/http://startssl.com/).

Once you have generated your certificate, you will need three files; your certificate, the Root CA, and the Intermediate CA. These are all available from the StartSSL website. Or if you got your certificate from another provider, then you should have been provided with these files.

The certificate will be installed via CLI, so connect to an SSH session, and save your Root CA and SSL Certificate by pasting them into nano (or vi if you’re that way inclined):

`nano /tmp/ssl.crt<br></br>nano /tmp/root-ca.crt`

Next, do the same thing for your Intermediate CA:

`nano /tmp/int-ca.crt`

Finally, upload your SSL key using the same method:

`nano /opt/zimbra/ssl/zimbra/commercial/commercial.key`

Now you need to combine your Root and Int CA’s into a chain:

`cat /tmp/root-ca.crt /tmp/int-ca.crt > /tmp/ca-chain.crt`

Now for the important bit, we need to verify that the stored certificate and chain are valid:

`/opt/zimbra/openssl/bin/openssl verify -CAfile /tmp/ca-chain.crt /tmp/ssl.crt`

You should get a message saying the certificate was verified successfully. Awesome! We can now import our CA signed certificate and in doing so, replace the self-signed one:

`/opt/zimbra/bin/zmcertmgr deploycrt comm /tmp/ssl.crt /tmp/ca-chain.crt`

You can verify that the certificate was deployed successfully by running this command:

`/opt/zimbra/bin/zmcertmgr viewdeployedcrt`

This may take a few minutes. But once it’s done, you need to restart the Zimbra services for the change to take effect:

`su zimbra`

`zmcontrol restart`

That’s it! Once you go and visit your Zimbra admin or user portals, you should no longer see a certificate warning.

## Conclusion

This is just the beginning of the process. The next phase is to start looking at configuring your Zimbra email server in order to stop outgoing mail being delivered as spam. But this article is long enough, so I will be making a separate article on that in the future.

***Update:** The “how to stop outgoing spam” article is now live.* [Here is a link](/how-to-stop-outgoing-mail-on-zimbra-from-being-delivered-as-spam/)*.*

I hope you found my how to setup a Zimbra server guide useful. If you have any questions, problems, or feedback, please feel free to fire a comment below.