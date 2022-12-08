---
id: 1086
title: 'Making A Website 05 &#8211; Adding A Blog'
date: 2020-02-01T10:19:46+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=1086
permalink: /making-a-website-05-adding-a-blog/

  
rank_math_primary_category:
  - "54"
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "116"
categories:
  - Web
---
Creating this <a rel="noreferrer noopener" aria-label="light website (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">light website</a> has been really fun, but in its current form, there isn&#8217;t much you can do with it. You may want to use it as a place for sharing your thoughts or knowledge with the world. So in this post we&#8217;re going to add a blog.

## Why have a blog? {#h-why-have-a-blog}

Personally, I really enjoy writing on this blog. I find the process of writing cathartic, and I really enjoy the engagements I have with my readers.

However, you may want your light website to be nothing more than a kind of online business card, or a place to easily give people your contact/social links. That&#8217;s absolutely fine; and the website we currently have will do that well. If that&#8217;s you, feel free to skip this post.

But if like me, you want to share your thoughts, likes, interests and knowledge with other people, you&#8217;re going to need a blog. So let&#8217;s look at adding a basic blog to our site.

## Blog Home {#h-blog-home}

The first thing we need to do is add a home for our blog. This is a page that displays links to all of the blog posts on our site. If you go to the <a rel="noreferrer noopener" aria-label="homepage (opens in a new tab)" href="https://kevq.uk" target="_blank">homepage</a> of this site, you will see what I mean.

