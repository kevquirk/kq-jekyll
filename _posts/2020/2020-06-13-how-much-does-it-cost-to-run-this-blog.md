---
id: 2133
title: How Much Does It Cost To Run This Blog?
date: 2020-06-13T17:43:01+01:00

layout: post
permalink: /how-much-does-it-cost-to-run-this-blog/
description:
  - My wife recently asked me how much it costs me to run this blog. So I thought I would share to give a general idea how much it costs to run a blog.
categories:
  - Blogging
---
**My wife recently asked me how much it costs me to run this blog. I wasn't really sure to be honest, so I looked into it and the results were surprising. So I thought I would share the details to give you guys a general idea how much it costs to run a blog.**

[Starting a blog](/how-to-start-a-blog-if-youre-not-a-nerd/) is very simple to do, and can cost you nothing except your time. But over time your blog will likely grow, and with it your needs and therefore your costs will rise too. I've been running this blog for a few years now and that's certainly been the case for me at least.

So a few nights ago I was working on my blog (as I often do) and my wife said&#8230;

> You spend so much time working on that website. How much do you think it costs us every month?
>
> <cite>My wife</cite>

_Good question_, I thought. I obviously had a rough idea of how much this blog costs me, but there are that many moving parts to it these days, I wasn't completely sure.

If I had been put on the spot right that second, I would have guessed around £40 ($50) per month. But I wanted to know for sure&#8230;

## Preface {#h-preface}

I want to preface this post with a little bit of information about my traffic numbers, as traffic volume tends to have a direct correlation to the costs involved with hosting a site.

