---
title: My Home Server – 2 Months On
layout: post
permalink: /my-home-server-2-months-on/
categories:
  - Technology
---
![](/assets/images/server-update-feature.jpg)

I recently wrote about how [I nearly lost all my data](/i-nearly-lost-all-of-my-data), then later I wrote about how I recovered from that by [building a new server](/building-my-home-server). The new server has now been in place for a couple of months, so I thought I would give you guys an update.

## Not Plain Sailing {#h-not-plain-sailing}

I knew that building the new server would be difficult; things were likely to change and it was all going to be a case of trial and error.

If you look at the [building my home server post](/building-my-home-server), you will see that I decided to go with Syncthing for file sync, Plex for media, UbuntuMATE as the OS and Cloudberry for the cloud backups.

After a week or so of use, I noticed that I was having stability issues where my server would completely lock up and stop responding. After some investigation, it was clear that the issue was Cloudberry. I removed Cloudberry and replaced it with Duplicati – no crashes since.

{: .tip}
Don’t waste your money on a Cloudberry license. Install <a href="https://www.duplicati.com">Duplicati</a> instead and donate the license fee to them.

## Other changes {#h-other-changes}

Once the system was stable (or so I thought) I happily went about my business assuming all was well in the world. That was until I booted up my laptop one day to find that Syncthing had deleted the entire contents of my Documents folder.

I assumed it was something I had done by accident. At the time I was moving a lot of data around, as I was working through the restoration of various backups. Maybe I had deleted the wrong folder and it had synced? Luckily I had file versioning turned on, so restoring the data was just a couple of clicks.

Weirdly, when I restored the the data, it did so to the root of my home folder, not /Documents. Again, a minor frustration that I could easily work around.

Fast-forward another few days and the same thing happened again, but this time it was my Photos folder. Then again a few days later to my Documents folder again.

I had no idea what was happening here and there was no details as to what was happening in the Syncthing logs. Enough was enough, I couldn’t trust Syncthing so I decided to move to something else.

## Nextcloud {#h-nextcloud}

I had used Nextcloud in the past, but had a number of issues with it, so I went into this with a healthy amount of trepidation.

First time around I installed Nextcloud from the snap package. This was trivial to setup, but the sandboxing was causing issues when it came to backing up. So I ended up installing Nextcloud manually (guide coming soon).

I’m happy to report that since I last used Nextcloud, the syncing functionality has improved a lot. I haven’t had any issues with file syncing at all. However, that’s all I’m using it for, so I can’t comment on how the other Nextcloud apps perform.

I installed the Nextcloud app on my iPhone and all my photos are backing up perfectly. I just need to remember to open the Nextcloud app once in a while, as it doesn’t seem to check for new files in the background. That’s not a big deal though.

## The Result {#h-the-result}

I’ve since bought a cheap Dell monitor from Amazon, just so I didn’t have to keep the old TV connected. I’ve also been successfully backing up my data to both a local USB and Backblaze B2 every night.

Duplicati is configured to send me backup reports via email (guide coming soon on that too), so I know if anything has failed. I’ve also done test restores from both USB and Backblaze; both of which were successful.

You may have noticed that I haven’t mentioned Plex during this entire post. That’s because it has been faultless; you just set it and forget it. Yes, it’s proprietary software, but it works **_really_** well.

![](/assets/images/plex-webui.jpg)

I’ve now been running Plex, Nextcloud, Duplicati and Backblaze B2 together for around 6 weeks without issue.

My files are synced everywhere I need them. The photos I take on my phone are automatically synced to the server. I can stream movies and music with ease on all my devices and everything is backed up to multiple locations.

## The Cost {#h-the-cost}

Building my new server has been a lot of work, but it really has been worth it. I now have a server that should last me for years to come and as a bonus, it has cost me a fraction of what my Synology did.

The final costs in both time and money look something like this:

  * Build time (inc. issues & research) – approx. 24 hours
  * Hardware (case, CPU, PSU, RAM, SSD) – £290
  * Dell monitor – £20
  * Monthly B2 charges (approx 20GB) – £0.08

If you’re thinking about running your own server at home, I’d strongly recommend it. However, be prepared for lots of research and troubleshooting in the initial build stages.

**Are you running your own server at home? I’d love to hear about your setup in the comments below.**
