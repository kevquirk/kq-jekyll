---
title: I Broke My MacBook User Profile By Deleting A Single Folder
description: My M1 MacBook Air was completely trashed when I tried to use it this morning. All because I deleted a single folder from my home directory.
image: assets/images/default-feature.webp
date: 2022-01-21T16:42:00.000Z
category: [Story Time, Technology]
layout: post
rss_only: false
---
{: .tldr}
The OS on my M1 MacBook Air was completely trashed when I tried to use it this morning. All because I deleted a single folder from my home directory.

{: .center style="background:var(--accent-bg);padding:2rem 1rem;"}
🎶<br>
*Now, this is a story all about how<br>
My life got flipped-turned upside down<br>
And I'd like to take a minute<br>
Just sit right there<br>
I'll tell you how I messed up my little MacBook Air*<br>
🎶

Let me tell you a little story, dear reader. It's the story of an idiot (me) who deleted a *single* folder from the home directory on his [M1 MacBook Air](/macbook-m1-4-month-update) that completely trashed his entire profile.

Now you're probably thinking, *well, Kev, it serves you right for deleting system files from your home folder...* and I would be inclined to agree. Except...

{: .medium}
It was the **Documents** folder that I deleted!

Yes, you read that right, I deleted `/users/<my-profile>/Documents` and it *completely* trashed my profile to the point were Finder (Mac's equivalent of Windows Explorer) failed to load.

## The background
It's 08:00am on Friday morning, my wife has taken the kids off to school and gone on to work herself. The house is quiet, so I make a coffee and head upstairs to the study to start my day.

I go through my usual routine - boot my M1 MacBook Air, plug it into my dock so it connects to my screens and peripherals, then head into my first meeting of the day.

But something is wrong...

The panel at the top of the MacOS screen is missing, and the MacBook feels *really* sluggish; which isn't like an M1 machine at all - these things are rocket ships.

I can still see the MacOS dock, so I try to open a couple of apps to test the performance and see what's going on. I click on the Finder icon, but nothing happens. I try again. And again. **And again**.

Finally I'm greeted with the formidable spinning wheel of death.

![Spinning wheel of death meme](/assets/images/spinning-wheel-of-death-mac.webp)

Needless to say, something is royally fucked on my machine and I have no idea what. [I'm relatively new to MacOS](/a-windows-users-first-impressions-of-macos/) so I've never had to troubleshoot an issue like this before.

I have shit to do in work, so I steal my Wife's laptop (which is my trusty old ThinkPad X1 Carbon) and limp along with that for the time being.

At the same time I'm trying to troubleshoot the issue on my Mac. I head to [DuckDuckGo](https://duckduckgo.com) to do some searching. After reading multiple forum threads, I try the following:

* Safe boot - **fail**
* System repair - **lolz! Don't be daft**
* MacOS rebuild - **trollolololol**

## Enter Apple support
Nothing worked. My system was still broken. So I decided to admit defeat and I contact Apple support. A few minutes later I was on the phone with one of their support agents.

{: .notice}
Side note here - Apple support were excellent and I was surprised how quickly I was able to get on a call with an agent. I suppose that's where the premium price tag goes.

The guy from Apple is like *yeah, this is really broken. I've never seen anything like this before. I think we're going to have to nuke and pave the entire thing.*

I get where he was coming from - because we couldn't open Finder, there's very little we could do to troubleshoot the issue. Needless to say I was reluctant to nuke and pave my machine. So I pushed back and we decided to create a new `test` user to see if it was my profile, rather than the underlying OS.

I create the account and login - **everything looks great** it's all working well and I can access Finder.

Woo hoo! We're making progress.

So we turn our attention to my user profile. We change the folder permissions to give `test` access to my files and we peruse my home folder. There was a weird folder in there that looked like this:

![Weird documents folder in Finder](/assets/images/documents-folder-screenshot-finder.webp)

## The penny dropped 
I immediately noticed the weird looking folder and remembered what I had done the day before. You see, I store all my files on my Synology and I use Synology Drive to sync them; think of it like self-hosted Dropbox.

I have a *Documents* folder in my Synology Drive folder, so I tried to delete the standard *Documents* folder and make a symbolic link to my Synology *Documents* folder.

This is something I've done hundreds of time in Linux and it's always been fine. It didn't work though on MacOS, so I gave up in the end and moved on with my day.

I mentioned this to the Apple support guy and he was like *nah, there's no way something as simple as that could cause an issue this bad*.

Which I totally get - this shouldn't cause any issues with the OS. It's just a folder within my `home` directory. It's not used for any system files.

I asked Mr Apple Support to humour me. First I tried to rename the folder to `Documents` but that failed saying there was already a file called `Documents` in the directory.

**There wasn't.**

I then checked hidden files and found `.documents` (note the preceding dot) squirrelled away in my home folder. I assume this was a result of the SimLink command having a brain fart when I tried it the day before.

I deleted that file, successfully renamed the weird folder to `Documents`, held my breath and logged back into my normal user account.

{: .medium}
It bloody worked!

Needless to say both myself and Mr Apple Support were really surprised. I didn't really care though - my machine was back up and running and I could now stop limping along with my Wife's ThinkPad.

Success!

## Final thoughts
I thought I'd share this story as it's a **really** weird one. I haven't tried it with any other folders in my `home` directory and I don't intend to either.

Both myself and my new mate in the Apple support team had no idea what caused it. He was as baffled as I was, but *thanked me* for working out what the issue was!

Hopefully Mr Apple Support will add this to their internal wiki so other people don't get caught fowl of this. Honestly, I'm surprised nothing like this has come up before - deleting a folder and creating a SymLink is pretty standard for a lot of techies.

Anyway, the moral of the story is this, dear reader - **don't piss about with the file system on a machine that you use every day for work.** Fairly obvious in hindsight. 🙃
