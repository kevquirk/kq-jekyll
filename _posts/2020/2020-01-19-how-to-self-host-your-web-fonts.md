---
title: How To Self-Host Your Web Fonts
layout: post
permalink: /how-to-self-host-your-web-fonts/
description: Most themes use Google Fonts for rendering its typography. This post will show you how to self-host web fonts so you're not beholden to Google.
categories:
  - Web
---
**If you&#8217;re using a pre-built theme, the likelihood is that Google Fonts is being used for rendering typography. This post will show you how to self-host web fonts so <a rel="noreferrer noopener" aria-label="you're not beholden to Google (opens in a new tab)" href="/category/de-googling/" target="_blank">you&#8217;re not beholden to Google</a>.**

## Getting Started {#h-getting-started}

This first thing to do is to choose your fonts. If you want to use the same fonts as your site, you will need to the font names your theme uses. You can do that with browser plugins like <a rel="noreferrer noopener" aria-label="Font Finder Revived (opens in a new tab)" href="https://addons.mozilla.org/en-GB/firefox/addon/font-inspect/?src=search" target="_blank">Font Finder Revived</a> for Firefox.

For this post we&#8217;re going to be using <a rel="noreferrer noopener" href="https://www.fontsquirrel.com/" target="_blank">Font Squirrel</a> as the font provider. If you don&#8217;t know which fonts you want to use, head over there and start browsing around.

## Choosing Fonts {#h-choosing-fonts}

This site uses <a rel="noreferrer noopener" aria-label="Fira Sans (opens in a new tab)" href="https://www.fontsquirrel.com/fonts/fira-sans" target="_blank">Fira Sans</a> for headers and <a rel="noreferrer noopener" aria-label="Merriweather (opens in a new tab)" href="https://www.fontsquirrel.com/fonts/merriweather" target="_blank">Merriweather</a> for the body text. So we will use these as the example for this post.

Before you go downloading fonts and using them on your website, you need to make sure the font&#8217;s license allows `@font-face` embedding. This is shown at the top of the font page and is depicted by a globe icon:

<div class="wp-block-image">
  <img loading="lazy" width="954" height="420" src="/assets/images/wp-images/2020/01/font-squirrel-embed.png" alt="" class="wp-image-970" srcset="/assets/images/wp-images/2020/01/font-squirrel-embed.png 954w, /assets/images/wp-images/2020/01/font-squirrel-embed-300x132.png 300w, /assets/images/wp-images/2020/01/font-squirrel-embed-768x338.png 768w" sizes="(max-width: 954px) 100vw, 954px" />
</div>

If the fonts you want to use have this icon, then you&#8217;re all good and can legally use them under the terms of the license. Both Fira Sans and Merriweather allow this, as do most of the fonts on Font Squirrel.

Now you know you can use the fonts you have picked, go ahead and download them using the purple **_Download_** button on Font Squirrel.

## Removing Noise {#h-removing-noise}

As you can see from the image below, Fira Sans has a tonne of fonts within the package. Since I only use Fira Sans for headers, I&#8217;m not going to need most of them.

<img loading="lazy" width="1024" height="631" src="/assets/images/wp-images/2020/01/fira-sans-download-1024x631.png" alt="" class="wp-image-972" srcset="/assets/images/wp-images/2020/01/fira-sans-download-1024x631.png 1024w, /assets/images/wp-images/2020/01/fira-sans-download-300x185.png 300w, /assets/images/wp-images/2020/01/fira-sans-download-768x473.png 768w, /assets/images/wp-images/2020/01/fira-sans-download.png 1079w" sizes="(max-width: 1024px) 100vw, 1024px" />  

My headers will only ever be bold, so I only really need the Fira Sans bold font. All the others are just wasted space. However, I may need an italic header from time to time, so I will take the bold-italic font too.

Merriweather doesn&#8217;t come with quite so many options, but there are still more than we need. Because we&#8217;re going to be using Merriweather for our body font, we&#8217;re going to need standard, italic, bold and bold-italic. I personally like the black version of Merriweather, because it&#8217;s heavier than normal bold, so it gives more of a contrast to standard text.

We have picked out the fonts we want to self-host, which are:

  * Fira Sans bold and bold/italic (for headers)
  * Merriweather standard, _italic_, **black** and **_black/italic_**

## Self-Host Web Fonts {#h-self-host-web-fonts}

