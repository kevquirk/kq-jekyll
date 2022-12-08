---
title: Building My Home Server
layout: post
permalink: /building-my-home-server/
categories:
  - Privacy
  - Technology
---
I recently wrote about how [I nearly lost all my data](/i-nearly-lost-all-of-my-data). Honestly, it was a blessing in disguise as I now have a far more powerful and capable server to store and backup my data.

After a tonne of research and a few trips to the post office to return hardware, I think I now have a setup that I’m happy with. In this article I’m going to take you through my new setup and what it cost me.

## The requirements {#h-the-requirements}

Let’s start with a simple list of what I need the new server to do. I had numerous single points of failure in the old system, so the new setup needed to fix that.

Here’s what I needed:

  * Good performance
  * Local backups
  * Off-site backups
  * Media streaming
  * File syncing
  * Surge protection

## The new hardware {#h-the-new-hardware}

Initially I decided to go with a simple ODRIOD device. My old Synology only had 512MB RAM and a dual core ARM CPU, so even the ODROID was a significant upgrade.

However, after some initial testing I decided the ODROID wasn’t for me as the one I bought was designed to be on a headless setup and I wanted a GUI to make admin simple.

## Attempt #2 {#h-attempt-2}

Second time around I decided to not be cheap and stump up the cash for a decent system. Doing so would mean I have more options open to me; the server will likely be in production longer and it will give me more flexibility overall.

So I went shopping again and bought an ITX rig with the following specs:

  * AMD A8-9600 Quad-core 3.1 GHz CPU
  * 4GB DDR4 RAM
  * 120GB SSD for my root partition
  * 512GB SSD for my home partition
  * 1TB HDD for media (Synology donor)
  * 1TB USB HDD for local backups (Synology donor)

<img loading="lazy" width="1000" height="750" src="/assets/images/wp-images/2019/11/server-hardware.jpg" alt="" class="wp-image-188" srcset="/assets/images/wp-images/2019/11/server-hardware.jpg 1000w, /assets/images/wp-images/2019/11/server-hardware-300x225.jpg 300w, /assets/images/wp-images/2019/11/server-hardware-768x576.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" />  

## The software {#h-the-software}

I chose [UbuntuMATE](https://ubuntu-mate.org) with the minimal install option as the base OS. Some people may think having a GUI on a server is a waste of resources, but I like to have a GUI that I can login to.

Plus, the server has more than enough resources to cope with the “demands” of a GUI. If lack of RAM becomes an issue, I’ll install another DIMM.

To carry out the various tasks that I need the server to accomplish, I went with:

  * File sync – [Syncthing](https://syncthing.net)
  * Media streaming – [Plex](https://plex.tv)
  * Local backups – [Cloudberry](https://www.cloudberrylab.com/subdomains/backup/backblaze/linux.aspx)
  * Off-site backups – [Blackblaze B2](https://www.backblaze.com/b2/cloud-storage.html)

## The good {#h-the-good}

For the most part the new server works really well. Syncthing is an absolute gem of an application and I’ve had no issues with it.

Plex is also great. I already had a Roku box in my living room, so installing a Plex server seemed like a no-brainer to me. Again, no real issues there either

Cloudberry is basically a graphical front-end for Duplicity, but it is well integrated with BackBlaze so I use this for both my local and off-site backups.

Performance is also really good. I just checked the system resources whilst a backup was running and streaming a movie from Plex. I’m using around 20% of the CPU and 1.5GB of RAM – plenty of burst resources if I need them!

## The not so good {#h-the-not-so-good}

The only thing I’m really struggling with at the moment, is photo backups from my smartphone. Had I been using Android I could simply setup Syncthing to backup my photos, but [I recently ditched Android](/why-im-ditching-android).

I’m currently using iCloud to backup my photos, but it’s not ideal as they’re not synced with my other devices and I don’t really want my photos sitting in an Apple data center.

To get around this I’m thinking about buying a Plex Pass, which includes mobile photo syncing. But I’m still getting to grips with Plex, so I haven’t done so yet.

## The cost {#h-the-cost}

I’ll start by putting things in to perspective – my Synology plus the 4x1TB hard drives were approximately £500 ($650) when I bought it 5 years ago.

The cost of the new rig is broken down as follows:

  * ITX hardware – £300 ($392)
  * Cloudberry – £23 ($30)
  * Backblaze B2 – Approximately £5 ($7) per year
  * Total cost: £328 ($430)

The cost was obviously reduced as I was able to re-purpose my 1TB drives from the Synology for use with this project. However, even if that was not the case, I’d still have a much more powerful and versatile setup for around the same cost.

## Is this the end? {#h-is-this-the-end}

So I now have a pretty powerful server that’s streaming my media, syncing my data and backing it up to multiple locations.

I do need to make a decision on what I’m going to do about my photo backups. That’s likely to either be a Plex Pass, or I’ll add a Nextcloud instance to the server – I’m not 100% sure what I’m going to do yet, but I have multiple options.

Overall this has been a great learning experience for me, and I think I now have a pretty safe routine, where my data is safe under most circumstances.

#### Oh, I also have a surge protector now too! ? {#h-oh-i-also-have-a-surge-protector-now-too}

**Are you rolling your own server? If so, I’d love to hear what your setup is in the comments below.**
