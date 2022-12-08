---
id: 2173
title: My Thoughts On Pop OS 20.04 After One Month
date: 2020-06-02T21:20:28+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2173
permalink: /my-thoughts-on-pop-os-20-04-after-one-month/
description:
  - A little over a month ago, I installed Pop OS 20.04 on both my laptop and my desktop, so I thought I'd write a post on how I've found it so far.
categories:
  - Opinion
  - Technology
---
**A little over a month ago, I installed [Pop OS 20.04](https://pop.system76.com/) on both my laptop and my desktop, so I thought I&#8217;d write a post on how I&#8217;ve found it so far.**

I&#8217;ve been [using Linux](https://kevq.uk/why-i-use-linux/) for around 10 years now; most of that has been [Ubuntu](https://ubuntu.com) based distributions, but I also spent a couple of years on [Fedora](https://getfedora.org/) too. In recent years I&#8217;ve flipped from being a distro hopper to preferring stable systems that I know intimately well.

My desktop, for example, has gone from running Pop OS 18.04, right the way through to the current 20.04 release. Because Pop follows the Ubuntu 6 month release cycle, that&#8217;s 4 major OS upgrades.

Throughout that time, I haven&#8217;t had a single issue with Pop OS, which I think is a testament to the stability of modern Linux distributions.

Anyway, on with my thoughts&#8230;

## Tiling Windows {#h-tiling-windows}

The new hotness with Pop OS 20.04 is the embedded tiling window manager. At first, I had a lot of fun using the TWM, but to be honest, after a week or so the novelty wore off and I reverted to `alt+tab` through my open windows.

<img loading="lazy" width="1600" height="900" src="/assets/images/wp-images/2020/06/pop-os-tiling-windows.png" alt="" class="wp-image-2174" srcset="/assets/images/wp-images/2020/06/pop-os-tiling-windows.png 1600w, /assets/images/wp-images/2020/06/pop-os-tiling-windows-300x169.png 300w, /assets/images/wp-images/2020/06/pop-os-tiling-windows-1024x576.png 1024w, /assets/images/wp-images/2020/06/pop-os-tiling-windows-768x432.png 768w, /assets/images/wp-images/2020/06/pop-os-tiling-windows-1536x864.png 1536w, /assets/images/wp-images/2020/06/pop-os-tiling-windows-610x343.png 610w" sizes="(max-width: 1600px) 100vw, 1600px" /> *Pop Tiling Windows*

If you&#8217;re into TWMs then Pop&#8217;s implementation is incredibly easy to use &#8211; just toggle the switch in the system tray and the OS does the rest.

What I have found though, is that some windows go a bit wonky when automatically resizing. They either overlap one another, or leave gaps as shown between my terminal and file browser in the image above.

Coinsidering this is only an intial release of Pop&#8217;s tiling window manager, I&#8217;d say that&#8217;s a pretty minor issue that I&#8217;m sure will be fixed in future updates.

## Pop Shop {#h-pop-shop}

Pop doesn&#8217;t use the Ubuntu repositories. Instead they use their own which, from what I can see at least, appear to be a little more bleeding edge than the Ubuntu repos.

There&#8217;s no snap support out of the box with Pop, but it&#8217;s trivial to add. What they have instead is Flatpak support. Personally, I&#8217;ve never really bothered with Flatpaks because they&#8217;re just so huge.

For example, the Telegram desktop app as a Flatpak is 783MB, whereas the DEB is just 21MB. That&#8217;s a massive difference!

<img loading="lazy" width="1024" height="694" src="/assets/images/wp-images/2020/06/pop-shop-1024x694.png" alt="" class="wp-image-2175" srcset="/assets/images/wp-images/2020/06/pop-shop-1024x694.png 1024w, /assets/images/wp-images/2020/06/pop-shop-300x203.png 300w, /assets/images/wp-images/2020/06/pop-shop-768x521.png 768w, /assets/images/wp-images/2020/06/pop-shop-610x414.png 610w, /assets/images/wp-images/2020/06/pop-shop.png 1062w" sizes="(max-width: 1024px) 100vw, 1024px" />  

I understand that this is because Flatpaks basically come with an entire Linux filesystem embedded, but I still feel like it&#8217;s overkill for my needs.

As I understand it, the Pop OS team have teamed up with the guys over at [Elementary OS](https://elementary.io/) and are both using the same front end for their package management.

I prefer Pop Shop to Ubuntu&#8217;s Software Centre, but I&#8217;m not sure why. It just feels more slick and better put together. Overall, I just prefer the user experience on the Pop Shop.

## Look & Feel {#h-look-feel}

I had Ubuntu 20.04 of my laptop for a little while, just to try it out really. It was nice, performant and it looked good, especially with the new Yaru theme. But to be honest, compared to Pop OS, I think Ubuntu looks pretty dated.

Many Linux users don&#8217;t really care about the aesthetics of their desktop; preferring usability over looks. I get that, but a consistent and high quality UI/UX is very important to me. I spend a lot of time at my computers, so I want them to look as good as they function.

I have to say, Pop delivers on that front. Don&#8217;t get me wrong, I&#8217;m not saying Ubuntu is bad. Far from it actually &#8211; it&#8217;s a fantastic OS. All I&#8217;m saying is that I prefer Pop experience.

## Performance {#h-performance}

I haven&#8217;t had any significant issues with Pop on either my laptop or my desktop. I do get the occasional locked application, but Gnome seems to handle them a lot better than it used to. No more bombing out the entire session and starting again, which is nice.

I&#8217;m writing this post on my laptop, which is a 2nd generation Thinkpad X1 Carbon. I have a terminal, system monitor, the files app and Firefox with 5 tabs open.

I also have Synology Drive, PIA VPN and Keybase running in the system tray.

I&#8217;m currently using around 50% of my RAM (4GB) and 15% of my CPU. So there&#8217;s plenty of power in reserve if I need to do anything more taxing on my laptop.

<img loading="lazy" width="694" height="541" src="/assets/images/wp-images/2020/06/pop-os-performance.png" alt="" class="wp-image-2177" srcset="/assets/images/wp-images/2020/06/pop-os-performance.png 694w, /assets/images/wp-images/2020/06/pop-os-performance-300x234.png 300w, /assets/images/wp-images/2020/06/pop-os-performance-610x476.png 610w" sizes="(max-width: 694px) 100vw, 694px" />  

Honestly though, I don&#8217;t do much more than writing code, writing posts and playing the occasional games on here, like 0 A.D. and Minecraft &#8211; both of which Pop handles perfectly well.

## Closing Thoughts {#h-closing-thoughts}

I&#8217;ve been using Pop OS for a couple years now, and I&#8217;m still very happy with it. System 76 continue to add features and improvements to Pop OS that are really making it stand out from the crowd.

Personally, I can&#8217;t see myself removing Pop from my devices any time soon &#8211; I&#8217;m super happy with this distro.

If you&#8217;re a user of Pop OS too, you can sign up to support them by donating $12/year. I&#8217;ve signed up. They have a link on [their website](https://pop.system76.com/).

Finally, yes, I know it&#8217;s actually written _Pop!_OS_, but all those exclamations and underscores would have been annoying to type out through this post. 🙂
