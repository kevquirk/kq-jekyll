---
title: How To Create A Simple Install Script In Ubuntu
layout: post
permalink: /how-to-create-a-simple-install-script-in-ubuntu/
description:
  - This post shows you how to create a simple install script for when you install a fresh build of Ubuntu. This will help you get up and running much quicker.
categories:
  - Technology
---
Some people like to upgrade their installation when a new version of Ubuntu is released, personally I like to nuke and pave a new installation so I&#8217;m starting fresh. This post will show you how I created a simple install script to configure a new installation quickly.

<p class="notice">
  Note: this is just how I do it. I&#8217;m sure there are many ways to improve this script, but it works for me. If you have suggestions for improvements, please <a href="https://kevquirk.com/contact/">get in touch</a>.
</p>

I actually have the process split up into two separate scripts. The first does a system update, sets up my repositories and installs my applications. I then sync all of my data over from my NAS.

Once the sync is complete, I run the second install script. This configures my VPN client, sets up my terminal aliases and configures my symlinks.

Once these two script have run, I have pretty much everything configured on my new OS. This means I can go from fresh install to a fully configured OS in under an hour.

## Install Script #1 {#h-install-script-1}

The first script has to be run as [sudo](https://en.wikipedia.org/wiki/Sudo). This is because it needs elevated privileges to install software and add repositories. My script installs packages from a number of sources, including the Ubuntu repositories, DEB files, Snap packages and additional repositories that I add.

The script below isn&#8217;t my exact script, but it shows how I install from the various different sources that I need:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">#!/bin/sh

# Add additional repositories
apt-add-repository ppa:tista/adapta # Adapta theme repo
add-apt-repository ppa:papirus/papirus # Papirus icon theme repo
add-apt-repository ppa:agornostal/ulauncher # Ulauncher repo
add-apt-repository ppa:wereturtle/ppa # Ghostwriter repo

# Get the latest package lists
apt-get update

# Get DEB files
wget https://prerelease.keybase.io/keybase_amd64.deb
wget https://atom.io/download/deb/atom-amd64.deb
wget https://launcher.mojang.com/download/Minecraft.deb

# Install from Repo
apt-get install adapta-gtk-theme -y
apt-get install papirus-icon-theme -y
apt install gnome-tweak-tool -y
apt-get install ulauncher -y
apt-get install filezilla -y
apt-get install inkscape -y
apt-get install calibre -y
apt-get install torbrowser-launcher -y
apt-get install ghostwriter -y
apt-get install hunspell-en-gb -y # Adds spellcheck to Ghostwriter
apt-get install gimp -y
apt-get install plank -y
# Install snap packages
snap install spotify
snap install gitkraken

# Install DEB files
dpkg -i keybase_amd64.deb
dpkg -i atom-amd64.deb
dpkg -i Minecraft.deb
apt --fix-broken install -y # Fix Minecraft dependency issue.

# Clean up DEB files
rm -f keybase_amd64.deb
rm -f Minecraft.deb
rm -f atom-amd64.deb

# Install requirements for Ulauncher PW generator
apt install python3-pip -y
pip3 install pwgen

# Final message
echo All application have been installed, the script will now quit.

# Exit the script
exit 0</pre>

To actually use the script, paste the code above into a text editor, edit it as needed and save it as something like `install.sh`. You then need to right click on the file, go to properties, then the permissions tab and check the box to allow execution.

Alternatively, you can add execute permissions from the terminal with the following command:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">sudo chmod +x install.sh</pre>

To execute the install script, run the following command:

<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">sudo ./install.sh</pre>

## Install Script #2 {#h-install-script-2}

This second script is designed to setup our user config. Because we&#8217;re not installing any applications and these commands affect our user, we **do not** __use the `sudo` command to execute the script.

As before, paste the following code into a text editor, save the file as something like `install2.sh`, then give it execute permissions.

Once you&#8217;re ready to execute the script, run the same command as before, but without `sudo`. So:

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">./install2.sh</pre>

<pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">#!/bin/sh
# Symlink for config files
mv ~/.config ~/.configOLD
ln -s ~/Nextcloud/Config/ ~/.config
# Symlink .minecraft folder so previous save works.
ln -s ~/Nextcloud/Minecraft ~/.minecraft
# Setup other Symlinks
rm -rf ~/Documents
rm -rf ~/Pictures
rm -rf ~/Public
rm -rf ~/Templates
rm -rf ~/Videos
ln -s ~/Nextcloud/Documents ~/Documents
ln -s ~/Nextcloud/Photos ~/Pictures
# Setup terminal alias
alias update='sudo apt update'
alias upgrade='sudo apt upgrade -y'
# Final message
echo User folders have been configured, the script will now quit.

# Exit the script
exit 0</pre>

I personally sync my `.config` folder from my home directory to Nextcloud. This allows me to have all of my applications configured in the exact same way across all of my machines.

This script creates a bunch of symlinks from my Nextcloud folder. Rather than remove the `.config` folder, it simply renames it. Once you have confirmed everything is working as it should, it&#8217;s fine to delete the old config folder.

## Conclusion {#h-conclusion}

While not perfect, these 2 install scripts should significantly speed up the time it takes to go from vanilla Ubuntu build, to a configured system. For me, that&#8217;s less than an hour.
