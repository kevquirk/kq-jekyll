---
id: 4663
title: Upgrading My Desktop PC
date: 2021-02-15T15:49:26+00:00

layout: post
permalink: /upgrading-my-desktop-pc/
description:
  - I recently wrote about how I was thinking about upgrading my desktop PC. Well, I've finally got around to doing that, and what a saga it was!
categories:
  - Technology
---
<p class="medium">
  A few month ago I wrote about how <a href="https://kevq.uk/thinking-about-new-hardware/">I was thinking about upgrading my desktop</a> to something a little more modern. Well, I&#8217;ve finally got around to doing that, and what a saga it was!
</p>

Let's start by talking about why I wanted to upgrade my desktop PC. The specs of my old box were:

  * AMD FX-6300 (3.5GHz)
  * 16GB DDR3 1333MHz
  * Radeon RX560 (2GB RAM)
  * 512GB SSD Windows 10
  * 512GB SSD Ubuntu 20.04

Not too bad, right? It was pretty good day to day, but it was also 8 years old and I work on my desktop most days. For general stuff it was _okay_, but when it came to playing the few games I enjoy, like <a href="https://minecraft.net" target="_blank" rel="noreferrer noopener">Minecraft</a>, it was really slow.

For example, here's a screenshot from one of my Minecraft maps. If you look at the highlighted section of the screen, I'm getting just 10 frames per second (FPS).

![](/assets/images/minecraft-10fps.jpg) 

The general consensus among gaming types is that 30 FPS is what you should be achieving in order for the frame rate to not look choppy. So at 10 FPS, I'm pretty much dealing with video quality akin to a flip-book!

It was time to upgrade my desktop.

## Upgrading my desktop {#h-upgrading-my-desktop}

Like I said, I don't play a lot of games, but the ones that I do play are not AAA titles or anything. Therefore I didn't need to spend thousands on a new machine; but I did want something that would last me at least as long as my last machine.

I decided I wanted to keep what hardware I could from my current machine, so didn't bother with a case as my trusty mATX Cooler Master case has served me well. My PSU stayed too, as the current 500w affair had enough juice to run my new rig.

I did decide, however, to upgrade the single Cooler Master 120mm case fan to a Noctua one. My case also didn't have any USB 3 ports on the front, so I bought a USB 3 front panel too. I know, I'm wild!

Here's the specs I went with for the new system:

  * MSI B450 Pro motherboard
  * Ryzen 5 3600 6 core @ 4.2 GHz
  * 32GB Corsair Vengeance 2666 MHz DDR4 RAM
  * Palit GeForce GTX 1650 4GB DDR5
  * WD Blue 500GB NVMe

![](/assets/images/new-pc-kit.jpg)

## Let the shit show begin {#h-let-the-shit-show-begin}

So the day came for me to start stripping all my old peripherals out of my case, and chucking the new stuff in. This, dear read, is where everything went to rat shit.

You see, I'm not a hardware guy. I like cyber security and software; hardware really isn't my thing. But I have built and upgraded a number of desktops over the years, so I was confident it would be fine.

Famous last words...

Turns out that new graphics cards need a specific 6 pin connection from the PSU. And, of course, my 8 year old PSU didn't have one. Add to this that we're in the middle of a COVID lockdown here in the UK, so I couldn't nip to the local computer shop to pick one up. Brilliant.

I admitted defeat and jumped on Amazon to get a new PSU delivered the following day. So, back in went all my old hardware and I was back to square one.

## The next day&#8230; {#h-the-next-day}

With a new 600w EVGA PSU in my hand, I was ready to give this thing another go. Oh, I had to buy a set of computer screws too, as I couldn't find any (despite having boxes of computer parts in the loft) and needed to add 2 additional motherboard mounts.

Fail #2. Good job, Kev! 🤦‍♂️

Anyway, I <s>think I</s> now had what I needed to build this bloody computer. So I got to work stripping out all the hardware again. For those of you that get a kick from pictures of hardware, here's a few:

![](/assets/images/01-pc-upgrade-old-hardware.jpg)
*All my old hardware removed*

![](/assets/images/02-pc-upgrade-new-fan.jpg)
*New Noctua fan installed*

![](/assets/images/03-pc-upgrade-psu-mb.jpg)
*Motherboard & PSU installed*

![](/assets/images/04-pc-upgrade-mb-overview.jpg)
*RAM & NVMe installed*

![](/assets/images/05-pc-upgrade-cpu.jpg)
*CPU is in*

![](/assets/images/06-pc-upgrade-complete.jpg)
*Add the GPU and we're done*

## Time to power up {#h-time-to-power-up}

Right dear reader, it's time to hit that fateful power button and hope to goodness that this whole thing doesn't explode in my face. I'm gonna be honest, I wasn't confident. 🤯

I hit the power button and a <a href="https://en.wikipedia.org/wiki/Power-on_self-test" target="_blank" rel="noreferrer noopener">POST</a> completes. **HELL YEAH!** I breath a sigh of relief and I think all is well in the world, but I was wrong. The desktop upgrade gods decided to piss on my parade.

10 seconds after POST, my fancy new Noctua fan started to think it was a helicopter, as I'm pretty sure it was trying to take off. 🚁

The eagle-eyed among you may have noticed in the pictures above that the Noctua fan is 5v:

![](/assets/images/noctua-5v.jpg)

Desktop computer power supplies are 12v. So a 5v fan with a 12v input is a recipe for disaster. No wonder my desktop was trying to fly away! Add to this the fact that I had bought a 3 pin fan as opposed to a 4 pin (which allows for better speed control) the whole thing was a big mess.

So I took the Noctua fan out and replaced it with my original Cooler Master one and all was well again. While writing this post, Amazon just delivered 2 Noctua fans (a 120mm for the front and a 90mm for the back). Both of which are 12v and 4 pin.

Fail #3, Kev. You absolute legend. 🤓

## New desktop performance {#h-new-desktop-performance}

I have Ubuntu 20.04 installed on my NVMe drive, and I put my old Windows 10 SSD back in. Obviously Windows complained about activation because of the new hardware, so I had to buy a new license too. FFS, this is getting expensive!

I haven't had a chance to finish building my Ubuntu build yet, so I'm currently on Windows. Compared to my previous machine everything feels **way** snappier. Boot takes just a few seconds, and I have a useable desktop in just a few more.

Also, most importantly, here's my frame rate on the new rig running Minecraft:

![](/assets/images/minecraft-new-rig.jpg)

**54 FPS - happy with that!** This means that I can now die 5 times quicker. The FPS on the new desktop flutters anywhere between 30-70 FPS depending on what's happening on-screen. I'm really happy with that.

## Conclusion {#h-conclusion}

Upgrading my desktop has been nothing short of a nightmare, but I'm really happy with the result. I've now have much more modern hardware that should last another 8 years.

We got there in the end, folks.

Yes there will be upgrades along the way, but for now I think I'm good. With the additional fans, PSU and Windows 10 license, I estimate that this desktop upgrade has cost me somewhere in the region of £750 ($1,040).

Considering the specs I have for that money, and the cost of graphics cards at the moment, I'm a happy camper.

**Anyone want to buy a 5v 120mm Noctua fan? Hardly used with minimal electrical damage&#8230;promise.**
