---
id: 2572
title: 'Synology vs Nextcloud &#8211; Which Is Better For A Home Server?'
date: 2020-07-11T22:36:54+01:00

layout: post
permalink: /synology-vs-nextcloud-which-is-better-for-a-home-server/
description:
  - This post is a comparison of Synology vs Nextcloud based on my needs for a home server and my experience with both products.
categories:
  - Opinion
  - Technology
---
Before I get hung out to dry by the Internet, I'd like to point out that this comparison of <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://synology.com" target="_blank">Synology</a> vs <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://nextcloud.com" target="_blank">Nextcloud</a> is my **opinion** only. It is based solely on my needs and my experiences with both products.

**TL;DR** - I think Synology is a far superior product.

## My experience with Synology & Nextcloud {#h-my-experience-with-synology-nextcloud}

I wanted to preface this post by mentioning the experience I have with the two products - I'm currently running a Synology device as my home server and previously ran a different Synology device for ~5 years.

That first Synology [ended up dying](/i-nearly-lost-all-of-my-data/) and I decided to replace it with a [home built server running Nextcloud](/my-home-server-2-months-on/). I ran that for around a year and a half, before going back to Synology.

So when talking about Synology vs Nextcloud, I would say I have a fair amount of experience with both.

Right, enough waffle; let's crack on with the post&#8230;

## My home server needs {#h-my-home-server-needs}

I suppose a good place to start would be to talk about my needs from a home server. To be honest, they're pretty basic as server hosting goes.

There are only three things I need from my home server, which are:

  1. File syncing & storage
  2. Media streaming & storage
  3. Backups

That's pretty much it. I do use my server for other things, but these 3 services are the crucial ones. Everything else is just me mucking around.

## File syncing & storage {#h-file-syncing-storage}

This is the bread and butter of both the Synology and Nextcloud. And to be honest, both do this very well. On Nextcloud, I had very few duplicate files and syncing was relatively quick.

However, when it comes to the mobile experience, the Nextcloud files app is pretty poor. There are options to backup photos automatically as they are taken, but I never managed to get this to work right. Instead, they would just queue up in the app and wouldn't actually upload to the server until I opened the app on my device.

Not very automatic, is it?

I use the Synology Drive application to sync files across all my devices - Windows, Linux and iOS. Everything works great. Photos are synced automatically using the Moments app, and unlike Nextcloud, it all works flawlessly.

![](/assets/images/synology-drive.png)  

So the desktop experience for Synology vs Nextcloud is pretty much on par. But the mobile experience has been far superior for me on Synology.

## Media streaming & storage {#h-media-streaming-storage}

When my wife and I get some downtime from the kids, we like to watch TV. We have Netflix and Amazon Prime, but we also like to stream stuff from our home server.

I wasn’t able to find such a service within Nextcloud, so I opted to install a <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://www.plex.tv/" target="_blank">Plex server</a> instead. Plex is a great service, but it was another piece of software for me to maintain on my server.

When I think _cloud_, I usually think _multimedia_ too. So the fact that Next_cloud_ has no way of managing a video library is a shame, and a big gap I think, as many people use their home server/NAS for streaming.

Synology has the <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://www.synology.com/en-uk/dsm/feature/video_station" target="_blank">Video Station</a> app for streaming videos using my web browser. There are also accompanying apps for my Apple devices, and my Roku streaming boxes. So I can access my video library from pretty much anywhere - big win!

![](/assets/images/synology-video-station.jpg) 

I could also install Plex on my Synology if I wanted, but I decided to just use their native Synology app as it works really well and saves me from using 3rd party applications from outside of the Synology ecosystem.

## Backups {#h-backups}

Your file syncing application of choice is **not** your backup. Backups should always follow the 3-2-1 backup rule.

> At least 3 copies of your data in 2 different locations, 1 of which needs to be off-site.
>
> <cite>The 3-2-1 backup rule</cite>

Again, Nextcloud falls flat on its face here and has absolutely nothing for backing up either locally or off-site. Another big miss. So when running Nextcloud, I had to install yet another application - <a aria-label="undefined (opens in a new tab)" href="https://www.duplicati.com/" target="_blank" rel="noreferrer noopener">Duplicati</a>.

