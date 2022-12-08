---
title: De-Googling My Life 05 – Gmail
layout: post
permalink: /de-googling-my-life-05-gmail/
categories:
  - De-Googling
  - Privacy
description: I'm de-Googling my life and this time I'm looking at replacing Gmail
---
Ok guys, it’s time. Let’s be honest, this is the article in the series you have all been waiting for. Gmail is a goner!

This was by far the most difficult part of [the whole process](/categories/de-googling), as I am heavily reliant on Gmail. Not just for email, but also for my calendar and contacts.

{: .notice}
I know Gmail, Google Calendar and Google Contacts are three separate products, but to make thing easier for me, when I mention “Gmail” in the confines of this post, I’m referring to all three services, unless otherwise stated.

Email is my main way of communicating, well, that and Whatsapp. I arrange my whole life in my calendar. Literally I would be lost without it; and my contacts are obviously very important to me. Before we get in to what I replace Gmail with, it was important for me to establish what my needs were.

## Meet My Needs {#h-meet-my-needs}

I’ve lost count of the amount of tools I tested as a plausible alternative to Gmail, and ultimately shunned away. This is because I have a very strict set of requirements:

  * I must be able to sync Gmail everywhere (desktop apps, webmail, Android, iOS, and backup utilities).
  * I must be able to add external calendars to my tool, as my partner still uses Gmail.
  * I need a fairly large amount of storage (my mailbox is around 3GB without archives).
  * Webmail needs to look good – you may think I’m being superficial here, but I spend **a lot** of time in my webmail, so it needs to look good and function right.
  * It need to be reasonably priced. I’m sorry, but I refuse to pay more for Gmail hosting than I pay for my monthly TV subscription.

Pretty exhaustive list, right? Here are some of the contenders that I tested, and the reason(s) why I decided against them:

### [Fastmail](https://fastmail.com) {#h-fastmail}

Fastmail is a great, privacy aware service. Their WebGUI is gorgeous, and on the whole their service works really well. But there was one thing that put me off – the price:

{: .full-bleed}
![Fastmail pricing](/assets/images/fastmail-pricing.webp)

Ok, $5/month certainly isn’t going to break the bank. However, it is a little more than I wanted to pay really. Especially since I may move my partner over in the future. I could host my own Zimbra server for $10/month.

The deal breaker here was the inability to add my partner’s calendar to the WebGUI. So, it was on the the next one…

### [Kolab Now](https://kolabnow.com) {#h-kolab-now}

I wanted to love Kolab Now, I really did. It’s open source, privacy respecting, and pretty much awesome all-round by the looks of things. However, for a 10GB mailbox that allows you to use your own domain, it’s over £10/month ($13). That’s a ridiculous amount to pay for a mailbox!

{: .full-bleed}
![Kolab Now pricing](/assets/images/kolab-now-pricing.webp)


### [Zoho Mail](https://mail.zoho.eu) {#h-zoho-mail}

Zoho was the front runner, and a service I have used in the past. It’s cheap, costing around £2/month ($3), and for that you get plenty of storage (30GB) and can use custom domains. Their WebGUI also allows you to add external calendars, and they are privacy respecting.

Like I said, I’ve used Zoho in the past, and their service was excellent. However, I’d just spun up a [Nextcloud instance to store all my data](/de-googling-my-life-04-google-drive), so I wanted to utilise that if possible, so I decided against Zoho. However, if things didn’t work out, this was very much my plan B.

{: .full-bleed}
![Zoho Mail](/assets/images/zoho-mail.webp)

## Decision Made {#h-decision-made}

Moving away from free hosting and service providers doesn’t cost the earth, but when you go all in, the accumulative price can start to really creep up.

I started looking at what I already had in place, to see if I could make something work. I have a cPanel hosting account with [TSOHost](https://my.tsohost.com/aff.php?aff=3887) (affiliate link), as well as a Nextcloud instance up and running for syncing my files. Accumulatively, these services cost around £10/month ($13), and that doesn’t take in to account other hosting services I have, like [my Mastodon instance](https://fosstodon.org) and domain renewals.

## Then it dawned on me… {#h-then-it-dawned-on-me}

cPanel supports basic IMAP email hosting; and Nextcloud has an IMAP mailbox viewer, as well as support for calendars and contacts via Cal/CardDAV.

I had spent weeks — months even — testing all these tools, when I might have already been paying for something that would do the job for me. Let’s looks at my list of requirements again:

  * **Sync everywhere** – _CHECK!_ Between using IMAP for emails, and Cal/CardDAV for my contacts and calendar, I can sync my data on every one of my devices, including my backup server, as they’re all open standards.
  * **External calendars** – _CHECK!_ I was able to sync my partner’s Google calendar with Nextcloud.
  * **Large amount of storage** – _CHECK!_ Plenty of storage on my cPanel hosting. In fact, unlimited storage (within reason) is commonplace for many hosts.
  * **Good looking webmail client** – _CHECK!_ The Nextcloud mail app is gorgeous and integrates with my cPanel IMAP just fine.
  * **Cheap** – _CHECK!_ I’m already paying for it, so in terms of what I was going to pay, it’s free!

{: .full-bleed}
![Nextcloud calendar](/assets/images/Nextcloud-Calendar.webp)

## Conclusion {#h-conclusion}

So folks, there you have it, sometimes you just need look at what’s right under your nose, I can’t believe I didn’t think of going down this route sooner. However, due diligence is never a bad thing.

[The whole process of De-Googling my life](/categories/de-googling) has been tough, but very interesting for me. I have discovered some awesome new services, and I really don’t regret it. The coolest part of the whole thing, is that I have managed to do this pretty much exclusively with open-source software!

I can honestly say that I haven’t had to change my work flow significantly, and once I was over the initial adjustment, the whole process was pretty painless. I have managed to remove myself from the confines of Google’s services for the most part, all without losing any functionality whatsoever. Incredible, I’d say.

I’m going to do one final post in this series, which will look at some of the Google services that I simply won’t be able to remove from my life, as there is no reasonable alternative for them. So, look out for that post coming soon. In the meantime, here is a list of the Google services I have replaced, and what I replaced them with:

  * Google Search – [DuckDuckGo](https://duckduckgo.com)
  * Google Chrome (browser) – [Firefox](https://firefox.com)
  * Google Analytics – [Piwik](https://piwik.org)
  * Google+ (social media) – [Mastodon](https://joinmastodon.org) / [Fosstodon](https://fosstodon.org)
  * Google Drive (file syncing) – [Nextcloud](https://nextcloud.com)

**You can find links to all posts in this series by [clicking here](/category/de-googling).**
