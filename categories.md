---
title: Categories
description: Here's a list of the categories for all the posts on this site.
permalink: /categories/
layout: default
image: /assets/images/default-feature.png
---
<h1 class="page-title">{{ page.title }}</h1>

{{ page.description }}

<ul class="categories">
  {% assign sorted_cats = site.categories | sort %}
  {% for category in sorted_cats %}
    <li><a href="{{ site.url }}/category/{{ category | first | slugify }}/">{{ category | first }}</a> ({{ category | last | size }})</li>
  {% endfor %}
  </ul>