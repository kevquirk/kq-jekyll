---
id: 6250
title: 'Adding The Post Title To My &#8220;Reply By Email&#8221; Button'
date: 2021-08-15T17:19:56+01:00

layout: post
permalink: /adding-the-post-title-to-my-reply-by-email-button/
categories:
  - Web
---
I recently wrote about [online conversations and engagements](/online-conversations-website-engagement/) where I talked about using plain old email instead of comments. Off the back of that post, I got chatting with <a href="https://luke.work" target="_blank" rel="noreferrer noopener">Luke Harris</a> (told you that button works), who does something very similar on his site.

However, his reply button automatically adds the title of the post to the subject line of the email. Luke uses Eleventy for his blog, so if you want similar functionality on your Eleventy blog, you can <a href="https://luke.work/blog/2021/07/alternative-to-comments/" target="_blank" rel="noreferrer noopener">read about how he did this</a>.

Not wanting to be outdone by Luke, I decided to add similar functionality to my &#8220;Reply by email&#8221; button. But I'm not using Eleventy; I'm on good old WordPress. Lucky for me, with a bit of PHP trickery, I was able to do this relatively easily.

## Adding PHP {#h-adding-php}

First we need to add some PHP code to the `functions.php` file which will create a very simple shortcode.

From there we will call that shortcode in the HTML that the reply button uses. Simple, hey?

<p class="notice">
  <strong>Side note:</strong> if you're using a theme that someone else has created, I would <strong>strongly</strong> suggest you setup a <a href="https://developer.wordpress.org/themes/advanced-topics/child-themes/" target="_blank" rel="noreferrer noopener">child theme</a> first. Otherwise, any changes you make will be overwritten when the developer updates the theme.
</p>

Ok let’s crack on. First you need to add the following code to the end of your `functions.php` file:

```
// Add shortcode for reply via mail link
add_shortcode( 'mailto_title', 'mailto_title' );

function mailto_title( $atts ) {
    return esc_attr( get_the_title( get_the_ID() ) );
}
```

All this shortcode does is parse the title of the post and embed that where the shortcode is used. Pretty darn simple.

## Adding the reply button {#h-adding-the-reply-button}

That's it for the PHP. All we need to do now is add our shiny new shortcode to the `mailto` link we will use on our reply button.

To do that, we need to add a button somewhere at the end of a post. There are various plugins that can do this, or you can do it yourself by adding the appropriate HTML to your `single.php` file.

Personally, I'm using the awesome <a href="https://generatepress.com" target="_blank" rel="noreferrer noopener">GeneratePress</a> theme, so can easily add a button after all my posts using Generate Blocks.

Now, if you wanted to add a standard link that sends you an email, the HTML markup would look something like this:

```
<a href=“mailto:you@example.com”>Reply by email</a>
```

But that won't populate the subject for us. To do that, we need to add a little more HTML to the link:

```
<a href=“mailto:you@example.com?subject=Reply to your post”>Reply by email</a>
```

And when we click on that link, we get this result:

![](/assets/images/mailto-link-with-subject.png)

Woohoo! We have a standard link that will populate the email address **and** subject, but it isn’t a button and it isn’t using the post’s title. To do this, create a WordPress button in the Gutenberg editor and add the following string to the link value:

```
mailto:you@example.com?subject=Reply to "&#91;mailto_title]"
```

![](/assets/images/gutenberg-reply-button.png)

Then, go to the front end and test your button. The result should be something like this:

![](/assets/images/mailto-link-with-post-title-as-subject.png)

Well would you look at that, folks! We not only have the subject populated, but it's using the title of the post too. Goddam, WordPress is great, isn't it.

If you want to do it the manual way, by adding the HTML to your `single.php` file, then add the following HTML remembering to change the CSS class to whatever the right one is for buttons in your theme:

```
<a class=“button” href=“mailto:you@example.com?subject=<?php echo do_shortcode( ‘&#91;mailto_title]’ ); ?>”>Reply by email</a>
```

## Closing thoughts {#h-closing-thoughts}

So there you go, folks. If you're using WordPress you can now add a &#8220;Reply to my post&#8221; button and it will automatically populate the subject line of the email with the post title.

It's a simple thing, but it makes it really easy for you, as the person who is receiving the email, to understand the context of what your reader is emailing you about.

Before implementing this change, I received lots of emails with a generic subject line like _&#8220;saw your post&#8230;&#8221;_ This makes it difficult to understand what post they're talking about sometimes, so adding this little tweak really helped.

**Are you using a &#8220;reply to this post&#8221; button? Or are you still rocking comments? Why not use the button below to tell me&#8230;and yes, it does add the post title to the subject line. 🙃**
