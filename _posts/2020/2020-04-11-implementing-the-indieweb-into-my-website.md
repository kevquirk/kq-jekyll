---
title: Implementing The IndieWeb Into My Website
layout: post
permalink: /implementing-the-indieweb-into-my-website/
description: I wanted to utilise the IndieWeb to take ownership of my data and to make may site more connected. This post talks about how I've managed to do that.
categories:
  - Privacy
  - Technology
  - Web
---
{: .tldr}
I wanted to utilise the IndieWeb to take ownership of my data and to make may site more connected. This post talks about how I&#8217;ve managed to do that.

This website has been Webmention enabled for quite some time, but having a 4-day weekend here in the UK this weekend, I decided to spend some time hacking on this site to add more IndieWeb functionality.

## Indie-what now? {#h-indie-what-now}

_IndieWeb!_ You never heard of it? Basically it&#8217;s a way of using your own website as your entire gateway to the Internet. The essence of the whole thing is to post once, then choose where it&#8217;s shared from there.

If you want to learn more about why you think about should implementing the IndieWeb (IW) into your site, take a look at [their documentation](https://indieweb.org/why).

<blockquote class="wp-block-quote">
  <p>
    <strong>There are many reasons <dfn>why</dfn></strong> you should use the IndieWeb, from controlling your experience on the web (instead of corporate algorithms), to deciding where and when to post your content and where it goes.
  </p>

  <cite>The IndieWeb</cite>
</blockquote>

I&#8217;ve talked about [why you should own your own domain](https://kevq.uk/why-you-should-own-your-own-domain/), but using the services that the IW offers, you can take that to the next level. That&#8217;s what I&#8217;ve now done with this site.

## H-Card {#h-h-card}

A `h-card` is basically a very small profile about yourself with some links. It tells the IW what information about you should be considered a single source of truth.

A `h-card` can be as detailed, or a high-level as you like. [There are a tonne of elements](http://microformats.org/wiki/microformats2#h-card) you can use in your `h-card`, but you can use as few or as many as you want. My `h-card` can be found on the homepage of this site:

<img loading="lazy" width="1018" height="406" src="/assets/images/wp-images/2020/04/kevs-h-card.png" alt="Kev's IndieWeb h-card" class="wp-image-1479" title="Kev's h-card" srcset="/assets/images/wp-images/2020/04/kevs-h-card.png 1018w, /assets/images/wp-images/2020/04/kevs-h-card-300x120.png 300w, /assets/images/wp-images/2020/04/kevs-h-card-768x306.png 768w" sizes="(max-width: 1018px) 100vw, 1018px" /> *My h-card*

Brian Wisti wrote a brilliant post on [how he setup his own h-card](https://randomgeekery.org/2020/04/11/indieweb-h-cards/). It breaks the whole process down to a really simple form, it&#8217;s well worth a read if you&#8217;re thinking about addinfg your own `h-card`.

Once you have finished your `h-card`, you can [use this page](https://indiewebify.me/validate-h-card/) to validate it is working correctly. The result should look something like this:

<div class="wp-block-image">
  <img loading="lazy" width="766" height="890" src="/assets/images/wp-images/2020/04/kev-h-card-test.png" alt="Kev's IndieWeb h-card test results" class="wp-image-1474" title="Kev's h-card test results" srcset="/assets/images/wp-images/2020/04/kev-h-card-test.png 766w, /assets/images/wp-images/2020/04/kev-h-card-test-258x300.png 258w" sizes="(max-width: 766px) 100vw, 766px" />
</div>

Having a `h-card` configured and working means that other people and sites on the IW know how to get hold of me and where my social profiles are located.

## Webmentions {#h-webmentions}

[Webmentions](https://indieweb.org/Webmention) are basically comments that traverse the IndieWeb. So if I write a new post on here, then share it on [my Mastodon profile](https://fosstodon.org/@kev) and people comment on that post, they will show up here as Webmentions.

What&#8217;s even cooler still, is if someone else writes a post on their blog and links to one of my posts, I will get a Webmention for that too. Pretty cool, huh?

I had to do some playing around with my CSS stylesheet to get Webmentions looking right on my site. They show up as WordPress comments, and [I have them disabled](https://kevq.uk/removing-comments/), so never needed to format them in my theme. I&#8217;m still not completely happy, but they look good enough for now. I&#8217;ll tweak the CSS when I get more time.

<img loading="lazy" width="988" height="508" src="/assets/images/wp-images/2020/04/webmentions-example.png" alt="Webmentions example" class="wp-image-1483" srcset="/assets/images/wp-images/2020/04/webmentions-example.png 988w, /assets/images/wp-images/2020/04/webmentions-example-300x154.png 300w, /assets/images/wp-images/2020/04/webmentions-example-768x395.png 768w" sizes="(max-width: 988px) 100vw, 988px" />  

## IndieAuth {#h-indieauth}

[IndieAuth](https://indieweb.org/IndieAuth) is really cool. Basically, it allows you to login to any IW compatible site with your own website.

So if I wanted to login to the IndieWeb wiki, I _could_ sign up for an account on their servers, or I could just authenticate using the IndieAuth configuration on this site.

<div class="wp-block-image">
  <img loading="lazy" width="666" height="509" src="/assets/images/wp-images/2020/04/indieauth-kevq.png" alt="IndieAuth Example" class="wp-image-1485" srcset="/assets/images/wp-images/2020/04/indieauth-kevq.png 666w, /assets/images/wp-images/2020/04/indieauth-kevq-300x229.png 300w" sizes="(max-width: 666px) 100vw, 666px" />
</div>

## How do I implement the IndieWeb? {#h-how-do-i-implement-the-indieweb}

If you&#8217;re running WordPress, like me, then it&#8217;s really easy. Just install the [IndieWeb plugin](https://wordpress.org/plugins/indieweb/), which will allow you to then install other plugins, like IndieAuth and Webmention.

In order to get IndieAuth to work, I had to add the following to my `.htacess` file:

<pre class="wp-block-code"><code># Enable IndieAuth
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATIO</code></pre>

To setup a `h-card`, I&#8217;d strong recommend you read through [Brian Wisti&#8217;s guide](https://randomgeekery.org/2020/04/11/indieweb-h-cards/) on how he did it. If you&#8217;re familiar with some basic HTML and CSS, you should be fine.

You may also need to tweak some of the code for your website to get it working right, but it&#8217;s all pretty straightforward.

## Conclusion {#h-conclusion}

With a couple of hours spare, I&#8217;ve been able to make my website part of the IndieWeb, and I&#8217;m really happy with the result. I&#8217;m now finding my website to be much more connected and engaging. There&#8217;s still more I can do, but this is a good start, I think.

If you&#8217;ve never heard of the IW and want to get started too, the [IndieWeb wiki](https://indieweb.org/Getting_Started) has a tonne of useful information to get you going. It can be a little daunting at first, but if you take it slow, it all starts to fall into place and make sense.

I for one am really happy I took the time to do this.
