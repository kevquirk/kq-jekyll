---
title: How It All Connects
layout: post
typora-root-url: ../
description: There's some automation on this site that posts to various places, all via RSS. Here's how it works.
category:
  - Blogging
  - Meta
  - Web
---

{: .tldr}
There's some automation on this site that posts to various places, all via RSS. Here's how it works...


There are a number of ways to [subscribe to this blog](https://kevquirk.com/subscribe/) you can do it via RSS, email or on social media (Mastodon, Micro.blog or Bluesky). I've always been of the thinking that a reader shouldn't have to go hunting for my content; instead, it should be made available in whatever way makes sense to them.

Problem is, distributing links (or the entire post) to multiple places can be a pain. I'd much prefer to publish my post and let the automation do the rest.

[I'm a big proponent of RSS](https://kevquirk.com/please-add-rss-support-to-your-site) so that's where I started looking, and in the end RSS has become the backbone of how my content is distributed across the web.

## What's shared, where?

Ok, so here's a list of where my content is distributed and in what form. All of this happens automatically within a couple of minutes of a new post being published.

* **RSS** - [my RSS feed](https://kevquirk.com/feed.rss) contains the entire contents of my post and is immediately updated when a post is published
* **Email** - thanks to the brilliant [Buttondown](https://buttondown.email) service, I'm able to regurgitate my RSS feed to email subscribers. Once again, this the entire post and is sent out around 10 minutes after the post is published
* **Micro.blog** - I created a second feed called `social-feed.rss` which contains just the post description and a link. This is perfect for social media, so Micro.blog slurps up this feed and shares it there
* **Other socials** - [Micro.blog](https://micro.blog/kq) then automatically cross-posts the contents of `social-feed.rss` to both my [Mastodon](https://fosstodon.org/@kev) and [Bluesky](https://staging.bsky.app/profile/kev.blue) accounts

I love this setup - all I have to do is publish a post and my RSS feeds do the rest. It's fantastic. For those of you who are visual learners (I include myself in this bucket) here's a handy-dandy diagram that I threw together to show how it all connects:

<img loading="lazy" src="/assets/images/website-setup-diagram.png" alt="website-setup-diagram" />
*I really missed my calling as an artist*

## How much does it all cost?

Automation that's this simple to implement usually costs a lot of money, right? **Wrong**. All in, this site costs me $18/month to run, and is broken down as follows:

* Blot.im (website hosting) - $4/month
* Buttondown Basic - $9/month
* Micro.blog - $5/month

{: .notice}
Micro.blog also supports other services that it can cross-post to. Currently Medium, Mastodon, LinkedIn, Tumblr, Flickr, BlueSky and Nostr are supported.


I don't need any expensive plugins, or fancy (read: complicated) code to make this all work. It's all just RSS, and it's lovely.