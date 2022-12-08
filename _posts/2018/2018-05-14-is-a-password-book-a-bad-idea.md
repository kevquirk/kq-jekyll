---
title: Is A Password Book A Bad Idea?
layout: post
permalink: /is-a-password-book-a-bad-idea/
description: Everyone should use a password manager, right? But what about a password book?
categories:
  - Opinion
  - Security
---
So I was browsing [my Twitter feed](https://twitter.com/kevquirk) recently, and I came across the following tweet:

![Password book Tweet](/assets/images/pw-book-tweet.webp){: loading="lazy"}

If you don’t know, password books are literally a handwritten list of usernames, passwords and URLs that people can use to record their credentials. Think of them as a low-tech alternative to [password managers like Bitwarden](/bitwarden-lastpass-alternative).

Password books are generally not secured in any way – they don’t have a big, Gothic-style clasp and padlock. Nope, nothing. Nada. They’re just books that anyone can open and read. To many, this screams **INSECURE!** But is that accurate?

![Password logbook](/assets/images/password-logbook.webp){: loading="lazy"}

## Technical Ability & Memory {#h-technical-ability-memory}

Not everyone is technical, and not everyone has a great memory. For example, your 60 year old Grandma may decide she wants to set up a Facebook account so she can see what the grandkids are doing. She sets up an account, with a password, and goes about the business of lurking on your Facebook feed.

Two weeks later, she decides to do some more lurking. Problem is, the whole premise of online accounts and passwords are likely to be alien to good old Grandma. There’s a good chance she can’t remember her email if she recently set it up, let alone the cryptic password she had to set up on her Facebook account.

Now you could say _“just get her a password manager, problem solved!“_. But is it? We’ve already established that Grandma is struggling to remember her Facebook credentials, so how on earth is she going to navigate a complicated password manager UI? The solution: a password book!

<blockquote class="wp-block-quote">
  <p>
    But Kev, what if someone gets hold of the book?!
  </p>
</blockquote>

My partner, a 30 something computer literate woman who has grown up around computers, sometimes struggles with her LastPass account – especially when I forced her to implement 2 factor authentication. So I think poor old Grandma is probably going to struggle.

The fact of the matter is, that person who may well struggle with a password manager, is unlikely to struggle with a pen and paper.

<p class="notice">
  <strong>Note:</strong> This is just an example use case. A person doesn’t need to be an elderly woman in order to have a bad memory and/or poor technical skills. These kind of issues occur in all facets of society.
</p>

{: .full-bleed}
![Cool Grandma](/assets/images/grandma-cool.webp){: loading="lazy"}

<blockquote class="wp-block-quote">
  <p>
    Ok, we get it. BUT WHAT IF SOMEONE GETS THE BLOODY BOOK?!!!
  </p>
</blockquote>

## The Cyber Risk {#h-the-cyber-risk}

Ok ok, let’s talk about the risk of someone actually getting hold of Grandma’s password book, versus using repeated passwords. To break this down, let’s look at a couple of real-world scenarios that Grandma might well find herself in:

### Scenario 1: Using duplicate passwords, but no password book. {#h-scenario-1-using-duplicate-passwords-but-no-password-book}

So Grandma is gettin’ down with the kids, and has decided to join the digital age. She has setup her email address so she can email the Grandkids, she’s also setup her Facebook account so she can see what they’re all up to.

On top of this, she’s decided to setup Internet banking, as well as a number of accounts to pay a variety of her bills online.

So already Grandma has numerous passwords that she needs to remember. She’s likely to pick something that is easy to remember, like her dog’s name, and will probably throw in a couple of numbers so she conforms to the complexity requirements. Let’s go for `Mavis1951` with “1951” being the year Grandma was born.

  * Capital letter: **check**
  * More than 8 characters: **check**
  * At least 1 number: **check**

By the way, `Mavis1951` is a **REALLY** crap password and [here is why](/why-your-password-is-probably-crap).

I’m willing to bet that the password for all the accounts Grandma has created is Mavis1951, or something very similar depending on the complexity requirements for each site – like `M@vis1951` if a “special character” is required.

Mr Hackerman then compromises Grandma’s power company and manages to get a dump of their user database. Bish bash bosh, Hackerman now has access to all of Grandma’s online accounts, as Grandma’s password is the same (or very similar) for all of her accounts. Bad times.

### Scenario 2: Using unique passwords and a password book. {#h-scenario-2-using-unique-passwords-and-a-password-book}

Same deal. Grandma has joined the digital age and has set up a number of online accounts. Only this time, she’s decided to make use of the password book that you got her for Christmas last year.

Her email password is `Mavis1951`; she then sets up her Facebook account with a password of `Michael1987`. Now comes Internet banking; let’s go with `TheCowLovesGrass&Has2Calves` this is a much better password – Grandma is learning! All of these passwords are then recorded in Grandma’s password book.

Now, some of these passwords may not be the most secure in the world, but they are unique. Plus, Grandma can easily make them more secure as she is no longer reliant on her relatively poor memory.

Same thing happens and Grandma’s power company is compromised. Only this time, Hackerman only has access to that single account. Once Grandma gets the compromise notification email from her dutiful power company, all she has to do is update her password for that particular account and record it in her password book. Still bad times, but not as bad as having all Grandma’s accounts compromised.

{: .full-bleed}
![HaveIBeenPwned example](/assets/images/haveibeenpwned.webp){: loading="lazy"}

## The Physical Risk {#h-the-physical-risk}

You’re probably still screaming **WHAT IF HACKERMAN GOT HER BOOK?!** Well, Grandma is in the North West of England and Hackerman is 2,000 miles away in Eastern Europe. So he isn’t going to get hold of her book any time soon.

Even if Hackerman lives on the same street as Grandma, he’s still very unlikely to get physical access to Grandma’s house, never mind her password book.

That’s the clincher here; _Hackerman needs physical access to Grandma’s book_, and this is something that is very unlikely to happen, which in turn reduces the attack surface substantially.

Yes, someone may break into Grandma’s house and steal her password book, but that is way less likely than one of her many accounts being compromised by an online threat actor.

Even if her house was to be broken in to, the thief likely won’t be targeting Grandma’s password book. Mr Thief is probably more interested in Grandma’s valuables.

Let’s say Grandma has gone to bed and left her password book and laptop on the coffee table. Which do you think Mr Thief will take when he breaks in? The seemingly arbitrary book he can’t make any money on, or the laptop that he can sell on eBay?

#### It’s the laptop, every single time. {#h-it-s-the-laptop-every-single-time}

## Conclusion {#h-conclusion}

On the surface, password books may seem like a really bad idea, but when you look at them within the confines of a real-world scenario, they’re actually not that dumb at all. I know what I will be getting my Mum for Christmas this year!

**Do you know anyone that uses a password book, or do you still think that password books are a bad idea? Feel free to tell me your thoughts in the comments below.**
