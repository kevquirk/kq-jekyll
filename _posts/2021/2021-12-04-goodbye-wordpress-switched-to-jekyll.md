---
title: Goodbye WordPress, I've Switched To Jekyll (Again)
date: 2021-12-04T14:40:00+00:00
image: /assets/images/wordpress-jekyll-feature.webp
layout: post
permalink: /goodbye-wordpress-switched-to-jekyll/
description: I've decided to leave WordPress behind and switch to Jekyll...for a second time. This post explains why...
categories:
  - Blogging
  - Web
---
{:  .tldr}
I've decided to leave WordPress behind and switch to Jekyll...for a second time. This post explains why.

A couple of months ago, I decided I would flip my site back over to the static site generator (SSG), [Jekyll](https://jekyllrb.com/). I'm sure most of you are probably sick of seeing these kind of posts on this blog, and I understand why, but I think this time around it's more than me wanting to play with something different.

**I think... 🙃**

## The background saga
Back in September, I wrote about [my hunt for better WordPress hosting](/the-hunt-for-better-wordpress-hosting/). In that post I listed all the services I was using to support my blog.

It was a long list and it made managing the entire site complicated, not to mention expensive. After totting it all up, the WordPress blog was costing me nearly $400/year:

| Service  |  Annual price ($)  |
|---|---|
|  VPS hosting  | $105.00  |
| Yoast Premium  |  $123.00 |
| Newsletter Glue  |  $76.00 |
| WP Rocket  | $49.00  |
| Updraft SFTP Plugin  |  $16.50 |
| Bunny CDN  | $12.00  |
| **Total:** | **$381.50**  |

While I can afford that, it feels excessive and is more than I'd like to spend on a website. I started looking for alternatives that were both cheaper, and meant that I didn't have any infrastructure to maintain.

### Alternative hunting

Every alternative WordPress solution ended up being more expensive in the long run, having a server to maintain, or being a compromise in some other way.

The best solution I could find within the WordPress ecosystem was [EasyWP](https://easywp.com), with Bunny CDN, Jetpack Boost and manually managing my newsletter via [Buttondown](https://buttondown.email).

This solution would have ended up costing around $150/year:

| Service  |  Annual price ($)  |
|---|---|
|  EasyWP hosting  | $108.00  |
| SSL Certificate | $12.00 |
| Yoast Standard  |  Free |
| Buttondown  |  Free |
| Jetpack Boost  | Free  |
| Updraft SFTP Plugin  |  $16.50 |
| Bunny CDN  | $12.00  |
| **Total:** | **$148.50**  |

This solution gave me everything I had before for less than half the price, but...

### The compromises
Although EasyWP is a managed solution, so I'd have no server to maintain, I'd still need to buy and install an SSL certificate every year.

{: .notice}
Some of EasyWP's packages do offer free SSL certs, but I'd need to have my name servers pointing to Namecheap and I didn't want to do that.

EasyWP doesn't offer any kind of Git integration either, so if I want to make changes to the site (which I do regularly) I'd need to log into EasyWP, temporarily unlock SFTP access, then upload any edits.

**Ain't no one got time for that!**

I'd also have to manage site backups manually, as well as posting to my newsletter. So although it's half the price, I was re-introducing a lot of manual effort.

Then it occurred to me...

## What about Jekyll?
The EasyWP solution was far from optimal, and I started thinking about how I can further improve this solution.

The biggest headache would have been the newsletter, as there was no easy way for me to pull my content out of the WordPress editor and into Buttondown.

Buttondown uses Markdown as a first class citizen for creating content, as does Jekyll. This got me thinking about switching to Jekyll and using Markdown across the board.

If I did switch to Jekyll, it would then be a case of pasting the raw Markdown for my posts into Buttondown and away I go. I'd also be able to bring back all the Git integration I was accustom too. Win, win.

[Netlify](https://netlify.com) offers both hosting and a CDN for free. Caching isn't necessary because the site is static, and backups are taken care of locally as part of [my normal backup routine](/pull-and-backup-multiple-github-repositories-script/).

Here's how the annual charges would stack up with Jekyll:

| Service  |  Annual price ($)  |
|---|---|
|  Netlify Hosting  | Free  |
| SSL Certificate (Netlify) | Free |
| CDN (Netlify)  | Free |
| Buttondown  |  Free |
| **Total:** | **FREE!!**  |

Ok, that's a 100% reduction in cost - it doesn't get much better than that unless Netlify decide to start paying me!

We're cooking on gas here, folks and it seems like we're winning. But while I'm happy with the costs involved with Jekyll (or lack there of) it's not all glitter and roses...

### There's still compromises
My website and related workflow are now free, but I have managed to build what I consider to be a _beautiful_ site with WordPress. So if I was going to migrate to Jekyll, I'd have to re-build the site so that it looked the same.

Although the monetary cost involved with Jekyll was nothing, the cost to my time would be _very_ expensive. Being the busy guy that I am (aren't we all), I'm not sure I'd be able to find the time.

As well as the work involved in re-designing the site (again!) I'd also have to come up with a new [writing workflow](/my-writing-workflow) as I would be losing WordPress' editor, Gutenberg.

{: .notice}
For the record, I think Gutenberg is **incredible** so losing it would have an impact on my writing workflow.

##  The migration
I decided that once the initial re-design and migration was done, managing the site with Jekyll wouldn't take much more time than WordPress.

Actually, probably _less_ time given the fact I wouldn't have a server to manage too. I decided to take the plunge and move over to Jekyll.

The re-design took me around a month to complete, doing the odd hour here and there whenever I got time between other commitments, but the result is a site that's 99% the same as the old site.

The only significant difference is the navigation menu on mobile screens. I decided not to use CSS checkbox hacks or introduce JavaScript for the mobile menu; I think the result I came up with still works well.

### Moving content
Migrating my content was the part I was worried about, as I have nearly 250 posts and WordPress doesn't use Markdown natively.

After a little bit of research I found the [Jekyll Exporter plugin](https://wordpress.org/plugins/jekyll-exporter/) and was able to easily dump all my content into Jekyll within a few minutes.

I flipped the switch in early November, to very little fanfare and most people didn't notice, which is good.

While I was making the changes, I also decided to tweak the way in which I produce [my newsletter](/newsletter). Instead of effectively sending my entire posts to peoples' inbox, I now send a roundup post on the last day of every month.

## Final thoughts
Migrating from WordPress to Jekyll (again) has been a lot of work, but I now have a site that is fast, integrated tightly with Git, automatically backed up and, best of all, free to run.

My writing workflow has been affected by the loss of Gutenberg slightly, but my new workflow still works well.

Overall I'm really happy with my decision. Things are just chugging along nicely now, and I don't need to do any SysAdmin at this point, which is great.

Will I ever move back to WordPress? Who knows. I'll likely use it for other projects at some point, but for now, I'm very happy with my little static site.

**WordPress or static sites - which do you think is better? Let me know using the button below.**
