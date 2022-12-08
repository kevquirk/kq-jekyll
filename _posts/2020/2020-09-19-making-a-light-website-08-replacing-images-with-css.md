---
id: 2942
title: 'Making A Light Website 08 &#8211; Replacing Images With CSS'
date: 2020-09-19T12:18:43+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2942
permalink: /making-a-light-website-08-replacing-images-with-css/

rank_math_primary_category:
  - "54"
description:
  - In this post we will look at replacing the banner images on My Light Website with some CSS to make the site quicker and lighter.
rank_math_focus_keyword:
  - light website
rank_math_news_sitemap_robots:
  - index
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_analytic_object_id:
  - "52"
categories:
  - Technology
  - Web
---
<p class="has-medium-font-size">
  So <a href="https://mylightwebsite.kevq.uk" target="_blank" rel="noreferrer noopener">My Light Website</a> is looking pretty good at this point, but we can still improve things. In this post we will look at replacing the banner images with some CSS to make the site quicker and lighter.
</p>

When I first took you through <a href="https://mylightwebsite.kevq.uk/start.html" target="_blank" rel="noreferrer noopener">the process of making a light website</a>, I added a banner to all pages that was a basic image. That image looked like this:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-image-banner.png" alt="My Light Website image banner" class="wp-image-2944" srcset="/assets/images/wp-images/2020/09/mylight-website-image-banner.png 881w, /assets/images/wp-images/2020/09/mylight-website-image-banner-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-image-banner-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

Images are great, and add an interesting dynamic to a webpage, but they add weight and can slow down the loading of a webpage. Plus, it means you have to edit every image if you want to change the look of your site.

So I decided it would be better to change the image with a nice formatted block of HTML & CSS. This will offer us much more flexibility if we want to change something at a later date. It also means that no additional images are loaded, making the site lighter and therefore quicker.

Here&#8217;s what the site looks like with the CSS banner implemented:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-css-banner.png" alt="My Light Website CSS banner" class="wp-image-2945" srcset="/assets/images/wp-images/2020/09/mylight-website-css-banner.png 881w, /assets/images/wp-images/2020/09/mylight-website-css-banner-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-css-banner-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

Right, with all that pre-waffle out of the way, let&#8217;s get on with implementing the banner in CSS shall we?

## Replacing the banner image {#h-replacing-the-banner-image}

If you take a look at the <a href="https://github.com/kevquirk/mylightwebsite.kevq.uk" target="_blank" rel="noreferrer noopener">source code</a> of the website in <a href="https://kevq.uk/making-a-website-07-a-new-header-footer/" target="_blank" rel="noreferrer noopener">step 7</a>, you will see that the banner image is added to every page with the following line of code:

<pre class="wp-block-code language-html"><code>&lt;img class="home-banner" src="images/home-banner.png" /></code></pre>

This line of code is inside the `.main` div. On the `index.html` page, it is line 26. **Delete this line of code.**

Once you have deleted the code for the banner image, add the code snippet below **above** the opening `.main` div.

<pre class="wp-block-code language-html"><code>&lt;div class="banner">
    &lt;h1 class="banner-text">MyLight&lt;span class="logo_dot">&lt;/span>Website&lt;/h1>
&lt;/div>

/* Start of the .main div */
&lt;div class="main"></code></pre>

If we were to take a look at the webpage now, it should look something like this:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-banner-without-css.png" alt="" class="wp-image-2949" srcset="/assets/images/wp-images/2020/09/mylight-website-banner-without-css.png 881w, /assets/images/wp-images/2020/09/mylight-website-banner-without-css-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-banner-without-css-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

That new banner doesn&#8217;t really look like much of a banner at the moment, does it? That&#8217;s where our CSS comes in so we can format things correctly.

## Breaking down the HTML {#h-breaking-down-the-html}

Let&#8217;s start by breaking down what we&#8217;ve added with this snippet of HTML. First we add a new `div` with a class of `banner`:

<pre class="wp-block-code language-html"><code>&lt;div class="banner">

&lt;/div></code></pre>

Inside this new div, we&#8217;ve added a line of header text using the `h1` tag. Again, we&#8217;ve given this header a class, which is `banner-text`, so we can apply formatting to this element only.

If we were to leave the `banner-text` class off and apply CSS to `h1` only, it would apply it to every `h1` tag on the entire site. So, adding a class means we only affect the banner text with the CSS we add later.

<pre class="wp-block-code language-html"><code>&lt;div class="banner">
    &lt;h1 class="banner-text">MyLight&lt;span class="logo_dot">&lt;/span>Website&lt;/h1>
&lt;/div></code></pre>

Notice the `<span>` element in the middle of the header? We&#8217;ve applied a class to this element too, and we will use some CSS to create the blue dot in the middle of the banner text.

## Adding CSS {#h-adding-css}

Now you have an understanding of what the HTML is doing on this part of the light website, let&#8217;s start adding the CSS to format things. First we will format the `.banner` div with the following CSS:

<pre class="wp-block-code language-css"><code>.banner {
    background: var(--lighter);
    color: var(--main);
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
    border-radius: 8px;
}</code></pre>

