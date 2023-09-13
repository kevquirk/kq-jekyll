---
id: 1863
title: Adding A Scroll To Top Button Without JavaScript
date: 2020-05-06T11:53:43+01:00

layout: post
permalink: /adding-a-scroll-to-top-button-without-javascript/
description:
  - I was using a plugin for my scroll to top button, but I've now replaced that with a simple HTML/CSS solution that doesn't use any JavaScript. Here's how...
categories:
  - Web
---
#### I _was_ using a plugin for my _Scroll To Top_ button, but I&#8217;ve now replaced that with a simple HTML/CSS solution that doesn&#8217;t use any JavaScript. {#h-i-was-using-a-plugin-for-my-scroll-to-top-button-but-i-ve-now-replaced-that-with-a-simple-html-css-solution-that-doesn-t-use-any-javascript}

I recently wrote about [the plugins that I use on this site](https://kevquirk.com/which-wordpress-plugins-i-use/). In that post I mentioned the [WPFront Scroll Top](https://wordpress.org/plugins/wpfront-scroll-top/) plugin that I was using for __the _Scroll To Top_ button on this site. I decided that was pretty lazy and relatively simple to fix, so the plugin had to go.

I wanted a simple solution that didn&#8217;t use any JavaScript, as I&#8217;m trying to reduce the amount of JavaScript used on this site. I&#8217;ve managed to come up with a simple solution that doesn&#8217;t need _any_ JavaScript.

## Adding HTML/CSS Scroll To Top {#h-adding-html-css-scroll-to-top}

Implementing this solution is extremely easy. The first thing you need to do is add a blank hyperlink right below the `<body>` tag in your site&#8217;s HTML:

<pre class="wp-block-code"><code>&lt;a name="top">&lt;/a></code></pre>

If you&#8217;re using WordPress, like I am, then you will need to edit your theme to do this. If you&#8217;re going to edit your theme, I&#8217;d recommend creating a [child theme](https://codex.wordpress.org/Child_Themes) so that your changes aren&#8217;t overwritten when your theme is updated.

In WordPress, the opening `<body>` tag is usually found in the `header.php` file. Adding the blank link here will ensure that it&#8217;s automatically added to all of your pages and posts.

## The Footer {#h-the-footer}

Once you have done that, all that is needed now is to open up the `footer.php` file of your WordPress theme and add the following link to it:

<pre class="wp-block-code"><code>&lt;a href="#top">Back To Top&lt;/a></code></pre>

This will add a link in your footer that references the blank link right at the top of your page. So when someone clicks on that link, they will be taken back to the top of the page.

## Smooth Scrolling {#h-smooth-scrolling}

That&#8217;s it, you don&#8217;t need to do anything else. You now have a working scroll to top button that doesn&#8217;t require any JavaScript. However, you may notice that when you click on the `Back To Top` link, the page just jumps straight to the top.

While this is working, it&#8217;s pretty jarring when the page just jumps from one end to the other. A better way of doing this, is to implement `smooth-scrolling`. This will simulate the user scrolling back to the top of the page, instead of just jumping straight there.

Smooth scrolling is also super simple to implement, and doesn&#8217;t require any JavaScript. Open up your CSS stylesheet and add the following:

<pre class="wp-block-code"><code>html {
  scroll-behavior: smooth;
}</code></pre>

<p class="has-white-color has-blue-background-color has-text-color has-background">
  Note: not all browsers support <code>scroll-behavior</code>, but for those that do, it&#8217;s a better experience.
</p>

That&#8217;s literally it! This one piece of styling is enough to enable a nice smooth scrolling effect back to the top of the page, instead of that jarring jump.

## Conclusion {#h-conclusion}

I don&#8217;t know why I didn&#8217;t do this sooner, as it only took me 10 minutes to do. I just hadn&#8217;t thought of removing that plugin until I actually took the time to go through which plugins I has installed.

From now on I&#8217;m going to review the plugins regularly. I can then decide if any need to be removed, or replaced by adding similar functionality within my theme.
