---
title: Why I Don’t Use A Static Site Generator
date: 2020-04-08T12:04:00+01:00

layout: post
permalink: /why-i-dont-use-a-static-site-generator/
categories:
  - Notes
---
I often receive inquisitive looks when I tell people I'm running WordPress on my website. Especially when I'm talking to other people in the InfoSec community where getting responses like, _&#8220;WordPress, really? Why not a static site generator like Hugo?&#8221;_ is par for the course.

I saw [this post on Fosstodon](https://fosstodon.org/@bsharitt/103923825538036282) a few days ago, which I think is a perfect example of why I don't use a static site generator:

![](/assets/images/static-site-toot.jpg)

> I use WordPress because it's easy and I can use it anywhere.

Want to [blog on my iPad](/writing-on-my-ipad/)? I can. Want to do it on my phone? No problem. On a machine I don't normally use? Not an issue, as long as it has a browser.

Having to SSH into a Linux box, then editing a post on Vim just seems like a ridiculously high barrier for entry when it comes to writing on the go. The world is mobile first these days, like it or not, so writing on the go should be easy.

## Security {#h-security}

Yeah, I hear you, WordPress _is_ less secure than a static site. There's no getting away from that fact - there's no admin interface for a threat actor to compromise.

For me, the potential risk of running WordPress vs a static site is what's important here. By using [strong passwords](/why-your-password-is-probably-crap/), [multi-factor authentication](/what-is-two-factor-authentication/) and good InfoSec hygiene, the potential attack surface of WordPress is significantly reduced.

## But a static site is WAY quicker! {#h-but-a-static-site-is-way-quicker}

Is it though? You may have noticed this website is pretty darn quick. [I've done some simple optimisations](/how-i-optimise-my-website-performance/) to make it run very quickly, even under heavy load. As a test, [I wrote a static version of my site in HTML/CSS](/rewriting-my-wordpress-site-in-html-css-comparing-performance/) and compared the performance with WordPress.

#### **Spoiler: there wasn't much in it.** {#h-spoiler-there-wasn-t-much-in-it}

A well optimised static site is probably going to out perform this site, and most of other sites for that matter. But it won't be by much, and a fraction of a second is hardly noticeable when it comes to a person's experience visiting a site.

## Conclusion {#h-conclusion}

If you use a static site generator, more power to you. For me though, I like that barrier to entry to be as low as possible. I like that I can log into a website, edit a post, then publish it.

GUIs are easy. Yes a terminal gives more control, but when the only thing you need to do is write a post, is a terminal not just making things overly complicated? I think so.

WordPress is far from perfect, but it works for me. If using a static site works for you, that's great. It would be a very boring world if we all liked the same thing. 🙂

_Note: I've got nothing against Brandon, I think he's a great guy and I enjoy his content on Fosstodon - this was just a good example of an issue I perceive with static site generators._
