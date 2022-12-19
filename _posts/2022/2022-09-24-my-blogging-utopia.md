---
title: 'My Blogging Utopia'
date: '2022-09-24T15:21:24+01:00'
author: Kev
layout: post
permalink: /my-blogging-utopia/
image: /assets/images/blogging-utopia-feature.webp
description: I’ve flip-flopped between a number of blogging platforms over the years, because none are perfect. Here’s my blogging utopia…
categories:
    - Blogging
    - Meta
---
{: .tldr}
I’ve flip-flopped between a number of blogging platforms over the years, because none are perfect. Here’s my blogging utopia…

For regular readers of this blog, it’s almost a meme at this point that I’m [constantly](/medium-vs-ghost-which-one-for-a-personal-blog/) [changing](/migrating-from-wordpress-to-grav/) [my](/coming-full-circle-from-grav-to-wordpress/) [blogging](/goodbye-wordpress-switched-to-jekyll/) [platform](/the-wonderful-world-of-wordpress-wizardry-for-working-with-websites/) and there’s two simple reasons for that, folks:

1. I love to fiddle and I can’t resist the new shiny.
2. I’m yet to find the perfect solution for my needs.

I read Ru’s recent post on [blogging and blogging platforms](https://rusingh.com/on-blogging-and-platforms/) and it *really* resonated with me. Ru isn’t really feeling great about blogging at the moment, but it’s not that part that resonated with me; I love blogging. It’s this part:

> However, I enjoy absolutely nothing in the market.

To say I enjoy *nothing* in the market would be somewhat of an exaggeration for me. [I do enjoy using WordPress](/the-case-for-wordpress/), but it’s not perfect.

I personally think the admin UI of WordPress is stuck firmly in 2004. It can also be slow and clunky to navigate around. Then there’s hosting. It’s not difficult to host a WordPress site, but I’d rather not have to put up with it.

Problem is, managed hosting is more expensive than I’d like to pay, so I self-host.

## The alternatives

Oh my goodness have I tried ***a lot*** of alternative blogging platforms. Some I’ve only explored a little bit, others I’ve decided I can make them work and actually migrated this site over to them, only to find that I inevitably dislike them more than WordPress, so I pop back.

Here’s a quick rundown of *some* of the platforms I’ve tried over the years, and my thoughts. I’m not going to go into detail here as this would be a *really* long post if I did.

- [**Bear**](https://bearblog.dev) – really good actually, but there’s only a plain text editor.
- [**Blogger**](https://blogger.com) – owned by Google and a worse UI than WP. Being owned by Google, it’s probably going to be [killed off](https://killedbygoogle.com) at some point.
- **[Blot](https://blot.im)** – interesting concept, but it’s just a little abstract for me.
- **[Craft](https://craftcms.com)** – it’s a whole new ecosystem I’d have to learn and it doesn’t seem to offer anything over WordPress.
- **[Ghost](https://ghost.org)** – I really like the Ghost UI and editor, but their themes are really bloated and I don’t like the blogging + newsletter direction they’re going in.
- **[Grav](https://getgrav.org)** – I wanted to love Grav, but it felt like death by 1000 cuts. Just constant small issues that I was having to work around. Never could get the RSS feed to work properly.
- **[Jekyll](https://jekyllrb.com)** – I love Jekyll and still use it for a [number of projects](/projects/), but like Bear, there’s no real editor to speak of, which [makes producing content a pain](/how-i-manage-jekyll-content/).
- **Jekyll + [Netlify CMS](https://www.netlifycms.org)** – it’s ok. Works pretty well and adds a lot of the value WP does. However, after testing it with my pal [Mike](https://mikestone.me), it adds like 100+ KB of JavaScript to each page. Hard nope.
- **Jekyll + [Forestry CMS](https://forestry.io)** – pretty good actually, but it adds all kinds of commits to Git, which makes parsing the history impossible. They’re working on a [new version](https://tina.io), so I’ll probably give that a try when it comes out of beta.
- **[Kirby](https://getkirby.com)** – very similar to Craft. It’s a whole new ecosystem to learn and it doesn’t really add much (that I can see) over WP.
- **[Medium](https://medium.com)** – just no. It’s a closed ecosystem that’s [obnoxious to writers and readers alike](https://blog.elementary.io/welcome-to-the-new-blog/).
- **[Publii](https://getpublii.com)** – I wanted to love Publii. It runs locally, has a block editor, and outputs a static site. Seemed perfect, but building the site took SOOOOOO long. Ain’t no-one got time for that.
- **[Write.as](https://write.as)** – ridiculously over-complicated to produce content with and has (had?) a number of bugs.

## What’s the answer?

Honestly, I don’t know. For now, I’ll stick with WordPress. Static sites are great, but when it comes to producing lots of content, they’re missing little quality of life things that CMS’s like WordPress provide.

For example, if I want to link to another post, I highlight the text, click the link icon (or tap CTRL/⌘ + K) then start typing the name of the post. WordPress will look for the page/post, then I just need to click on the link I want to add:

![Adding a link in WordPress](/assets/images/wordpress-link-add.webp)

Same with images. On WordPress, I have the media library, so adding an image is as simple as dragging and dropping the image into the window. I can then add things like `alt` `title` etc. No messing around with HTML markup. All nice and easy.

When writing content, the friction needs to be super low for me. For that to happen either a CMS needs to be in place, or a *really* good editor. If I were just writing text-based posts an SSG would be fine, but when you start adding links, images or anything aside from basic text, things start to get complicated.

## Not just editing

It’s not just editing that’s the problem. There’s also the hosting and admin that comes with a web site. WordPress is relatively easy to setup and manage, but there’s still work involved. There’s still things I need to do on the server and on WordPress that takes away from the time I could be writing.

This is where static sites and their ilk shine. There’s none of that to manage. It’s all just content with a CI/CD pipeline that publishes the content online. It’s really simple to administer once you’re setup.

Managed hosting can off-set the admin overhead somewhat, but it’s usually expensive. For example, the managed hosting I had with Cloudways (which is a brilliant service) is 3x the price I pay for my current server.

Having a server also affords me to ability to host multiple WP sites, as well as email and pretty much any other kind of web site. So a 3rd of the price and *a lot* more flexible.

## It’s all about compromise

Ultimately, I don’t think the perfect solution exists for me. I’d like something with a great editing experience, has little to no admin overhead, is cheap (&lt;£10/month) and allows me to stay in control of the design and content on the site.

With WordPress I have 90% of what I need, and all things considered, my gripes are relatively minor. So I’ll be sticking with WordPress for the foreseeable future, I think.

If I were to move away from WordPress, it would probably be to [Bear](https://bearblog.dev) at this point. But ask me again in a couple of weeks and my opinion will have likely changed.

The perfect blogging platform doesn’t exist for me. Maybe my needs are overly specific and I should just get over myself?

All in all though, I have a great way of producing my content (Gutenberg is BRILLIANT) and a front end that’s performant and look good.

Can’t ask for much more than that really, can you?