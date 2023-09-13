---
title: How To Add CSS Dark Mode To A Website
layout: post
permalink: /how-to-add-css-dark-mode-to-a-website/
description:
  - A lot of people like to have the option of having a dark mode for a website. This post will show you how to add an automatic dark mode to your website.
categories:
  - Technology
  - Web
---
A lot of people like to have the option of [having a dark mode](https://kevquirk.com/automatic-dark-mode/) for a website. Maybe they prefer the look, or maybe they want to save their eyes from strain. This post will show you how to implement an automatic CSS dark mode that changes depending on your visitor&#8217;s theme.

## CSS Dark Mode {#h-css-dark-mode}

On this site, I define variables to set the colours of my theme. I&#8217;d suggest you do the same, as it will make this process **a lot** easier. My standard variables are as follows:

```
:root {
  --accent: #226997;
  --main: #333;
  --light: #666;
  --lighter: #f3f3f3;
  --border: #e6e6e6;
  --bg: #ffffff;
}
```

If you want to use these variables throughout your stylesheet, you do so like this:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">p {
  color: var(--main);
}</pre>

This way, if you ever want to change the colours of your theme, all you need to do is amend the variable you defined and everything using that variable will be updated.

Now we need to define a new set of variables that will be used when CSS dark mode is invoked. For me, the additional variables look like this:

<pre class="EnlighterJSRAW" data-enlighter-language="css" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Define colours for dark mode */
:root {
  --accent: #3493d1;
  --main: #f3f3f3;
  --light: #ececec;
  --lighter: #666;
  --border: #e6e6e6;
  --bg: #333333;
}</pre>

## Adding Dark Mode Support {#h-adding-dark-mode-support}

We now have our two sets of variables defined. The only thing left to do is add the `prefers-color-scheme` media query to our dark variables.

Take your dark colour variables and add the `@media` query below:

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="2,11" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">/* Define colours for dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --accent: #3493d1;
    --main: #f3f3f3;
    --light: #ececec;
    --lighter: #666;
    --border: #e6e6e6;
    --bg: #333333;
  }
}</pre>

That&#8217;s literally it! Your site will now automatically switch to dark mode if someone is using a dark operating system theme and visits your site.

## Testing It Works {#h-testing-it-works}

I&#8217;m sure you will want to test this change works. To do so, you can simply enable a dark theme on your operating system, such as the iOS dark theme.

Alternatively, if you don&#8217;t want to mess around with your OS themes, you can force this test in Firefox. Here&#8217;s how:

  1. Open Firefox and type `about:config` in the address bar and hit enter.
  2. You will be asked to accept the risk. Accept it.
  3. In the search bar, search for `ui.systemUsesDarkTheme`.
  4. Change the checkbox to `number` and click on the `+` symbol.
  5. Change the value to `1` and click on the tick button.
  6. The page should now turn dark.
  7. Head back to your website and the theme should have automatically updated to dark mode.
  8. If you want to test it switches back, change the value to ``.
  9. Once you have finished testing, click the trash can to delete the option.

## Conclusion {#h-conclusion}

You should now have a website that is not only responsive in terms of mobile interface, but also by theme too. I&#8217;m sure your late night visitors, or those who just prefer a dark themed site, will thank you.
