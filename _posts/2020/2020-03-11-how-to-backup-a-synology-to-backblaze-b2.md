---
title: How to backup a Synology to Backblaze B2
layout: post
permalink: /how-to-backup-a-synology-to-backblaze-b2/
description: I'm backing up my Synology to Backblaze B2. If you want to know how to backup a Synology to Backblaze B2, this post may help.
categories:
  - Technology
---
{: .tldr}
I recently wrote a post about [moving from Nextcloud to Synology](https://kevquirk.com/moving-from-nextcloud-to-synology/), in that post I mention how I&#8217;m backing up to Backblaze B2. This post explains how I configured that.

So you want to backup a Synology to Backblaze B2? Well, so does my friend and [Fosstodon](https://fosstodon.org) co-founder, Mike Stone who asked for more detail around how I backup to Backblaze B2 storage. Fosstodon has a limit of 500 characters and that wasn't going to cut it, so I decided to write a post instead.

## Synology Cloud Sync {#h-synology-cloud-sync}

So to backup to B2, I'm using the [Synology Cloud Sync](https://www.synology.com/en-us/dsm/feature/cloud_sync) application. This is easily installed with a single click via the Synology Package Manager.

Personally I backup all user home folders, as well as our Family Share folder to B2. I _could_ backup all the media on my Synology, but that would be very expensive. I tend to make sure that my crucial data is still available, even if I lose all my local data. Multimedia files aren't crucial and can be replaced, so I'm comfortable with just having local backups for that.

![](/assets/images/synology-cloud-sync.jpg) 

## Adding a new backup {#h-adding-a-new-backup}

I'm not going to take you through the process step by step, as it's pretty straightforward. What I will do though, is show you how I've configured my backups and what those settings mean.

Here is a screenshot of the configuration for one of my B2 backup routines:

![](/assets/images/synology-cloud-sync-config.jpg)  

### Encryption {#h-encryption}

When setting up the B2 backup routine, it's _very_ important to ensure encryption is enabled. This means that all of your data is encrypted at rest, so nobody except you can access it.

You will be asked to configure and encryption passphrase. Once configured, Synology will download certificates so you can decrypt your data later.

<p class="notice">
  <strong>Keep both the certificates and passphrase safe. If you lose either of these, you will not be able to retrieve your data!</strong>
</p>

### Sync Direction Settings {#h-sync-direction-settings}

Set this option to &#8220;**_Upload Local Changes Only&#8221;_** and check the box that says &#8220;**_Don't remove files in the destination folder&#8230;&#8221;_** Using both of these settings means that files will only sync one way - up to Backblaze. And if you delete a file, that deletion will _not_ be synced.

### Duplicates {#h-duplicates}

Let's say you have a spreadsheet you use to manage your finances. You add your monthly finances for January, then again in February. Cloud Sync will _not_ overwrite your finances file with the new revisions.

Instead, Backblaze treats duplicated files as a new version. Now, this may result in you using more storage within your B2 bucket, but the cost probably won't be significant. Plus it will allow you to roll back if you need to.

I personally set the _Lifecycle Settings_ within my buckets to 14 days. This means that B2 will keep 14 days worth of versions for any file.

![](/assets/images/backblaze-bucket.jpg) 

### Cost {#h-cost}

Backblaze B2 is _**really**_ cheap. For example, I have 2 buckets - one for home folders and the other for our family share. Over the 2 buckets, I have approximately 150GB of data stored in B2.

**My invoice for January 2020 was just $0.39!** Backblaze have an [online calculator](https://www.backblaze.com/b2/cloud-storage-pricing.html) that should give you an idea of what backing up to their service will cost you.

## Conclusion {#h-conclusion}

This post should give you a good idea of how to backup a Synology to Backblaze B2. To be honest, it's easy to configure and once it's done, you can pretty much set it and forget it. Just make sure you do a test restore!

If you have any questions about this process, please feel free to [get in touch with me](/contact/).
