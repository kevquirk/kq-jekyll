---
title: How I Optimise My Website Performance
layout: post
permalink: /how-i-optimise-my-website-performance/
description:
  - WordPress is not slow. This site uses WordPress and is pretty darn quick. This post talks about how my website is configured for performance.
categories:
  - Technology
  - Web
---
{: .tldr}
WordPress is not slow. This website uses WordPress and is pretty darn quick, I think you will agree? In this post I want to talk a little bit about how I&#8217;ve optimised the performance of this website so that it loads in less than 2 seconds.

I recently wrote about why I think [WordPress isn&#8217;t slow](https://kevq.uk/the-case-for-wordpress/), and that people should probably give it some slack. But I wanted to go into some detail in this post about what optimisations I&#8217;ve made in order to achieve good website performance.

## Testing Speed {#h-testing-speed}

[According to MachMetrics](https://www.machmetrics.com/speed-blog/average-page-load-times-for-2020/), the average load time for a website is 4.7 seconds on desktop and 11.4 seconds on mobile. Also, the average size of a website is 1.9MB.

Below are some stats from [GTMetrix](https://gtmetrix.com/), where I have tested the speed of one of my heavier pages that contains a number of images ([how online tracking works](https://kevq.uk/how-online-tracking-works/)):

![London test results](/assets/images/wp-images/2020/03/website-test-london.jpg)
*London test results*

![Dallas test results](/assets/images/wp-images/2020/03/website-test-dallas.jpg)
*Dallas test result*

![Sydney test results](/assets/images/wp-images/2020/03/website-test-sydney.jpg)
*Sydney test results*

My server is located in London, so that&#8217;s why the London test is **_really_** quick at less than half a second. But how did I manage to get speeds way below the average for tests in America and Australia, especially on a web page that contains 4 large images?

## Optimisations {#h-optimisations}

In order to have consistent, high quality website performance, you really need to be working at it from the beginning. There are a number of steps I take to maintain good performance:

  1. Use a good quality host
  2. Have a lightweight WordPress theme
  3. Optimise all images
  4. Utilise caching where possible
  5. Use a Content Delivery Network (CDN)

## Good Quality Hosting {#h-good-quality-hosting}

If you head over to GoDaddy, or Bluehost, or Hostgator, or any one of the many other shared hosting providers, you will be able to get a hosting package very cheap. In some cases, just a couple pounds/dollars a month.

While that sounds great on the surface, with hosting you really do get what you pay for. _Shared hosting_ means that you share server resources with an untold number of other customers. So if any one of them has a poorly optimised website, is consuming a large number of resources on your shared server, or if the host over-subscribes their servers, then you&#8217;re going to end up with a **_really_** slow site.

To host this site, I use a [VPS from Ionos](https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357009T7073a&kwk=634887631). It has a dual core CPU, 120GB of SSD storage and 4GB RAM. This provides plenty of capacity for this site, and all the other sites I own. Even if I have a spike in traffic, like when I&#8217;ve had posts hit the front page of HackerNews, my website was still fast.

## Lightweight Theme {#h-lightweight-theme}

When I moved from [Grav back to WordPress](https://kevq.uk/coming-full-circle-from-grav-to-wordpress/), I decided from the start that I wanted to use a lightweight theme. I don&#8217;t need tracking pixels, or sharing options, or a sidebar, or even a commenting system. So I decided to take the incredible [Susty theme](https://sustywp.com/) ([Github](https://github.com/jacklenox/susty)) and make it my own. The result is the site you see now.

Because this site has very little going on within its pages (outside of the content), there are fewer items to load and fewer parts to stitch together. Therefore, the site loads much quicker, even without optimisations.

## Optimise Images {#h-optimise-images}

The max width for the content section of this website is `1000px`. So if I ever add an image to a post, I always make sure it is no wider than 1000px. Anything bigger is just wasted pixels and wasted space.

<img loading="lazy" width="1000" height="422" src="/assets/images/wp-images/2020/03/website-content-section.jpg" alt="Content Max-Width" class="wp-image-1286" srcset="/assets/images/wp-images/2020/03/website-content-section.jpg 1000w, /assets/images/wp-images/2020/03/website-content-section-300x127.jpg 300w, /assets/images/wp-images/2020/03/website-content-section-768x324.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" />  

I also try to ensure that every one of my images is less than 100KB in size. I usually do this editing and optimisation in [GIMP](https://www.gimp.org/) before uploading. If the width of your content area is 700px, don&#8217;t upload images any wider than that. It&#8217;s just a waste.

## Enable Caching {#h-enable-caching}

I can&#8217;t stress how important this is. Caching is a minefield and can be pretty complicated to get right. But if you configure content caching, CSS/JS minification and Gzip compression, you should notice some significant performance boosts.

There are a lot of caching plugins out there for WordPress. I personally use [WP Rocket](https://wp-rocket.me), which costs $49/year, but it&#8217;s so worth it! If you don&#8217;t want to pay out for WP Rocket, [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) is a free alternative that is also very good.

## Use A CDN {#h-use-a-cdn}

A [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN) is a way of distributing your website geographically, so that it&#8217;s always served from a server near your visitors. Basically it serves cached copies of your website from all over the world. So if someone visits your site from the other side of the world, the website is served from the CDN&#8217;s closest server to your visitor, not your main server.

Shorter geographical distances means quick response times, which in turns means quicker load times for your website.

For this site, I use [BunnyCDN](https://bunnycdn.com/?ref=gnn7bkvipc). They&#8217;re very cheap and their service is great. Plus, combining BunnyCDN with WP Rocket is very simple to do. It takes literally 2 minutes.

## Putting It All Together {#h-putting-it-all-together}

Let&#8217;s do a real world test of what all of this work actually does. Below is a GTMetrix test of the same page I tested earlier. The only difference is that on one of the tests I have appended `/?nocache`, which tells my server not to load any of the optimisations for that session.

As you can see, the differences between the results are significant:

![With optimisations enabled](/assets/images/wp-images/2020/03/website-test-dallas.jpg)
*With optimisations enabled*

![Withouy optimisations enabled](/assets/images/wp-images/2020/03/website-test-dallas-nocache.jpg)
*Without optimisations enabled*

My website loaded nearly a full second quicker with the optimisations enabled. That&#8217;s and improvement of around 30% and remember, we still have the image optimisations and lightweight theme in place.

The number of requests drops from 29 to 12, and the physical size of the website is nearly half, at 355KB instead of 656KB.

## What Does It Cost? {#h-what-does-it-cost}

Ok, so let&#8217;s talk money &#8211; a good quality host, premium caching plugins and a CDN all cost money &#8211; but they won&#8217;t break the bank. Here&#8217;s a breakdown of what this website costs me to run:

<table>
  <tr>
    <td>
      <strong>Item</strong>
    </td>

    <td>
      <strong>Cost</strong>
    </td>
  </tr>

  <tr>
    <td>
      Ionos VPS Hosting
    </td>

    <td>
      £12.00/month
    </td>
  </tr>

  <tr>
    <td>
      WP Rocket Plugin
    </td>

    <td>
      £4/month
    </td>
  </tr>

  <tr>
    <td>
      BunnyCDN
    </td>

    <td>
      £1.50/month*
    </td>
  </tr>

  <tr>
    <td>
      <strong>Total:</strong>
    </td>

    <td>
      <strong>£17.50/month</strong>
    </td>
  </tr>
</table>

_* The cost of BunnyCDN differs from month to month depending on the amount on bandwidth I&#8217;ve used. This is an average. [Pricing details here](https://bunnycdn.com/pricing)._

## Conclusion {#h-conclusion}

Yes, WordPress _can_ be slow, but it doesn&#8217;t have to be. Through optimisation, I&#8217;ve managed to create a website that performs really well, even when under significant load.

If you have any questions about website performance, or any of the optimisations I&#8217;ve listed in this post, or if you think I could be doing more to optimise my site, please [let me know](https://kevq.uk/contact/).