Here is a breakdown of my visitor stats so far in 2020. If you want to know more about what each column means, take a look at the [AWStats glossary](https://awstats.sourceforge.io/docs/awstats_glossary.html).

![](/assets/images/visitor-stats-june-2020.png) 

So my overall page views for this site is approximately half a million per month. Ignore the _Hits_ column as that doesn't equate to true visitor numbers.

**Note:** these numbers do **not** include web crawlers, such as search engine bots.

## How much does it cost to run my blog? {#h-how-much-does-it-cost-to-run-my-blog}

Ok so like I said, if I were to estimate my running costs, I would have guessed around £40 ($50) per month. But I wasn't sure, so I sat down to work it out and the results are listed below.

**Note:** many of the payments I make for this blog are annual, but monthly costs seemed easier to digest. Therefore everything is broken down into their equivalent monthly prices.

<table>
  <tr>
    <td>
      <strong>Item</strong>
    </td>

    <td>
      <strong>Monthly Cost</strong>
    </td>
  </tr>

  <tr>
    <td>
      Domain registration
    </td>

    <td>
      £0.49 ($0.62)
    </td>
  </tr>

  <tr>
    <td>
      VPS hosting
    </td>

    <td>
      £12.00 ($15.23)
    </td>
  </tr>

  <tr>
    <td>
      DNS hosting
    </td>

    <td>
      £1.54 ($1.95)
    </td>
  </tr>

  <tr>
    <td>
      WP Rocket plugin
    </td>

    <td>
      £0.79 ($1.00)
    </td>
  </tr>

  <tr>
    <td>
      ShortPixel credits
    </td>

    <td>
      £0.65 ($0.83)
    </td>
  </tr>

  <tr>
    <td>
      Updraftplus SFTP plugin
    </td>

    <td>
      £0.79 ($1.00)
    </td>
  </tr>

  <tr>
    <td>
      Yoast SEO plugin
    </td>

    <td>
      £8.90 ($11.30)
    </td>
  </tr>

  <tr>
    <td>
      <strong>Total:</strong>
    </td>

    <td>
      <strong>£25.16 ($31.93)</strong>
    </td>
  </tr>
</table>

**That's nearly half what I was expecting. Happy with that!**

You may be thinking that all the services listed above are excessive for a personal blog like this one. And you may well be right, dear reader, but these service all have a purpose. Let's discuss further&#8230;

## Domain registration {#h-domain-registration}

I use [Namecheap](https://shrsl.com/2awpe) for all my domain registrations. Mainly because they're really cheap, costing less than £8.00 ($10.00) per year for the `kevq.uk` domain.

They also offer domain privacy for free, so your details are hidden from the WhoIs database. I believe this is now free for all `.uk` domains, but Namecheap offer this service across all of their domains, no matter what the extension.

If you're considering buying a domain name, you may want to [read this post](/choosing-the-right-domain-name-for-your-blog/) about choosing the right one.

## VPS hosting {#h-vps-hosting}

I use Ionos (formerly 1&1) as my [VPS hosting provider](https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357003T7073a&kwk=634887631). While they're not the cheapest of VPS providers around, their service has been excellent for me.

Plus their servers all have the option of having the Plesk control panel installed for free, which makes managing the web server **really** simple. I also think that Plesk is superior to cPanel.

![](/assets/images/ionos-vps-packages.png)

I personally have the **VPS M** package, which gives me an 80GB SSD, 2GB RAM and 2 virtual CPU cores. This is more than enough for my current needs, as the graphs below show&#8230;

![](/assets/images/server-cpu-graph.png)

![](/assets/images/server-ram-graph.png)

£12 (~$15) per month may sound expensive, but when you look at a comparable server on [Digital Ocean](https://www.digitalocean.com/pricing/), the deal with Ionos is actually better.

**Note:** the extra £2 I pay monthly is tax.

<table>
  <tr>
    <td>
    </td>

    <td>
      <strong>Ionos</strong>
    </td>

    <td>
      <strong>Digital Ocean</strong>
    </td>
  </tr>

  <tr>
    <td>
      <strong>RAM</strong>
    </td>

    <td>
      2GB
    </td>

    <td>
      2GB
    </td>
  </tr>

  <tr>
    <td>
      <strong>CPU</strong>
    </td>

    <td>
      2x vCPU
    </td>

    <td>
      2x vCPU
    </td>
  </tr>

  <tr>
    <td>
      <strong>Bandwidth</strong>
    </td>

    <td>
      Unlimited
    </td>

    <td>
      3TB
    </td>
  </tr>

  <tr>
    <td>
      <strong>Storage</strong>
    </td>

    <td>
      80GB SSD
    </td>

    <td>
      60GB SSD
    </td>
  </tr>

  <tr>
    <td>
      <strong>Control Panel</strong>
    </td>

    <td>
      Plesk (optional)
    </td>

    <td>
      None
    </td>
  </tr>

  <tr>
    <td>
      <strong>Price per month</strong>
    </td>

    <td>
      <strong>£12 ($15.23)</strong>
    </td>

    <td>
      <strong>£11.82 ($15)</strong>
    </td>
  </tr>
</table>

## DNS hosting {#h-dns-hosting}

DNS hosting isn't necessary for many users. Actually, it probably isn't necessary for me either, as I can configure DNS either using Plesk on my server, or with Namecheap.

However, I prefer to separate web and DNS hosting, and having a separate host for my DNS means I also have DDoS protection.

My DNS hosting is provided by [ClouDNS](https://www.cloudns.net/aff/id/74311/). I've used them for years and their service really is excellent. They also have a free tier if you want to give them a try.

Like I said, external DNS hosting isn't a necessity, but I prefer to have it.

## Content Delivery Network (CDN) {#h-content-delivery-network-cdn}

My VPS is hosted in an Ionos data-centre in the UK. If you're also in the UK, my site should load nice and quick. However, if you're in New Zealand my site needs to be transmitted to the other side of the globe before you see it.

CDNs help with that issue by caching the majority of my site on servers distributed throughout the globe. So wherever you visit my site from, my CDN provider will connect you to the closest server to you geographically. This can significantly reduce load times.

I use [Bunny CDN](https://bunnycdn.com/?ref=gnn7bkvipc) as I really like their pay as you go approach to charging for their service. With my traffic numbers, that's only around 80p ($1) per month. Which is a ridiculously small amount compared to other CDN providers.

## WordPress plugins {#h-wordpress-plugins}

That's the end of the external hosting charges that I pay every month. But I also have annual subscriptions to a number of premium WordPress plugins and services that keep my blog ticking along.

### WP Rocket {#h-wp-rocket}

[WP Rocket](https://wp-rocket.me) is probably the best caching plugin I've ever used. I know there are [alternative caching plugins](https://wordpress.org/plugins/search/cache/) out there, many of which are free. But what I like about WP Rocket is that it can be as simple or as complicated as you need it to be.

If you just want some basic caching, check a box in the admin UI and the WP Rocket defaults will optimise your site really well. If you're more technical and want to go into the weeds of caching, WP Rocket will let you do that too.

WP Rocket also has CDN support out of the box. So to get this site working with Bunny CDN, all I have to do it enter my CDN pull zone into WP Rocket, and it does the rest.

![](/assets/images/wp-rocket-cdn-config.png)  

At the time of writing this post, the [WP Rocket](https://wp-rocket.me) team are close to releasing their next version which includes font pre-loading. This is going to be huge for site owners who [use their own fonts](/whats-in-a-font-researching-website-typography/), like me.

### Yoast SEO {#h-yoast-seo}

Around £9.00 ($11.00) a month for an SEO plugin seem expensive, right? It is, and it's a big chunk of the cost of running this blog. But [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) is crucial if you want to get organic visitors. I don't know a great deal about SEO, but the Yoast plugin allows me to get SEO right so I can concentrate on writing content.

There is a free version of Yoast SEO, which [I have used for years](/writing-with-seo-in-mind/) without issue. But the paid version has a few goodies that the free one doesn't. Including multiple keywords, synonyms and prompts for things like internal linking.

The feature I use the most though is their readability analysis, which tells you in real-time how well written your post is.

To be honest, I could get by just fine with the free version of [Yoast SEO](https://yoast.com/wordpress/plugins/seo/), but I think their plugin is superb, so I wanted to support them by paying for a plugin I get so much use from.

### ShortPixel {#h-shortpixel}

[ShortPixel](https://shortpixel.com/otp/af/DPJPTHN1231799) is a free service that optimises your images as you upload them to WordPress. Images are usually the largest part of a website, so [optimisation is important](/how-i-optimise-my-website-performance/) to ensure your pages load quickly.

By default you get 100 free optimised images per month, but that usually isn't enough for me, so I bought an image optimisation bundle to bolster the free credits I get.

The great thing about ShortPixel is that it can significantly reduce the size of your images without any obvious loss of quality.

Thanks go to [Nathan Degruchy](https://degruchy.org/) for the original recommendation.

### Updraftplus SFTP {#h-updraftplus-sftp}

[Backups are ridiculously important](/i-nearly-lost-all-of-my-data/) and that's what [UpdraftPlus](https://updraftplus.com/) does - it backs up WordPress. Again, this is a free plugin, but I've purchased an addition to UpdraftPlus that allows me to backup to my Synology NAS via SFTP.

On the free version of the plugin, you can backup locally, to an FTP server, or to services like Dropbox and Google Drive. I wouldn't recommend using FTP though, as credentials are transmitted in the clear. That's why I bought the SFTP add-on, as it does this securely over SSH.

## Time costs of running a blog {#h-time-costs-of-running-a-blog}

Time is something you need to consider when running a blog, as it's the thing you will burn the most of. The average long-form (1,000+ word) post will take me a minimum of 8 hours to research, write and edit.

I designed the theme on this blog, so development tweaks take up roughly 8 hours or so a week. Finally there's responding to comments and engaging with readers. That's **easily** another 4-5 hours a week on top.

On average I will publish around 2 posts per week, so that's **around 28 hours a week that I spend working on my blog**. Most weeks are probably more that that though these numbers don't include writing shorter posts, updating pages & existing posts, as well as working on new ideas for the blog.

## Conclusion {#h-conclusion}

In terms of money, running this blog - or any blog for that matter - doesn't cost a great deal. The main cost of running a blog is **time**.

None of the plugins and services I've listed above are necessary for running a blog - you can easily run a basic blog on [Blogger](https://blogger.com) or [WordPress.com](https://wordpress.com) for free.

But if you want the performance and flexibility a self-hosted blog provides, you're going to have to put your hand in your pocket unfortunately. The bright side is that it doesn't actually cost _that_ much to run a blog. 🙂

**How do you run your blog? Why not tell me about it in the comments below.**
