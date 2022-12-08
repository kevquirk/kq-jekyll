---
id: 2994
title: Replacing FreshRSS With Miniflux
date: 2020-10-18T15:23:40+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2994
permalink: /replacing-freshrss-with-miniflux/
description:
  - FreshRSS is a good RSS reader, but I recently decided to switch to Miniflux. This post talks about why I decided to switch.
categories:
  - Opinion
  - Technology
---
<p class="has-medium-font-size">
  FreshRSS is a good RSS reader, but I recently decided to switch to Miniflux. This post talks about why I decided to switch.
</p>

If you didn&#8217;t know already, <a href="https://kevq.uk/please-add-rss-support-to-your-site/" target="_blank" rel="noreferrer noopener">I love using RSS feeds</a> and I&#8217;ve been using <a href="https://www.freshrss.org/" target="_blank" rel="noreferrer noopener">FreshRSS</a> to read those feeds for a few years now. It&#8217;s self-hosted and generally works well. But I **hate** the web interface.

It was never really a major problem, as I mostly check my feeds from either my phone or tablet with the <a href="https://www.reederapp.com/" target="_blank" rel="noreferrer noopener">Reeder app</a>.

## What&#8217;s wrong with the FreshRSS UI? {#h-what-s-wrong-with-the-freshrss-ui}

I&#8217;m glad you asked, dear reader. Let&#8217;s start with a screenshot of the interface, shall we? After all, a picture speaks a thousands words and all that&#8230;

<img loading="lazy" width="1000" height="431" src="/assets/images/wp-images/2020/10/freshrss-ui.jpg" alt="FreshRSS web interface" class="wp-image-3069" srcset="/assets/images/wp-images/2020/10/freshrss-ui.jpg 1000w, /assets/images/wp-images/2020/10/freshrss-ui-300x129.jpg 300w, /assets/images/wp-images/2020/10/freshrss-ui-768x331.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /> *The FreshRSS web interface*

Look how cluttered that interface is! There are gradients all over the shop, the colours are awful and it&#8217;s difficult to navigate your way around.

For example, if you want to go and visit the origin page (when those really annoying people don&#8217;t <a href="https://kevq.uk/why-having-a-full-post-rss-feed-is-a-good-idea/" target="_blank" rel="noreferrer noopener">have the entire post in their RSS feed</a>), you have to click that weird circular icon with the arrow over it on the right hand side.

That would be fine, but the icon is **exactly** the same as the rest of the metadata, so I have no idea what&#8217;s a link and what isn&#8217;t.

Second, you see the list of feed items in the image above. Where it says **The New Oil, Ru Singh, Linux** etc? Logic would dictate that if you click that link, it would open that feed item, right?

**WRONG!**

If you click that link, you are taken to a list of all items in that feed, not the feed item itself. Again, it&#8217;s completely counter-intuitive.

I know I can change the theme, but there are no nice ones bundled with FreshRSS and I don&#8217;t have the time (or inclination) to make my own.

## Switching from FreshRSS to Miniflux {#h-switching-from-freshrss-to-miniflux}

I had heard really good things about <a rel="noreferrer noopener" href="https://miniflux.app/" target="_blank">Miniflux</a>. Both <a rel="noreferrer noopener" href="https://jlelse.blog/posts/miniflux/" target="_blank">Jan-Lukas Else</a> and <a rel="noreferrer noopener" href="https://rusingh.com/articles/2020/10/19/about-miniflux-feed-reader/" target="_blank">Ru Singh</a> speak very highly of it.

I decided to pay the $15.00 (~£12.30) **a year** to <a href="https://miniflux.app/hosting.html" target="_blank" rel="noreferrer noopener">have the Miniflux team host it for me</a>. Not only does this save on headaches for me, it supports the Miniflux project too. Win/win. If you prefer to self-host, <a href="https://miniflux.app/docs/installation.html" target="_blank" rel="noreferrer noopener">it&#8217;s simple to do</a>.

## Why Miniflux over FreshRSS? {#h-why-miniflux-over-freshrss}

When I designed this website, there were 2 things I wanted to achieve from the theme:

  1. A content-focused experience.
  2. Beautiful <a href="https://kevq.uk/whats-in-a-font-researching-website-typography/" target="_blank" rel="noreferrer noopener">typography</a>.

The whole point of this blog is for you to read my content. Nothing else. Miniflux aligns itself to the same principles:

<blockquote class="wp-block-quote">
  <p>
    Miniflux is a minimalist software. <strong>The purpose of this application is to read feeds</strong>. <em>Nothing else</em>.
  </p>

  <cite><a href="https://miniflux.app/opinionated.html" target="_blank" rel="noreferrer noopener">Miniflux</a></cite>
</blockquote>

If you take a look at the Miniflux interface, it&#8217;s sparse, focused and beautiful. Just the way I like it.

<img loading="lazy" width="1000" height="431" src="/assets/images/wp-images/2020/10/miniflux-ui.jpg" alt="" class="wp-image-3072" srcset="/assets/images/wp-images/2020/10/miniflux-ui.jpg 1000w, /assets/images/wp-images/2020/10/miniflux-ui-300x129.jpg 300w, /assets/images/wp-images/2020/10/miniflux-ui-768x331.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" />  

Miniflux isn&#8217;t just good looking though. It&#8217;s also been thoughtfully built. The user experience is really good. For example, if I want to load the original post, there&#8217;s no silly icons that make little sense. I just click on the _original_ link.

This simplicity continues as you dig into feed items. Everything in Miniflux is simply laid out and content focussed. Take a look at the screenshots below to see what I mean:

<img loading="lazy" width="1000" height="431" src="/assets/images/wp-images/2020/10/new-oil-post-miniflux.jpg" alt="" class="wp-image-3073" srcset="/assets/images/wp-images/2020/10/new-oil-post-miniflux.jpg 1000w, /assets/images/wp-images/2020/10/new-oil-post-miniflux-300x129.jpg 300w, /assets/images/wp-images/2020/10/new-oil-post-miniflux-768x331.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /> *A post on Miniflux* <img loading="lazy" width="1024" height="441" src="/assets/images/wp-images/2020/10/new-oil-post-freshrss-1024x441.jpg" alt="" class="wp-image-3074" srcset="/assets/images/wp-images/2020/10/new-oil-post-freshrss-1024x441.jpg 1024w, /assets/images/wp-images/2020/10/new-oil-post-freshrss-300x129.jpg 300w, /assets/images/wp-images/2020/10/new-oil-post-freshrss-768x331.jpg 768w, /assets/images/wp-images/2020/10/new-oil-post-freshrss.jpg 1188w" sizes="(max-width: 1024px) 100vw, 1024px" />*The same post on FreshRSS*

Big difference, right?

## Conclusion {#h-conclusion}

I replaced FreshRSS with Miniflux around a month ago now. As a result I have a much better interface that has a beautifully simple reading experience.

Furthermore, I don&#8217;t have any headaches because someone else is managing it all for me. And, I get to support a great open source project too.

Finally, I can continue to use the Reeder app on my devices, because Miniflux supports the Fever protocol.

Wins all round, I think.

If you&#8217;re thinking about switching feed readers, or if you&#8217;re new to using RSS feeds, I&#8217;d strongly recommend Miniflux.
