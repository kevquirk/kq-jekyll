---
title: 'Ban the Spam!'
date: '2022-08-31T17:10:38+01:00'
layout: post
permalink: /ban-the-spam/
description: I’ve had long-term problems with spam after publishing my email address on my contact page. So I’ve taken steps to Ban the Spam.
categories:
    - Meta
---
{: .tldr}
I’ve had long-term problems with spam after publishing my email address on my [contact page](/contact/). So I’ve taken steps to *Ban the Spam*.

I’ve had the same email address on display in my contact page for a few years now, and because it’s been listed publicly for so long, I get a metric tonne of spam to that address.

Luckily the spam filter on my mail host catches a lot of it, but it’s still annoying for me to deal with. So I started to think about what I can do to have both an email address published on my site, yet minimise spam.

Here’s what I came up with…

## Change the email

Groundbreaking solution, hey? I know, I know. I’ve outdone myself here.

I’m sure you’ve heard of DuckDuckGo’s [Email Protection](https://duckduckgo.com/email/) service, or Apple’s [Hide My Email](https://support.apple.com/en-us/HT210425), right? Well, I kinda rolled my own.

What I did was register yet another domain ([I like to do that](/my-name-is-kev-quirk-and-im-an-addict/)), and setup a simple redirect to my actual mailbox. Sure, I could have used one of my existing domains, but wheres the fun in that?

The email is totally random and currently set to `23g@qrk.one`. When I start to see a marked increase in spam to that address (which will probably be in a few days knowing the Internet), I’ll simply change it to another random address and delete the old one.

> But Kev, what if people try to email you on the old address??

I know, dear reader. I’ve already thought of that. You see, if you email me using that random address, and I reply, I’ll do so from my actual email address, which won’t change.

That way, folks who I want to converse with will have my legit email address and can still contact me. But the spam bots won’t. Win/win.

## The old email

So what about `hi@kevq.uk`, the old email address? Lots of people have that and use it to email me. That’s a problem.

I setup an auto responder on that address; so if someone tries to email me at that address, they will receive this message:

```
Hi,

Thanks for your email, but this address (hi@kevq.uk) is no longer in use or monitored. Instead, please use the email address listed on my contact page to send me an email.

https://kevquirk.com/contact

Apologies for any headaches, but you know, I gotta stop the spam. :-)

Thanks,

Kev
```

This way people can still get in touch with me and I won’t lose any emails…hopefully.

I also had to update the address that I use on my [reply by email button](/adding-the-post-title-to-my-reply-by-email-button/). That isn’t ideal, as I’d prefer to set the email address in a single place and have it replicated to both my contact page and my button.

I’ll have to think about how best to do that – I’m sure there will be a way for me to that within `functions.php` or something. If you’re a WordPress ninja and have any ideas, I’m all ears.

In the meantime, I’ll just keep changing the email address in those 2 places every few months or so. In the grand scheme of things it’s a small price to pay to ban the spam!