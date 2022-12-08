---
title: Are Password Managers Really Worth It?
layout: post
permalink: /are-password-managers-worth-it/
categories:
  - Opinion
  - Security
  - Technology
description: Are password managers really worth it? I think so and more...
---
I recently got chatting to someone on [Fosstodon](https://fosstodon.org) about password security and in particular, password managers. But I thought I’d share my thoughts here also, as I have much more than 500 characters to play with. ?

## What Is A Password Manager? {#h-what-is-a-password-manager}

Let’s start with the basics – _what is a password manager?_ Well, the clue is in the name. A password manager is a tool that’s used to generate and manage passwords on your behalf.

This usually takes the form of an encrypted database that is password protected. The rationale being that you only need to remember the “master password” to unlock (or decrypt) your database, and the password manager does the rest.

Some common examples of password managers are:

  * LastPass – <https://laspass.com>
  * KeePass – <https://keepass.info>
  * Dashlane – [https://dashlane.com]([https://dashlane.com)
  * 1Password – <https://1password.com>
  * BitWarden – <https://bitwarden.com> (this is the one I currently use)

{: .full-bleed}
![Bitwarden splash](/assets/images/bitwarden.webp)

## Advantages {#h-advantages}

Password managers have a number of advantages; the biggest one being that they allow you to have very complicated and unique passwords for all of your accounts, but you only need to remember a single password. For example, I just generated this password, which is typical of all the passwords within my password manager:

`F^EHHtSIbPyDm2&kHsPhSppNYwzQDg`

All of the password managers in the list above — with the exception of KeePass — are synced online by default, so you can access your password manager from anywhere, on any device. Most password managers also have mobile apps to make it even easier for you to manage your passwords (and log in to your accounts) on the go.

Now, you may think that syncing a database full of your passwords to the Internet is asking for trouble, because not sharing passwords is security 101, right? However, that’s not technically true in this case. You see, the password database is always encrypted, and many password managers add numerous levels of encryption, salting and hashing based on your email, password, or both.

So, even if a threat actor compromised a password manager’s systems, all they would get is a bunch of encrypted files that are completely useless, and in many cases, almost impossible to decrypt. **However, you need to make sure that you master password is not a crappy password!**

Many password managers also support 2 factor authentication. I’d _strongly_ recommend you enable 2FA if it’s available, as it massively increases your security.

{: .full-bleed}
![Lastpass splash](/assets/images/lastpass.webp)

  * So by using a password manager, you only ever need to remember one password.
  * But they also allow you to have very complicated and unique passwords for every single account you have; so if a particular company you have an account with gets compromised, the rest of your accounts are safe.
  * Finally you have the advantage of easily getting your passwords everywhere – many password managers can even log you in to your accounts automatically!

It’s not all good news though…

## Disadvantages {#h-disadvantages}

As mentioned earlier in this post, syncing all of your passwords online is definitely a risk. But the passwrd manager vendors generally take extra care to ensure that even if they’re compromised, your data is secure.

That being said, the caveat to such strong security is that if you ever forget your master password, there is absolutely nothing the password manager vendor can do to help you, as it’s encrypted and even they can’t crack it. When syncing, your database is encrypted locally, then sent to the password manager servers. So the vendor will never see your password database in clear-text. So even if they wanted to help you get your passwords back, they couldn’t.

If you think the risk of syncing to the cloud is too much, or if you simply have no need to sync your passwords between devices (like me for my work accounts), then use an offline password manager, like [KeePass](https://keepass.info). It works in exactly the same way as other password managers, except it doesn’t sync anywhere – it’s just an encrypted file on your machine.

## Risk vs Reward {#h-risk-vs-reward}

There’s always risk when using any online services, and your passwords are the keys to the kingdom. So you need to consider the risk of not having a password manager, vs the reward of having one.

One the one hand, you could have all of your online accounts using very similar passwords – `MySecurePassword12`, `MySecureP@ssword!2` and `My$3curePassword12` are all technically different passwords, but them being so similar makes them extremely easy to guess once one has been compromised. Any threat actor worth their salt would use [fuzzy logic](https://en.wikipedia.org/wiki/Fuzzy_logic) to check any of your accounts for similar credentials, once they have compromised one of your accounts.

Plus, password re-use means that if your credentials have been harvested via a company being compromised (see [Have I Been Pwned](https://haveibeenpwned.com) if you want to check if your email address is in any known credential data-dumps), then the threat actors have access to any account where those credentials have been re-used. Bad. Times.

If one of those sets of re-used credentials is your email account, you might as well pack up and go home; once a threat actor has access to your email, they can simply generate password reset links for all of your accounts.

On the other hand, if you’re using a password manager, you can easily have completely unique, and very complicated passwords. So if one company gets compromised, your other accounts are safe.

Even if a password manager gets compromised, your database is still highly encrypted and practically impossible to crack. So you’re still relatively safe.

## Conclusion {#h-conclusion}

I work in the Cyber Security industry, and I’m lucky enough to be surrounded every day by some of the most highly skilled Cyber Security professionals on the planet. **If you were to ask anyone in my office if they use a password manager, I’m almost certain that 100% of them will.**

It’s not just the company I work for though, Cyber Security professionals from all over the world recommend using a password manager. We can’t all be wrong, can we?

**If you think password managers are a waste of time, or a security risk, feel free to leave a comment below. I’m always keen to hear the opinions of those who differ from my own.**
