---
id: 2691
title: How To Make Ubuntu Work Like Windows 10
date: 2020-08-12T15:24:14+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2691
permalink: /how-to-make-ubuntu-work-like-windows-10/
description:
  - This is a simple guide on how to make Ubuntu work more like Windows 10. This isn't about copying Windows 10, we're talking about workflows.
categories:
  - Technology
---
Last night, while walking the dog, I was listening to the <a href="https://latenightlinux.com/late-night-linux-extra-episode-07/" target="_blank" rel="noreferrer noopener">latest episode of Late Night Linux</a> where Joe speaks to his friend Kyle about his use of Linux and why he has ultimately decided to stick with Windows 10 for the time being.

I thought this was a very interesting discussion, which ultimately boiled down to Kyle saying on a number of occasions that he didn&#8217;t like the UI/UX of the distros he had tried, and that he wanted to make Ubuntu work more like Windows 10.

Kyle went on to say that he&#8217;s accustom to Windows and likes the workflow, but couldn&#8217;t find any simple guides on making Ubuntu work like Windows 10. That&#8217;s where this post comes in. 🙂

There was a couple of distros that he mentioned, including vanilla <a href="https://kevq.uk/my-thoughts-on-ubuntu-20-04/" target="_blank" rel="noreferrer noopener">Ubuntu</a>, <a href="https://ubuntu-mate.org/" target="_blank" rel="noreferrer noopener">Ubuntu MATE</a> & <a href="https://xubuntu.org/" target="_blank" rel="noreferrer noopener">Xubuntu</a>. Kyle said that he couldn&#8217;t find any simple guides on emulating the Windows workflow in Ubuntu. So, I decided to write one.

<p class="notice">
  Note: by the end of this process you will NOT have a Windows 10 clone &#8211; that isn&#8217;t the point of this post. What you will have is an Ubuntu desktop that has a workflow similar to that of Windows 10.
</p>

## The easy way {#h-the-easy-way}

The easiest way to make Ubuntu work like Windows 10 is to download a distribution that&#8217;s already geared toward Windows migrants. <a rel="noreferrer noopener" href="https://linuxmint.com/" target="_blank">Linux Mint</a> and its Cinnamon desktop does a fairly good job of this, but I think the UX leaves a lot to be desired. Personally, I would compare Linux Mint Cinnamon to Windows XP rather than Windows 10.

I think that <a href="https://zorinos.com/" target="_blank" rel="noreferrer noopener">Zorin OS</a> is a much better Linux distribution for Windows migrants, as it has a very similar workflow right out of the box.

<img loading="lazy" width="640" height="325" src="/assets/images/wp-images/2020/08/zorin-os-15.png" alt="Zorin OS 15 desktop" class="wp-image-2696" srcset="/assets/images/wp-images/2020/08/zorin-os-15.png 640w, /assets/images/wp-images/2020/08/zorin-os-15-300x152.png 300w" sizes="(max-width: 640px) 100vw, 640px" /> *Zorin OS 15*

## The slightly harder way &#8211; make stock Ubuntu work like Windows 10 {#h-the-slightly-harder-way-make-stock-ubuntu-work-like-windows-10}

If you look at the default Ubuntu interface, you will see that there&#8217;s a taskbar at the top and another bar on the left. There&#8217;s no start menu, and if you press the **Activities** button, you don&#8217;t get a start-like menu, but instead a spread of all open windows.

<img loading="lazy" width="640" height="325" src="/assets/images/wp-images/2020/08/ubuntu-default-ui.png" alt="Default Ubuntu UI" class="wp-image-2700" srcset="/assets/images/wp-images/2020/08/ubuntu-default-ui.png 640w, /assets/images/wp-images/2020/08/ubuntu-default-ui-300x152.png 300w" sizes="(max-width: 640px) 100vw, 640px" /> *Default Ubuntu UI*

It&#8217;s fair to say that the out-of-the-box experience of Ubuntu is **very** different to Windows 10.

## What we&#8217;re going to change {#h-what-we-re-going-to-change}

In order to make Ubuntu work like Windows 10, there are few things we need to change. These are:

  * Remove the top and side panels.
  * Create a single taskbar at the bottom of the desktop.
  * Integrate a system tray into the taskbar.
  * Add a proper start menu to the taskbar.

To give you an idea of the kind of thing we&#8217;re aiming for, here&#8217;s my Windows 10 desktop:

