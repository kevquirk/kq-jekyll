---
id: 5239
title: Core Web Vitals and WordPress
date: 2021-09-08T12:01:39+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=5239
permalink: /core-web-vitals-and-wordpress/
description:
  - Google recently announced Core Web Vitals and it worries WordPress site owners everywhere. I get a perfect 100 across the board, here's how...
image: /assets/images/wp-images/uploads/2021/09/core-web-vitals-wordpress.png
categories:
  - Web
---


<p class="tldr">
  Google <a href="https://web.dev/vitals/" target="_blank" rel="noreferrer noopener">recently announced</a> Core Web Vitals and it worries WordPress site owners everywhere. There&#8217;s no need to be worried; I get a perfect 100 across the board and it&#8217;s relatively simple to do.<br /><br />Here&#8217;s how…
</p>

Yes, dear reader, it is possible (and relatively easy) to get a perfect score on Core Web Vitals on a WordPress site. This site is built on WordPress and <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank" rel="noreferrer noopener">I get a perfect score</a>.

<img loading="lazy" width="591" height="202" src="/assets/images/wp-images/2021/05/core-web-vitals-results.png" alt="" class="wp-image-5242" />  

## What is Core Web Vitals? {#h-what-is-core-web-vitals}

First things first, let&#8217;s take a quick look at what CWV actually is. If you go and <a href="https://web.dev/measure/" target="_blank" rel="noreferrer noopener">test your site</a>, its performance will be measured against three attributes.

  1. **Largest Contentful Paint (LCP)** &#8211; This is the time it takes for the largest piece of content to appear on screen.
  2. **First Input Delay (FID)** &#8211; This is how long it takes for your website to respond to the first interaction. For example, clicking a menu button.
  3. **Cumulative Layout Shift (CLS)** &#8211; This measures how much your website jiggles around while it loads.

Each attribute is graded on a traffic light system:

<img loading="lazy" width="1220" height="375" src="/assets/images/wp-images/2021/05/core-web-vitals-traffic-lights-1220x375.png" alt="Core web vitals traffic lights" class="wp-image-5245" srcset="/assets/images/wp-images/2021/05/core-web-vitals-traffic-lights-1220x375.png 1220w, /assets/images/wp-images/2021/05/core-web-vitals-traffic-lights-610x187.png 610w, /assets/images/wp-images/2021/05/core-web-vitals-traffic-lights-768x236.png 768w, /assets/images/wp-images/2021/05/core-web-vitals-traffic-lights-1536x472.png 1536w, /assets/images/wp-images/2021/05/core-web-vitals-traffic-lights.png 1579w" sizes="(max-width: 1220px) 100vw, 1220px" />  

If we look at the CWV performance results for my homepage, here&#8217;s what they look like:

<img loading="lazy" width="905" height="380" src="/assets/images/wp-images/2021/05/core-web-vitals-performance-results.png" alt="Core web vitals performance results" class="wp-image-5247" srcset="/assets/images/wp-images/2021/05/core-web-vitals-performance-results.png 905w, /assets/images/wp-images/2021/05/core-web-vitals-performance-results-610x256.png 610w, /assets/images/wp-images/2021/05/core-web-vitals-performance-results-768x322.png 768w" sizes="(max-width: 905px) 100vw, 905px" />  

<p class="notice">
  <strong>Note:</strong> <em>Total Blocking Time </em>in the image above is equivalent to FID.
</p>

Now you know what Core Web Vitals are, let&#8217;s take a look at how I&#8217;ve managed to get such a score with WordPress.

My recent post on how to <a href="https://kevq.uk/how-to-speed-up-wordpress/" target="_blank" rel="noreferrer noopener">speed up WordPress</a> goes into some of the basic things you can do at a high level, but this post will talk about the specific things I&#8217;ve done to get those magical green orbs.

## Use a good host {#h-use-a-good-host}

I spoke about this in my previous post, so I won&#8217;t go into detail here. Forget about shared hosting and get either a Virtual Private Server (VPS) or managed WordPress hosting.

I personally use a <a href="https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357003T7073a&kwk=634887631" target="_blank" rel="noreferrer noopener">VPS from Ionos</a> to host this site. I have the Medium package, which costs £6/month &#8211; not much more than shared hosting.

If you have no interest in managing a server yourself, managed hosting is the way to go. I&#8217;d recommend <a href="https://www.cloudways.com/en/" target="_blank" rel="noreferrer noopener">Cloudways</a> for this.

## Get a well coded theme {#h-get-a-well-coded-theme}

I was previously using a theme that I had built myself. It was lightweight and highly optimised, but I had heard good things about GeneratePress. So I tried them out and have since flipped over to their theme.

You don&#8217;t need to get buried in the weeds of code with GeneratePress, but you can if you wish. The best thing about it is that it&#8217;s extremely well written and my site is actually **smaller** using GeneratePress than it was with my old theme. I&#8217;d highly recommend GeneratePress if you&#8217;re in the market for a new theme.

I would also recommend staying away from themes that try to be everything &#8211; they look good on the surface, but because they try to do so much, they just end up being a bloated mess.

## WP Rocket {#h-wp-rocket}

<a href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">WP Rocket</a> is the secret sauce that underpins everything. I have a fast server, a well coded theme and now WP Rocket comes in and caches everything so it&#8217;s served **really** quickly.

To add some extra juice to WP Rocket, I also sprinkle some <a href="https://bunnycdn.com/?ref=gnn7bkvipc" target="_blank" rel="noreferrer noopener">BunnyCDN</a> fairy dust on top to help serve the static assets of my site all over the world.

If you don&#8217;t want to shell out for WP Rocket, <a href="https://jetpack.com/boost/" target="_blank" rel="noreferrer noopener">Jetpack Boost</a> is also a great caching plugin that&#8217;s free.

## Conclusion {#h-conclusion}

To run such a stack is <a href="https://kevq.uk/the-hunt-for-better-wordpress-hosting/" target="_blank" rel="noreferrer noopener">fairly expensive</a>, but I feel the performance it provides is worth it. The result of my investment is a website that is highly performant and easy to manage.

The price I pay isn&#8217;t actually that much more than some crappy shared hosts. For example, BlueHost&#8217;s **awful** shared &#8220;Pro&#8221; hosting is nearly £20/month and your site would be orders of magnitude slower!

So there you have it, folks. It&#8217;s fairly simple to have a highly performant site on WordPress.

**If you&#8217;re running WordPress and want some help improving its performance, please feel free to <a href="https://kevq.uk/contact/" target="_blank" rel="noreferrer noopener">contact me</a> and I&#8217;ll see what I can do to help.**
