---
id: 6081
title: A Sombre Goodbye To Linux
date: 2021-07-10T21:27:13+01:00

layout: post
permalink: /a-sombre-goodbye-to-linux/
description:
  - I recently wrote about why I think complaints about the stability of Windows are unfounded. Since then, I've actually said goodbye to Linux.
categories:
  - Technology
---
<p class="medium">
  I recently wrote about why I think <a href="https://kevq.uk/is-windows-unstable-here-are-my-thoughts/">complaints about the stability of Windows</a> are unfounded. Since then, I&#8217;ve actually said goodbye to Linux on all my machines and I now run Windows 10 exclusively. Here&#8217;s why&#8230;
</p>

The TL;DR is that I became sick of the many little issues with Linux. I just want my OS to get out of the way so I can crack on and get shit done.

## My frustrations with Linux {#h-my-frustrations-with-linux}

I was running <a href="https://kubuntu.org/" target="_blank" rel="noreferrer noopener">Kubuntu</a> on both my laptop and my desktop, but I've used a number of other Linux distros over the years too. Ubuntu, UbuntuMATE, Xubuntu, Fedora, KDE Neon and many more.

My biggest frustration with pretty much all of the distributions I had run was the sheer number of ways to install applications. I had some that were DEBs, others were Snaps, a couple of Flatpaks and an AppImage to finish it all off.

I didn't use the various mechanisms for installing software by choice. Either applications were only available on some of these platforms, or they had issues, so I had to defer to another way of installing.

On Windows, whether it's an EXE or an MSI, it's all the same process**.** You download the package, click next > next > finish and you're done. No issues, no fuss. Just done.

I don't have to waste time troubleshooting a package that isn't integrating with the system properly, or looks like it's straight out of 1995 because no theming is applied for some unknown reason.

![](/assets/images/inkscape-no-theme.png)
*Example of Inkscape with no theming applied*

Sure, there's no package manager in Windows, and their store is nothing short of atrocious. But I don't use their store, and all the apps that I use on Windows have an update mechanism within them, so they don't stagnate.

## Time is precious {#h-time-is-precious}

I first started using Linux in 2010. Back then I had lots of free time to tinker with my system and learn new stuff. It was exciting. If I came across an issue, I could afford the time to troubleshoot and fix it.

Fast-forward 11 years and things have changed dramatically. I now have a stressful job, a wife and 2 kids. My computers **need** to just work. I don't have the time to piss around with them.

Let me give you a couple of scenarios that explain how thing can go today&#8230;

### **Scenario 1**

It's Saturday afternoon. I'm about to go for a walk with my wife, kids and dog. I'm doing a bit of work and need some notes that I recorded on my phone using <a href="https://standardnotes.com" target="_blank" rel="noreferrer noopener">Standard Notes</a>. To save time flipping between mobile and desktop, I decide to quickly install the Standard Notes desktop app.

I start with the Snap package. Once I run the application, I get a weird error message about the Ubuntu key-chain and local storage.

I spend an hour or so troubleshooting the issue, admit defeat and log <a href="https://github.com/standardnotes/desktop/issues/637" target="_blank" rel="noreferrer noopener">an issue on GitHub</a>. I end up installing the AppImage to get around it, but now I'm having issues with launching the AppImage and having it integrate with my system.

Another hour or so passes and I find that I need to install the `AppImage Launcher` package to get it to work correctly on my system.

Approximately 2.5 hours later I have Standard Notes installed and I'm good to go. It's now too late to go for a walk as we will be having dinner soon. Afternoon with the family wasted. 😥

### Scenario 2 {#h-scenario-2}

Same thing, except this time I'm on Windows. I download and install the Standard Notes EXE. It works as expected and 2 minutes later I have the app working on my desktop.

I finish my work and go and enjoy a lovely afternoon walking around the countryside with my family.

**Big difference, huh?**

<hr>

Ultimately, I'd much rather be spending time with my family than wasting it troubleshooting issues. I bet right now you're probably thinking something along the lines of&#8230;

>Kev! This is a problem with the Standard Notes package, not Linux!
>
><cite>Linux folk everywhere</cite>

You're absolutely right, Linux folk. But this scenario is by no means unique. By way of a quick list off the top of my head, here are a few of the issues I've had to work around while using Linux:

  * Massive system tray icons for various applications.
  * No theming on certain snap packages.
  * Having to install certificates to get Citrix receiver working.
  * Firefox crashing pretty much every time I open it.
  * Spell check <a href="https://github.com/typora/typora-issues/issues/3584" target="_blank" rel="noreferrer noopener">not working</a> on Typora.
  * Having to install a separate package for spell checking in Ghostwriter, once I realised I couldn't get Typora working properly.

Yes, these may all be application issues, but they're issues that simply don't exist in Windows.

## Privacy (or lack of) {#h-privacy-or-lack-of}

Yep, privacy is an issue now I'm using Windows 10. I'm aware of that, but I'd rather sacrifice some personal data and be able to spend precious time with my family, than be completely private and miss that time.

Windows 10 can be made more private relatively easily. It will never be as private as a Linux distribution, and that's regrettable, but for me the balance of getting shit done vs messing around with my systems is worth it.

## Closing thoughts {#h-closing-thoughts}

I'm sure I'm going to get a lot of heated responses to this post. I get it, Linux _is_ better than Windows in a lot of ways. But, as much as I hate to admit it, Windows _is_ better than Linux in many ways too.

I still run Linux on my servers, so it's not like I'm completely ditching Linux. Lets be honest, there's no comparison between Linux and anything else in the server space.

I may come back to Linux at some point, and I'll certainly try various distributions in VM/live environments whenever time permits. But for now, I'm a Windows guy.

**Have you replaced Linux with Windows for similar reasons? Or do you find Linux to be hands down the best OS out there? I'd love to hear your thoughts.**
