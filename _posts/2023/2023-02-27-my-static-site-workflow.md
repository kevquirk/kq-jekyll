---
title: My Static Site Workflow
description: I've managed to come up with a static site workflow that I think is as good as WordPress. Here's the details...
date: 2023-02-27T18:12:00.000Z
typora-root-url: ../../
category:
  - Blogging
  - Web
---

{: .tldr}
{{ page.description }}

Cast your mind back to January 2022, dear reader, when I wrote a post about [managing content with Jekyll](https://kevquirk.com/how-i-manage-jekyll-content/). Shortly after writing it, I realised it was [bloody hard to do](https://kevquirk.com/static-site-generators-are-easy-to-useright/), so I went back to WordPress.

I didn't make the decision to go back to WP lightly; I considered my options ([of which there were many](https://kevquirk.com/my-blogging-utopia/)) but decided, at the time, that good old WP was the best of the bunch.

Problem is, I started to get frustrated with working around my problems with PHP. This came to a head when I was trying to improve [my blogroll](https://kevquirk.com/blogroll). I wanted to [use data files to automagically generate my blogroll](https://kevquirk.com/can-i-use-data-files/) - something that's very easy to do with Jekyll and liquid. But after asking the community, the solution [really wasn't that simple](https://github.com/Dan-Q/yaml-blogroll-shortcode-demo/blob/main/danq-blogroll.php). Whereas, on Jekyll, it's just [a few lines of liquid](https://github.com/kevquirk/kq-jekyll/blob/main/blogroll.md?plain=1).

So I started thinking about a move back to Jekyll, but with one caveat - **if I was going to move back, I had to nail my workflow.** This meant that whatever workflow I landed on for Jekyll, I had to be able to:

1. Easily insert links to my other posts
2. Drag & drop images into posts
3. Preview my posts without running a local server
4. Publish with a single command/button click

These are the things that were causing the most friction when I was last on Jekyll, so if I was going to flip back, I had to come up with a solution. Thankfully, dear reader, I think I did!

## The right tool...

After a lot of research, I think the problem was me (shock horror) - I wasn't using the right tool for the job. Or, more accurately, I wasn't using the *best* tool for the job.

I'd heard good things about [Typora](https://typora.io), so decided to download a trial to check it out. Holy shamoly this thing is good! So good in fact that it solved 3 of my 4 problems.

### Inserting links

In Typora, all I need to do is highlight the text I want to link to, then hit <kbd>⌘</kbd> + <kbd>K</kbd> and as long as the URL to the post I want to link to is in my clipboard, Typora does the rest.

Thanks to my [search solution](https://kevquirk.com/how-to-add-search-jekyll/), finding posts to link to is a doddle. Ok, it's not quite as slick as WordPress, but it's a close as I'm going to get on a static site, I think.

1. Search for the post/page on my live site that I want to link to
2. Copy the link to the post from the results
3. Highlight the text I want to link to in Typora
4. Hit <kbd>⌘</kbd> + <kbd>K</kbd> 

Pretty darn simple, I think you will agree.

### Drag & drop images

This was always a particular bone of contention for me previously. If I wanted to insert an image in WordPress, I just had to drag & drop it to the editor window. With Jekyll, it was such a palaver where I had to copy the image to:

1. Optimise the image using GIMP
2. Copy the image to the `assets/images` directory in Jekyll
3. Type up the markdown syntax for the image

Even after doing all this, the result still wasn't a preview of the image in my editor window. Instead, it was just a line of markdown syntax. If I wanted to preview the image, I had to start the local server up.

Typora allows its users to set a custom directory to dump images to, so when I drag and drop an image to the editor window, it places it in the Jekyll images directory for me.

Better yet, Typora can use relative paths, so this whole thing is repeatable for all [my projects](https://kevquirk.com/projects/) that use Jekyll:

![typora-image-settings](/assets/images/typora-image-settings.webp){: loading="lazy"}

It's great that images can be dumped to the right location, but the embedded image still won't preview because the editor is looking for something like this:

```
/assets/images/typora-image-settings.webp
```

And as we all know `/` is the root directory of the entire file system, so image previews won't work.

But Typora has me covered again. All I need to do is add the following line to the front matter of my post, and image embedding works like a dream:

```
typora-root-url: ../../
```

"_Kev! What about optimising images?_" I hear you cry. Well, dear reader, thanks to [this solution by Brad Taunt](https://bt.ht/batch-webp-conversion/) I can convert images to WEBP with a couple of clicks.

Thanks to all this, my workflow for adding images now looks like this:

1. Optimise the image with a right-click, using Brad's solution
2. Drag the image to the editor window

This is the _exact_ same image workflow I had with WordPress. Winning!

### Previewing posts

Finally, I wanted to be able to preview my posts without having to start the local Jekyll server. While starting the server isn't difficult, having a solution that doesn't require it means that I don't need to have Jekyll, and all it's dependancies, installed on my system if I don't want to.

Once again it's Typora to the rescue here, folks. You see, Typora allows you to have a custom theme for the editor, and this is all done with good old CSS. So, you guessed it, I wrote a custom Typora theme that matches my blog _very_ closely.

This means I literally get a preview of the post as I type. That's actually better than WordPress, as I always had to open a preview in a new browser tab. Pretty cool!

## Publish with a single command

Ok, so I can easily add links, embed images and preview my posts. But what about publishing the damned posts? In WordPress, once I was done writing, I'd hit the blue "Publish" button, and as if by magic, the post was live.

Jekyll, and most other static site generators, often use services like [Netlify](https://netlify.com) to host their site. These services pull from a Git repo, so there's [a few commands involved](https://kevquirk.com/getting-started-with-git-a-simple-beginners-guide/) to get updates pushed to your repo.

To work around this, I created [a simple script](https://kevquirk.com/git-commit-and-push-script/) that allows me to publish my posts with a single command.

## Final thoughts

Thanks to the work I've done to improve my static site workflow, I now have a process for producing content that's pretty much on a par with WordPress. Not only that, but Jekyll's liquid syntax offers me more flexibility to customise my site; and best of all, I don't need an Internet connection to produce content.

Now, any regular readers of this blog will know that I tend to change my mind like the wind. But right now, I'm _really_ happy with both the design of this site, and the way in which I produce content.

Will that change in the future? Maybe...Possibly...Definitely? But hey, that's all part of the fun of having a public blog, right?



