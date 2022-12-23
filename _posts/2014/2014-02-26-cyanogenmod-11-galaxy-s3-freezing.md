---
title: 'CyanogenMod 11 Galaxy S3 Freezing'
date: '2014-02-26T11:21:00+00:00'
layout: post
permalink: /cyanogenmod-11-galaxy-s3-freezing/
categories:
    - Technology
---

Over the past 24 hours, I’ve been having a right nightmare upgrading my Samsung Galaxy S3 to CyanogenMod 11. After getting an update alert, I duly updated; but my device decided to start freezing every minute or so – requiring a reboot to fix the problem.

I tried flashing, factory resetting, wiping the cache and even formatting the /system partition, but nothing worked and the device kept locking up shortly after every boot. So I thought I’d write this quick post on how I fixed the issue, maybe it will help some of you.

## Fixing the issue

After trying all different versions of CyanogenMod, even earlier ones than I had originally had on my phone, I finally managed to get it working. Here’s basically what the process entails:

1. Flash back to stock Samsung ROM using Odin.
2. Flash CyanogenMod 11 on to your device using the CM installer.

Going though this process allowed me to get the phone working again on the stock Samsung ROM, and from there, I could use the [CyanogenMod installer](https://web.archive.org/web/20150102220605/http://get.cm/) to re-flash the phone with CyanogenMod 11 – which worked beautifully.

## Flashing back to stock

If you can flash your Galaxy S3 to Cyanogen, then you should be able to flash it back. But I’ll add some instructions anyway. You’re going to need two pieces of software, the first being [Odin](https://web.archive.org/web/20150102220605/http://android.sc/download-odin-3-09/), which will speak to your phone and push the ROM, and the second is your Samsung ROM, I got mine from [Samsung Updates](https://web.archive.org/web/20150102220605/http://samsung-updates.com/device/?id=GT-I9300) (note: the BTU region is the UK, make sure you download the correct regional version).

To actually do the flashing, [follow this guide](https://web.archive.org/web/20150102220605/http://tutorialfor-android.blogspot.co.uk/2012/08/how-to-flash-firmware-to-galaxy-s3-via.html). It should be everything you need to get back to stock Android on your Galaxy S3.

**Note: I had problems with first boot after flashing, so I went back into the boot manager and selected factory reset, cleared the cache – the device then booted just fine.**

## Getting back to CyanogenMod

This is by far the easiest part. You simply follow the instructions found on the [CyanogenMod installer page](https://web.archive.org/web/20150102220605/http://get.cm/), the program does all the clever stuff for you. I now have CyanogenMod 11 on my Galaxy S3 and I’m very happy. Just a shame it took so long to get it all working.

**IMPORTANT NOTE: This process requires you to wipe your device. That means ALL of your data will be removed from your device. So make sure you take all necessary steps to back up your data BEFORE attempting this process.**

**I cannot be held responsible for any data loss resulting in you carrying out this process. I’m only trying to help you guys save some time. Don’t be a mong, back up your data.**