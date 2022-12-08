---
id: 6250
title: 'Adding The Post Title To My &#8220;Reply By Email&#8221; Button'
date: 2021-08-15T17:19:56+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=6250
permalink: /adding-the-post-title-to-my-reply-by-email-button/
image: /assets/images/wp-images/uploads/2021/08/reply-button-feature.png
categories:
  - Web
---
I recently wrote about [online conversations and engagements](https://kevq.uk/online-conversations-website-engagement/) where I talked about using plain old email instead of comments. Off the back of that post, I got chatting with <a href="https://luke.work" target="_blank" rel="noreferrer noopener">Luke Harris</a> (told you that button works), who does something very similar on his site.

However, his reply button automatically adds the title of the post to the subject line of the email. Luke uses Eleventy for his blog, so if you want similar functionality on your Eleventy blog, you can <a href="https://luke.work/blog/2021/07/alternative-to-comments/" target="_blank" rel="noreferrer noopener">read about how he did this</a>.

Not wanting to be outdone by Luke, I decided to add similar functionality to my &#8220;Reply by email&#8221; button. But I&#8217;m not using Eleventy; I&#8217;m on good old WordPress. Lucky for me, with a bit of PHP trickery, I was able to do this relatively easily.

## Adding PHP {#h-adding-php}

First we need to add some PHP code to the `functions.php` file which will create a very simple shortcode.

From there we will call that shortcode in the HTML that the reply button uses. Simple, hey?

<p class="notice">
  <strong>Side note:</strong> if you&#8217;re using a theme that someone else has created, I would <strong>strongly</strong> suggest you setup a <a href="https://developer.wordpress.org/themes/advanced-topics/child-themes/" target="_blank" rel="noreferrer noopener">child theme</a> first. Otherwise, any changes you make will be overwritten when the developer updates the theme.
</p>

Ok let’s crack on. First you need to add the following code to the end of your `functions.php` file:

<pre class="wp-block-code"><code>// Add shortcode for reply via mail link
add_shortcode( 'mailto_title', 'mailto_title' );

function mailto_title( $atts ) {
    return esc_attr( get_the_title( get_the_ID() ) );
}</code></pre>

All this shortcode does is parse the title of the post and embed that where the shortcode is used. Pretty darn simple.

## Adding the reply button {#h-adding-the-reply-button}

That&#8217;s it for the PHP. All we need to do now is add our shiny new shortcode to the `mailto` link we will use on our reply button.

To do that, we need to add a button somewhere at the end of a post. There are various plugins that can do this, or you can do it yourself by adding the appropriate HTML to your `single.php` file.

Personally, I&#8217;m using the awesome <a href="https://generatepress.com" target="_blank" rel="noreferrer noopener">GeneratePress</a> theme, so can easily add a button after all my posts using Generate Blocks.

Now, if you wanted to add a standard link that sends you an email, the HTML markup would look something like this:

<pre class="wp-block-code"><code>&lt;a href=“mailto:you@example.com”&gt;Reply by email&lt;/a&gt;</code></pre>

But that won&#8217;t populate the subject for us. To do that, we need to add a little more HTML to the link:

<pre class="wp-block-code"><code>&lt;a href=“mailto:you@example.com?subject=Reply to your post”&gt;Reply by email&lt;/a&gt;</code></pre>

And when we click on that link, we get this result:

<img loading="lazy" width="891" height="641" src="/assets/images/wp-images/2021/08/mailto-link-with-subject.png" alt="mailto link with subject" class="wp-image-6344" srcset="/assets/images/wp-images/2021/08/mailto-link-with-subject.png 891w, /assets/images/wp-images/2021/08/mailto-link-with-subject-610x439.png 610w, /assets/images/wp-images/2021/08/mailto-link-with-subject-768x553.png 768w" sizes="(max-width: 891px) 100vw, 891px" />  

Woohoo! We have a standard link that will populate the email address **and** subject, but it isn’t a button and it isn’t using the post’s title. To do this, create a WordPress button in the Gutenberg editor and add the following string to the link value:

<pre class="wp-block-code"><code>mailto:you@example.com?subject=Reply to "&#91;mailto_title]"</code></pre>

<div class="wp-block-image">
  <img loading="lazy" width="425" height="288" src="/assets/images/wp-images/2021/08/gutenberg-reply-button.png" alt="Gutenberg reply button" class="wp-image-6348" />
</div>

Then, go to the front end and test your button. The result should be something like this:

<img loading="lazy" width="891" height="641" src="/assets/images/wp-images/2021/08/mailto-link-with-post-title-as-subject.png" alt="Mailto link with post title as subject" class="wp-image-6351" srcset="/assets/images/wp-images/2021/08/mailto-link-with-post-title-as-subject.png 891w, /assets/images/wp-images/2021/08/mailto-link-with-post-title-as-subject-610x439.png 610w, /assets/images/wp-images/2021/08/mailto-link-with-post-title-as-subject-768x553.png 768w" sizes="(max-width: 891px) 100vw, 891px" />  

Well would you look at that, folks! We not only have the subject populated, but it&#8217;s using the title of the post too. Goddam, WordPress is great, isn&#8217;t it.

If you want to do it the manual way, by adding the HTML to your `single.php` file, then add the following HTML remembering to change the CSS class to whatever the right one is for buttons in your theme:

<pre class="wp-block-code"><code>&lt;a class=“button” href=“mailto:you@example.com?subject=&lt;?php echo do_shortcode( ‘&#91;mailto_title]’ ); ?&gt;”&gt;Reply by email&lt;/a&gt;</code></pre>

## Closing thoughts {#h-closing-thoughts}

So there you go, folks. If you&#8217;re using WordPress you can now add a &#8220;Reply to my post&#8221; button and it will automatically populate the subject line of the email with the post title.

It&#8217;s a simple thing, but it makes it really easy for you, as the person who is receiving the email, to understand the context of what your reader is emailing you about.

Before implementing this change, I received lots of emails with a generic subject line like _&#8220;saw your post&#8230;&#8221;_ This makes it difficult to understand what post they&#8217;re talking about sometimes, so adding this little tweak really helped.

**Are you using a &#8220;reply to this post&#8221; button? Or are you still rocking comments? Why not use the button below to tell me&#8230;and yes, it does add the post title to the subject line. 🙃**
