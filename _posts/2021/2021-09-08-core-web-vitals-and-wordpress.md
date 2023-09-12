---
id: 5239
title: Core Web Vitals and WordPress
date: 2021-09-08T12:01:39+01:00

layout: post
permalink: /core-web-vitals-and-wordpress/
description:
  - Google recently announced Core Web Vitals and it worries WordPress site owners everywhere. I get a perfect 100 across the board, here's how...
categories:
  - Web
---
<p class="tldr">
  Google <a href="https://web.dev/vitals/" target="_blank" rel="noreferrer noopener">recently announced</a> Core Web Vitals and it worries WordPress site owners everywhere. There&#8217;s no need to be worried; I get a perfect 100 across the board and it&#8217;s relatively simple to do.<br /><br />Here&#8217;s how…
</p>

Yes, dear reader, it is possible (and relatively easy) to get a perfect score on Core Web Vitals on a WordPress site. This site is built on WordPress and <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank" rel="noreferrer noopener">I get a perfect score</a>.

![](/assets/images/core-web-vitals-results.png)  

## What is Core Web Vitals? {#h-what-is-core-web-vitals}

First things first, let's take a quick look at what CWV actually is. If you go and <a href="https://web.dev/measure/" target="_blank" rel="noreferrer noopener">test your site</a>, its performance will be measured against three attributes.

  1. **Largest Contentful Paint (LCP)** - This is the time it takes for the largest piece of content to appear on screen.
  2. **First Input Delay (FID)** - This is how long it takes for your website to respond to the first interaction. For example, clicking a menu button.
  3. **Cumulative Layout Shift (CLS)** - This measures how much your website jiggles around while it loads.

Each attribute is graded on a traffic light system:

![](/assets/images/core-web-vitals-traffic-lights.png) 

If we look at the CWV performance results for my homepage, here's what they look like:

![](/assets/images/core-web-vitals-performance-results.png)

<p class="notice">
  <em>Total Blocking Time</em> in the image above is equivalent to FID.
</p>

Now you know what Core Web Vitals are, let's take a look at how I've managed to get such a score with WordPress.

My recent post on how to <a href="/how-to-speed-up-wordpress/" target="_blank" rel="noreferrer noopener">speed up WordPress</a> goes into some of the basic things you can do at a high level, but this post will talk about the specific things I've done to get those magical green orbs.

## Use a good host {#h-use-a-good-host}

I spoke about this in my previous post, so I won't go into detail here. Forget about shared hosting and get either a Virtual Private Server (VPS) or managed WordPress hosting.

I personally use a <a href="https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357003T7073a&kwk=634887631" target="_blank" rel="noreferrer noopener">VPS from Ionos</a> to host this site. I have the Medium package, which costs £6/month - not much more than shared hosting.

If you have no interest in managing a server yourself, managed hosting is the way to go. I'd recommend <a href="https://www.cloudways.com/en/" target="_blank" rel="noreferrer noopener">Cloudways</a> for this.

## Get a well coded theme {#h-get-a-well-coded-theme}

I was previously using a theme that I had built myself. It was lightweight and highly optimised, but I had heard good things about GeneratePress. So I tried them out and have since flipped over to their theme.

You don't need to get buried in the weeds of code with GeneratePress, but you can if you wish. The best thing about it is that it's extremely well written and my site is actually **smaller** using GeneratePress than it was with my old theme. I'd highly recommend GeneratePress if you're in the market for a new theme.

I would also recommend staying away from themes that try to be everything - they look good on the surface, but because they try to do so much, they just end up being a bloated mess.

## WP Rocket {#h-wp-rocket}

<a href="https://wp-rocket.me" target="_blank" rel="noreferrer noopener">WP Rocket</a> is the secret sauce that underpins everything. I have a fast server, a well coded theme and now WP Rocket comes in and caches everything so it's served **really** quickly.

To add some extra juice to WP Rocket, I also sprinkle some <a href="https://bunnycdn.com/?ref=gnn7bkvipc" target="_blank" rel="noreferrer noopener">BunnyCDN</a> fairy dust on top to help serve the static assets of my site all over the world.

If you don't want to shell out for WP Rocket, <a href="https://jetpack.com/boost/" target="_blank" rel="noreferrer noopener">Jetpack Boost</a> is also a great caching plugin that's free.

## Conclusion {#h-conclusion}

To run such a stack is <a href="/the-hunt-for-better-wordpress-hosting/" target="_blank" rel="noreferrer noopener">fairly expensive</a>, but I feel the performance it provides is worth it. The result of my investment is a website that is highly performant and easy to manage.

The price I pay isn't actually that much more than some crappy shared hosts. For example, BlueHost's **awful** shared &#8220;Pro&#8221; hosting is nearly £20/month and your site would be orders of magnitude slower!

So there you have it, folks. It's fairly simple to have a highly performant site on WordPress.

**If you're running WordPress and want some help improving its performance, please feel free to <a href="/contact/" target="_blank" rel="noreferrer noopener">contact me</a> and I'll see what I can do to help.**
