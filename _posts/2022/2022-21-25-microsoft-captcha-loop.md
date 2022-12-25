---
title: Microsoft's Bot CAPTCHA is Annoying AF
description: While trying to setup a new Microsoft account for my son, I got stuck in a CAPTCHA loop. It's annoying AF. 
date: 2022-12-25T11:17:00.000Z
typora-root-url: ../../
category:
  - Opinion
  - Web
---

{: .tldr}
{{ page.description }}

It's Christmas morning (Merry Christmas BTW) and like most parents, my wife and I have been busy setting up (and playing with) various presents for our sons.

One of my sons got a tablet for Christmas, and (like most kids) he wanted to play [Minecraft](https://minecraft.net) on it. Being the *fantastic* dad that I am, I went to go set him up with a new Microsoft account so he could log into, and enjoy, Minecraft.

I fired up my trusty [MacBook M1 Air](/macbook-m1-4-month-update/) and went to the Microsoft signup page. Using a [segregated sub-domain email](/segregating-email-with-sub-domains/), I went through Microsoft's sign-up wizard and eventually got a CAPTCHA prompt.

## It all goes downhill

Microsoft uses a CAPTCHA tool that I've never seen before, which I assume is proprietary. This prompt asks you to look a 6 images, each with icon overlays, and select the one that has a matching pair of icons.

![Microsoft CAPTCH example](/assets/images/ms-captcha.webp)

It asks you to do this between **5 and 8 times!** So I oblige, and go through the process of selecting the matching pairs, I even get a tick telling me the CAPTCHA was successfully passed.

Then the stupid bloody system repeats the process of going through the CAPTCH. Over, and over. And over. It does this in a seemingly infinite loop.

How fucking annoying.

I use Safari with the [1Blocker](https://1blocker.com) content blocker, assuming it was that, I disabled 1Blocker and tried again. **No dice**.

I switched to Firefox and tried again. **No dice**.

Then I tried [DuckDuckGo browser](/is-duckduckgo-duckduckdone/). **No dice**.

I wonder if [Orion browser](https://browser.kagi.com) will work? **Nope**.

At this point I'm pretty pissed off. I've tried numerous browsers, disabled my content blockers, and clicked untold amounts of icon pairs. All while my son is waiting to play Minecraft.

## The solution beckons

I took a step back and had a think about the problem here. *It's Microsoft*  I'm dealing with here, they don't like competition. So I downloaded [Microsoft Edge](https://www.microsoft.com/edge) thinking if anything is going to work, it's gonna be their browser...

**It did.**

Lo and behold, Microsoft's shitty CAPTCHA worked first time under Edge. So it seems that although Microsoft are getting better when it comes to their anti-competitive, closed nature, there's still a ways to go.

So all in all I wasted an hour or so on Christmas morning, pissing about with Microsoft's CAPTCHA, instead of being with my family.

Fuck you very much, Microsoft.

`</rant>`