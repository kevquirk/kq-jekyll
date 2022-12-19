---
title: 'Segregating Email With Sub-Domains'
date: '2022-06-12T14:22:56+01:00'
layout: post
permalink: /segregating-email-with-sub-domains/
description: I like to segregate my email by using unique addresses for many services. This makes things more secure, but it isn’t perfect…
categories:
    - Technology
---
{: .tldr}
I like to segregate my email by using unique addresses for many services. This makes things more secure, but it isn’t perfect…

My pal, Luke Harris, recently wrote about how [he’s decided not to use plus addressing any more](https://www.lkhrs.com/blog/2022/04/plus-addressing/) and I get why. [Plus address can be useful for stopping spam](/how-plus-addressing-can-prevent-spam/), but it’s easy to lose track of which address you have used where.

Luke talks about a recent example in his post where he thought his Twitter account used the `+twitter` plus address, but was actually using `+social`.

It’s easy to do – I’ve done it myself, *many* times.

## My email setup

I personally don’t use plus addresses. They’re useful, but I’ve found that a growing number of sites don’t accept plus addresses.

Instead, I use a sub-domain with a catch-all address configured. So let’s say my email domain is `quirk.xyz` and my main email address is `kev@quirk.xyz`. What I do is setup a subdomain that uses my email prefix.

This means that `kev@quirk.xyz` becomes the sub-domain `kev.quirk.xyz`. I do this for the rest of my family too, so my wife gets `jen.quirk.xyz` and my sons will get similar addresses when they’re older.

I then set a catch-all up for that sub-domain that delivers `[anything]@kev.quirk.xyz` to `kev@quirk.xyz`. If I sign up for Spotify, for example, the email I would use is `spotify@kev.quirk.xyz`.

This way, all my emails are segregated by service. So if Spotify are ever compromised and I start getting a load of spam to that address, I can easily change it without affecting other services.

## The problem with this setup

Like Luke, the issue here is that’s it’s difficult for me to track which address I’ve used where.

There have been *many* occasions where I’ve been asked what my email address is on the phone, and my answer is usually *“I dunno, but it should end in @kev.quirk.xyz*…” which is usually enough to validate the email when on the phone.

To go back to Luke’s example with Twitter though, I’d be as equally screwed as he was. I do try to record any associated email addresses with an account in my [Bitwarden](/bitwarden-an-open-source-alternative-to-lastpass/) notes section. That doesn’t always happen though.

## Final thoughts

This setup isn’t perfect, but it works for me. If there’s anything that’s really critical, like Internet banking, or my mortgage, I’ll always make sure I either use my proper email address, or that the unique address is recorded.

I’ve considered using services like [DuckDuckGo’s Email Protection](https://www.spreadprivacy.com/introducing-email-protection-beta/) or Apple’s [Hide My Email](https://support.apple.com/en-us/HT210425); both services easily track which emails align to which service, but I *really* don’t like the lack of control I’d have by using someone else’s domain for my mail.

Given the protection this setup offers, I think it’s worth the relatively small headache. **What do you use to protect your mailbox?**