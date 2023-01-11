---
title: Responsive Navigation Menu Without JavaScript
description: Here's how to build a responsive navigation menu using absolutely no JavaScript.
date: 2023-01-11T17:27:00.000Z
typora-root-url: ../../
category:
  - Web
---

{: .tldr}
{{ page.description }}

So you want to build a navigation menu for your site, but you don't want to add unnecessary JavaScript, or implement any [checkbox hacks](https://css-tricks.com/the-checkbox-hack/#aa-dropdown-menus), which are bad for accessibility. Then this post may be for you.

I'm going to show you how you can implement a simple navigation menu  on your website that is:

* Fully responsive
* Really simple to implement
* Uses absolutely no JavaScript
* Is accessible

So without further ado, let's crack on and get this done, shall we?

## Building a nav menu

First, let's build a basic navigation menu that's similar to the one I use on this site. We start with a `nav` element containing some links:

```html
<nav>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
    <a href="/projects/">My Projects</a>
    <a href="/search/">Search</a>
    <a href="/more-links/">More...</a>  
</nav>
```

I'm not going to go into all the details of formatting the `nav` menu with CSS, as that's outside of the scope of this guide. Plus I've written about [making a menu before](https://kevquirk.com/making-a-website-03-menus/), so check out that post if you want more info.

{: .notice}
I'm not using the `ul` element for my nav menu in this example, but this guide will work just fine with a `ul` list too.

## Wrapping is only good at Christmas

We now have our nav menu on our site, but if someone visits the site from a mobile device, all the menu items wrap around the screen, and it just looks horrible. Kinda like this:

![Wrapped nav menu](/assets/images/wrapped-nav-menu.webp)

As you can see, it's not that pretty. But more importantly, the wrapped `nav` menu is taking up crucial vertical pixels on the mobile screen.

So what we're going to do is implement a couple of simple media queries that can both **hide** and **show** different menu items depending on the size of the screen.

## Hiding items on mobile

We already have a `More...` link on the menu, which is a link to a page that contains *more links* (shock horror) to other pages on the site. So with the `More...` page listed in our menu, we don't really need other pages listed, *especially* on a mobile screen. So let's hide them.

First, we need to add the `mobile-hide` CSS class to the links on our `nav` menu that we wish to hide:

```html
<nav>
    <a href="/">Home</a>
    <a class="mobile-hide" href="/about/">About</a>
    <a class="mobile-hide" href="/contact/">Contact</a>
    <a class="mobile-hide" href="/projects/">My Projects</a>
    <a href="/search/">Search</a>
    <a href="/more-links/">More...</a>  
</nav>
```

Then, we add the following `@media` query to our CSS stylesheet:

```css
@media(max-width: 640px) {
    .mobile-hide {
        display: none;
    }
}
```

So what is this CSS doing? Well, it's looking at the width of the browser window, and if it's `640px` or *smaller*, then this CSS rule comes into effect.

In the media query we're targeting the `mobile-hide` class and telling the browser to effectively hide anything that has the `mobile-hide` class. Thus hiding those links and making our mobile menu look like this:

![Mobile nav menu](/assets/images/mobile-nav-menu.webp)

Ah, that's *much* better. The menu is all on one line, and looks *way* tidier. But we haven't lost any navigation feature as links to our other pages are still available inside the `More...` page. If you want an example, check out [my more page](/more-links/)

## Hiding the `more` link

Ok, so we can hide the links from our `nav` menu that we don't want to see on **mobile** devices, but what if we have links that we don't want to see on **desktop** devices?

Let's say, for example, that you only want to show the `More...` link on mobile. Therefore it should be hidden when someone visits your site from a desktop or laptop. Well, dear reader, I have you covered.

All you need to do is assign the `mobile-show` class to your `More...` link, like this:

```html
<nav>
    <a href="/">Home</a>
    <a class="mobile-hide" href="/about/">About</a>
    <a class="mobile-hide" href="/contact/">Contact</a>
    <a class="mobile-hide" href="/projects/">My Projects</a>
    <a href="/search/">Search</a>
    <a class="mobile-show" href="/more-links/">More...</a>  
</nav>
```

Then add a different `@media` query, like this:

```css
@media(min-width: 640px) {
    .mobile-show {
        display: none;
    }
}
```

Here we have replaced `max-width` from the previous query with `min-width`. So this rule hides the `mobile-show` class on any screens that are **greater than** 640px.

This means that as your website transitions to a screen size of 640px, the `mobile-hide` and `mobile-show` links will be simultaneously hidden and shown as needed.

{: .notice}
The break point for your mobile menu doesn't need to be 640px. If you want to make that transition happen at a different screen width, simply change 640px to a different value in both media queries.

## Final thoughts

There's obviously a number of ways to skin this particular cat, and [per my disclaimer](/disclaimer/) this may not even be the *best* way to skin the navigation cat.

But I've found this to be a quick and easy way of implementing a responsive navigation menu *without* needing JavaScript. Another alternative to this menu is [Brad Taunt's sausage links](https://bt.ht/hamburger-menu-alternative/), which [I've successfully used in the past](https://kevquirk.com/the-design-history-of-this-website/#december-2020).

Do you have a better solution to this problem? If so, I'd love to hear how you've managed to implement a navigation menu without JavaScript. Please use the button below to tell me about it.