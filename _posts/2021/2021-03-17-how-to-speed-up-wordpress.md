---
id: 4789
title: How To Speed Up WordPress
date: 2021-03-17T15:40:00+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=4789
permalink: /how-to-speed-up-wordpress/
description:
  - WordPress has a reputation of being really slow, but that isn't true. Here's how I speed up my WordPress site to get 100 on Lighthouse.
categories:
  - Web
---
<p class="has-medium-font-size">
  WordPress has a reputation for being really slow, but that isn&#8217;t true. This post talks about how I speed up my WordPress site to get a perfect 100 on Google&#8217;s <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkevq.uk&tab=mobile" target="_blank" rel="noreferrer noopener">PageSpeed Insights</a> & <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank" rel="noreferrer noopener">Lighthouse</a> speed metrics.
</p>

Honestly, there no magic involved here. Speeding up a WordPress site is **really** simple, it just requires a little bit of forethought and a few quid invested from your wallet.

## Why is WordPress slow? {#h-why-is-wordpress-slow}

Before we look at ways to speed up WordPress, it&#8217;s important to understand the problem we&#8217;re trying to fix. The fact of the matter is, **WordPress is not inherently slow**; while slowness can come from multiple sources, it&#8217;s usually caused by one (or both) of the following issues:

  1. Rubbish hosting.
  2. Bad code.

That&#8217;s really all it boils down to, folks. If you&#8217;re hosting your site with a shitty shared host, like BlueHost or HostGator, then you&#8217;re going to have problems.

Conversely, if you have bundled 20+ plugins into your WordPress site so that it does everything except cook your breakfast, then again, you&#8217;re going to have performance problems.

Same goes for themes. If you have a theme that tries to cater for every possible design permutation possible, there&#8217;s going to be a tonne of wasted code you&#8217;re not using.

  <img loading="lazy" width="1220" height="602" src="/assets/images/wp-images/2021/03/be-wp-theme-variations-1220x602.png" alt="A typical &quot;multi-purpose&quot; WordPress theme" class="wp-image-4886" srcset="/assets/images/wp-images/2021/03/be-wp-theme-variations-1220x602.png 1220w, /assets/images/wp-images/2021/03/be-wp-theme-variations-610x301.png 610w, /assets/images/wp-images/2021/03/be-wp-theme-variations-768x379.png 768w, /assets/images/wp-images/2021/03/be-wp-theme-variations-1536x757.png 1536w, /assets/images/wp-images/2021/03/be-wp-theme-variations-1568x773.png 1568w, /assets/images/wp-images/2021/03/be-wp-theme-variations.png 1600w" sizes="(max-width: 1220px) 100vw, 1220px" />*A typical &#8220;multi-purpose&#8221; WordPress theme*

## How fast should a site be? {#h-how-fast-should-a-site-be}

It&#8217;s all well and good talking about speeding up WordPress, but what constitutes a fast site? Is a 10 second load time ok? What about 5 seconds? That&#8217;s pretty quick, right? 3 seconds? Now we&#8217;re talking, surely?

Well, some clever boffins did some research and established that **if your site takes more than 3 seconds to load, 57% of visitors will leave** before it&#8217;s done loading (<a href="https://www.hostingmanual.net/3-seconds-how-website-speed-impacts-visitors-sales/" target="_blank" rel="noreferrer noopener">source</a>).

So the answer is **a MAXIMUM of 3 seconds**, but make it as quick as possible. For example, <a href="https://kevq.uk/the-wonderful-world-of-wordpress-wizardry-for-working-with-websites/" target="_blank" rel="noreferrer noopener">this site is running WordPress</a> and <a href="https://gtmetrix.com/reports/kevq.uk/R6G9CMSB/" target="_blank" rel="noreferrer noopener">according to GTMetrix</a> it loads in 0.6 seconds. I&#8217;m happy with that.

## Speeding up WordPress {#h-speeding-up-wordpress}

So now we have an idea of what causes WordPress to be slow, let&#8217;s look at some solutions, shall we? My recommendations for speeding up a WordPress site are 7 fold:

  1. Choose a high quality host.
  2. Pick a theme that doesn&#8217;t try to do everything.
  3. Be picky with the plugins you install.
  4. Cache all the things.
  5. Use a Content Delivery Network (CDN).
  6. Limit web fonts.
  7. Optimise your images.

### 1. High quality hosting {#h-1-high-quality-hosting}

As I mentioned earlier, $5/month shared hosting providers are utterly useless. I can&#8217;t stress this enough, folks. **DO NOT** **USE SHARED HOSTING**. They&#8217;re generally over-subscribed &#8211; meaning too many customers share a single server &#8211; which directly impacts the performance of all sites using that server.

