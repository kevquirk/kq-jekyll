---
id: 5263
title: The Back-end of Beyond
date: 2021-05-09T19:08:09+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=5263
permalink: /the-back-end-of-beyond/
image: /assets/images/wp-images/uploads/2021/05/back-end-of-beyond-feature.png
categories:
  - Web
---
Things have been pretty quiet around here recently. This is actually the first time I&#8217;ve published something in over a month, so I wanted to give you fine folks a quick update on what&#8217;s been going on.

Things have been **crazy** in work. I started a new job at the beginning of April. Same company, just a different role; but I&#8217;m still needed in my old role until a replacement is found. Ipso facto, I&#8217;ve basically been doing two jobs.

I spoke about this in the last issue of my newsletter. Speaking of which&#8230;

## Changes to my newsletter {#h-changes-to-my-newsletter}

If you didn&#8217;t know, I have a newsletter &#8211; <a href="https://metaletter.net" target="_blank" rel="noreferrer noopener">The Meta Letter</a> (go on, subscribe, you know you want to). Publishing a new issue was a very convoluted process, which roughly consisted of the following:

  1. I write the issue in markdown using <a href="https://typora.io/" target="_blank" rel="noreferrer noopener">Typora</a>.
  2. Next I take the markdown, copy it as HTML and run that though a CSS inlining tool so all my formatting is added (email clients don&#8217;t like to use stylesheets)
  3. Then I pasted the output into my newsletter tool, <a href="https://sendy.co/?ref=uOYNZ" target="_blank" rel="noreferrer noopener">Sendy</a>, and sent myself a test to make sure it&#8217;s all good.
  4. If it&#8217;s passable, I send out the newsletter to the hundreds of disappointed people who were silly enough to subscribe.
  5. Then (oh we&#8217;re not done yet folks!) I take the markdown, copy it, add some front matter and dump it into the Jekyll based website.
  6. Finally I wait a few days and push the update to GitHub so the issue goes lives on the <a href="https://metaletter.net/#archive" target="_blank" rel="noreferrer noopener">Meta Letter archive</a>.

What a load of faff, hey! I needed a better solution with fewer steps. So I did a couple of things:

  1. I bought the <a href="https://newsletterglue.com/" target="_blank" rel="noreferrer noopener">Newsletter Glue</a> plugin.
  2. Moved The Meta Letter from <a href="https://kevq.uk/the-wonderful-world-of-wordpress-wizardry-for-working-with-websites/" target="_blank" rel="noreferrer noopener">Jekyll to WordPress</a>.

Well, when I say I &#8220;moved&#8221; The Meta Letter from Jekyll to WordPress, I actually just removed the site completely and folded it all into this site. You see, Newsletter Glue allows you to send newsletters **really** easily from inside WordPress. No CSS inline faffery or manually publishing posts a few days later.

The best part is that Newsletter Glue supports Sendy. So I&#8217;ve created a custom post type for my newsletters so everything is nice and separate when writing post vs newsletters.

By making this change, I&#8217;ve been able to significantly reduce my newsletter publishing workflow. Which now looks like this:

  1. Write a newsletter post just like any normal post on this site.
  2. Send myself a test to make sure it looks good.
  3. Hit publish. The newsletter is sent and the post is published to the archive automagically.

### But why? {#h-but-why}

If it&#8217;s not broke, don&#8217;t fix it, right? Well yeah, kinda. **But it was broke!** You see dear reader, publishing the newsletter was becoming a pain in the arse because I had so many hoops to jump through. So it was taking the shine off publishing it.

Hopefully, by making these changes I won&#8217;t have that problem any more.

## A new theme on this site {#h-a-new-theme-on-this-site}

The other big thing I&#8217;ve done is completely change the theme on this site. I actually did this around 3 weeks ago, but you probably didn&#8217;t notice as the theme originally looked exactly the same as it did before.

However, I love anything that&#8217;s blue, so I decided to spruce things up a bit and I&#8217;m really liking the results ([told you I’d end up with a blue site](https://kevq.uk/adding-some-whimsy-character/)). **What do you think?**

The new theme is based on <a href="https://generatepress.com/?ref=5809" target="_blank" rel="noreferrer noopener">GeneratePress</a>, but why change? Well, I _could_ have just edited my old theme to make it blue &#8211; that would have actually been easier. However, as WordPress moves further and further into the block based ecosystem, I&#8217;m going to need to keep up and I&#8217;m not a good enough developer to do that.

So I needed something that keeps up with WordPress&#8217; new features, but has clean code. Check and check. GeneratePress is a joy to use, and my site is actually smaller using this theme than it was on my home grown theme, by around 50KB too! I may do a review on GP at some point if you folks think it will be useful?

<p class="medium">
  Plus, I get a <a href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank" rel="noreferrer noopener">perfect a score of core web vitals</a>!
</p>

### New logo too {#h-new-logo-too}

Finally, I paid a designer to create a simple monogram of &#8220;KQ&#8221; for me. You can see it up in the header of the site, but if you have bad eyes, here&#8217;s a bigger version:

<img loading="lazy" width="620" height="300" src="/assets/images/wp-images/2021/05/AA5317EF-04B7-49BC-BDB1-6C1A5E9FA001.png" alt="" class="wp-image-5273" srcset="/assets/images/wp-images/2021/05/AA5317EF-04B7-49BC-BDB1-6C1A5E9FA001.png 620w, /assets/images/wp-images/2021/05/AA5317EF-04B7-49BC-BDB1-6C1A5E9FA001-610x295.png 610w" sizes="(max-width: 620px) 100vw, 620px" />  

Pretty cool, huh? I&#8217;ve always just had &#8220;Kev Quirk&#8221; up there in the header, so I decided I wanted some kind of logo instead. I&#8217;m really happy with it.

## That&#8217;s it {#h-that-s-it}

That&#8217;s all I have for this post. It&#8217;s a bit of a digression from my usual posts, but I wanted to let you folks know what I&#8217;ve been up to and that I haven&#8217;t fallen off the face of the earth.

Normal <s>drivel</s> service will resume with the next post&#8230;probably.

**What are you thoughts on the new look? Feel free to <a href="https://kevq.uk/contact/" target="_blank" rel="noreferrer noopener">contact me</a> and let me know.** **And if you haven&#8217;t subscribed to my newsletter, there&#8217;s a form below.** 😊
