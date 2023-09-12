---
id: 5263
title: The Back-end of Beyond
date: 2021-05-09T19:08:09+01:00

layout: post
permalink: /the-back-end-of-beyond/
categories:
  - Web
---
Things have been pretty quiet around here recently. This is actually the first time I've published something in over a month, so I wanted to give you fine folks a quick update on what's been going on.

Things have been **crazy** in work. I started a new job at the beginning of April. Same company, just a different role; but I'm still needed in my old role until a replacement is found. Ipso facto, I've basically been doing two jobs.

I spoke about this in the last issue of my newsletter. Speaking of which&#8230;

## Changes to my newsletter {#h-changes-to-my-newsletter}

If you didn't know, I have a newsletter - <a href="https://metaletter.net" target="_blank" rel="noreferrer noopener">The Meta Letter</a> (go on, subscribe, you know you want to). Publishing a new issue was a very convoluted process, which roughly consisted of the following:

  1. I write the issue in markdown using <a href="https://typora.io/" target="_blank" rel="noreferrer noopener">Typora</a>.
  2. Next I take the markdown, copy it as HTML and run that though a CSS inlining tool so all my formatting is added (email clients don't like to use stylesheets)
  3. Then I pasted the output into my newsletter tool, <a href="https://sendy.co/?ref=uOYNZ" target="_blank" rel="noreferrer noopener">Sendy</a>, and sent myself a test to make sure it's all good.
  4. If it's passable, I send out the newsletter to the hundreds of disappointed people who were silly enough to subscribe.
  5. Then (oh we're not done yet folks!) I take the markdown, copy it, add some front matter and dump it into the Jekyll based website.
  6. Finally I wait a few days and push the update to GitHub so the issue goes lives on the <a href="https://metaletter.net/#archive" target="_blank" rel="noreferrer noopener">Meta Letter archive</a>.

What a load of faff, hey! I needed a better solution with fewer steps. So I did a couple of things:

  1. I bought the <a href="https://newsletterglue.com/" target="_blank" rel="noreferrer noopener">Newsletter Glue</a> plugin.
  2. Moved The Meta Letter from <a href="/the-wonderful-world-of-wordpress-wizardry-for-working-with-websites/" target="_blank" rel="noreferrer noopener">Jekyll to WordPress</a>.

Well, when I say I &#8220;moved&#8221; The Meta Letter from Jekyll to WordPress, I actually just removed the site completely and folded it all into this site. You see, Newsletter Glue allows you to send newsletters **really** easily from inside WordPress. No CSS inline faffery or manually publishing posts a few days later.

The best part is that Newsletter Glue supports Sendy. So I've created a custom post type for my newsletters so everything is nice and separate when writing post vs newsletters.

By making this change, I've been able to significantly reduce my newsletter publishing workflow. Which now looks like this:

  1. Write a newsletter post just like any normal post on this site.
  2. Send myself a test to make sure it looks good.
  3. Hit publish. The newsletter is sent and the post is published to the archive automagically.

### But why? {#h-but-why}

If it's not broke, don't fix it, right? Well yeah, kinda. **But it was broke!** You see dear reader, publishing the newsletter was becoming a pain in the arse because I had so many hoops to jump through. So it was taking the shine off publishing it.

Hopefully, by making these changes I won't have that problem any more.

## A new theme on this site {#h-a-new-theme-on-this-site}

The other big thing I've done is completely change the theme on this site. I actually did this around 3 weeks ago, but you probably didn't notice as the theme originally looked exactly the same as it did before.

However, I love anything that's blue, so I decided to spruce things up a bit and I'm really liking the results ([told you I’d end up with a blue site](/adding-some-whimsy-character/)). **What do you think?**

The new theme is based on <a href="https://generatepress.com/?ref=5809" target="_blank" rel="noreferrer noopener">GeneratePress</a>, but why change? Well, I _could_ have just edited my old theme to make it blue - that would have actually been easier. However, as WordPress moves further and further into the block based ecosystem, I'm going to need to keep up and I'm not a good enough developer to do that.

So I needed something that keeps up with WordPress' new features, but has clean code. Check and check. GeneratePress is a joy to use, and my site is actually smaller using this theme than it was on my home grown theme, by around 50KB too! I may do a review on GP at some point if you folks think it will be useful?

<p class="medium">
  Plus, I get a <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank" rel="noreferrer noopener">perfect a score of core web vitals</a>!
</p>

### New logo too {#h-new-logo-too}

Finally, I paid a designer to create a simple monogram of &#8220;KQ&#8221; for me. You can see it up in the header of the site, but if you have bad eyes, here's a bigger version:

![](/assets/images/kq-logo.png) 

Pretty cool, huh? I've always just had &#8220;Kev Quirk&#8221; up there in the header, so I decided I wanted some kind of logo instead. I'm really happy with it.

## That's it {#h-that-s-it}

That's all I have for this post. It's a bit of a digression from my usual posts, but I wanted to let you folks know what I've been up to and that I haven't fallen off the face of the earth.

Normal <s>drivel</s> service will resume with the next post&#8230;probably.

**What are you thoughts on the new look? Feel free to <a href="/contact/" target="_blank" rel="noreferrer noopener">contact me</a> and let me know.** **And if you haven't subscribed to my newsletter, there's a form below.** 😊
