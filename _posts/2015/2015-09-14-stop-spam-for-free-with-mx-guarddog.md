---
title: 'Stop Spam for Free with MX GuardDog'
date: '2015-09-14T12:10:00+01:00'
layout: post
permalink: /stop-spam-for-free-with-mx-guarddog/
categories:
    - Technology
    - Web
---

In my last few articles, I’ve been talking about [setting up your own Zimbra mail server](/how-to-setup-a-zimbra-server/), as well as making some changes to [stop outgoing mail being delivered as spam](/how-to-stop-outgoing-mail-on-zimbra-from-being-delivered-as-spam/). However, we haven’t spoken about incoming spam. So in this article, we’ll be looking at stopping incoming spam.

The tool we’re going to be looking at – [MX GuardDog](https://web.archive.org/web/20160304163418/http://www.mxguarddog.com/) – is a great way for you to stop spam for free, even if you’re not running a Zimbra mail server. So, let’s take a look…

## What is MX GuardDog?

MX GuardDog is basically a free anti-spam email service that sits between the Internet and your mail server, and it checks all incoming mail before it is delivered to your inbox. This way, MX GuardDog can make a decision on all mail as to whether it’s safe to forward to your inbox, or not. Here’s the spiel from their website…

> MX Guarddog is a SaaS (Software as a Service) anti-spam and anti-virus solution for email. We protect a domain from incoming email-borne threats such as spam, phishing attacks and viruses.
> 
> The service is activated by an email administrator or postmaster for a domain. MX Guarddog is intended for people who own or manage their own domain. If you are trying to protect a gmail, hotmail or other free email service you are not able to take advantage of MX Guarddog’s email security solution.

## How Is It Free?

The whole premise of MX GuardDog is to stop spam for free. It does this via the use of “tokens”. Basically, 1 token is used to “pay” for the service, for a single mailbox, for a month. So if you have 10 mailboxes on your server (alias’s don’t count, they’re free – this is actual, physical mailboxes), you would need 10 tokens/month.

You can earn tokens quickly and easily by adding a generated link to a website, it’s simply a link back to MX GuardDog that usually says something like *“Stop Spam”* so it isn’t intrusive. Depending on how popular your website, you can earn more tokens. Obviously you can only add links to websites that you own &amp; control.

## I Don’t Have A Website

That’s fine! MX GuardDog has you covered. Although, the service will no longer be free, it’s still *very* cheap. You can manually buy tokens for $0.25 per token per month. So to protect 20 mailboxes, it will cost you just $5.00/month. Pretty good considering the quality of this service. Speaking of which…

## Usage &amp; Accuracy

Setting up MX GuardDog really is a very simple process, all you need to do is change the MX records for your domain to a set of generated MX GuardDog MX servers. Then, you make sure that the forwarding email server is the correct address, and you’re ready to go! Within 15 minutes, I had MX GuardDog set up and working on my primary email domain. It’s very simple, even for a novice.

I’ve been using MX GuardDog for around a month now and honestly, I’m yet to see a single piece of spam come into my mailbox. There have been a couple of false positives, which are very easy to whitelist. We’ll come on to that next…

## Quarantine Reports

Every day, you will receive a *Quarantine Report* to every mailbox that MX GuardDog protects. This report contains a list of the spam emails that MX GuardDog has detected in the last 24 hours (you can also log in a view these at any point). You can then inspect them, and if there are any false positives, you can deal with them accordingly.

The spam email addresses are hyperlinked, and the links are completely unique and private to your mailbox. Click on the link, and you will be able to deal with that particular spam message without even having to log in to MX GuardDog. This is really useful for non-admins on your server, as they wouldn’t have access to your MX GuardDog account.

Once you have clicked on the link, there are options to release the email (so it’s delivered to your inbox), or you can release &amp; whitelist the email. This means that the email will be delivered to your inbox, and MX GuardDog will whitelist the address so it never quarantine mail from that sender again – it’s awesome for managing those annoying mailing lists that we all tend to end up on…some how!

MX GuardDog also has the ability to blacklist addresses, so you can block specific addresses if the service fails to pick something up. Although, I’m yet to receive any spam. The service also allows you to upload you contacts list to your whitelist, so mail from your contacts automatically bypasses MX GuardDog. However, I personally don’t do this, just in case a contacts mailbox gets compromised.

## Conclusion

Overall, [MX GuardDog](https://web.archive.org/web/20160304163418/https://www.mxguarddog.com/) is an awesome service that allows users to stop spam for free. They’ve been around since 2006, so they’re an established company, and they’re not going anywhere. Personally, I would strongly recommend this service to anyone with spam issues.\* I honestly couldn’t recommend MX GuardDog highly enough.

Do you use a similar spam service? If so, please feel free to leave your recommendations in the comments below. As usual, any questions, just ask.

*\* MX GuardDog is designed for users who host their own emails. This service is NOT compatible with free mail services, such as Gmail, Outlook.com, or Yahoo! Mail.*