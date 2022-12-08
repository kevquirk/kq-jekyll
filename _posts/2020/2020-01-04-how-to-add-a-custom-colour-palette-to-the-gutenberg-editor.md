---
title: How To Add A Custom Colour Palette To The Gutenberg Editor
layout: post
permalink: /how-to-add-a-custom-colour-palette-to-the-gutenberg-editor/
description:
  - The Gutenberg editor in Wordpress is pretty good. This post will show you how to add a custom colour palette to the Gutenberg editor.
categories:
  - Technology
  - Web
---
The new <a rel="noreferrer noopener" aria-label="Gutenberg editor (opens in a new tab)" href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg editor</a> in WordPress is pretty good, but I wanted to be able to customise the colour palette of my blocks. This post will show you how to add a custom colour palette to the Gutenberg editor.

<img loading="lazy" width="1000" height="600" src="/assets/images/wp-images/2020/01/gutenberg-colour-palette.png" alt="" class="wp-image-776" srcset="/assets/images/wp-images/2020/01/gutenberg-colour-palette.png 1000w, /assets/images/wp-images/2020/01/gutenberg-colour-palette-300x180.png 300w, /assets/images/wp-images/2020/01/gutenberg-colour-palette-768x461.png 768w" sizes="(max-width: 1000px) 100vw, 1000px" />  

## What are Gutenberg colour palettes? {#h-what-are-gutenberg-colour-palettes}

The new Gutenberg editor uses the concept of blocks to form pages and posts. So you can have a paragraph block, a header block, an image block etc. These blocks are stitched together to create your content.

Gutenberg allows you to customise the background and text colour of blocks so that they stand out. Personally, I only use the custom colours feature to create notifications and warnings within my posts. Like this:

<p class="notice-red">
  Red is an error or strong warning block.
</p>

<p class="notice">
  Blue is an information block.
</p>

The default colour palette doesn&#8217;t contain any high-contrast colours like the ones above, so I always had to choose the colours manually. This not only slowed me down, but also meant that my warning and notification banners had inconsistent colours.

I needed a way of creating a custom colour palette in Gutenberg.

## Adding a custom colour palette {#h-adding-a-custom-colour-palette}

The process requires a couple of additions to the theme you&#8217;re using. You will need to edit the `functions.php` file and your CSS stylesheet.

<p class="has-white-color has-blue-background-color has-text-color has-background">
  <strong>Note: </strong>If you&#8217;re using a theme that is managed and updated by another person/company, you will need to create a <a rel="noreferrer noopener" aria-label="child theme (opens in a new tab)" href="https://developer.wordpress.org/themes/advanced-topics/child-themes/" target="_blank">child theme</a> so your changes are not overwritten with an update.
</p>

Once you have decided what colours you want to add, open up your `functions.php` file and add the following `add_theme_support` call:

<pre class="wp-block-code"><code>// Add support for custom colour pallette in Gutenberg.
add_theme_support( 'editor-color-palette', array(
	array(
		'name' =&gt; __( 'blue', 'themeLangDomain' ),
		'slug' =&gt; 'blue',
		'color' =&gt; '#226997',
	),
	array(
		'name' =&gt; __( 'white', 'themeLangDomain' ),
		'slug' =&gt; 'white',
		'color' =&gt; '#ffffff',
	),
) );</code></pre>

The code above will replace the default palette with `blue` and `white` colours. If you want to add more, copy and paste the arrays and edit to suit your needs.

## Adding CSS {#h-adding-css}

The final step is to add the CSS so your theme knows how to format the block&#8217;s text and background once you select custom colours from the editor.

Open the CSS stylesheet for your theme or your child theme. To add support for the `blue` and `white` entries above, we will add the following CSS:

<pre class="wp-block-code"><code>/** Custom colours for Gutenberg editor **/

/** Blue colours **/
.has-blue-background-color {
	background-color: #226997;
}
.has-blue-color {
	color: #226997;
}

/** White colours **/
.has-white-background-color {
	background-color: #ffffff;
}
.has-white-color {
	color: #ffffff;
}</code></pre>

This will allow you to select either `blue` or `white` as the background or text colour and the CSS will format the block.

<p class="has-white-color has-blue-background-color has-text-color has-background">
  <strong>Note: </strong>You may need to add additional CSS to format hyperlinks etc. within your coloured blocks.
</p>

## Conclusion {#h-conclusion}

That&#8217;s it. You now have a custom colour palette in Gutenberg.

Obviously it doesn&#8217;t have to be used for warnings and notification banners, that&#8217;s just how I use them. You could use this process to have a custom colour palette that matches your theme.
