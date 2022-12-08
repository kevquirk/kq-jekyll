---
id: 884
title: 'Making A Light Website &#8211; 02 Design'
date: 2020-01-18T14:55:58+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=884
permalink: /making-a-website-02-design/

  
rank_math_primary_category:
  - "54"
description:
  - In the last Making A Light Website post, we went through the basics of getting a simple website. In this post we will look at adding to our light website.
rank_math_focus_keyword:
  - "light website"
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "123"
categories:
  - Web
---
After going though [the last post](https://kevq.uk/making-a-website-01-the-basics/) in the _Making A Website_ series we went through the basics of getting a light website up and running. In this post we will looks at adding to our home page some more. But first, let&#8217;s look at the challenges I set for you in the last post:

<p class="notice">
  <strong>Challenge 1: </strong>see if you can work out how to add a bulleted list to your webpage.
</p>

Did you work this one out? In HTML a bulleted list is called and _unordered list_, which uses the `<ul>` HTML tag. So to add a list, you need to add the following HTML code to your `index.html` file:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;ul&gt;
    &lt;li&gt;This is item #1&lt;/li&gt;
    &lt;li&gt;This is item #2&lt;/li&gt;
    &lt;li&gt;This is item #3&lt;/li&gt;
&lt;/ul&gt;</pre>

<p class="notice">
  <strong>Challenge 2: </strong>See if you can change the colour of hyperlinks to red.
</p>

This one is a CSS challenge. Did you work it out? As I mentioned in the last post, hyperlinks use the `<a>` tag in HTML. So to make a hyperlink the colour red, you need to add the following CSS code to your `style.css` file:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">a {
    color: red;
}</pre>

If you managed to work out how to complete these 2 challenges, well done! Let&#8217;s see what out website looks like with an unordered list added and hyperlinks set to red:

<div class="wp-block-image">
  <img loading="lazy" width="890" height="552" src="/assets/images/wp-images/2020/01/website-bullets-red-links.png" alt="" class="wp-image-888" srcset="/assets/images/wp-images/2020/01/website-bullets-red-links.png 890w, /assets/images/wp-images/2020/01/website-bullets-red-links-300x186.png 300w, /assets/images/wp-images/2020/01/website-bullets-red-links-768x476.png 768w" sizes="(max-width: 890px) 100vw, 890px" />
</div>

## Colour Palette {#h-colour-palette}

One of the first things you need to do when making a website is to decide on the colour palette you wish to use for the site&#8217;s theme. There are some online <a rel="noreferrer noopener" aria-label="colour palette generators (opens in a new tab)" href="http://colormind.io/" target="_blank">colour palette generators</a>, which are generally pretty good. For this site, we&#8217;re looking at simplicity, so we&#8217;re going to use the same colour palette I use for this site:

<div class="wp-block-image">
  <img loading="lazy" width="700" height="467" src="/assets/images/wp-images/2020/01/Colour-Pallete.png" alt="" class="wp-image-890" srcset="/assets/images/wp-images/2020/01/Colour-Pallete.png 700w, /assets/images/wp-images/2020/01/Colour-Pallete-300x200.png 300w" sizes="(max-width: 700px) 100vw, 700px" />
</div>

#### A light website needs a light theme, right? {#h-a-light-website-needs-a-light-theme-right}

Now we have identified the colour palette we&#8217;re going to use for our light website, we need to add some CSS. We _could_ add the colours for each piece of CSS code manually, but if we decided to change the colour palette at a later date, it would mean lots of code changes.

Instead we&#8217;re going to use variables. Variables allow us to set the colours in one place, then reference them throughout the CSS. So if we decide to change the colour palette later on, we only need to update the variables in one place and all CSS using those variables will be updated.

First we need to articulate our variable at the top of the `style.css` file. We do that with the following CSS code:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Global variables for changing colours across the site */
:root {
    --accent: #226997;
    --main: #333;
    --light: #666;
    --lighter: #f3f3f3;
    --border: #e6e6e6;
    --bg: #fff;
}</pre>

Then we can change the colours we setup in the `body` section of our CSS in the last post. To do this, simply change the colour from `#fff` to `var(--bg);`. Our `body` CSS should now looks like this:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="3,4" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Format the main body of the website */
body {
    background: var(--bg);
    color: var(--main);
    font-family: sans-serif;
    font-size: 1.1em;
    display: block;
    text-align: left;
    width: 800px;
    margin: 0 auto;
}</pre>

