---
id: 960
title: 'Making A Website 04 &#8211; Responsiveness'
date: 2020-01-30T12:47:23+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=960
permalink: /making-a-website-04-responsiveness/

  
rank_math_primary_category:
  - "54"
description:
  - "By now you should have a light website that looks good, has multiple pages and a menu. Today we're going to make our website responsive."
rank_math_focus_keyword:
  - light website
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "117"
categories:
  - Web
---
Our light website is coming along nicely! By now you should have a <a rel="noreferrer noopener" aria-label="light website (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">light website</a> that looks good, has [multiple pages and a menu](https://kevq.uk/making-a-website-03-menus/). But there&#8217;s still some work to do &#8211; today we&#8217;re going to make our website responsive.

## What is responsiveness? {#h-what-is-responsiveness}

Before we start making our website responsive, I think it&#8217;s important to understand what responsiveness actually is. Put simply, responsiveness tells your website to respond in a certain way under particular conditions.

In this case, we&#8217;re going to setup our website to respond to a small display, like a mobile phone, by reformatting the images and menu. This sounds really complicated, but it really isn&#8217;t.

## The CSS {#h-the-css}

The first thing we need to do is to add some additional CSS to our `style.css` file. Here is the CSS you will need to add:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Make the website responsive */
@media screen and (max-width: 100%) {
  .main {
    width: 800px;
  }
}
@media screen and (max-width: 640px) {
  ul.nav li {float: none;}
}
.main {
  float: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}</pre>

There are basically three different statements we&#8217;re making with this CSS. In the first `@media` statement we&#8217;re setting the width of the `.main` section (more on that later) to 800px.

In the second `@media` statement we&#8217;re telling our website to reformat the menu to a single item per line if the screen width is 640px or less.

The `.main` statement formats the body of each page to actually make it all respond how we want it to.

You will also need to ****make some changes to the `body` section of your style sheet:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* BEFORE */
body {
  background: var(--bg);
  color: var(--main);
  font-family: sans-serif;
  font-size: 1.1em;
  display: block;
  text-align: left;
  width: 800px;
  margin: 0 auto;
}
/* AFTER */
body {
  background: var(--bg);
  color: var(--main);
  font-family: sans-serif;
  font-size: 1.1em;
}</pre>

The final CSS change you need to make is to add responsive formatting to images so they adapt too. This will stop them scrolling off the screen as it shrinks. Instead, they will adapt and shrink with the screen:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Format images */
img {
  max-width: 100%;
  height: auto;
}
img.home-banner {
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 100%;
  height: auto;
}</pre>

## The HTML {#h-the-html}

That&#8217;s it for the CSS. We now need to make some HTML changes. **These steps will need to be done on every HTML page on your website.**

The first step is to add a `viewport` to the `<head>` section of every webpage. The additional line is highlighted below on line 3:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="3" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;head&gt;
&lt;link href="style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;link rel="shortcut icon" href="images/favicon.png" /&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;</pre>

Viewports require a bit of explanation, but I think doing so would derail the flow of this post. If you want to learn more about viewports, take a look at <a rel="noreferrer noopener" aria-label="this page (opens in a new tab)" href="https://www.w3schools.com/css/css_rwd_viewport.asp" target="_blank">this page</a>.

The final step is to add support for the `.main` section. Again this needs to be done on **all pages** of the website. This is done by adding a `<div>` inside the `<body>` tag. See lines 2 and 19 below:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="2,19" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;body&gt;
&lt;div class="main"&gt;
&lt;!-- *** NAVIGATION SECTION *** --&gt;
&lt;ul class="nav"&gt;
  &lt;li class="nav"&gt;&lt;a href="index.html" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;
&lt;img class="home-banner" src="images/home-banner.png"&gt;&lt;/img&gt;
&lt;!-- *** START PAGE CONTENT *** --&gt;
&lt;p&gt;Your page's content will go here!&lt;/p&gt;
&lt;!-- *** END PAGE CONTENT *** --&gt;
&lt;/div&gt;
&lt;/body&gt;</pre>

That&#8217;s it, your website is now responsive. No, that really is it! I told you it was simple. If you want to test it out, visit your website and shrink your window so it&#8217;s not full screen. Then, keep reducing the width of the window, eventually you should see the menu flip to its responsive mode:

<img loading="lazy" width="986" height="800" src="/assets/images/wp-images/2020/01/responsive-website-wide.png" alt="" class="wp-image-1069" srcset="/assets/images/wp-images/2020/01/responsive-website-wide.png 986w, /assets/images/wp-images/2020/01/responsive-website-wide-300x243.png 300w, /assets/images/wp-images/2020/01/responsive-website-wide-768x623.png 768w" sizes="(max-width: 986px) 100vw, 986px" />  

<div class="wp-block-image">
  <img loading="lazy" width="636" height="800" src="/assets/images/wp-images/2020/01/responsive-website-narrow.png" alt="" class="wp-image-1070" srcset="/assets/images/wp-images/2020/01/responsive-website-narrow.png 636w, /assets/images/wp-images/2020/01/responsive-website-narrow-239x300.png 239w" sizes="(max-width: 636px) 100vw, 636px" />
</div>

Look at that beautiful, responsive website! Great work, folks. As you can see, our banner image, which is 800px wide, has shrunk with the webpage so the formatting remains in place.

## Conclusion {#h-conclusion}

We&#8217;re nearly at the end of this series now, there&#8217;s just two posts left were we will be adding a blog and the finishing touches to our website.

As usual, I have added the source code for everything that&#8217;s covered in this post to the downloads page of <a rel="noreferrer noopener" aria-label="mylightwebsite.kevq.uk (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">mylightwebsite.kevq.uk</a>. You can also use this site to work through each step in this series in a wizard-like fashion.