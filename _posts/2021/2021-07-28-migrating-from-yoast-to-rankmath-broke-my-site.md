---
id: 6236
title: Migrating From Yoast To RankMath Broke My Site
date: 2021-07-28T12:24:22+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=6236
permalink: /migrating-from-yoast-to-rankmath-broke-my-site/
image: /assets/images/wp-images/uploads/2021/07/yoast-rankmath-feature.png
categories:
  - Blogging
  - Web
---
<p class="tldr">
  Yoast vs RankMath is a hot topic of debate. <a href="https://yoast.com" target="_blank" rel="noreferrer noopener">Yoast</a> is the king of WordPress SEO plugins and <a href="https://rankmath.com/" target="_blank" rel="noreferrer noopener">RankMath</a> is the new kid on the block.<br>
<br>
  I&#8217;ve been a Yoast Premium user for a few years now, but decided to switch to RankMath recently.<br>
<br>
  <b>It didn&#8217;t go well.</b>
</p>

## Why the change? {#h-why-the-change}

I suppose a good place to start with all this is why I wanted to change in the first place. I&#8217;ve been a happy Yoast Premium user for a few years now, so if it&#8217;s not broke, don&#8217;t fix it. Right?

Well, yeah, Yoast has been good to me. It&#8217;s allowed me to learn what I would consider to be the basics of SEO and as a result this site ranks fairly well on search engines.

However, there are some features RankMath has that Yoast doesn&#8217;t. The big one being that RankMath allows you to track the SEO health of your site by tracking SEO rankings and click through rates.

[I&#8217;m trying to get out of the analytics game](https://kevq.uk/chasing-visitors-the-web-analytics-rabbit-hole/), but I feel that information on how the site is performing on search engines would be very useful. Also, RankMath is pretty much half the price of Yoast.

So I thought there was no comparison when it came to Yoast vs RankMath. The latter has more features for half the price. No brainer, right?

## Wrong! {#h-wrong}

I went ahead and bought RankMath Pro and installed it on my site. It migrated everything from Yoast just fine and I thought I was done. I went to bed a happy chappy.

The next morning I woke up to a number of people contacting me on <a href="https://fosstodon.org/@kev" target="_blank" rel="noreferrer noopener">Fosstodon</a> informing me that my RSS feed was broken.

<img loading="lazy" width="1124" height="370" src="/assets/images/wp-images/2021/07/rankmath-rss-error.jpeg" alt="RSS feed error" class="wp-image-6242" srcset="/assets/images/wp-images/2021/07/rankmath-rss-error.jpeg 1124w, /assets/images/wp-images/2021/07/rankmath-rss-error-610x201.jpeg 610w, /assets/images/wp-images/2021/07/rankmath-rss-error-768x253.jpeg 768w" sizes="(max-width: 1124px) 100vw, 1124px" />  

Fan-bloody-tastic. The only change I had made was replacing Yoast with RankMath, so I jumped on my staging site to do some testing and sure enough, RankMath was the problem.

I logged a ticket with their support team and got a response relatively quickly. However, the response was along the lines of:

<blockquote class="wp-block-quote">
  <p>
    Have you checked that your functions.php file is ok?
  </p>

  <cite>&#8212; RankMath support</cite>
</blockquote>

My `functions.php` file was fine. I know this because I&#8217;d made no changes to it and could consistently reproduce and fix the RSS problem by enabling and disabling the RankMath plugin.

<p class="medium">
  After this there was silence for over 24 hours.
</p>

I waited, and waited&#8230;and waited. In total I waited nearly 36 hours for a response (and chased the issue numerous times).

While having a broken RSS feed may not seem like the end of the world to many of you, [I strongly support RSS](https://kevq.uk/please-add-rss-support-to-your-site/) and know that a lot of people consume my content via RSS.

After 36 hours of waiting with a broken RSS Feed, so the RankMath support team could troubleshoot the issue (which they never did), I decided to cut my losses and go back to Yoast.

RankMath offer a 30 day money back guarantee and they did honour this, I&#8217;m happy to say.

## Closing thoughts {#h-closing-thoughts}

When it comes to Yoast vs RankMath, there&#8217;s a lot of people in both camps. Clearly the RSS issue is something unique to my site, I know that. But the poor support I received really put me off.

[SEO is very important](https://kevq.uk/notes/writing-with-seo-in-mind/), I think. So not having such a critical plugin backed up by decent support is a problem for me. It&#8217;s a real shame though, because on paper RankMath is the superior tool to Yoast, in my opinion.

Maybe one day I&#8217;ll give it another try, or if there&#8217;s anyone else out there reading this who has had the same issue, please do let me know.

**Do you use an SEO plugin on your site? If so, I&#8217;d love to hear about what you&#8217;re using &#8211; feel free to use the reply button below.**
