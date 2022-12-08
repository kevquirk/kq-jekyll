---
title: How Online Tracking Works
layout: post
permalink: /how-online-tracking-works/
description:
  - Privacy advocates talk about online tracking a lot, but how does online tracking work? This post may help explain how it all works.
categories:
  - Privacy
  - Security
  - Technology
---
With the numerous Facebook snafu&#8217;s going around, as well the feeling that new data breaches are being reported daily, privacy is currently top of mind in the tech world. For many, privacy equates to advertising, cookies and tracking, but it&#8217;s so much more than those three things alone. Having said that, they certainly don&#8217;t help things so in this post, I&#8217;m going to try and explain how online tracking works. I think I have a relatively good understanding of things, but it&#8217;s a complicated subject, so I&#8217;ll try and keep it as simple as possible.

> If you can&#8217;t explain it simply, you don&#8217;t understand it well enough.
>
> <cite>- Albert Einstein</cite>

## Why do we need to know? {#h-why-do-we-need-to-know}

I think that if you understand what makes online tracking bad, you can better protect yourself against it. So by understanding how online tracking works, you may be able to stop your details being listed in the next breach that finds itself on Pastebin.

With that in mind, there&#8217;s a lot for us to get through, so let&#8217;s get started shall we?

## What is a cookie? {#h-what-is-a-cookie}

Contrary to popular belief, cookies are not biscuits, and they are not necessarily malicious. A cookie in this context is a small text file that is stored on your machine. Cookies are created by your browser, and they contain a small amount of data that is specific to a the website that you have visited, usually in the form of a `session ID`.

Most modern websites use cookies for two main purposes &#8211; to keep you logged in and to track your behaviour.

## How cookies keep you logged in {#h-how-cookies-keep-you-logged-in}

When you log in to a website, let&#8217;s use Facebook as an example, your browser sends Facebook a message informing it you wish to log in. We call this a _HTTP request_. This message contains your username and password (that&#8217;s [why HTTPS is important](/why-https-is-important)), if your credentials match what Facebook has on record, you&#8217;re allowed to log in.

Once you&#8217;re cleared to login, Facebook will generate a unique `session ID` and sends it to your browser. Your browser then creates a cookie containing your `session ID`. The cookie is stored on your machine and sent to Facebook along with every _HTTP request_ your machine creates. When you then navigate around Facebook, they know its you and don&#8217;t ask you to log in again.

<img loading="lazy" width="1001" height="600" src="/assets/images/wp-images/2019/11/fb-cookie.jpg" alt="Facebook Cookie" class="wp-image-287" srcset="/assets/images/wp-images/2019/11/fb-cookie.jpg 1001w, /assets/images/wp-images/2019/11/fb-cookie-300x180.jpg 300w, /assets/images/wp-images/2019/11/fb-cookie-768x460.jpg 768w" sizes="(max-width: 1001px) 100vw, 1001px" />  

Without a `session ID` Facebook would ask you to login every single time you navigate to a different page. This would get pretty annoying, pretty quick. So this is a legitimate use for cookies where they are used in an innocuous manner.

## How cookies can be used to track you {#h-how-cookies-can-be-used-to-track-you}

If a website, like Facebook, requires a login to be used, it&#8217;s extremely simple to track you while you use their service. This is because you already have a cookie with a `session ID` stored on your device. Since this cookie is used with every request you send to the site, the website owner knows exactly where you have been and what you have done during your session.

This data can then be used to create a profile of your usage habits, and the more you use a service, the more data they have on you. This profile can then be used to send you targetted advertising; the rationale being that if you&#8217;re shown an advert for something you&#8217;re interested in, you&#8217;re going to be more likely to click on it.

This is also how sites like YouTube can recommend other content that is based on your tastes &#8211; because they&#8217;re tracking you and know exactly what you have been doing while on their site.

For me, this is where cookies start to mutate from being a benign, useful tool, to a potentially nefarious tracking mechanism.

