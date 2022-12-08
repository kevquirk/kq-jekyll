---
title: How Browser Fingerprinting Works
layout: post
permalink: /how-browser-fingerprinting-works/
description: Tracking isn't all about cookies - browser fingerprinting is also widely used, but what is browser fingerprinting?
categories:
  - Privacy
  - Security
---
I recently wrote a post called [how online tracking works](/how-online-tracking-works), that post mainly focussed on cookies and how they can be used to track you. But even if a site isn&#8217;t using cookies, browser fingerprinting can still be used to track you.

## What is browser fingerprinting? {#h-what-is-browser-fingerprinting}

Browser fingerprinting is the process of collecting information about a remote device for identification purposes. Client-side scripting languages, like JavaScript, can be used in such as way to collect very detailed fingerprints.

These fingerprints can include data such as geographic location, the browser and operating system that is in use, screen resolution, system fonts, system architecture, browser plugins and system hardware.

Like all tracking technology, browser fingerprinting can be used both legitimately and maliciously.

Fingerprints can be used to prevent fraud or credential hijacking, by checking that a user who is attempting to login is likely legitimate. For example, if you have logged in to `cool-website.com` for the last 5 years from the UK and using Ubuntu, then someone attempts to login to your account from Germany on a Windows system, this can flag as potentially illegitimate.

But like most things online, browser fingerprints can also be used in more nefarious way, to track you across web sites and collect information about your habits and tastes without you even knowing it.

Browser fingerprinting can even be used in a downright malicious way; if an attacker knows which operating system, software, versions, plugins and hardware you&#8217;re using, they can potentially deliver exploits that are specifically crafted for your machine and therefore are more likely to be successful.

## How are browser fingerprints collected? {#h-how-are-browser-fingerprints-collected}

Browser fingerprints do not require cookies or any kind of user interaction. The fingerprinting process simply runs when a website is loaded. This means that the act of fingerprinting your browser is completely transparent. Browser fingerprinting can be achieved in a number of ways:

  * Your public IP address can be used to geolocate you. This is usually accurate to the town/city you&#8217;re based in.
  * The [user agent](https://en.wikipedia.org/wiki/User_agent) and [accept header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) are automatically sent to websites when you make a connection.
  * JavaScript is widely used across the Internet and it can be used to provide data on things like the plugins you have installed on your browser.
  * If the Flash plugin is installed, its API provides access to many system-specific attributes such as exact version of the operating system, list of fonts, screen resolution, timezone etc.
  * A HTML5 Canvas element can be used to collect small differences in the hardware or software. This is because every machine will render an image in a different way. With [canvas fingerprinting](https://en.wikipedia.org/wiki/Canvas_fingerprinting), the tiniest of details can be detected.

## Can I prevent browser fingerprinting? {#h-can-i-prevent-browser-fingerprinting}

In short, no you can&#8217;t. There are some things you can do, such as disable JavaScript and image rendering, but this would have a huge impact on your online experience.

Also, very few people have JavaScript and image rendering disabled, so this also makes you unique and easier to fingerprint. So although a website may not know certain details about your system because JavaScript is disabled, the very fact of having JavaScript disabled makes you pretty unique, so you can&#8217;t win.

## Conclusion {#h-conclusion}

This post only scratches the surface of browser fingerprinting, but hopefully it will give you a better idea of how it works.

I will leave you with this final thought &#8211; I just tested my browser fingerprint using [this tool from the EFF](https://panopticlick.eff.org). My browser was found to be **completely unique** among the 228,000 browsers tested in the last 45 days.

<div class="wp-block-image">
  <img loading="lazy" width="633" height="411" src="/assets/images/wp-images/2019/11/browser-fingerprint.png" alt="Browser Fingerprint Results" class="wp-image-143" srcset="/assets/images/wp-images/2019/11/browser-fingerprint.png 633w, /assets/images/wp-images/2019/11/browser-fingerprint-300x195.png 300w" sizes="(max-width: 633px) 100vw, 633px" />
</div>

##### That&#8217;s how powerful browser fingerprinting is! {#h-that-s-how-powerful-browser-fingerprinting-is}

So even if you have [3rd party cookies](/how-online-tracking-works) blocked, you can still be identified and tracked online. Worse still, there&#8217;s currently no easy way of preventing browser fingerprinting.
