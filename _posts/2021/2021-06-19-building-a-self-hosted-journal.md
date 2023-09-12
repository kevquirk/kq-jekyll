---
id: 5841
title: Building A Self-Hosted Journal
date: 2021-06-19T15:45:56+01:00

layout: post
permalink: /building-a-self-hosted-journal/
description:
  - I've been thinking about starting to journal, but being the nerd that I am, I wanted something techie. So I built a self-hosted journal.
categories:
  - Opinion
  - Web
---
<p class="medium">
  My wife keeps a journal, and I&#8217;ve been thinking about doing the same. Being the nerd that I am, I wanted something techie, so I built a self-hosted journal.
</p>

The idea of keeping a journal interests me. My wife says she finds it cathartic to spend a few minutes at the end of each day reflecting and writing her thoughts down.

But having my innermost thoughts in a book that anyone can pickup and read concerns me. It's not that I have secrets at such (even though [we all have something to hide](/privacy-vs-i-have-nothing-to-hide/)), but I feel that if it is trivial to pickup and read the book, I may subconsciously censor what I write.

Goodness knows my grey matter needs some organisation, so I wanted to plough on start journaling, albeit without a book.

I needed a technical solution...

## Technical journaling options {#h-technical-journaling-options}

I recently heard about Automattic (the company that owns WordPress among other things) <a href="https://dayoneapp.com/blog/day-one-at-automattic" target="_blank" rel="noreferrer noopener">acquiring Day One</a>. I didn't know anything about Day One, but assumed it would allow me to sync my journal anywhere.

Unfortunately that's not the case. All I could have done with Day One was sync to their proprietary platform. If I'm not prepared to have a book in my home with my grey matter drivel inside it, there's zero chance I'm going to store it on a random server somewhere.

There were other options, but they were all similar to Day One in terms of storing my journal. They were a non-starter too.

I needed a self-hosted journal.

## Self-hosted journal options {#h-self-hosted-journal-options}

A quick search showed some reasonable options for my journal, <a href="https://github.com/inoda/journal" target="_blank" rel="noreferrer noopener">this one</a> being the most promising. Problem is, I would have needed to faff around with infrastructure to run my journal on.

I didn't want to spin a dedicated server just for my journal, and even though I can use Docker on my Synology, [like I did with Pi-Hole](/how-to-setup-pi-hole-on-a-synology-nas/), I'm not familiar enough with it to host something like a journal.

So I went with what I know best - <strong>WordPress!</strong>

I can easily run WordPress on my Synology and with the WordPress app on my phone/tablet, it would be trivial to add posts every day. Originally I wasn't going to expose my journal to the Internet, but if I wanted to use the WordPress app, I needed to. Plus, being able to add entries to my journal from anywhere is really helpful.

Instead of exposing the entire thing to the Internet, I installed a couple of plugins that lock down my self-hosted journal and make it work how I needed it to.

### Protecting my journal {#h-protecting-my-journal}

First thing I needed was to password protect my journal. That's easy, I installed and activated the <a href="https://en-gb.wordpress.org/plugins/wp-force-login/" target="_blank" rel="noreferrer noopener">Force Login plugin</a> and _hey presto!_ My journal required a login to see any of the site. To add an extra layer of security, I added the <a href="https://en-gb.wordpress.org/plugins/two-factor-authentication/" target="_blank" rel="noreferrer noopener">Two Factor Authentication plugin</a> to, you know, add multi-factor auth to my journal ([that's very important](/what-is-two-factor-authentication/)).

I also wanted to change the login screen slightly, so I installed the <a href="https://en-gb.wordpress.org/plugins/colorlib-login-customizer/" target="_blank" rel="noreferrer noopener">ColorLib Login Customiser</a> so I could make some tweaks to the login page. After 5 minutes playing around, here's what the homepage (or any page if you're not logged in) looks like:

![](/assets/images/journal-login.png)

## My self-hosted journal theme {#h-my-self-hosted-journal-theme}

I wanted something really sparse for the actual theme of the site. My journal doesn't need pages, contact forms, comments or any of that jazz. I just need a list of journal entries and a simple way of adding more, should I want to do so via my browser.

I have a <a href="https://generatepress.com/" target="_blank" rel="noreferrer noopener">GeneratePress Pro</a> lifetime license, so I went with the GeneratePress theme. That's what the theme on this site uses, so I know it's lightweight and easy to customise. Lucky for me this simple, self-hosted journal didn't need much customising.

After 30 minutes or so, I had something I was relatively happy with. It's just a simple white site with grey `serif` text. All nice and simple:

![](/assets/images/journal-homepage.png)

![](/assets/images/journal-homepage-dark.png)

The navigation menu has a link to the home page, and a button to add a new entry. <s>I also installed the <a href="https://en-gb.wordpress.org/plugins/hide-admin-bar/" target="_blank" rel="noreferrer noopener">Hide Admin Bar plugin</a> as I don't need the WP admin bar on the front end.</s> _I've since found out that this can be done from the WP user profile settings, so I deleted this plugin (thanks <a href="https://jan.boddez.net/" target="_blank" rel="noreferrer noopener">Jan Boddez</a>)_.

That's it, I was done. In total it took me around 40 minutes to go from absolutely nothing to a site that was ready to accept my brain farts.

## A week in&#8230; {#h-a-week-in}

I've been writing my journal for around a week now and the process is working well. I've mostly written entries using the WordPress app on my iPad during the evening, but there have been a couple of occasions where I've written entries from my web browser. So it's working well.

I don't think I will need to fiddle with the theme as my journal won't have any visitors, except me. It's more a way to accept content, rather than consuming it. As long as the reading experience is pretty good and content-focussed, that's all I need.

## Closing thoughts {#h-closing-thoughts}

Now you may think I'm mad putting my journal online, when I was concerned about it being in a book in my house. What if my site gets hacked? Honestly, I don't think it will get hacked. WordPress is very secure if you keep it updated and take some simple precautions. The case for WordPress is very compelling [in my opinion](/the-case-for-wordpress/).

I could have gone with markdown files, or a note taking app like the brilliant <a href="https://standardnotes.org/" target="_blank" rel="noreferrer noopener">Standard Notes</a>. But I wanted something that was dedicated to the job of taking my journal entries and displaying them. Shoehorning them into a note taking app didn't feel right.

Markdown files would have probably worked, but adding images to journal entries would have proven difficult from a mobile device. I needed the process to be really simple, or I know I would be less likely to stick to the habit of writing my journal.

All in all, I'm really happy with my little self-hosted journal. I think I can call this little project a success.

**Do you write a journal? If so, I'd love to hear about what platform you use for writing yours.**
