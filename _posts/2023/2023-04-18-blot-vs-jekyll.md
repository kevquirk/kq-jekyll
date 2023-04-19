---
title: Blot vs Jekyll
typora-root-url: ../../
description: I've been playing with Blot lately, but now the site is done, I don't know whether I should migrate from Jekyll.
category:
  - Blogging
  - Meta
---

{: .tldr}
I've been playing with [Blot](https://blog.im) lately, but now the site is done, I don't know whether I should migrate from Jekyll.

I recently wrote about whether my current setup was [good enough](https://kevquirk.com/is-good-enough-good-enough/) and whether I should move over to Blot for my blogging platform.

Now, I really enjoy playing with new tools like this - it's really fun for me. So it's not just about finding my [blogging utopia](https://kevquirk.com/my-blogging-utopia/), it's also fun. Having said that, now all is said and done and I've finished creating a new blog on the Blot platform, I'm now sure I want to switch.

This is for a number of reasons:

* Performance
* Weird search results
* Limitations of Blot
* Not being able to redirect my old domain

## Performance

I noticed while I was building the new Blot site that the performance didn't seem as snappy as my current site. I'd often see [FOUT](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) as the font I use for this site was delayed in loading, plus, generally speaking it just felt sluggish.

Don't get me wrong it's not slow by any stretch, but it did feel slow in comparison to my Jekyll site. So I decided to test it. I ran some tests from various locations using [GTMetrix](https://gtmetrix.com) and compared them to the same texts on my Jekyll site. I also carried out tests with [Page Speed Insights](https://pagespeed.web.dev).

Finally, to give the fairest tests possible, I decided to do the tests both with and without the custom font loaded. Here's the results:

![blot-vs-jekyll-performance-graph](/assets/images/blot-vs-jekyll-performance-graph.webp){: loading="lazy"}

[See all the data →](https://sheet.zohopublic.eu/sheet/published/5wxl37a5a4123f81b4a809d7f19bc699db0a9){: .button .brutal-shadow target="blank"}

If you click the button below, you will see all the data I've collected in a spreadsheet.

The TL;DR is that the Blot version of the site, which is exactly the same in terms of design as the Jekyll site, is slightly larger in size, and takes around double the time to load.

Now if I remove the custom font, the performance of Blot is around the same as Netlify *with* the custom font. To be honest, it doesn't look *that* bad with a local font stack:

* [My site on Mac using Helvetica](/assets/images/brutal-site-mac-helvetica.webp){: target="blank"}
* [My site on Windows using Arial](/assets/images/brutal-site-windows-arial.webp){: target="blank"}
* [My site on Linux using Nimbus Sans](/assets/images/brutal-site-linux-nimbus.webp){: target="blank"}

{: .notice}
I decided to include links to these images, instead of embedding them here, as it was *very* confusing when reading the post.

## Weird search results

Blot has a search features bundled in, [as do I](https://kevquirk.com/how-to-add-search-jekyll/), but the search results on Blot are weird and need to be very specific.

For example, on my Jekyll site, is I search for `jekyll search` I see get results for my post about adding a search tool to Jekyll. But in Blot, I don't get the same results, I need to be very specific and basically type the title of the post into the search box.

The results also seemed to be inconsistent - sometimes it would work how I expected, other times it seemed to miss stuff.

While not the end of the world, it's not ideal.

## Limitations of Blot

Jekyll uses Liquid and Kramdown for it's backend, both of which are very powerful and allow for quality of live tweaks that make thing easier to handle.

Blot, on the other hand, using [Mustache](http://mustache.github.io) and Pandoc, which aren't quite as feature rich, in my opinion. 

For example, there's no way to parse Mustache code within a markdown file with Blot. So I can't use things like [data files](https://kevquirk.com/can-i-use-data-files/) and [includes](https://kevquirk.com/how-i-manage-jekyll-content/), like I do in Jekyll.

I've managed to find workarounds for most of the stumbling blocks here, so again, these aren't a deal breaker, they're just frustrating.

## Redirecting domains

RSS feeds etc.

## Is the workflow better?

## Final thoughts

Having said all of the above, there's *lots* to like about Blot. I had to email the founder, David, a few times and he always responded really quickly and was massively helpful. I wouldn't get that from big tech, like Netlify.

I also like that I'm supporting indie developers by using Blot; $4/month for a fully managed service is bloody good value.

Honestly, I'm torn. I've really found my mojo with Jekyll, and my workflow is pretty good at this point. But hosting, for free, with Netlify concerns me, as does being reliant on Ruby, Jekyll, GitHub **and** Netlify to keep this thing afloat.

What would you do, dear reader?

