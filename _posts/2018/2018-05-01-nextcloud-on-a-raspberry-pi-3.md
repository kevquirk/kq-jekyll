---
title: Nextcloud On A Raspberry Pi 3+
layout: post
permalink: /nextcloud-on-a-raspberry-pi-3/
description: Did you know you can run Nextcloud on a Raspberry Pi? Well you can, and here's how.
categories:
  - De-Googling
  - Technology
---
I recently bought myself the new [Raspberry Pi 3+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus) with the intention of setting up a [Nextcloud](https://nextcloud.com) server on it, for all my personal cloud needs. Let’s take a look at how things went…

## My Setup {#h-my-setup}

I have only owned one Raspberry Pi in the past, which is the original version, which now sits in a drawer, doing nothing. The Raspberry Pi 3+ is a huge improvement over the original, and it has the following specs:

  * Cortex-A53 1.4GHz CPU
  * 1GB RAM
  * Gigabit Ethernet (although this is limited to ~300Mbps)
  * 2.4GHz & 5Ghz B/G/N Wireless
  * Bluetooth
  * 4 x USB 2.0 ports

So I bought the Raspberry Pi 3+, a case, and a power supply from [The Pi Hut](https://thepihut.com), costing a total of £47.50 ($67.00) including delivery. I also bought a 120GB Kingston SSD and USB case, costing an additional £38.00 ($53.00).

{: .full-bleed}
![Raspberry Pi 3](/assets/images/raspberry-pi-3.webp){: loading="lazy"}

So in total, my hardware setup cost me a total of £85.50 ($120.00). Not very expensive when you consider I’m basically getting a mini-server.

<p class="notice">
  A Micro SD card is also required for the Pi’s OS, but I already had a number of these knocking around the house. I personally used a 32GB Sandisk Class 10, costing approximately £10 ($14).
</p>

## Installing Nextcloud {#h-installing-nextcloud}

Hardware – _check_. Let’s install Nextcloud!

There’s no reason why vanilla Nextcloud won’t work on a Raspberry Pi 3+. However I decided to go with [NextcloudPi](https://github.com/nextcloud/nextcloudpi), an optimised version of Nextcloud designed specifically for the Raspberry Pi.

One of the things I like about NextCloudPi, is that it also includes a tonne of extra goodies in the form of a second WebUI (or terminal UI) for administering your Nextcloud instance.

I’m not going to show you how to install NextcloudPi within this article, as it is already documented on [their Github wiki](https://github.com/nextcloud/nextcloudpi/wiki/How-to-install-NextCloudPi), but it is worth noting that NextcloudPi is an official re-spin of Nextcloud. If you need support, their forums are [here](https://help.nextcloud.com/c/support/appliances-docker-snappy-vm).

!! If you’re going to use NextcloudPi, DO NOT delete the NCP user. Instead, make sure you change its password to something secure. The account is used for a number of tasks at the back end, so deleting this user will break permissions etc.

As an extra layer of security, I only forwarded ports 80 and 443 to my NextcloudPi. The admin webGUI runs on port 4443 by default, and since I didn’t open that port, the admin webGUI is only available from inside my home network.

## Backups {#h-backups}

**Nextcloud is not your backup**, it’s a sync service. So if you accidentally delete a file on your machine, that change will immediately be synced to your server and that file is then lost.

I also have a Synology NAS drive, so I decided to automatically sync my Nextcloud data with my Synology via WebDAV (it does this at 03:00 every day so that changes aren’t immediated synced in to my backups). The Synology is then backed up every night to a locally connected USB drive, as well as another NAS that I have at my parent’s house, via a VPN.

This may seem like overkill, but I’ve lost data in the past. Trust me, backups help!

## My Experience {#h-my-experience}

When I initially set up Nextcloud on my Raspberry Pi 3+, I thought I had made a mistake, as the performance wasn’t all the good. In fact, it was downright crap. However, it quickly became apparent that the issue was because I was syncing all my data to the Pi, and I hadn’t throttled the bandwidth. Basically, I was DOS’ing my own Nextcloud box! :far fa-frown:

I set the bandwidth to throttle automatically within the Nextcloud app on my computers, and all was once again well in my little Nextcloud bubble.

In general, I haven’t experienced any negative performance impact. I was able to sync all 13GB of my data over night. The app is responsive on all my devices, any media I take on my phone is auto-uploaded and contacts/calendar are happily syncing over DAVDroid. I am a very happy camper. However…

<p class="notice">
  If you’re going to use NextcloudPi, DO NOT move the database away from the SD card.
</p>

I did this, thinking the database may fill up my 32GB SD card, but it won’t (I confirmed this with the NextcloudPi lead developer). All it did do was cause a severe corruption to the database, and I had to reinstall NextcloudPi. another sadface

If you move the database to the USB drive, all you’re doing is adding more I/O to an already overloaded USB bus (Ethernet shares the USB bus). So save yourself a lot of hassle and keep your database on your SD card.

## Conclusion {#h-conclusion}

In conclusion, I am extremely happy with my little instance of Nextcloud on a Raspberry Pi 3+, but I suppose it all boils down to one question…

#### Would I recommend Nextcloud on a Raspberry Pi 3+ to anyone else? {#h-would-i-recommend-nextcloud-on-a-raspberry-pi-3-to-anyone-else}

Well, the system cost me £85.50 ($120.00) in total. My 4 disk, RAID5 Synology cost £700.00 ($985.00). Yet I’m using Nextcloud to carry out the exact same functions as I did on my Synology.

Sure, the Synology is much more robust in terms of hardware, and is the more mature product. But when I next decide to spend serious money on this kind of solution, I will probably go for a traditional server, and install Nextcloud, rather than another Synology device.

So then, back to my question – would I recommend Nextcloud on a Raspberry Pi 3+? **ABSOLUTELY!**

#### Update 24/05/18 {#h-update-24-05-18}

The main developer for NextCloudPi has been in touch (see comments section below) and provided some feedback:

  * **_NCP-Web_** – ncp-web (the additional admin webGUI bubdled with NextCloudPi), use on port 4443, is only available from within the local network by default. It doesn’t matter if you forward port 4443 or not, it won’t load from the Internet.
  * **_The NCP User_** – The ncp user is used solely to access ncp-web. It can’t be used for anything else (by default). If it is deleted you will lose access to ncp-web but you can still use ncp-config tool from command line. Access to NextCloud is not affeected if this user is deleted.
  * **_Backups_** – NC is only synchronisation, but NCP adds strong backup capabilities. You can auto backup your data/database, and create [BTRFS](https://en.wikipedia.org/wiki/Btrfs) snapshots of your data that you can sync to other machines. Also there is an rsync helper to mirror your datadir externally.
