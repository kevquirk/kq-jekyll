---
title: 'Hunt for Better WordPress Hosting &#8211; Update'
date: '2022-08-01T14:22:22+01:00'
layout: post
permalink: /hunt-for-better-wordpress-hosting-update/
image: /assets/images/wordpress-hosting-update-feature.webp
description: Nearly a year ago, I wrote about my hunt for better WordPress hosting and the results weren’t great. Here’s an update…
categories:
    - Blogging
    - Web
---
{: .tldr}
Nearly a year ago, I wrote about [my hunt for better WordPress hosting](https://kevquirk.com/the-hunt-for-better-wordpress-hosting/) and the results weren’t great. Here’s an update…

Let’s start with a quick re-cap – last time I ended up sticking with my self-managed Plesk server, CDN, caching and a few other bits. Here’s what my total outlay looked like for WordPress hosting:

| Line item | Annual price ($) |
|---|---|
| VPS hosting | $105.00 |
| Yoast Premium | $123.00 |
| Newsletter Glue | $76.00 |
| WP Rocket | $49.00 |
| Updraft SFTP Plugin | $16.50 |
| Bunny CDN | $12.00 |
| **Annual total:** | **$381.50** |
| **Monthly total:** | **$31.79** |

My intention was to cut costs, while keeping performance up. With this setup I was getting a perfect score on [Google’s Lighthouse](https://web.dev/measure), so the new solution had to be really performant too. Because, you know, [WordPress isn’t slow](/the-case-for-wordpress/)!

![Perfect Google lighthouse score](/assets/images/wp-images/2021/09/perfect-lighthouse-score.png)

I’m sure you will agree that $30/month to run what is effectively a hobby website isn’t great. Especially when I could [host a static site for free](/how-to-build-jekyll-site-simple-css/). But I’m happy to report, dear reader, that I have made some changes which have saved me some 💰, *and* kept performance up.

## WordPress hosting changes

In the last post I explored [Cloudways](https://vrlps.co/9xZaemi/cp), but discounted them as they recommended a 2GB instance for production sites. This meant that they were *more* expensive than the server I had.

I decided to take a punt and setup a Cloudways server with 1GB RAM, instead of the recommended 2GB. I’m really glad I did, because it’s **more than enough**.

I host this site, a staging site, 2 other personal sites and 2 sites for a friend. Yet the resources never get close the being maxed out.

[I don’t know how many visitors I get to this blog](/revisiting-the-web-analytics-rabbit-hole/), but the [last time I checked](/chasing-visitors-the-web-analytics-rabbit-hole/) it was in the 10s of thousands a month. The take away here, dear reader, is that you shouldn’t believe all you read on the Internet. It’s almost like Cloudways want to make *more* money by recommending more expensive servers than you may need. 🙃

As well as changing hosts, I also made other changes to the tech stack and services behind the scenes. Here’s what I did:

- Cancelled Yoast Premium and went with [their free plugin](https://wordpress.org/plugins/wordpress-seo/)
- [Abandoned my newsletter](/why-are-newsletters-so-painful/), so Newsletter Glue was no longer needed
- Got rid of WP Rocket as Cloudways have their own caching plugin

## What does hosting cost now?

So what does all this shenanigans cost me now then? Well, let’s take look:

| Line item | Annual price ($) |
|---|---|
| VPS hosting | $180.00 |
| Updraft SFTP Plugin | $16.50 |
| Bunny CDN | $12.00 |
| **Annual total:** | **$208.50** |
| **Monthly total:** | **$17.37** |

By making these changes, I’ve been able to pretty much half the amount I’m paying for my WordPress hosting. Pretty. Happy. With. That.

And yes, I’ve also managed to keep the performance up there. This site now scores 99 for performance and 100 for everything else on Google Lighthouse.

You’ll notice that I’m still using [Bunny CDN](https://bunny.net?ref=gnn7bkvipc) and the [Updraft SFTP plugin](https://updraftplus.com). Bunny is a *fantastic* service that makes this site load quickly from pretty much anywhere on earth, so that had to stay. And we all know that [backups are very important](/i-nearly-lost-all-of-my-data/), so even though backups are provided by Cloudways, there’s no harm in doing my own as well.

> There should be at least 3 copies of your data, on 2 different types of media, 1 of which should be off-site.
> 
> <cite>The 3-2-1 backup rule</cite>

## Final thoughts

All in all, I think this exercise has been a success. I’m paying half the price, but still getting 99% of the performance. Literally. Let’s be honest here, folks, no one is going to notice that 1% in the real world.

If you’re in the market for a highly performant, fully managed WordPress host, you can do *a lot* worse than [Cloudways](https://vrlps.co/9xZaemi/cp). I don’t think I’ll be moving away from their service any time soon.