Now our background colour is set to white because we&#8217;re using the `--bg` variable for the body&#8217;s background, and our text is still grey because we&#8217;re using the `--main` variable for that.

You may have noticed that the `font-size` entry has been added too. This is just to make the text a little bigger and therefore a little easier to read. Feel free to change this to whatever you like, or remove it completely. Personally, I like large text. 🙂

## Formatting Hyperlinks {#h-formatting-hyperlinks}

Next we&#8217;re going to look at formatting how hyperlinks are displayed to make them fit in with our colour palette. Again, we&#8217;re going to format them in the same way I do on this website.

By default hyperlinks are underlined. I don&#8217;t do that with my theme, so we&#8217;re going to change the colour to `--accent` and override the default so links are _not_ underlined. We do this be adding the following code to our `style.css` file:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Format hyperlinks */
a, a:visited {
    color: var(--accent);
    text-decoration: none;
}</pre>

In the CSS above, we have both `a` and `a.visited` set. By default, when you have already clicked a link, it turns purple. We want all of our links to be a consistent colour. Adding `a.visited` ensures this happens.

What we want to do now is add an animation for when someone hovers over the link. In this case we want to underline the text when the mouse cursor hovers over a link. We do this by adding the following CSS code:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">a:hover, a:focus {
    text-decoration: underline;
}</pre>

Again, we have more than one attribute called out. `a:hover` is what happens when the mouse hovers over a link. `a:focus` is when someone clicks the link. If we didn&#8217;t have this, the underline would disappear when someone clicks their mouse to follow a link.

## Banner Image {#h-banner-image}

The next thing we&#8217;re going to do is add a banner image to our website. When making a website, adding images can really add to the aesthetic of the design. But use them sparingly as they can be very large and the larger your website is, the longer it will take to load. Remember, we want a light website.

Ok, we&#8217;re going add a simple banner image to our site and format it slightly with some CSS. To add an image to our `index.html` file, we need to use the `<img>` tag.

To do this, add the following HTML code above the `<h1>` title:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;img class="home-banner" src="images/home-banner.png"&gt;&lt;/img&gt;</pre>

The class of this image is `home-banner`. Classes allow us to apply CSS formatting to that image only, without affecting all of the images on the entire site.

All we need to do now is create a folder in Neocities called `images` and upload the banner image to that folder. This is because the source (or `src`) is `images/home-banner.png`. You&#8217;re telling the HTML that your banner image is called `home-banner.png` and it&#8217;s located in the `images` folder.

<div class="wp-block-image">
  <img loading="lazy" width="982" height="398" src="/assets/images/wp-images/2020/01/neocities-images-folder.png" alt="" class="wp-image-902" srcset="/assets/images/wp-images/2020/01/neocities-images-folder.png 982w, /assets/images/wp-images/2020/01/neocities-images-folder-300x122.png 300w, /assets/images/wp-images/2020/01/neocities-images-folder-768x311.png 768w" sizes="(max-width: 982px) 100vw, 982px" />
</div>

So let&#8217;s add some basic styling to the `banner-image` class. Head over to your `style.css` file and add the following CSS code:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Format the banner image on the home page */
img.home-banner {
    padding-top: 60px;
    padding-bottom: 20px;
}</pre>

All this CSS will do, is add a little bit of white space at the top and bottom of our new banner image. Here is what our light website now looks like with the banner image added:

<div class="wp-block-image">
  <img loading="lazy" width="991" height="792" src="/assets/images/wp-images/2020/01/light-website-02.png" alt="" class="wp-image-940" srcset="/assets/images/wp-images/2020/01/light-website-02.png 991w, /assets/images/wp-images/2020/01/light-website-02-300x240.png 300w, /assets/images/wp-images/2020/01/light-website-02-768x614.png 768w" sizes="(max-width: 991px) 100vw, 991px" />
</div>

#### This is starting to look pretty cool, but it&#8217;s still a very light website! {#h-this-is-starting-to-look-pretty-cool-but-it-s-still-a-very-light-website}

