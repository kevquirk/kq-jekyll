---
id: 4298
title: Trying Out Forestry.io
date: 2021-01-18T19:11:00+00:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=4298
permalink: /trying-out-forestry-io/
categories:
  - Web
---
<p class="has-medium-font-size">
  I recently spoke about <a href="/my-writing-workflow/">my writing workflow</a>, which is working really well. But I&#8217;ve heard a lot of good things about <a href="https://forestry.io">Forestry.io</a>, so thought I&#8217;d try it out.
</p>

## What is Forestry.io? {#h-what-is-forestry-io}

Forestry.io is basically a content management system (CMS) for static sites like this one, which is built using [Jekyll](https://jekyllrb.com).

What I really liked about setting Forestry.io up was that it&#8217;s **really** simple to do. All I needed to do was connect Forestry.io to the GitHub repository that my website&#8217;s source code sits in, and they did the rest. I&#8217;m now successfully editing this post in Forestry.io:

<img loading="lazy" width="1000" height="489" src="/assets/images/wp-images/2021/01/forestry-ui.png" alt="Forestry UI" class="wp-image-4299" srcset="/assets/images/wp-images/2021/01/forestry-ui.png 1000w, /assets/images/wp-images/2021/01/forestry-ui-610x298.png 610w, /assets/images/wp-images/2021/01/forestry-ui-768x376.png 768w" sizes="(max-width: 1000px) 100vw, 1000px" />  

## My thoughts on Forestry.io {#h-my-thoughts-on-forestry-io}

I class myself as somewhat of a power user when it comes to this kind of stuff. While I&#8217;m no expert (far from it), I would say my knowledge is above that of a standard user. I think because of this, I&#8217;m finding Forestry.io frustrating to use.

The WYSIWYG editor is clunky when it comes to managing anything other than plaintext. For example, when adding a link, instead of just recognising I was creating a link using Markdown syntax, Forestry.io popped up this weird overlay when I pasted the URL:

<img loading="lazy" width="936" height="810" src="/assets/images/wp-images/2021/01/forestry-link-edit.png" alt="Forestry link edit" class="wp-image-4300" srcset="/assets/images/wp-images/2021/01/forestry-link-edit.png 936w, /assets/images/wp-images/2021/01/forestry-link-edit-610x528.png 610w, /assets/images/wp-images/2021/01/forestry-link-edit-768x665.png 768w" sizes="(max-width: 936px) 100vw, 936px" />  

I changed the title to say `Jekyll` and left the URL as is, and this is the Markdown syntax that was created:

<pre class="wp-block-code"><code>\&#91;Jekyll\](&#91;https://jekyllrb.com](https://jekyllrb.com "Jekyll")</code></pre>

With the **correct** markdown being:

<pre class="wp-block-code"><code>&#91;Jekyll](https://jekyllrb.com)</code></pre>

When adding images using the WYSIWYG editor, the process of uploading the image and embedding in the post is really nice. However, I didn&#8217;t manage to set the cursor after the image, so every time I started typing, it would delete the image.

What I had to do was go to the raw editor, set the cursor after the image, type some text, then flip back to the WYSIWYG editor.

Because of these weird nuances, I&#8217;m finding myself constantly flipping between the WYSIWYG editor and the raw editor. In which case I might as well just use my local text editor, right?

Also, for some reason, Forestry.io didn&#8217;t populate my `category` front matter correctly, so this post had no category associated with it when I can to view it in my local development build.

### Lack of control {#h-lack-of-control}

I don&#8217;t like that the Forestry.io interface removes the editing experience from the Git backend. So when I click `save draft` it automatically commits and pushes an update to my Git repo with a commit message that isn&#8217;t very useful:

<img loading="lazy" width="1048" height="544" src="/assets/images/wp-images/2021/01/forestry-commits.png" alt="Forestry commit history" class="wp-image-4301" srcset="/assets/images/wp-images/2021/01/forestry-commits.png 1048w, /assets/images/wp-images/2021/01/forestry-commits-610x317.png 610w, /assets/images/wp-images/2021/01/forestry-commits-768x399.png 768w" sizes="(max-width: 1048px) 100vw, 1048px" />  

I would have preferred Forestry.io to provide a popup asking for a commit message so it makes sense when I come back to my commit history.

## Final thoughts {#h-final-thoughts}

If you&#8217;re running a static site generator and want a simple way of managing content, then Forestry.io may well help. But the fact that I&#8217;ve flipped back to Atom in order to finish off this post pretty much says everything to me.

I don&#8217;t think I&#8217;ll be flipping my workflow over to Forestry.io any time soon.
