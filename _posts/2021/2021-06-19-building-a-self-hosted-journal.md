---
id: 5841
title: Building A Self-Hosted Journal
date: 2021-06-19T15:45:56+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=5841
permalink: /building-a-self-hosted-journal/
description:
  - I've been thinking about starting to journal, but being the nerd that I am, I wanted something techie. So I built a self-hosted journal.
image: /assets/images/wp-images/uploads/2021/06/building-journal-feature.png
categories:
  - Opinion
  - Web
---
<p class="medium">
  My wife keeps a journal, and I&#8217;ve been thinking about doing the same. Being the nerd that I am, I wanted something techie, so I built a self-hosted journal.
</p>

The idea of keeping a journal interests me. My wife says she finds it cathartic to spend a few minutes at the end of each day reflecting and writing her thoughts down.

But having my innermost thoughts in a book that anyone can pickup and read concerns me. It&#8217;s not that I have secrets at such (even though [we all have something to hide](https://kevq.uk/privacy-vs-i-have-nothing-to-hide/)), but I feel that if it is trivial to pickup and read the book, I may subconsciously censor what I write.

Goodness knows my grey matter needs some organisation, so I wanted to plough on start journaling, albeit without a book.

<p class="medium">
  I needed a technical solution&#8230;
</p>

## Technical journaling options {#h-technical-journaling-options}

I recently heard about Automattic (the company that owns WordPress among other things) <a href="https://dayoneapp.com/blog/day-one-at-automattic" target="_blank" rel="noreferrer noopener">acquiring Day One</a>. I didn&#8217;t know anything about Day One, but assumed it would allow me to sync my journal anywhere.

Unfortunately that&#8217;s not the case. All I could have done with Day One was sync to their proprietary platform. If I&#8217;m not prepared to have a book in my home with my grey matter drivel inside it, there&#8217;s zero chance I&#8217;m going to store it on a random server somewhere.

There were other options, but they were all similar to Day One in terms of storing my journal. They were a non-starter too.

<p class="medium">
  I needed a self-hosted journal&#8230;
</p>

## Self-hosted journal options {#h-self-hosted-journal-options}

A quick search showed some reasonable options for my journal, <a href="https://github.com/inoda/journal" target="_blank" rel="noreferrer noopener">this one</a> being the most promising. Problem is, I would have needed to faff around with infrastructure to run my journal on.

I didn&#8217;t want to spin a dedicated server just for my journal, and even though I can use Docker on my Synology, [like I did with Pi-Hole](https://kevq.uk/how-to-setup-pi-hole-on-a-synology-nas/), I&#8217;m not familiar enough with it to host something like a journal.

<p class="medium">
  So I went with what I know best&#8230;<strong>WordPress!</strong>
</p>

I can easily run WordPress on my Synology and with the WordPress app on my phone/tablet, it would be trivial to add posts every day. Originally I wasn&#8217;t going to expose my journal to the Internet, but if I wanted to use the WordPress app, I needed to. Plus, being able to add entries to my journal from anywhere is really helpful.

Instead of exposing the entire thing to the Internet, I installed a couple of plugins that lock down my self-hosted journal and make it work how I needed it to.

### Protecting my journal {#h-protecting-my-journal}

First thing I needed was to password protect my journal. That&#8217;s easy, I installed and activated the <a href="https://en-gb.wordpress.org/plugins/wp-force-login/" target="_blank" rel="noreferrer noopener">Force Login plugin</a> and _hey presto!_ My journal required a login to see any of the site. To add an extra layer of security, I added the <a href="https://en-gb.wordpress.org/plugins/two-factor-authentication/" target="_blank" rel="noreferrer noopener">Two Factor Authentication plugin</a> to, you know, add multi-factor auth to my journal ([that&#8217;s very important](https://kevq.uk/what-is-two-factor-authentication/)).

I also wanted to change the login screen slightly, so I installed the <a href="https://en-gb.wordpress.org/plugins/colorlib-login-customizer/" target="_blank" rel="noreferrer noopener">ColorLib Login Customiser</a> so I could make some tweaks to the login page. After 5 minutes playing around, here&#8217;s what the homepage (or any page if you&#8217;re not logged in) looks like:

