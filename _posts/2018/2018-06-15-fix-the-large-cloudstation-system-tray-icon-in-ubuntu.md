---
title: Fix the Large CloudStation System Tray Icon in Ubuntu
layout: post
permalink: /fix-the-large-cloudstation-system-tray-icon-in-ubuntu/
categories:
  - Technology
---
There is a bug within Synology’s CloudStation application for Ubuntu, whereby the system tray icon is HUGE. So much so that most of the icon is cut off, and it is a complete eye sore. In this post I will show you how to fix the large CloudStation system tray icon in Ubuntu.

{: .full-bleed}
![Large icon demo](/assets/images/large-icon-demo.webp){: loading="lazy"}

## The Problem {#h-the-problem}

The issue here is that the system tray icons that Synology provide with the application are PNG, which means they don’t scale very well. The icons are 72px square by default, and no matter what you try – different GTK theme, different icon theme – it won’t work. Well, it didn’t for me at least.

So rather than muck around trying to fix the issue within Ubuntu, I decided to simply make some smaller icons.

## The Fix {#h-the-fix}

The first thing you need to do is [download this zip file](/assets/files/CloudStation-Icons.zip). Once you have the zip archive on your machine, extract it to somewhere that is easy for you to find.

Within the pack I have created 4 different designs, depending on what kind of theme you’re running, there should something for most people within the pack:

{: .full-bleed}
![Icon colours example](/assets/images/Icon-Colours-Example.webp){: loading="lazy"}

Choose the theme pack you want to use and navigate to the following directory on your machine (you may need to hit ctrl+h to reveal hidden folders.

<pre class="wp-block-code"><code>/home/&lt;user>/.CloudStation/CloudStation.app/images/tray</code></pre>

Finally, replace the contents of the **_normal_** folder with the contents of the folder that corresponds to the theme you want to use. Restart the CloudStation app, or log out and in again. The new icons should now be visible:

![Sync icon example](/assets/images/Sync-Icon-Demo.webp){: loading="lazy"}

I’d like to thank **GreenMartian** from the [UbuntuMate Community](https://ubuntu-mate.community) for his assistance in pointing me in the right direction.

_SHA1 hash for download:_ `b3021356aa7ccf34ef0ae8e5c70b332796f687e2`
