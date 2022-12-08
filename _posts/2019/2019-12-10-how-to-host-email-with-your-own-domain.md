---
title: How To Host Email With Your Own Domain
layout: post
permalink: /how-to-host-email-with-your-own-domain/
description: If you want to host email with your own domain, using Zoho's email service, this post will show you how to set everything up.
categories:
  - Technology
  - Web
---

A while ago I wrote a post on [why you should own your own domain](https://kevq.uk/why-you-should-own-your-own-domain/). In that post I explained that hosting email with your own domain allows you to keep control of your email. In this post I&#8217;m going to show you how to setup email with your own domain using the same company I use to host my email, <a rel="noreferrer noopener" aria-label="Zoho (opens in a new tab)" href="https://payments.zoho.eu/referral.do?ref=0868fcfae63fb0627f8b305437554f1162624507593b9c189f386f58e5abcfbb" target="_blank">Zoho</a>.

## Why Zoho? {#h-why-zoho}

There are many email providers out there, you can even self-host if you&#8217;re that way inclined. So why am I recommending Zoho over all the other providers out there?

Firstly, Zoho&#8217;s service is extremely good. I&#8217;ve been using them on and off for around 4 years now and their service has always been problem free. Secondly, their premium mail service is very cheap, at around $1 (80p) per month for 5GB or mail storage. Finally, [their privacy policy](https://www.zoho.com/privacy.html) is pretty clear:

<blockquote class="wp-block-quote">
  <p>
    Zoho has never sold your information to someone else for advertising, or made money by showing you other people&#8217;s ads, and we never will.
  </p>

  <cite>Zoho Privacy Policy</cite>
</blockquote>

## Email with your own domain {#h-email-with-your-own-domain}

The first thing you&#8217;re going to need is a domain for the email to go with. If you already have a domain name, feel free to skip this part. However, if you don&#8217;t, I would recommend [Namecheap](https://www.namecheap.com/domains/) as they&#8217;re cheap and offer free privacy protection on all their domains.

Once you have your domain registered, it&#8217;s time to flip over to Zoho to register for an account. In this example I&#8217;m going to use a spare domain I have, `gistt.uk`.

The first step is to make sure you setup catch-all email forwarding to your current email address within the Namecheap dashboard. This will allow you to receive email to your new domain while we setup your new domain with Zoho.

<div class="wp-block-image">
  <img loading="lazy" width="1024" height="145" src="/assets/images/wp-images/2019/12/namecheap-catch-all-1024x145.png" alt="" class="wp-image-489" srcset="/assets/images/wp-images/2019/12/namecheap-catch-all-1024x145.png 1024w, /assets/images/wp-images/2019/12/namecheap-catch-all-300x42.png 300w, /assets/images/wp-images/2019/12/namecheap-catch-all-768x109.png 768w, /assets/images/wp-images/2019/12/namecheap-catch-all.png 1118w" sizes="(max-width: 1024px) 100vw, 1024px" />
</div>

Now we&#8217;re ready to head to Zoho to sign up for an account; you can use the button below. Once you&#8217;re on the Zoho sign up page, fill in your custom email etc.

<a target="blank" class="button" href="https://payments.zoho.eu/referral.do?ref=0868fcfae63fb0627f8b305437554f1162624507593b9c189f386f58e5abcfbb" rel="noopener noreferrer"><i class="las la-envelope-open-text la-lg"></i> Zoho Sign Up</a>

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-1024x605.png" alt="" class="wp-image-491" srcset="/assets/images/wp-images/2019/12/zoho-signup-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Once you hit the sign up button, click on the `Mail` link to get started setting your mailbox up.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-2-1024x605.png" alt="" class="wp-image-493" srcset="/assets/images/wp-images/2019/12/zoho-signup-2-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-2-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-2-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-2.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Zoho will now ask you for a mobile phone number. This is for security purposes apparently. I&#8217;m not clear why the mobile phone number is required, but I&#8217;ve never received a call or text from Zoho other than for verification purposes. This can be used later for [2 factor authentication](https://kevq.uk/what-is-two-factor-authentication/) via SMS, but I wouldn&#8217;t recommend this. Instead, I&#8217;d recommend a 2FA app, like Authy or Google Authenticator.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-3-1024x605.png" alt="" class="wp-image-494" srcset="/assets/images/wp-images/2019/12/zoho-signup-3-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-3-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-3-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-3.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## Configure Your Emails {#h-configure-your-emails}

That&#8217;s us all signed up for Zoho mail, so now we can get on with configuring our email and domain so we can start receiving email. Once you have clicked `Continue` after verifying your phone number, select the option that says _&#8220;Add your existing domain&#8230;&#8221;_ as well as the CAPTCHA text.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-4-1024x605.png" alt="" class="wp-image-495" srcset="/assets/images/wp-images/2019/12/zoho-signup-4-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-4-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-4-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-4.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Once you have clicked `Proceed`, add your domain and click `Add`.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-5-1024x605.png" alt="" class="wp-image-496" srcset="/assets/images/wp-images/2019/12/zoho-signup-5-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-5-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-5-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-5.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

It&#8217;s now time to prove that you own the domain you&#8217;re trying to sign up with. From the drop-down menu where it says `Choose`, select `Others..` as your domain hosting provider.

Make sure `TXT Method` is selected in the popup and head over to Namecheap.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-6-1024x605.png" alt="" class="wp-image-498" srcset="/assets/images/wp-images/2019/12/zoho-signup-6-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-6-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-6-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-6.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Once you&#8217;re in the Namecheap dashboard, click on your domain then select the `Advanced DNS` menu. Once in Advanced DNS, select the `Add New Record` button.

<img loading="lazy" width="1024" height="557" src="/assets/images/wp-images/2019/12/zoho-signup-7-1024x557.png" alt="" class="wp-image-500" srcset="/assets/images/wp-images/2019/12/zoho-signup-7-1024x557.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-7-300x163.png 300w, /assets/images/wp-images/2019/12/zoho-signup-7-768x418.png 768w, /assets/images/wp-images/2019/12/zoho-signup-7.png 1119w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Now change the record type to `TXT` and copy/paste the details from the Zoho verification window. Once filled in, click the green tick to verify the new TXT record.

<img loading="lazy" width="1024" height="64" src="/assets/images/wp-images/2019/12/zoho-signup-8-1024x64.png" alt="" class="wp-image-501" srcset="/assets/images/wp-images/2019/12/zoho-signup-8-1024x64.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-8-300x19.png 300w, /assets/images/wp-images/2019/12/zoho-signup-8-768x48.png 768w, /assets/images/wp-images/2019/12/zoho-signup-8.png 1109w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Back in the Zoho verification window, click on the green `Verify by TXT` button. Zoho will now attempt to verify your new TXT record. **_Don&#8217;t worry if this fails_**, DNS records take some time to propagate around the Internet. Eventually the verification will work, just keep trying.

Once your domain is verified, Zoho will ask you to setup your first account. For this example, we will use `kev@gistt.uk`.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-9-1024x605.png" alt="" class="wp-image-502" srcset="/assets/images/wp-images/2019/12/zoho-signup-9-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-9-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-9-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-9.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## Add Users & Groups {#h-add-users-groups}

If you have other users or groups to setup, you can do this now. This isn&#8217;t necessary though, as you can add additional accounts later. So we&#8217;re going to skip `Add users` and `Create groups`.

## Configure Email Delivery {#h-configure-email-delivery}

Next we need to configure email delivery so that new mail is delivered to Zoho when someone sends us an email. This is done with `MX records` within the Namecheap Advanced DNS dashboard.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-10-1024x605.png" alt="" class="wp-image-503" srcset="/assets/images/wp-images/2019/12/zoho-signup-10-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-10-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-10-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-10.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

This time, head to the `Mail Settings` section within Namecheap&#8217;s Advanced DNS editor and change the drop-down value to `Custom MX`. Then simply create new MX records that mirror those shown in the Zoho setup wizard.

<img loading="lazy" width="1024" height="386" src="/assets/images/wp-images/2019/12/zoho-signup-11-1024x386.png" alt="" class="wp-image-504" srcset="/assets/images/wp-images/2019/12/zoho-signup-11-1024x386.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-11-300x113.png 300w, /assets/images/wp-images/2019/12/zoho-signup-11-768x289.png 768w, /assets/images/wp-images/2019/12/zoho-signup-11.png 1117w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## SPF / DKIM {#h-spf-dkim}

Next we need to configure the SPF and DKIM records. These records will ensure that when you send emails from Zoho, your emails will hit the recipient&#8217;s inbox rather than their spam folder.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-12-1024x605.png" alt="" class="wp-image-505" srcset="/assets/images/wp-images/2019/12/zoho-signup-12-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-12-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-12-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-12.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

The `SPF Record` is just another `TXT Record`. So head back to your Namecheap Advanced DNS window and add a new TXT record, again copying the details within the Zoho setup wizard.

<img loading="lazy" width="1024" height="58" src="/assets/images/wp-images/2019/12/zoho-signup-13-1024x58.png" alt="" class="wp-image-506" srcset="/assets/images/wp-images/2019/12/zoho-signup-13-1024x58.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-13-300x17.png 300w, /assets/images/wp-images/2019/12/zoho-signup-13-768x44.png 768w, /assets/images/wp-images/2019/12/zoho-signup-13.png 1109w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Once the SPF record is configured within Namecheap, head back to Zoho and click on the `Proceed to Configure DKIM` button. Then, next to the domain you&#8217;re setting up, click on the pencil icon under `Action` to edit your domain&#8217;s DKIM.

Once in the edit window, click on the `+ Add Selector` link and set the selector name to `zoho` and click `Save`.

<img loading="lazy" width="1024" height="605" src="/assets/images/wp-images/2019/12/zoho-signup-14-1024x605.png" alt="" class="wp-image-508" srcset="/assets/images/wp-images/2019/12/zoho-signup-14-1024x605.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-14-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-signup-14-768x454.png 768w, /assets/images/wp-images/2019/12/zoho-signup-14.png 1331w" sizes="(max-width: 1024px) 100vw, 1024px" />  

You will then see the newly generated DKIM record. Once again, this is configured as a `TXT Record` within Namecheap. So let&#8217;s head back there to set it up:

<img loading="lazy" width="1024" height="61" src="/assets/images/wp-images/2019/12/zoho-signup-15-1024x61.png" alt="" class="wp-image-509" srcset="/assets/images/wp-images/2019/12/zoho-signup-15-1024x61.png 1024w, /assets/images/wp-images/2019/12/zoho-signup-15-300x18.png 300w, /assets/images/wp-images/2019/12/zoho-signup-15-768x46.png 768w, /assets/images/wp-images/2019/12/zoho-signup-15.png 1107w" sizes="(max-width: 1024px) 100vw, 1024px" />  

Make sure the host field for the DKIM TXT record is set to `zoho._domainkey` then copy/paste the entire TXT value in. Once that&#8217;s done, click on the `Verify` button.

Once verification is done, click on the `Back to setup` button so we can finish off the Zoho setup process.

## Final Steps {#h-final-steps}

At this point, your new email should all be setup and working. If you have email you wish to migrate over to Zoho, you can do so by <a href="https://www.zoho.com/mail/help/pop-imap-migration.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">following these instructions</a>. If you don&#8217;t have email to migrate, you can skip this step.

The final step is to configure mobile access and Zoho will show you some of their mobile apps. Personally, I use the Zoho Mail app on my iPhone as it syncs my mail, contacts and calendars easily. If you prefer to use native apps, Zoho supports POP/IMAP, Exchange ActiveSync and Cal/CardDAV protocols for syncing. You can get more info on mobile sync using <a href="https://www.zoho.com/mail/help/access-from-mobile.html" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">this help article</a>.

Once you have finished going through the Zoho setup wizard, click on the `Go to Zoho Workplace` button, then click on the `Mail` button to be taken to your new Zoho Mailbox.

<img loading="lazy" width="1024" height="530" src="/assets/images/wp-images/2019/12/zoho-inbox-1024x530.png" alt="" class="wp-image-510" srcset="/assets/images/wp-images/2019/12/zoho-inbox-1024x530.png 1024w, /assets/images/wp-images/2019/12/zoho-inbox-300x155.png 300w, /assets/images/wp-images/2019/12/zoho-inbox-768x397.png 768w, /assets/images/wp-images/2019/12/zoho-inbox.png 1520w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## That&#8217;s it! {#h-that-s-it}

You now have your new mailbox setup with Zoho and you will be able to send/receive mail on your very own domain.

By default, you will be on the Zoho Mail Free plan, which gives you 5GB of storage and up to 5 users for free forever, however there&#8217;s no mobile sync on the free plan and you can only use one domain. To upgrade to a paid subscription, click on your avatar from within your mailbox and click on the red `Upgrade` button.

As well as mail, contacts and calendars, Zoho Workspace also gives you access to a number of other services, such as Zoho Docs, where you can store/edit documents online.

## Conclusion {#h-conclusion}

From the Zoho control panel you can then add additional users, groups and domains if you so wish. You can also manage things like 2 factor authentication and email aliases. You can even whitelabel the UI with your own logo if you wish.

Just go exploring and see what Zoho has to offer &#8211; the options are very verbose.

<img loading="lazy" width="1024" height="604" src="/assets/images/wp-images/2019/12/zoho-control-panel-1024x604.png" alt="" class="wp-image-513" srcset="/assets/images/wp-images/2019/12/zoho-control-panel-1024x604.png 1024w, /assets/images/wp-images/2019/12/zoho-control-panel-300x177.png 300w, /assets/images/wp-images/2019/12/zoho-control-panel-768x453.png 768w, /assets/images/wp-images/2019/12/zoho-control-panel.png 1332w" sizes="(max-width: 1024px) 100vw, 1024px" />  

I personally think that Zoho Mail is a superb service that works well, respects your privacy and is competitively priced. Hopefully you will now be able to send and receive email with your domain.
