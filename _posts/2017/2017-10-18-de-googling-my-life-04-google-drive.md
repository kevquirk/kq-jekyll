---
title: De-Googling My Life 04 – Google Drive
layout: post
permalink: /de-googling-my-life-04-google-drive/
categories:
  - De-Googling
  - Privacy
description: I'm de-Googling my life and this time I'm looking at replacing Google Drive
---
Ok then, I’ve do-Googled myself from the simple stuff – search, browser, analytics and social media [are all done](/categories/de-googling). So that only leaves the tough stuff – Google Drive and Gmail (inc. contacts and calendar).

I’m pleased to say that I have found, and I’m using, replacements for both. However we’re going to focus on Google Drive in this article, before taking on the Goliath that is Gmail. Let’s jump in…

## Hey Kev, have you heard of Nextcloud? {#h-hey-kev-have-you-heard-of-nextcloud}

Whilst going through this whole process, I’ve been telling anyone who will listen that the series will come to a climax with the big two – Drive and Gmail. Whenever I have mentioned this, the unanimous response tends to be _“Kev, have you tried Nextcloud? It would be perfect for your needs.”_

Well, yes I have as it goes. I tried a number of different tools to replace Google Drive, but all lacked some kind of functionality, or I just wasn’t comfortable using the service (like Dropbox).

{: .full-bleed}
![Nextcloud files](/assets/images/nextcloud-files.webp)

## Nextcloud Features {#h-nextcloud-features}

Google Drive does a few things, but it does them really well. Namely syncing documents, and auto-backing up images from your devices. It also has an awesome document creation tool (formally Google Docs), but I edit all my documents in a traditional editor, so no problem there for me.

<p class="notice">
  <strong>Pro-tip:</strong> If you want a free and open alternative to Microsoft Office, try <a href="https://www.libreoffice.org">LibreOffice</a>.
</p>

Dropbox allows you to sync and backup your files, just like Google Drive. But they’re not exactly the most ethical company in the world, so I might as well be using Google Drive. I decided stick with [Nextcloud](https://nextcloud.com). It has been over a month now and I have to say, I’m VERY happy with my decision.

## Why is Nextcloud Better? {#h-why-is-nextcloud-better}

Nextcloud isn’t just a replacement for Google Drive, I actually think it’s far better for a number of reasons:

  * It syncs your files between all of your devices.
  * It not only backs up your photos automatically, but your contacts too.
  * You can install additional apps, so you can do things like check your mail, contacts and calendar (more on that in the next article).
  * It’s self-hosted, so you stay in control.
  * It’s open-source, and extremely well maintained. The development team are big on privacy, and they respect it.

## More Security {#h-more-security}

As well as Nextcloud, I also have a Synology NAS at home which I wanted to incorporate in to my file syncing somehow. Both Synology and Nextcloud support open standards, so I was able to connect my Nextcloud instance and Synology NAS together via WebDAV.

Any changes I make to my files on Nextcloud are automatically synced to my Synology, and vice versa. From there, they’re backed up to a USB disk every night, as well as backing up to Amazon’s Glacier backup system every week.

So with my data being stored in multiple places all at once, and on systems I completely control (well, except for Amazon, but the backups are encrypted locally before being uploaded), I think I have not only replaced Google Drive, but I have completely surpassed it.

Well done Nextcloud, you have created an incredible tool!

**Are you a Nextcloud user, or do you use something else? Maybe you’re also de-Googling your life? I’d love to hear about your experience in the comments…**

**You can find links to all posts in this series by [clicking here](/category/de-googling).**
