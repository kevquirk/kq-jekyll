---
title: Does a Blog Need to Integrate?
description: I'm often asked about integrating a blog with X service, does it really need to though?
date: 2023-01-03T09:30:00.000Z
typora-root-url: ../../
category:
  - Blogging
  - Meta
  - Opinion
---

{: .tldr}
{{ page.description }}

Yesterday I published a fun little website called [Start a F**king Blog](https://startafuckingblog.com). I think the premise is quite obvious, but go give it a read - it's fun.

As I often do with stuff I write online, [I posted this to my Mastodon account](https://fosstodon.org/@kev/109619238230515070), and it seems to have garnered a lot of support from the community. Great stuff.

But one thing I was asked yesterday, and have been asked many times in the past is...

> How would I integrate a blog with X service

`X Service` here is usually Mastodon (which uses the [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) protocol). The short answer, dear reader, is that I don't think you should integrate.

## Why you no integrate?

I've tried to integrate services like ActivityPub and [the IndieWeb](https://kevquirk.com/implementing-the-indieweb-into-my-website/) into this site in the past, but I've always found them to either need a lot of work to implement, or not work how I'd like them to.

> But your site is now a silo! You need to integrate!
>
> <cite>-- Concerned folk everywhere</cite>

Is it a silo though? Pretty much everything I write gets posted on Mastodon. Some people also post my content in places like [Hacker News](https://news.ycombinator.com) from time to time too, which is nice (if that's you, thanks).

Sure, this means that the conversations take place on those platforms, but the source of my content -- *my words* -- are still on my site, which I control.

Then there's my [email me button](https://kevquirk.com/adding-the-post-title-to-my-reply-by-email-button/). It works *brilliantly* and is probably the most important change I've ever made to this site in terms of engagement.

I've had commenting systems in the past, whether that's the standard WordPress commenting system, privacy black holes, [like Disqus](https://kevquirk.com/how-migrate-from-disqus-to-wordpress/), or more private commenting systems, like [Commento](https://kevquirk.com/commento-the-privacy-respecting-commenting-system/). But the engagement I get from my simple email button is orders of magnitude more than I ever got with any commenting system.

Maybe that's because people are more willing to have a 1:1 email conversation, knowing it's not going to be available to the world. Or maybe it's because my blog is more mature now and gets more traffic ([I have no idea how much traffic I get](https://kevquirk.com/revisiting-the-web-analytics-rabbit-hole/)).

Honestly, I don't really care what the reason it. I enjoy writing content on here, and I *love* engaging with people who read my content. So it's win/win. If something crops up within my email conversations with readers, that I think is worth sharing, I will always ask the person if they're happy for me to share, then post an update. So other readers get the benefit of those conversations too.

Ipso facto, I don't feel a need to integrate my blog with other services.

## It's a giant headache

I was reading [a post by Henrique Dias](https://hacdias.com/2022/12/26/personal-websites-and-online-identities) recently, where he was talking about how he integrates both the IndieWeb and ActivityPub into his website and how he might want to simplify things. The amount of data elements and "stuff" that he tracks on his site makes my head spin. I don't know how he does it.

If you haven't checked out Henrique's website, I implore you to do so. The amount of integration with the IndieWeb is next-level; but because of that, I find it's also complicated to navigate around.

There's just too much "stuff" there for me. That's not to say I think Henrique is doing it wrong. **Not at all**. His site is *amazing*, I just think that *for me* there's too much integration there. I prefer to just read post, and maybe notes; but I'm an old curmudgeon, so you most definitely should *not* listen to me. 🙃

When talking about ActivityPub integration, Henrique says:

> I have, however, considered another option: simply [POSSE](https://hacdias.com/2022/11/18/23h28m13s83) to a Mastodon account. Then, I won’t have to implement every ActivityPub specification. Right now, I’m divided between a Mastodon account and my own website because my own website doesn’t support certain functionalities, such as following others. At the same time, I am unsure whether I would really want to implement it.
>
> <cite>-- [Henrique Dias](https://hacdias.com/2022/12/26/personal-websites-and-online-identities)</cite>

This is the crux of the debate and where integration falls down for me. It's half-arsed. Without *a lot* of work, a website won't have the level of functionality a Mastodon account has.

So if the "integration" at this point is simply a way to auto-post to Mastodon (or any ActivityPub service) where's the value over something like Zapier, or IFTTT? I don't see it.

It's just more complexity added to the site that can go wrong. I'm all about the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) - less to go wrong, and less for my tiny brain to track and fix.

## But then there's RSS

RSS is a fantastic technology that allows you to subscribe to the feed of any site or service that supports it. So you can have feeds for all your favourite blogs in a singe place.

Luckily for us, RSS integration is provided with most blogging platforms. WordPress, Ghost, Blogger etc. all have RSS feeds by default. Even most static site generators, like Hugo, Jekyll and Eleventy all either have RSS plugins, or have it by default.

Having RSS integration on your site [is hugely important](https://kevquirk.com/please-add-rss-support-to-your-site/).

## Final thoughts

Owning the message of my writing is far more important than integrating and/or embedding the subsequent discourse that surrounds my posts.

While that discourse is very important, the complexity it would add to the site to manage it, just isn't worth it in my eyes.

So next time someone asks me how they would go about integrating these kind of services into a would-be blog, I'm gonna point them to this post and ask them why.

**What do you think? Have you integrated any of these services into your blog? Was it worth it? Or are you lazy, like me? Please use the email button below and we will have a good old chat about it!**