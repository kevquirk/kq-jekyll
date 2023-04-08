---
title: Building a Self-Hosted Microblog
description: I've been struggling with Micro.blog's offering for a little while, so I decided to build my own microblog.
date: 2023-04-06T16:02:00.000Z
typora-root-url: ../../
category:
  - Blogging
  - Meta
  - Web
---

{: .tldr}
{{ page.description }}

Think back a few weeks, dear reader, where I spoke about having a [backup account on the Fediverse](https://kevquirk.com/fediverse-backup/). In that post I talked about how I'd decided to go with Micro.blog (even though [I found it confusing](https://kevquirk.com/micro-blog-is-still-confusing/)) as my backup account on the Fedi.

I ended that post by saying...

> As I get more comfortable with Micro.blog, I’ll write a more in-depth opinion piece on whether my position on their service has changed. Until then, I’ll continue chugging along on both. Micro.blog and Fosstodon.

But the problem is, I didn't get more comfortable with Micro.blog. Instead, I continued to come up against small challenges with the services that were very confusing to me.

This resulted in my spending more time fiddling with my Micro.blog site, or its related back-end, instead of actually...you know...**posting**. I decided there had to be a better way, but I had a few requirements for my self-hosted microblog:

1. It needs to look similar to this blog so it's clear the two sites are related
2. Posting needs to be *very* simple, that includes both text only posts, and text with images
3. My microblog needs to be available on the Fediverse and support [Webmentions](https://indieweb.org/webmention)
4. I need to be in control of the entire stack, from domain to hosting

{: .notice}
I want to quickly say that there's lots of great people in the Micro.blog community, and Manton, the creator of M.b, is very helpful. The service just isn't for me.

## Why not just use this site?

What a fantastic question, dear reader. This was actually the first thing I explored. I read a [great post by Sherif](https://sherif.io/2023/03/02/shortcut-bulletin.html) where they detail their steps for producing microblog posts on their Jekyll site.

Sherif uses [iOS Shortcuts](https://support.apple.com/en-gb/guide/shortcuts/welcome/ios) to post, which is a great way of accomplishing requirement number 2 from my list. But things fell apart when it came to Fediverse and Webmention integration.

This is notoriously difficult to do on a static site, so I decided to abandon the idea of folding it all into this site, as I like that it's easy to manage and is built on a very simple tech stack.

Plus, to me at least, blogging and *microblogging* are 2 different use cases, so I think they warrant separate sites. Personally, I dislike it when people have blogs that combine microblog posts and longer blog posts in the same place. They're different things to me, so they should exist in two different places.

## Other alternatives

So Jekyll was out. What else was there out there? Well, I'd already researched a number of [alternative blogging platforms](https://kevquirk.com/my-blogging-utopia/), so I decided to start with that list and I ended up narrowing it down to 2 options:

1. **[Hyblog](https://github.com/colin-walker/hyblog)** is a custom built, PHP based blogging platform, by Colin Walker. It's based on what he uses on [his blog](https://colinwalker.blog). It ticked pretty much all the boxes, and I very nearly went with it
2. **[Good old WordPress](https://wordpress.org)** is what I ended up going with, as I know it well and could integrate it with all the services I wanted, very easily. I even had a theme that I'd built which is 90% the same as the theme on this blog

## Winning with WordPress

WordPress will integrate with both the Fedi and Webmentions *very* easily. So I knew that wouldn't be a problem. I also know WordPress fairly well, having used it for many years. So being in control of the stack wouldn't be an issue either.

Ironically, my issue would be the posting workflow. I won't be having a title on many of my microblog posts, as they're all short-form posts. I also don't want all the other garbage, like categories, layouts, feature images, etc.

I just wanted to set the current date and time as the post title (so the post URL would be unique), hide the title, and display my content. Problem is, [the WordPress mobile app is buggy](https://fosstodon.org/@kev/110147621066722874) and not very nice to use. So posting from mobile would be a challenge.

Then I had a thought, dear reader. *Can I use iOS Shortcuts, like Sherif, to automate this whole thing?*

Turns out, **I can!**

I created a Shortcut that does the following:

1. Takes the current date & time and formats it how I want it
2. Asks if my new post will include an image
3. If I say *Yes* it asks me to choose an image
4. Then it asks me for the text of the post
5. Finally it mushes this all together and publishes the post on WordPress, setting the date & time as the title of the post

Massive props to Sherif for this, as my Shortcut is heavily based on his shortcut. Thanks, Sherif!

I also created a custom function on WordPress, so if I decide to create a post via Gutenberg, on my laptop, it will automatically fill in the post title with the current date & time.

*Yay for automation!* 🎉

## Final thoughts

I still think there's some tweaks for me to do on the Shortcut. For example, I can only add a single image at the moment, as it sets the image as the post's feature image. So I need to work out a way of adding single or multiple images to the post body. I'm sure it can be done, I just need to work out how.

I'm also exploring whether I should setup cross-posting from my Microblog to my Fosstodon account. I don't know if I want to do that yet. So for now, I'm just boosting the post I want my Fosstodon followers to see. I dunno, I might just keep that how it is. What do you think? 🤷‍♂️

Overall I've *really* happy with the solution I've come up with. It's easy for me to post and manage, and I control it all. Winner, winner, chicken dinner!

If you want to follow my microblog on the fediverse, just search for `@kev@qrk.social` you can also [add the RSS feed to your reader](https://qrk.social/feed.xml) if you so wish.

Finally, I'm sure you wanna peruse my little microblog, right? If you do, hit the button below!

[Visit my microblog](https://quirk.social){: .button .brutal-shadow}

{: .notice}
Plugging it all together is too much of a pain in the arse, so I've decided to go back to Micro.blog. I'd rather pay Manton to manage it all for me. :-)