Instead, get a Virtual Private Server (VPS). These are servers that are much more powerful than shared hosting because they have a minimum guaranteed amount of resources that no-one else can hog.

<a href="https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357003T7073a&kwk=634887631" target="_blank" rel="noreferrer noopener">I personally recommend Ionos</a> which is who I use to host this website. What I love about Ionos is that they offer a free <a href="https://www.plesk.com/" target="_blank" rel="noreferrer noopener">Plesk</a> license with all their VPS packages, so it&#8217;s just as easy to manage as one of those shitty shared hosts running cPanel.

I&#8217;m using the Medium VPS package from Ionos, which costs just £6/month (~$8.50/month). Considering that BlueHosts basic shared hosting package is £6.44/month ($9/month), the Ionos VPS is actually a lot more power for less money.

### 2. Consider your theme {#h-2-consider-your-theme}

I&#8217;m going to keep this high level as there are literally thousands of themes out there that you can use. If you&#8217;re running a simple blog like me, you probably don&#8217;t need a great deal of functionality, so is it worth buying an all-singing, all-dancing theme? Probably not.

I run a slightly customised version of WordPress&#8217; default <a href="https://kevq.uk/a-child-of-twenty-twenty-one/" target="_blank" rel="noreferrer noopener">Twenty Twenty-One theme</a>. It&#8217;s simple, looks good and doesn&#8217;t have any extra functionality that I don&#8217;t need.

The best advice I can give you is to stay away from page builders and &#8220;multi-purpose&#8221; themes. They try to cater for too many uses and end up being incredibly bloated as a result.

### 3. Be picky with plugins {#h-3-be-picky-with-plugins}

I have 11 plugins on this site, all of which add something that I need for this site to function. For example, my plugins add functionality like <a href="https://kevq.uk/what-is-two-factor-authentication/" target="_blank" rel="noreferrer noopener">2 factor authentication</a>, backups and advanced SEO features.

I **do not** have plugins that add front-end &#8220;features&#8221; like lightbox on images, or social sharing buttons. It&#8217;s all just extra code that isn&#8217;t really needed and is unlikely to be used by most visitors.

By reducing the amount of plugins you have installed, you&#8217;re literally reducing the number of lines of code your site needs to run. Therefore your site is smaller and quicker to load. Poorly coded plugins can also introduce security vulnerabilities, so please be really picky about which plugins you install.

### 4. Cache all the things {#h-4-cache-all-the-things}

The single biggest impact you can have on speeding up a WordPress site, aside from hosting, is caching. It&#8217;s massively important.

<a href="https://kevq.uk/which-is-the-best-wordpress-caching-plugin/" target="_blank" rel="noreferrer noopener">I compared a number of common caching plugins</a> recently and while they all had a positive impact on my website&#8217;s performance, I chose to go with <a href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">WP Rocket</a>.

<img loading="lazy" width="1220" height="661" src="/assets/images/wp-images/2021/03/wp-rocket-dashboard-1220x661.png" alt="WP Rocket dashboard" class="wp-image-4902" srcset="/assets/images/wp-images/2021/03/wp-rocket-dashboard-1220x661.png 1220w, /assets/images/wp-images/2021/03/wp-rocket-dashboard-610x331.png 610w, /assets/images/wp-images/2021/03/wp-rocket-dashboard-768x416.png 768w, /assets/images/wp-images/2021/03/wp-rocket-dashboard.png 1327w" sizes="(max-width: 1220px) 100vw, 1220px" />  

WP Rocket is superb. I&#8217;ve been using it for a little over a year and a half now and I&#8217;m very happy with it. There are other caching plugins available, obviously. If you don&#8217;t want to pay for WP Rocket, I&#8217;d recommend taking a look at <a href="https://kevq.uk/which-is-the-best-wordpress-caching-plugin/" target="_blank" rel="noreferrer noopener">my comparison post</a> and picking a free alternative.

### 5. Use a CDN {#h-5-use-a-cdn}

A Content Delivery Network (CDN) basically copies the static parts of your site to servers located all over the world. So if your server is in London, and someone visits from New Zealand, that data needs to be transmitted right around the globe.

With a CDN, there would be a local server, in Australia for example, where your static content will be served from. This means your site would load **much** quicker.

<img loading="lazy" width="1218" height="614" src="/assets/images/wp-images/2021/03/cdn-traffic-map.png" alt="My CDN traffic plotted on a map" class="wp-image-4904" srcset="/assets/images/wp-images/2021/03/cdn-traffic-map.png 1218w, /assets/images/wp-images/2021/03/cdn-traffic-map-610x308.png 610w, /assets/images/wp-images/2021/03/cdn-traffic-map-768x387.png 768w" sizes="(max-width: 1218px) 100vw, 1218px" /> *My CDN traffic plotted on a map*

