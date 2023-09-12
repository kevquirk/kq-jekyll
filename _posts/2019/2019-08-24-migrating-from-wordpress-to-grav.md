---
title: Migrating from WordPress to Grav
layout: post
permalink: /migrating-from-wordpress-to-grav/
categories:
  - Technology
---
I've been running a blog for quite a few years now. I first started with Blogger, before moving on to WordPress, and ultimately selling my site so I could have a break. A few years later I got the bug again and decided to start a [blog on Ghost](/medium-vs-ghost-personal-blog). Server admin became a pain, so I started hosting a [static version of a WordPress site](/moving-to-a-static-website), but have since migrated to dedicated WordPress hosting with EasyWP.

It's fair to say that my website has been through quite the evolution, and for the most part I was very happy with WordPress and [EasyWP](https://easywp.com). However, there were some things that I wanted to change:

  * Remove of Google fonts on my theme.
  * General lack of control with my theme (it was a purchased theme).
  * I disliked the new [Gutenberg editor](https://wordpress.org/gutenberg) on WordPress.

I really liked Ghost's Markdown support and the simplicity of their admin interface, however hosting a Ghost website is either expensive, or a lot of work in terms of administration as it needs a dedicated server due to using Node.js. So I went on the hunt to find something else…

## Grav {#h-grav}

I heard about [Grav](https://getgrav.org) a while ago and actually use it for the [Fosstodon Hub](https://hub.fosstodon.org). However, the Hub was put together in a rush and I never really took the time to learn Grav in-depth. I basically took an existing theme and changed some of the CSS elements to make the colours fit Fosstodon's theme.

I started playing around with Grav around a month ago. Mainly out of curiosity, but also with a view to improving Fosstodon Hub's theme. After spending some time with Grav and becoming more familiar with it, I thought I could probably make it the platform for my personal blog too.

## What is Grav? {#h-what-is-grav}

Good question! The Grav team describe it as _&#8220;A modern open source flat-file CMS_. That basically means that you have a happy medium between a static site generator, like Hugo or Jekyll, and a full-blown CMS, like WordPress. There is an admin interface you can install to edit the site and produce posts, or you can just edit the files directly, like a static site generator.

Grav also uses Markdown for its main content, so writing a post within the Grav admin interface is really simple. Or you can use Markdown editors like [Ghostwriter](https://wereturtle.github.io/ghostwriter) to write locally, then upload your files to your web server.

![Grav Admin UI](/assets/images/Grav-Admin-UI.png)
*Grav admin UI*

## Why Migrate? {#h-why-migrate}

There are a number of arguments to be made in favour of both WordPress and Grav, but overall Grav won out for me. There were three main factors that made me go with this option:

  1. Better performance
  2. Save money
  3. More control

### Better Performance {#h-better-performance}

As I said earlier, Grav uses static files, but it also has caching functionality out of the box. There is no database involved, so no complicated page building when the site loads. This, along with the caching means that I can host the Grav site on very cheap, shared hosting and my site actually loads quicker than when I was hosting with EasyWP.

### Save Money {#h-save-money}

Being able to host my website on a shared hosting account that I already use for a couple of other sites, such as analytics and a personal wiki, has saved me money. EasyWP is priced well, costing approximately $4/month. That's really cheap for dedicated WordPres hosting - and the performance is really good, for WordPress. Let's be real though, a WordPress site is never going to compete with a flat-file website.

Unfortunately, EasyWP doesn't support free SSL certificates, such as Let's Encrypt, so I needed to buy an SSL certificate every year. Again, these aren't expensive; I get mine from [NameCheap](https://www.namecheap.com/security/ssl-certificates) and they cost around $7/year, but it's another thing I have to manage and pay for.

So hosting with EasyWP cost me approximately $55/year. My shared hosting account, which supports free SSL certificates, costs me around $12/year. That's a significant saving. We're not talking huge numbers here, and neither of these options will break the bank, but if I can get better performance for less than a quarter of the price, then it's a no-brainer.

### More Control {#h-more-control}

This is probably the main reason I wanted to migrate from WordPress to Grav. The theme I was using on my WordPress site was gorgeous (well I thought so anyway), but it wasn't mine. It was [a theme I bought from Theme Forest](https://themeforest.net/item/alia-minimal-personal-blog/21817200). I didn't write the theme, I'm not responsible for the theme, and I have little control over what I can do with it as I don't know what license it has (Theme Forest don't make that obvious).

Worse still, the theme uses Google Fonts for font rendering. Now, I could change that easily, but I didn't know if I would be breaking whatever license the theme has. So I didn't want to take that risk. For the Grav site, I took the default [Quark theme](https://github.com/getgrav/grav-theme-quark) (which has an MIT license) and made it my own. Self-hosted fonts, so no Google, and the reassurance of knowing I'm in full control of the theme and not breaking any licenses.

![My WordPress site](/assets/images/kq-wordpress.png)
*My WordPress site*

![My Grav site](/assets/images/kq-grav.png)
*My Grav site*

## Migrating from WordPress to Grav {#h-migrating-from-wordpress-to-grav}

The process of actually migrating from WordPress to Grav was a pain. Unfortunately there is no way that I could find of automating the process, so I had to basically copy and paste each post and page into Grav, then remove all the additional crap that WordPress adds to the text.

Thankfully, Grav doesn't add additional crap; it's just plain Markdown, so if I decide to move away from Grav at some point, it should be relatively easy.

### Comments {#h-comments}

I had around 600 published comments on my WordPress site, which included a lot of good discussion - I didn't want to lose that information. Problem is, Grav doesn't support comments out of the box, so I needed a solution.

The obvious solution for a lot of people would have been Disqus, but there are number of [privacy and security concerns](https://en.wikipedia.org/wiki/Disqus#Criticism,_privacy,_and_security_concerns) with their service. So I went on the hunt and found [Commento](https://commento.io).

Commento is a privacy respecting commenting service that works in a similar way to Disqus. I was able to import all of my comment automatically, but the downside is that the meta data didn't come over with the comments, so they're all listed as anonymous comments. That's fine though, it's the content that's important.

Commento isn't a free service, I currently pay $3/month, so I obviously need to factor that in to my cost savings over WordPress, but it still comes out cheaper and like I said earlier, it doesn't break the bank anyway.

There is an option to self-host Commento, and I will probably look into that in the future, but for now, I'm happy and me paying for the service helps support development.

## Conclusion {#h-conclusion}

I've made a lot of changes to the Quark theme to make it my own (now called the Quirk theme :far fa-smile:), it has been a lot of work, but really worth it.

I now have a website with a design that I'm really happy with, that I'm in full control over and is running open source and privacy respecting software right through the stack.

I don't know if I will ever move away from Grav to something else, but for the time being, I'm really happy with what I have managed to create here.

**Are you a Grav user, or have you recently migrated to or from WordPress? Feel free to tell me your thoughts in the comments section below.**
