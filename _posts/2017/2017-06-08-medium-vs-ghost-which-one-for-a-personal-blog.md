---
title: Medium Vs Ghost – Which One For a Personal Blog?
layout: post
permalink: /medium-vs-ghost-which-one-for-a-personal-blog/
categories:
  - Technology
  - Blogging
description: I decided recently that I wanted to start blogging again, but which platform is better, Medium or Ghost?
---
I decided recently that I wanted to start blogging again. Not in a professional capacity (like I did for [MakeUseOf](http://www.makeuseof.com/tag/author/kevquirk)), but rather just some meandering thoughts on a personal blog. That way, I don’t have an editor to please, and I can publish whatever I like.

That got me thinking though, which is the best solution for my personal blog? WordPress? Blogger? Joomla maybe? After a lot of thought, research and testing, I narrowed it down to Medium vs Ghost.

## Why Not The Others? {#h-why-not-the-others}

I love simplicity (in case you hadn’t noticed by the design of this site), a few years ago that may have been WordPress, but not now. WordPress has evolved from an incredible blogging platform, to a bloated Goliath that slows even the most highly optimised sites down.

Don’t get me wrong, WordPress is awesome – I actually manage a couple of WordPress sites for other projects I’m involved in. It’s not right for me in this case.

That brings me on to [Blogger](https://blogger.com) – it’s stuck in 2004. It’s shit. That is all.

{: .full-bleed}
![Blogger editor](/assets/images/blogger-editor.webp)

## Medium {#h-medium}

I’ve used [Medium](https://medium.com) in the past, it’s a great way of getting started with a blog quickly and easily. The interface is simple to use and editing/publishing posts is a doddle.

{: .full-bleed}
![Medium editor](/assets/images/medium-editor.webp)

Whats-more, you don’t have to worry about hosting the site yourself. Outages, updates, security compromises, backups etc. are all taken care of for you. Technical people like myself usually like to “roll their own” when it comes to things like websites and blogs, and I’m no different. However, if I learned anything from running [RefuGeeks](http://refugeeks.com) (my tech blog that I ultimately sold, which has since been ruined) rolling your own isn’t always worth it. Sure, it’s fun at first, but as a site grows, it becomes harder to manage. So for me, self-hosting is out. I’d rather have the extra free time and have someone else worry about those details.

One of the things I do really like about Medium, is that it’s blogging and social all rolled in to one. There’s a whole community around the site that is a great way of getting your content out there. Having said that, it’s nothing that can’t be achieved outside of Medium with a bit of hard work and a couple of social accounts.

## Ghost {#h-ghost}

Enter [Ghost](https://ghost.io). I’ve been keeping a close eye on this project – I was actually one of the Kickstarter backers. It’s a great project that allows you to create super simple sites that focus on the content, not all the other guff. That’s just what I wanted.

The problem with Ghost is that it isn’t WordPress, so there would be the inevitable learning-curve that goes with any new tool. For me though, that’s all part of the fun – I love to learn!

### Markdown {#h-markdown}

This, in my opinion, is Ghost’s single biggest strength. Markdown is a language that converts written text in to HTML so it can be displayed on a website. It’s so simple to use, and unlike WYSIWYG editors, you don’t have to reach for your mouse every time you want to format some text. It’s awesome!

{: .full-bleed}
![Ghost markdown editor](/assets/images/Ghost-Markdown-Editor.webp)  

Ghost is literally a joy to use. It’s simple, slick and super quick to load. You can bash out an article without lifting your eyes from the screen, then go back and add your images in the places where you left a marker – it’s such a great way of maintaining a workflow.

Like WordPress, Ghost has options for both self-hosting and SaaS (when you pay someone to host and look after it for you) – Ghost themselves being the most prevalent. However, self-hosting Ghost isn’t quite as straightforward as WordPress. Since Ghost is based on Node.js, you can’t use it on many shared hosting platforms, so you will need a VPS from somewhere like [Digital Ocean](https://m.do.co/c/3fb9d983adc7). This doesn’t really affect me of course, as I’m looking for the SaaS option.

## The Decision {#h-the-decision}

Like I said, the research I did narrowed my options down to Medium vs Ghost. I played around in both for quite some time, ultimately spinning up my own Digital Ocean droplet so I could fully play with Ghost. After spending time in both environments **I opted for Ghost.**

I’m currently writing this post from my Digital Ocean droplet, whilst my hosting provider set up my new Ghost server. I was going to go with Ghost themselves for hosting (remember me moaning about time vs website management earlier – I don’t want to self-host long term), but ultimately opted to host my site with [FastComet](https://www.fastcomet.com/ghost-hosting) – so far their support has been excellent and their Ghost offering uses cPanel, so many will immediately feel at home.

If you want to roll your own Ghost instance, I’ll create a post on how I set it all up, along with Let’s Encrypt SSL certificates. But for now, I’m going to start migrating this site over to FastComet.

If you’re thinking of starting a blog yourself, do it! Do it now (I’ll write an article on why I think you should do that soon). Just make sure you consider your options, and choose the right tool for your needs. In my case, it’s 100% Ghost.

_**Update** – as of 10th July 2017, this site is now hosted with FastComet._