<img loading="lazy" width="1001" height="600" src="/assets/images/wp-images/2019/11/fb-session-id.jpg" alt="Facebook tracking cookie" class="wp-image-288" srcset="/assets/images/wp-images/2019/11/fb-session-id.jpg 1001w, /assets/images/wp-images/2019/11/fb-session-id-300x180.jpg 300w, /assets/images/wp-images/2019/11/fb-session-id-768x460.jpg 768w" sizes="(max-width: 1001px) 100vw, 1001px" />  

## Third party cookies &#8211; single site {#h-third-party-cookies-single-site}

If a website does not require a login, you&#8217;re still not safe unfortunately. Many sites use third party cookies for things like analytics, as knowing which pages are popular and how much traffic your site is getting can be useful information. There are ways to do this analysis without cookies; for example, using web server log analysis, or by still using an analytics platform, but not allowing them to create cookies on your visitor&#8217;s device. This means that the stats are a little less accurate, but still give a good idea of visitor counts. This is how I monitor the analytics for this website.

Ok, so how does a third party analytics platform, such as Google Analytics or Matomo, know when someone visits your site? Lets use a news site as an example, when a person visits _news-site.com_ the news site doesn&#8217;t create a `session ID` itself, but instead has a little snippet of JavaScript code that in turn sends a request to the analytics platform, which then creates the `session ID` and places it on the visitor&#8217;s device.

Since the `session ID` is unique to that visitor, it is used to track that person&#8217;s activity throughout the site, as the `session ID` will be sent back to the analytics platform along with any requests to _news-site.com_.

Analytics platforms are popular and will likely be tracking multiple sites &#8211; that&#8217;s especially true when it comes to Google Analytics. However, analytical data is **not** shared between sites being tracked.

So if _news-site.com_ and _banking-site.net_ are both using Google Analytics to track their visitors, Google Analytics will not co-mingle the news and banking site&#8217;s data. Therefore the tracking cookie for _news-site.com_ can only be used to track you on that particular site.

That&#8217;s not to say that Google isn&#8217;t finding other ways to interpret all this data in such a way to be of benefit to them, but I couldn&#8217;t possibly speculate. ?

<img loading="lazy" width="1001" height="600" src="/assets/images/wp-images/2019/11/single-site-tracking.jpg" alt="Single site tracking" class="wp-image-289" srcset="/assets/images/wp-images/2019/11/single-site-tracking.jpg 1001w, /assets/images/wp-images/2019/11/single-site-tracking-300x180.jpg 300w, /assets/images/wp-images/2019/11/single-site-tracking-768x460.jpg 768w" sizes="(max-width: 1001px) 100vw, 1001px" />  

## Third party cookies &#8211; multi-site {#h-third-party-cookies-multi-site}

This is where shit gets real and really starts to make me feel uneasy. Multi-site third party tracking works in a very similar way to single site tracking, however when the `session ID` is generated for that visitor on _news-site.com_, the same `session ID` is shared across all sites within that tracking platform.

This means that the third party tracking platform can now track you over _any_ site they have subscribed to their platform. Worse still, that data is available to any website owners using that platform **_AND_** is often sold to fourth parties, such as advertisers.

Have you ever gone on to Amazon and searched for something, then seen adverts for that exact item you just looked at on Facebook? That&#8217;s because of third party multi-site cookies. When you visit Amazon and search for hard drives, Facebook is also using the same multi-site tracking company, so you have the same `session ID` across both sites. This means that Facebook knows you just searched for hard drives on Amazon, so then shows you adverts for said hard drive in the hope that you click.

<img loading="lazy" width="1001" height="600" src="/assets/images/wp-images/2019/11/multi-site-tracking.jpg" alt="Multi-site tracking" class="wp-image-290" srcset="/assets/images/wp-images/2019/11/multi-site-tracking.jpg 1001w, /assets/images/wp-images/2019/11/multi-site-tracking-300x180.jpg 300w, /assets/images/wp-images/2019/11/multi-site-tracking-768x460.jpg 768w" sizes="(max-width: 1001px) 100vw, 1001px" />  