## Adding a Favicon {#h-adding-a-favicon}

If you look at the tab in the image above, it says _Kev Quirk_ in the tab&#8217;s title, but it has no icon next to it. However, when you look at the tab on this website, not only does it say _Kev Quirk_, it also has a grey and white _KQ_ icon with it. That&#8217;s my favicon.

Let&#8217;s add a simple favicon that is in-keeping with the rest of our theme. To do this, we need to add the following line of HTML to `<head>` section of our `index.html` file:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;link rel="shortcut icon" href="images/favicon.png" /&gt;</pre>

Like the banner image, our favicon file is called `favicon.png` and it is located in the `images` folder we created earlier. Now that we have added the code for the favicon to `index.html` let&#8217;s take a look at the site:

<div class="wp-block-image">
  <img loading="lazy" width="991" height="792" src="/assets/images/wp-images/2020/01/light-website-02-favicon.png" alt="" class="wp-image-941" srcset="/assets/images/wp-images/2020/01/light-website-02-favicon.png 991w, /assets/images/wp-images/2020/01/light-website-02-favicon-300x240.png 300w, /assets/images/wp-images/2020/01/light-website-02-favicon-768x614.png 768w" sizes="(max-width: 991px) 100vw, 991px" />
</div>

Much better! We now have a nice blue & grey favicon that matches the banner image on our site. A light favicon to go with a light website.

## Putting It All Together {#h-putting-it-all-together}

So we have made quite a few changes to both the `index.html` and `style.css` files. If you put all the changes together here is what the files should currently look like:

### index.html {#h-index-html}

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;link rel="shortcut icon" href="images/favicon.png" /&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;img class="home-banner" src="images/home-banner.png"&gt;&lt;/img&gt;
  &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;p&gt;Now we're cooking. Not only does the text look better, we also have images and &lt;a href="#"&gt;links look good too&lt;/a&gt;!&lt;/p&gt;
  &lt;p&gt;We have managed to add some additional styleing to our CSS Stylesheet, we have added a favicon and an image in the body of the page.&lt;p&gt;
  &lt;h4&gt;This thing is starting to look like a website!&lt;/h4&gt;
  &lt;p&gt;Just like Step 01, This page is covered in more detail on my first blog post in the series, &lt;a target="blank" href="https://kevq.uk/making-a-website-02-design"&gt;02 - Design&lt;/a&gt;.&lt;/p&gt;
  &lt;p&gt;You can download the raw files for this step (and all other steps) from the &lt;a target="blank" href="/downloads.html"&gt;downloads page&lt;/a&gt;.
  &lt;p&gt;&lt;b&gt;Step 03 hasn't been published yet. If you want to know when it's release, &lt;a target="blank" href="https://kevq.uk/feed"&gt;subscribe to my RSS feed&lt;/a&gt;. Once it has been released, this page will be updated.&lt;/b&gt;&lt;/p&gt;
  &lt;a href="/"&gt;Go Back Home --&gt;&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

### style.css {#h-style-css}

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Global variables for changing colours across the site */
:root {
    --accent: #226997;
    --main: #333;
    --light: #666;
    --lighter: #f3f3f3;
    --border: #e6e6e6;
    --bg: #fff;
}
/* Format the main body of the website */
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
/* Format the banner image on the home page */
img.home-banner {
    padding-top: 60px;
    padding-bottom: 20px;
}
/* Format hyperlinks */
a, a:visited {
    color: var(--accent);
    text-decoration: none;
}
a:hover, a:focus, a:active {
    text-decoration: underline;
}</pre>

## What Next? {#h-what-next}

That&#8217;s it for this _Making A Website_ post. We&#8217;re making really good progress. We <a href="https://mylightwebsite.kevq.uk/steps/step02/index.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">now have a website</a> that has the beginnings of a theme, a colour palette and some custom CSS to pull it all together.

In the next post in this series we&#8217;re going to be looking at adding additional pages and a menu. At the end of this series, your website should look something like <a rel="noreferrer noopener" aria-label="My Light Website (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">mylightwebsite.kevq.uk</a>.

**As usual, if you want to download the raw files for this series, <a href="https://mylightwebsite.kevq.uk/downloads.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">you can do so here</a>. I will update the page after every post with latest website files.**