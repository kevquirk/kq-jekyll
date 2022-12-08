---
title: This Is What's Wrong With The Linux Community
description: I was recently listening to a Linux podcast and it was the perfect example of what's wrong with the Linux community
image: /assets/images/default-feature.webp
category: [Notes, Opinion]
layout: post
---
{: .tldr}
I was recently listening to [Episode 151](https://latenightlinux.com/late-night-linux-episode-151/) of Late Night Linux and they gave the perfect example of how condescending the Linux community can be.

So I'm walking the dog and listening to Late Night Linux, which is one of my favourite Linux podcasts (even though [I don't use Linux on the desktop anymore](/a-sombre-goodbye-to-linux/)). Joe and the team had Jim Salter on as a guest host, and during the episode they were discussing the perceived lack of decent email clients for Linux. 

All the usual suspects were being discussed - [Thunderbird](https://www.thunderbird.net/en-GB/), [Evolution](https://help.gnome.org/users/evolution/stable/), [KMail](https://apps.kde.org/kmail2/) etc. But then Jim piped up with his recommendation, which was [RoundCube](https://roundcube.net/).

This really surprised me because RoundCube is a webmail application. So in order to set it up on your machine, you will need to install a web server. RoundCube also needs a database, so you will need something like MySQL too.

Ultimately, you're going to need to install and maintain a [LAMP/LEMP stack](https://www.geeksforgeeks.org/difference-between-lamp-stack-and-lemp-stack/) in order to run RoundCube.

**I think that's just plain ridiculous.**

## Linux ≠ complexity
Why do so many folk in the Linux community default to overly complex solutions when it comes to solving problems?

Jim Salter is an extremely technical guy, I get that. Running a LAMP/LEMP stack with RoundCube for him, would be as trivial as my mum starting up MS Word.

But Jim positioned this solution as *the best* solution for managing email on Linux. At one point Will somewhat flippantly asked _so you're saying that in order to manage email people should spin up an Nginx server?"_ Jim replied with a definitive _"yes"_.

That simply isn't the case.

Geary might be perfectly suffice for most users, others may prefer Thunderbird. I imagine a web server stack and RoundCube would be too complex for the vast majority of people who just want the ability to send and receive email.

And that's the rub for me. If you're deeply technical, like Jim, and decide that an overly complex or technical solution is the right one **for you** that's cool. But claiming it's **the best** solution is just wrong.

Worse still, it will put people off using Linux.

## Wait, there's more...
This whole complexity ethos has penetrated pretty much every Linux community I can think of. There's this insidious elitism within Linux that basically says _if your solution isn't technically complex, you're an idiot._

**I use Arch, BTW.** (I don't really - ain't no-one got time for that!)

Case in point - [I recently sold my desktop PC](/macbook-m1-4-month-update) on eBay and by sheer coincidence the guy who picked it up was a Linux user too. So, we obviously got chatting about all things Linux and he asked me what distro(s) I run.

I explained that I had recently switched to MacOS, but when I did use Linux, it was Ubuntu. He immediately scoffed and said something along the lines of:

> Ubuntu? So you're a beginner then? I use Gentoo myself - I love compiling my own kernel.
> 
><cite>-- eBay guy</cite>

My response was a raised eyebrow. _Elitism as its finest_, I thought.

## Final thoughts
I'm not really sure what the point of this post is to be honest. 🙃

To air a frustration maybe? I suppose I'd like to end this post by politely asking Linux folk to stop with the elitism.

Put yourself in the position of a new Linux user. They come to a community and ask for help, only to be met with responses like; _"read the man pages"_ or _"your first mistake was to use Ubuntu"_ or _"what kind of idiot uses Gnome in this day and age?"_ Or, in the case of Jim _"install a LAMP/LEMP stack and run RoundCube for your email."_

{:  .notice}
I've seen all of the above comments in various Linux communities around the Internet.

**By treating people in the community like this you're ostracising them and really not helping the community at large. Ultimately, you're hurting Linux.**

 **Please stop.**
