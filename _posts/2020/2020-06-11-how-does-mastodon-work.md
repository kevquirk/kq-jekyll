---
title: How Does Mastodon Work?
date: 2020-06-11T11:54:00+01:00
layout: post
permalink: /how-does-mastodon-work/
description:
  - Mastodon is a de-centralised Twitter-like social network, but it can be confusing to get started. This post answers the question, how does Mastodon work?
categories:
  - Technology
---
{: .notice}
  &#8220;How Does Mastodon Work?&#8221; was originally written on 04th August 2018, but I have updated it on 11th June 2020.

**Before going through this post, I'd recommend reading my post on [getting started with Mastodon](/getting-started-with-mastodon/).**

I’ve spoken about [Mastodon](https://joinmastodon.org) numerous times on this blog. It is the social media platform I use more than any other, but for a new user it can be confusing because it doesn’t work like other social media sites.

A new member of my Mastodon instance, [Fosstodon](https://fosstodon.org), wrote their first post stating that they’re not really sure how it all works on Mastodon. Being the dutiful admin that I am, I pinged them back to let them know that I would find decent guide an post a link. To my surprise, I couldn’t find a decent guide anywhere, so I decided to write one.

I’m going to try and cover all of the basics of Mastodon in this post, as well as the details of how it all works. By the end of this post, you should have a pretty good idea as to how Mastodon works. So, settle in and get a coffee, as this is going to be a long one I think.

## Toot Toot {#h-toot-toot}

Let’s start with the basics; Mastodon works like Twitter, but with a few key differences:

  * A “Tweet” on Mastodon is called a “Toot” and you have a 500 character limit by default.
  * You can set the privacy of a Toot. The default is public, but they can also be unlisted, follower only, or direct.
  * You can also `@mention` other users, as well as add media, links and hashtags to your Toots.

![](/assets/images/mastodon-new-toot-privacy.png)

### Reply {#h-reply}

You can, of course, reply to any Toot that you can see – after all what’s the point in having a social network if you can’t have a conversation.

### Boost {#h-boost}

If you come across a Toot that you like, you can boost that Toot. This basically re-shares that Toot to your followers.

Unlike Twitter, you cannot add your own commentary to a boosted Toot. This is by design so that a person’s Toot is only boosted in a way that gets the message they intended across.

It’s basically a way of preventing people being trolled via Boosting. E.g. you can’t add “This Kev Quirk guy is a complete moron” to one of my Toots that you have boosted (although many would probably like to).

### Favourite {#h-favourite}

You can also favourite a Toot. Which basically means that you support or agree with a Toot. It’s the same as a Facebook like, or a Twitter heart.

All Toots have a set of icons below them that allow you reply, boost or favourite. The icons look like this:

![](/assets/images/mastodon-toot-actions.jpg)

## The Fediverse {#h-the-fediverse}

If you read about Mastodon, you will often hear about The Fediverse, or Federation in general. This is a unique concept to Mastodon when compared to more mainstream social networks. This means that many new users are likely to find the concept of federation confusing. Let’s clear things up, shall we?

### What is federation? {#h-what-is-federation}

When you sign in to Twitter, you have a single timeline that is made up of the Tweets from the people you follow. Mastodon is different, as it has three timelines – Home, Local and Federated.

Each of these timelines has a different function that I will explain later on, but for now let’s look at how the Mastodon network communicates. The different timelines should then make more sense.

Here’s a quick video that introduces the concept of Mastodon’s federation:

<iframe width="100%" height="350px" src="https://www.youtube-nocookie.com/embed/IPSbNdBmWKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To explain Mastodon federation a little better, I’m going to use email as an analogy - hopefully this will make things easier to digest.

The Mastodon network is made up of individual servers, called Instances. If we use our email analogy; think of Mastodon as email as a whole. So if Mastodon is “email”, then an Instance would be an email provider. For example, Gmail, Hotmail, or Zoho.

They’re all completely different servers that are run by completely different companies, but Gmail, Hotmail and Zoho can all send email to one another.

Mastodon is the same. My instance, Fosstodon, is run my myself and my friend Mike. Yet we can Toot with thousands of other Mastodon servers around the world that we do not run.

### Mentioning people {#h-mentioning-people}

If you want to Tweet someone on Twitter, you `@mention` them. It’s the same on Mastodon. If I want to Toot to my friend Mike, I can simply add his handle (`@mike`) to my Toot.

But what if I want to mention someone else on another Mastodon instance? Well, I would use `@user@instance.name` to mention them.

For example, I interact with [Basil](https://sarcasm.stream/@basil) quite a lot on Mastodon, but he’s on a different instance to me. So if I want to mention him in a Toot, I would add `@basil@sarcasm.stream` to my Toot. If Basil wanted to mention me, he would add `@kev@fosstodon.org` to his Toot.

![](/assets/images/mention-basil-toot.png)

Don’t worry about having to remember people’s username and instance names though. Mastodon has an auto-complete feature that helps to populate a person’s handle/instance once you start typing an `@mention`.

![](/assets/images/basil-mention-autocomplete.jpg)

## How do instances connect? {#h-how-do-instances-connect}

If someone decides to start a new instance, how does the rest of the Fediverse know that they’re there and to start communicating with them? Well, this is where the community and federation comes in.

There are thousands of Mastodon instances all over the world, and all instances are connected by their users.

Instance A may not be aware of instance B, but if a user on instance A follows a user on instance B, instance A then knows that instance B exists and they will start communicating with one another.

Furthermore, instance A may not have known that instance C existed, but B did. So a user in instance A could then follow a user on instance C, at which point instances A and C are also federated.

I know that's difficult to follow in text, so let's break it down with a few diagrams:

![](/assets/images/instance-a-b-federation.jpg)

![](/assets/images/instance-b-c-federation.jpg)

![](/assets/images/instance-a-b-c-federation.jpg)

This process goes on and on, which causes a snowball effect of exponential growth of the Fediverse.

## The timelines {#h-the-timelines}

Ok, now we know how the Fediverse works, lets go back to our three timelines and take a look at what they do:

  * **The Home Timeline** – This is a simple one. It’s basically the same as your Twitter timeline – it’s the Toots from all the people you follow from across the Fediverse.
  * **The Local Timeline** – This is all of the public Toots from your instance. So whether you follow someone or not, you will see all of the activity that’s going on within your instance. This is a great way of finding new people to follow locally.
  * **The Federated Timeline** – This is a timeline of all Toots from all instances that your server is federated with. Again, this is a great way of finding new people to follow as it literally contains Toots from thousands of people. But be warned – the Federated timeline can contain posts that some users may find offensive.

Talking of potentially offensive Toots, that brings us quite nicely onto the next section&#8230;

## Moderation tools {#h-moderation-tools}

If you find something you don’t want to see on Mastodon, there are a number of ways to deal with it. If the Toot is particularly egregious, I would recommend reporting the Toots to your instance's staff. They can then review the report and take appropriate action.

If you feel that a Toot is just something that you would rather not see, then there are personal moderation options available on Mastodon too.

You can see all moderation options using the three dots icon below any Toot. Within the menu, you have a number of moderation options:

  * **Mute** – This will stop you seeing any of the Toots from that particular account.
  * **Block** – This will prevent that account from being able to interact with you. It will also Mute their Toots.
  * **Report** – This will send a report to the staff of an Instance. They should then review the report and take appropriate action. This can be no action, a warning to the user, or banning them from the Instance.

![](/assets/images/mastodon-personal-moderation-options.jpg)

_Don't worry Yarmo, I'm not going to block you!_ 🙂

### Filters {#h-filters}

You can't really talk about how Mastodon moderation works without talking about filters.

Filters are great, because they allow you to filter out certain keywords globally. This can be swear words, or just topics you don't' want to hear about.

For example, when COVID-19 first started there was **lots** of chatter about it on the Fediverse. I totally understand why, but I didn't really want to read about it on Mastodon, so I decided to filter it out until things died down.

I also filter out the `#WeAreNameless` hashtag, mainly because I find it confusing. To add a filter, just go to `yourinstance.com/filters`

![](/assets/images/mastodon-filters.png)

## Why Mastodon? {#h-why-mastodon}

So you now know the basics of how Mastodon works, and how to use it. But why would you want to use it over something like Twitter or Facebook, and why do I use it? Here are **some** of the reasons why…

### It’s open source {#h-it-s-open-source}

It’s open source so what, right? Well, no actually. Open source means that anyone can [see the Mastodon source code](https://github.com/tootsuite/mastodon) to understand how it works under the hood. You can’t do this on many other social networks, so you have no idea what the site is doing in the background.

Of course, many of Mastodon’s users aren’t software developers so they won’t know what Mastodon’s source code does (myself included), but there are hundreds, or even thousands of developers out there that have seen the code for Mastodon. If it was doing anything nefarious, trust me, we would know.

Being open source gives us reassurances that our data is not being harvested, or that we’re not being spied on. Plus, if the main developer of Mastodon, [Eugen](https://mastodon.social/@gargron), decides to hang up his keyboard, someone else can take his place and fork the project’s source code.

### Chronological timeline {#h-chronological-timeline}

This may seem like a small thing, but for me it’s one of the most important features of Mastodon. You see, Facebook and Twitter have “clever” algorithms that are designed to change the order of the content you see on every refresh. This is designed to give the perception of new content, hopefully keeping you engaged longer.

That isn’t the case with Mastodon; all three of the timelines are always chronologically displayed. So you can easily see what people have Tooted from when you were last online. This means that Mastodon isn’t specifically designed to take over your life (although it does, because it’s awesome!) It easily allows you to see what has been going on since you were last online, then go about the rest of your day.

### No adverts or tracking {#h-no-adverts-or-tracking}

That’s right, NO ADVERTS! No sponsored posts, no “we think you might like this” and no tracking. Mastodon is designed to bring people together, not make money. It’s that simple.

Having said that, most instances do have Patreon pages, as running a Mastodon server can get expensive. So if you use Mastodon and enjoy it, I would urge you to contribute whatever you can to your instance of choice. In my experience, the money is often used to improve the project.

On Fosstodon, we use any [donations](https://hub.fosstodon.org/support-us) over and above our ongoing fees to make donations to various open source projects. Which projects we donate to is decided by those who donate.

### No single owner {#h-no-single-owner}

Because Mastodon uses a collection of instances, you’re not at the beck and call of one site owner. If you don’t like the direction an Instance is taking, you can pack your virtual bags and go. Mastodon even has a [migration tool](https://blog.joinmastodon.org/2019/06/how-to-migrate-from-one-server-to-another/) that allows you to migrate your account from one instance to another.

### Interest specific, but not really {#h-interest-specific-but-not-really}

The beauty of having different instances is that many of them are aligned to one interest or niche. For example my instance, Fosstodon, is specific to Free and Open Source Software (FOSS), hence the name. However, we encourage the users of Fosstodon to talk about all sorts of interesting things, not just open source software.

So although all the members of our instance have a common interest (FOSS), there are lots of topics that get discussed regularly. There are also many generalist instances that you can join if you wish. These are more like Twitter in that they don’t have a specific interest underpinning them.

Remember, you can also follow people who have different interests on other instances, so your home timeline can be extremely diverse – I know mine is!

## Finding an instance {#h-finding-an-instance}

There are thousands of Mastodon Instances across the Fediverse, so how do you find the right one? Well, finding the right one is very difficult. [The Mastodon homepage](https://joinmastodon.org) has a signup section which displays a number of key instances within specific niches.

Here are some recommendations based off of my interactions with the many interesting people on the Fediverse:

  * [Fosstodon](https://fosstodon.org) – Selfish plug. Linux/FOSS focused Instance.
  * [Linux Rocks](https://linuxrocks.online) – Another great Linux/FOSS focused Instance.
  * [Mastodon Online](https://mastodon.online) – A new general instance that was created by the Mastodon founder, Eugen.
  * [Mastodon Technology](https://mastodon.technology) – A generalist technology instance.

If none of the instances above work for you, you can take a look at [Instances.Social](https://instances.social) which is basically a search engine for Mastodon instances. However, I’ve always found the site awkward to use as it doesn’t have many filtering options.

## Mobile apps {#h-mobile-apps}

There are a number of mobile apps available for Mastodon. I have tried many of them for both Android and iOS. My recommendations would be [Tusky](https://play.google.com/store/apps/details?id=com.keylesspalace.tusky&hl=nl) for Android and [Toot!](https://apps.apple.com/us/app/toot/id1229021451) for iOS.

However, if you want to check out all the other apps that are available, including desktop apps, [take a look here](https://joinmastodon.org/apps).

## Final thoughts {#h-final-thoughts}

Hopefully by now you have a decent grasp on how Mastodon works. Mastodon is awesome; it’s full of friendly, interesting people. There is no tracking and no adverts which is bonus.

Like most social sites, there are trolls out there - it wouldn't be the Internet without them! But the moderation tools within Mastodon make it a great place to be generally.

Hopefully this guide will help get you started with Mastodon, but if you have any other questions that this guide doesn’t cover, feel free to leave a comment below, [or get in touch](/contact/), and I’ll do my best to help.

Finally, if you’re already on Mastodon and want to follow me, you can do so [here](https://fosstodon.org/@kev).
