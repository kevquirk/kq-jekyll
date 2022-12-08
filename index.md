---
title: Home
description: Kev Quirk is a cyber security nerd, web design enthusiast and privacy advocate from the UK.
permalink: /
layout: default
image: /assets/images/default-feature.png
---

{% assign posts = site.posts %}
{% for post in posts %}
  <div class="post-list brutal-shadow" aria-labe="{{ post.title }}" href="{{ post.url }}">
   <a href="{{ post.url }}" aria-label="Link to post"><span class="post-link"></span></a>
    <div class="post-list-inner-container">
      <h1>{{ post.title }}</h1>
      <p class="post-date">{{ post.date | date_to_string }}</p>
    </div>
  </div>
{% endfor %}