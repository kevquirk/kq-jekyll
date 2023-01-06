---
title: How To Add Search To A Jekyll Site
description: I've wanted a way to search this site for a while, finally I have it. Here's how to add an on-site search tool to a Jekyll site.
image: assets/images/search-jekyll-feature.webp
date: 2021-12-09T20:46:00.000Z
category: [Blogging, Web]
layout: post
rss_only: false
---
{:  .tldr}
[When I flipped from WordPress to Jekyll](/goodbye-wordpress-switched-to-jekyll/), one thing I really missed was the ability to search my posts **on-site**. I've now added a proper search tool and this post will show you can do it too.

To add search functionality to a Jekyll site, I used Chris Fei's [Simple Jekyll Search](https://github.com/christian-fei/Simple-Jekyll-Search/), which has really verbose documentation on how to set it all up.

But there were a couple of things I did differently to how Chris recommends, so I wanted to write up how I did it, just in case any of you fine folk find it useful.

How it works is pretty clever. Basically, you create a `search.json` data file within your site that pulls in all kinds of metadata from your posts at build time.

This is all compiled into the `search.json` file and then a little bit of JavaScript parses that file for a term you search for, which is then displayed on-screen. Very simple, yet very clever. I like it!

Right, enough waffle, let's get on with the how to...

## Step 1 - create the data file
The first thing we're going to do is create the `search.json` file so that our JavaScript has something to parse when a search is run.

Create a new file in the **root of your website** and call it `search.json`, then add the following code to it:

```liquid
{% raw %}---
---
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date | date_to_string }}",
      "description" : "{{ post.description | strip_html | strip_newlines | escape }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]{% endraw %}
```

So what the hell are we doing here then? Well, the first thing we do is add two lines that contain three dashes each. This is to add [front matter](https://jekyllrb.com/docs/front-matter/) to the page, so Jekyll knows to render it at build time.

Then we're doing a little hop, skip and a loop through all of the posts on our site so that `search.json` is populated with the post title, URL, date and description at build. All of the quotes, commas and square brackets are to ensure the output is correctly formatted in JSON markup.

Once the build completed, the contents of `search.json` looks something like this for my blog:

```json
[
    {
      "title"    : "Goodbye WordPress, I've Switched To Jekyll (Again)",
      "url"      : "/goodbye-wordpress-switched-to-jekyll/",
      "date"     : "04 Dec 2021",
      "description" : "I&#39;ve decided to leave WordPress behind and switch to Jekyll...for a second time. This post explains why..."
    } ,

    {
      "title"    : "The Pagination Predicament",
      "url"      : "/the-pagination-predicament",
      "date"     : "26 Nov 2021",
      "description" : "I&#39;ve removed pagination from my blog for SEO reasons. This post explains why."
    }
]
```

{:  .notice}
We're escaping the HTML on the description so that any special characters in our description, like quote marks, don't break the JSON markup in the file.

## Step 2 - add the JavaScript & form
Now we have the data set we want our search form to query, it's time to add some JavaScript so we can parse the results, as well as form so we can, you know, display said results.

The instruction on Chris' repository recommend pulling the JS from NPM's CDN by way of a `<script>` element in the `<head>` of the site's default layout.

I decided not to do that for 2 reasons:
1. I don't want to load that JavaScript on every single page, when it's only needed on [my search page](/search).
2. I didn't want add any third party requests on page load.

So instead, I decided to save the [raw JavaScript](https://raw.githubusercontent.com/christian-fei/Simple-Jekyll-Search/master/dest/simple-jekyll-search.min.js) to `/assets/js/search-script.js` within my site.

Then I made another file inside my `_includes` folder called `search-form.html` that includes the following content:

```html
<!-- HTML search field -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Type your search here..." autofocus>
<ul id="results-container"></ul>
</div>

<!-- Grab search-script.js -->
<script src="/assets/js/search-script.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
```

What this code is doing is calling my `search-script.js` file, adding the actual search field, then finally configuring the results that are displayed.

As this is in my `_includes` folder and it contains everything I need to perform a search, I can add it anywhere to my site knowing that the JS will only be loaded where needed.

To embed the search field into anywhere, all I need to do is add the following code where I want it to be displayed:

```liquid
{% raw %}{% include search-form.html %}{% endraw %}
```

## Step 3 - format the results
The default output of the search form is to display the results as a simple unordered list, complete with bullet points and padding.

Because of this, the mobile experience isn't great as the results are too close together. Plus, I wanted to add the date of the post to the results as well.

To do this, I added an extra line to the `configuration` section of my `search-form.html` file with the following:

```html
searchResultTemplate: '<li><a href="{url}">{title}</a><br><span class="post-meta">{date}</span></li>'
```

{:  .notice-red}
It's **VERY** important to add a comma at the end of the previous line, otherwise the results won't work.

With that in mind, our completed `configuration` section should look like this:

```html
<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}">{title}</a><br><span class="post-meta">{date}</span></li>'
})
</script>
```

So here we've added a line break to the output and configured it to display the date of the post, as well as add a class of `post-meta` using the `<span>` element.

The final step is to remove the bullet points and padding, as well as space out the results and format the date so it's a little smaller than the rest of the text. I did that with the following CSS:

```css
ul#results-container {
  padding: 0;
  list-style-type: none;
}

#results-container li {
  margin-bottom: 1.5rem;
}

span.post-meta {
  font-size: 1rem;
}
```

## The results
Remember I said that because of the way I've set this up, I can embed the search form anywhere without loading the JS on the rest of my site? Well, here you go, you can play with the search form yourself right here:

{% include search-form.html %}

Pretty cool huh? The results are nice and easy to see, they work well on mobile and the date is nicely formatted too. Plus, we're not wasting KBs of data loading unnecessary JS on every page load.

{: .notice}
I should add here that the JS for the search form is less than 2KB in size, so even if you decide to load it on every page, it won't add much bloat to your site.

### Keeping it accessible
There was still more to do. Personally, [I don't mind JavaScript](/is-javascript-bad-well-only-if-youre-using-it-wrong/) as long as it's used correctly, but some people don't. So I wanted a way to  search this site *without* JavaScript too.

On my [search page](/search) I added an extra form that doesn't require any JS, but instead searches this site on [DuckDuckGo](https://duckduckgo.com).

Having two search forms on one page would be confusing though, so I hid the DuckDuckGo search form behind the good old `<details>` element. Here's what it looks like:

<details>
  <summary>Hey, I don't like Javascript!</summary>
  <p>I get it, not everyone likes JavaScript. I want this site to be as accessible as possible, so if you prefer not to use JavaScript, or have it disabled in your browser, use this form to search my site with DuckDuckGo instead:</p>

  <form class="search-form" method="get" action="https://duckduckgo.com/?q=" target="_blank">
  			<input type="hidden" name="sites" value="kevq.uk" />
  			<label for="search" class="visuallyhidden">Search this site on DuckDuckGo</label>
  			<input type="text" name="q" id="search" placeholder="Search kevq.uk on DuckDuckGo" class="search"><br>
  			<input type="submit" name="submit" value="Search" id="submit"/>
  </form>
</details>

## Closing thoughts
Adding on-site search to a Jekyll site was a lot easier than I thought, but people shouldn't be forced to use JavaScript if they don't want to.

I think the solution I've come up with should satisfy pretty much every one who visits this site. For those that don't mind, you have a first class, on-site search solution that you can make use of. But if you prefer to avoid JS, I still have you covered.

**If you're thinking about adding search to your Jekyll site, hopefully this post will help, but I have assumed a certain level of knowledge here. If anything isn't clear, please feel free to get in touch using the button below.**