## Not just advertising {#h-not-just-advertising}

We&#8217;re not just talking about advertising here. The multi-site platform will have many sites over many niches signed up to their service. So you can potentially be tracked across social media, shopping sites, news sites, porn sites, or any other sites you can think of.

With this tracking, an **extremely** detailed profile can be built up on you. Imagine a profile that contains your likes and dislikes, where you like to visit and things like the type of porn you prefer. Then when it comes to Google, this profile could also contain your search history, location tracking from your Android device, your contacts, your calendars, your emails, your text messages, phones calls etc. etc. etc.

Pretty worrying, right?

## How can I protect myself? {#h-how-can-i-protect-myself}

It isn&#8217;t all bad news, as there are tools out there that you can use to protect yourself. The major browsers have options available for blocking third party cookies; here are instructions for both [Firefox](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) and [Chrome](https://support.google.com/chrome/answer/114662?co=GENIE.Platform%3DDesktop&hl=en).

<img loading="lazy" width="1004" height="663" src="/assets/images/wp-images/2020/07/firefox-content-filter.png" alt="Firefox content filter" class="wp-image-2581" srcset="/assets/images/wp-images/2020/07/firefox-content-filter.png 1004w, /assets/images/wp-images/2020/07/firefox-content-filter-300x198.png 300w, /assets/images/wp-images/2020/07/firefox-content-filter-768x507.png 768w" sizes="(max-width: 1004px) 100vw, 1004px" />  

Having said that, I would still recommend installing a content filter add-on to your browser, I personally use [uBlock Origin](https://github.com/gorhill/uBlock). It&#8217;s available for all major browsers, it&#8217;s free and is pretty much set it and forget it when it comes to blocking trackers.

Then there&#8217;s VPN services. Many think a VPN is a magic pill against all things privacy on the Internet. Unfortunately, that isn&#8217;t the case &#8211; whilst a VPN will help give you some anonymity, as many people are likely using the same public IP addresses that VPN provider uses, you&#8217;re still being tracked.

The best advice I can give over and above everything else is to **use privacy respecting services online.** Or, better yet, self-host those services. I personally [de-Googled](/categories/de-googling) a lot of the services I use, and I do host some of them myself too. Here are some quick recommendations:

  * [DuckDuckGo](https://duckduckgo.com) instead of Google search.
  * [Nextcloud](/how-to-setup-a-nextcloud-server-in-ubuntu) instead of Google Drive or Dropbox.
  * [Fastmail](https://fastmail.com) or [Zoho Mail](https://mail.zoho.com) instead of Gmail.
      * [Tutanota](https://www.tutanota.com) and [Proton](https://protonmail.com) are also highly recommended, but they include extra security that some less technical users may find confusing.
  * [Mastodon](/getting-started-with-mastodon) instead of Facebook and Twitter.
  * [PixelFed](https://pixelfed.social) instead of Instagram.
  * [Signal](https://www.signal.org) instead of WhatsApp.

## Conclusion {#h-conclusion}

By replacing core services with privacy respecting ones, and taking a few steps to block trackers while you&#8217;re browsing the web, you can make your online experience much more private. Having such an in-depth profile that is easily identifiable to a single person really concerns me. Especially when that profile is then being sold on to advertisers and other potentially nefarious 3rd parties for a profit. This is our personal data, they have no right to sell it on!

So there you have it, you now have a better idea of how online tracking works. This post doesn&#8217;t cover everything, far from it actually, but I hope it&#8217;s enough for you to start making informed decisions about where your personal data could potentially end up.

**What steps do you take to maintain your privacy online? Please feel free to leave a comment below to tell me about it.**

#### And remember, [I respect your privacy](/privacy)! {#h-and-remember-i-respect-your-privacy}
