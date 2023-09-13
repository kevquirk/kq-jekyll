---
id: 2780
title: How To Setup Pi-hole On A Synology NAS
date: 2020-08-21T13:58:42+01:00

layout: post
permalink: /how-to-setup-pi-hole-on-a-synology-nas/
description:
  - Pi-hole is a great way of blocking ads on your network. This post will take you through setting up Pi-Hole on your Synology NAS with Docker.
categories:
  - Privacy
  - Security
  - Technology
---
{: .tldr}
Using a <a href="https://pi-hole.net/" target="_blank" rel="noreferrer noopener">Pi-hole</a> on your network is a great way of blocking adverts and protecting you from tracking at a network level. In this post I&#8217;m going to take you through setting up Pi-hole on a <a href="https://kevquirk.com/synology-vs-nextcloud-which-is-better-for-a-home-server/" target="_blank" rel="noreferrer noopener">Synology NAS</a> using Docker.

I've been using Pi-hole on my network for a few weeks now and things are going great. I'm sure you can gather than from the name, Pi-hole was originally designed to run on the Raspberry Pi.

But I don't like the idea of having something as crucial as DNS running on a RPi, so I run Pi-hole on my Synology (<a href="https://amzn.to/32aB6nq" target="_blank" rel="noreferrer noopener">I have a DS218+</a>). To get Pi-hole up and running, you _could_ download the image, spin a container with the default settings and it _will_ work.

However, you will end up seeing all the clients on your network bundled under a single `172.x.x.x` IP address, which is the Docker gateway IP. <a href="https://github.com/pi-hole/docker-pi-hole/issues/135" target="_blank" rel="noreferrer noopener">This issue on Github</a> talks about the problem in a little more detail.

Ad and tracker blocking will work with the default settings, but to get a true picture of what's going on with your network, you need to see all the clients separately. So I'll take you through what settings you need to tweak in order to make this happen.

## Setting up Pi-hole on a Synology {#h-setting-up-pi-hole-on-a-synology}

Right then, let's get to work, shall we? The first thing you're going to need to do is install the Synology Docker app. So launch the **Synology Package Centre**, search for `docker` and click on the **Install** button.

![](/assets/images/synology-docker-install.jpg) 

Next, launch the Docker app, click on **Registry** from the left-hand pane and search for `pi-hole`. You should see the official Pi-hole at the top of the list.

**Double-click** on the official Pi-hole image to download it to your Synology.

![](/assets/images/pihole-docker-image.jpg) 

### Setting up the folders {#h-setting-up-the-folders}

Now we need to flip to the **Synology File Station** app. Navigate to the **Docker** folder and create a new sub-folder called ****`pihole`.

Once you have your new `pihole` folder, create two more folders within it; one called `pihole` and another called `dnsmasq.d`. Once done, it should look something like this:

![](/assets/images/pihole-folders.jpg)  

### Configuring the Docker container {#h-configuring-the-docker-container}

Ok then, back to the Docker app we go. We've downloaded the Pi-hole image and we now need to setup the container correctly.

Select the **Images** tab from the left-hand panel and **double-click** on the Pi-hole image you downloaded earlier. The container configuration wizard should now launch.

In the first step, give the container a name; I personally went with `PiHole`, but you can use whatever makes sense to you. Leave **Execute container using high privilege** unchecked, then click on the **Advanced** **Settings** button.

![](/assets/images/pihole-config-01.jpg) 

Once in **Advanced Settings**, check the box the **Enable auto-restart**. This will ensure Pi-hole restarts if you ever need to reboot your Synology.

Next, go to the **Volume** tab and add the two folders you created earlier, mapping them to the following directories:

<table>
  <tr>
    <td>
      <strong>Folder</strong>
    </td>

    <td>
      <strong>Mount Path</strong>
    </td>
  </tr>

  <tr>
    <td>
      docker/pihole/dnsmasq.d
    </td>

    <td>
      /etc/dnsmasq.d
    </td>
  </tr>

  <tr>
    <td>
      docker/pihole/pihole
    </td>

    <td>
      /etc/pihole
    </td>
  </tr>