Like Plex, Duplicati is an excellent application that works really well. But at this point, I not only had Nextcloud to maintain, but also the OS, Plex _and_ Duplicati. This became a much bigger beast than it needed to be.

Synology on the other hand has a native application - <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://www.synology.com/en-global/dsm/feature/hyper_backup" target="_blank">Hyper Backup</a>. I use this to backup all of my important data locally, then I use another native Synology app, <a aria-label="undefined (opens in a new tab)" rel="noreferrer noopener" href="https://www.synology.com/en-global/dsm/feature/cloud_sync" target="_blank">Cloud Sync</a>, for my off-site backups to Backblaze B2.

If you want to know more, [this post](/how-to-backup-a-synology-to-backblaze-b2/) talks about my Synology off-site backups in more detail.

![](/assets/images/synology-hyper-backup.png)  

## Maintenance {#h-maintenance}

At this point Nextcloud had failed in everything I needed of it outside of basic file syncing. If that's all you need, then Nextcloud is a lot cheaper to setup in terms of money in the bank. But in terms of maintenance and your time, it's still a lot more expensive than Synology.

You see, even if you decide you only need to run Nextcloud for syncing files and that's all your server will do, you will still have the operating system to maintain.

If, like me, you decide to run other applications outside of what Nextcloud offers, then you will need to include the maintenance of those apps too. And, let's not forget here, all it takes is for one of those updates to go wrong and your entire server could be toast (thank goodness for containers!)

I think it's important to say here, that if you opt for the Nextcloud snap package, maintenance is much reduced as snaps update automatically. This is what I was doing on my Nextcloud server, but I got sick of waiting for the snap package to actually be upgrade by the Nextcloud team.

In my experience, the snap package was very much a second class citizen and it was way behind the other packages. I hope this has improved since I stopped using it.

With Synology, the OS and applications are all managed via the same web interface. So whether you need to install updates for your applications, or the OS, everything is managed from the same place. It’s literally a single button click. Plus, In all the years of using Synology, I've never known an update to cause an issue with the system.

Unfortunately the same can’t be said for my Nextcloud updates - in the time I was using it, I had my system bork twice due to dodgy updates or dependency issues.

## Other issues with Nextcloud {#h-other-issues-with-nextcloud}

My experience with many of the Nextcloud &#8220;apps&#8221; is that many of them are shit to be frank.

Nextcloud Talk is a hot mess of slowness. Nextcloud Mail has a tonne of random errors when connecting to a mail server and sending mail. Not to mention it has a horrible user experience.

Nexcloud Contacts and Calendars regularly failed to sync via DAV. Nextcloud News had some weird errors that couldn’t be dismissed and only worked with an official mobile app. Not very open. 🙁

I could go on, but the general consensus with my experience of many of the Nextcloud apps, was that they had been very poorly implemented.

I personally felt that this was indicative of the Nextcloud team trying to run before they could walk - they're just trying to do too much, too soon.

## Conclusion of Synology vs Nextcloud {#h-conclusion-of-synology-vs-nextcloud}

So for me, when it comes to Synology vs Nextcloud there is no comparison - Synology wins all day long. Nextcloud is a good tool and has a bright future ahead of it (I hope).

You never know, I may even go back to it one day. But for the time being, since I need to do other stuff outside of basic file syncing, it's the Synology.

I also like the fact that Synology have tonnes of other apps that all work really well, so I can play around with the server. For example, if I want to add a _really_ good mail server to my Synology, it's just a few clicks away.

Need to take notes? Synology has an app for that. Stream audio? Yep, that's there. Torrent downloading? Check! DNS server, proxy server, Mattermost type chat application, VPN server, mail server, calendar, contacts even an office suite! It's all there.

Synology devices are not cheap, but I'm a firm believer in _you get what you pay for_ and in this case I think that’s really evident.

**Remember, this is just my opinion. If Nextcloud has proven to be a better solution for your needs, please feel free to tell me about it in the comments below.**
