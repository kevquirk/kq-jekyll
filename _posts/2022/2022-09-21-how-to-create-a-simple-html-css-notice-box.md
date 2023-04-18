---
title: 'How to Create a Simple HTML/CSS Notice Box'
date: '2022-09-21T20:32:00+01:00'
layout: post
permalink: /how-to-create-a-simple-html-css-notice-box/
image: /assets/images/notice-box-feature.webp
description: A few people have asked how I created my notice boxes, so I thought I’d write about how I did it. Hint – it’s just a bit of CSS, folks.
categories:
    - Meta
    - Web
---
{: .tldr}
A few people have asked how I created my notice boxes, so I thought I’d write about how I did it. Hint – it’s just a bit of CSS, folks. 🙃

{: .warning}
**BEFORE WE START:** I don’t think this post will work on my RSS feed, as RSS tends not to render custom CSS. So if you’re reading it there, it might be better to read this post on my site instead.

Over the years I’ve had a number of people reach out asking how I created the notice boxes on this website. Their design has changed slightly over the years, but here’s an example of what they look like today:

{: .notice}
This is a **NOTICE** box. It’s very simple and in keeping with the design of this site, I think.

{: .warning}
This is a **WARNING** box. Again, it’s very simple and only differs slightly from the notice box above.

All looks very simple, right? Both of these notice boxes are made with a class added to a standard `p` element, and a few lines of CSS. There aren’t any `div` elements, or JavaScript. Just good old HTML and CSS.

As we all know, there are many ways to skin a cat. I’m not saying my approach is right and others are wrong. Per [my disclaimer](/disclaimer/), this is just how I decided to work around the problem.

## Building the notice box

So let’s start off with a simple `p` element and some text:

```
<p>Here be dragons! This is my notice box!</p>
```

If we render that HTML, we just get a standard paragraph that looks like this:

Here be dragons! This is my notice box!

Not much of a notice box, is it? Let’s add a class to the `p` tag so that we can target specific elements and format them as a notice box:

```
<p class="notice">Here be dragons! This is my notice box!</p>
```

If we render our notice box at this point, it would still look like a standard paragraph of text. That’s because we haven’t added any CSS to format it…yet.

We start by giving the paragraph a background colour and a border. That’s done with the following CSS:

```
.notice {
  background-color: #EFEFEF;
  border: 3px solid #444;
}
```

This will make our notice box look something like this:

<p style="background:var(--accent-bg);border:3px solid var(--text);">Here be dragons! This is my notice box!</p>

I’ve changed the CSS colour values in these examples from `#EFEFEF` and `#444` to my CSS variables so that these examples work in [both dark and light mode](/how-to-add-css-dark-mode-to-a-website/).

As you can see, our work in progress notice box is looking pretty sorry for itself. We need to add some [padding and margin](/whats-the-difference-between-padding-and-margin/) so that the text in the box, and the box itself, has some breathing room:

```
.notice {
  background-color: #EFEFEF;
  border: 3px solid #444;
  padding: 1rem;
  margin: 2rem 0; 
}
```

Here’s what it looks like with the `padding` and `margin` applied:

<p style="background-color:var(--accent-bg);border:3px solid var(--text);padding:1rem;margin:2rem 0;">Here be dragons! This is my notice box!</p>

## Adding the note/warning message

We now have a box that would function perfectly well as a basic notice box because it’s different enough from the standard body text to draw the reader’s eye. You could even give the notice box a different background colour, like this:

<p style="background-color:var(--blue);color:#000;border:3px solid #000;padding:1rem;margin:2rem 0;">Here be dragons! This is my <b>NOTICE</b> box!</p>

<p style="background-color:var(--yellow);color:#000;border:3px solid #000;padding:1rem;margin:2rem 0;">Here be dragons! This is my <b>WARNING</b> box!</p>

But we want to take things a little further here, and add the little message boxes that say `NOTE` and `WARNING`, just like my notices. To do this, we will use the `::before` [pseudo element](https://www.w3docs.com/learn-css/before.html).

So let’s add a little more CSS to our `.notice` class:

```
.notice {
  background-color: #EFEFEF;
  border: 3px solid #444;
  padding: 1rem;
  margin: 2rem 0;
}

.notice::before {
  content: "NOTE";
  background: #AACCFF;
  width: 5rem;
  border-right: 3px solid #444;
  border-bottom: 3px solid #444;
  display: block;
  text-align: center;
  position: relative;
  left: -1rem;
  top: -1rem;
  padding: 2px 10px;
  font-weight: bold;
}
```

There’s quite a lot going on here, so here is the `::before` pseudo class again with some comments added to show you what each line does:

```
.notice::before {
/* This add the actual "NOTE" text to the box */
  content: "NOTE";

/* This sets the background colour of the box */
  background: #AACCFF;

/* This sets the width of the box */
  width: 5rem;

/* Position the box in the top left corner, effectively overriding the padding we added earlier */
  position: relative;
  left: -1rem;
  top: -1rem;

/* Display the box as block so it uses the full width of the element, meaning the text within the main notice box is separate from the little box */
  display: block;

/* Give the box a border that matches the rest of the notice */
  border-right: 3px solid #444;
  border-bottom: 3px solid #444;

/* Center the text within the box */
  text-align: center;

/* Give the text a little breathing room */
  padding: 2px 10px;

/* Make the text bold so it stands out more */
  font-weight: bold;
}
```

Once this additional CSS is added, our notice box should look something like this:

{: .notice}
Here be dragons! This is my notice box!

Pretty cool, huh?

## Customisations

All you need to do now is tweak the CSS to suite your needs. If you want a `warning` box as well, create a new class called `.warning` with a pseudo class of `.warning::before`, then change the CSS above to suite. For example:

```
.warning {
  background-color: #EFEFEF;
  border: 3px solid #444;
  padding: 1rem;
  margin: 2rem 0;
}

.warning::before {
  content: "WARNING";
  background: #FFEEAA;
  width: 7.5rem;
  border-right: 3px solid #444;
  border-bottom: 3px solid #444;
  display: block;
  text-align: center;
  position: relative;
  left: -1rem;
  top: -1rem;
  padding: 2px 10px;
  font-weight: bold;
}
```

Using the CSS above, you will end up with something that looks like this:

{: .warning}
Here be dragons! This is my **WARNING** box!

### How about emojis or images instead?

You don’t have to use text in the `content` field of the CSS. you could use an emoji, like this:

```
.notice::before {
  content: " ℹ️ "
}

.warning::before {
  content: " ⚠️ "
}
```

If you really want to, you could even use an image instead, like this:

```
.notice::before {
  content: url(/path/to/your/notice/image.png)
}

.warning::before {
  content: url(/path/to/your/notice/warning.png)
}
```

## Wrapping up

Hopefully this will give you some idea of how I created the notice and warning boxes for this site, and maybe even given you some inspiration to make your own.

If you want to copy my notice boxes verbatim, have at it; [everything on this site has an open license](/privacy/) unless otherwise stated. But why not take what I’ve shown you in this post and try to make something unique of your own?

Now go forth and notice box, people!