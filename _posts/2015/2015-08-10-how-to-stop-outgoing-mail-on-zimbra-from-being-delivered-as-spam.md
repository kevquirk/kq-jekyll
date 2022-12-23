---
title: 'How To Stop Outgoing Mail On Zimbra From Being Delivered As Spam'
date: '2015-08-10T12:03:00+01:00'
layout: post
permalink: /how-to-stop-outgoing-mail-on-zimbra-from-being-delivered-as-spam/
categories:
    - Technology
    - Web
---

Moving on from my previous article on [how to setup Zimbra](https://web.archive.org/web/20160617010443/http://kevquirk.com/blog/how-to-setup-a-zimbra-server/), this article will show you how to stop outgoing mail on Zimbra from being delivered as spam. After all, what’s the point in hosting your own email server if all of your outgoing mail is detected as spam on other mail servers?

Back in the good old days of the Internet, it was very simple to fool spam filters. But nowadays they’re very clever, and you need to be on the ball if you want your mail to go into a recipients inbox, rather than the spam folder. So let’s take a look at what you need to do to stop this happening.

## SPF Record

Server Policy Framework records, or SPF records as they’re more widely known, are DNS records which tell the Internet which mail servers are allowed to send from your domain name. If you don’t have an SPF record linking your domain and your Zimbra mail server together, then you’re not going to have much luck getting around spam filters.

An SPF record can be added to your DNS records by way of a simple TXT entry.

If you have multiple domains with their MX record pointing to your Zimbra server, make sure you add an SPF record for every single domain name. The pattern for the TXT entry is as follows:

`v=spf1 mx a ip4:server.ip.add.ress/32 ?all`

## Reverse DNS

Having an A record on your DNS means that your domain name points to an IP address. However, it’s also very important to set up reverse DNS so that the IP address of your mail server points to your domain name as well. Again, this is just another way to verify that the mail your sending is from a legitimate source.

If you decided to get a VPS from [OpenVZ](https://web.archive.org/web/20160617010443/https://openvz.io/), as I mentioned in my [how to setup Zimbra](/how-to-setup-a-zimbra-server/) article, this is extremely simple to do:

1. Log in to OpenVZ control panel.
2. Click on **View Details** for the server you want to change.
3. Click on the green **Manage VM** button.
4. At the bottom of the screen, click on the **Network** tab and enter the domain into the **Reverse DNS** field.
5. Job done!

If you host your VPS at home, or with another provider, then you will need to work this out for yourself, or speak to the tech support guys from your host. The reverse DNS needs to point to the FQDN for your mail server, **NOT** the domain you send email from. For example, if you send mail from zimbra-mail.com, but your server address is actually server.zimbra-mail.com, then you need to set your reverse DNS to server.zimbra-mail.com as this is the address that will be listed in the outgoing email headers.

## DKIM

Domain Keys Identified Mail, or DKIM is an extremely useful tool that allows recipient email servers to check a key against your email to ensure it’s legitimate. Think of it kind of like SSH keys for email. You generate DKIM keys, and store them on your server, you then create some DNS entries to validate these keys. A recipient email server will then validate both the keys to ensure they’re valid. It’s an extremely effective way of cutting down on outgoing “spam”.

From version 8.0, Zimbra now supports DKIM natively. You can find more information [here](https://web.archive.org/web/20160617010443/https://wiki.zimbra.com/wiki/Configuring_for_DKIM_Signing). However, I’ll quickly take you through the process of generating the keys on your Zimbra server, and setting them up. First of all, log on to your server via SSH, and change the user to Zimbra:

`su zimbra`

Next, use the built in DKIM generator to generate keys for your domain. In the example below, I’m using “zimbra-mail.com” as my domain name.

`/opt/zimbra/libexec/zmdkimkeyutil -a -d zimbra-mail.com`

You will then get output that looks something like this:

```
<pre class="wp-block-code">```
`DKIM Data added to LDAP for domain zimbra-mail.com with selector F5722DDA-3696-11A4-2271-JB20JBSL42CRSLPublic signature to enter into DNS:F5722DDA-3696-11A4-2271-JB20JBSL42CRSL._domainkey IN TXT ( “v=DKIM1; k=rsa; ““p=EF85XHZV6M1COQVKBKX3XZ8MO1EOZ00ZGNADCBiQKBgQDqKFvvybOh40AwvqwsV+Opr+64DYK1+9e3MtZYzkW/cyMhf4S/EY61C86LJ55E5AR5GWXNfh0rtgDD1mVqojPx+RRmJyhfCHO6KVN1L877ATM4EEBTFo8fsUBFhiqLbRwuPcxW4YrDGp2OtdjF5JLkWUgdezY9xnPzihLGCMbxS18bO2OIDAQAB” ) ; —– DKIM key F5722DDA-3696-11A4-2271-JB20JBSL42CRSL for zimbra-mail.com`
```
```

You now have your DKIM key generated on the server, you now just need to tell your DNS to point to and validate that key. This is done with a TXT record (just like the SPF record).

The host/sub-domain field should point to the selector that was generated, which will be something like ***random-444-generated-key-999.\_domainkey***. The the TXT entry it should point to is the generated key, in this case, the following:

```
v=DKIM1; k=rsa; p=EF85XHZV6M1COQVKBKX3XZ8MO1EOZ00ZGNADCBiQKBgQDqKFvvybOh40AwvqwsV+Opr+64DYK1+9e3MtZYzkW/
cyMhf4S/EY61C86LJ55E5AR5GWXNfh0rtgDD1mVqojPx+RRmJyhfCHO6KVN1L877ATM4EEBTFo8fsUBFhiqLbRw
uPcxW4YrDGp2OtdjF5JLkWUgdezY9xnPzihLGCMbxS18bO2OIDAQAB
```

**NOTE: You will need to remove any extra spaces and quotation marks. It should be formatted as: *v=DKIM; k=rsa; p=&lt;generated\_key&gt;.* Also, you will need to do this for EVERY domain configured on your Zimbra server.**

## Testing Your Spam Score

You can test your email servers validity by using [this tool](https://web.archive.org/web/20160617010443/http://dkimvalidator.com/). Simply send an email to the generated email address (from your email server), and click on the “view report” button. This will show you if your server has passed all the validity tests.

It will also give you a Spam Assassin score at the very end. Any less than 4 is excellent. After implementing these changes on my server, my current Spam Assassin score is 0.097, so it really is an excellent score that shouldn’t be picked up my any mail servers.

## Conclusion

Having your own Zimbra server is great. But knowing how to stop outgoing mail on Zimbra from being delivered as spam is extremely important. Otherwise, you might as well go back to Gmail. I hope you guys have found this guide useful. In the next article, I will be showing you how to reduce incoming spam.