---
id: 4265
title: 'Simple.css &#8211; A Classless CSS Framework For Everyone'
date: 2021-01-03T16:19:00+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=4265
permalink: /simple-css-framework/
description:
  - Simple.css is a new project I've started - it's a simple classless CSS framework that makes plain HTML look beautiful very easily.
categories:
  - Web
---
If you didn&#8217;t know already I love [playing around with web technologies](/categories/#Web). I have a number of projects that I manage along with this site. It&#8217;s a fun hobby that makes me happy.

However, what doesn&#8217;t make me happy are the extremely convoluted and heavy web frameworks that are out there, like [Bootstrap](https://getbootstrap.com/) and [Tailwinds](https://tailwindcss.com/). Both of these projects are great open source frameworks what allow web developers to create some incredible sites, but they include so much code within them that I will never, ever use.

Put simply, it&#8217;s a waste for me to use them.

## The problem {#h-the-problem}

The simple, personal projects that I create don&#8217;t require such heavy, complicated frameworks.

I find that every time I spin up a new project, I start out doing one of two things:

  1. Copying the source of another project I run, then editing the code to suit.
  2. Starting the whole thing from scratch and re-doing a fair amount of work.

I decided needed a better solution.

There had to be better way, I thought. I wanted something that could be **very** easily used to create a simple, good looking website, but could also be hacked upon to customise it to the needs of each project I start.

I hunted around for such a project and found [New CSS](https://newcss.net/), which is a great project. But it was still more complicated than I needed. For example, if you look at the CSS variable declarations for New CSS, they&#8217;re not very clear at all:

<pre class="wp-block-code language-css"><code>/* Light theme */
    --nc-tx-1: #000000;
    --nc-tx-2: #1A1A1A;
    --nc-bg-1: #FFFFFF;
    --nc-bg-2: #F6F8FA;
    --nc-bg-3: #E5E7EB;
    --nc-lk-1: #0070F3;
    --nc-lk-2: #0366D6;
    --nc-lk-tx: #FFFFFF;
    --nc-ac-1: #79FFE1;
    --nc-ac-tx: #0C4047;</code></pre>

These declarations made little sense to me, so I still found myself messing around with variables and renaming them in a way that made more sense to me. For reference, here&#8217;s the kind of declarations I like to use:

<pre class="wp-block-code language-css"><code>/* Default (light) theme */
    --bg: #FFF;
    --accent-bg: #F5F7FF;
    --text: #212121;
    --text-light: #666;
    --border: #D8DAE1;
    --accent: #0D47A1;
    --accent-light: #90CAF9;
    --code: #D81B60;</code></pre>

I find that these descriptive variables are far easier to follow and use.

## The solution &#8211; Simple.css {#h-the-solution-simple-css}

In true open source spirit I decided to make something of my own and share it. So I built a super simple classless CSS framework that&#8217;s light, easy to customise and build on top of.

The result is Simple.css. The [Simple.css website](https://simplecss.org) demonstrates what can be done with the framework:

<img loading="lazy" width="1063" height="634" src="/assets/images/wp-images/2021/01/jekyll-simple-css-homepage.png" alt="Simple CSS homepage" class="wp-image-4266" srcset="/assets/images/wp-images/2021/01/jekyll-simple-css-homepage.png 1063w, /assets/images/wp-images/2021/01/jekyll-simple-css-homepage-610x364.png 610w, /assets/images/wp-images/2021/01/jekyll-simple-css-homepage-768x458.png 768w" sizes="(max-width: 1063px) 100vw, 1063px" />  

The [demo page](https://simplecss.org/demo) is fairly verbose and should allow people to get started easily. I&#8217;ve tried to keep things as simple so that the barrier for entry is as low as possible.

I&#8217;m really happy with the result; which is a minified CSS file that is **less than 4KB**.

## Use Simple.css yourself {#h-use-simple-css-yourself}

If you want to take Simple.css for a spin yourself, you can find the source in [this Github repository](https://github.com/kevquirk/simple.css). I&#8217;ve also released the source code for the simplecss.org website &#8211; that can be [found here](https://github.com/kevquirk/simple.css-site). It&#8217;s a Jekyll site, [just like this one](/goodbye-wordpress-switched-to-jekyll/).

Simple.css includes the basics to get going at the moment, but I intend to add more to it as time goes on. If you want to contribute, please feel free to submit a pull request. Contributing guidelines can be [found here](https://github.com/kevquirk/simple.css/blob/main/CONTRIBUTING.md).

If you decide to use Simple.css in one of your projects, please do [contact me](/contact) with a link as I intend to make a showcase of websites using Simple.css in the future.

{: .center}
<a class="button" href="https://simplecss.org" target="_blank" rel="noreferrer noopener">Visit the Simple.css website</a>