</table>

Once you're done adding the folder mappings, it should look like this:

![](/assets/images/pihole-config-02.jpg)  

Next, go to the **Network** tab and enable the option to **Use the same network as Docker Host**.

![](/assets/images/pihole-config-03.png) 

The final step is to go to the **Environment** tab so we can add/change a few environment variables. There are three variables we need to add, and one we need to edit.

Let's start with the new variables first:

<table>
  <tr>
    <td>
      <strong>Variable</strong>
    </td>

    <td>
      <strong>Value</strong>
    </td>
  </tr>

  <tr>
    <td>
      WEBPASSWORD
    </td>

    <td>
      [your_pi-hole_password]
    </td>
  </tr>

  <tr>
    <td>
      DNSMASQ_LISTENING
    </td>

    <td>
      local
    </td>
  </tr>

  <tr>
    <td>
      WEB_PORT
    </td>

    <td>
      8080
    </td>
  </tr>
</table>

For the `WEBPASSWORD` variable, set this to whatever you want the Pi-hole login password to be. For `WEB_PORT` use any port you have available, `8080` should work for most people.

Next we need to edit the `ServerIP` variable. The default value is `0.0.0.0`. You need to change this to your Synology's internal IP address. For me, this is `192.168.0.2`.

![](/assets/images/pihole-config-04.png)

Finally, click on the **Apply** button and start your shiny new Pi-hole container.

Once it's up and running, you should be able to navigate to `http://<synology-ip>:<pi-hole-port>/admin` (for me this would be `http://192.168.0.2:8080/admin`) to access Pi-hole.

<p class="notice">
  Note: This will only be accessible on your local network. I wouldn't recommend exposing Pi-hole to the Internet.
</p>

To login, use the password you created when you added the `WEBPASSWORD` environment variable. You should now see a dashboard similar to this:

![](/assets/images/pihole-dashboard.jpg) 

## Next steps {#h-next-steps}

Now you have Pi-hole up and running on your Synology, you will need to change the DNS settings on your router so that DNS points to your Pi-hole and not your router.

This process all depends on which router you have. So find the DNS/DHCP settings on your router and change the primary DNS server to the IP address of your Synology.

I would also recommend setting the secondary DNS as your router, or a service like <a href="https://www.quad9.net/" target="_blank" rel="noreferrer noopener">Quad 9</a>. So you will still be able to resolve DNS queries if Pi-hole goes down.

Once your client machines start getting new DHCP leases from your router, the DNS changes should take place and you will see the client numbers grow within Pi-hole. To speed up this process, disconnect and reconnect any devices from the network.

Finally, I'd recommend changing the default public DNS servers that Pi-hole uses. Pi-hole uses Google DNS by default and since I'm a <a href="/de-googling-my-life-2-years-on/" target="_blank" rel="noreferrer noopener">de-Googled</a> kinda guy, I don't like this. Instead I set them to Quad 9.

You can do this by going to Settings > DNS:

![](/assets/images/pihole-public-dns.jpg)  

## Conclusion {#h-conclusion}

You should now be setup with Pi-hole on your Synology NAS. No more ads, no more tracking, and no more ISP monitoring of your DNS. Pretty cool, huh?

In terms of performance impact on your Synology, there will be very little. On my network, the Pi-hole container uses around 30MB of RAM and the CPU usage doesn't even register. So even if you have a fairly low powered Synology, you should still be fine.

Hosting Pi-hole on the Synology is much more robust than on the Raspberry Pi. While the Pi is great for hacking on, it's not the right kind of hardware to be used as a server in my opinion.

Finally I'd like to quickly add that if you get use out of your Pi-hole instance, please remember to <a href="https://pi-hole.net/donate/" target="_blank" rel="noreferrer noopener">throw the project a donation</a>. It will really help support this great project and keep it alive.
