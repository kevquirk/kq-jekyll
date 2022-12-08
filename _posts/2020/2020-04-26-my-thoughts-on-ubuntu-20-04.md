---
id: 1735
title: My Thoughts On Ubuntu 20.04
date: 2020-04-26T11:50:24+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=1735
permalink: /my-thoughts-on-ubuntu-20-04/
description: I've been running Ubuntu 20.04 on my Thinkpad for a day or so. It's now setup to my workflow, so here are my thoughts on Ubuntu 20.04.
categories:
  - Opinion
  - Technology
---
#### I&#8217;ve been running Ubuntu 20.04 on my Thinkpad for a day or so. It&#8217;s now setup to my workflow, so read on to hear some of my thoughts. {#h-i-ve-been-running-ubuntu-20-04-on-my-thinkpad-for-a-day-or-so-it-s-now-setup-to-my-workflow-so-read-on-to-hear-some-of-my-thoughts}

The guys over at Canonical released their latest Long Term Support (LTS) release, [Ubuntu 20.04](https://ubuntu.com/download/desktop), a few days ago. I immediately went ahead and downloaded it so I can put it through its paces.

I&#8217;ve been running [Pop!_OS](https://system76.com/pop) for the last 18 months or so, and with both distros using Gnome as their base, I thought it would be good to give vanilla Ubuntu a try. I haven&#8217;t actually used vanilla Ubuntu for a few years now, ever since they moved away from Unity actually. So this should be interesting, I think.

## Ubuntu 20.04 Thoughts {#h-ubuntu-20-04-thoughts}

Like most people, I have a very specific workflow that I like to stick to. I use my computers so much that moving my mouse to certain location on the screen, or inputting a keyboard command with [Ulauncher](https://kevq.uk/improving-my-ubuntu-workflow/) is pretty much muscle memory at this point.

So any deviation from my workflow is usually very jarring for me. For me, it&#8217;s panel at the top, a dock at the bottom with commonly used apps, and Ulauncher for launching everything else.

I&#8217;m actually using my dock less and less, because Ulauncher is so good, so I decided to not bother using a dock in this install.

So far the experience has been pleasant, although there are some UI failures, I feel. I&#8217;m a [dark mode](https://kevq.uk/how-to-add-css-dark-mode-to-a-website/) kinda guy, so it was nice to see that the Ubuntu team have created a new dark mode for their Yaru theme.

The Ubuntu dark mode looks great, but there are some UI elements that don&#8217;t respect it, so you end up with white windows and popups occasionally. For example, notifications don&#8217;t honour dark mode, and neither to the system menus from the top panel:

<img loading="lazy" width="1024" height="576" src="/assets/images/wp-images/2020/04/light-popups-ubuntu-20.04-1024x576.png" alt="" class="wp-image-1737" srcset="/assets/images/wp-images/2020/04/light-popups-ubuntu-20.04-1024x576.png 1024w, /assets/images/wp-images/2020/04/light-popups-ubuntu-20.04-300x169.png 300w, /assets/images/wp-images/2020/04/light-popups-ubuntu-20.04-768x432.png 768w, /assets/images/wp-images/2020/04/light-popups-ubuntu-20.04-1536x864.png 1536w, /assets/images/wp-images/2020/04/light-popups-ubuntu-20.04.png 1600w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Although the popups look amazing (in my opinion) with the orange and purple accents, they don&#8217;t look right when the rest of my OS is in dark mode. I&#8217;m not sure if this is a Gnome issue, or an Ubuntu issue &#8211; hopefully it will be patched at a later date.

## Tweaks {#h-tweaks}

As you can probably see from the screenshot before, my install of Ubuntu 20.04 isn&#8217;t exactly standard; there&#8217;s no side bar for a start. Below are details of the changes I made to my install &#8211; you&#8217;ll notice there aren&#8217;t many, which is a testament to how good 20.04 is.

I&#8217;ve changed system font from Ubuntu to Fira Sans. A lot of people really like the Ubuntu font, but I can&#8217;t bare it. To me, it looks like a modern day Comic Sans. Horses for courses, I suppose.

I installed the [Dash to Panel extension](https://extensions.gnome.org/extension/1160/dash-to-panel/) so I could combine the top and side panels into a single one. There&#8217;s no need for two panels, when a single panel can give me all the same info. I also changed the panel size to 32px.

I usually install [KStatus Notifier](https://extensions.gnome.org/extension/615/appindicator-support/) too, but the Ubuntu team already have support for this by default, which is great to see. Removing system tray icons seems to be the way some distros are going these days &#8211; I don&#8217;t get it. To me, a system tray is as important as the panel itself. System tray icons display crucial information, such as status alerts and sync tasks.

That&#8217;s literally all I changed. I installed Ubuntu 20.04, ran [my install script](https://kevq.uk/how-to-create-a-simple-install-script-in-ubuntu/) and made the changes above. Within an hour I was up and running. The simplicity of getting going on a Linux desktop blows my mind every single time.

<img loading="lazy" width="1024" height="576" src="/assets/images/wp-images/2020/04/ubuntu-20.04-desktop-1024x576.png" alt="" class="wp-image-1739" srcset="/assets/images/wp-images/2020/04/ubuntu-20.04-desktop-1024x576.png 1024w, /assets/images/wp-images/2020/04/ubuntu-20.04-desktop-300x169.png 300w, /assets/images/wp-images/2020/04/ubuntu-20.04-desktop-768x432.png 768w, /assets/images/wp-images/2020/04/ubuntu-20.04-desktop-1536x864.png 1536w, /assets/images/wp-images/2020/04/ubuntu-20.04-desktop.png 1600w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## Overall Thoughts {#h-overall-thoughts}

The Gnome team have done some great work with their shell. To me there seems to be a marked improvement in performance. Gone are the days of shell crashes every 5 minutes; the activity menu and app drawer also load without any stutter.

Although Ubuntu 20.04 does seem to be RAM hungry. I&#8217;m currently using 4.2GB of my 8GB RAM and all I have open is Firefox with 5 tabs, file browser, Spotify and a terminal window. I also have Synology Drive, PIA VPN, Keybase and Sigal running in the background.

For some reason, Gnome Software and The Snap Store are also running as background tasks, which combined are taking up 450MB RAM alone. With 8GB being a small amount of RAM by today&#8217;s standards, I don&#8217;t think this is a major issue. It certainly isn&#8217;t a deal breaker for me.

Ubuntu 20.04 oozes polish everywhere. The Yaru theme is gorgeous and was a desperately needed update in my opinion. I _will_ be keeping this install on my laptop &#8211; I&#8217;ve no reason to go back to Pop!_OS at this point.

Having said that, I&#8217;m going to keep Pop!\_OS on my desktop. When they release their 20.04 version, I will upgrade and see what that&#8217;s like. Overall, they&#8217;re very similar operating systems, so I will likely move my desktop to Ubuntu too, unless Pop!\_OS offers me something Ubuntu can&#8217;t.

If you&#8217;re thinking of giving 20.04 a try, I&#8217;d say do it. It has tonnes of polish, it works great out of the box, but you can easily tweak it to your needs, like I have. Best of all, because it&#8217;s an LTS, it&#8217;s supported for the next 5 years.

#### Great work, Canonical! {#h-great-work-canonical}
