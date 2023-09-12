---
id: 4428
title: My Thoughts On Micro.Blog
date: 2021-02-12T11:30:43+00:00

layout: post
permalink: /my-thoughts-on-micro-blog/
description:
  - I recently signed up for a Micro.Blog trial and I wanted to talk about my thoughts on the service and whether I will continue to use it.
categories:
  - Blogging
  - Opinion
  - Web
---
<p class="medium">
  <a href="https://micro.blog" target="_blank" rel="noreferrer noopener">I recently signed up</a> for a Micro.Blog trial, so wanted to talk about my thoughts on the service and whether I will continue to use it.
</p>

I suppose a good place to start would be to explain what Micro.Blog actually is. Think of a version of Twitter that you own, which ties in closely to the [IndieWeb](/implementing-the-indieweb-into-my-website/) and <a href="https://indieweb.org/POSSE" target="_blank" rel="noreferrer noopener">POSSE</a> mantra. That's Micro.Blog (MB).

If you're new to the concept of Micro.blog, <a href="https://help.micro.blog/2018/twitter-differences/" target="_blank" rel="noreferrer noopener">this post</a> explains the differences between it and Twitter. One thing I do really like about MB is their commitment to stamping out harassment on their platform:

<blockquote class="wp-block-quote">
  <p>
    The next most important thing to understand about Micro.blog is that the platform was designed, from the beginning, to prevent abuse and harassment. Your microblog is your own, where you are free to write about whatever you want, but we protect the timeline, where you can @-reply others, through a variety of tools and curation. We have <a href="https://help.micro.blog/2017/community-guidelines/">community guidelines</a> that are enforced.
  </p>

  <cite>&#8212; Micro.Blog</cite>
</blockquote>

## Why try Micro.blog? {#h-why-try-micro-blog}

I like the whole concept of POSSE, so thought it might be good to have a microblog that can cross-post to my other profiles, like <a href="https://fosstodon.org/@kev" target="_blank" rel="noreferrer noopener">Mastodon</a> and Twitter. My thinking was that I could plug the [RSS feed](/rss-feeds/) for this site into MB, then automatically cross-post.

![](/assets/images/micro-blog-cross-posting.png)

Cross-posting was super simple to setup and worked really well, but only paid subscriptions support cross-posting. Along with cross-posting you basically get your own IndieWeb powered <a href="https://gohugo.io/" target="_blank" rel="noreferrer noopener">Hugo</a> website that you can use as your own personal microblog.

## The problem {#h-the-problem}

This is where the problem came for me. You see, dear reader, the whole point of the IndieWeb is that you own and manage the whole thing. You create posts on your own site, then syndicate them to other sites, like Twitter et al.

But if I'm paying for a hosted Micro.blog, do I own and control it? I don't think I do.

If the Micro.blog service goes away for whatever reason, I'm left back at square one. Now, I can &#8216;backup' my MB site to a Git repo, but I'm not sure how well that would continue to work if the service were to go away.

Cross-posting would definitely break.

### It's convoluted {#h-it-s-convoluted}

I've written about how [I think the IndieWeb is overly complicated](/removing-support-for-the-indieweb/) in the past and unfortunately, MB doesn't fix this (I was hoping it would). Let me explain&#8230;

So I have this Hugo powered micro-site that handles all things IndieWeb. Great. I use this as my soapbox for creating posts. However, that's only really my &#8220;outbox&#8221;. If I want to see and interact with other people on Micro.blog, I need to use their interface.

![](/assets/images/micro.blog-ui.png) 

So my &#8220;inbox&#8221; for managing webmentions etc. is on an entirely different interface. I'm sure at this point you're struggling to wrap your head around this. I know I'm definitely struggling to articulate the convoluted nature of the IndieWeb and Micro.blog's service in this post.

I suppose that kinda proves my point&#8230;

## The community {#h-the-community}

Now, one thing I did really enjoy is the warm welcome I received from people in the MB community. It's a small, friendly place that's full of interesting, technical people.

I didn't see a single post that was inflammatory or derogatory. Which was great to see and shows that the MB team curate the platform really well.

However...

I didn't feel that MB provided me anything different from what Mastodon provides. Plus, the MB service supports ActivityPub (the protocol that Mastodon is based on). So I can still follow people from MB on Mastodon.

## Conclusion {#h-conclusion}

So the net result is a Hugo based mini-site that's used to handle my IndieWeb &#8220;outbox&#8221;, a different interface entirely that's my IndieWeb &#8220;inbox&#8221; and I don't really get anything from the community that I can't get from Mastodon.

The only real value I would get from MB, would be the cross-posting service, which I don't think is worth $5/month.

If you don't have a website and want to spin up an IndieWeb powered blog, Micro.blog could be a great option. But I'm already heavily invested in this website, which I control, and don't want to migrate to a service where I don't have as much control over my site.

I'll be closing my Micro.blog account I think, as I just don't see the value-add **for my needs**.

**Are you using Micro.blog? Maybe there's something I've missed in the week or so I've been using it. If so, please do [let me know](/contact).**

Here's some further reading on what others think of Micro.blog:

  * <a href="https://numericcitizen.me/2019/12/17/the-end-of-my-micro-blog-experiment" target="_blank" rel="noreferrer noopener">The end of my Micro.blog experiment</a> by JF Martin
  * <a href="https://gr36.com/bye-micro-blog/" target="_blank" rel="noreferrer noopener">Bye Micro.blog</a> by Greg Morris
