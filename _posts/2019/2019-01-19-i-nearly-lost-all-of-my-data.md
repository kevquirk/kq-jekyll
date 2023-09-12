---
title: I Nearly Lost All Of My Data!
layout: post
permalink: /i-nearly-lost-all-of-my-data/
categories:
  - Technology
---
Picture the scene – I’m in the office doing some work on my personal laptop, and all of a sudden my Synology Drive system tray icon says it can’t connect to my server. At first I wasn’t concerned as this kind of thing happens from time to time – probably just an ISP issue at home, I thought.

Fast forward a few hours; I go home to find my Synology NAS was powered off. Our cleaner had been in that day, so I assumed she had probably just unplugged it by mistake. So I try to power it back on – nothing. The device was comepletely dead.

## Shit! {#h-shit}

My Synology has 4 x 1TB disks in a RAID 5, which also backs up my most important data to a 1TB external USB drive every evening – I wasn’t concerned about my data. What I was worried about was having to potentially stump up the cash for a new Synology, as they’re not cheap.

Ok, so I unplug the USB drive, take it upstairs and hook it up to my desktop – I needed to start pulling the data off this thing so I have a backup of my backups.

I plug it in, switch it on, and the disk doesn’t spin up. Just like the Synology, I was getting absolutely nothing from the USB drive either.

## Double shit! {#h-double-shit}

At this point I’m really worried. You see, I cancelled my off-site Amazon Glacier backups around 6 months ago. What are the chances of both a 4 disk RAID failing AND a USB drive at the same time? Not likely, I thought. Boy was I wrong.

![](/assets/images/old-data-setup.png)

My Synology stored all of my data, all of my partner’s data, all of our videos, pictures, music etc. plus a tonne of other stuff, like website backups. Problem is, only my data and my partner’s data backed up to the USB. Just the crucial stuff.

By this point I’m REALLY worried, but I have 1 saving grace – maybe this is a problem with the enclosures and the disks are fine. I hit the Internet looking for answers.

## The Answer? {#h-the-answer}

After lots of research, I finally come across [this article on Synology’s knowledgebase](https://www.synology.com/en-us/knowledgebase/DSM/tutorial/Storage/How_can_I_recover_data_from_my_DiskStation_using_a_PC). It’s gotta be worth a try, I though. However, my desktop didn’t have enough SATA ports to mount all 4 drives.

I hit Amazon Prime, order a SATA card for next day delivery, then spend the next 24 hours panicking.

Fast forward 24 hours, I get home from work and my Amazon Prime box is waiting for me. I rush up stairs, setup the drives and run through the Synology restore guide.

![](/assets/images/synology-drive-desktop.jpg)

I hit the power button on the desktop. **_Please work, please work, please effing work!_** I’m saying to myself over and over. I hear all 4 drives start to spin up – we’re half way there, folks!

Twenty agonising minutes later I have the LVM RAID configured on my machine and I can browse the entire array. Holy shit, IT WORKED!

I don’t know what happened for sure, but I think it may have been a power surge that fried the boards on both the Synology and the USB, as they were plugged in to the same socket.

## The Aftermath {#h-the-aftermath}

I’m not out of the woods yet – I still have a tonne of data to pull off these drives. My biggest problem at this point was that I disn’t have anywhere to store all the data.

It’s now 6 days since my NAS & USB backups crapped out on me, and I’m STILL restoring data from the drives. However I’m around 95% of the way there now, and I hope to have it all finished this evening.

I have my data back…phew! But now my network and data are a complete shambles. I have bits of data spread over a number of USB drives that I cobbled together, as I have no NAS.

It’s clear that I not only need to replace my old solution, but I also need to come up with a more robust one too. I have been doing a tonne of research on what to do next, and I think I now have a plan. So keep an eye out on this blog for part 2 of this story, where I will hopefully be able to tell you that I’ve fully recovered and that I have a more robust solution in place.

**Do you have any data loss horror stories? Please make me feel better and tell me yours in the comments below.**