To do this, we will start off with the template file we created in [step 03 of this series](https://kevq.uk/making-a-website-03-menus/). Here&#8217;s what you need to do:

  1. Create a new folder and call it `blog`.
  2. Copy your `template.html` file to your `blog` folder.
  3. Rename the copy to `index.html`.
  4. Add a menu item to **all** of your pages that points to `/blog`.
  5. Precede all links in your menu with a forward slash.

<p class="notice">
  Remember to add <code>class="active"</code> to the menu links that are active for each page.
</p>

Once you have made all of the changes above, here is what the menu should look like on your **blog** page:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!-- *** NAVIGATION SECTION *** --&gt;
&lt;ul class="nav"&gt;
  &lt;li class="nav"&gt;&lt;a href="/index.html" &gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/blog" class="active"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;</pre>

Once you have the main blog page added, it&#8217;s now time to add our first post. The first thing we need to do is create another folder within the `blog` ****folder, called `posts`. This is where we will store all of our blog posts.

Now we&#8217;re in our new posts folder, create another folder called `00-template`. Within that folder, create another folder called `images`.

Each blog post will have it&#8217;s own folder. I would recommend using a sequential number, followed by the blog post&#8217;s title for this:

<div class="wp-block-image">
  <img loading="lazy" width="958" height="653" src="/assets/images/wp-images/2020/02/post-folders.png" alt="" class="wp-image-1089" srcset="/assets/images/wp-images/2020/02/post-folders.png 958w, /assets/images/wp-images/2020/02/post-folders-300x204.png 300w, /assets/images/wp-images/2020/02/post-folders-768x523.png 768w" sizes="(max-width: 958px) 100vw, 958px" />
</div>

If you look at the blog on [step 5 of mylightwebsite.kevq.uk](https://mylightwebsite.kevq.uk/steps/step05/blog/), you will see the two blog posts shown in the image above.

Next we need to make a blog post template. You can use the page template we already have, and make some changes to it. 

I&#8217;d also recommend adding a checklist at the bottom of the page, so you don&#8217;t forget to update anything when writing a new post. This can be in the form of a HTML comment, so it&#8217;s not visible within the post.

Once that&#8217;s done, the source code for your post template should look something like this:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="/style.css" rel="stylesheet" type="text/css" media="all"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;link rel="shortcut icon" href="/images/favicon.png" /&gt;
&lt;title&gt;CHANGE ME&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="main"&gt;
&lt;!-- *** NAVIGATION SECTION *** --&gt;
&lt;ul class="nav"&gt;
  &lt;li class="nav"&gt;&lt;a href="/index.html" &gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav"&gt;&lt;a href="/blog" class="active"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- *** END NAVIGATION *** --&gt;
&lt;!-- *** START PAGE CONTENT *** --&gt;
&lt;h1&gt;YOUR TITLE HERE&lt;/h1&gt;
&lt;p class="meta"&gt;Posted DATE&lt;/p&gt;
&lt;img src="images/image.jpg"&lt;/img&gt;
&lt;p&gt;START TYPING YOUR CONTENT HERE...&lt;/p&gt;
&lt;!-- *** END PAGE CONTENT *** --&gt;
&lt;!-- **PUBLISHING CHECKLIST**
Here's a checklist of all the things you need to change:
  - Change the page title (line 7)
  - Change the post title (line 22)
  - Change the post date (line 23)
  - Change the img link to add a header image, or remove it completely (line 25)
  - Add your content!
  - Update the blog page with a link to the new post.
** END CHECKLIST** //--&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

If you want to add images to your blog post, add them to your `/images` folders within the posts&#8217; directory. Then add the correct `<img>` html to embed your images. For example, if you&#8217;re adding an image called `laptop.jpg` the code would be as follows:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;img src="images/laptop.jpg"&lt;/img&gt;</pre>

Once you have created your blog posts, you need to add them to your list of posts on the main blog page. You do this by adding the following HTML to the content section of your `blog` page:

<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;p&gt;&lt;a href="posts/02-getting-used-to-html/"&gt;Getting Used To HTML&lt;/a&gt;&lt;/p&gt;
&lt;p class="meta"&gt;Posted 01st Feb 2020&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;&lt;a href="posts/01-my-first-post/"&gt;My First Post&lt;/a&gt;&lt;/p&gt;
&lt;p class="meta"&gt;Posted 14th Jan 2020&lt;/p&gt;</pre>

The `<br>` tag adds a line break, so you can make the gap between the post titles bigger. All this does is separate the blog post titles a little, so it&#8217;s clear where one ends and another begins.

<img loading="lazy" width="963" height="832" src="/assets/images/wp-images/2020/02/light-blog-page.png" alt="" class="wp-image-1095" srcset="/assets/images/wp-images/2020/02/light-blog-page.png 963w, /assets/images/wp-images/2020/02/light-blog-page-300x259.png 300w, /assets/images/wp-images/2020/02/light-blog-page-768x664.png 768w" sizes="(max-width: 963px) 100vw, 963px" /> <figcaption>Our main blog page</figcaption> <img loading="lazy" width="959" height="831" src="/assets/images/wp-images/2020/02/light-blog-post.png" alt="" class="wp-image-1096" srcset="/assets/images/wp-images/2020/02/light-blog-post.png 959w, /assets/images/wp-images/2020/02/light-blog-post-300x260.png 300w, /assets/images/wp-images/2020/02/light-blog-post-768x665.png 768w" sizes="(max-width: 959px) 100vw, 959px" /><figcaption>A blog post</figcaption> 

## Meta CSS {#h-meta-css}

Notice how the date on both the template page and the post page is formatted a little differently? It&#8217;s smaller, italic and light grey. This is because we have used `class="meta"` when coding the date.

What we need to do now, is add some CSS to our `style.css` file so that it&#8217;s formatted correctly:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Custom typography */
p.meta {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--light);
  margin-top: -1em;
}</pre>

## That&#8217;s It! {#h-that-s-it}

You&#8217;ve just added a blog to your light website. When you want to write a new blog post, just copy and past your `00-template` folder, then edit your post and update the main blog page.

In the 6th and final post in this series, we will be adding a few finishing touches to our light website to finish things off.

You can follow along with the entire series on my dedicated website, <a rel="noreferrer noopener" aria-label="mylightwebsite.kevq.uk (opens in a new tab)" href="https://mylightwebsite.kevq.uk" target="_blank">mylightwebsite.kevq.uk</a>. It will show you each step in a wizard-like format, and there are also links to download all the source code.