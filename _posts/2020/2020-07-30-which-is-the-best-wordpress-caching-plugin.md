---
id: 2511
title: Which Is The Best WordPress Caching Plugin?
date: 2020-07-30T15:33:04+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2511
permalink: /which-is-the-best-wordpress-caching-plugin/
description:
  - I wanted to dig into which is the best WordPress caching plugin. I tested some of the most popular caching plugins available and this post is the result.
categories:
  - Technology
---
I&#8217;ve talked about [how I optimise this site](https://kevq.uk/how-i-optimise-my-website-performance/) before, but I wanted to do some digging into which is the best WordPress caching plugin. I&#8217;ve tested some of the most popular caching plugins available, and decided to write this post with the results.

## Testing WordPress caching plugins {#h-testing-wordpress-caching-plugins}

Before I get into the results, let&#8217;s talk about how I actually went about testing each plugin, so you have an idea of what I tested and how.

My friend and <a href="https://fosstodon.org" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener">Fosstodon</a> colleague, [Matt Cooper](https://fosstodon.org/@cooper), kindly offered to give me a test WordPress site on his shared hosting account with Hostinger. From there I created a 1,200 word post using [Lorem Ipsum generated text](https://getlorem.com/). I also added a 140KB image as the featured image.

I kept all of the WordPress settings default, except for the permalink structure, which I set to `post-name`. All plugins were removed and I used the default [Twenty Twenty WordPress theme](https://wordpress.org/themes/twentytwenty/).

## Which WordPress caching plugins were tested? {#h-which-wordpress-caching-plugins-were-tested}

There are a lot of caching plugins available for WordPress, but for this test I went with the 4 most popular plugins I could find, which are:

  1. <a aria-label="undefined (opens in a new tab)" href="https://wordpress.org/plugins/litespeed-cache/" target="_blank" rel="noreferrer noopener">LiteSpeed Cache</a>
  2. <a aria-label="undefined (opens in a new tab)" href="https://wordpress.org/plugins/w3-total-cache/" target="_blank" rel="noreferrer noopener">W3 Total Cache</a>
  3. <a aria-label="undefined (opens in a new tab)" href="https://wordpress.org/plugins/wp-fastest-cache/" target="_blank" rel="noreferrer noopener">WP Fastest Cache</a>
  4. <a aria-label="undefined (opens in a new tab)" href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">WP Rocket</a> (premium plugin)

I installed each of these plugins in turn, then configured them as best I could. At first I was going to figure out a baseline and configure them all as closely as each other, but I later decided that this was unfair.

We&#8217;re looking for the best WordPress caching plugin here, so I wanted to test all the bell and whistles each plugin offers so that I could get a true representation of what they can do to a site&#8217;s performance.

## How was the testing carried out? {#h-how-was-the-testing-carried-out}

Once I had established which WordPress caching plugins I was going to test, I headed over to <a aria-label="undefined (opens in a new tab)" href="https://gtmetrix.com" target="_blank" rel="noreferrer noopener">GTMetrix</a> to carry out the tests. The server that Matt&#8217;s shared hosting account is on is located on the east coast of the US. The closest GTMetrix server is located in Dallas, TX. So I went with that. I also selected Firefox as the test browser.

<img loading="lazy" width="1024" height="360" src="/assets/images/wp-images/2020/07/test-site-gtmetrix-results-1024x360.png" alt="GTMEtrix test results" class="wp-image-2662" srcset="/assets/images/wp-images/2020/07/test-site-gtmetrix-results-1024x360.png 1024w, /assets/images/wp-images/2020/07/test-site-gtmetrix-results-300x105.png 300w, /assets/images/wp-images/2020/07/test-site-gtmetrix-results-768x270.png 768w, /assets/images/wp-images/2020/07/test-site-gtmetrix-results.png 1320w" sizes="(max-width: 1024px) 100vw, 1024px" />  

I tested the same page without WordPress caching so I could get a baseline, then with each caching plugin listed above.

Tests were carried out 6 times for each caching plugin. The first test was ignored, the rationale being that it allowed GTMetrix to generate the cache for the subsequent 5 tests that I ran, which I then took an average of. This, I think, gave a good idea of how the WordPress caching plugins were improving performance.

## The results {#h-the-results}

GTMetrix gives a tonne of data for users to sift though, but I focussed on 3 metrics for my testing:

  1. Load time in seconds
  2. Total page size
  3. Number of requests

<table>
  <tr>
    <td>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>AVG Load Time</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>Page Size</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>Requests</strong>
    </td>
  </tr>

  <tr>
    <td>
      <strong>No caching</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      2.26
    </td>

    <td class="has-text-align-center" data-align="center">
      194 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      9
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://wordpress.org/plugins/litespeed-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>LiteSpeed Cache</strong></a>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.36
    </td>

    <td class="has-text-align-center" data-align="center">
      185 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      7
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://wordpress.org/plugins/w3-total-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>W3 Total Cache</strong></a>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.36
    </td>

    <td class="has-text-align-center" data-align="center">
      195 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      7
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://wordpress.org/plugins/wp-fastest-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>WP Fastest Cache</strong></a>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.26
    </td>

    <td class="has-text-align-center" data-align="center">
      195 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      8
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>WP Rocket</strong></a>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.46
    </td>

    <td class="has-text-align-center" data-align="center">
      185 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      6
    </td>
  </tr>
</table>

It was great to see that _all_ the caching plugins improved load times. The quickest of which, WP Fastest Cache, knocked a full second off.

I did think there would be more of a difference between the different caching plugins though. I was also _really_ surprised to see that WP Rocket, a premium plugin that costs $45/year, was the slowest.

Having said that, we&#8217;re only talking about 2 tenths of a second between the fastest and slowest caching plugins. And when navigating around the test site, I didn&#8217;t really notice a difference in load times when using any WordPress caching.

## Real world testing {#h-real-world-testing}

The test site I used was great, and gave me good data, but I wanted to see what these plugins could do with a site that has a lot more to their posts. While 1,200 words and a single image is indicative of many blog posts, I think a post with roughly the same amount of words, multiple images and comments would be a better test.

So I decided to carry out the same tests on one of my posts. My most recent post, [Synology vs Nextcloud](https://kevq.uk/synology-vs-nextcloud-which-is-better-for-a-home-server/), seemed a good candidate.

It&#8217;s 1,400 words, 3 images and 66 comments (each with an avatar). This means that the WordPress caching has to do a lot more work because it&#8217;s loading things like analytics, an advert and commenter avatars. It&#8217;s also doing some [IndieWeb](https://kevq.uk/implementing-the-indieweb-into-my-website/) goodness too.

## Results round 2 {#h-results-round-2}

So I went ahead and carried out exactly the same tests on my Synology vs Nextcloud post. Here&#8217;s the results for that post:

<table>
  <tr>
    <td>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>AVG Load Time</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>Page Size</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      <strong>Requests</strong>
    </td>
  </tr>

  <tr>
    <td>
      <strong>No caching</strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.98
    </td>

    <td class="has-text-align-center" data-align="center">
      2.32 MB
    </td>

    <td class="has-text-align-center" data-align="center">
      62
    </td>
  </tr>

  <tr>
    <td>
      <strong><a href="https://wordpress.org/plugins/litespeed-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener">LiteSpeed Cache</a></strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.90
    </td>

    <td class="has-text-align-center" data-align="center">
      2.31 MB
    </td>

    <td class="has-text-align-center" data-align="center">
      50
    </td>
  </tr>

  <tr>
    <td>
      <strong><a href="https://wordpress.org/plugins/w3-total-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener">W3 Total Cache</a></strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.64
    </td>

    <td class="has-text-align-center" data-align="center">
      704 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      22
    </td>
  </tr>

  <tr>
    <td>
      <strong><a href="https://wordpress.org/plugins/wp-fastest-cache/" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener">WP Fastest Cache</a></strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.64
    </td>

    <td class="has-text-align-center" data-align="center">
      2.31 MB
    </td>

    <td class="has-text-align-center" data-align="center">
      53
    </td>
  </tr>

  <tr>
    <td>
      <strong><a href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener">WP Rocket</a></strong>
    </td>

    <td class="has-text-align-center" data-align="center">
      1.38
    </td>

    <td class="has-text-align-center" data-align="center">
      961 KB
    </td>

    <td class="has-text-align-center" data-align="center">
      20
    </td>
  </tr>
</table>

I found these results to be far more interesting. First of all, LiteSpeed Cache and WP Fastest Cache didn&#8217;t really manage to reduce the amount of requests, or the page size by much.

I think this is because these plugins didn&#8217;t appear to have an lazy loading option for images (not that I could find anyway). So the entire post, all the images, and all the avatars were loaded right away.

Since W3 Total Cache and WP Rocket both support lazy loading, the page size and request numbers were significantly reduced.

WP Rocket managed to reduce the load time most significantly, but even that was only 60ms quicker than with no caching at all. Again, I was expecting the load times to be improved more than this.

Having said that, the server this site runs on is a VPS that&#8217;s under resourced, so even without caching, WordPress will still loads fairly quickly. If you want more info on my hosting setup, here&#8217;s a post about [what it costs me to run this blog](https://kevq.uk/how-much-does-it-cost-to-run-this-blog/), which explains it all.

This time around there was a noticeable difference, I felt, with W3 Total Cache, WP Fastest Cache and WP Rocket. The LiteSpeed Cache and no caching did feel noticeable slower than the rest.

## What I have learned {#h-what-i-have-learned}

I think the most important lesson I&#8217;ve learned from this testing is that **caching is not a magic pill that fixes all performance issues**. I already have a good quality server, and [I optimise this site in a number of ways](https://kevq.uk/how-i-optimise-my-website-performance/), not just caching.

So I suppose in hindsight the results aren&#8217;t that surprising on my own environment. But I still would have expected more performance to be squeezed out of the shared environment.

I currently pay for WP Rocket, as it&#8217;s widely regarded to be the best out there. Although it did get the best speed results of the WordPress caching plugins that I tested on my site, in the real world it didn&#8217;t feel any quicker than WP Fastest Cache or W3 Total Cache. Plus, it performed the worst on the shared environment.

My WP Rocket license is due for renewal in April 2021, which is a 3 site license costing $99/year. My initial reaction was to not renew this license and instead move to W3 Total Cache, who also have a premium offering. However, that&#8217;s $99/year for 1 site. So I might as well stay put with WP Rocket, especially since it was the fastest in the tests for my site.

## What can you take from this post? {#h-what-can-you-take-from-this-post}

**Do your own testing!** It&#8217;s clear from the testing that I&#8217;ve done, that the results can vary greatly depending on the environment your site is hosted on.

WP Rocket offers a free trial, so [you can still give it a go](https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=), but make sure you test other WordPress caching plugins too, as you may be able to gain more performance with one of the free offerings. Not to mention a few dollars too!

## Conclusion {#h-conclusion}

I&#8217;m really happy with the setup I have, but that&#8217;s a result of lots of testing over the years. Some things have worked, some haven&#8217;t. I&#8217;m glad that my current choice, WP Rocket, ended up being the fastest in my environment, but the free alternatives came very close and were quicker on the shared hosting.

I&#8217;m going to be sticking with WP Rocket when my license is up for renewal in April.

Do you use any of the WordPress caching plugins listed in this post, or this there a hidden gem on the WordPress Plugin library that I have missed? If so, why not tell me about it in the comments below.
