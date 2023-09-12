---
title: Moving from Nextcloud to Synology
layout: post
permalink: /moving-from-nextcloud-to-synology/
description: A while back, I moved away from my old Synology to a home built server running Nextcloud. I've now returned to Synology. This post explains why.
categories:
  - Technology
---
{: .tldr}
Following a hardware failure in Feb 2019, I moved away from my old Synology to a [home built server](https://kevq.uk/building-my-home-server/) running Nextcloud. I&#8217;ve now moved back to Synology. This post explains why.

So why move from Nextcloud to Synology? I think [Nextcloud](https://nextcloud.com) has the potential to be a great piece of software, but my personal opinion is that they're trying to force too many &#8216;features' in prematurely. This, for me at least, has resulted in an experience that leaves a lot to be desired. I've touched on this before in my post, [Nextcloud talk is crap](/nextcloud-talk-is-crap/).

But it wasn't just Nextcloud that was the problem - having to be a SysAdmin on the home server was starting to get old. I used the server for 3 main things:

  1. Nextcloud (file sync)
  2. Plex (media streaming)
  3. Duplicati (backups)

I was finding that I had to regularly fix one or more of those components when something inevitably went wrong. That's when I decided to make a change.

## From Nextcloud to Synology {#h-from-nextcloud-to-synology}

I was lucky enough to get my end of year bonus from work, so I decided to invest in a new Synology. Previously I have a 4 disk solution with 4x1TB disks in a RAID5. This time, I decided to go for the DS218+, which has 2 drive bays. So I went with 2x4TB drives in a RAID1. I also upgraded the system RAM from 2GB to 6GB.

The data migration was so simple to do. It was simply a case of dumping all my data from the old server to a USB hard drive, then dumping it all onto the Synology.

Finally I installed the Synology Drive client onto all of our machines and copied the local data from the Nextcloud folder to the Synology Drive folder. Once the Synology had checked all the data matched up, we were good to go. The data migration was done in a morning.

## Setting Up Plex {#h-setting-up-plex}

All of my media files were already dumped onto my USB drive. So all I had to do was setup a new share in the Synology GUI, dump my media into it, then install the Plex app in the Synology Package Centre.

![](/assets/images/plex-app-synology.png) 

The final step was to setup the libraries and associate the Synology with my Plex account and I was good to go. This whole process took less than an hour to do.

## Backups  {#h-backups}

The final part was to setup backups, after all, if you have data that isn't backed up, you might as well not have the data at all. I wanted to follow the 3-2-1 backup rule, [just like I did on Nextcloud](/how-to-backup-nextcloud/).

Synology has backup apps that can be easily installed and configured, so this was also trivial. Along with the Synology, I bought a new 8TB USB hard drive for backing up locally. I installed the Hyper Backup app and configured it to backup all my important data to USB every night.

For off-site backups, I installed the Synology Cloud Sync app, which syncs my data in real-time to the cloud; for me, this is a Backblaze B2 bucket. If an item is deleted locally, that change is not synced. Cloud Sync also stores a number of file versions for any files that have changed.

All of my backups are encrypted at rest, and the Cloud Sync data is encrypted before being transferred to Backblaze, so I know my data is secure. Configuring the backups also took around an hour. All I had to do was wait 24 hours for my backups to complete and I was good to go.

The only thing I need to do now is carry out a test restore of some data from all of my backups, then I know I'm good. I'll probably do that this weekend.

## Conclusion {#h-conclusion}

I'm really happy to be back on Synology because everything just works. Updates are all handled through the GUI, and cam be done automatically, so there is very little admin overhead.

The Synology platform also offers a wider range of apps, all of which work extremely well, unlike many of Nextcloud's apps. I'm now exploring what else I can start self-hosting on my Synology, as it's usually as simple as installing an app and clicking a few buttons to configure it.

Overall, I think Nextcloud has a _really_ long way to go before it's as good as services like Synology. Hopefully one day they will get there, but for now, I'm gonna stick with my Synology.
