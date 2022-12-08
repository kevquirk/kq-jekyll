---
title: The Pagination Predicament
description: I've removed pagination from my blog for SEO reasons. This post explains why.
image: /assets/images/pagination-feature.webp
category: [Blogging, Web]
layout: post
---
{: .tldr}
I've removed pagination on my [blog posts page](/posts), mainly so you don't have to wade through pages, but also for SEO. Let me explain why...

Previously there were 10 posts to a page, then you had to click through to the next page to see more posts. I have nearly 250 posts on this site now; ain't no-one got time to be wading through 25 pages of blog posts!

So now, all my posts render on a single page. To help you further, posts can be filtered by category at the top of the main blog page.

Since I don't have any featured images being displayed in my posts feed, the page still loads really quickly. Even when rendering ~250 posts.

## SEO impact
As much as I love you, fair reader, I didn't do it just for you. There are also some SEO benefits to all this, and it's all about the *page depth*.

> In simple terms, the depth of a site corresponds to the number of clicks between a given page and the homepage. For example, if you’re on a product page and it is accessible after 4 clicks from the homepage, we consider that this page’s depth is 4.
>
><cite> -- [SmartKeyword](https://smartkeyword.io/en/seo-technical-seo-site-depth/)</cite>

According to SEO experts that are much more intelligent than yours truly, the expectation is that in general pages shouldn't have a depth of more than 4 clicks.

So if I have a post that's on page 10 of my paginated posts list, that means that posts has a click depth of 11. Fun times.

### But why does this matter?
Great question, dear reader - I'm so glad you asked. Apparently, the ~~Google~~ [DuckDuckGo](https://duckduckgo.com) juice reduces as it traverses your site. The rationale being that content linked closely to your homepage is new and relevant, but stuff that's buried on page 10 of the archive isn't.

Think of it like a champaign tower. Your homepage, at the top of the tower, gets all the juice, which then overflows. But as the juice trickles down, it becomes less impactful and doesn't fill the glass.

{: .full-bleed}
![Diagram of pages in a champaign tower](/assets/images/seo-juice-tree.webp)

This is why a lot of SEO tools tell you to link internally - it brings your older posts back up the page depth rankings.

So now, **all my posts** are at 2 clicks deep from the homepage so they should be able to easily quench their thirst for DuckDuckGo juice.

## Final thoughts
Like I said, I'm not an SEO expert, but I figured that even if this whole thing is bullshit (which I don't think it is, as the logic makes sense to me) it should have improved the UX for you on the site. So that's a win.

I will of course continue to link internally to other posts on my site, as it's good to call out and build that web of links.

**What do you think? Is this pointless from an SEO perspective? Do you prefer pagination, rather than a couple hundred posts in one list? Feel free to tell me your thoughts using the button below.**
