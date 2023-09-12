---
title: How To Add An Old Post Notice To WordPress
date: 2020-04-21T14:47:35+01:00

layout: post
permalink: /how-to-add-an-old-post-notice-to-wordpress/
description:
  - Old posts may contain out of date info. This post will show you how to easily add an old post notice to your WordPress site.
categories:
  - Technology
  - Web
---
{: .tldr}
I like to let people know when they&#8217;re reading an old post of mine, as it may contain out of date info. This post will show you how to easily add an old post notice to your WordPress site.

Now you could add an old post notice to WordPress with a plugin, such as [Old Post Notification](https://wordpress.org/plugins/old-post-notification/). However, I prefer to code features manually rather than relying on plugins. This is because they can introduce unintended vulnerabilities and [slow your site down](/how-i-optimise-my-website-performance/).

## Adding an old post notice to WordPress manually {#h-adding-an-old-post-notice-to-wordpress-manually}

To do this manually, you will need to edit two files within your theme. If you're using a theme that has been created by someone else, I would recommend [creating a child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) so that your edits don't get overwritten every time your theme is updated.

### The PHP {#h-the-php}

First thing we will do is download the `single.php` file for your theme, and add the following code snippet above the `while ( have_posts() )` loop.

```
<?php
    $old_post = 60*60*24*365; // This is a year
    if((date('U')-get_the_time('U')) > $old_post) {
    echo '<div class="old-notice">This post was last updated over a year ago, therefore the contents of this post may be out of date.</div>';
    }
?>
```

All you need to do is edit the HTML within the `<div>` to change the contents of your old post notice.

### The CSS {#h-the-css}

If you don't want to add any formatting to your old post notice, you can stop reading this post right here. However, I like to add a bit of colour and padding so that it stands out.

We've already added a class to the `<div>` so adding formatting will be trivial. The formatting I have added to mine is:

```
/* Format the old posts notice */
.old-notice {
    padding: 20px 30px;
    background-color: #226997;
    margin-bottom: 1em;
    color: #fff;
}
```

Posts that are more than a year old will now include a notice that looks something like this:

![](/assets/images/old-post-notification-example.png)  

## Conclusion {#h-conclusion}

With a couple of very small edits, you can save yourself having to add yet another plugin to your WordPress site. And you've managed to learn a bit of PHP and CSS along the way.

Better yet, the whole thing is automated! Old post notices will be added automagically as new posts become a year old. Clever, huh?
