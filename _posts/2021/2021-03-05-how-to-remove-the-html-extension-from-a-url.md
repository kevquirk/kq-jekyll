---
id: 4713
title: How To Remove The HTML Extension From A URL
date: 2021-03-05T14:12:58+00:00

layout: post
permalink: /how-to-remove-the-html-extension-from-a-url/
description:
  - Want to know how to remove the HTML extension from a URL? This post has a couple of solutions on how to remove the HTML extensions easily.
categories:
  - Web
---
<p class="medium">
  I was recently asked how to remove the HTML extension from a URL on a webpage. I provided some quick advice on how to do this, but thought it would be good to write a post on how to do it.
</p>

If you don't know what I'm talking about here, it's when you visit a website and the URL looks something like this - `https://example.com/about.html`. Specifically, the `.html` part is the problem here as most people would prefer to see `https://example.com/about` instead. It's nicer, don't you think?

There are a couple of ways to remove the HTML extension from a URL, so let's go through a couple of them, shall we? To help me along, I've spun up a quick test site using <a href="https://simplecss.org" target="_blank" rel="noreferrer noopener">Simple.css</a>. It looks something like this:

![](/assets/images/test-site-01.png)

Notice the URL in the address bar - `https://test.kq.md`. Let's visit the about page and see what happens&#8230;

![](/assets/images/test-site-02.png)

Ahhhhh my eyes! 🤮 Look at that horrible mess! `https://test.kq.md/about.html` is no good. The first solution for removing the HTML extension from the URL is simple - **put the page in a folder.**

## Solution 1 - Put pages in folders {#h-solution-1-put-pages-in-folders}

The test site I've made is currently flat and has no folder structure. So it looks like this:

```
|-- 📄 index.html
|-- 📄 about.html
```

In order to change `/about.html` to `/about` simply create a folder called `about`, move `about.html` into that folder and rename it to `index.html`. Once those changes are made, the new folder structure should look something like this:

```
|-- 📄 index.html
|-- 📁 about
     |-- 📄 index.html
```

After making that change, let's revisit the about page and see what's happened to the URL:

![](/assets/images/test-site-03.png)

Look at that URL, folks! There's no file extension to be seen. Can we just bask in the glory of what we have accomplished for a second here please?

This is how many static site generators, [like Jekyll](/how-to-build-jekyll-site-simple-css/), generate their pages. Everything is in its own sub-folder and therefore have no file extensions in sight.

So, basking complete; we're feeling good. Our mojo is strong and all is well in the world. Well, all is well if you only have a couple of pages on your website. What if you have a blog with tens, or even hundreds of pages? It may not be feasible to restructure your entire site to remove the HTML extension from your URLs.

## Solution 2 - remove the HTML extension with a .htaccess redirect {#h-solution-2-remove-the-html-extension-with-a-htaccess-redirect}

An alternative solution is to use your web server's <a href="https://en.wikipedia.org/wiki/.htaccess" target="_blank" rel="noreferrer noopener">.htaccess</a> file in order to remove the file extension from the URL. This is done very simply in just a few lines of code:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(&#91;^/]+)/$ $1.html
RewriteRule ^(&#91;^/]+)/(&#91;^/]+)/$ /$1/$2.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(\.&#91;a-zA-Z0-9]{1,5}|/)$
RewriteRule (.*)$ /$1/ &#91;R=301,L]
```

What this snippet of code is doing, is stripping out `.html` from the URL path. It will also redirect anyone who visits a URL with `.html` appended to it, so you shouldn't get any 404 errors if people visit the full URL.

## Conclusion {#h-conclusion}

That's it, we're done! With either of these solutions you should be able to remove the HTML extension from all of your URLs and rid yourself of all that ugliness.

Per [my disclaimer](/disclaimer/), this is just how I've managed to accomplish this myself. Do you have a better way? If so, please let me know.

If you're hosting your site with Netlify, you could cut out this process completely and use their in-built option for removing file extensions. <a href="https://blog.mooreanalysis.com/extension-removal/" target="_blank" rel="noreferrer noopener">This post by Ryan Moore</a> shows you how.
