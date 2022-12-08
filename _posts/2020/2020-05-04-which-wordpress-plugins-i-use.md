---
id: 1841
title: Which WordPress Plugins I Use
date: 2020-05-04T12:12:18+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=1841
permalink: /which-wordpress-plugins-i-use/
description:
  - WordPress is a fantastic ecosystem with hundreds of thousands of plugins available. I wanted to talk about the WordPress plugins I use and why.
categories:
  - Web
---
#### WordPress is a fantastic ecosystem with [hundreds of thousands of plugins available](https://wordpress.org/plugins/). I wanted to talk about the plugins I use and why. {#h-wordpress-is-a-fantastic-ecosystem-with-hundreds-of-thousands-of-plugins-available-i-wanted-to-talk-about-the-plugins-i-use-and-why}

WordPress plugins form an important part of many WordPress sites as they easily add features and functionality. However, on many occasions I&#8217;ve said that [I&#8217;d much rather code features into my theme myself](https://kevq.uk/how-to-add-an-old-post-notice-to-wordpress/), than use plugins.

Adding plugins to your WordPress site always introduces more code, which in turn introduces more risk. WP Rocket have a great post about [the risks of adding plugins to WordPress](https://wp-rocket.me/blog/wordpress-plugins-many/).

## How Many WordPress Plugins? {#h-how-many-wordpress-plugins}

In the WP Rocket post, they mention that the recommended amount of plugins for shared hosting is 0-5, and 5-20 for VPS hosting.

Those numbers are actually a lot lower than I was expecting &#8211; I really don&#8217;t think there are many WordPress sites that have 0-5 plugins installed. Some have _hundreds_. I use a VPS to host this site, so technically speaking, I should have no more than 20 plugins installed.

**I currently have 13 plugins installed on this site**, most of which are to do with the IndieWeb. As [I&#8217;m still pretty new to it all](https://kevq.uk/implementing-the-indieweb-into-my-website/), I&#8217;ve opted to work with the plugins for the time being, rather than code the features into my theme.

## The Plugins that I use {#h-the-plugins-that-i-use}

Anyway, enough ramble. Let&#8217;s get on with talking about the plugins I use on this site. Here&#8217;s a list of the plugins that I use, along with what I use them for:

### 01. [Classic Editor](https://wordpress.org/plugins/classic-editor/) {#h-01-classic-editor}

_Classic Editor_ replaces [the new Gutenberg editor](https://wordpress.org/gutenberg/) with the old editor. I use Guttenberg most of the time, but some of the post types required for the IndieWeb need the classic editor.

I didn&#8217;t really like Gutenberg when it first came out, but I now really like it and actually find the classic editor quite alien to use.

### 02. [IndieAuth](https://wordpress.org/plugins/indieauth/) {#h-02-indieauth}

IndieAuth is part of the IndieWeb. It allows me to use my own website as a single sign on endpoint. So I can use this site to sign into other services. Any site that uses OAuth 2.0 should work with IndieAuth.

### 03. [IndieWeb](https://wordpress.org/plugins/indieweb/) {#h-03-indieweb}

This is the main IndieWeb WordPress plugin. It provides the backbone of all things IndieWeb to this site, including microformats 2 support.

### 04. [Post Kinds](https://wordpress.org/plugins/indieweb-post-kinds/) {#h-04-post-kinds}

Again, this is part of the IndieWeb (are you seeing a pattern yet?) This is the utility that plugs into the classic editor and allows me to create things like IndieWeb replies, likes and mentions.

<img loading="lazy" width="1024" height="552" src="/assets/images/wp-images/2020/05/indieweb-post-kinds-reply-1024x552.png" alt="IndieWeb reply using Post Kinds" class="wp-image-1852" srcset="/assets/images/wp-images/2020/05/indieweb-post-kinds-reply-1024x552.png 1024w, /assets/images/wp-images/2020/05/indieweb-post-kinds-reply-300x162.png 300w, /assets/images/wp-images/2020/05/indieweb-post-kinds-reply-768x414.png 768w, /assets/images/wp-images/2020/05/indieweb-post-kinds-reply.png 1431w" sizes="(max-width: 1024px) 100vw, 1024px" />
*IndieWeb reply using Post Kinds*

Now I could quite easily create a standard post that looks just like the screenshot above. However, the Post Kinds plugin does a lot of clever stuff in the background that adds IndieWeb compatibility.

### 05. [Semantic-Linkbacks](https://wordpress.org/plugins/semantic-linkbacks/) {#h-05-semantic-linkbacks}

Yep, this is _another_ IndieWeb plugin. Basically, what this plugin does is format Webmentions in a nicer fashion on the front-end of the website.

I&#8217;m not actually sure this plugin is required, as I format my Webmentions with CSS anyway. I need to do some playing around on my staging site, I just haven&#8217;t had time, but I think this plugin will likely be deleted soon.

### 06. [ShortPixel Image Optimizer](https://wordpress.org/plugins/shortpixel-image-optimiser/) {#h-06-shortpixel-image-optimizer}

Finally a plugin that isn&#8217;t related to the IndieWeb. This plugin came by recommendation of [Nathan DeGrunchy](https://fosstodon.org/@ndegruchy) on Fosstodon.

ShortPixel basically optimises images as they are uploaded to your WordPress site, and it works extremely well too. In my [Oscar fish tank](https://kevq.uk/the-battle-of-the-oscar-fish-tank/) post from yesterday, I deliberately uploaded photos that were around 2.6MB n size. ShortPixel crushed them to around 100KB with no obvious reduction in quality.

ShortPixel is an _excellent_ plugin.

### 07. [Two Factor Authentication](https://wordpress.org/plugins/two-factor-authentication/) {#h-07-two-factor-authentication}

This is a pretty straightforward one really. _Two Factor Authentication_ adds support for 2FA TOTP passcodes, adding security to the login process.

Personally, I think 2FA should be a core part of WordPress, rather than relying on WordPress plugins, but alas it isn&#8217;t. Hopefully 2FA support will come one day, but until then I&#8217;ll use this plugin.

### 08. [Updraftplus](https://wordpress.org/plugins/updraftplus/) {#h-08-updraftplus}

_Updraftplus_ is one of the best WordPress plugins for backing up a site. I take regular server level backups anyway, but having additional website level backups doesn&#8217;t hurt.

I&#8217;ve been using Updraftplus for years and it has pulled me out of the shit a number of times. I personally pay for the SFTP plugin, so I can offload my backups to my Synology via SFTP.

### 09. [Webmention](https://wordpress.org/plugins/webmention/) {#h-09-webmention}

Webmention is part of the IndieWeb too. It&#8217;s kind of like a next generation WordPress pingback. Basically it&#8217;s the mechanism by which sites within the IndieWeb send messages to one another.

### 10. [WebSub/PubSubHubbub](https://wordpress.org/plugins/pubsubhubbub/) {#h-10-websub-pubsubhubbub}

Yet another IndieWeb plugin. PubSubHubbub/WebSub (stupid name, I know) is a simple way to let people know in real-time when my site is updated.

Subscription requests are relayed through hubs, which validate and verify the request. Hubs then distribute new and updated content to subscribers when it becomes available.

### 11. [WP Rocket](https://wp-rocket.me/) {#h-11-wp-rocket}

_WP Rocket_ is the best caching plugin I&#8217;ve ever used. It&#8217;s not free, costing $49/site/year, but it&#8217;s so worth it. This plugin is integral to many of the [optimisations I&#8217;ve made on this site](https://kevq.uk/how-i-optimise-my-website-performance/).

I also use WP Rocket to integrate [BunnyCDN](https://bunnycdn.com/?ref=gnn7bkvipc) into this site.

### 12. [WPFront Scroll Top](https://wordpress.org/plugins/wpfront-scroll-top/) {#h-12-wpfront-scroll-top}

<s>T_his is a simple one really, as it adds the &#8220;back to top&#8221; icon on my pages and posts. I really need to take some time to integrate a back to top link into my theme, so I can get rid of this plugin._</s>

I have now replaced this plugin with a [simple HTML/CSS solution](https://kevq.uk/adding-a-scroll-to-top-button-without-javascript/) in the footer.

### 13. [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/) {#h-13-yoast-seo}

_Yoast SEO_ is an excellent SEO (Search Engine Optimisation) plugin. It&#8217;s a great way of tracking not only your SEO goals, if you have any, but also the readability of your posts too.

Yoast SEO has really helped to improve my writing over the years.

## Conclusion {#h-conclusion}

As you can see, the vast majority of the WordPress plugins on this site are related to the IndieWeb.

I think there are definitely some plugins I can remove from this site, which I will get around to eventually. In the meantime though, I don&#8217;t think 13 WordPress plugins is an excessive amount. **How many do you have?**
