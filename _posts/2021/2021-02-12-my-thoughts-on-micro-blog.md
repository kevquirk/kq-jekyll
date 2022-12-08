---
id: 4428
title: My Thoughts On Micro.Blog
date: 2021-02-12T11:30:43+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=4428
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

I suppose a good place to start would be to explain what Micro.Blog actually is. Think of a version of Twitter that you own, which ties in closely to the [IndieWeb](https://kevq.uk/implementing-the-indieweb-into-my-website/) and <a href="https://indieweb.org/POSSE" target="_blank" rel="noreferrer noopener">POSSE</a> mantra. That&#8217;s Micro.Blog (MB).

If you&#8217;re new to the concept of Micro.blog, <a href="https://help.micro.blog/2018/twitter-differences/" target="_blank" rel="noreferrer noopener">this post</a> explains the differences between it and Twitter. One thing I do really like about MB is their commitment to stamping out harassment on their platform:

<blockquote class="wp-block-quote">
  <p>
    The next most important thing to understand about Micro.blog is that the platform was designed, from the beginning, to prevent abuse and harassment. Your microblog is your own, where you are free to write about whatever you want, but we protect the timeline, where you can @-reply others, through a variety of tools and curation. We have <a href="https://help.micro.blog/2017/community-guidelines/">community guidelines</a> that are enforced.
  </p>

  <cite>&#8212; Micro.Blog</cite>
</blockquote>

## Why try Micro.blog? {#h-why-try-micro-blog}

I like the whole concept of POSSE, so thought it might be good to have a microblog that can cross-post to my other profiles, like <a href="https://fosstodon.org/@kev" target="_blank" rel="noreferrer noopener">Mastodon</a> and <a href="https://twitter.com/kevquirk" target="_blank" rel="noreferrer noopener">Twitter</a>. My thinking was that I could plug the [RSS feed](https://kevq.uk/rss-feeds/) for this site into MB, then automatically cross-post.

<img loading="lazy" width="785" height="657" src="/assets/images/wp-images/2021/02/micro-blog-cross-posting.png" alt="Micro.blog cross-posting" class="wp-image-4475" srcset="/assets/images/wp-images/2021/02/micro-blog-cross-posting.png 785w, /assets/images/wp-images/2021/02/micro-blog-cross-posting-610x511.png 610w, /assets/images/wp-images/2021/02/micro-blog-cross-posting-768x643.png 768w" sizes="(max-width: 785px) 100vw, 785px" />  

Cross-posting was super simple to setup and worked really well, but only paid subscriptions support cross-posting. Along with cross-posting you basically get your own IndieWeb powered <a href="https://gohugo.io/" target="_blank" rel="noreferrer noopener">Hugo</a> website that you can use as your own personal microblog.

## The problem {#h-the-problem}

This is where the problem came for me. You see, dear reader, the whole point of the IndieWeb is that you own and manage the whole thing. You create posts on your own site, then syndicate them to other sites, like Twitter et al.

<p class="medium">
  But if I&#8217;m paying for a hosted Micro.blog, do I own and control it? I don&#8217;t think I do.
</p>

If the Micro.blog service goes away for whatever reason, I&#8217;m left back at square one. Now, I can &#8216;backup&#8217; my MB site to a Git repo, but I&#8217;m not sure how well that would continue to work if the service were to go away.

Cross-posting would definitely break.

### It&#8217;s convoluted {#h-it-s-convoluted}

I&#8217;ve written about how [I think the IndieWeb is overly complicated](https://kevq.uk/removing-support-for-the-indieweb/) in the past and unfortunately, MB doesn&#8217;t fix this (I was hoping it would). Let me explain&#8230;

So I have this Hugo powered micro-site that handles all things IndieWeb. Great. I use this as my soapbox for creating posts. However, that&#8217;s only really my &#8220;outbox&#8221;. If I want to see and interact with other people on Micro.blog, I need to use their interface.

<img loading="lazy" width="970" height="728" src="/assets/images/wp-images/2021/02/micro.blog-ui-1.png" alt="Micro.blog interface" class="wp-image-4480" srcset="/assets/images/wp-images/2021/02/micro.blog-ui-1.png 970w, /assets/images/wp-images/2021/02/micro.blog-ui-1-610x458.png 610w, /assets/images/wp-images/2021/02/micro.blog-ui-1-768x576.png 768w" sizes="(max-width: 970px) 100vw, 970px" />  

So my &#8220;inbox&#8221; for managing webmentions etc. is on an entirely different interface. I&#8217;m sure at this point you&#8217;re struggling to wrap your head around this. I know I&#8217;m definitely struggling to articulate the convoluted nature of the IndieWeb and Micro.blog&#8217;s service in this post.

I suppose that kinda proves my point&#8230;

## The community {#h-the-community}

Now, one thing I did really enjoy is the warm welcome I received from people in the MB community. It&#8217;s a small, friendly place that&#8217;s full of interesting, technical people.

I didn&#8217;t see a single post that was inflammatory or derogatory. Which was great to see and shows that the MB team curate the platform really well.

<p class="medium">
  However&#8230;
</p>

I didn&#8217;t feel that MB provided me anything different from what Mastodon provides. Plus, the MB service supports ActivityPub (the protocol that Mastodon is based on). So I can still follow people from MB on Mastodon.

## Conclusion {#h-conclusion}

So the net result is a Hugo based mini-site that&#8217;s used to handle my IndieWeb &#8220;outbox&#8221;, a different interface entirely that&#8217;s my IndieWeb &#8220;inbox&#8221; and I don&#8217;t really get anything from the community that I can&#8217;t get from Mastodon.

The only real value I would get from MB, would be the cross-posting service, which I don&#8217;t think is worth $5/month.

If you don&#8217;t have a website and want to spin up an IndieWeb powered blog, Micro.blog could be a great option. But I&#8217;m already heavily invested in this website, which I control, and don&#8217;t want to migrate to a service where I don&#8217;t have as much control over my site.

I&#8217;ll be closing my Micro.blog account I think, as I just don&#8217;t see the value-add **for my needs**.

**Are you using Micro.blog? Maybe there&#8217;s something I&#8217;ve missed in the week or so I&#8217;ve been using it. If so, please do [let me know](/contact).**

Here&#8217;s some further reading on what others think of Micro.blog:

  * <a href="https://numericcitizen.me/2019/12/17/the-end-of-my-micro-blog-experiment" target="_blank" rel="noreferrer noopener">The end of my Micro.blog experiment</a> by JF Martin
  * <a href="https://gr36.com/bye-micro-blog/" target="_blank" rel="noreferrer noopener">Bye Micro.blog</a> by Greg Morris