<img loading="lazy" width="1053" height="554" src="/assets/images/wp-images/2021/06/journal-login.png" alt="My journal login screen" class="wp-image-5844" srcset="/assets/images/wp-images/2021/06/journal-login.png 1053w, /assets/images/wp-images/2021/06/journal-login-610x321.png 610w, /assets/images/wp-images/2021/06/journal-login-768x404.png 768w" sizes="(max-width: 1053px) 100vw, 1053px" />  

## My self-hosted journal theme {#h-my-self-hosted-journal-theme}

I wanted something really sparse for the actual theme of the site. My journal doesn&#8217;t need pages, contact forms, comments or any of that jazz. I just need a list of journal entries and a simple way of adding more, should I want to do so via my browser.

I have a <a href="https://generatepress.com/" target="_blank" rel="noreferrer noopener">GeneratePress Pro</a> lifetime license, so I went with the GeneratePress theme. That&#8217;s what the theme on this site uses, so I know it&#8217;s lightweight and easy to customise. Lucky for me this simple, self-hosted journal didn&#8217;t need much customising.

After 30 minutes or so, I had something I was relatively happy with. It&#8217;s just a simple white site with grey `serif` text. All nice and simple:

<img loading="lazy" width="1220" height="659" src="/assets/images/wp-images/2021/06/journal-homepage-1220x659.png" alt="My self-hosted journal's theme" class="wp-image-5847" srcset="/assets/images/wp-images/2021/06/journal-homepage-1220x659.png 1220w, /assets/images/wp-images/2021/06/journal-homepage-610x330.png 610w, /assets/images/wp-images/2021/06/journal-homepage-768x415.png 768w, /assets/images/wp-images/2021/06/journal-homepage.png 1255w" sizes="(max-width: 1220px) 100vw, 1220px" />  <img loading="lazy" width="1142" height="659" src="/assets/images/wp-images/2021/06/journal-homepage-dark.png" alt="Dark version of my journal theme" class="wp-image-5850" srcset="/assets/images/wp-images/2021/06/journal-homepage-dark.png 1142w, /assets/images/wp-images/2021/06/journal-homepage-dark-610x352.png 610w, /assets/images/wp-images/2021/06/journal-homepage-dark-768x443.png 768w" sizes="(max-width: 1142px) 100vw, 1142px" />

The navigation menu has a link to the home page, and a button to add a new entry. <s>I also installed the <a href="https://en-gb.wordpress.org/plugins/hide-admin-bar/" target="_blank" rel="noreferrer noopener">Hide Admin Bar plugin</a> as I don&#8217;t need the WP admin bar on the front end.</s> _I&#8217;ve since found out that this can be done from the WP user profile settings, so I deleted this plugin (thanks <a href="https://jan.boddez.net/" target="_blank" rel="noreferrer noopener">Jan Boddez</a>)_.

That&#8217;s it, I was done. In total it took me around 40 minutes to go from absolutely nothing to a site that was ready to accept my brain farts.

## A week in&#8230; {#h-a-week-in}

I&#8217;ve been writing my journal for around a week now and the process is working well. I&#8217;ve mostly written entries using the WordPress app on my iPad during the evening, but there have been a couple of occasions where I&#8217;ve written entries from my web browser. So it&#8217;s working well.

I don&#8217;t think I will need to fiddle with the theme as my journal won&#8217;t have any visitors, except me. It&#8217;s more a way to accept content, rather than consuming it. As long as the reading experience is pretty good and content-focussed, that&#8217;s all I need.

## Closing thoughts {#h-closing-thoughts}

Now you may think I&#8217;m mad putting my journal online, when I was concerned about it being in a book in my house. What if my site gets hacked? Honestly, I don&#8217;t think it will get hacked. WordPress is very secure if you keep it updated and take some simple precautions. The case for WordPress is very compelling [in my opinion](https://kevq.uk/the-case-for-wordpress/).

I could have gone with markdown files, or a note taking app like the brilliant <a href="https://standardnotes.org/" target="_blank" rel="noreferrer noopener">Standard Notes</a>. But I wanted something that was dedicated to the job of taking my journal entries and displaying them. Shoehorning them into a note taking app didn&#8217;t feel right.

Markdown files would have probably worked, but adding images to journal entries would have proven difficult from a mobile device. I needed the process to be really simple, or I know I would be less likely to stick to the habit of writing my journal.

All in all, I&#8217;m really happy with my little self-hosted journal. I think I can call this little project a success.

**Do you write a journal? If so, I&#8217;d love to hear about what platform you use for writing yours.**
