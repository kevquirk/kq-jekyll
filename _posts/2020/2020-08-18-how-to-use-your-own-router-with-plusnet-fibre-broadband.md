---
id: 2737
title: How To Use Your Own Router With Plusnet Fibre Broadband
date: 2020-08-18T15:46:40+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2737
permalink: /how-to-use-your-own-router-with-plusnet-fibre-broadband/
description:
  - This post will show you how to setup your own router with Plusnet fibre optic broadband. Using your own router with Plusnet fibre has many...
categories:
  - Technology
---
A while back, I wrote a post on <a href="https://kevq.uk/how-to-use-a-tp-link-router-with-sky-fibre-optic/" target="_blank" rel="noreferrer noopener">how to use a TP-Link router with Sky Fibre broadband</a>. Since writing that post, I&#8217;ve changed ISP to <a href="https://www.plus.net/refer.php?strReferralsUid=848a47f7ba0af4671cc8235d6c52a129a5b4e13c091b1961608c8b8eff20ddc0" target="_blank" rel="noreferrer noopener">Plusnet</a>.

That post has been pretty successful and has helped a lot of people, so I thought I would write another post on how to do the same thing, but with Plusnet.

## Why did I switch to Plusnet fibre? {#h-why-did-i-switch-to-plusnet-fibre}

I didn&#8217;t really have any issues with Sky as such, but I decided I wanted to cancel my TV package, so thought it would be good to start hunting for a new ISP too.

I ended up settling on Plusnet for 2 reasons. Firstly, Plusnet officially allow its customers to use any router they like, whereas Sky don&#8217;t.

Secondly, Plusnet offer a permanent static public IP for a single payment of £5. This was a huge sell to me, as I have servers that I host at home. I&#8217;ve been with Plusnet for a couple years now and I&#8217;m very happy with their service.

Anyway, let&#8217;s get on with the instructions for using your own router with Plusnet fibre.

## Choosing a router {#h-choosing-a-router}

My personal recommendation is the <a href="https://amzn.to/3t2op9U" target="_blank" rel="noreferrer noopener">TP-Link AC1200</a>. It&#8217;s the one I use at home, and it works brilliantly. If you don&#8217;t want to use the AC1200, any router that supports **VDSL** will work.

<img loading="lazy" width="640" height="480" src="/assets/images/wp-images/2020/08/tp-link-ac1200.jpg" alt="TP-Link AC1200" class="wp-image-2748" srcset="/assets/images/wp-images/2020/08/tp-link-ac1200.jpg 640w, /assets/images/wp-images/2020/08/tp-link-ac1200-300x225.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" /> *TP-Link AC1200*

## Using your own router with Plusnet fibre {#h-using-your-own-router-with-plusnet-fibre}

These instructions will be specific to the AC1200, but the process is pretty simple if you&#8217;re using a different router.

The first thing you need to do is connect your DSL cable to your micro-filter, then connect a laptop to one of the Ethernet ports on the router.

Next, open a browser and navigate to `http://192.168.0.1`. This should load the router management interface. The default password is `admin`.

<p class="has-text-align-center notice-red">
  <strong>CHANGE YOUR PASSWORD!</strong><br />Your router may prompt you to do this immediately. If it doesn&#8217;t, navigate to Advanced > System Tools > Administration.
</p>

### Setting up your Plusnet fibre connection {#h-setting-up-your-plusnet-fibre-connection}

Once you have changed the admin password (<a href="https://kevq.uk/why-your-password-is-probably-crap/" target="_blank" rel="noreferrer noopener">make sure it&#8217;s a good one</a>), you should be greeted with the Quick Setup wizard. If you are not, click on the **Quick Setup** tab.

Once you&#8217;re on the **Quick Setup** tab, select `Plusnet_VDSL` from the drop-menu and click **Next**.

<img loading="lazy" width="640" height="261" src="/assets/images/wp-images/2020/08/tp-link-quick-setup01.jpg" alt="" class="wp-image-2751" srcset="/assets/images/wp-images/2020/08/tp-link-quick-setup01.jpg 640w, /assets/images/wp-images/2020/08/tp-link-quick-setup01-300x122.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" />  

Next, set the connection type to `PPPoE` from the drop-down, then enter your Plusnet username and password into the corresponding fields.

These will be the same username and password you use to login to the Plusnet website, but you will need to append `@plusdsl.net` to your username.

For example, if the username you use to login to the Plusnet site is `kevq123` then the username you will use on your router is `kevq123@plusdsl.net`.

If you didn&#8217;t see an option for `Plusnet_VDSL`, choose `Other` instead. Then as well as entering your username and password, click on the **Enable VLAN ID** option and set the field to `101`.

Once you have entered those details, click **Next** again.

<img loading="lazy" width="640" height="326" src="/assets/images/wp-images/2020/08/tp-link-quick-setup02.jpg" alt="" class="wp-image-2753" srcset="/assets/images/wp-images/2020/08/tp-link-quick-setup02.jpg 640w, /assets/images/wp-images/2020/08/tp-link-quick-setup02-300x153.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" /> *If you selected Plusnet_VDSL*

<img loading="lazy" width="640" height="356" src="/assets/images/wp-images/2020/08/tp-link-quick-setup02a.jpg" alt="" class="wp-image-2766" srcset="/assets/images/wp-images/2020/08/tp-link-quick-setup02a.jpg 640w, /assets/images/wp-images/2020/08/tp-link-quick-setup02a-300x167.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" />*If you selected Other*

Next, you will be asked to configure your wireless networks. I personally have wireless disabled because I use <a href="https://amzn.to/3hXkNBA" target="_blank" rel="noreferrer noopener">TP-Link Deco M5 Mesh WiFi</a> for better coverage in my house.

If you intend to use the Wi-Fi built into the router, then configure it as you see fit. My recommendation is to use use 5GHz only, as it&#8217;s faster.

The problem with 5GHz wireless is that the signal is much shorter. So if you have connection issues, try enabling 2.4GHz too. If after enabling 2.4Ghz you still have connection issues, I&#8217;d recommend setting up a mesh Wi-Fi system, like the one I linked to above.

Once you&#8217;re happy with your wireless configuration, click **Next**.

<img loading="lazy" width="640" height="397" src="/assets/images/wp-images/2020/08/tp-link-quick-setup03.jpg" alt="" class="wp-image-2754" srcset="/assets/images/wp-images/2020/08/tp-link-quick-setup03.jpg 640w, /assets/images/wp-images/2020/08/tp-link-quick-setup03-300x186.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" />  

Your AC1200 should now do a connection test and with a bit of luck, you should see a success message similar to this one:

<img loading="lazy" width="640" height="418" src="/assets/images/wp-images/2020/08/tp-link-quick-setup04.jpg" alt="" class="wp-image-2756" srcset="/assets/images/wp-images/2020/08/tp-link-quick-setup04.jpg 640w, /assets/images/wp-images/2020/08/tp-link-quick-setup04-300x196.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" />  

You can now click the **Finish** button. Congratulations, you just setup your own router with Plusnet fibre!

## Explore {#h-explore}

From here, I would recommend exploring the TP-Link settings to see the kind of things you can do with it. For example, if you have kids, you might want to configure the parental controls.

Or you can just set it and forget if you don&#8217;t want/need to do anything else with your Internet connection.

I&#8217;ve been running my <a href="https://amzn.to/3t2op9U" target="_blank" rel="noreferrer noopener">TP-Link AC1200</a> for a few years now and I&#8217;m really happy with its performance. Sure, there are way more powerful and feature rich routers out there, but for the majority of home users, ever power users like myself, the TP-Link AC1200 should be more than adequate.
