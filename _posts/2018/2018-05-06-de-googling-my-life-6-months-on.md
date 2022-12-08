---
title: De-Googling My Life – 6 Months On
layout: post
permalink: /de-googling-my-life-6-months-on/
description: It's been 6 months since I de-Googled my life. Here's an update.
categories:
  - De-Googling
  - Privacy
---
It has been 6 months since I decided to [de-Google my life](/categories/de-googling), so I thought I would do an update post to let you guys know how I’m getting on, what’s changed since my last de-Googling post, and most importantly, have I gone back to the big blue G?  
Recap

Now I know every single one of you read every post as soon as I published it, as my content is just that good _[citation needed]_. But I thought I’d give a quick run-down of what I managed to replace and what I couldn’t:

  1. [I replaced Chrome & Google Search with Firefox and DuckDuckGo.](/de-googling-my-life-01-browser-search)
  2. [I replaced Google Analytics with Piwiki (AKA Matomo).](/de-googling-my-life-02-analytics)
  3. [I started using Mastodon along with Google+.](/de-googling-my-life-03-google-plus)
  4. [I replaced Google Drive with Nextcloud.](/de-googling-my-life-04-google-drive)
  5. [I replaced Gmail with an IMAP mailbox on my existing hosting package.](/de-googling-my-life-05-gmail)
  6. [There were some thing that I couldn’t replace.](/de-googling-my-life-06-what-i-cant-replace)

Now that you’re all fully up to speed with what I did to try and rid Google from my life, let’s talk about each change in turn, and I’ll tell you how I’m getting on.

## Firefox and DuckDuckGo {#h-firefox-and-duckduckgo}

Things are going really well for me on both Firefox and DuckDuckGo (DDG). I’m still using both products with great success. I think that the timing of my endeavour was perfect, as Mozilla released their new Quantum version of Firefox.

I approached moving from Chrome to Firefox with some trepidation, as Firefox had become bloated and slow over time. However, Quantum has all but fixed those issues. Personally, I no longer see much difference in performance between Firefox and Chrome.

