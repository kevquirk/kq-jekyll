---
id: 4298
title: Trying Out Forestry.io
date: 2021-01-18T19:11:00+00:00

layout: post
permalink: /trying-out-forestry-io/
categories:
  - Web
---
<p class="tldr">
  I recently spoke about <a href="/my-writing-workflow/">my writing workflow</a>, which is working really well. But I&#8217;ve heard a lot of good things about <a href="https://forestry.io">Forestry.io</a>, so thought I&#8217;d try it out.
</p>

## What is Forestry.io? {#h-what-is-forestry-io}

Forestry.io is basically a content management system (CMS) for static sites like this one, which is built using [Jekyll](https://jekyllrb.com).

What I really liked about setting Forestry.io up was that it's **really** simple to do. All I needed to do was connect Forestry.io to the GitHub repository that my website's source code sits in, and they did the rest. I'm now successfully editing this post in Forestry.io:

![](/assets/images/forestry-ui.png)   

## My thoughts on Forestry.io {#h-my-thoughts-on-forestry-io}

I class myself as somewhat of a power user when it comes to this kind of stuff. While I'm no expert (far from it), I would say my knowledge is above that of a standard user. I think because of this, I'm finding Forestry.io frustrating to use.

The WYSIWYG editor is clunky when it comes to managing anything other than plaintext. For example, when adding a link, instead of just recognising I was creating a link using Markdown syntax, Forestry.io popped up this weird overlay when I pasted the URL:

![](/assets/images/forestry-link-edit.png)

I changed the title to say `Jekyll` and left the URL as is, and this is the Markdown syntax that was created:

```
\[Jekyll\]([https://jekyllrb.com](https://jekyllrb.com "Jekyll")
```

With the **correct** markdown being:

```
![Jekyll](https://jekyllrb.com)
```

When adding images using the WYSIWYG editor, the process of uploading the image and embedding in the post is really nice. However, I didn't manage to set the cursor after the image, so every time I started typing, it would delete the image.

What I had to do was go to the raw editor, set the cursor after the image, type some text, then flip back to the WYSIWYG editor.

Because of these weird nuances, I'm finding myself constantly flipping between the WYSIWYG editor and the raw editor. In which case I might as well just use my local text editor, right?

Also, for some reason, Forestry.io didn't populate my `category` front matter correctly, so this post had no category associated with it when I can to view it in my local development build.

### Lack of control {#h-lack-of-control}

I don't like that the Forestry.io interface removes the editing experience from the Git backend. So when I click `save draft` it automatically commits and pushes an update to my Git repo with a commit message that isn't very useful:

![](/assets/images/forestry-commits.png) 

I would have preferred Forestry.io to provide a popup asking for a commit message so it makes sense when I come back to my commit history.

## Final thoughts {#h-final-thoughts}

If you're running a static site generator and want a simple way of managing content, then Forestry.io may well help. But the fact that I've flipped back to Atom in order to finish off this post pretty much says everything to me.

I don't think I'll be flipping my workflow over to Forestry.io any time soon.
