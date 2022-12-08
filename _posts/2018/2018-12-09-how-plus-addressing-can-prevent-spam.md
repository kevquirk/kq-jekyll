---
title: How Plus Addressing Can Prevent Spam
layout: post
permalink: /how-plus-addressing-can-prevent-spam/
categories:
  - Security
  - Web
---
I noticed recently that I appear to be getting a lot more spam to my mailbox than normal. I don’t usually share my email address if I can help it, so wasn’t sure what was happening. Some digging was required.

It quickly became apparent that most of the spam was being delivered to a legacy account that I keep around. According to [Have I Been Pwned](https://haveibeenpwned.com), the email was included in the recent [Apollo data breach](https://www.wired.com/story/apollo-breach-linkedin-salesforce-data). Damn.

<img loading="lazy" width="900" height="424" src="/assets/images/wp-images/2019/11/spam-email.jpg" alt="" class="wp-image-293" srcset="/assets/images/wp-images/2019/11/spam-email.jpg 900w, /assets/images/wp-images/2019/11/spam-email-300x141.jpg 300w, /assets/images/wp-images/2019/11/spam-email-768x362.jpg 768w" sizes="(max-width: 900px) 100vw, 900px" />  

I’ve talked about [why you should own your own domain](/why-you-should-own-your-own-domain) before, but in this instance having my own domain didn’t offer much advantage. Back then I was using the same email address everywhere, but now I use plus addressing to provide unique email addresses for services I sign up for. So if a site I’m signed for gets popped, I’m still relatively safe from spam.

## What is plus addressing? {#h-what-is-plus-addressing}

I’m sure many people reading this post are familiar with alias email addresses – where you have one email address that actually redirects to another. For example, a company could have sales@my-company.com, which routes to individual members of the sales team internally.

Plus addressing is a similar technology, except it allows you to use what are effectively alias email addresses without having to actually configure them.

For example, if my email address is kevquirk@fakemail.com and I’m signing up for a new Spotify account, I could enter kevquirk+spotify@fakemail.com and mail sent to that address will be delivered to my inbox.

Here are some links that show how you can use plus addressing with common email services:

  * **Fastmail:** <https://www.fastmail.com/help/receive/addressing.html>
  * **Gmail:** <https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html>
  * **Outlook:** <https://www.ghacks.net/2013/09/17/can-now-use-email-aliases-outlook-com>
  * **Zoho:** <https://help.zoho.com/portal/community/topic/can-i-use-the-plus-trick-to-create-email-aliases-on-the-fly>

Basically, these services are configured to ignore anything that comes after the “+” and deliver the mail to your inbox.

## So how can this prevent spam? {#h-so-how-can-this-prevent-spam}

We all know not to use [crap passwords](/why-your-password-is-probably-crap) and to make sure they’re unique to every account. Using plus addresses effectively does the same thing for your email address.

A plus address is obviously very simple to guess, and won’t add any extra security when it comes to authentication. But what it does do is give you a way of putting your online accounts into email silos.

So if Spotify were compromised and my `kevquirk+spotify@fakemail.com` address was added to a bunch of spam lists (like my old address has been), it would be trivial for me to identify where the breach has stemmed from. I can then setup a rule to auto-delete any mail sent to that address, then update my Spotify account to another plus address.

#### Ipso facto – you will get a lot less spam and have more control over your email. {#h-ipso-facto-you-will-get-a-lot-less-spam-and-have-more-control-over-your-email}

Plus addresses also allow you to easily add rules to your incoming mail so it’s automatically sorted on delivery. If you’re anything like me, you will get a lot of mail, so I use rules to sort my mail into different folders when it’s delivered. Using plus addresses makes this process very simple as I can filter on the “to” address.

Plus addresses are easy to use, yet very powerful. Unfortunately I didn’t have any plus addresses on my old email address, but since I don’t really use it anymore I’m going to route the mail to another mailbox. That way I can still use that email address if I need to.

**Are you using plus addresses, or do you have a better way of using unique email addresses? Feel free to tell me your thoughts in the comments below.**
