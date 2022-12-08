---
id: 2157
title: How To Create An IndieWeb Profile
date: 2020-06-23T15:32:33+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2157
permalink: /how-to-create-an-indieweb-profile/
description:
  - I've written about the IndieWeb in the past, but it can be a little confusing. In this post I'm going to take you through creating an IndieWeb profile.
categories:
  - Blogging
  - Web
---
**[I&#8217;ve written about the IndieWeb in the past](https://kevq.uk/implementing-the-indieweb-into-my-website/){.yoast-seo-link}, but it can be little complicated and confusing to get started. In this post I&#8217;m going to take you through creating an IndieWeb profile.**

## What is the IndieWeb? {#h-what-is-the-indieweb}

The IndieWeb is a way of connecting your personal website with lot of other peoples&#8217; sites from around the world. So if you&#8217;re on the IndieWeb and I link to your blog in one of my posts, you get a notification. These are called [Webmentions](https://indieweb.org/Webmention){.yoast-seo-link} and you can see the Webmentions for this post in the comments section below.

Think of it as an inter-linked commenting system that traverses the entire Internet. Websites aren&#8217;t physically connected, but they can communicate with one another. You can learn more on the [IndieWeb site](https://indieweb.org){.yoast-seo-link}.

## What is an IndieWeb profile? {#h-what-is-an-indieweb-profile}

An IndieWeb profile, or `h-card` as they&#8217;re officially known, is a snippet of code that tells other websites connected to the IndieWeb a little bit about you and your site.

I like to think of it as my business card for the IndieWeb.

## Why do I need an IndieWeb profile? {#h-why-do-i-need-an-indieweb-profile}

Well, like any inter-connected social system, a profile help people recognise you within the network. A profile is also useful for discovery purposes on the IndieWeb.

You can create a `h-card` in a number of ways, but in this post I will show you how I have created my `h-card` and what it all means.

### Example IndieWeb `h-card` {#h-example-indieweb-h-card}

Let&#8217;s take a look at my IndieWeb profile first, so you can see what they look like and what we need to configure.

<img loading="lazy" width="591" height="1024" src="/assets/images/wp-images/2020/06/kevs-indieweb-profile-591x1024.jpg" alt="Kev's IndieWeb Profile" class="wp-image-2500" srcset="/assets/images/wp-images/2020/06/kevs-indieweb-profile-591x1024.jpg 591w, /assets/images/wp-images/2020/06/kevs-indieweb-profile-173x300.jpg 173w, /assets/images/wp-images/2020/06/kevs-indieweb-profile-768x1331.jpg 768w, /assets/images/wp-images/2020/06/kevs-indieweb-profile-887x1536.jpg 887w, /assets/images/wp-images/2020/06/kevs-indieweb-profile.jpg 1013w" sizes="(max-width: 591px) 100vw, 591px" />  

As you can see, my IndieWeb profile contains a fair amount of information. But there&#8217;s **a lot** more you can add if you wish. [This link](http://microformats.org/wiki/h-card#Properties) lists all of the `h-card` identifiers that are available.

Enough of this preamble, let&#8217;s get started and actually make the thing, shall we?

## The Basics {#h-the-basics}

There are a number of ways you can create a `h-card`. Some people like to markup their about page, others like to add the identifiers to their posts and pages. Personally, I opted to create a simple block of hidden code on my homepage that handles the whole thing.

I think this is the easiest way of doing it, as it then acts as a single profile within your website&#8217;s code that is easy to update.

So with that we will start by creating a new HTML `section` what will house our `h-card` profile:

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;/section&gt;</code></pre>

So `display: none;` tells your browser to hide everything within this `section` when the page is loaded. This ensures your visitors will not be able to see it, but other sites on the IndieWeb will traverse this code and find your profile. We&#8217;re also giving the `section` a class of `h-card`, which tells the IndieWeb that this is your `h-card` profile.

### About me {#h-about-me}

Now we have the basic `section` setup and we have hidden it with some inline CSS, let&#8217;s add some basic information to the profile. My name and a short bio seems like a place to start:

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;!-- About me --&gt;
&lt;span class="p-name"&gt;Kev Quirk&lt;/span&gt;
&lt;span class="p-note"&gt;I'm a cyber security professional and privacy advocate from North West England. My interest include drawing, fishkeeping, motorbikes & open source software.&lt;/span&gt;

&lt;/section&gt;</code></pre>

By using `p-name` and `p-note` as the class for the two lines of code, we&#8217;re telling the IndieWeb what our name is and a little bit about ourselves.

### Profile picture {#h-profile-picture}

No profile is complete without a profile picture. For this we simply add an `img` tag and set its class to `u-photo`:

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;!-- About me --&gt;
&lt;span class="p-name"&gt;Kev Quirk&lt;/span&gt;
&lt;span class="p-note"&gt;I'm a cyber security professional and privacy advocate from North West England. My interest include drawing, fish keeping, motorbikes & open source software.&lt;/span&gt;

&lt;!-- Profile picture --&gt;
&lt;img class="u-photo" src="https://kevq.uk/assets/images/wp-images/uploads/2019/11/400px-round-grey-glasses.png"/&gt;

&lt;/section&gt;</code></pre>

### Location {#h-location}

Adding your location is totally optional, but I decided to add it as a lot of people assume I&#8217;m American. I&#8217;m not sure why, they just do, so I thought by adding my rough location this would help.

<p class="has-text-align-left notice-red">
  <strong>Privacy note:</strong> If you&#8217;re going to do this, make sure the location you specify is very vague. I&#8217;d recommend Town/City at most.
</p>

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;!-- About me --&gt;
&lt;span class="p-name"&gt;Kev Quirk&lt;/span&gt;
&lt;span class="p-note"&gt;I'm a cyber security professional and privacy advocate from North West England. My interest include drawing, fish keeping, motorbikes & open source software.&lt;/span&gt;

&lt;!-- Profile picture --&gt;
&lt;img class="u-photo" src="https://kevq.uk/assets/images/wp-images/uploads/2019/11/400px-round-grey-glasses.png"/&gt;

&lt;!-- My location --&gt;
&lt;span class="p-locality"&gt;North West England&lt;/span&gt;

&lt;/section&gt;</code></pre>

### Social Links {#h-social-links}

The next step is to add some links. These are really important as they show the IndieWeb what your other online identities are. This is a great way of validating your various online accounts so people know they&#8217;re legitimate.

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;!-- About me --&gt;
&lt;span class="p-name"&gt;Kev Quirk&lt;/span&gt;
&lt;span class="p-note"&gt;I'm a cyber security professional and privacy advocate from North West England. My interest include drawing, fish keeping, motorbikes & open source software.&lt;/span&gt;

&lt;!-- Profile picture --&gt;
&lt;img class="u-photo" src="https://kevq.uk/assets/images/wp-images/uploads/2019/11/400px-round-grey-glasses.png"/&gt;

&lt;!-- My location --&gt;
&lt;span class="p-locality"&gt;North West England&lt;/span&gt;

&lt;!-- Links --&gt;
&lt;a class="u-url u-uid" href="https://kevq.uk"&gt;&lt;/a&gt;
&lt;a class="u-email" rel="me" href="mailto:kev@craves.coffee"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://fosstodon.org/@kev"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://twitter.com/kevquirk"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://keybase.io/kevq"&gt;&lt;/a&gt;

&lt;/section&gt;</code></pre>

The first link has two classes, `u-url` and `u-uid`. The `u-url` class is a generic identifier that simply says that this URL is owned by me. So this could be a social profile, or a link to your homepage.

`u-uid` is a little different. This is your universally unique identifier, so it&#8217;s the daddy of all your links &#8211; it&#8217;s your main home on the IndieWeb. A link to your homepage should always include both the `u-url` and `u-uid` classes.

We then have `u-email` which is pretty self-explanatory &#8211; it&#8217;s your email address. I personally use the same email address as the one listed on [my contact page](https://kevq.uk/contact/){.yoast-seo-link} for this.

Finally we have a few links to my social profiles that only contain the `u-url` identifier.

### Categories {#h-categories}

Adding categories to your IndieWeb profile shows other people on the IndieWeb the kind of things you&#8217;re interested in and write about on your blog.

<pre class="wp-block-code"><code>&lt;section style="display: none;" class="h-card"&gt;

&lt;!-- About me --&gt;
&lt;span class="p-name"&gt;Kev Quirk&lt;/span&gt;
&lt;span class="p-note"&gt;I'm a cyber security professional and privacy advocate from North West England. My interest include drawing, fish keeping, motorbikes & open source software.&lt;/span&gt;

&lt;!-- Profile picture --&gt;
&lt;img class="u-photo" src="https://kevq.uk/assets/images/wp-images/uploads/2019/11/400px-round-grey-glasses.png"/&gt;

&lt;!-- My location --&gt;
&lt;span class="p-locality"&gt;North West England&lt;/span&gt;

&lt;!-- Links --&gt;
&lt;a class="u-url u-uid" href="https://kevq.uk"&gt;&lt;/a&gt;
&lt;a class="u-email" rel="me" href="mailto:kev@craves.coffee"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://fosstodon.org/@kev"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://twitter.com/kevquirk"&gt;&lt;/a&gt;
&lt;a class="u-url" rel="me" href="https://keybase.io/kevq"&gt;&lt;/a&gt;

&lt;!-- Categories --&gt;
&lt;span class="p-category"&gt;Blogging&lt;/span&gt;
&lt;span class="p-category"&gt;Fish keeping&lt;/span&gt;
&lt;span class="p-category"&gt;InfoSec&lt;/span&gt;
&lt;span class="p-category"&gt;Motorbikes&lt;/span&gt;
&lt;span class="p-category"&gt;Open Source Software&lt;/span&gt;
&lt;span class="p-category"&gt;Privacy&lt;/span&gt;
&lt;span class="p-category"&gt;Web Design&lt;/span&gt;

&lt;/section&gt;</code></pre>

## Adding more items {#h-adding-more-items}

That&#8217;s pretty much it for my `h-card`, but I mentioned earlier in this post that you can add other items to your profile if you would like. A full list of [all supported identifiers can be found here](http://microformats.org/wiki/h-card#Properties).

For example, let&#8217;s say I want to add my title, which is _Mr_. The additional code to be added to my `h-card` would look like this:

<pre class="wp-block-code"><code>&lt;!-- My title --&gt;
&lt;span class="p-honorific-prefix"&gt;Mr&lt;/span&gt;</code></pre>

If you want to add others, just follow this same process, referencing the specific identifier for the field you wish to add.

**Note:** Wherever I&#8217;ve added `<!-- XXXX -->` throughout my `h-card` is optional. These are just HTML comments that make reading the code easier for me.

## Adding it to your website {#h-adding-it-to-your-website}

All you need to do now is copy and paste the complete `h-card` somewhere inside your `<body>` tags on your website&#8217;s homepage. Personally, I would recommend putting your `h-card` right at the bottom, just above your closing `</body>` tag. This way it won&#8217;t interfere with anything else on your page.

Once you have added your `h-card` to your site&#8217;s code, save it and uploaded it to your web server and you should have a working IndieWeb profile. If you want to test your profile to see if it&#8217;s working, you can [use this page](https://indiewebify.me/validate-h-card/).

**Do you have a different way of managing your IndieWeb `h-card`? If so, why not tell me how you have done it in the comments below.**
