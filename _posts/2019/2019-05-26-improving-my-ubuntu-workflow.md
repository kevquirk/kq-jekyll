---
title: Improving My Ubuntu Workflow
layout: post
permalink: /improving-my-ubuntu-workflow/
categories:
  - Technology
---
Ubuntu is great. I’ve been using it since 2009 and I currently run [Ubuntu MATE](https://ubuntu-mate.org) – I even run it on [my home server](/building-my-home-server). However, I’m a fan of using the keyboard where possible, so was looking for ways to improve my Ubuntu workflow so I don’t have to reach for my mouse too often.

After a little trial and error, I’ve settled on a couple of really useful applications that have increased my productivity immensely. So much so that I thought I’d write about it on here.

## The Default Ubuntu Workflow {#h-the-default-ubuntu-workflow}

The default Ubuntu workflow is very good, especially in Ubuntu MATE, but it is very mouse-centric. I do a lot of typing on my machines (mostly emails), so having to reach for my mouse when I want to do anything outside of my current window can disrupt my workflow.

Terminal is also one of the tools I use often, so needed a way of managing my applications and files, as well as a terminal window, without lifting my fingers off my keyboard.

By installing two applications; [Ulauncher](https://ulauncher.io) and [Guake](http://guake.org), I managed to achieve what I wanted.

## Ulauncher {#h-ulauncher}

Ulauncher is an application launcher that works with a number of Linux distributions. It allows users to launch applications using a simple shortcut command.

You may think ‘so what? you can do that with the MATE launcher’ and you would be right. However, Ulauncher supports extensions so you can expand its functionality.

For example, I have extensions that will search DuckDuckGo, manage tracks in Spotify and generate passwords. You can see a [full list of extensions here](https://ext.ulauncher.io).

Hit a predefined shortcut key (ctrl+space by default); Ulauncher will then popup that allows me to search for files, skip tracks, generate password and a whole lot more. All without lifting my hands from the keyboard.

![](/assets/images/ulauncher-spotify.jpg)

![](/assets/images/ulauncher-pwgen.jpg)

```
sudo add-apt-repository ppa:agornostal/ulauncher
sudo apt-get update
sudo apt-get install ulauncher
```

## Guake {#h-guake}

Simply put, Guake is a pop-down terminal. So just like Ulauncher, I hit a specific keyboard command and the terminal window drops down from the top of the screen.

I don’t even need to keep the terminal window open. I hit the shortcut key – in my case tilde (~). Guake pops up and I enter my command. I hit tilde again and the terminal window hides, allowing me to get on with what I was doing while the terminal command chugs away in the background.

![](/assets/images/guake.jpg)  

If I hit the same shortcut a few minutes later, I can get see the history of what my command was doing.

```
# Guake is already in the Ubuntu repositories
sudo apt-get install guake
```

## Conclusion {#h-conclusion}

Between Ulauncher and Guake, I’ve managed to really improve my workflow in Ubuntu and at the same time, increase my productivity.

Do you have a novel way of managing your Ubuntu workflow? If so, feel free to tell me about it in the comments below.
