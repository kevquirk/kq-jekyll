---
id: 859
title: 'Making A Website &#8211; 01 The Basics'
date: 2020-01-09T16:10:47+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=859
permalink: /making-a-website-01-the-basics/

  
rank_math_primary_category:
  - "54"
description:
  - "In this Making A Website post, we're looking at the very first steps of actually making a website. It's super simple at the moment, but it will get better."
rank_math_focus_keyword:
  - "making a website"
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "125"
categories:
  - Web
---
Welcome to the first post in my series _Making A Website_. This series of posts will take you through all the steps needed to make your very own website from scratch.

It will have multiple pages including a blog, a modern, clean design, beautiful typography and a raft of other features.

<p class="notice">
  I have made a dedicated website that follows this series. It will accompany these posts, so head over to <a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">mylightwebsite.kevq.uk</a> to check it out.
</p>

## Neocities {#h-neocities}

The first thing we need is somewhere to host our website. There are literally thousands of places you can host your website, but <a href="https://neocities.org/" target="_blank" rel="noreferrer noopener">Neocities</a> makes it super simple.

Once you&#8217;re signed up, login to your Neocities account and <a aria-label="navigate to your dahboard (opens in a new tab)" rel="noreferrer noopener" href="https://neocities.org/dashboard" target="_blank">navigate to your dashboard</a>. Here you should see a very basic website that Neocities automatically creates:

<div class="wp-block-image is-style-twentytwentyone-border">
  <img loading="lazy" width="981" height="554" src="/assets/images/wp-images/2020/01/neocities-dashboard.png" alt="" class="wp-image-860" srcset="/assets/images/wp-images/2020/01/neocities-dashboard.png 981w, /assets/images/wp-images/2020/01/neocities-dashboard-300x169.png 300w, /assets/images/wp-images/2020/01/neocities-dashboard-768x434.png 768w" sizes="(max-width: 981px) 100vw, 981px" />
</div>

Delete all the files within the dashboard apart from `index.html`. This is done by hovering the mouse over each file and selecting `delete`.

Now click on `index.html` to edit it and replace all of the contents of the file with the following HTML code:

<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;p&gt;Welcome to the first stage of my &lt;i&gt;Making A Website&lt;/i&gt; series. As you can see, this page is extremely basic ans is covered in more detail on my first blog post in the series, &lt;a target="blank" href="https://kevq.uk/making-a-website-01-the-basics/"&gt;01 - The Basics&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;You can download the raw files for this step (and all other steps) from the &lt;a href="/downloads.html"&gt;downloads page&lt;/a&gt;.
&lt;p&gt;OK, let's move on to step 1.1, where we start looking at some basic CSS coding.&lt;/p&gt;
&lt;a href="step1.1.html"&gt;On To Step 1.1 --&gt;&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

## Breaking It Down {#h-breaking-it-down}

Let&#8217;s break the site down to it&#8217;s different parts and explain what they all are. After all, what&#8217;s the point in making a website if you don&#8217;t learn something new.

  * The `<head>` element is used to store metadata such as document title and links to stylesheets, fonts and scripts. The `<head>` is not displayed on the page.
  * `<title>` is simply the title of the webpage. It&#8217;s basically the text that&#8217;s displayed within the tab on your browser.
  * `<body>` is where all the fun stuff happens. This is the main bulk of the webpage that is displayed in the browser window.
  * The `<h>` tag defines headers. These can be different sizes, starting with the biggest, `<h1>` to the smallest, `<h6>`.
  * `<p>` simply means normal text and is short for _paragraph_.
  * `<a>` is a hyperlink; it&#8217;s short for _address._
  * When you see a tag that is preceded with a forward slash, for example `</body>` that depicts the end of that particular element.

For now, the only thing you need to edit is the line that starts with `<title>`. Replace my name with whatever you want the title of the webpage to be. The rest you can edit as you see fit. Just play around and have fun with it.

<p class="notice">
  <strong>Challenge: </strong>see if you can work out how to add a bulleted list to your webpage.
</p>

These humble beginnings will eventually grow into a pretty nice looking website. But for the time being, this is what your little website should look like:

<div class="wp-block-image is-style-twentytwentyone-border">
  <img loading="lazy" width="890" height="637" src="/assets/images/wp-images/2020/01/hello-world-website-01.png" alt="" class="wp-image-914" srcset="/assets/images/wp-images/2020/01/hello-world-website-01.png 890w, /assets/images/wp-images/2020/01/hello-world-website-01-300x215.png 300w, /assets/images/wp-images/2020/01/hello-world-website-01-768x550.png 768w" sizes="(max-width: 890px) 100vw, 890px" />
