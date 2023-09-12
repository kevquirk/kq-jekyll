---
title: How To Convert WordPress To Markdown
layout: post
permalink: /how-to-convert-wordpress-to-markdown/
description:
  - Markdown is a simplified version of HTML. If you want to know how to convert WordPress to Markdown, you should probably read this post.
categories:
  - Technology
---
_**This post was updated on 22nd Jan 2020 with additional details from the developer of the conversion script.**_

Markdown is a simplified version of HTML that is widely used by a number of content management systems around the Internet. If you want to know how to convert WordPress to Markdown, this post may help.

The new WordPress editor, <a rel="noreferrer noopener" aria-label="Gutenberg (opens in a new tab)" href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg</a>, supports Markdown out of the box. But if you export your WordPress site, the output is an XML file. This XML file is no good for importing into content management systems that support Markdown.

If you're a regular reader of this blog, you will know that [I have migrated this site a number of times](/coming-full-circle-from-grav-to-wordpress/). So I thought I would explain the process I use to convert WordPress to Markdown.

## Step 1: Export {#h-step-1-export}

The first thing you need to do is export your WordPress content to the standard XML format. To do this, log in to your WordPress admin console then go to **Tools > Export**. Select **&#8220;All Content&#8221;**, then hit the ****download button.

![](/assets/images/wp-export-screen.png)

You will now have an exported XML file named something like `[website].WordPress.[date].xml`. Rename this file to `export.xml`.

## Step 2: Install Node.js & NPM {#h-step-2-install-node-js-npm}

For the conversation from XML to Markdown, we will use a script that is written in Node.js. For that to work we will need to install Node.js and NPM. I'm using an Ubuntu based system, so I can `apt install` the packages:

```
sudo apt install nodejs
sudo apt install npm
```

<p class="notice">
  If you're using a system that is not Ubuntu based, <a rel="noreferrer noopener" aria-label="this page (opens in a new tab)" href="https://nodejs.org/en/download/" target="_blank">this page</a> should help with installing Node.js.
</p>

## Step 3: Git Clone {#h-step-3-git-clone}

The script used to convert WordPress to Markdown is called <a rel="noreferrer noopener" aria-label="wordpress-export-to-markdown (opens in a new tab)" href="https://github.com/lonekorean/wordpress-export-to-markdown" target="_blank">wordpress-export-to-markdown</a>. We will need to clone this Github repository in order to use it.

First move into your `Downloads` directory (or wherever you want to run the script from). Then clone the repository:

```
cd Downloads
git clone https://github.com/lonekorean/wordpress-export-to-markdown
```

You should now have a folder called `wordpress-export-to-markdown` in your Downloads folder.

Move the `export.xml` file that you created earlier into the `wordpress-export-to-markdown` folder.

## Step 4: Convert WordPress to Markdown {#h-step-4-convert-wordpress-to-markdown}

We now have everything we need to convert our WordPress XML to Markdown. Back in the terminal; move into the `wordpress-export-to-markdown` folder and run the script:

```
# Move into script folder
cd wordpress-export-to-markdown
# Install pre-requisites required for the script
npm install
# Run the script
node index.js
```

The script will now traverse the XML file and convert all your content to standard Markdown. It will also pull down any images from your live site as it goes.

Once the process has completed, you will see an `output` folder. Within this folder are sub-folders for every one of your posts that contain a file called `index.md`. This is your post. There will also be another sub-folder containing any images for that post.

You can now use this Markdown to import into any content management system that supports Markdown. Like Hugo, Jekyll or <a rel="noreferrer noopener" aria-label="Grav (opens in a new tab)" href="/migrating-from-wordpress-to-grav/" target="_blank">Grav</a>.

## Limitations {#h-limitations}

Unfortunately this process won't export your pages to markdown - it just covers your posts. However, many websites don't have a lot of pages, so a simple copy and paste of the pages' content to your new CMS shouldn't be too taxing.

Alternatively, you could fork the Github project and add support for converting pages too. That's the beauty of open source software. 🙂

## Conclusion {#h-conclusion}

Even if you're not intending to migrate your WordPress site to a Markdown based CMS, it's still a good idea to have a backup of your WordPress site in an open standard, like Markdown.

All of the posts and images for this site, once exported to Markdown, equate to 15MB when compressed on my hard drive. So keeping a copy of your site in Markdown format certainly won't fill your drive and it may get you out of a jam if you lose data.

This shouldn't be your only WordPress site backup though. Remember to always [secure your WordPress site](/how-to-secure-wordpress/).

**Do you have a better way of converting WordPress to Markdown? If so, get in touch using the buttons below and I'll be happy to post an update.**