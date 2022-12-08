---
title: Moving To A Static Website
layout: post
permalink: /moving-to-a-static-website/
categories:
  - Technology
---
I have had a personal website for quite a few years now and for most of that time I have used a CMS (Content Management System). I’ve now decided to move over to a static website, but what is a static website and why the change?

I’ve always used either [WordPress](https://wordpress.org) or [Ghost](https://ghost.org) as my CMS of choice. However, I think that both of these have issues – on the one hand, WordPress is really extensible and widely used, but it’s dog slow by default. Plus it’s **really** insecure if it’s not properly maintained.

Then there’s Ghost – it’s super fast to load and it uses modern libraries like [Markdown](https://en.wikipedia.org/wiki/Markdown), but it’s based on Node.JS. So if you want to use the Ghost CMS, you need a dedicated server and they can be fairly expensive – ain’t no shared hosting where Ghost is concerned.

And there lies my conundrum – I can either have a slow and potentially insecure site, or I can cough up the cash for a beefier server. Is there a happy medium here?

## Happy Medium? {#h-happy-medium}

Luckily, there is a happy medium. There are lots of tools out there that will allow you to generate static content, but I wanted to go with something I already knew. So I went with WordPress.

<blockquote class="wp-block-quote">
  <p>
    WordPress…Wait, what?!
  </p>
</blockquote>

#### That’s right, WordPress! {#h-that-s-right-wordpress}

There is a plugin for WordPress called [Simply Static](https://en-gb.wordpress.org/plugins/simply-static) which allows me to generate a static version of my WordPress site.

The output can be in the form of a compressed archive that you then upload to your web server, or if your WordPress and static websites are on the same server, it can be configured to automatically “publish” your static website for you. That’s what I do.

{: .full-bleed}
![Simply Static settings](/assets/images/simply-static-settings.webp){: loading="lazy"}

## Static Website {#h-static-website}

I wanted a way of getting the speed of Ghost, but the usability and functionality of WordPress. Generating a static website off of a WordPress site gives me the best of both worlds. Let me explain…

WordPress and Ghost are classed as dynamic sites. So when someone visits your site, your server needs to interrogate a load of different files (and a database in WordPress’ case), then stitch all that together before it displays the page. Lat’s call this rendering the page.

A static website consists mostly of HTML and CSS, so when your site is loaded your browser doesn’t need to render the page on the fly – it’s just there, ready and waiting to be loaded. That’s why static websites are super quick.

The Simply Static plugin does the rendering for us and spits out the result at the other end, so I can use this as a static version of my dynamic WordPress site.

## Advantages {#h-advantages}

I now have a WordPress site that uses [.htaccess](https://en.wikipedia.org/wiki/.htaccess) to deny all traffic apart from a couple of IP addresses that I use. So Joe Public cannot access the WordPress version of my site. I write a post and publish it on WordPress, then I generate and publish the static version of my site to https://kevq.uk.

Using this setup gives me two major advantages over bog standard WordPress; _speed and security._

### Speed {#h-speed}

As I mentioned earlier, static websites do not need to be rendered by the user’s browser every time the page loads, so they are way quicker. Just to give you an idea, my WordPress and static websites are exactly the same.

A website speed test shows that **WordPress takes six times longer to load than my static website!**

{: .full-bleed}
![Stock WordPress speed test](/assets/images/wp-speed-test.webp){: loading="lazy"}

{: .full-bleed}
![Static WordPress speed test](/assets/images/static-speed-test.webp){: loading="lazy"}

### Security {#h-security}

WordPress is popular, and with popularity comes vulnerabilities (just ask Microsoft). It is common for WordPress to be a target for cyber attacks, but my WordPress site is pretty much closed off to the Internet and the static website is, well…static. So there is no way of logging in to it – there’s nothing to exploit. Therefore it’s way more secure than a WordPress site.

I don’t even bother generating the `/wp-admin` folder as part of the static website’s content, as it isn’t required.

## Conclusion {#h-conclusion}

I obviously can’t use my Ghost theme on WordPress and I really liked my Ghost theme, so I decided to re-design an existing WordPress theme so that the site continues to look almost exactly the same as my old WordPress site.

I think I have managed to make the new site look pretty close to what the Ghost site looked like, but that’s a post for another day.

{: .full-bleed}
![My Ghost site](/assets/images/my-ghost-site.webp){: loading="lazy"}

Overall I feel this process has been a success. It’s been a lot of work, but I have ended up with a fast loading, and more secure website. You can’t really do much better than that.

**Are you using a different tool to generate a static website? If so, please do tell me about it in the comments below.**
