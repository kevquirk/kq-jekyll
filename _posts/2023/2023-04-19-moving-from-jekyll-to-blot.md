---
title: Moving from Jekyll to Blot
layout: post
typora-root-url: ../../
description: I've been exploring Blot lately. It's great, so I've decided to move this site over to it from Jekyll.
category:
  - Blogging
  - Meta
---

{: .tldr}
I've been exploring [Blot](https://blot.im) lately. It's great, so I've decided to move this site over to it from Jekyll.

I recently wrote about whether my current setup was [good enough](https://kevquirk.com/is-good-enough-good-enough/) and whether I should move over to Blot for my blogging platform.

Now, I really enjoy playing with new tools like Blot - it's fun for me. So it's not just about finding my [blogging utopia](https://kevquirk.com/my-blogging-utopia/), it's enjoyable too. With that in mind, I've moved platforms from Jekyll yo Blot. 🙃

In this post, I want to talk about some of the reasons for my move, as well as some of the challenges I faced during the process. Just in case you're thinking about doing the same.

{: .notice}
The challenges would be very similar no matter what SSG you're running. So hopefully this will still be useful, even if you're not running Jekyll.


## Why I moved from Jekyll

I've had a post in my drafts for a long time that's titled *"Should We Pay For Static Hosting?"* Unfortunately I never got around to writing it, but I think it's a good indication of one of the concerns I had running Jekyll. 

**Hosting**.

Or, more specifically, *free hosting*. I was hosting with Netlify, which integrates brilliantly with GitHub to provide a CI/CD pipeline to allow for easy deployment of static sites. I was using their extremely generous free package.

And there's the rub...

What if Netlify decide to charge for their service? That's fine, but what if it's more than I'm prepared to pay? What is the VC funding runs out and they go under? What if they change their terms in such a way that aren't compatible with my own moral compass? What if, what if, what if...

All hypothetical, of course, but none are out of the realms of possibility. Ultimately, the free package almost seems to good to be true, and you know what they say about things that are too good to be true...

### Dependencies

Aside from hosting, the sheer number of dependencies I need to run Jekyll concern me. In short, my site was dependent on:

* A local software stack consisting of:
  * Ruby (running *a lot* of gems)
  * Jekyll
  * Category pages plugin
  * Paginate plugin
* GitHub
* Netlify

I've had a number of problems with my local install of Jekyll in the past, and I continue to have them from time to time. GitHub had a short outage yesterday, which prevented Netlify from pulling the updates to my repo, which meant I couldn't update my site.

Basically, it's a lot of moving parts -- none of which I'm in control of -- for such a simple site.

It worried me.

### Playing around

Finally, I like to play around with this kinda thing. I like to learn new technologies and I have fun doing it. So even if we ignore all of the above, it's worth doing the work (in my opinion) for this reason alone. 🙃

## Challenges

During the migration from Jekyll to Blot, I came across a couple of issues, but managed to work around them. I won't go into the detail of them all here, but I want to quickly talk about the 3 main ones I had:

1. Not wanting to run Dropbox on my machine
2. Blot's performance
3. Redirecting my old domain (`kevq.uk`)

### Running Dropbox locally

If you didn't know, Blot can use Dropbox, Git or Google Drive for syncing data. I didn't really want to use Git as that wouldn't offer any advantages over Jekyll, really.

What I really like about using Dropbox is that I can save a file in a folder, then Blot will do the rest. I could use Google Drive, but I'm [all about de-Googling](https://kevquirk.com/tagged/de-googling), so that ain't gonna happen.

I have a Dropbox account from years ago that has around 15GB of storage, thanks to referrals, but I didn't want to install Dropbox on my machine. In fact, I didn't want to install *any* additional software on my machine. The point of all this was to simplify the software stack, not add more of it.

I already run Synology Drive on [my Synology](https://kevquirk.com/synology-vs-nextcloud-which-is-better-for-a-home-server), so I created a new shared folder on Drive, then used Synology's Cloud Sync app to then sync with Dropbox in turn.

Instead of installing Dropbox on my machine, I can sync to the service via my Synology. So syncing goes my machine > my Synology > Dropbox

This also has the advantage of backing up my site within my normal backup routines from my Synology.

### Blot's performance

I noticed while I was building the new Blot site that it didn't seem quite as snappy as the Jekyll site. I'd often see [FOUT](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) as the font I used was delayed in loading, plus, generally speaking, it felt a little sluggish.

Don't get me wrong it's not slow by any stretch, but it did feel slow in comparison to Jekyll. So I decided to test it.

I tested from various locations using [GTMetrix](https://gtmetrix.com) and compared them to the same tests on my Jekyll site. I also carried out tests with [Page Speed Insights](https://pagespeed.web.dev).

Finally, to give the fairest tests possible, I decided to do the tests both with and without the custom font loaded. Here's the results:

![blot-vs-jekyll-performance-graph](/assets/images/blot-vs-jekyll-performance-graph.webp)

<a class="button brutal-shadow" target="blank" href="https://sheet.zohopublic.eu/sheet/published/5wxl37a5a4123f81b4a809d7f19bc699db0a9">See all the data →</a>

If you click the button above, you will see all the data I've collected in a spreadsheet. But basically, without the custom font, the site loaded in under 1.5 seconds from all locations with Blot, and less than 1 second with Netlify.

Given that we're only talking fractions of seconds here, I think it's fine. I did decide to go with a local font stack for the Blot blog though, which you should see right now. If we compare the font over multiple OS's, it looks pretty much the same everywhere, so I'm happy with the decision.

* <a target="blank" href="/assets/images/brutal-site-mac-helvetica.webp">My site on Mac using Helvetica</a>
* <a target="blank" href="/assets/images/brutal-site-windows-arial.webp">My site on Windows using Arial</a>
* <a target="blank" href="/assets/images/brutal-site-linux-nimbus.webp">My site on Linux using Nimbus Sans</a>

{: .notice}
I decided to include links to these images, instead of embedding them here, as it was *very* confusing when reading the post.


### Redirecting `kevq.uk`

A few months ago, I changed the domain of this site from `kevq.uk` to `kevquirk.com`. This didn't cause any impact as Netlify supports multiple domains for a single site. All I had to do was make sure the canonical URL was correct in the site's header and I was off to the races.

I used `kevq.uk` for a number of years, so there's lots of links to that domain out there, as well as a lot of people subscribed to [my RSS feeds](/subscribe) via that domain, so I had to make sure those redirects continued to work.

Not only that, but I had to ensure that URLs like `/feed`, from when I was running WordPress, continued to work. Luckily, Blot supports page redirects, so making sure the RSS feeds continued to work was trivial, I also did this for my category URLs too. But Blot doesn't support multiple domains, so I had to think about that.

My Synology came to the rescue again here, as I decided to simply point `kevq.uk` at it and have a `.htaccess` file handle all the redirects. I added the following to that `.htaccess` file, which will redirect any `kevq.uk` URL to the equivalent `kevquirk.com` URL:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_HOST} ^kevq.uk$ [OR]
  RewriteCond %{HTTP_HOST} ^www.kevq.uk$
  RewriteRule (.*)$ https://kevquirk.com/$1 [R=301,L]
</IfModule>
```

Winner winner, chicken dinner. That's all the big technical challenges sorted. So all I had to do then was migrate my content across. Luckily for me, this was very easy as both Blot and Jekyll use Markdown. I just had to switch a few things here and there, and hey presto! My content was migrated.

I did take the opportunity to clean up the folder structure for images on this site though, as a lot of it was still in the old WordPress structure (`wp-content` > `images` > `[year]` > `[month]` > `[image]`). Sorting images is what took most of the time, but I was really glad I did as I managed to remove a tonne of duplicate WordPress images.

## Is the workflow better?

Honestly, I'm not sure. This is the first post I've written with Blot, and it's very similar to Jekyll, which is great because I had my Jekyll workflow [pretty much nailed](https://kevquirk.com/my-static-site-workflow).

The advantage here is that the stack I'm reliant on is far simpler. It's gone from the list above (Ruby, Gems, Jekyll, plugins, Github & Netlify) to simply:

* My site in plain markdown
* My Synology
* Blot

With the exception of Blot, I control everything. But even though I can't control the Blot part, it is a managed service costing $4/month and the creator of Blot has confirmed that the service is "sustainable for decades".

Plus, if it all goes down the pan, it would be trivial to flip back to a traditional SSG. So I'm not concerned.

Overall I've managed to simplify the process of producing content slightly, but more importantly, I've simplified the tech stack massively. So that's a win.

Yes, there's a small hit to performance, but I still get straight 100s on Page Speed Insights, so I'm really not to worried about that.

Finally I'd like to thank the founder of Blot, [David Merfield](https://lllllllllllllllll.com), for all his help during this process - the support he provides is absolutely superb. I'd also like to thank [Nicolas Magand](https://thejollyteapot.com) for making me aware of Blot in the first place, and for giving me the push to try it out.

If you want an easy to manage blog where you just create a file, save it and let the service do the rest, I'd seriously consider [Blot](https://blot.im).