<img loading="lazy" width="640" height="360" src="/assets/images/wp-images/2020/08/windows-10-ui.png" alt="Windows 10 desktop" class="wp-image-2702" srcset="/assets/images/wp-images/2020/08/windows-10-ui.png 640w, /assets/images/wp-images/2020/08/windows-10-ui-300x169.png 300w" sizes="(max-width: 640px) 100vw, 640px" />  

There&#8217;s a lot to go through here, but it&#8217;s all relatively simple and should take no more than 30 minutes. So, let&#8217;s get cracking, shall we?

## Step 1 &#8211; installing extensions {#h-step-1-installing-extensions}

First, you need to install the <a href="https://addons.mozilla.org/en-GB/firefox/addon/gnome-shell-integration/" target="_blank" rel="noreferrer noopener">Gnome Shell Integration addon for Firefox</a>. This will allow you to install Gnome extensions right from Firefox with the click of a button.

Next, visit the link for each of the extensions listed below and switch the black rocker from &#8220;**OFF**&#8221; to &#8220;**ON**&#8221; to install them. When you switch the rocker to &#8220;**ON**&#8220;, you will receive a prompt to install the extension:

<img loading="lazy" width="640" height="447" src="/assets/images/wp-images/2020/08/gnome-extension-install.png" alt="Gnome extension install" class="wp-image-2705" srcset="/assets/images/wp-images/2020/08/gnome-extension-install.png 640w, /assets/images/wp-images/2020/08/gnome-extension-install-300x210.png 300w" sizes="(max-width: 640px) 100vw, 640px" />  

Here&#8217;s the list of extensions you need to install:

  * Dash to Panel &#8211; <a href="https://extensions.gnome.org/extension/1160/dash-to-panel/" target="_blank" rel="noreferrer noopener">https://extensions.gnome.org/extension/1160/dash-to-panel/</a>
  * Arc Menu &#8211; <a href="https://extensions.gnome.org/extension/3628/arcmenu/" target="_blank" rel="noreferrer noopener">https://extensions.gnome.org/extension/3628/arcmenu/</a>

## Step 2 &#8211; customisations {#h-step-2-customisations}

You should now have a bit of a hodgepodge of panels. There will be a single panel at the bottom, and a few icons that you probably don&#8217;t recognise. Don&#8217;t worry, we&#8217;re going to fix all that now.

### Dash to Panel {#h-dash-to-panel}

The first thing to do is sort out the Dash to Panel extension. Right-click on the bottom panel and select Dash to Panel Settings from the pop-up.

On the **Position** tab, click on the **Visible** button next to **Show Applications button**. When you click this button, it should turn from grey to white. This will hide the applications button so we can replace it with the Arc menu later:

<div class="wp-block-image">
  <img loading="lazy" width="621" height="820" src="/assets/images/wp-images/2020/08/hide-applications-button.png" alt="" class="wp-image-2709" srcset="/assets/images/wp-images/2020/08/hide-applications-button.png 621w, /assets/images/wp-images/2020/08/hide-applications-button-227x300.png 227w" sizes="(max-width: 621px) 100vw, 621px" />
</div>

Click on the **Style** tab and change the **Panel Size** to `40px`. This should make the panel a similar size to the Windows 10 taskbar. Obviously change this number to be larger or smaller as you see fit.

<div class="wp-block-image">
  <img loading="lazy" width="630" height="858" src="/assets/images/wp-images/2020/08/dash-to-panel-size.png" alt="Dash to Panel size" class="wp-image-2706" srcset="/assets/images/wp-images/2020/08/dash-to-panel-size.png 630w, /assets/images/wp-images/2020/08/dash-to-panel-size-220x300.png 220w" sizes="(max-width: 630px) 100vw, 630px" />
</div>

Next, go to the **Behaviour** tab and click on the cog icon next to **Show window previews on hover**.

Then, change the **Window previews preferred size (px)** from `240` to `120`. Again, this should make the window preview similar to that of Windows 10 when you hover over an open application:

<img loading="lazy" width="640" height="325" src="/assets/images/wp-images/2020/08/window-preview.png" alt="Window preview" class="wp-image-2707" srcset="/assets/images/wp-images/2020/08/window-preview.png 640w, /assets/images/wp-images/2020/08/window-preview-300x152.png 300w" sizes="(max-width: 640px) 100vw, 640px" />  

### System tray menu {#h-system-tray-menu}