I personally use and recommend <a href="https://bunnycdn.com/?ref=gnn7bkvipc" target="_blank" rel="noreferrer noopener">BunnyCDN</a>. Their service is excellent and they&#8217;re really cheap. For example, the CDN charges for this site cost me around $1/month.

WP Rocket makes using a CDN very simple, as do many other caching plugins. So teaming up WP Rocket and BunnyCDN will have a dramatic impact on your site&#8217;s performance.

### 6. Limit use of web fonts {#h-6-limit-use-of-web-fonts}

Web fonts can be used to give your site a unique look. They are served from your server, or a service like Google Fonts. However, font files can be **really** big, so they add a lot of size (and therefore load time) to your site.

If you still want to use web fonts, I&#8217;d recommend using <a href="https://google-webfonts-helper.herokuapp.com/fonts" target="_blank" rel="noreferrer noopener">this tool</a> to pull down highly optimised versions of web fonts from Google Fonts. You could serve them direct from Google, but there are privacy implications.

I personally use a single web font on this site, Fira Sans Condensed. This adds around 30kb of site to my page load, but it&#8217;s a pretty slim site already, so I&#8217;m happy to do it.

Alternatively, think about using a [local font stack](https://kevq.uk/how-local-fonts-can-save-the-environment/), which is a list of system fonts that most operating systems have installed, so they&#8217;re loaded immediately from the local computer.

<blockquote class="wp-block-quote is-style-default">
  <p>
    But Kev, I don&#8217;t want my site to use ugly local fonts. People hate them and it will make my site look rubbish!
  </p>

  <cite>&#8212; Website owners everywhere</cite>
</blockquote>

Well, I hate to burst your bubble, dear website owner, but **the only person who cares about your custom fonts is you**. Question &#8211; do the fonts on <a href="https://github.com" target="_blank" rel="noreferrer noopener">GitHub</a> or on <a href="https://google.com" target="_blank" rel="noreferrer noopener">Google</a>? How about <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">Twitter</a>?

All of the fonts on the sites listed above look fine, right? You may not think _&#8220;Gosh, these fonts look amazing!&#8221;_ But you don&#8217;t give it a second thought either, I bet.

<p class="has-medium-font-size">
  Well, all of the sites above use local font stacks!
</p>

So stop using services like Google Fonts, and serve up a local font stack instead. Here are some example font stacks you could use:

<pre class="wp-block-code"><code># Sans-Serif font stack
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

# Serif font stack
font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;

# Monospace font stack
font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;</code></pre>

### 7. Optimise your images {#h-7-optimise-your-images}

Images are generally the single largest element on a web page. So it&#8217;s really important to optimise them. For this, I would recommend the <a href="https://shortpixel.com/otp/af/DPJPTHN1231799" target="_blank" rel="noreferrer noopener">ShortPixel image optimiser</a> service.

The ShortPixel plugin will take your images as you upload them to WordPress, and optimise them to reduce their size dramatically.

With ShortPixel you get 100 free optimised images per month, which is fine for most people&#8217;s usage. If that&#8217;s not enough though, they also have the option to upgrade to paid plans that are relatively cheap.

They also have the option of buying one-off bulk image credits, which are useful for going back and optimising all the images on your site.

<img loading="lazy" width="1220" height="666" src="/assets/images/wp-images/2021/03/shortpixel-stats-1220x666.png" alt="ShortPixel stats" class="wp-image-4910" srcset="/assets/images/wp-images/2021/03/shortpixel-stats-1220x666.png 1220w, /assets/images/wp-images/2021/03/shortpixel-stats-610x333.png 610w, /assets/images/wp-images/2021/03/shortpixel-stats-768x419.png 768w, /assets/images/wp-images/2021/03/shortpixel-stats.png 1241w" sizes="(max-width: 1220px) 100vw, 1220px" />  

As you can see from the image above, I my image sizes are reduced by an average of 62% using ShortPixel. This has equated to a huge 1.25TB of bandwidth that&#8217;s been saved!

Optimisating your images is a crucial part of speeding up a WordPress site.

## Conclusion {#h-conclusion}

All of my recommendations above are relatively simple to implement and don&#8217;t require you to be some kind of web dev genius. By implementing some, or all, of the recommendations above, you **will** speed up your WordPress site significantly.

Now, there&#8217;s always more you can do and if you&#8217;re that way inclined, this post probably doesn&#8217;t cut the mustard for you. But if you&#8217;re a _set it and forget it_ kind of person that just wants a fast WordPress site that you don&#8217;t need to worry about, this post should leave you in relatively good shape.

**Do you think I&#8217;ve missed something? If so, please [let me know](https://kevq.uk/contact/) and I&#8217;ll be happy to add it.**
