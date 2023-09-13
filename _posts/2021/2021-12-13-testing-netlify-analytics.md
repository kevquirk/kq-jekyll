---
title: Testing Netlify Analytics
description: I decided to take Netlify Analytics for a spin to see what it's like. Overall I wasn't that impressed and I don't think I'll continue to use it.
image: assets/images/netlify-analytics-feature.webp
date: 2021-12-13T15:10:00.000Z
category: [Web]
layout: post
rss_only: false
---
{: .tldr}
I decided to take Netlify Analytics for a spin to see what it's like. Overall I wasn't that impressed and I don't think I'll continue to use it.

I recently [flipped my site back to Jekyll](https://kevquirk.com/goodbye-wordpress-switched-to-jekyll/) and it is now hosted with the amazing [Netlify](https://netlify.com). Once the migratory dust had settled, I decided to give Netlify Analytics a try to [see what it's all about](https://www.netlify.com/products/analytics/).

I've been running it for over a month now, so thought it was hide time I provided you folks with my thoughts, as well as make a decision as to whether I'm going to stick with it.

Analytics in general are somewhat of [a double edged sword for me](https://kevquirk.com/chasing-visitors-the-web-analytics-rabbit-hole/). On the one hand it's useful to know what content is popular on the site, but on the other hand, it becomes somewhat of a rabbit hole.

## What I liked
Netlify Analytics doesn't partake in the *add some JavaScript to your site and away you go* process of many analytics providers.

Instead Netlify's analytics are produced from network logs. This means that there's no JavaScript to be blocked and the results are (apparently) *far* more accurate. We will dig into accuracy later on in the posts.

Since the analytics are generated from network logs effectively, there's no tracking taking place. Netlify don't provide any IP information either, which means the service is pretty good from a privacy perspective.

I also like the UI. It's simple and shows the most relevant info up front. Metrics like visitors counts, 404 errors and which pages are popular are all present. Here is what my analytics dashboard looks like after a month or so of usage:

{: .full-bleed}
![Netlify Analytics dashboard](/assets/images/netlify-analytics-dashboard.webp)

## What I didn't like
So the UI is simple to navigate and there's no JavaScript required to get up and running, which is nice (although [JavaScript isn't always bad](https://kevquirk.com/is-javascript-bad-well-only-if-youre-using-it-wrong/)). So where are the negatives in all this?

For me, they're twofold...

### 1. The price
Netlify Analytics costs $9/month. To me, this seems very expensive when you're effectively getting a page that displays some web log analysis.

I think it's important add here too - **that's $9/month per website**. So if I wanted to run analytics against the 4 sites I have hosted with Netlify, that's going to cost me $37/month!

### 2. Lack of historic data
This is where Netlify really dropped the ball with their offering in my opinion. **Netlify Analytics only provides 30 days of data.** It doesn't matter if you have been paying for their service for 2 years, you still only get the last month's worth of stats.

There's no way of looking at custom spans of time within that month either. You can choose the whole month, the last week, or the last 24 hrs. That's it.

If you published a post 2 weeks ago and want to see how your traffic looked for that week, you're shit out of luck.

## Accuracy
Remember how I said earlier that Netlify uses network logs to provide analytics, thus making it more accurate? Well let's test that theory...

Here is a snapshot of the most popular pages on my site for the last month, according to Netlify:

![Popular pages Netlify](/assets/images/netlify-popular-pages.webp)

Of the 105,000 visits to my site, nearly 40,000 of them were direct traffic to my homepage. **That's bullshit**. There's no chance that 40% of my traffic is direct. People just don't visit websites like that.

There's is pretty much always a referrer - whether that be a search engine, RSS feed, newsletter, social network, or link from another site. It's **very** rare for people to go direct to a website by typing the URL in their address bar.

**So what is this direct traffic?**

I think the most likely culprit of this traffic are bots and web crawlers - mostly from search engines, I'd imagine.

This is a problem. If around 40% of the traffic to my homepage is bots and crawlers, it's impossible to know what percentage of other page stats are bots versus real visitors.

Is my *[this is what's wrong with the linux community](https://kevquirk.com/this-is-whats-wrong-with-linux-community)* post actually the most popular post on my blog last month? Or has it just garnered lots of hits from bots?

I looked through the Netlify documentation on whether they try to filter out bots and crawlers, but I couldn't find anything specific. So I can only assume that they don't filter anything out.

## Final thoughts
While the Netlify Analytics seems great on the surface, dig a little deeper and things fall apart.

The UI is nice and it's private, but what's the point in looking at any of this data if its accuracy can't be relied on?

Add to that the fact that we only get 30 days worth of data and have to pay over the odds for the pleasure. I think I'm gonna take a hard pass.

I don't have advertisers to pacify, so analytics are nothing more than a way to satisfy my own curiosity - I don't *really* need them.

So, what's a better metric for success on a personal blog like this? For me, when I added the [reply via email button](https://kevquirk.com/adding-the-post-title-to-my-reply-by-email-button/) to the end of my posts, emails from readers increased dramatically.

I now get emails from readers mosts days, and I often get to have pleasant conversations with most of them off the back of these emails.

To me, *this* is the measure of success. I don't really care if post X had 500 views, or 5,000,000 views. If I get to have a conversation with a couple of readers off the back of a post, or if a couple email me to say thanks, that's better than anything an analytics tool can tell me.

**What are you using to measure the analytics on your site? Do you use a specific tool? Or, like me, nothing at all?**
