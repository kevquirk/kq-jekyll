---
id: 339
title: How To Use A TP-Link Router With Sky Fibre Optic
date: 2020-06-24T15:21:00+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=339
permalink: /how-to-use-a-tp-link-router-with-sky-fibre-optic/
description:
  - Your Sky Fibre router isn't the best, so this post will show you how to use a TP-Link router with Sky fibre optic broadband.
categories:
  - Technology
---
The Sky OEM router is fine for the vast majority of cases, but if you want more functionality, better signal strength, or advanced features like VPN support or parental controls, you’re going to want to use a TP-Link router with Sky fibre.

In this article I’ll be showing you how you can replace the OEM Sky router with a much better, TP-Link device.

<p class="notice">
  To my knowledge, <strong>this process does NOT work with NowTV broadband</strong>. This is a completely different service that I have never used. Please do not email me asking to help you troubleshoot issues with your NowTV connection.
</p>

## Why Change? {#h-why-change}

The OEM Sky router is fine for most uses, but some people want more functionality than what “normal” routers can offer. Or, maybe your router is simply swamped in a sea of wireless networks from your neighbours, and you want a better signal strength.

Whichever it is, an after-market router is generally a much better alternative to the OEM routers that are made as cheaply as possible so they can be given to thousands of people for free.

After having a lot of issues with wireless myself, I decided to replace my OEM Sky router with a <a href="https://amzn.to/3t2op9U" target="_blank" rel="noreferrer noopener sponsored nofollow">TP-Link VR400</a> for my Sky fibre connection. I’m so glad I did!

<p class="notice">
  <strong>June 2020 update:</strong> I&#8217;ve since upgraded my Wi-Fi network with a <a href="https://amzn.to/3bjfsDd" target="_blank" rel="noreferrer noopener sponsored nofollow">TP-Link Deco M5 mesh Wi-Fi</a> system which has <strong>vastly </strong>improved my wireless network.
</p>

## Setting It Up {#h-setting-it-up}

Setting up the TP-Link router with Sky fibre is extremely simple. Whilst it’s not quite plug and play, the process is pretty straightforward:

  1. Plug in your TP-Link to a power supply and connect the grey DSL cable to the corresponding port on the back of your router.
  2. Connect the other end of your DSL cable to the micro-filter that comes with the router and connect it to your phone socket. If you already have a micro-filter, replace it with the new one.
  3. Connect the network cable to port 1 on the router, then connect the other end to your laptop.
  4. Open a browser window and navigate to `http://192.168.1.1`.
  5. The TP-Link will ask you to set an admin password – make sure you use something secure, as Password123 ain’t gonna cut it!
  6. Once in, the TP-Link setup wizard will start:
      * Input your location and time zone. Click **Next**.
      * Select **Sky(MER)_VDSL** from the ISP list. Make sure it’s this one, as this is Sky fibre. The other Sky option in the list is for Sky Broadband and will not work for fibre connections.
      * In the **username** field, enter `abcdefgh@skydsl`
      * In the **password** field, enter `1234567890abcdef`
      * Click **Next**, then set up your wireless network how you see fit.
      * The TP-Link will then test the Internet connection and you should see a success message. If you do not, wait for the DSL light to stop flashing and try again – it should work just fine.
  7. That’s it! You’re now connected to Sky fibre via your new TP-Link router.

<div class="wp-block-image">
  <img loading="lazy" width="790" height="301" src="/assets/images/wp-images/2019/11/tplink-admin.png" alt="Tp-Link Admin UI" class="wp-image-340" srcset="/assets/images/wp-images/2019/11/tplink-admin.png 790w, /assets/images/wp-images/2019/11/tplink-admin-300x114.png 300w, /assets/images/wp-images/2019/11/tplink-admin-768x293.png 768w" sizes="(max-width: 790px) 100vw, 790px" />
</div>

## Explore {#h-explore}

Now you have your new router connected, you can start to have a look around the admin interface and change the settings as needed. Here are some of the changes I made:

  * Disabled WPS – it’s insecure and easily hacked, so turn it off.
  * Added my NAT rules so that traffic will route to my server.
  * Turned on and configured the guest network, so guests don’t have access to my server.
  * Changed the IP Subnet and DHCP pool. This was only so I didn’t have to re-configure all my existing devices that have static addresses.

## Conclusion {#h-conclusion}

Overall, I’m very happy with the TP-Link VR200. The connection has been rock solid and it has served me well for over 3 years now.

Using a TP-Link router with Sky fibre has many advantages and it’s an extremely well priced router compared to the functionality it offers. The only downside is that it is a lot bigger than the OEM Sky router. But I can live with that for the additional functionality it offers.

I have had feedback from hundreds of people that this process works, but if you&#8217;re struggling I would suggest the Sky fibre forums or <a rel="noreferrer noopener" href="https://stackoverflow.com/questions/tagged/broadband" target="_blank">Stack Overflow</a>.

**A number of people have also [contacted me](https://kevq.uk/contact/) asking if this will work with Sky Q. The answer is yes.**
