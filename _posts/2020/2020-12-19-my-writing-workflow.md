---
title: My Writing Workflow
date: 2020-12-19T16:14:00+00:00
layout: post
description: Talking about my writing workflow for producing content on this blog - it's a convoluted workflow, but it works for me.
categories:
  - Blogging
---
<p class="tldr">
  I recently <a href="/goodbye-wordpress-switched-to-jekyll/">flipped from WordPress to Jekyll</a>, which had an impact on my writing workflow. This post talks about how that workflow has changed.
</p>

## My old writing workflow {#h-my-old-writing-workflow}

So previously my writing workflow consisted of logging into my [WordPress](https://wordpress.org) dashboard, writing a post in the [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor, then hitting publish.

What I particularly liked about the WordPress writing workflow was that I could install the WordPress app on my mobile devices and edit pages/posts from anywhere. This was really handy.

From WordPress I could also store unpublished draft posts along with some notes; so if I had an idea for a new post, I could open the app and quickly add a draft that I could come back to later.

Once I was ready to flesh out a draft and write it up, I’d spend some time writing and editing it the post. Once I was happy, I’d hit the _publish_ button and that was that. All very easy.

## My new writing workflow {#h-my-new-writing-workflow}

The ability to manage drafts and write/edit from pretty much anywhere was one of the things I was worried about when I flipped to Jekyll. I shouldn’t have worried though, as following a little research I now have a **very** similar writing workflow.

This site is managed through Git. I write a post, do a `git push` and my host ([AWS Amplify](https://aws.amazon.com/amplify/)) pulls the changes from Github and rebuilds my site. So there isn’t any kind of dashboard for me to login to for editing.

To get around this I bought an app called [Working Copy](https://apps.apple.com/gb/app/working-copy/id896694807) for my iOS devices. _Working Copy_ is an excellent Git repository manager for iOS, so I can not only edit content, I can also edit my **entire** site.

![](/assets/images/working-copy-example.jpg)
*My stylesheet on Working Copy*

Now, I could stop there and use _Working Copy_ to write and publish my posts, but I wanted a better experience for writing content on my iOS devices. For this I bought [iWriter Pro](https://apps.apple.com/us/app/iwriter-pro/id892374380), which is a superb Markdown editor for iOS.

**In fact, dear reader, I’m using _iWriter Pro_ on my iPad right now to write this post.**

### Managing drafts {#h-managing-drafts}

Adding drafts can also be done very easily with this new writing workflow. All I need to do is add a new file to the `_drafts` folder within my Jekyll site. Once I’ve done that, I can use _Working Copy_ to push my newly added draft.

However, that will trigger a build at Amplify, which is a waste as there are no public changes to the site. So what I do is append `[skip-cd]` to my `git commit` message, which tells Amplify to ignore the push and not rebuild my site.

## Writing on the desktop {#h-writing-on-the-desktop}

My writing workflow on the desktop remains pretty much unchanged to be honest. The only difference is that instead of logging into the WordPress dashboard, I fire up [Typora](https://typora.io) to write my posts. I then move the draft into the `_posts` folder and once I’m ready to push, I run a `git push` from my terminal. A minute or so later, as if by magic, the post is live on this site.

The added advantage of this, which my previous workflow didn’t offer, is that I can edit content while I’m offline, then run a `git push` when I’m connected again.

Now sure, I know I could have edited content offline with WordPress too, but I would have had to transfer anything I had written offline into the WordPress editor, so this new workflow is more seamless.

Actually, it’s completely seamless - the process is exactly the same, I just defer the `git push` part until I’m back online.

## Conclusion {#h-conclusion}

I’ve always been a bit of a naysayer when it comes to static site generators and their associated workflow. But I’m happy to say that I was wrong - I’m really enjoying the ease and flexibility that using Jekyll (or any SSG for that matter) offers.

A perfect example of the flexibility of this new workflow is what I’m doing right now. I’m currently in a soft play centre with my wife and two sons. My wife is reading a book, and the kids are going wild. I’m happily sitting here, on my iPad (which is tethered from my iPhone), writing away.

The best bit is that even though I’ve spent the last hour or so writing this post, I’ve not been wasting any of my 4G data because I’m not logged into a web dashboard. It’s. All. Local. The only actual data transfer is when I push to my Git repository.

I still love WordPress - I think it’s a fantastic content management system and I continue to recommend it to many people, and sing its praises. But for my needs, this new SSG workflow is more flexible and works better.

**How does your writing workflow work? Feel free to write a response to this post and let me know either by [contacting me](/contact) or posting a link on [my guestbook](/guestbook).**
