---
id: 3111
title: Trying To Go Green With Local Fonts
date: 2020-10-23T22:30:02+01:00

layout: post
permalink: /how-local-fonts-can-save-the-environment/
description:
  - I've made some changes to the font stack on this website. This site now uses local fonts and this post explains why.
categories:
  - Technology
  - Web
---
<p class="tldr">
  I&#8217;ve made some changes to the font stack on this website. This site now uses local fonts and this post explains why.
</p>

I recently read <a href="https://visitmy.website/2020/07/13/this-website-is-killing-the-planet/" target="_blank" rel="noreferrer noopener">this post</a> by Steve Messer about why his website is killing the planet. In the post he talks about how the bloat he had introduced into his site was causing more web requests and more transmission of data.

These requests and transmissions make the servers in data centres work harder, which uses more power, which is worse for the environment.

I have to say, Steve's post really resonated with me. So I decided to take a look at my own site and the results were shocking.

## Loading remote fonts {#h-loading-remote-fonts}

For the theme on this site, I load the fonts from the server. This is so I can tightly control how the theme looks, by using custom fonts. But a breakdown of my site's makeup shows that **83% of my website is fonts!**

![](/assets/images/custom-fonts-graph.png)

<table>
  <tr>
    <td>
    </td>

    <td>
      <strong>Size (KB)</strong>
    </td>
  </tr>

  <tr>
    <td>
      Font
    </td>

    <td>
      768.7
    </td>
  </tr>

  <tr>
    <td>
      JavaScript
    </td>

    <td>
      54.5
    </td>
  </tr>

  <tr>
    <td>
      CSS
    </td>

    <td>
      46.6
    </td>
  </tr>

  <tr>
    <td>
      Images
    </td>

    <td>
      42.1
    </td>
  </tr>

  <tr>
    <td>
      HTML
    </td>

    <td>
      10.6
    </td>
  </tr>

  <tr>
    <td>
      <strong>Total:</strong>
    </td>

    <td>
      <strong>922.5</strong>
    </td>
  </tr>
</table>

My site is already [highly optimised](/how-i-optimise-my-website-performance/) and because of this it performs well. But 768KB of the total 922KB of my homepage is fonts. That's crazy and I need to fix it!

## Local fonts {#h-local-fonts}

The answer was obvious - local fonts! Yes, the design wouldn't be quite as nice. And I would have to compromise with some of the fonts in use, but the change should be significant in terms of performance.

I had to start looking for a decent font stack for both serif (body font) and sans-serif (headers and such). After lots of trial, error and hunting around the Internet, I settled on the following font stacks:

```
/* Serif font stack */
font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;

/* Sans-Serif font stack */
font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Both of these font stacks are from <a rel="noreferrer noopener" href="https://css-tricks.com/snippets/css/font-stacks/" target="_blank">this really helpful post on CSS Tricks</a>. However, I removed Gill Sans from my sans serif font stack because I think it’s an awful font.

These changes are live on the site right now, you may have noticed? Things don't look quite as nice as they did, but they're very similar.

Even though the site doesn't look quite as nice, the results are so worth it, take a look yourself:

![](/assets/images/local-fonts-pie.png)

<table>
  <tr>
    <td>
    </td>

    <td>
      <strong>Size (KB)</strong>
    </td>
  </tr>

  <tr>
    <td>
      Font
    </td>

    <td>
      181.5
    </td>
  </tr>

  <tr>
    <td>
      JavaScript
    </td>

    <td>
      54.5
    </td>
  </tr>

  <tr>
    <td>
      CSS
    </td>

    <td>
      46.6
    </td>
  </tr>

  <tr>
    <td>
      Images
    </td>

    <td>
      42.1
    </td>
  </tr>

  <tr>
    <td>
      HTML
    </td>

    <td>
      8.7
    </td>
  </tr>

  <tr>
    <td>
      <strong>Total:</strong>
    </td>

    <td>
      333.4
    </td>
  </tr>
</table>

That's a 66% reduction in page size just by using local fonts. You'll notice the fonts are still the largest single item, that's because I use <a rel="noreferrer noopener" href="https://icons8.com/line-awesome" target="_blank">Line Awesome</a> for the various icons across the site. However, I may replace them in the future too. Probably with locally hosted SVGs.

## Thinking of the environment {#h-thinking-of-the-environment}

So switching to local fonts is all well good, but how does that impact the environment?

According to a <a href="https://www.websitecarbon.com" target="_blank" rel="noreferrer noopener">website carbon calculator</a>, this website emits the amount of carbon that 4 trees absorb in a year. **And that's just the homepage!**

Before changing to local fonts, the same calculator estimated that my homepage used around 9 trees worth per year. **That's a reduction of over 100KG of CO2 per year.** I find that statistic mind boggling.

According to the carbon calculator, this website is also cleaner than 87% of websites they have tested. I'm happy with that.

## What else am I doing? {#h-what-else-am-i-doing}

I started looking for a green host, but by sheer coincidence it transpires that my host, Ionos, <a href="https://www.ionos.co.uk/environment" target="_blank" rel="noreferrer noopener">runs their UK and German data-centres entirely on renewable energy</a>.

> All IONOS by 1&1 data centres and offices in the UK and Germany are powered by renewable energy. In other markets, our carbon is offset.
>
> <cite>Ionos</cite>

This is great - no need to migrate to another host. But I still felt there was more I could do. So I decided to setup a recurring monthly donation to <a rel="noreferrer noopener" href="https://www.woodlandtrust.org.uk/protecting-trees-and-woods/campaign-with-us/big-climate-fightback/" target="_blank">The Woodland Trust</a>.

At home, we also pay extra to <a href="https://ovo.com/planzero/" target="_blank" rel="noreferrer noopener">our gas/electricity supplier</a> to have them supply us with gas/electricity from renewable sources where possible.

## Conclusion

By switching to local fonts, ensuring this site is hosted with a green host, and donating to a cause that hopefully off-sets some of the carbon this site uses, I hope I've been able to reduce my carbon footprint somewhat.

<a rel="noreferrer noopener" href="https://visitmy.website/2020/07/13/this-website-is-killing-the-planet/" target="_blank">Steve Messer's post</a> really had an impact on the way I think about my Internet usage, and I think this is just the start. Hopefully the changes to the website aren't too impactful for you, my readers. If they are, I'm sorry. You can always subsribe via <a href="/rss-feeds/" target="_blank" rel="noreferrer noopener">RSS</a> or to my <a href="/my-newsletter-craving-coffee/" target="_blank" rel="noreferrer noopener">newsletter</a>, so you don't have to look at my theme. 🙂

Is there anything else I can be doing to improve my carbon footprint online? If you have any ideas, please <a rel="noreferrer noopener" href="/contact/" target="_blank">get in touch</a> or leave a comment below.

<p class="notice">
  Update: I've back-pedalled and gone back to web fonts, because they're beautiful.
</p>
