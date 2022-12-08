---
layout: post
image: "/assets/images/static-host-compare-feature.webp"
title: Comparing Static Site Hosts; Which Is The Best Host For A Static Site?
description: I have compared a number of static site hosts to see which is the best in terms of performance, build times and pricing.
date: 2022-01-14 13:02:00 +0000
categories:
- Web
- Technology
rss_only: false
---

{: .tldr}  
I have compared a number of static site hosts to see which is the best *for me* in terms of performance, build times and pricing. This post contains the results of that research.

When I recently flipped from [WordPress to Jekyll](/goodbye-wordpress-switched-to-jekyll/) I had to decide on which host I was going to use. For me, that was a simple choice - [Netlify](https://netlify.com). Mainly because I know their service is great.

But there are a load of other static site hosts out there in the wilds of the Internet; what if Netlify _isn't_ the best of the bunch?

**I decided to test out the theory.**

## Choosing the static site hosts
The first thing I had to do was come up with a list of hosts that I wanted to test. I decided to go with the static site hosts that I thought were most prevalent:

* [AWS Amplify](https://aws.amazon.com/amplify/)
* [Cloudflare Pages](https://pages.cloudflare.com/)
* [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/)
* [GitHub Pages](https://pages.github.com/)
* [Netlify](https://netlify.com)
* [Vercel](https://vercel.com)

This is by no means an exhaustive list, and I'm sure there are others out there, but I think this list covers the main hosts.

## The testing process
Most of the hosting providers above offer a CDN with their service, so I wanted to test their performance from numerous places around the globe.

As well as this, I also wanted to test build times. While these are important to me when it comes to hosting a static site, they're certainly not a deal breaker. But, faster build times are always a good thing.

So to test both performance _and_ build times, I did a suite of tests, which included:

1. [GT Metrix](https://gtmetrix.com) scans from London, San Antonio, Sydney & Mumbai.
2. A Google Lighthouse scan using [web.dev](https://web.dev/measure).
3. 10 test builds on each host, taking an average.

In order to carry out the various tests, I created a [simple site](https://jekyll-hosting-test.vercel.app/) to test against. The site is a single page that contains a (deliberately) large image and fair amount of text. It's also calling [Simple.css](https://simplecss.org) remotely via CDN.

All in all the test page is 443KB in size. So I think it's sizeable enough to provide a good test and put some traffic down the various CDNs to see how they perform.

### Expanding the scope
The scope of this whole thing was initially for my own interest. However, once I got going I realised that other people may find this info useful. So I decided to expand the scope slightly.

My original test site is based on [Jekyll](https://jekyllrb.com/), as that's what this site is based on. But I decided to build identical sites to my test site in both [Hugo](https://gohugo.io) and [Eleventy (11ty)](https://www.11ty.dev/) too.

I didn't bother doing the performance tests, as the results were going to be almost exactly the same, considering it's pretty much the same site being tested from the same locations.

I did, however, carry out 5 test builds on the Hugo and 11ty sites and took an average. I'm sorry, dear reader, I just couldn't bring myself to do 10 builds of each. **It was as monotonous as it sounds.** 🙃

If you're interested in seeing the test pages here are links:

* [https://jekyll-hosting-test.vercel.app](https://jekyll-hosting-test.vercel.app/)
* [https://hugo-hosting-test.vercel.app](https://hugo-hosting-test.vercel.app/)
* [https://11ty-hosting-test.vercel.app](https://11ty-hosting-test.vercel.app/)

## Performance results
I suppose a good place to start would be the performance results. There are a number of metrics that both GT Metrix and Lighthouse capture, I'm going to keep this high level and just show the full page load time from GT Metrix and the overall performance percentage from Lighthouse.

I will, however, provide a link to a spreadsheet that contains all my data at the end of this post.

### Page load times
First things first; let's look at a fancy graph I made that shows the results of all static site hosts, from all four regions I tested:

{: .full-bleed}
![Static host page load times](/assets/images/static-host-page-load-time.webp){: loading="lazy"}

The results surprised me. I've always highly rated Digital Ocean, having used them to host sites a number of times in the past and currently.

I've always found DO to perform well, but I'm in the UK, so that's hardly surprising given the results above. It's astonishing how much slower the load times were in Australia and India. That immediately ruled out DO as a host for me.

My current host, Netlify, was the second slowest of the group on average too. With GitHub Pages being the quickest overall, closely followed by AWS Amplify and Cloudflare Pages.

I was also surprised by how quick GitHub Pages was - that's pretty cool. Considering Jekyll is a first class citizen on GH Pages, this really got me thinking. Clearly these tests were paying dividends already.

### Lighthouse results
Honestly, I was expecting the Lighthouse scores to be pretty much the same, and they weren't far off.

The lowest scoring was AWS Amplify with 94%, and three of the six static site hosts scored a perfect 100%. Here's the full results:

{: .full-bleed}
![Static host Lighthouse scores](/assets/images/static-host-lighthouse-score.webp){: loading="lazy"}

Once again Netlify was in the middle of the pack with a score of 98%. Overall, the Lighthouse scores were not very useful, but I had them, so decided to include them regardless.

## Build times
So we've gone over performance, let's now look at the build times. This was an interesting one for me, as people say that Hugo and 11ty tend to build far quicker than Jekyll.

This site builds in around 3 seconds on my local machine ([an M1 MacBook Air](/macbook-m1-4-month-update)) and in around 40 seconds on Netlify. So I was keen to see how much quicker Hugo and 11ty were for their builds.

{: .notice}
Unfortunately, I couldn't get **11ty** to build on most of the hosts, so could only test it on **Netlify** and **Vercel**. I tried to troubleshoot the issues on each host for quite some time, but decided to cut my loses in the end.

I noticed that initial build times for each host were generally longer when I was testing Jekyll, so I've included a separate graph with that data. Here's what it all looks like:

{% include full-bleed.html alt="Static host initial builds" src="static-host-intial-build-times.webp" %}

{% include full-bleed.html alt="Static host average builds" src="static-host-average-build-times.webp" %}

As you can see, the build times for Cloudflare Pages were a hell of a lot longer than the other hosts. This surprised me as I thought a company like Cloudflare would have their build process nailed. Clearly not.

If we take the initial builds out of the equation, as they only happen once, Jekyll wasn't really that far behind Hugo and 11ty for most of the builds. I'm sure that would probably change if the site had a lot of pages and complexity, but the build times for my site are well within the confines of what I deem acceptable.

Netlify and Vercel absolutely dominated the other hosts when it came to build times. This didn't really surprise me to be honest, as they're both hosting providers that are built from the ground up to support [JAMStack](https://en.wikipedia.org/wiki/Jamstack) sites.

The other hosting providers, on the other hand, have jumped on the bandwagon. Plus, some of the providers, namely Digital Ocean and Cloudflare are new offerings, so these times may improve as their services mature.

## Packages & pricing
Finally I thought it was important to compare the various packages that each host offers. All of the hosts I tested offer a free tier of some description, but I wanted to look at the first paid tier too.

That way I have an idea of what it will cost me should I need/decide to upgrade. First let's take a look at the free packages:

|   | Build mins  |  Bandwidth (GB) | Concurrent Builds  |  Websites |
|---|---|---|---|---|
|  **AWS Amplify** |  1000 | 15  | 1  | ∞  |
|  **Cloudflare Pages** |  500 |  ∞ |  1 |  ∞ |
| **Digital Ocean Apps**  |  100 |  1 |  1 | 3  |
|  **GitHub Pages** |  10/hour | 100  |  1 | ∞  |
| **Netlify**  | 300  | 100  |  1 |  ∞ |
|  **Vercel** |  6000 |  100 |  1 |  ∞ |

On the surface, Cloudflare's offering looks very generous with its 500 free build minutes. However, if we look at the data for the build times, Cloudflare is orders of magnitude longer when it comes to building sites.

So even though you get a generous 500 minutes of build time, it could be relatively easy to burn through that on a semi-active site.

Vercel on the other hand offers a massive 6000 minutes of build time and is the quickest builder of the lot. That's *very* generous. Having said that, I've never managed to burn through the 300 minutes that Netlify gives me every month and I host a number of sites with them.

### Paid plans
Right then, that's the free tiers out of the way. Let's look at how badly these static site hosts are going to hit your wallet if you decide to upgrade to a paid plan:

|   | Cost (monthly) | Build mins  |  Bandwidth (GB) | Concurrent Builds  |  Websites |
|---|---|---|---|---|---|
|  **AWS Amplify** |  PAYG | $0.01/m  | $0.015/GB  | 1  | ∞ |
|  **Cloudflare Pages** |  $20 |  5000 |  ∞ |  5 | ∞ |
| **Digital Ocean Apps**  |  $12 |  1000 |  100 | 1  | 1 |
|  **GitHub Pages** |  N/A | N/A  |  N/A | N/A  | N/A |
| **Netlify**  | $19  | 1000  |  400 |  3 | ∞ |
|  **Vercel** |  $20 |  24000 |  1000 |  1 | ∞ |

As is often the way, AWS has a convoluted pricing structure. So I used their pricing calculator and based it on Netlify's paid offering.

For 1000 build minutes, 400GB of bandwidth and 350MB of storage (about the size of my entire site), it would cost me approximately **$70/month** to host with AWS Amplify.

Now, those are the maximum numbers that Netlify's paid tier offers. If I reduce the AWS calculator down to something closer to what my actual usage would be; around 40 build minutes, 50GB of bandwidth and 350MB, it comes in at around **$8/month**.

Problem is, that's just a single site. If I host multiple, like I do on Netlify, AWS Amplify would quickly become far more expensive than the competition.

Once again Vercel is the stand out winner here with an incredibly generous offering for $20/month.

## Final thoughts
So there you have it, folks. That's my research on comparing static site hosts. It's been a lot of work, but very enlightening.

Honestly, I'd never considered Vercel as a host before I did this research; mainly because I didn't really know a great deal about them. But they're faster than Netlify, and they offer more on both their free and paid tiers.

GitHub Pages was top of the pops in terms of performance, but since doing this research, I learned that they don't support Jekyll version 4, which is what I run on this site. So if I were to host with GH Pages, I'd need to use GitHub Actions for my build process.

I didn't test this, so I have no idea how builds would perform, but I do use GH Actions for other things and it's generally slow in my experience. I also find GH Pages a little confusing to use, and I'd rather not have all my eggs in GitHub's basket. So they're out too.

Cloudflare and AWS were very close second in terms of performance, but those ridiculously long build times on Cloudflare and AWS's expensive and opaque billing strategy really put me off. Imagine I have a post hit the front page of Hacker News (as has happened a few times in the past) I'd be petrified of what my bill would look like at the end of the month!

In terms of performance, Vercel and Netlify were on par with AWS in the UK and America, and only half a second slower in Australian and India. I can live with that considering all the page loads, with the exception of Digital Ocean, were under 2.5 seconds.

Speaking of Digital Ocean, they were by far the slowest of the pack in terms of performance. [Performance is extremely important to me](/core-web-vitals-and-wordpress/) so that immediately rendered Digital Ocean useless. Their build times were in the middle of the pack, but their free package isn't very generous with just 1GB of bandwidth on offer.

### Which host will I choose?
As I've said previously, I'm currently with Netlify. They did pretty well in the testing - somewhere in the middle of the pack overall. I'd happily stay with them, but I think at some point in the future I'll be switching over to Vercel.

The slightly better performance, quicker build times and more generous package make switching a no-brainer, I think.

Needless to say, this is just my own testing and your mileage may vary, but I've found it useful. If you have done a similar comparison, please do let me know using the reply button below - I'd love to hear about it.

Finally, I promised to include a link to my spreadsheet that contains all of my data. I've just dumped it into Zoho Docs for you to peruse at your own leisure. Here's the link:

{: .center}
[View my data spreadsheet](https://sheet.zohopublic.eu/sheet/published/7c64w8f1057f4bab34065a51b3293f613db88){: .button target="blank"}
