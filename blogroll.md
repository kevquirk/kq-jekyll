---
title: Blogroll
layout: page
permalink: /blogroll/
description: Kev Quirk's blogroll - a curated list of recommended personal blogs.
hasRandomBtn: true
---

This page lists some of my favourite blogd. It's not an exhaustive list, and certainly not all the blogs I read, but these are my personal recommendations if you're interested in personal blogs.

All my recommendations below have an RSS feed ([I think that’s very important](/please-add-rss-support-to-your-site/)), so you shouldn’t have any problems subscribing if, like me, you prefer to consume your content via RSS.


<ul>
  {% for item in site.data.blogroll %}
  <li><a target="blank" href="{{ item.link }}">{{ item.name }}</a> (<a href="{{ item.rss }}">RSS feed</a>)</li>
  {% endfor %}
</ul>
