---
title: How to backup a Synology to Backblaze B2
layout: post
permalink: /how-to-backup-a-synology-to-backblaze-b2/
description: I'm backing up my Synology to Backblaze B2. If you want to know how to backup a Synology to Backblaze B2, this post may help.
categories:
  - Technology
---
{: .tldr}
I recently wrote a post about [moving from Nextcloud to Synology](https://kevq.uk/moving-from-nextcloud-to-synology/), in that post I mention how I&#8217;m backing up to Backblaze B2. This post explains how I configured that.

So you want to backup a Synology to Backblaze B2? Well, so does my friend and [Fosstodon](https://fosstodon.org) co-founder, Mike Stone who asked for more detail around how I backup to Backblaze B2 storage. Fosstodon has a limit of 500 characters and that wasn&#8217;t going to cut it, so I decided to write a post instead.

## Synology Cloud Sync {#h-synology-cloud-sync}

So to backup to B2, I&#8217;m using the [Synology Cloud Sync](https://www.synology.com/en-us/dsm/feature/cloud_sync) application. This is easily installed with a single click via the Synology Package Manager.

Personally I backup all user home folders, as well as our Family Share folder to B2. I _could_ backup all the media on my Synology, but that would be very expensive. I tend to make sure that my crucial data is still available, even if I lose all my local data. Multimedia files aren&#8217;t crucial and can be replaced, so I&#8217;m comfortable with just having local backups for that.

<img loading="lazy" width="896" height="524" src="/assets/images/wp-images/2020/03/synology-cloud-sync.jpg" alt="Synology Cloud Sync" class="wp-image-1226" srcset="/assets/images/wp-images/2020/03/synology-cloud-sync.jpg 896w, /assets/images/wp-images/2020/03/synology-cloud-sync-300x175.jpg 300w, /assets/images/wp-images/2020/03/synology-cloud-sync-768x449.jpg 768w" sizes="(max-width: 896px) 100vw, 896px" />  

## Adding a new backup {#h-adding-a-new-backup}

I&#8217;m not going to take you through the process step by step, as it&#8217;s pretty straightforward. What I will do though, is show you how I&#8217;ve configured my backups and what those settings mean.

Here is a screenshot of the configuration for one of my B2 backup routines:

<img loading="lazy" width="897" height="526" src="/assets/images/wp-images/2020/03/synology-cloud-sync-config.jpg" alt="Cloud Sync Config" class="wp-image-1228" srcset="/assets/images/wp-images/2020/03/synology-cloud-sync-config.jpg 897w, /assets/images/wp-images/2020/03/synology-cloud-sync-config-300x176.jpg 300w, /assets/images/wp-images/2020/03/synology-cloud-sync-config-768x450.jpg 768w" sizes="(max-width: 897px) 100vw, 897px" />  

### Encryption {#h-encryption}

When setting up the B2 backup routine, it&#8217;s _very_ important to ensure encryption is enabled. This means that all of your data is encrypted at rest, so nobody except you can access it.

You will be asked to configure and encryption passphrase. Once configured, Synology will download certificates so you can decrypt your data later.

<p class="notice">
  <strong>Keep both the certificates and passphrase safe. If you lose either of these, you will not be able to retrieve your data!</strong>
</p>

### Sync Direction Settings {#h-sync-direction-settings}

Set this option to &#8220;**_Upload Local Changes Only&#8221;_** and check the box that says &#8220;**_Don&#8217;t remove files in the destination folder&#8230;&#8221;_** Using both of these settings means that files will only sync one way &#8211; up to Backblaze. And if you delete a file, that deletion will _not_ be synced.

### Duplicates {#h-duplicates}

Let&#8217;s say you have a spreadsheet you use to manage your finances. You add your monthly finances for January, then again in February. Cloud Sync will _not_ overwrite your finances file with the new revisions.

Instead, Backblaze treats duplicated files as a new version. Now, this may result in you using more storage within your B2 bucket, but the cost probably won&#8217;t be significant. Plus it will allow you to roll back if you need to.

I personally set the _Lifecycle Settings_ within my buckets to 14 days. This means that B2 will keep 14 days worth of versions for any file.

<div class="wp-block-image is-style-twentytwentyone-border">
  <img loading="lazy" width="560" height="444" src="/assets/images/wp-images/2020/03/backblaze-bucket.jpg" alt="Backblaze Bucket Settings" class="wp-image-1235" srcset="/assets/images/wp-images/2020/03/backblaze-bucket.jpg 560w, /assets/images/wp-images/2020/03/backblaze-bucket-300x238.jpg 300w" sizes="(max-width: 560px) 100vw, 560px" />
</div>

### Cost {#h-cost}

Backblaze B2 is _**really**_ cheap. For example, I have 2 buckets &#8211; one for home folders and the other for our family share. Over the 2 buckets, I have approximately 150GB of data stored in B2.

**My invoice for January 2020 was just $0.39!** Backblaze have an [online calculator](https://www.backblaze.com/b2/cloud-storage-pricing.html) that should give you an idea of what backing up to their service will cost you.

## Conclusion {#h-conclusion}

This post should give you a good idea of how to backup a Synology to Backblaze B2. To be honest, it&#8217;s easy to configure and once it&#8217;s done, you can pretty much set it and forget it. Just make sure you do a test restore!

If you have any questions about this process, please feel free to [get in touch with me](https://kevq.uk/contact/).
