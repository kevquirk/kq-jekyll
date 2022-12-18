---
title: Can I Use Data Files?
description: One of the things I really miss from my days using Jekyll, is the use of data files. Can this be done in WordPress?
image: assets/images/brutal-feature-image.webp
category: [Meta, Notes]
layout: post
typora-root-url: ../
---

{: .tldr }
One of the things I really miss from my days [using Jekyll](https://kevquirk.com/goodbye-wordpress-switched-to-jekyll/), is the use of data files. Can this be done in WordPress?

So what do I mean by *data files*? Well, it’s probably best that I use an example.

In Jekyll, I can create a file called `blogroll.yml` within the `_data` folder. The contents of `blogroll.yml` would look something like this:

```
- name: Andy Bell
  link: https://andy-bell.co.uk/
  rss: https://andy-bell.co.uk/feed

- name: Bradley Taunt
  link: https://bt.ht
  rss: https://bt.ht/atom.xml

- name: Chris Coyer
  link: https://chriscoyier.net
  rss: https://chriscoyier.net/feed
```

I can then use Jekyll to loop through this data file to produce a pre-formatted blogroll. I’d do that like this:

```
{% raw %}<ul>
  {% for item in site.data.blogroll %}
  <li><a target="blank" href="{{ item.link }}">{{ item.name }}</a> (<a href="{{ item.rss }}">RSS feed</a>)</li>
  {% endfor %}
</ul>{% endraw %}
```

Then, when I build my site, Jekyll would loop through the entries in `blogroll.yml` and would create a list of blogs with completed links that look like this:

- [Andy Bell](https://andy-bell.co.uk/) ([RSS feed](https://andy-bell.co.uk/feed))
- [Bradley Taunt](https://bt.ht/) ([RSS feed](https://bt.ht/atom.xml))
- [Chris Coyer](https://chriscoyier.net/) ([RSS feed](https://chriscoyier.net/feed))

## Advantages of automation

I *love* this and I really miss it. It makes producing repetitive content so easy. If I want to add or remove an entry from my blogroll, I just need to edit `blogroll.yml` and Jekyll does the rest.

However, if I want to add an entry to [my blogroll](https://kevquirk.com/blogroll/) in WordPress, I need to type out the text, highlight the correct bits, then manually add links and add any formatting required. It’s not a massive pain, but there’s no reason for it to be so cumbersome.

BTW, this is just one example. When I was using Jekyll, I used data files for all kinds of things, like navigation, [my projects page](https://kevquirk.com/projects/) and an umber of other things. It’s such an elegant solution.

**So my question to you WordPress experts is how do I do this in WordPress?** I’ve had a look online, but can’t find anything appropriate. I keep getting looped back to guides on importing dummy content for some reason.

As with most things WordPress, there’s probably a very specific term for what I call *“data files”* that I’m unaware of. There must be a way to do something similar, surely?

If you know how to do this with WordPress, please get in touch using the button below. Any help or advice would be greatly appreciated!