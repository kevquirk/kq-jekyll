---
title: 'Dreamhost &#8211; The Worst Web Host I&#8217;ve Ever Used'
date: '2013-10-01T11:01:00+01:00'
layout: post
permalink: /dreamhost-the-worst-web-host-ive-ever-used/
categories:
    - Meta
    - Opinion
    - Web
---

I’m sure most of the people reading this post will know that I run a pretty popular blog, [RefuGeeks](https://web.archive.org/web/20131214100125/http://kevquirk.com/2013/10/dreamhost-worst-web-host-ever-used/refugeeks.com). It’s really great that RefuGeeks is growing in popularity, but the side-effect to that is that I’m having to pay more and more, for better hosting. Previously I was on a 2GB [Linode](https://web.archive.org/web/20131214100125/http://linode.com/) VPS (they’re awesome by the way), but my server was constantly having to be tweaked and optimised in order to cope with the load. So, I had to move…

All the work that I was doing behind the scenes on the RefuGeeks server, was really starting to frustrate me, and distract me from my true love – writing. So I decided to go with a managed WordPress installation from DreamHost – a service called DreamPress.

Reading through the information listed on the [DreamPress website](https://web.archive.org/web/20131214100125/http://www.dreamhost.com/dreampress/), I felt assured that these guys would take away all of my headaches. **But, oh, how wrong one person could be!**

I would never recommend Dramhost to anyone – and if you’re with them I’d leave NOW!

> What is DreamPress? That’s a good question! Think of WordPress. You got it? Cool. Now, think of that WordPress install, but on steroids! Picture it running on a specialized, optimized, virtual private server. Yeah, this is far from your average WordPress hosting package, isn’t it? DreamPress comes pre-configured by our in-house WordPress experts for maximum security and performance under traffic load. This is our call-out to all entrepreneurs, website designers, developers, and bloggers to give it a test-drive today!

So, I answered this call-out that DreamHost were touting, and it was a disaster from the very start. Let’s start from the beginning, I’m going to do this as a bullet list, as there’s a lot to get through here…

- After just 2 days of using the service, I was seeing the server go down on a regular basis. When I first contacted support, they told me that everything was ok, and that they couldn’t see an issue (it took nearly 24 hours to get this response, and I only got that because I went on live chat to grab someone). So much for that 100% uptime guarantee.
- I requested that the issue be escalated as I wasn’t happy the answer I got – if I hadn’t I imagine the server would still be up and down today.
- Finally I got a response of “I’m not sure what the issue was, but running a network config seemed to fix the issue”. Not really the answer I was looking for, but hey, the issue was fixed, so I moved on…
- Next came a really weird issue with the server just sitting there for around 4 seconds doing nothing, before the page is loaded. There was a lot of back and forth on this issue, I was passed around the houses and in the end had to demand to speak to these “WordPress Experts” that they go on about on the DreamPress homepage.
- So, I finally had a WordPress engineer look at the issue, and I have to say that this is only positive thing I took from the whole experience. They were great, and the issue was fixed rapidly – turns out it was an issue with a plugin I had installed just before moving to DreamHost. However, it did take nearly 2 days to speak to this person – and me [publicly outing DreamHost as being rubbish on Twitter](https://web.archive.org/web/20131214100125/https://twitter.com/kevquirk/status/382514445324259328). Surely if you’re paying for a managed WordPress installation, you should always have a WordPress expert dealing with you?

So now I’m at the point where I’m around a week into using the DreamPress service, I’ve had a couple of issues, and both times they could have been handled in a much better way by the support team. But now came the straw that broke the camels back. This was the real deal breaker for me…

- I go to check my backups, as I do regularly, as they are so important. And I notice that I haven’t had a single backup complete since I’ve been with DreamHost. So, I dig into it a little bit more, checking the logs, and see that the issue seems to be with PHP, and/or memory. So, I log a ticket with support…
- A day later I get told that I can access the shell of my server by changing my FTP account to a shell account. So I think great! I can finally get at the nuts and bolts, and not rely on support so much. I jump on, log in to the server via SSH, go to edit my php.ini file, then low and behold, my user isn’t in the sudo group. For those that aren’t really Linux users, this means that I’m a standard user and can’t actually do anything worth while on the machine. So, back to support…
- I go back an explain the situation (at this point getting pretty pissed off that I keep getting pushed around the houses), they up the PHP memory limit, and timeout at my request. But the backups still aren’t working. So I go back to them with more diagnostic information, and proof that the issue is with the server (I tried backing up the RefuGeeks development site on another server – which worked – which is hosted on cheap shared hosting might I add).
- The response I got to this was that it’s not supported, and I should speak to the manufacturer of the backup system. Why on earth would I do that, when I’ve proved it’s your shitty server at fault??? It also took 3 days to get this answer!
- I asked for a detailed explanation as to why this wan’t supported, and I didn’t get one.
- I had previously also asked that the Varnish caching system be disabled as a test (this is literally five minutes work to turn it off), run a backup, and test again. The tech support guy, “Dan H” (thought I’d name and shame him as he is a total clown) blatantly lied to me and said that he had to “reconfigure the server to get the site back up and running” after testing. The thing is, I hadn’t had a reply about the backup issue for 2 days, so I changed the password back on my backup system, so I am certain that he didn’t run a test backup. Also runnig “varnishstat” from the command line shows the uptime of Varnish – it hadn’t gone down. So no testing had been done. There’s nothing worse than a tech support guy who lies.
- At this point, I called it quits and moved away from DreamHost, they are a shambles. I’ve tried to claim by money back via their 97 day money back guarantee, but it turns out that I can’t get that as I paid by PayPal. So, instead I’m getting my money back in DreamHost credit – brilliant! I don’t think I’ll be using that any time soon.

## What now?

Well, I’m back on [Linode](https://web.archive.org/web/20131214100125/http://linode.com/), there’s still a lot of work to do, but once it’s all setup I will be running two servers within Linode, one for the web server, and one for database and caching. It’s a much more expensive solution tham DreamHost, but you get what you pay for. I’m currently running on one Linode, and stability is already way better than that of DreamPress. At the moment, the performance isn’t as good as that of DreamPress, but it will be once I’m finished setting it all up.

I’m not usually one for moaning, or telling people what they should, and shouldn’t do. However, having worked in IT support myself for nearly a decade, I found it absolutely astonishing just how bad DreamHost support were (with the exception of the WordPress engineers I spoke with). I’m sure they have many happy customers, but why risk it if they can treat a new customer so badly, on so many separate occasions?

Do you have a DreamHost horror story? Please feel free to it below. Also, don’t forget to share this post on you social networks. It’s important to let people know what they’re letting themselves in for – you never know, DreamHost may actually improve their service. I don’t care though, I’ll be sticking with [Linode](https://web.archive.org/web/20131214100125/http://linode.com/).

## Dreamhost – yeah right! More like Nightmarehost!