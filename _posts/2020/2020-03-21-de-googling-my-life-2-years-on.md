---
title: 'De-Googling My Life &#8211; 2 Years On'
layout: post
permalink: /de-googling-my-life-2-years-on/
description: I first started De-Googling my life back in September 2019. It's now been nearly 2.5 years, so I thought it was time for an update.
categories:
  - De-Googling
  - Privacy
---
{: .tldr}
I first started De-Googling my life back in [September 2017](https://kevq.uk/de-googling-my-life-series/). It&#8217;s now been nearly 2.5 years since I completed that process, so I thought it was time for an update.

I recently received an email from a reader asking me if I was intending to do an update on how de-Googling my life was going. I was intending to do an update, but I hadn&#8217;t realised it was well over 2 years since I went through the process.

It&#8217;s about time I gave you guys another update on how things are going, and what&#8217;s changed since [the last update](https://kevq.uk/de-googling-my-life-6-months-on/). I&#8217;ll go through each of the changes I made during my de-Google and I&#8217;ll give you guys an update on each one.

## 01 &#8211; Browser & Search {#h-01-browser-search}

In the first post in the series I talked about [replacing my browser and search](https://kevq.uk/de-googling-my-life-01-browser-search/). I replaced Chrome with [Firefox](https://firefox.com) and Google search with [DuckDuckGo](https://duckduckgo.com).

That&#8217;s still the case to this day. I&#8217;m still using both services and I&#8217;m happy to report that my experience has been great with each of them. Since the post was published, I&#8217;ve also started using [Brave](https://brave.com) as a secondary browser. However, I prefer to use Firefox, as it&#8217;s one of the few browsers out there today that doesn&#8217;t use Google&#8217;s rendering engine, Blink.

In the browser space, diversity is key &#8211; I really don&#8217;t want Google to have the monopoly here, but unfortunately, MS Edge, Chrome, Chromium, Brave, Vivaldi and Opera all use the Blink rendering engine.

As I understand it, it&#8217;s only Firefox and Safari that don&#8217;t use it, which use Quantum and Webkit respectively. If you&#8217;re thinking about changing browsers, please consider Firefox so that Google don&#8217;t get even more of a monopoly in this space.

With regards to DuckDuckGo, there&#8217;s not much to say here. Their results are accurate, and their search is private, so I&#8217;m happy.

## 02 &#8211; Analytics {#h-02-analytics}

[In the second post](https://kevq.uk/de-googling-my-life-02-analytics/) I explained how I was using Google Analytics for monitoring my web traffic. GA is all kinds of bad because of their [online tracking](https://kevq.uk/how-online-tracking-works/) capabilities, so I flipped to Piwik. Since then, I decided I wanted to reduce the amount of JavaScript my site runs where possible, so analytics was an obvious saving.

Ultimately I decided to go with [Awstats](http://www.awstats.org/), which provides anonymous analytics based off my web server logs. You can read more about this on [my privacy page](https://kevq.uk/privacy/).

<img loading="lazy" width="926" height="258" src="/assets/images/wp-images/2020/03/awstats-ip-addresses.jpg" alt="Awstats IP Addresses" class="wp-image-1350" srcset="/assets/images/wp-images/2020/03/awstats-ip-addresses.jpg 926w, /assets/images/wp-images/2020/03/awstats-ip-addresses-300x84.jpg 300w, /assets/images/wp-images/2020/03/awstats-ip-addresses-768x214.jpg 768w" sizes="(max-width: 926px) 100vw, 926px" />  

I&#8217;m currently testing [Koko Analytics](https://wordpress.org/plugins/koko-analytics/) too, it&#8217;s also privacy respecting and doesn&#8217;t need JavaScript. I&#8217;m not sure it adds more value than Awstats yet though, so I may not keep it. I do how like it&#8217;s embedded in my WordPress dashboard though.

## 03 &#8211; Google+ {#h-03-google}

Next stage of de-Googling my life was [replacing Google+](https://kevq.uk/de-googling-my-life-03-google/). At the time, G+ was still alive and kicking, but it has since been killed off by Google. Like so many other services of theirs.

Anyway, I decided to replace G+ with Mastodon. I co-founded a FOSS-centric instance called [Fosstodon](https://fosstodon.org), which has grown from strength to strength. We now have a really strong community of over 8,500 members.

<img loading="lazy" width="969" height="547" src="/assets/images/wp-images/2020/03/about-fosstodon.jpg" alt="About Fosstodon" class="wp-image-1355" srcset="/assets/images/wp-images/2020/03/about-fosstodon.jpg 969w, /assets/images/wp-images/2020/03/about-fosstodon-300x169.jpg 300w, /assets/images/wp-images/2020/03/about-fosstodon-768x434.jpg 768w" sizes="(max-width: 969px) 100vw, 969px" />  

I&#8217;m very happy with Mastodon &#8211; the community is large enough to be interesting and always has something going on, yet small enough to feel close-knit.

As far as I&#8217;m aware, Fosstodon is actually the largest FOSS/open source Mastodon instance on the Fediverse. If you you want to know more about Mastodon and how it works, [this post may help](https://kevq.uk/getting-started-with-mastodon/).

## 04 &#8211; Google Drive {#h-04-google-drive}

Step 4 was all about [getting rid of Google Drive](https://kevq.uk/de-googling-my-life-04-google-drive/). I was using it to sync all my files and photos between my devices. I originally went with Nextcloud for file syncing, but after having a few issues with their service, [I recently flipped back to a Synology](https://kevq.uk/moving-from-nextcloud-to-synology/).

I&#8217;m now using my Synology for file syncing, note taking, media streaming and backing up all my important data. Synology don&#8217;t make cheap devices, but they are brilliant. If you have the funds available, I&#8217;d highly recommend them. If not, there&#8217;s always Nextcloud.

## 05 &#8211; Gmail {#h-05-gmail}

Ok, the one that people really care about &#8211; [replacing Gmail](https://kevq.uk/de-googling-my-life-05-gmail/). To be fair, Gmail is a great service, but it&#8217;s a privacy black hole, so it had to go.

I originally went with a self-hosted solution on my cPanel server. This worked really well and I had no problems with it, but I ended up closing that server down and migrating all my web hosting to a different provider.

On the new provider, I have limited storage capacity, so I decided to host my email elsewhere. Originally I went with [Fastmail](https://fastmail.com), who offer an extremely good service, but they&#8217;re not cheap at $5/month per mailbox. With 6 mailboxes to buy, for both myself and family members, $30/month is more than I really wanted to spend on email, calendar and contact syncing.

I finally switched to [Zoho Mail](https://zoho.com/mail). They&#8217;re far cheaper at around $1/month per mailbox, they also provide a great service, and they respect your privacy too.

<blockquote class="wp-block-quote">
  <p>
    Zoho has never sold your information to someone else for advertising, or made money by showing you other people&#8217;s ads, and we never will. This has been our approach for almost 20 years, and we remain committed to it.
  </p>

  <cite><a href="https://www.zoho.com/privacy.html">Zoho privacy policy</a></cite>
</blockquote>

I&#8217;m extremely happy with the service Zoho provides. I&#8217;d highly recommend them if you&#8217;re looking for a Gmail replacement.

## 06 &#8211; What I Couldn&#8217;t Replace {#h-06-what-i-couldn-t-replace}

This was the final post about de-Googling my life. Here I talked about [what I couldn&#8217;t replace](https://kevq.uk/de-googling-my-life-06-what-i-cant-replace/), which included Android, YouTube, Google Maps, my Chromebook, Android Pay and Google+.

This post is already long enough, so I&#8217;ll summarise each in the list below:

  * **Android** &#8211; I ended up [ditching Android](https://kevq.uk/why-im-ditching-android/) in favour of an iPhone. I now have an iPhone 8 and am still very happy with that decision.
  * **YouTube** &#8211; The fact of the matter is, there is no replacement for YouTube. Unfortunately I&#8217;m still a regular YouTube user.
  * **Google Maps** &#8211; I use Apple Maps for navigation, but if I need to lookup something on a map, I still default to Google. Mainly because Street View is so damned awesome.
  * **My Chromebook** &#8211; I&#8217;ve replaced this with a Lenovo X1 Carbon running Linux and I&#8217;m very happy with it.
  * **Android Pay** &#8211; I now use Apple Pay on my iPhone.
  * **Google+** &#8211; This is dead now, as explained earlier. I now use Mastodon exclusively.

## Conclusion {#h-conclusion}

Two years on and I&#8217;m pretty much Google free at this point. There are some products that I just can&#8217;t replace, but you never know, in the future there may be products released that can rival these services.

De-Googling my life was pretty difficult at first, but now I have my new workflows established, I really don&#8217;t miss their services.

And as a final note, I&#8217;d like to thank Brandon for dropping me an email and reminding that I really needed to get this update done. Thanks, Brandon!
