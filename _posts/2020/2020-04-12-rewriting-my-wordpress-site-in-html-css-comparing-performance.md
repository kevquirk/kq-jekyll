---
title: 'Rewriting My WordPress Site In HTML/CSS &#038; Comparing Performance'
layout: post
permalink: /rewriting-my-wordpress-site-in-html-css-comparing-performance/
description: I decided to rewrite my WordPress site in HTML/CSS and compare their performance. It's a been a fun project, but will I migrate?
categories:
  - Technology
  - Web
---
{: .tldr}
I recently wrote a post about [why I don&#8217;t use a static site generator](https://kevq.uk/why-i-dont-use-a-static-site-generator/). After that post, I decided to fork my site to HTML/CSS to see how quicker it would be.

This weekend is Easter weekend here in the UK. That means a 4-day weekend; couple that with isolation due to COVID-19 and I have a lot of time on my hands. So I decided to rewrite my WordPress site in HTML/CSS and compare their performance.

## All HTML/CSS* {#h-all-html-css}

I've completely hand coded that entire site. It isn't generated using a [static site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) (SSG), so you may see a few typos in the code. The site is entirely HTML/CSS with one exception.

There is a single line of JavaScript on the `Close` button when in the menu. This is because the menu is a separate HTML page, so clicking the `Close` button invokes a tiny line of JS that takes you back 1 page.

`javascript:history.back()`

<p class="notice">
  If you know how to accomplish this without JavaScript, please do <a href="/contact/">let me know</a>.
</p>

I haven't forked every post, as that would take too long (more on that later). But I have forked most pages on this site, as well as a few of my recent posts.

## Speed Comparison {#h-speed-comparison}

Ok, lets run some tests to see how the static version of this site compares to the WordPress one. I decided to use my [Drawing A Sugar Skull](/drawing-a-sugar-skull-in-procreate/) post for the tests. Mainly because it has lots of large images, and is probably the heaviest single page on this site.

[I've optimised this site](/how-i-optimise-my-website-performance/) by adding caching, a CDN and a few other bits. For the static site all I did was use the same optimised images, and configured Nginx caching & Gzip compression. Nothing fancy there.

For these tests I'm going to use [GTmetrix](https://gtmetrix.com/), and since my web server is located in the UK, I'll be testing from London with Firefox.

### WordPress Performance {#h-wordpress-performance}

![](/assets/images/gtmetrix-kq-wp-results.png)

With all the optimisations I've made, the WordPress page is 1.24MB in total, creates 19 requests and loads in 0.8 seconds. I'm pretty happy with that for such a heavy page. If you want to read the full report, you can [download the PDF here](/_assets/files/GTmetrix-report-kevq.uk-wordpress.pdf).

WordPress did pretty well, but let's see how the static version of that page will do.

### Static Site Performance {#h-static-site-performance}

![](/assets/images/gtmetrix-kq-static-results.png)

Don't worry about the YSlow score - that is reduced because I'm not using a CDN and I haven't set `expires headers` on the static site.

So we're pretty close here. The static version of my post is also loading in 0.8 seconds. The page is around 400KB larger than my WordPress site, and the request number is the same. You can download the full report for the static site [here (PDF)](/_assets/files/GTmetrix-report-testing.kevq_.uk-static.pdf).

## Conclusions {#h-conclusions}

I think it's interesting that the speed tests were exactly the same for both sites. However, I haven't done any significant optimisations to the static version of the site, so I'm confident I could get it running a little faster than WordPress.

But at 0.8 seconds for either site, would shaving a few milliseconds off either time really make that much of a difference? Probably not, I think.

## Will I Migrate? {#h-will-i-migrate}

Rewriting my WordPress site in HTML/CSS has been a lot of fun, and an interesting experiment. It has showed that WordPress and static site performance can be comparable. I've also proven (I think) that it is possible to make good looking, functional sites in HTML and CSS only, albeit with a single line of JavaScript. 🙂

I won't be migrating away from WordPress any time soon though. That's because manually managing every aspect of the site would be a nightmare.

### Limitations {#h-limitations}

When I write a post on WordPress, I type it up, add a category or two and hit publish. Job done.

On the static site, I'd have to write the content of the post in a markdown editor, then export it to HTML and paste the result into the body of the post HTML.

Obviously I could just code the post direct into the HTML page, but markdown is easier to write with, I think.

I'd then have to set all the metadata for the post, for SEO. Set the page title, and upload the HTML file along with images etc. Once that's done, I'd then need to edit my homepage to include the link to the new post, then move the oldest post link into an archives page.

I'd also have to update any category pages with the link, as well as update my RSS feeds and sitemap. That's a lot of work for very little savings in page load times!

Yes, I could use a static site generator to do all that for me, but then I'd introduce the issues I spoke about in [my previous post](/why-i-dont-use-a-static-site-generator/).

I'm happy I rewrote my WordPress site in HTML/CSS it was a fun little project. But overall I think I will be sticking with WordPress. If anyone wants me to release the code for the static site, let me know and I'll dump it on Github or something.

## Update (13th April 2020) {#h-update-13th-april-2020}

This morning I got an email from a gentleman called Ben. In his email he claimed that I had made a significant mistake in my testing, because the images on the static site are a lot larger than those on WordPress.

I copied the images straight from WordPress, so my initial reaction was that Ben was wrong and this couldn't possibly be the case. Surely I'm not _that_ stupid? (don't answer that)

After doing some digging, I worked out what went wrong - I did copy the images from WordPress, but I was logged in when I copied them. When logged in, none of the optimisations are loaded so I can see any changes I make immediately and caching doesn't get in the way.

This means that I downloaded the raw images, not the optimised images that are served by my CDN.

#### So, ladies and gentlemen, I am that stupid! {#h-so-ladies-and-gentlemen-i-am-that-stupid}

### Fixing The Problem {#h-fixing-the-problem}

I have now edited the [static version of the post](https://static.kevq.uk/drawing-a-sugar-skull-in-procreate/index.html) so that the images are pulled straight from the CDN. This ensures the images are exactly the same. It also made the page size of each site much closer, with the static site now being 1.12MB and WordPress being 1.24MB. Both sites still produce 19 requests.

To make the comparison even fairer, I cleared the cache on both sites, then conducted 5 speed tests to get an average. Again, this was using GTmetrix from London, using Firefox. Here are the results:

<table>
  <tr>
    <td>
    </td>

    <td>
      Test 01
    </td>

    <td>
      Test 02
    </td>

    <td>
      Test 03
    </td>

    <td>
      Test 04
    </td>

    <td>
      Test 05
    </td>

    <td>
      Avg
    </td>
  </tr>

  <tr>
    <td>
      Static Site
    </td>

    <td>
      1.1s
    </td>

    <td>
      0.8s
    </td>

    <td>
      0.49s
    </td>

    <td>
      0.7s
    </td>

    <td>
      0.6s
    </td>

    <td>
      0.738s
    </td>
  </tr>

  <tr>
    <td>
      WordPress
    </td>

    <td>
      1.2s
    </td>

    <td>
      1.1s
    </td>

    <td>
      0.8s
    </td>

    <td>
      0.8s
    </td>

    <td>
      0.7s
    </td>

    <td>
      0.92s
    </td>
  </tr>
</table>

### New Conclusions? {#h-new-conclusions}

The results are more accurate now, but they haven't changed my mind - I still think a WordPress site is better than HTML/CSS for my needs. With the difference in the average load time being just 200ms, I believe the advantages WordPress gives me are worth the 200ms deficit.

Finally, I'd like to thank Ben for pointing out my _stupid_ mistake. I can't believe I made such a schoolboy error, but I am glad I had the opportunity to fix the issue and provide you guys with more accurate data.