---
layout: page
title: Stats
---

	{% comment %}
	taken from the code in sidebar.html, attempts to lowercase/unique the set of cats
	get total num of words and avg
	{% endcomment %}

	{% assign totalWords = 0 %}
	{% assign dateOb = '' %}

	{% for post in site.posts %}
		{% assign postWords = post.content | number_of_words %}
		{% assign totalWords = totalWords | plus:  postWords %}
		{% assign pd = post.date | date: "%Y-%m-%d" %}
		{% unless forloop.first %}
			{% assign dateOb = dateOb | append: "," %}
		{% endunless %}
		{% assign dateOb = dateOb | append: pd %}
	{% endfor %}

	{% assign avgWords = totalWords | divided_by: site.posts.size %}

**Total posts:** {{ site.posts.size }} <br>
**Total categories:** {{ site.categories.size }} <br>
**Total words:** {{ totalWords }} <br>
**Average words per post:** {{ avgWords }} <br>

## Posts by category
<ul>
  {% assign sorted_cats = site.categories | sort %}
  {% for category in sorted_cats %}
    <li><a href="{{ site.url }}/category/{{ category | first | slugify }}/">{{ category | first }}</a> ({{ category | last | size }})</li>
  {% endfor %}
</ul>

## Posts by year
<ul class="posts">
  {% assign posts_per_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for post in site.posts %}
    {% assign year = post.date | date: "%Y" %}
    {% for current_year in posts_per_year %}
      {% if last_year != year and current_year.name == year %}
        <li class="year">{{ year }} - {{ current_year.size }}</li>
      {% endif %}
    {% endfor %}
    {% assign last_year = year %}
  {% endfor %}
</ul>