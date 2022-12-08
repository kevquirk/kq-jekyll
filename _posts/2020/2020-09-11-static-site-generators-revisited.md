---
id: 2883
title: Static Site Generators Revisited
date: 2020-09-11T14:28:07+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=2883
permalink: /static-site-generators-revisited/
description:
  - I've been a WordPress advocate for a while, but I used a static site generator for a new project. So, has my opinion on SSGs changed?
categories:
  - Opinion
  - Web
---
<p class="has-medium-font-size">
  I&#8217;ve been a <a href="https://kevq.uk/the-case-for-wordpress/" target="_blank" rel="noreferrer noopener">WordPress advocate</a> for a while now, but I decided to use a static site generator for a new project. So, has <a href="https://kevq.uk/why-i-dont-use-a-static-site-generator/" target="_blank" rel="noreferrer noopener">my opinion on SSGs</a> changed?
</p>

My wife and I recently adopted two young boys and I wanted a way of sharing that rare and unique experience online. I considered writing about it on here, but decided against it in the end as a lot of my readership are techies. So talking about adoption probably isn&#8217;t appropriate here.

I went away and setup a new blog called <a href="https://dadsnotebook.com" target="_blank" rel="noreferrer noopener">Dad&#8217;s Notebook</a> for those posts. Before building the new blog, I took some time to think about what platform I was going to use.

Initially the decision was easy &#8211; I was going to go with WordPress. That&#8217;s what I use for this site, and it works really well. But in the end I decided to go for <a href="https://jekyllrb.com/" target="_blank" rel="noreferrer noopener">Jekyll</a> as I wanted to learn something new. Plus, if I decided at a later date to migrate over to WordPress, it would be trivial to do.

## Setting up Jekyll {#h-setting-up-jekyll}

I&#8217;d never used Jekyll before. Actually, I&#8217;d never used a static site generator of any kind, except for a few hours with <a href="https://gohugo.io/" target="_blank" rel="noreferrer noopener">Hugo</a> one day.

I followed Jekyll&#8217;s relatively simple <a href="https://jekyllrb.com/docs/installation/" target="_blank" rel="noreferrer noopener">installation guide</a> to get everything setup. Then I started the hunt for a theme, but there was nothing out there that I really liked. Besides, the point of this project was to learn about how static site generators work, so I wanted to get into the nuts and bolts of Jekyll.

Lucky for me they have a really good <a href="https://jekyllrb.com/docs/step-by-step/01-setup/" target="_blank" rel="noreferrer noopener">step by step tutorial</a> on how to setup a site from scratch. So I followed that and spent a few days building my own theme too.

The result is a very basic, but effective blog. It&#8217;s still a work in progress, but here&#8217;s what it looks like at the time of writing:

<img loading="lazy" width="800" height="807" src="/assets/images/wp-images/2020/09/dads-notebook.jpg" alt="" class="wp-image-2910" srcset="/assets/images/wp-images/2020/09/dads-notebook.jpg 800w, /assets/images/wp-images/2020/09/dads-notebook-297x300.jpg 297w, /assets/images/wp-images/2020/09/dads-notebook-150x150.jpg 150w, /assets/images/wp-images/2020/09/dads-notebook-768x775.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />  

## My thoughts on static site generators {#h-my-thoughts-on-static-site-generators}

Back in April, I wrote about <a href="https://kevq.uk/why-i-dont-use-a-static-site-generator/" target="_blank" rel="noreferrer noopener">why I don&#8217;t use a static site generator</a>. Obviously that&#8217;s no longer accurate as I now use one for Dad&#8217;s Notebook, but the main message of the post is still the same for me.

I ran a test on a post from this site and Dad&#8217;s Notebook, both are around 500 words long and they each have a single image. This site is a little heavier as it has to load comments etc, so I was expecting this site to be a little slower.

The results were surprising as both sites loaded in the same amount of time. This goes to show how good <a href="https://shareasale.com/r.cfm?b=1075949&u=2420767&m=74778&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">WP Rocket</a> really is, I think.

<table>
  <tr>
    <td>
    </td>

    <td>
      <strong>Page Size</strong>
    </td>

    <td>
      <strong>Requests</strong>
    </td>

    <td>
      <strong>Load Time</strong>
    </td>
  </tr>

  <tr>
    <td>
      <strong>This Site</strong>
    </td>

    <td>
      814KB
    </td>

    <td>
      14
    </td>

    <td>
      0.9s
    </td>
  </tr>

  <tr>
    <td>
      <strong>Dad&#8217;s Notebook</strong>
    </td>

    <td>
      358KB
    </td>

    <td>
      10
    </td>

    <td>
      0.9s
    </td>
  </tr>
</table>

If you want to see the test results, they are <a href="https://gtmetrix.com/reports/kevq.uk/rLxbr7Gn" target="_blank" rel="noreferrer noopener">here</a> and <a href="https://gtmetrix.com/reports/dadsnotebook.com/T3Ew5kod" target="_blank" rel="noreferrer noopener">here</a>.

Dad&#8217;s Notebook is hosted on the amazing <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener">Netlify</a> using a free account, so the performance may be better if I were to pay for it, but I&#8217;m very happy with a load time of 0.9 seconds.

### Static site generator workflow {#h-static-site-generator-workflow}

One thing I love about WordPress is the ability to login, write a post and hit publish. It&#8217;s a joy to use.

With an SSG like Jekyll it&#8217;s not much more difficult to be honest, especially when hosting with a service like Netlify (<a href="https://pages.github.com/" target="_blank" rel="noreferrer noopener">GitHub Pages</a> is also good).

When writing a post for Dad&#8217;s Notebook, I fire up my markdown editor and write the post. Once I&#8217;m done, I commit the changes to the GitHub repository for the site, and when Netlify sees a change to the repo it triggers a build and the site is updated.

So now Dad&#8217;s Notebook is all setup with Netlify, the publishing workflow isn&#8217;t much more convoluted than that of WordPress. However, WordPress still offers more in the way flexibility as I can write on the go if I choose.

I could install a Markdown editor on my iPad, but I&#8217;m not sure how I would carry out a `git push` from there. I&#8217;m sure it can probably be done, I just haven&#8217;t researched it.

## Would I switch this site to a static site generator? {#h-would-i-switch-this-site-to-a-static-site-generator}

I&#8217;ve really enjoyed learning Jekyll and how it all fits together. I really like the simplicity of it, but I think that simplicity is due to the fact that Dad&#8217;s Notebook is a **really** simple site. A blog, about and contact pages, that&#8217;s it.

If I were to start implementing a lot of the more complicated features of this site, such as comments, <a href="https://kevq.uk/my-newsletter-craving-coffee/" target="_blank" rel="noreferrer noopener">a newsletter</a> and some <a href="https://kevq.uk/implementing-the-indieweb-into-my-website/" target="_blank" rel="noreferrer noopener">IndieWeb goodness</a>, I think managing the site with Jekyll would become a lot of work.

I&#8217;m going to stick with WordPress for this site, but never say never. Having a simple site like Dad&#8217;s Notebook on Jekyll is fun, and it adds an interesting dimension to producing content, but I think moving a bigger, more complicated site like this would be too much like hard work.