I do still keep Chrome hanging around on my devices, just in case I ever need another browser, but I intend to start swapping my backup browser from Chrome to [Vivaldi](https://vivaldi.com) over the next few weeks.

{: .full-bleed}
![Firefox with DuckDuckGo search](/assets/images/firefox-duckduckgo.webp){: loading="lazy"}

With regards to DDG, it does still frustrate me at times, as the results tend not to be as good as Google’s sometimes (I assume that’s probably due to the masses of data they have on me). Having said that, [DDG’s Bangs](https://duckduckgo.com/bang) easily solve that problem.

All I need to do is prefix my DDG search query with !g and DDG will send my quest straight to Google, so I can still get Google results, without the search coming direct from me. It’s not perfect, but it works well. I would say that 90% of my DDG searches do not require the bang feature, so it’s still really good.

## Piwik Analytics (AKA Matomo) {#h-piwik-analytics-aka-matomo}

This is going to be a short and sweet update. I decided to stop tracking the visitors that come to this site. This isn’t because Piwik is a bad tool – it’s awesome and it works really well. The decision was based mainly around respecting my visitor’s privacy and [GDPR](https://www.eugdpr.org).

You can read more about the rationale behind my decision [here](/about/privacy).

## Mastodon {#h-mastodon}

[Mastodon](https://joinmastodon.org) was recommended to me by a friend of mine, [Mike Stone](https://fosstodon.org/@mike). I quickly fell in love and decided to spin up my own Mastodon instance, [Fosstodon](https://fosstodon.org).

However, 6 months ago the instance was very much in it’s infancy, and I wasn’t sure if it was going to work out. So I decided to run Fosstodon concurrently with Google+.

Fast forward 6 months and Fosstodon now has well over 200 active members, and the instance is a joy to be a part of. Mike even kindly agreed to step up and help admin Fosstodon with me.

_By the way, if you’re looking to host a Mastodon instance yourself, I would highly recommend [Masto.Host](https://masto.host). The owner, [Hugo](https://masto.pt/@hugo), is always willing to help and the hosting he provides is superb. I’ve already had to upgrade my server a couple of times, but each time it’s been completely painless, thanks to Hugo._

{: .full-bleed}
![Fosstodon about page](/assets/images/about-fosstodon.webp){: loading="lazy"}

With Fosstodon doing so well, I decided to delete my Google+ account back in March. Not only that, but I decided to delete my Facebook account along with it. Now, [Fosstodon](https://fosstodon.org/@kev) and [Twitter](https://twitter.com/kevquirk) are the only social networks I use.

## Nextcloud {#h-nextcloud}

What can I say about [Nextcloud](https://nextcloud.com) except for the fact that it is awesome!

I originally set up a hosted Nextcloud instance with [Owncube](https://owncube.com), as it was easy to get going, relatively cheap, and better than Google Drive (in my opinion). However, I was still reliant on a 3rd party for hosting all my personal data. I had to change that.

Around a month ago, I decided to bring my Nextcloud instance in-house and start hosting it myself. I started doing some research and ultimately decided to host [Nextcloud on a Raspberry Pi 3+](/nextcloud-on-a-raspberry-pi-3). So far it is working brilliantly (aside from a few hiccups at the start).

There’s nothing wrong with the service that Owncube provides, I was very happy with their service. But I wanted to be host my data myself if at all possible, and in this case, it was.

{: .full-bleed}
![Nextcloud login](/assets/images/Nextcloud-Carrot.webp){: loading="lazy"}

All my data now syncs to my Nextcloud instance, which is then backed up to a number of additional places on my network. I even have Nextcloud doing some other interesting things, which we will come on to next.

## Email, Contacts & Calendar {#h-email-contacts-calendar}

I decided to simply use a Plesk web hosting account that I already have to host all my emails. The account comes with unlimited storage and bandwidth for just £3.50/month (~$5.00). I’m still hosting my email on there, and it’s all working great.

All I really had to do was setup [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records, so my messages never get sent to people’s spam folder and change my MX records. The email migration itself took a few days, but it was a relatively painless process.

Unfortunately, my current email host doesn’t offer 2FA on their mailboxes, which is a shame as it’s something I try to use everywhere, especially on something as important a email. Lack of 2FA may ultimately be the reason I leave the web hosting account for something more secure. For the time being though, I’m happy with my email hosting. Plus, [my passwords are all managed by Bitwarden](/bitwarden-lastpass-alternative), so I know I’m relatively secure.

When it comes to Contacts and Calendars, I have them set up in my Nextcloud instance and it all works brilliantly. I have been able to add my partner’s Google calendar to the interface, and I sync both contacts and calendars to all my devices via CardDAV and CalDAV.

For my Linux based machines I use Evolution, which has DAV support right out of the box. For my mobile devices, I use [DAVDroid](https://www.davdroid.com). In the past I’ve had sync issues using DAV, but DAVDroid and Nextcloud work together brilliantly. You really do just set it and forget it.  

Email, contacts and calendars were the single most important thing for me in this entire process, so getting this right was extremely important. I’m pleased to say that using the setup I now have, I feel I don’t miss out on any of Google’s groupware functionality at all.

## What I Couldn’t Replace {#h-what-i-couldn-t-replace}

I finished the series with a list of items that I felt I wasn’t able to replace at that time. The list is as follows:

  * Android
  * Android Pay
  * Chromebook
  * Google+
  * Google Maps
  * YouTube

Since ending the series, I have managed to make some progress on this list. Google+ has gone in favour of my Mastodon instance, Fosstodon and my Chromebook has gone too, but this wasn’t by choice.

A few weeks ago I got an on-screen popup whilst using my Chromebook, stating that the device was end of life, and would no longer receive updates. I toyed with the idea of getting another Chromebook, but my main laptop was also getting old, so I decided to invest in a fancy new Lenovo X1 Carbon. I’m writing this post on my X1, and I have to say, it’s a superb machine. By far the best laptop I’ve ever had, and the compatibility with my Linux distro of choice, [Ubuntu MATE](https://ubuntu-mate.org) is excellent.

Quick thanks to [Alan Pope](https://popey.com) (Ubuntu Community Manager) for recommending the Lenovo to me.

{: .full-bleed}
![Chromebook EOL notice](/assets/images/chromebook-eol.webp){: loading="lazy"}

Unfortunately, I really don’t think I will be able to make any more progress on this list — not in the immediate future at least — as I haven’t been able to find any really good replacements out there. Who knows what the future holds though.

## Conclusion {#h-conclusion}

Overall, I think this whole process has been a complete success. I’m now far less reliant on Google services, and in turn, more in control of my data. Yes, it’s not perfect, and I’m still using some Google services, but I will continue to work on those to see if I can become completely Google free.

Hopefully one day I will be Google free, but in the meantime, I’m very happy with what I have managed to accomplish during this process.

**You can find links to all posts in this series by [clicking here](/category/de-googling).**
