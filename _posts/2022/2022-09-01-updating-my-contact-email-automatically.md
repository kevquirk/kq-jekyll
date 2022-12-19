---
title: 'Updating My Contact Email Automatically'
date: '2022-09-01T16:07:54+01:00'
layout: post
permalink: /updating-my-contact-email-automatically/
description: I've now referenced my email address right across this site from a single place, so it's easy to update.
categories:
    - Meta
---
{: .tldr}
Cast your mind all the back to yesterday, dear reader, where I published the *[Ban the Spam](https://kevquirk.com/ban-the-spam/)* post. In that post I talk about combatting spam, yet having my contact email plastered across this site.

Problem is, I have 3 places where I list this contact email; on [my contact page](/contact/) (of course), on my [reply by email button](/adding-the-post-title-to-my-reply-by-email-button/) at the bottom of every post, and in a similar link at the bottom of every post in my RSS feed.

So as you can imagine, changing the contact address could be somewhat painful if I want to do it semi-regularly. Toward the end of yesterday’s post, I spoke briefly about this quandary:

> I’d prefer to set the email address in a single place and have it replicated to both my contact page and my button.
> 
> I’ll have to think about how best to do that – I’m sure there will be a way for me to that within `functions.php` or something. If you’re a WordPress ninja and have any ideas, I’m all ears.

I know just enough PHP to be dangerous, and have managed to come up with a solution for doing this. It’s probably not the best solution, but it works, so I’m happy.

I wanted to write this post mainly as a reminder to myself, but if it helps any of you guys, then all the better.

## Functions, short codes and PHP, oh my!

I was pretty sure that I would be able to do something in my `functions.php` file with short codes etc. and I was right!

So I already had a couple of functions defined in there – one that pulls the post title for the *reply by email* button, and another that [I stole from my good pal, Ru Singh](https://rusingh.com/adding-a-comment-via-email-convenience-link/). (thanks, Ru!)

In this post I’m going to start again with the functions, just so it’s clear to me what I did, when I read it back later.

## Defining the short codes

I decided I needed to define two [short codes](https://developer.wordpress.org/plugins/shortcodes/) for this to work. One that displays an arbitrary string of text (in this case, an email address). And another that pulls the post’s title.

Let’s look at the email address one first:

```
// Shortcode for inserting the site's contact email
add_shortcode( 'contact_email', 'contact_email' );

function contact_email( $atts ) {
    return 'test@example.com';
}
```

This shot code allows me to use `[contact_email]` anywhere on this site and WordPress will automagically insert the string after the `return`.

### Get the title

So we’ve got the email address sorted. Next we need to do is create a short code that will pull the post’s title. This function already exists in WordPress, I just needed a short code to pull it:

```
// Shortcode for generating the post title
add_shortcode( 'get_title', 'get_title' );

function get_title( $atts ) {
    return esc_attr( get_the_title( get_the_ID() ) );
}
```

As before, all I need to do now is place `[get_title]` anywhere inside a post and it will display that post’s title.

## Putting it all together

I now had the nuts and bolts to get this shin-dig on the road. All I had to do was put it together. So first I changed the email address on my contact page from, you know, the *actual* email address that I want people to email and replace it with my `contact_email`. So when visit the page and it renders, you see whatever that `return` value is for the short code. I also set the `mailto:` value of the link to be the short code.

Confused yet? This is short code inception here, people! To try and give you a a better demonstration, here is a logical representation in HTML:

```
<a href="mailto:[contact_email]">[contact_email]</a>
```

So if the `return` string on our shortcode is `test@example.com`, the rendered HTML that you see would be:

```
<a href="mailto:<span style="font-family: var(--mono); background: var(--accent-bg);">test@example.com</span>"><span style="font-family: var(--mono); background: var(--accent-bg);">test@example.com</a></span>
```

Make sense? Good, I’m glad we’re now on the same page. 🙃

### Fixing the button

So that’s the contact page done. Next I need to sort the *reply by email* button. This was again, really easy. All I had to do was change the button’s link to be the following:

```
<a href="mailto:[contact_email]?subject=Reply to '[get_title]'">Reply by email</a>
```

Which renders a link that emails the address in the `contact_email` short code and includes the post title in the subject line:

```
<a href="mailto:test@example.com?subject=Reply to 'Updating My Contact Email Automatically'">Reply by email</a>
```

### Finally, the RSS feed

The last part was to bastardise Ru’s code so that includes my short codes so that there’s a link at the end of every post in my RSS feed that, like my reply button, populates the `contact_email` in the `to` field and the subject line with the post title.

Here’s what that code looks like:

```
// Add reply link to RSS feed
add_filter( "the_content_feed", "feed_comment_via_email" );

function feed_comment_via_email($content)
{
   $content .= "<p><a href=\"mailto: " . do_shortcode( ' [contact_email] ' ) . "?subject=Reply to '" . do_shortcode( ' [get_title] ' ) . "'" . "\">Reply via email</a></p>";
   return $content;
}
```

All this code is doing, is injecting a link at the bottom of each RSS feed entry that, you guessed it, uses my short codes.

## How to use this code

Now that I have all the code I need, I just need to implement it on my theme. I’m using a [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) for this so my theme changes persist through theme updates.

All I did was tie these code snippets together and added them to my `functions.php` file:

```
// Shortcode for inserting the site's contact email
add_shortcode( 'contact_email', 'contact_email' );

function contact_email( $atts ) {
    return 'test@example.com'; // Change this value when it's time to update your email everywhere!
}

// Shortcode for generating the post title
add_shortcode( 'get_title', 'get_title' );

function get_title( $atts ) {
    return esc_attr( get_the_title( get_the_ID() ) );
}

// Add reply link to RSS feed
add_filter( "the_content_feed", "feed_comment_via_email" );

function feed_comment_via_email($content)
{
   $content .= "<p><a href=\"mailto: " . do_shortcode( ' [contact_email] ' ) . "?subject=Reply to '" . do_shortcode( ' [get_title] ' ) . "'" . "\">Reply via email</a></p>";
   return $content;
}
```

### Changing the email

If at a later date I want to update the contact email for this site, all I need to do is replace the email address on line 5 above and the 3 locations where I use that address will automatically be updated.

No muss, no fuss. Winning.

Like I said at the start of this post, this probably isn’t the most elegant solution to the problem, but it’s a working solution so I’m happy. If you have any idea as to how I can improve this, please do let me know.