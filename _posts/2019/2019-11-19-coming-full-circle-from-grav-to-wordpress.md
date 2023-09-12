---
title: 'Coming Full Circle &#8211; From Grav To WordPress'
layout: post
permalink: /coming-full-circle-from-grav-to-wordpress/
description: I've decided to migrate my site back to WordPress. Grav was great, but there are a few niggles with the fledgling CMS that really annoyed me.
categories:
  - Opinion
  - Technology
---
Woah, 2 posts in one day, aren't you guys lucky! So I've just published a post on why I'm [removing comments](/removing-comments/) from this site. Now I want to talk about migrating from Grav to WordPress.

When I originally re-launched this blog, [I went with Ghost](/medium-vs-ghost-which-one-for-a-personal-blog/). Then I [moved to a static site](/moving-to-a-static-website/) that was running WordPress; after a little while I got bored of that and [migrated over to Grav](/migrating-from-wordpress-to-grav/). Now I've come full circle and ended up back on WordPress!

## Why the move? {#h-why-the-move}

There was nothing inherently wrong with [Grav](https://getgrav.org) really, I enjoyed using it, especially the Markdown support. However, because it's a small fledgling CMS, there were a number of niggles with the tool that frustrated me.

I found myself constantly trying to work around these niggles, rather than concentrating on writing posts. WordPress is huge and there a many reasons to use it. I also know it pretty well, so I'm not wasting time fiddling with these little annoyances.

The main niggles were the caching - it was never right and I was constantly having to CTRL+F5 to get the latest version of the site - so I assume my readers were having to too.

The RSS feeds were also a pain - they just never updated. I _think_ this was linked to the caching issue, but I could never work it out. Even turning caching off completely wouldn't get the feeds to update.

Then there was the lack of spellcheck in the browser window. For some reason, Grav wouldn't spellcheck within the editor. I have no idea why, but I just couldn't get it to work.

Finally, most of the functionality for Grav requires a plugin. To get the basic functionality I had on the my Grav site, it required 15 (yes, fifteen!) plugins. These were for anything from SEO, to RSS feeds, to adding pagination on the home page for posts.

For context, I have 6 plugins installed on this WordPress site, which add things like 2FA, caching and SEO.

## But what about Markdown? {#h-but-what-about-markdown}

Markdown was my main reason for moving to Grav. I love using it, as it allows me to write and format entire posts without my fingers leaving the keyboard. Luckily for me, [WordPress' new Gutenberg editor](https://wordpress.org/gutenberg/) supports Markdown out of the box. 🙂

WordPress has a pretty nice writing experience now. Gutenberg seems to have gotten a bad rap since it was released, but the WordPress team continue to make it an excellent editing interface, in my opinion.

## The new theme {#h-the-new-theme}

I didn't want the look of the WordPress version of the site to change significantly, and I really liked the speed of Grav, but speed is difficult to achieve on WordPress.

I decided to use the awesome (and only 7kb in size) [Susty theme](https://sustywp.com/) ([Github](https://github.com/jacklenox/susty)) as the basis for my new theme. However, the theme looks nothing like this site out of the box, so I had to do a lot of work to make it look how I wanted, but I still needed to keep things lean where possible.

I think I've managed to get a site that looks good, but still performs well. Looking at a Google PageSpeed Insights report, this site gets 97% for mobile and 98% for desktop. That'll do nicely, I think.

![](/assets/images/WP-Pagespeed.png)

Considering my Grav site was lucky to scrape 75%, I'm very please with the results. I haven't spent much time optimising WordPress yet, other than enabling caching and some Gzip compression with Nginx on my server. So there's probably a little more performance I can still get out of the site, but this will do for now.

## Conclusion {#h-conclusion}

Overall, I'm really happy to be back on WordPress. The website looks amazing (in my opinion), it performs well, and WordPress just feels like being back home.

Hopefully this will be the last migration for a while, so I can concentrate on putting out content instead of messing with the site!

