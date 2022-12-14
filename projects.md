---
title: My Projects
layout: page
permalink: /projects/
description: Here are some of the other projects I run in my spare time.
---

Here are some of the projects I work on in my spare time. I'll try to keep this up to date, but I'm always having silly ideas, so who knows? 🤷‍♂️

{% for item in site.data.projects %}
<div class="project">
    <p style="background-color:#{{ item.bg }};color:{{ item.text }};" class="project-banner">{{ item.name }}</p>
    <p>{{ item.description }}</p>
    <a target="blank" href="{{ item.link }}">Visit {{ item.name }}</a>
</div>
{% endfor %}