---
title: How Websites Check Your Password
layout: post
permalink: /how-websites-check-your-password/
description: Ever wondered how websites check your password? How can they check your password without being able to read it? This post will tell you how that's possible.
categories:
  - Security
  - Technology
---
{: .tldr}
Ever wondered how websites check your password? I mean, how can they check your password without being able to read your password? It&#8217;s a catch 22, surely?

So you login to one of your many online accounts, you enter your credentials, the website checks your details and logs you in. But how websites check your password is a bit of a mystery, right?

In this post I'll take you through how websites check your password so you can login, yet still keep them secure.

Sites like [Have I Been Pwned](https://haveibeenpwned.com/) regularly detail password dumps from compromised websites. These dumps can contain both _plaintext_ or _hashed_ passwords. But what does that mean?

## Plaintext Passwords {#h-plaintext-passwords}

Plaintext passwords are passwords that are **not** obfuscated in anyway. So the text you read is the actual password. Let's say my password was `Password123` (it isn't, because that's a [crap password](/why-your-password-is-probably-crap/)) and it was stored in plaintext, then anyone would be able to see that my password was `Password123`.

This is obviously extremely insecure as anyone who has access to where my password is stored can read it, and potentially re-use it.

## Hashed Passwords {#h-hashed-passwords}

Hashing is often confused with encryption, but there is a significant difference between the two. Hashing is a **one-way** mathematical algorithm that cannot be reversed. Encryption can be reversed via decryption.

When something is hashed, the output is always the same size. So if I was to use the MD5 algorithm to hash `Password123`, or an entire book, the resulting hash would always be 32 characters long.

This is because hashing uses a mathematical algorithm to create a fixed output from a variable source string of text. You can see the MD5 hash for both `Password123` and the **[entire Hamlet play](http://shakespeare.mit.edu/hamlet/full.html)** below.

  * Password123 - `42f749ade7f9e195bf475f37a44cafcb`
  * Hamlet - `e4b74bb9f1b22e373d7e0c9cbe1672b1`

As you can see, both hashes are 32 characters long. Despite `Password123` being 11 characters long and Hamlet being approximately 200,000 characters in length.

Because the hashes are mathematically created, the output will always be the same value. However, if the input string changes even slightly, the resulting hash is completely different. For example, below is the MD5 hash for `Password123` (notice the space on the end):

`b43105d6f779dfb2e13cdb1a2667a6be`

As you can see, just adding a space to the end of the input string completely changes the hashed output.

## How Websites Check Your Password {#h-how-websites-check-your-password}

So now you have an understanding of the basics of hashing, let's look at how hashing it used to check your password when you log in.

When you sign up for an account with a website, a hashed version of your password will be stored within their user database. When you subsequently try to login to your account, the string you enter into the password field is hashed in the same way as when you signed up, and the results are compared to the hashed password they have within their database.

If the resulting hashes match, you're allowed to login. If they don't, you're not. It's that simple. That's basically how websites check your password without actually _knowing_ your password. Clever, huh?

![](/assets/images/password-hash-check.jpg)

## Conclusion {#h-conclusion}

Now you know how websites check your password, so the next time you log into a site, you have an idea of what it's doing with your credentials.

This post doesn't cover all aspects of password security - it is just an intro. Things like [hash collisions](https://en.wikipedia.org/wiki/Collision_(computer_science)), and therefore more secure algorithms, aren't covered. Neither is [salting](https://en.wikipedia.org/wiki/Salt_(cryptography)). This is a deliberate decision to help people who are new to hashing grasp the concept.

I may write a follow up post in the future, but in the meantime, please don't email me saying that I didn't cover collisions or salting. I know I didn't and it was a deliberate omission. 🙂