You should now have a folder for each font that contains _only_ the fonts that you need for your website. It&#8217;s now time to convert these fonts into web fonts. This is done using <a href="https://www.fontsquirrel.com/tools/webfont-generator" target="_blank" rel="noreferrer noopener">Font Squirrel&#8217;s web font generator</a>.

Keep the settings set to `optimal` and upload your first collection of fonts. You will also need to check the box to confirm the font license you&#8217;re using allows web font usage. Once the fonts are uploaded, click the `Download your kit` button.

<div class="wp-block-image">
  <img loading="lazy" width="729" height="353" src="/assets/images/wp-images/2020/01/font-squirrel-web-font-generator.png" alt="" class="wp-image-975" srcset="/assets/images/wp-images/2020/01/font-squirrel-web-font-generator.png 729w, /assets/images/wp-images/2020/01/font-squirrel-web-font-generator-300x145.png 300w" sizes="(max-width: 729px) 100vw, 729px" />
</div>

<p class="notice">
  Note: This process may take a few minutes to complete.
</p>

Repeat this process if you&#8217;re using more than one font. Once you&#8217;re done, you should have 2 web font kits that each look similar to this:

<div class="wp-block-image">
  <img loading="lazy" width="930" height="534" src="/assets/images/wp-images/2020/01/web-font-kit-excample.png" alt="" class="wp-image-976" srcset="/assets/images/wp-images/2020/01/web-font-kit-excample.png 930w, /assets/images/wp-images/2020/01/web-font-kit-excample-300x172.png 300w, /assets/images/wp-images/2020/01/web-font-kit-excample-768x441.png 768w" sizes="(max-width: 930px) 100vw, 930px" />
</div>

Extract each web font kit and delete all the files in the kit except for `stylesheet.css` and the WOFF / WOFF2 files. It&#8217;s now time to start implementing code changes so you can self-host web fonts.

## Code Changes {#h-code-changes}

Open up the `stylesheet.css` and change the `font-family` lines to all have the same name. In this example, they&#8217;re all called `'fira'`. Then change the `font-weight` and `font-style` to suite what you need.

```css
@font-face {
  font-family: 'fira';
  src: url('firasans-bold-webfont.woff2') format('woff2'),
        url('firasans-bold-webfont.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'fira';
  src: url('firasans-bookitalic-webfont.woff2') format('woff2'),
       url('firasans-bookitalic-webfont.woff') format('woff');
  font-weight: 700;
  font-style: italic;
}
```

This will tell your website to use the standard bold font for text, but use the italic version of the font when rendering italic text. For Merriweather we have a few more entries, which are:

```css
/* Standard font */
@font-face {
  font-family: 'merriweather';
  src: url('merriweather-light.woff2') format('woff2'),
       url('merriweather-light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

/* Bold font */
@font-face {
  font-family: 'merriweather';
  src: url('merriweather-black.woff2') format('woff2'),
       url('merriweather-black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

/* Italic font */
@font-face {
  font-family: 'merriweather';
  src: url('merriweather-light-italic.woff2') format('woff2'),
       url('merriweather-light-italic.woff') format('woff');
  font-weight: 300;
  font-style: italic;
}

/* Bold & Italic font */
@font-face {
  font-family: 'merriweather';
  src: url('merriweather-black-italic.woff2') format('woff2'),
       url('merriweather-black-italic.woff') format('woff');
  font-weight: 900;
  font-style: italic;
}
```

You now need set both to body and header fonts within the stylesheet for your website:

```css
body {
  font-family: "merriweather";
}
h1, h2, h3, h4, h5, h6 {
  font-family: "fira";
}
```

The final step is to delete the Google Fonts link in the `<header>` of your website and replace it with links to your new stylesheets:

```html
<-- Remove the line that looks like this -->
<link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" />

<-- Replace it with this -->
<link rel='stylesheet'  href="fonts/merriweather/merriweather.css" type='text/css' media='all' />
<link rel='stylesheet'  href="fonts/fira/fira.css" type='text/css' media='all' />
```

That&#8217;s it! You can now self-host web fonts, but more importantly you&#8217;re not reliant on Google for rendering your typography.

## Conclusion {#h-conclusion}

Self-hosting your web fonts has a number of advantages. You don&#8217;t need to rely on 3rd parties for crucial parts of your website&#8217;s theme, and you have regained control.

Crucially though, because your website isn&#8217;t calling out to third parties, your website should load quicker too.
