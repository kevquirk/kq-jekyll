---
title: How Migrate from Disqus to WordPress and Bypass Disqus’ Roadblocks
layout: post
permalink: /how-migrate-from-disqus-to-wordpress/
discription: Disqus makes it VERY difficult for you to migrate your comments away from their platform. This is a workaround on how to do it.
categories:
  - Technology
---
{: .tldr}
Disqus makes it VERY difficult for you to migrate your comments away from their platform. This is a workaround on how to do it.

## The Problem {#h-the-problem}

I’ve been using Disqus for quite some time, after [deciding to move my blog to a static site](/moving-to-a-static-website). However, I’m now back using vanilla WordPress and I’d like to stop using Disqus. Herein lies the problem – being able to migrate from Disqus to WordPress is very difficult.

Previously, Disqus worked in such a way that all comments within Disqus were also available within WordPress in all their glory. That doesn’t seem to the case any more.

Now it seems that the Disqus plugin simply runs the Javascript applet, and all comments are held solely with them, unless you enable their sync feature; but even then, Disqus doesn’t appear to sync all of the comment details.

For me, when I did the sync, email addresses came through obfuscated (which is fine), and all comments had a creation date of the time they were imported, so I lost all my comment history.

Not only that, but the vast majority of the comments did not get assigned to an actual post. They were just out their in the wilds of WordPress land with no post to support them.

Disqus do offer a tool to export your comments, but the XML file it produces is completely useless and can’t be easily imported into WordPress; well, not that I could find at least.

## The Solution {#h-the-solution}

So, how did I manage to actually migrate from Disqus to WordPress? Well, that process is convoluted and fairly manual. I’m sure there are better, more automated ways to do this, but this is the process that worked for me.

### Step 1: Sync your comments {#h-step-1-sync-your-comments}

Assuming you already have the Disqus plugin installed and configured. The first thing you need to do is go in to the settings for the Disqus plugin and carry out either an automatic or manual sync. Personally, I went for a manual sync, as I was intending to remove the Disqus plugin ASAP.

<img loading="lazy" width="729" height="502" src="/assets/images/wp-images/2019/11/enable-disqus-comment-syncing.png" alt="" class="wp-image-283" srcset="/assets/images/wp-images/2019/11/enable-disqus-comment-syncing.png 729w, /assets/images/wp-images/2019/11/enable-disqus-comment-syncing-300x207.png 300w" sizes="(max-width: 729px) 100vw, 729px" />  

Here’s the first limitation from good old Disqus – you can only sync a maximum of 1 year’s worth of comments. So if you’ve been running your blog for longer than that, you’re out of luck.

### Step 2: Check your comments {#h-step-2-check-your-comments}

Go to `your-blog/wp-admin/edit-comments.php` to take a look at the comments Disqus managed to import. They should all be assigned to the appropriate post on your site.

For me 80% of my comments were not assigned to a post, and by default there is no way to assign a comment to a post. However, if you install the [Tako Movable Comments plugin](https://wordpress.org/plugins/tako-movable-comments), you can!

Once Tako is installed, go to your comments, click on the edit button, then scroll down to the bottom of the edit page. Here you will be able to assign a comment to a post:

<div class="wp-block-image">
  <img loading="lazy" width="1024" height="164" src="/assets/images/wp-images/2019/11/tako-comment-move-1024x164.png" alt="" class="wp-image-284" srcset="/assets/images/wp-images/2019/11/tako-comment-move-1024x164.png 1024w, /assets/images/wp-images/2019/11/tako-comment-move-300x48.png 300w, /assets/images/wp-images/2019/11/tako-comment-move-768x123.png 768w, /assets/images/wp-images/2019/11/tako-comment-move.png 1102w" sizes="(max-width: 1024px) 100vw, 1024px" />
</div>

Finally, rinse and repeat for any other comments that aren’t assigned to a post.

## Why the change? {#h-why-the-change}

So, why have I decided to migrate from Disqus to WordPress? After all, I could just continue to use Disqus on my WordPress site.

There are a number of reasons why I’ve wanted to move away from Disqus for while. The biggest being the widely reported [privacy and security issues](https://en.wikipedia.org/wiki/Disqus#Criticism,_privacy,_and_security_concerns) that have plagued Disqus. Secondly, I also want to be in control of all the data on my site where possible.

<blockquote class="wp-block-quote">
  <p>
    As with other embedded web widgets, such as like buttons, the Disqus widget acts as a web bug which tracks a user’s activities, even when they are not logged in, across different sites that use the Disqus commenting system. Information tracked by Disqus, which may be disclosed to third parties, includes pseudonymous analytics data, such as a user’s IP address, their web browser version and installed add-ons, and their referring pages and exit links. Although these data are referred to by Disqus as “Non-Personally Identifiable Information”, such data, when aggregated, has been shown to be usable for de-anonymizing users.
  </p>

  <p>
    Disqus has also been criticized for publishing its registered users’ entire commenting histories, along with a list of connected blogs and services, on the publicly viewable user profile pages. The option to keep profile activity private was later added.
  </p>

  <p>
    — Wikipedia
  </p>
</blockquote>

## Final Thoughts {#h-final-thoughts}

Whilst this isn’t the perfect solution to the problem, it’s certainly a workaround that has allowed me to migrate from Disqus to WordPress. Having said that, I’m almost certain that I am missing comments from Disqus, but it’s the best I could do.

I have to say I’m pretty frustrated with Disqus. It seems that they’re making it deliberately difficult for their users to migrate away from the tool where ever possible. Poor XML export, limitations on the amount of comments you can sync, no syncing with WordPress by default. These all seem like unnecessary limitations that are designed to lock blog owners in to their tool.

I’ve now deleted my blog from Disqus, and all the comments for this site with it. But I will keep my Disqus account open so I can continue to comment on other blogs that use the platform.

**Are you a Disqus user that’s been considering migrating? Do you have concerns about your privacy when using Disqus? Why not tell me your thoughts in the WORDPRESS comments below. ?**
