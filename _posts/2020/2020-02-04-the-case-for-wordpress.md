---
title: The Case For WordPress
layout: post
permalink: /the-case-for-wordpress/
description: Apparently, WordPress is slow, insecure and is hard to maintain. I'm going to debunk these WordPress misconceptions as none of this is actually true.
categories:
  - Opinion
  - Web
---
**Apparently, WordPress is slow, insecure and hard to maintain. I disagree and wanted to take a minute to explain why I think none of this is actually true.**

This morning, I saw a post from one of the <a rel="noreferrer noopener" aria-label="Fosstodon (opens in a new tab)" href="https://fosstodon.org" target="_blank">Fosstodon</a> team, Gina. She was asking about creating a blog and wondered if <a rel="noreferrer noopener" aria-label="Ghost (opens in a new tab)" href="https://ghost.org" target="_blank">Ghost</a> would be a good recommendation:

![](/assets/images/gina-ghost-poll.png)

Obviously Gina ended up getting a tonne of different recommendations, which included WordPress, Hugo, Jekyll, Grav and a few others I'd never heard of.

<a rel="noreferrer noopener" aria-label="My personal recommendation was WordPress (opens in a new tab)" href="/coming-full-circle-from-grav-to-wordpress/" target="_blank">My personal recommendation was WordPress</a> over Ghost. Mainly because I know PHP better than Node.js, and for me, WordPress _just works_. However, that recommendation was met with a few of the common misconceptions around WordPress.

## WordPress is slow {#h-wordpress-is-slow}

In and of itself, WordPress is **NOT** slow. WordPress _can_ ****be slow, but it isn't inherently slow. Look at this website for example, it's running WordPress, but it loads very quickly and scores 96% for mobile & 99% for desktop on Google PageSpeed Insights.

![](/assets/images/kq-pagespeed-insights.png)

There's no magic going on here. I use a standard VPS hosted with Ionos for my web server, and I run the <a rel="noreferrer noopener" href="https://wp-rocket.me" target="_blank">WP Rocket</a> plugin. You can read more about [my optimisations](/how-i-optimise-my-website-performance/) here.

I don't have a tonne of plugins installed, I use a well coded theme that doesn't have a load of features I don't need, and I make sure there aren't huge images littered throughout my posts.

<a rel="noreferrer noopener" aria-label="Marko Sarik has a great post (opens in a new tab)" href="https://markosaric.com/speed-up-wordpress/" target="_blank">Marko Saric has a great post</a> that goes into a lot of detail on how to optimise WordPress - it's really not that hard.

So yes, WordPress can be slow and heavy, but can't every site? The point is, it doesn't have to be slow and heavy, and it's easy to make it light and fast.

## WordPress is hard to maintain {#h-wordpress-is-hard-to-maintain}

Honestly, I was surprised this came up. I didn't realise people thought that WordPress was hard to maintain. Most web hosts have a one-click installer for WordPress and the core application updates itself automatically.

If you decide you want to disable auto updates, updating WP core is literally a single click. So I'm really not sure where the idea that WordPress is hard to maintain comes from.

When I was running Grav and Ghost, I found these much more difficult to maintain than WordPress. Once everything is setup, WP lets me focus on writing content, not messing around with maintenance.

## WordPress is insecure {#h-wordpress-is-insecure}

This is similar to whole speed thing. Yes, WordPress _can_ be insecure, but that's true of any piece of software if you don't maintain it.

WordPress gets a bad rep for security because of a number of security issues that have been disclosed in the past. This is because WP runs on something like 30% of websites on the entire web.

It's popular, so it's a big target. But that doesn't make it inherently insecure. Administrators having poor security hygiene is what makes those sites insecure.

Not updating WP core and plugins, using really old and unsupported versions of PHP, using a tonne of plugins instead of coding features into the site's theme and using poor passwords all reduce security.

  1. Disable pingbacks to prevent DDoS attacks.
  2. Use strong passwords and <a rel="noreferrer noopener" aria-label="multi-factor authentication (opens in a new tab)" href="https://wordpress.org/plugins/two-factor-authentication/" target="_blank">multi-factor authentication</a>.
  3. Update your shit (including PHP).
  4. Reduce the number of plugins you're using where possible.

Follow these 4 simple rules and your WordPress site will be significantly more secure.

## WordPress needs MySQL & PHP {#h-wordpress-needs-mysql-php}

Yes, that's right. WordPress requires a database and PHP. So? Why is that a problem? As long as you're using a modern, supported version of PHP, then you're good.

The vast majority of web hosts allow for using both PHP and creating MySQL databases - this really isn't anything special. Lots of other web applications require MySQL and PHP too.

Ghost requires Node.js, which still has problems being used on a lot of shared hosting environments. Want to run a Ghost blog? You're going to need a VPS for that.

## Conclusion {#h-conclusion}

WordPress, Ghost, Hugo, Jekyll, Grav, or coding a blog yourself. Who really cares as long as it works for you. For me, WordPress is the best option.

Yes, there are many insecure and slow examples of WordPress out there, but that's the fault of site admins, not WordPress.