</div>

## Adding CSS {#h-adding-css}

Now we have a really simple (and quite ugly) website, let&#8217;s look at adding some basic CSS so we can make things look a little nicer. Return to your Neocities dashboard and create a new file called `style.css`.

Edit the file and add the following CSS code to it:

<pre class="wp-block-code"><code>body {
  background: #fff;
  color: #333;
  font-family: sans-serif;
  display: block;
  text-align: left;
  width: 800px;
  margin: 0 auto;
}</code></pre>

This CSS, or _Cascading Style Sheet,_ will tell your webpage how you would like the `<body>` element of the site to be rendered. We have picked some colours (`#fff` is white and `#333` is dark grey), a font and also told the body to display in a block that is 700px wide.

<p class="notice">
  <strong>Challenge: </strong>See if you can change the colour of hyperlinks to red.
</p>

The next step is to edit the `index.html` file so that we tell it to use the stylesheet we just created. We do this by adding the highlighted `<link>` element on line 4 to the `<head>` of the website:

<pre class="wp-block-code"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;p&gt;Woah! Things are looking a lot different already, right?&lt;/p&gt;
&lt;p&gt;We have a better looking font, and the content is now displayed in a nice block on the page.&lt;/p&gt;
&lt;p&gt;We've now added a basic Cascading Style Sheet (CSS) file which has formatted the site a little to make it more appealing. &lt;b&gt;No &lt;i&gt;&lt;span style="font-family:TimesNewRoman;"&gt;Times New Roman&lt;/span&gt;&lt;/i&gt; here!&lt;/b&gt;
&lt;p&gt;Just like Step -01, This page is covered in more detail on my first blog post in the series, &lt;a target="blank" href="https://kevq.uk/making-a-website-01-the-basics/"&gt;01 - The Basics&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;You can download the raw files for this step (and all other steps) from the &lt;a href="/downloads.html"&gt;downloads page&lt;/a&gt;.
&lt;p&gt;&lt;b&gt;Step 02 hasn't been published yet. If you want to know when it's release, &lt;a href="https://kevq.uk/feed"&gt;subscribe to my RSS feed&lt;/a&gt;. Once it has been released, this page will be updated.&lt;/b&gt;&lt;/p&gt;
&lt;a href="/index.html"&gt;Go Back Home --&gt;&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

Save the `index.html` file and reload your website. It should now look a little nicer than it did before. The font should have changed and the page&#8217;s contents should be displayed in a nice block.

<div class="wp-block-image is-style-twentytwentyone-border">
  <img loading="lazy" width="890" height="637" src="/assets/images/wp-images/2020/01/hello-world-website-1.1.png" alt="" class="wp-image-917" srcset="/assets/images/wp-images/2020/01/hello-world-website-1.1.png 890w, /assets/images/wp-images/2020/01/hello-world-website-1.1-300x215.png 300w, /assets/images/wp-images/2020/01/hello-world-website-1.1-768x550.png 768w" sizes="(max-width: 890px) 100vw, 890px" />
</div>

## Get a domain (optional) {#h-get-a-domain-optional}

Once you&#8217;re all setup using Neocities, your website address will be `username.neocities.org`. I personally think it&#8217;s best to have a custom domain for your website, but this is totally optional. If you do decide to get a custom domain, make sure you <a href="https://kevq.uk/choosing-the-right-domain-name-for-your-blog/" target="_blank" rel="noreferrer noopener">choose the right one</a>.

I personally use and recommend <a href="https://shrsl.com/2awpe" target="_blank" rel="noreferrer noopener">NameCheap</a> for domain registrations. I&#8217;ve been with them for many years and I think they&#8217;re great.

<p class="notice">
  <strong>Note: </strong>in order to use a custom domain with Namecheap, you will need to upgrade to their <a href="https://neocities.org/supporter" target="_blank" rel="noreferrer noopener">supporter plan</a>.
</p>

## A great start {#h-a-great-start}

That&#8217;s it for this post. We&#8217;re making good progress, but there&#8217;s still a long way to go. In the next _Making A Website_ post, we will look at the following:

  * Picking a colour palette for the site
  * Additional formatting with CSS
  * Embedding images

If you want to download the raw files for this series, <a href="https://mylightwebsite.kevq.uk/downloads.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">you can do so here</a>. I will update the page after every post with latest website files.