We also need to add `.banner` to the responsive section of the CSS stylesheet, this is lines 13 and 22:

<pre class="wp-block-code language-css"><code>/* Make the website responsive */
@media screen and (max-width: 100%) {
    .main, .header, .banner, .footer {
        width: 800px;
    }
}

.main, .header, .banner, .footer {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}</code></pre>

This ensures that the `.banner` div will follow the same rules as the other sections of the site, like the header, main body and footer.

If you don&#8217;t do this, the `.banner` div will not align with the rest of the site and will not respond correctly on mobile devices.

If we take a look at the light website now, it should look something like this:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-css-banner-01.png" alt="" class="wp-image-2951" srcset="/assets/images/wp-images/2020/09/mylight-website-css-banner-01.png 881w, /assets/images/wp-images/2020/09/mylight-website-css-banner-01-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-css-banner-01-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

That&#8217;s progress, but there&#8217;s no blue dot and the banner isn&#8217;t very tall. Let&#8217;s fix that, shall we?

### Banner text {#h-banner-text}

Next we will change the formatting of the `.banner-text` class. We will add some padding so that the banner&#8217;s background appears a little larger. We will also increase the text size slightly:

<pre class="wp-block-code language-css"><code>.banner-text {
    padding: 1em .5em;
    font-size: 2.5em;
}</code></pre>

If we take a look at the site now, we&#8217;re starting to have something that resembles a banner. However, there&#8217;s still no blue dot. Let&#8217;s fix that next&#8230;

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-css-banner-02.png" alt="" class="wp-image-2953" srcset="/assets/images/wp-images/2020/09/mylight-website-css-banner-02.png 881w, /assets/images/wp-images/2020/09/mylight-website-css-banner-02-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-css-banner-02-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

### Adding the blue dot {#h-adding-the-blue-dot}

For this, we&#8217;re going to create a small circle purely in CSS and we will give that circle a blue background. Finally, we will add a small `2px` margin so there&#8217;s some white space between the dot and the letters.

<pre class="wp-block-code language-css"><code>span.logo_dot {
    background-color: var(--accent);
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 2px;
}</code></pre>

If you want to change the size of the dot, simply change `8px` on the `width` and `height` elements to decrease or increase the size.

Back to the website and&#8230;ta da! We finally have a light website that has a banner written purely in HTML/CSS:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-css-banner.png" alt="" class="wp-image-2945" srcset="/assets/images/wp-images/2020/09/mylight-website-css-banner.png 881w, /assets/images/wp-images/2020/09/mylight-website-css-banner-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-css-banner-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

## What next? {#h-what-next}

That&#8217;s the banner on the homepage done. Now you can replace the image on the other pages with a similar piece of HTML that displays that page&#8217;s title.

For example, this is what the **Getting Started** banner looks like:

<img loading="lazy" width="881" height="559" src="/assets/images/wp-images/2020/09/mylight-website-css-banner-getting-started.png" alt="" class="wp-image-2954" srcset="/assets/images/wp-images/2020/09/mylight-website-css-banner-getting-started.png 881w, /assets/images/wp-images/2020/09/mylight-website-css-banner-getting-started-300x190.png 300w, /assets/images/wp-images/2020/09/mylight-website-css-banner-getting-started-768x487.png 768w" sizes="(max-width: 881px) 100vw, 881px" />  

Here we are using the page title within the banner, and we have our familiar blue dot. The HTML for the banner on this page looks like this:

<pre class="wp-block-code language-html"><code>&lt;div class="banner">
    &lt;h1 class="banner-text">Getting Started&lt;span class="logo_dot">&lt;/span>&lt;/h1>
&lt;/div></code></pre>

### Tidying up {#h-tidying-up}

Once you have replaced all of the banner images with the CSS banner, don&#8217;t forget to delete the actual image from your `/images` folder. Otherwise you&#8217;re just wasting space on your web server.

Finally, you need to delete the CSS that formatted the old banner image. To do this, delete the following lines of CSS from your stylesheet:

<pre class="wp-block-code language-css"><code>img.home-banner {
    padding-bottom: 20px;
    max-width: 100%;
    height: auto;
}</code></pre>

If you want to inspect the entire source code for this project, you can view it on my GitHub profile.

<a class="button" target="blank" href="https://github.com/kevquirk/mylightwebsite.kevq.uk" rel="noopener noreferrer"><i class="fa fa-github fa-lg" aria-hidden="true"></i> View mylightwebsite.kevq.uk on GitHub</a>

## Conclusion {#h-conclusion}

Designing and maintaining a website is a constant thing. It&#8217;s not something you just set and forget (well, it&#8217;s not for me at least). It&#8217;s important to keep trying to improve your site&#8217;s code and functionality.

With this update we have managed to make and already light website that little bit lighter. We&#8217;ve also been able to make maintaining it a little bit easier, as we don&#8217;t need to manage images for our banner.

I hope you found this post useful. If you think there are more improvements/additions I can make to the <a href="https://mylightwebsite.kevq.uk" target="_blank" rel="noreferrer noopener">mylightwebsite.kevq.uk</a> project, please do let me know.
