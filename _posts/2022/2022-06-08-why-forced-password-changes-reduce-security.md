---
title: 'Why Forced Password Changes Reduce Security'
date: '2022-06-08T21:54:11+01:00'
author: Kev
layout: post
permalink: /why-forced-password-changes-reduce-security/
description: Forced password changes are good for security apparently. But the truth is, having a forced password change policy reduces password security.
categories:
    - Opinion
    - Security
---
{: .tldr}
Forced password changes are good for security apparently. But the truth is, having a forced password change policy reduces password security.

A few days ago I changed the password on my corporate account for the company I work for. They force us to change our password every 60 days.

This is the same script for pretty much every company I’ve ever worked for. I bet it sounds familiar to you too, right?

## Forced password changes reduce security

The common stipulation for managing corporate passwords it to have them conform to many, if not all, of the following requirements:

- Be at least 8 characters long
- Include a number, upper case letter and special character
- Be changed every 60 days
- Not be the same password as your previous 10 passwords

You can pick an extremely strong password that conforms to these complexity requirements, but when we introduce regular password changes things start to go downhill.

That’s because humans generally don’t have great memories. So by forcing us to change passwords regularly, we have make them easier to remember. Problem is, if a password is easier for a human to remembers, it’s way likely less secure too.

## Choosing a password

Let’s come up with a password that conforms to all of the complexity requirements above. I’m not going to go crazy here as I’m expected to type this password in to login to things like my corporate laptop. So [password managers](/are-password-managers-worth-it/) are no good here.

Let’s go with `Fr!zzy21`. It’s easy for me to remember as it’s based on the word *frizzy* and when the time comes to change it, I can just replace 21 with 22 and I’m good to go.

- 8 characters long ✅
- Lower and upper case letters ✅
- Special character ✅
- Easily changed regularly ✅

Come on, you know you’ve done it – you’ve setup your corporate password to end in a number, just so you can iterate on that number when it comes time to reset your password.

And therein lies the problem, dear reader. Because of these requirements we’ve come up with a **really** shit password. And it will be equally shit after we change it in 60 days.

In fact, it will actually be *more* shit when we change it. If your previous password was compromised and all you have done is change the last digit, it becomes trivial for a human to guess, never mind a computer.

![Password Entropy](/assets/images/xkdc-password-strength.png)

## Reduce complexity, increase security

Ironically, if we get rid of those complexity requirements — especially the forced password changes — security increases.

If we look at the [XKCD comic](https://xkcd.com/936/) above, having a passphrase that rarely changes adds a lot of entropy to the password and increases its security.

It’s not all about the [entropy of a password](https://www.omnicalculator.com/other/password-entropy) though as high entropy is only really effective against brute force attacks. Dictionary attacks and password lists are far more effective and can quickly bypass a high entropy password.

So there’s a few things I think a good password should have:

1. High entropy
2. Not based off a single dictionary word
3. Doesn’t appear in common password lists

`The red cow went shopping` is extremely easy to remember, has a *very* high entropy of 142.5 bits, contains 25 characters and is not based on a single dictionary word.

This pass**phrase** is extremely secure.

## Stop changing passwords

Seriously. Stop. If you have been using your secure password for 5 years and it hasn’t been compromised, it’s just as secure today as it was the day you came up with it.

There is no need to reset a password just for the sake of it. By doing so we’re making passwords shittier and infinitely more insecure.