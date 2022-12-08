---
id: 1974
title: Reviewing My Password Manager Database To Make Me More Secure
date: 2020-05-18T12:33:56+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=1974
permalink: /reviewing-my-password-manager-to-make-me-more-secure/
description:
  - I did a review of my password manager entries to see if there were any issues. As a result, I've been able to make myself more secure.
categories:
  - Security
  - Technology
---
**I did a review of my password manager entries to see if there were any issues. As a result, I&#8217;ve been able to make myself more secure.**

I use [Bitwarden](https://bitwarden.com) as my password manager, and I realised the other day that I hadn&#8217;t done a review of my password entries for quite some time. Over time I end up using the occasional duplicate password &#8211; usually when I quickly sign up for an account and later add it to Bitwarden.

Data breaches are also announced regularly, so it&#8217;s good to check if my accounts have been involved in any breaches. If they have, I will then change those passwords to something secure.

## Assessing My Accounts {#h-assessing-my-accounts}

The first thing I did was to assess my accounts. Lucky for me, Bitwarden has some really useful tools to do this. These include:

  * Reused password report.
  * Exposed password report.
  * Weak password report.

### Reused Passwords {#h-reused-passwords}

First thing to check was if I had any duplicate passwords in my password manager.

<img loading="lazy" width="1024" height="756" src="/assets/images/wp-images/2020/05/Reused-Passwords-1024x756.png" alt="Bitwarded reused passwords report" class="wp-image-2005" srcset="/assets/images/wp-images/2020/05/Reused-Passwords-1024x756.png 1024w, /assets/images/wp-images/2020/05/Reused-Passwords-300x221.png 300w, /assets/images/wp-images/2020/05/Reused-Passwords-768x567.png 768w, /assets/images/wp-images/2020/05/Reused-Passwords.png 1500w" sizes="(max-width: 1024px) 100vw, 1024px" />  

**Crap!**

### Exposed Passwords {#h-exposed-passwords}

Next I had a look at any exposed passwords, I believe Bitwarden uses the [Have I Been Pwned](https://haveibeenpwned.com) breach API for this.

I have more than one email address that I use for accounts, so I checked them all. Lucky for me, they all came back clean except 1 email address. This didn&#8217;t really shock me as it&#8217;s an email I&#8217;ve used for years across **a lot** of accounts.

<div class="wp-block-image">
  <img loading="lazy" width="529" height="1024" src="/assets/images/wp-images/2020/05/breached-account-529x1024.png" alt="" class="wp-image-2019" srcset="/assets/images/wp-images/2020/05/breached-account-529x1024.png 529w, /assets/images/wp-images/2020/05/breached-account-155x300.png 155w, /assets/images/wp-images/2020/05/breached-account-768x1487.png 768w, /assets/images/wp-images/2020/05/breached-account-793x1536.png 793w, /assets/images/wp-images/2020/05/breached-account.png 1010w" sizes="(max-width: 529px) 100vw, 529px" />
</div>

**Double crap!**

### Weak Passwords {#h-weak-passwords}

Finally, it&#8217;s time to run the weak passwords report to see how things are looking there. I wasn&#8217;t expecting there to be any weak passwords within my password manager as I use [good practices for generating my passwords](https://kevq.uk/why-your-password-is-probably-crap/).

Lucky for me, I was right:

<img loading="lazy" width="1024" height="270" src="/assets/images/wp-images/2020/05/Weak-Passwords-1024x270.png" alt="Bitwarden weak passwords report." class="wp-image-2012" srcset="/assets/images/wp-images/2020/05/Weak-Passwords-1024x270.png 1024w, /assets/images/wp-images/2020/05/Weak-Passwords-300x79.png 300w, /assets/images/wp-images/2020/05/Weak-Passwords-768x202.png 768w, /assets/images/wp-images/2020/05/Weak-Passwords.png 1500w" sizes="(max-width: 1024px) 100vw, 1024px" />  

## Fixing The Issues {#h-fixing-the-issues}

Now I have an idea of what the issues are with my accounts, it&#8217;s time to fix them.

### Remove Unused Items {#h-remove-unused-items}

There was over 150 items in my password database, some of which I was sure were not being used. So the first thing I did was to review every item in Bitwarden to see if I still needed it.

If I didn&#8217;t, I headed to the website, deleted my account, then deleted the item from Bitwarden.

By doing this audit of all my accounts, I was able to delete around 30 accounts from my database, reducing my risk footprint significantly.

### Reset Duplicate Passwords {#h-reset-duplicate-passwords}

Next it was time to review any remaining duplicated passwords. There were still a few, so I hopped onto those accounts and reset the passwords to something secure.

<img loading="lazy" width="1024" height="266" src="/assets/images/wp-images/2020/05/No-Reused-Passwords-1024x266.png" alt="Bitwarden no reused passwords" class="wp-image-2016" srcset="/assets/images/wp-images/2020/05/No-Reused-Passwords-1024x266.png 1024w, /assets/images/wp-images/2020/05/No-Reused-Passwords-300x78.png 300w, /assets/images/wp-images/2020/05/No-Reused-Passwords-768x200.png 768w, /assets/images/wp-images/2020/05/No-Reused-Passwords.png 1500w" sizes="(max-width: 1024px) 100vw, 1024px" />  

That&#8217;s the thing with password managers; because you never actually know what your passwords are, it&#8217;s easy for duplicate or insecure passwords to remain in your database for long periods.

## Conclusion {#h-conclusion}

After a couple of hours work, I was able to remove a number of duplicated passwords from my password manager ensuring my account are more secure.

I&#8217;ve also been able reduce the amount of accounts I have lying around the Internet, which is always a good thing.

Overall, I&#8217;m very happy with what I have been able to accomplish. Having a password manager continues to [prove its worth](https://kevq.uk/are-password-managers-worth-it/) time and again.
