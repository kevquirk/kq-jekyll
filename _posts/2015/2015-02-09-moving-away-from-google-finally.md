---
title: 'Moving Away from Google &#8211; FINALLY!'
date: '2015-02-09T11:50:00+00:00'
layout: post
permalink: /moving-away-from-google-finally/
categories:
    - De-Googling
---

**For a long time now, I’ve been talking about moving away from Google for a lot of the cloud services that I have with them. I started off by explaining why I wanted to [bring it all in house](/bringing-it-all-in-house/). But it soon, it became apparent that [moving away from Google is harder that you think](/moving-away-from-gmail-is-harder-than-you-think/). However, after nearly 18 months of hard work and research, I think I’ve finally cracked it…**

## Why I want to move

There are a number of reasons why I’ve made the decision to self-host as many of these cloud services as possible. Some of which are:

- **Control** – I want to know that I have complete 100% control over my data.
- **Privacy** – I really don’t like the thought of a third party having the ability to access my personal data like photo’s, email, documents, and more. Whether or not a company decides to use these abilities is besides the point. The very fact that they have this access worries me.
- **Longevity** – Google have slowly but surely been killing off the free version of Google Apps. They’ve silently been removing features and services from the system. What happens if they decide to switch the service off completely? Where does that leave me? This ties closely in with control. I want to be in charge of my data and ultimately, I can’t do that if someone else is pulling the strings.

## What services I use

There are a number of cloud services that I used with Google, all of which had to be replaced in order for me to be able to efficiently migrate away. Sure, I could have moved away with some of the services/features not in place, but why should I change the way I work? For me, it was all or nothing. So here’s a list of *everything* that I needed my new services to handle:

1. **Gmail (email)**
    - Multiple send from accounts.
    - Multiple incoming accounts.
    - Folder level filtering.
    - Large amount of storage.
    - Pleasant web interface.
    - Mobile sync.
2. **Google Calendar**
    - Shared calendars.
    - Setting share permissions.
    - Mobile Sync.
3. **Google Contacts**
    - Auto-save contacts when I send an email.
    - Mobile Sync.
4. **Google Drive**
    - File syncing across devices (PC, laptop and mobile).
    - File and folder sharing.
    - Versioning (restore previous versions of files).
    - Un-delete (restore deleted files).
    - Large amount of storage.
    - Public download links to specific files.

So that’s my list. The new service(s) I move over to, need to be able to do all of the above as a bear minimum. After a lot of time, research, and trying an absolute shit-tonne of services, I’ve finaaly found the right set up. So, let’s take a look…

## Groupware (email, contacts &amp; calendar)

Finding a decent groupware system has been the single hardest part of moving away from Google. I’ve tried so many services that I’ve lost count. I tried good old Roundcube, but found their plugin system to be nothing short of diabolical.

Then there was Horde, which seems to work well, but is just plain ugly – spend a lot of time in webmail, so it needs to look nice (shallow, I know). I gave Atmail a go, but they were very expensive, and missing a lot of features that I needed, such as being able to send from multiple addresses within webmail. Then I tried [Kolab](https://web.archive.org/web/20150221003208/http://kolab.org/). This is an open source groupware system that’s based off of Roundcube. It worked fairly well, but I just couldn’t gel with it.

I carried on looking, and finally came across [Zimbra](https://web.archive.org/web/20150221003208/http://www.zimbra.com/downloads/zimbra-collaboration-open-source). This is something that I had come across before, it’s extremely powerful but requires a pretty powerful server to manage all the services. So I always discounted Zimbra as an option. However, since discovering [OpenVZ](https://web.archive.org/web/20150221003208/http://openvz.io/), I found that I could have a server powerful enough to run Zimbra, at a reasonable price. So, I spun up a 4GB box and started testing…

![Zimbra](/assets/images/zimbra.webp)

I thoroughly tested Zimbra for a couple of weeks, I could share calendars with my Mrs, as well as send/receive mail from multiple accounts, all within the same webmail interface. I could literally do everything I could do within Gmail, Google Calendar, and Google Contacts; except for one thing – mobile sync.

This was almost a deal breaker for me. You see, Zimbra supports ActiveSync, but you need a fully licensed version of the software, not the open source version that I was using. So, off I went to more research, and soon I came across [Zextras](https://web.archive.org/web/20150221003208/http://zextras.com/) which solved the problem for me. I can now set up ActiveSync accounts on my mobile devices, no problem at all. Setting up email clients, like outlook is also a breeze.

![Shared Zimbra calendar](/assets/images/zimbra-calendar.webp)
*Our shared calendars in Zimbra*

All in all, I am extremely happy with what Zimbra. It allows me to do everything I need to do, and more. I’ve now fully migrated both myself, and my Mrs to Zimbra and it’s all working flawlessly. As a backup, I also forward all of our emails to another server I have, which we can access via Roundcube. So if the worst happens, we always have a back up of our mail. Zimbra looks great, and works great. It’s made by VMware, so I know it’s not going anywhere, Plus, even if it does, I self-host the server, so it’s not a problem. But what about my files?

## Files &amp; folders

I’ve used Google Drive for quite some time now, after moving back to it from ownCloud, after getting a Chromebook. But I don’t really edit many documents, so Google Docs isn’t a great loss for me. Heading back to ownCloud would be the obvious choice here, it’s a great piece of kit that offers a lot of what Google Drive does, plus a whole lot more. However, I decided to go with something else entirely…**Synology.**

Yes, I went with a [Synology](https://web.archive.org/web/20150221003208/http://synology.com/) device at home. I have a 4 disk Synology box with 4x1TB drives in a RAID5, so my data is pretty safe on there. Synology have a tool called *CloudStation*, which allows users to sync their data between machines. Not only this, but it allows users to generate public download links, share files, and recover deleted/changed files. So it’s perfect for me. Off the back of this, I also back up all my data to an encrypted Amazon Glacier instance, so I know my data is completely safe.

![Cloudstation](/assets/images/cloudstation.webp)

Zimbra does actually have a system called “[Briefcase](https://web.archive.org/web/20150221003208/http://wiki.zimbra.com/wiki/Briefcase)” that allows users to store documents. However, the Synology was sitting at home, being used as a media centre and FTP server. So I thought I might as well utilise it. Most people won’t want to spend the £700 I paid out for my Synology, and to those, I would suggest using ownCloud, or the Briefcase feature in Zimbra. But like I said, I already had the Synology, so I might as well use it.

## Conclusion

I now have 99% of my services self-hosted, and backed up to a level where I am comfortable, and it’s a great feeling. There are a few more bits I still need to move over, but between my Synology box, and Zimbra, I don’t foresee any issues with that.

Both Zimbra and Synolgoy provide great products that are easy to get set up, and once set up, are even easier to use. The fact that my Mrs has been able to pick up and start using the new Zimbra/Synology system, and not actually asked me a single question about how to do something speaks volumes to me – trust me, if she was having problems, I would know!

So if you’re thinking of moving away from Google, I’d urge you to consider some of the technologies I’ve mentioned in this post. I do intend to write some technical articles on how to set all this stuff up, so keep your eyes peeled for those.

**In the meantime though, why not tell me about you plans to self-host below. Or maybe you already are self-hosting? If so, I’d love to hear about what you’re using.**