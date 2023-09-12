---
id: 3533
title: Removing Support For The IndieWeb
date: 2020-11-13T15:25:06+00:00

layout: post
permalink: /removing-support-for-the-indieweb/
description:
  - I recently redesigned this website and when I did, I removed all of the IndieWeb functionality from it. This post talks about why I did that.
categories:
  - Opinion
  - Technology
  - Web
---
<p class="tldr">
  I recently <a href="https://kevq.uk/a-nod-to-the-90s-web/">redesigned this website</a>. When I did, I removed all of the IndieWeb functionality from it. This post talks about why I did that.
</p>

## What is the IndieWeb? {#h-what-is-the-indieweb}

I suppose a good place to start would be to talk about what the IndieWeb actually is. On <a href="https://indieweb.org/" target="_blank" rel="noreferrer noopener">their website</a>, they describe it as _a people-focused alternative to the &#8220;corporate web&#8221;_.

That&#8217;s a pretty cryptic description that isn&#8217;t a lot of use to most people. In English, the IndieWeb is a suite of tools that you can integrate into your website which allow you to communicate with other sites who have done the same.

I tend to think of the IndieWeb as a decentralised social network that&#8217;s embedded in to my website. So if I post something on this blog, and link to another IndieWeb enabled blog, they will get a notification. These notifications are called Webmentions.

The IndieWeb isn&#8217;t just about notification tomfoolery though. Oh no dear reader, it also includes things like a Twitter style micro-blog and an authentication system. If you want to know about what it can do, <a rel="noreferrer noopener" href="/implementing-the-indieweb-into-my-website/" target="_blank">check out this post</a> or <a rel="noreferrer noopener" href="https://indieweb.org/Getting_Started" target="_blank">their getting started guide</a>.

## Why remove IndieWeb support? {#h-why-remove-indieweb-support}

So this all sounds brilliant, right? Why wouldn&#8217;t someone want to implement such a feat of social mastery into their personal website?

While this all sounds great on the surface, there are a couple of drawbacks that really taint the entire experience:

  1. The IndieWeb is convoluted and difficult to manage.
  2. Because of #1, not many people use it.

### 1. Convoluted and difficult to manage {#h-1-convoluted-and-difficult-to-manage}

The IndieWeb is made up of multiple parts, but linking them all together and managing them is difficult to both wrap your head around and implement into your site. I myself only used a few core parts of the whole system; namely webmentions, a profile and IndieAuth.

In order to implement those 3 services, **I had to install 7 (yes, SEVEN) bloody WordPress plugins** on this site. They did a vast array of things, including adding support for the kitchen sink, but it was too much.

All this just so I could occasionally log into other sites instead of signing up, and so I could get my <a rel="noreferrer noopener" href="https://fosstodon.org" target="_blank">Fosstodon</a> comments piped into here via Webmention. Overkill to the max, kids!

### 2. No one is using it {#h-2-no-one-is-using-it}

The IndieWeb is more prevalent in the privacy circles that I run in, but even then I&#8217;ve seen many a web dev cry out in utter frustration that the whole thing is just too complicated.

What I have seen &#8212; and this is purely anecdotal &#8212; is that people try to implement it, get the basics working, then give up.

The only real value I got from the IndieWeb would be the occasional Webmention from another site that supports it. I become aware of the post, and they get some exposure by having a link to their post in my comments section.

That was a great feature, but these comments were like 1 in 20 if I was lucky, and they didn&#8217;t warrant 7 bloody plugins!

## Removing it all {#h-removing-it-all}

So when I redesigned this site with a 90s feel, I decided I would strip out all of the IndieWeb stuff. I also went one step further and stripped out comments all together. So none of my posts have comments now.

Instead I&#8217;ve gone full-blown 90s and [implemented a guestbook instead](https://kevq.uk/guestbook/). This still allows people to have their say on this site as well a proving some kind of community vibe.

Crucially though, a guestbook is oh so 90s! Think MC Hammer, Saved By The Bell, Forrest Gump and Tab Clear. It&#8217;s awesome! ?

## Conclusion {#h-conclusion}

Never say never; comments (or even the IndieWeb) may have a resurgence on this site at some point. But for now, I&#8217;m happy with the decision to roll an old skool guestbook instead.

**Have you integrated the IndieWeb into your site? If so, I&#8217;d love to hear your thoughts and experiences around the whole thing. Feel free to sign my <a rel="noreferrer noopener" href="https://kevq.uk/guestbook/" target="_blank">guestbook</a>, or <a rel="noreferrer noopener" href="https://kevq.uk/contact/" target="_blank">contact me</a> if you want to talk.**
