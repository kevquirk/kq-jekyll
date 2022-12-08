---
title: Bitwarden – An Open Source Alternative to LastPass
layout: post
permalink: /bitwarden-an-open-source-alternative-to-lastpass/
categories:
  - Security
  - Technology
image: /assets/images/default-feature.webp
description: LastPass has gone through some changes recently and to be frank, Bitwarden is a better alternative.
---
We all know that [password managers are worth their weight in gold](/are-password-managers-worth-it), and the most popular of these by a large margin, is [LastPass](https://lastpass.com). LastPass is great, I used it myself for a number of years, but it is fairly expensive [since doubling their prices in 2017](https://www.theverge.com/2017/8/3/16089444/password-manager-lastpass-pricing-doubles). So are there any decent, open source alternatives to LastPass?

In short, yes. Enter [Bitwarden](https://bitwarden.com) (my current password manager). It is very similar to LastPass in functionality, but it’s completely open source. You can even host it yourself if you’re so inclined.

![Bitwarden is Open Source](/assets/images/bitwarden-open-source.webp)

## Pricing {#h-pricing}

Both LastPass and Bitwarden offer a free account that does not include any time restrictions for usage. However, the free account for Bitwarden has one big advantage over LastPass’ free offering – **mobile sync**.

The free tier for LastPass does not allow users to make use of the platform’s various mobile apps. Bitwarden on the other hand don’t limit their users in such a way. All of the core functionality of Bitwarden is also offered on their free tier.

## Premium Pricing {#h-premium-pricing}

If you decide you want to use LastPass’ mobile apps, and upgrade to their premium tier, it will set you back $2/month ($24 billed annually). However, Bitwarden’s premium offering will cost just $10/year.

If you decide to hand over 10 of your hard earned dollars to Bitwarden, you will receive 1GB of encrypted file storage, additional Two Factor Authentication (2FA) methods and use of their embedded TOTP generator. So if you use 2FA with any of your accounts, you can configure the tokens within Bitwarden, so that your codes can be pasted automatically, along with your username and password. You will also get priority support, as you would with LastPass Premium.

![Bitwarden Personal Plans](/assets/images/Bitwarden-Personal.webp)

## Family Account {#h-family-account}

Both LastPass and Bitwarden offer family accounts, where multiple accounts can be combined together under one umbrella account. These have a number of advantages; including cheaper overall costs, and the ability to easily share logins if you’re that way inclined.

LastPass offers 6 licenses at a cost of $4/month ($48 billed annually), whereas Bitwarden’s offering is just $1/month ($12 billed annually) for 5 licenses. The two packages are pretty much identical when it comes to features, so the fact that Bitwarden is 75% cheaper than the LastPass equivalent really is great value for money.

If you want to read more bout pricing, here are some useful links:

  * LastPass pricing table: [https://www.lastpass.com/pricing]()
  * LastPass free features: [https://lastpass.com/features_free.php]()
  * Bitwarden pricing details: [https://bitwarden.com]()

## Security {#h-security}

Ok, this is the important bit. What is the point in trusting your most secretive of data – your passwords – with a 3rd party, if their security is shoddy?

LastPass are a big target, and [have been compromised in the past](https://www.csoonline.com/article/2936254/data-protection/lastpass-compromise-heres-what-you-need-to-know-and-what-you-can-do.html). However, their security stood up to the attack, and even if a threat actor managed to get hold of an encrypted version of your password vault, they couldn’t really do anything with it.

Having said that, [Bitwarden has very similar security to LastPass](https://help.bitwarden.com/security); your vault is encrypted locally, before being uploaded to Bitwarden’s servers, so they couldn’t access your vault, even if they wanted to. Your encrypted vault then goes through numerous round of hashing and salting, to further protect it from prying eyes.

> If for some reason Bitwarden were to get hacked and your data was exposed, your information is still protected. This is because Bitwarden uses strong encryption and one-way salted hashing. As long as you use a strong master password, your data is safe no matter who gets hold of it.

To add to this, Bitwarden are encouraging security researchers to responsibly report vulnerabilities that are found, via the use of [HackerOne](https://hackerone.com/bitwarden). Having said that, to my knowledge, there has not been any independent security audits of Bitwarden yet.

One of the things I think Bitwarden does do right over LastPass, is the lack of auto-fill. On LastPass, if there is a match, your username and password are filled automatically without any user interaction. Bitwarden on the other hand required its users to select the account to auto-fill, which is then pasted in.

Now, you may be thinking that this is a bonus point for LastPass, however, adding this deliberate step mitigates against [theft of credentials via auto-fill](https://www.bleepingcomputer.com/news/security/web-trackers-exploit-flaw-in-browser-login-managers-to-steal-usernames).

## Room For Improvement {#h-room-for-improvement}

Although good, I think Bitwarden’s security could do with some improvement to bring it in line with with LastPass. These are small items, and don’t actually stop me using the product, but they are worthy of improvement in my opinion. These are:

  * **Geolocation** – LastPass allows its users to limit logins to certain countries only. It would be great if Bitwarden also had this feature.
  * **3rd parties** – Bitwarden uses 3rd party tools for payments. Although not a major issue, any 3rd party utilities that are in use can technically increase the attack vector.
  * **Analytics** – Within the app, there is an option for disabling analytics, stating that _“We use analytics to better learn how the app is being used so that we can make it better. All data collected is completely anonymous”_. Analytics are enabled by default. I would prefer this was disabled by default, or an option to choose when the app is first run.

## Two Factor Authentication (2FA) {#h-two-factor-authentication-2fa}

Both LastPass and Bitwarden offer a range of 2FA options. Everything from Google Authenticator, to Yubikeys, to plain old email. The fact of the matter is, both LastPass and Bitwarden offer a number of 2FA options, which is extremely important in order to add additional layers of security to such important data.

![Bitwarden 2FA types](/assets/images/Bitwarden-2FA-Types.webp)

Arguably one of the biggest advantages that Bitwarden has over LastPass, is that if you don’t trust them for whatever reason, you don’t have to. Since Bitwarden is open source, you can [host your own instance](https://help.bitwarden.com/article/install-on-premise), on your hardware, at your own site. That way, you really do keep full control of the entire application stack.

## Integration {#h-integration}

Personally, I use a wide variety of devices and operating systems. I have both Windows and Linux based machines, I use Android on my mobile phone, my tablet is an iPad, and I also have a Chromebook. So for me, broad integration is key for tools like LastPass and Bitwarden. Luckily, both password managers support pretty much every operating system and browser you can think of.

![Bitwarden Integration](/assets/images/Bitwarden-Intergration.webp)

By using one of the browser addons, users can enter their credentials for sites they have stored within their password manager automatically. This is common in many password managers. However, Bitwarden takes things one step further over LastPass, as it allows users to also store 2FA tokens within Bitwarden itself, so if you don’t have your phone to hand, you can log in using 2FA, right from the app.

![Bitwarden TOTP](/assets/images/bitwarden-totp.webp)

## LastPass vs Bitwarden Compared {#h-lastpass-vs-bitwarden-compared}

The table below shows a direct comparison of some of the features LastPass and BitWarden offer:

|   | **Bitwarden**  | **LastPass**  |
|---|---|---|
| **Open Source**  | <span style="color:green;">Yes</span>  |  <span style="color:red;">No</span> |
| **Self-Hosted Option**  |  <span style="color:green;">Yes</span> | <span style="color:red;">No</span>  |
| **Price**  | <span style="color:green;">$10/year</span> | <span style="color:red;">$24/year</span>  |
| **Family Account**  | <span style="color:green;">5 users ($12/year)</span>  |  <span style="color:red;">6 users ($48/year)</span> |
| **2 Factor Options**  | <span style="color:green;">Yes</span>  | <span style="color:green;">Yes</span>  |
| **Browser Addons**  | <span style="color:green;">All major browsers</span>  | <span style="color:green;">All major browsers</span>  |
| **Password Generator**  | <span style="color:green;">Yes</span>  |  <span style="color:green;">Yes</span> |
| **Auto-Fill**  | <span style="color:green;">Click req. (more secure)</span>  |  <span style="color:red;">Yes (less secure)</span> |
| **Mobile Apps**  |  <span style="color:green;">iOS & Android</span> | <span style="color:green;">iOS & Android</span>  |

## Conclusion {#h-conclusion}

Over all, both LastPass and Bitwarden are comparable products in terms of their functionality and usability. However, if you’re really paranoid and want to go with the product that has a proven track record, choose LastPass. Having said that, Bitwarden’s security (in my opinion) is more than capable of securing my password to such as degree that I’m happy to use it. Hopefully, a security audit in the near future will bolster than belief.

I personally moved over to Bitwarden around 6 months ago, following the price rises by LastPass, as well as the fact that they had been purchased by LogMeIn – who have a proven track record of not treating their users very well.

I wanted something open source, but also as functional as LastPass. I have most definitely found that in Bitwarden. My partner is still using LastPass, as her account hasn’t expired yet. However, when it does, I will definitely be moving her over to Bitwarden also.

**Are you using a different password manager? Or have you tried Bitwarden and found it to not an appropriate LastPass alternative? If so, feel free to tell me more in the comments…**

#### Update Nov 2018 {#h-update-nov-2018}

_The Bitwarden team have now completed a 3rd party security audit and the results were positive. You can [read the full report here](https://cdn.bitwarden.net/misc/Bitwarden%20Security%20Assessment%20Report.pdf)._