Next we need to configure the system tray menu. If you don&#8217;t know what the system tray menu is, these are the little icons that certain applications display on the taskbar, usually by the clock, when an application is running in the background.

These are usually application like anti-virus and file syncing tools. Here&#8217;s the system tray icons on my Windows 10 machine:

<div class="wp-block-image">
  <img loading="lazy" width="332" height="39" src="/assets/images/wp-images/2020/08/system-tray-icons-windows.png" alt="System tray icons - Windows 10" class="wp-image-2712" srcset="/assets/images/wp-images/2020/08/system-tray-icons-windows.png 332w, /assets/images/wp-images/2020/08/system-tray-icons-windows-300x35.png 300w" sizes="(max-width: 332px) 100vw, 332px" />
</div>

With Dash to Panel, the system tray icons should work out of the box. But if for whatever reason they&#8217;re not working, go back into the Dash to Panel settings and click the **Visible** button next to **Right Box** from the **Position** tab.

If everything works right, you should see the icons loaded on the panel, as shown below:

<div class="wp-block-image">
  <img loading="lazy" width="294" height="39" src="/assets/images/wp-images/2020/08/system-tray-icons-ubuntu.png" alt="System tray icons - Ubuntu" class="wp-image-2714" />
</div>

### Arc menu {#h-arc-menu}

The last thing we need to do is make a couple of small tweaks to the Arc menu configuration so it works like Windows.

First, right-click on the Arc menu icon (it&#8217;s on the far left of the panel and looks like a grey &#8220;a&#8221;. Then, select Arc Menu Settings from the pop-up.

On the **General** tab, under **Arc Menu Hotkey**, select **Left Super Key**. This will ensure that when you hit the Windows key on your keyboard, the Arc menu will appear, just like in Windows 10.

<div class="wp-block-image">
  <img loading="lazy" width="596" height="654" src="/assets/images/wp-images/2020/08/arc-super-key.png" alt="Arc menu super key" class="wp-image-2717" srcset="/assets/images/wp-images/2020/08/arc-super-key.png 596w, /assets/images/wp-images/2020/08/arc-super-key-273x300.png 273w" sizes="(max-width: 596px) 100vw, 596px" />
</div>

Finally, we&#8217;re going to get rid of the silly &#8220;a&#8221; icon and replace it with an Ubuntu icon. To do this, go to the **Appearance** tab within the settings window and click on cog button next to **Arc Menu Icon Settings**.

On the sub-window that appears, click on the **Browse Icons** button, next to where it says **Arc Menu Icon**.

Another window will then appear. Select the **Distro Icons** tab, then the Ubuntu logo:

<div class="wp-block-image">
  <img loading="lazy" width="593" height="653" src="/assets/images/wp-images/2020/08/ubuntu-arc-menu-icon.png" alt="" class="wp-image-2718" srcset="/assets/images/wp-images/2020/08/ubuntu-arc-menu-icon.png 593w, /assets/images/wp-images/2020/08/ubuntu-arc-menu-icon-272x300.png 272w" sizes="(max-width: 593px) 100vw, 593px" />
</div>

Close the third window, so you&#8217;re back on the icon settings window. Where it says **Icon Size**, change it to `30px`. This should give you a nice Ubuntu themed icon that matches the rest of the panel:

<img loading="lazy" width="640" height="325" src="/assets/images/wp-images/2020/08/ubuntu-like-windows-10.png" alt="" class="wp-image-2719" srcset="/assets/images/wp-images/2020/08/ubuntu-like-windows-10.png 640w, /assets/images/wp-images/2020/08/ubuntu-like-windows-10-300x152.png 300w" sizes="(max-width: 640px) 100vw, 640px" />  

That&#8217;s it! You should now have an Ubuntu desktop that works like Windows 10.

## Conclusion {#h-conclusion}

As I said at the start of this post, my intention here wasn&#8217;t to emulate the theme of Windows 10 in this post, but rather the user experience and workflow.

At this point you should have the familiar single panel layout, with a good looking start menu and a system tray. However, it&#8217;s all themed in a way that still gives Ubuntu its own identity.

As you explore more, if you decide to change the theme of your Ubuntu desktop, the Dash to Panel and Arc menu should adapt too, so your theming remains consistent throughout.

I hope this post helps any new people coming over from Windows 10 to setup their environment in Ubuntu so it&#8217;s slightly more familiar than the default.
