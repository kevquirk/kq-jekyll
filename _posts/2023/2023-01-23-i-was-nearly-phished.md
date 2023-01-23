---
title: I Was Nearly Phished
description: I nearly fell for a run of the mill phish recently. Just goes to show that they can get anyone.
date: 2023-01-23T15:41:00.000Z
typora-root-url: ../../
category:
  - Security
---

{: .tldr}
{{ page.description }}

Just to give you some context before we get into this, I'm a senior leader at Bank of America, where I work in the information security team.

The team I run is in the identity space and one of the things we're interested in is phishing attacks. So although [I'm no expert](https://kevquirk.com/the-expert-vs-the-impostor/), I do like to think of myself as a person who knows a thing or two about phishing attacks.

## The phish

The phish was a run of the mill *"enter your credit card details to pay for this pretend thing, so we can steal them"* kinda deal. Specifically, it was a Royal Mail themed attack, where the email said I needed to pay import tax on a package I was due to receive.

Problem is, I was expecting a package from Singapore (it was a new watch, [I collect watches](https://casioguy.com)) so knew an email would hit my inbox at some point asking for payment of import duties and tax. Here's what the email looked like:

![Royal Mail themed phishing email](/assets/images/royal-mail-phish-email.webp){: loading="lazy"}

## Serendipity

When I received the email, I was in a meeting for work, so wasn't really concentrating. My wife always tells me I'm a lousy multitasker; turns out she's right! 🙃

So I absentmindedly clicked on the "**Confirm**" button and headed to the "*Royal Mail*" website, which looked like this (click to enlarge in new tab):

[![Royal Mail themed phishing site](/assets/images/royal-mail-phish.webp){: loading="lazy"}](/assets/images/royal-mail-phish-fullsize.webp){: target="blank"}

## Things unravel

All in all, a fairly good phishing site on the surface. But then I noticed that the merchant was listed as Amazon, and I didn't order the watch from Amazon.

Then I realised that the amount the site was requesting was just €1.99. But I'm in the UK and we use £, not €. Also, the watch was £350, so I was expecting the bill the by *way* higher than €1.99 as it would consist of VAT (20% of the sale value) plus import duty.

At this point my interest was piqued, so I went into InfoSec mode. None of the links on the site worked; they all just went to `/#`. Then I noticed the URL, which was:

```
https://wordpress-915345-3177487.cloudwaysapps.com/cgi/?key=Tyyxyattsq872
```

I don't know about the national mail service in your country, but here in the UK, they have [their own domain name](https://www.royalmail.com). Another red flag.

I then went back to the email to give it another look. Had I read it properly in the first place, I would have never clicked on the "**Confirm**" button because it was also full of red flags, such as:

* Random sender domain
* It didn't name me as a person, or provide any verification
* Amazon doesn't use Royal Mail for delivery
* The obvious spelling and grammar mistakes

All in all, despite the phishing site being *okay*, the email was pretty damn poor.

## What happened next?

Well, [I've actually hosted this site with Cloudways in the past](https://kevquirk.com/hunt-for-better-wordpress-hosting-update/), so I know their processes. I got in touch with their abuse team and had the site taken down.

Then, rather than just deleting the email, I flagged it as spam with [my mail provider](https://kevquirk.com/reasons-why-zoho-mail-is-better-than-gmail/) - this is so their spam filter can learn what's spam and what isn't. You should do that too, if you see any obvious spam.

The sad thing is, I actually entered my credit card details into the site, I just didn't hit the `Confirm` button, which would have sent them to the threat actor(s).

I was still concerned, as some sites can record keystrokes using JavaScript (believe [Facebook](https://kevquirk.com/why-you-shouldnt-use-facebook/) actually does this). So I dumped a copy of the site to my hard drive so I could take a closer look.

I'm no malware analyst, but all the JS I could find looked like benign WordPress stuff, so I *think* I'm safe. Having said that, I can't be 100% sure, so I decided to err on the side of caution and cancelled that card regardless.

## Lesson learned...?

Well, this is a little frustrating, as there wasn't really a lesson for me to learn here. I'm abundantly aware of the risks that phishing attacks can pose - I deal with them all day, every day in my professional life. But I still got caught with my pants down. Ultimately it boiled down to good timing on the threat actor's part, but they still fooled me.

The lesson I've learned from all this? Try not to bloody multitask, because I'm pretty shitty at it.

Have you ever been successfully phished? If so, feel free to tell me your horror stories using the button below.