---
title: 'Commento &#8211; The Privacy Respecting Commenting System'
layout: post
permalink: /commento-the-privacy-respecting-commenting-system/
description: If you're looking for a privacy respecting commenting system for your blog, you really should consider Commento.
categories:
  - Privacy
  - Technology
---
Regular readers of this blog will know that I recently migrated from [WordPress to Grav](/migrating-from-wordpress-to-grav). One of the things I was really concerned about when migrating was the comments, as the WordPress commenting system is really good.

I didn't want to go back to Disqus because of [a number of privacy and security concerns](https://en.wikipedia.org/wiki/Disqus#Criticism,_privacy,_and_security_concerns) with their service. So I started hunting for an alternative.

## My Requirements {#h-my-requirements}

When looking for an alternative to WordPress comments, I approached it in much the same way as I did when I [De-Googled](/categories/de-googling). In that the replacement service has to be as good as, if not better than, the service I was replacing.

The requirements I had where as follows:

  * Be privacy respecting
  * Be easy to moderate comments
  * Allow anonymous commenting
  * Not add loads of JavaScript to my site
  * Fit in with the my site's theme

## The Options {#h-the-options}

Grav have [hundreds of plugins available](https://getgrav.org/downloads/plugins) for their system, which includes two different commenting systems. However, neither of them fulfilled _all_ of my requirements. Namely, they both seemed difficult to moderate and configure.

I was back at the drawing board and about to admin defeat, but just before I went back to WordPress with my cap in my hand, I took a punt and searched Google for _&#8220;privacy respecting commenting systems&#8221;_ as I wasn't having much luck with DuckDuckGo.

That's when I came across [Commento](https://commento.io):

![](/assets/images/commento-home.png)  

## Privacy Respecting {#h-privacy-respecting}

The Commento team make it abundantly clear that privacy is a first class citizen when it comes to their service.

> We do not sell or rent data to any third party, including marketers, advertisers, and tracking agencies.
> <cite>-- [Commento privacy policy](https://commento.io/privacy)

They even go on to clarify their position when it comes to Government agencies contacting them for things like court orders:

> We may, from time to time, contest court orders if there is a public interest in doing so. In such situations, the company will not comply with the court order until all legal or other remedies have been exhausted. Therefore, not all court orders may lead to data disclosure.

Comment is also free from third-party tracking and advertisers. This alone was a major selling point for me. Things only got better from here…

## Easy To Moderate {#h-easy-to-moderate}

Moderation is hugely important. I'm an extremely busy guy, so the comment moderation process needs to be as slick as possible.

Comment moderation with Commento is as simple as clicking on a link in an email. Personally, I have my site set to hold all comments for moderation then email me with a notification. When that notification pops into my inbox, it looks something like this:

![](/assets/images/commento-moderation-email.png)

I can then approve the comment, delete it, or link straight to the comment using the _Context_ link in the email.

When logged in to Commento on my site, I can also manage comments direct from there too. I can even add additional moderators if I want to. It's such a simple way to moderate comments without having a heavy dashboard to login to.

Commento also has spam protection built in - I believe they use the same anti-spam system as WordPress, [Akismet](https://akismet.com).

## Allow Anonymous Commenting {#h-allow-anonymous-commenting}

Allowing my visitors to quickly and easily add an anonymous comment is incredibly important to me because [I respect your privacy](/about/privacy). Adding an anonymous comment with Commento is as simple as clicking a checkbox, then adding your comment. You don't have to add _any_ personal information, not even a name.

If you want to receive an email notification if you get a reply, you can also sign in with your Google, Twitter, GitHub, GitLab or Commento accounts.

![](/assets/images/commento-signin.png)

## Not Add Loads Of JavaScript {#h-not-add-loads-of-javascript}

The JavaScript for Commento is just 11KB in size. Even on a dial-up connection that's a negligible amount of additional data. On a modern broadband connection, it's a fraction of a millisecond in additional load time.

Victor Zhou did some [Disqus vs Commento performance comparisons](https://victorzhou.com/blog/replacing-disqus) and found that adding Disqus comments to his site increased his page size by 10x and request count by 6x!

![](/assets/images/commento-vs-disqus-1.png)

![](/assets/images/commento-vs-disqus-2.png)

**_Graphs courtesy of Victor Zhou - <https://victorzhou.com>._**

Adding Commento to my site was as simple as adding the following code where I wanted the comments to appear:

```
<div id="commento"></div>
<script src="https://cdn.commento.io/js/commento.js"></script>
```

## Look & Feel {#h-look-feel}

When visiting a website, I find it really jarring if the comment section doesn't fit in with the aesthetics of the rest of the site. By default, Commento looks pretty good, but I want it to look _exactly_ like the rest of my site.

Luckily that's easy to do too. By adding around 25 lines of CSS to my stylesheet, I can override the default Commento CSS by changing the embed code to the following:

```
<div id="commento"></div>
<script src="https://cdn.commento.io/js/commento.js" data-css-override="/path/to/my/stylesheet.css"></script>
```

The result is a commenting system that pulls in all of my theming perfectly and looks exactly how I want it to look.

## Hacker News {#h-hacker-news}

A few days after finishing the re-design of my website, I published the article [Please Add RSS Support to Your Site](/please-add-rss-support-to-your-site). This hit the font page of Hacker News for a day or so; which means lots of comments.

I managed to use Commento in anger straight away, and it was faultless. My site never slowed down, email notifications were delivered quickly and everything just worked as it should. This, to me at least, is a true testament to how good Commento is.

## Conclusion {#h-conclusion}

Commento isn't a free product, but it works superbly well, is privacy respecting and has no third-party trackers or advertising. It is, however, pay what you want to a certain degree. The minimum the developers ask is $3/month. I pay $5/month as I think the price of a coffee per month is great value for money for such a good tool.

During the initial implementation of Commento, I had to contact the support team, which I think consists of one person - the main developer of Commento. I made a mistake when importing my comments, but he was able to fix the issue for me quickly and easily.

I also asked a couple of general questions about Commento, which he was happy to answer for me. Each time I emailed, I got a response within 24 hours.

I can't recommend Commento highly enough. If you're already using Disqus, Commento has an import tool so you can get going straight away. You can also try Commento for 15 days for free. I can't see myself using another commenting system any time in the near future.

**If you're a website owner, I implore you to consider switching to this privacy respecting, [open source](https://gitlab.com/commento) commenting system - oh, did I mention you can self-host it too if you like!**