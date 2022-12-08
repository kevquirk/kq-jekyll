---
id: 957
title: 'Making A Website &#8211; 03 Menus'
date: 2020-01-27T14:12:28+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=957
permalink: /making-a-website-03-menus/

  
rank_math_primary_category:
  - "54"
description:
  - "From the previous post, we now have a pretty good looking webpage, but it's now time to turn it into a website. Let's add some more pages and a menu."
rank_math_focus_keyword:
  - website
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "118"
categories:
  - Web
---
From the [previous post](https://kevq.uk/making-a-website-02-design/), we now have a pretty good looking webpage, but it&#8217;s now time to turn it into a _website_. In this post we&#8217;re going to add additional pages, as well as a menu.

We&#8217;re also going to start structuring our code a little better, by adding comments. These will allow us to add useful bits of information that help explain what the code does, but they aren&#8217;t visible on the page.

## The Menu {#h-the-menu}

The first thing we need to do is to add the code to our `index.html` file that will display the website menu. For this we&#8217;re going to use the unordered list tag, `<ul>`. We will then add some CSS formatting to menu so it looks like an actual menu, instead of an unordered list!

Just below the opening `<body>` tag, add the following code:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!-- *** NAVIGATION SECTION *** --&gt;
  &lt;ul class="nav"&gt;
    &lt;li class="nav"&gt;&lt;a href="index.html" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav"&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav"&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;</pre>

Notice how we have given the unordered list items a class of `nav`? This is so we can add specific CSS to this particular unordered list, without affecting all other unordered lists across our website. We&#8217;re going to add 2 additional pages &#8211; an _About_ page and a _Contact_ page. 

If you refresh the homepage now, it should look something like this:

<img loading="lazy" width="1024" height="724" src="/assets/images/wp-images/2020/01/light-website-menu-01-1024x724.png" alt="" class="wp-image-1042" srcset="/assets/images/wp-images/2020/01/light-website-menu-01-1024x724.png 1024w, /assets/images/wp-images/2020/01/light-website-menu-01-300x212.png 300w, /assets/images/wp-images/2020/01/light-website-menu-01-768x543.png 768w, /assets/images/wp-images/2020/01/light-website-menu-01.png 1131w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Looks just like a standard unordered list at the top of the page &#8211; pretty rubbish menu, right?

## Adding CSS {#h-adding-css}

That&#8217;s it for the HTML for now, we will add some more additions later, but for now let&#8217;s make this unordered list look like an actual menu.

To format the unordered `nav` list so it looks like a proper menu, add the following CSS to your `style.css` file:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Format Nav Bar */
ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--main);
}
li.nav {
  float: left;
}
li.nav a {
  display: block;
  color: var(--bg);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
ul.nav li.nav a:hover:not(.active){
  background-color: var(--accent);
}
.active {
	background-color: var(--accent);
}</pre>

That&#8217;s 28 lines of CSS that we just added; let&#8217;s take a minute to talk through what all this CSS is actually doing.

  * `ul.nav` removes the actual bullet point from the list, ensures the menu is a bar spanning the whole page and is dark grey.
  * `li.nav` aligns the menu items to the left of the page.
  * `li.nav a` displays the menu items like buttons and formats their colours.
  * `ul.nav li.nav a:hover:not(.active)` ensures that menu items turn blue on hover, and that the active menu item (the menu item that corresponds to the page you&#8217;re on) stays blue, even when hovering over it.
  * `.active` makes the active menu item blue.

We now have something that actually looks like a menu:

<img loading="lazy" width="1024" height="724" src="/assets/images/wp-images/2020/01/light-website-menu-02-1024x724.png" alt="" class="wp-image-1045" srcset="/assets/images/wp-images/2020/01/light-website-menu-02-1024x724.png 1024w, /assets/images/wp-images/2020/01/light-website-menu-02-300x212.png 300w, /assets/images/wp-images/2020/01/light-website-menu-02-768x543.png 768w, /assets/images/wp-images/2020/01/light-website-menu-02.png 1131w" sizes="(max-width: 1024px) 100vw, 1024px" />  

#### Look at that beautiful menu! {#h-look-at-that-beautiful-menu}

That&#8217;s it for the CSS changes &#8211; we now need to make the additional pages that will be added to our website.

## Adding Pages {#h-adding-pages}

This part is really simple. All you need to do is copy and paste your `index.html` page and rename it to `template.html`. Then, delete the page&#8217;s contents. Finally, add comments below the banner image and your template should look something like this:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;link rel="shortcut icon" href="images/favicon.png" /&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- *** NAVIGATION SECTION *** --&gt;
&lt;ul class="nav"&gt;
  &lt;li class="nav"&gt;&lt;a href="index.html" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;
&lt;img class="home-banner" src="images/home-banner.png"&gt;&lt;/img&gt;
&lt;!-- *** START PAGE CONTENT *** --&gt;
&lt;p&gt;Start adding your content here!&lt;/p&gt;
&lt;!-- *** END PAGE CONTENT *** --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

Now you have your basic template file, save it then make 2 more copies of it. Rename those files to `about.html` and `contact.html`. You then need to edit the highlighted lines below within each file:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="6,12,13,14,22" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;link rel="shortcut icon" href="images/favicon.png" /&gt;
&lt;title&gt;mylightwebsite.kevq.uk&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- *** NAVIGATION SECTION *** --&gt;
&lt;ul class="nav"&gt;
  &lt;li class="nav"&gt;&lt;a href="index.html" class="active"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;
&lt;img class="home-banner" src="images/home-banner.png"&gt;&lt;/img&gt;
&lt;!-- *** START PAGE CONTENT *** --&gt;
&lt;p&gt;Start adding your content here!&lt;/p&gt;
&lt;!-- *** END PAGE CONTENT *** --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

Here&#8217;s an explanation of why you&#8217;re editing these particular lines for each of your new pages:

  * **Line 6** &#8211; Change `mylightwebsite.kevq.uk` to the name of the page you&#8217;re creating. For example, `About Me` on the about page and `Contact Me` on the contact page. That title will then be displayed in the browser window title bar.
  * **Lines 12-14** &#8211; You need to move the `class="active"` section to the corresponding page you&#8217;re creating. This is so the menu items correctly show as active in the menu bar when you change pages.
  * **Line 22** &#8211; This one is easy, start adding your content for that page.

Once you&#8217;re done adding the additional pages, save them to the same location as your `index.html` in <a rel="noreferrer noopener" aria-label="NeoCities (opens in a new tab)" href="https://neocities.org" target="_blank">NeoCities</a>, or whatever your hosting provider is.

You should now be able to navigate around your site and when you do, the correct menu items will be highlighted in blue for whatever page you&#8217;re visiting.

If in the future you want want to add even more pages, just re-use your template file. You will also need to add an additional line to the nav list for any new pages. The new line will also need to be added to every existing page on your site.

## Conclusion {#h-conclusion}

As always, you can see the results in a wizard-like format on <a rel="noreferrer noopener" aria-label="mylightwebsite.kevq.uk (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">mylightwebsite.kevq.uk</a>. Step 3 has been published, so you can see our new menu in action.

There are also links to all of the post in this series, as well as the source code for each step, on the <a rel="noreferrer noopener" href="https://mylightwebsite.kevq.uk/downloads.html" target="_blank">downloads page</a>.