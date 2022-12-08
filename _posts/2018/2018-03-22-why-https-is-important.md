---
title: Why HTTPS Is Important
layout: post
permalink: /why-https-is-important/
description: Using HTTPS on your website is incredibly important. This post will explain why HTTPS is so important, and why you should probably be using it.
categories:
  - Privacy
  - Security
  - Technology
---
You may have heard of [Let’s Encrypt](https://letsencrypt.org), the free certificate authority who are hell-bent on getting HTTPS everywhere. But why is that little green padlock in your browser so important? Let’s take a look…

## What Is HTTPS? {#h-what-is-https}

I suppose a good place to start would be telling you guys what HTTPS actually is. If you don’t know, HTTP, or Hypertext Transfer Protocol, is the protocol that the Internet uses for sending/receiving web pages and other media around the globe.

HTTPS adds a secure layer to HTTP, making your web surfing far more secure. It does this via the use of Transport Layer Security (TLS) certificates, which encrypt the connection to the website you’re visiting.

Ok. So you’re visiting a website that is HTTPS enabled, and you can see that familiar green padlock on the address bar. That’s all great, _but what does HTTPS actually do?_

## What Does The “S” In HTTPS Do? {#h-what-does-the-s-in-https-do}

I mentioned above that the “S” in HTTPS (which stands for _Secure_) adds encryption to plain old HTTP. Encryption, if you don’t already know, is a way of scrambling data using extremely complicated mathematics. Which can later be unscrambled, or decrypted, by a computer that is authorised to do so.

So we now know that a HTTPS connection is utilising TLS in order to encrypt connections between a web server and its visitors. But from a threat actor’s perspective, what can they see and do if the website you’re visiting uses HTTPS?

## Practical Demonstration {#h-practical-demonstration}

I temporarily set up a test server that was running two websites. One over plain old HTTP, and the other was running on HTTPS. I also set up a [network sniffer](https://en.wikipedia.org/wiki/Packet_analyzer), in this case Wireshark, and I sniffed the network for all the packets of data that went from my machine, to the test server.

### HTTP Demonstration {#h-http-demonstration}

Looking at the packets we have sniffed below, we can see the [TCP handshake](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) take place, and the connection establish with the HTTP website. A TCP handshake follows this basic pattern:

  * **User**: _Hello server, are you there?_ (SYN)
  * **Server**: _Yes, I’m here. Are you still there?_ (SYN-ACK)
  * **User**: _Yep. I’m here and I’m going to connect to you now._ (ACK)

Now we have carried out our TCP handshake, it’s time to log in to the test HTTP website, as you can see below, the website “is not secure”:

{: .full-bleed}
![HTTP test login](/assets/images/http-test-login.webp){: loading="lazy"}

When logging in to a website, a user’s browser will `POST` their credentials on the website. The server will then check them, and if they’re valid, the login will be successful. So let’s filter the sniffed packets to the HTTP website, and check for any POST requests from when I logged on:

{: .full-bleed}
![HTTP POST](/assets/images/http-POST.webp){: loading="lazy"}

We can see the POST request where my machine sent the credentials that I logged in with, to the test server. Let’s expand that POST request a little to see what it contains:

{: .full-bleed}
![HTTP POST expanded](/assets/images/http-POST-expanded.webp){: loading="lazy"}

**Oh crap. As you can see from the image above, the POST request clearly shows the web address that I was logging in to, my username and my password!**

If a threat actor was sniffing the network I was connected to (something that is very common on public connections, such as a coffee shop’s wireless network), they would have everything they need to log in to my website.

Had I been logging in to something really important, like my Internet banking; and my bank’s website was using plain old HTTP, my login credentials would be transmitted over the Internet, in plain text, for the entire world to see.

### HTTPS Demonstration {#h-https-demonstration}

Right then, let’s carry out the same demonstration on the test HTTPS website. I’ve restarted my network sniffer, and off I go to log in to my HTTPS website.

{: .full-bleed}
![HTTPS test login](/assets/images/https-test-login.webp){: loading="lazy"}

If we look at the packets this time, they’re a significantly different than the TCP handshake we saw on the HTTP website. This time, we’re looking at an [TLS handshake](https://en.wikipedia.org/wiki/SSL_handshake), which goes like this:

  * **User**: &#8220;_Hey server, you there?_” (ClientHello)
  * **Server**: &#8220;_Yo! I’m here._” (ServerHello)
  * **Server**: “_I’m a secure server. Here is my ID so you know I’m legit._” (Certificate)
  * **Server**: “_If you wanna talk to me, you’re gonna need to encrypt your messages. Here’s the key to do it._” (ServerKeyExchange)
  * **Server**: “_I’m done talking now. Your turn._” (SeverHelloDone)
  * **User**: “_Thanks. Here’s my key too, so you can send encrypted messages to me also._” (ClientKeyExchange)

{: .full-bleed}
![HTTPS handshake](/assets/images/https-handshake.webp){: loading="lazy"}

The TLS handshake is done, so we can now talk to the web server over an encrypted communications channel. I’ve logged in, so let’s filter the traffic on `POST` requests, just like we did for the HTTP site:

{: .full-bleed}
![HTTPS POST](/assets/images/https-POST.webp){: loading="lazy"}

##### Oh, there is no POST request. Therefore, there are no credentials for a threat actor to find! {#h-oh-there-is-no-post-request-therefore-there-are-no-credentials-for-a-threat-actor-to-find}

This is because the communication took place over an encrypted connection. The data was encrypted on my machine before it was sent to the server, then the server decrypted it at the other end before checking that my credentials were valid. Once it knew they were, I was allowed to log in.

Because of this encrypted connection, all my network sniffer could see is packets of encrypted data going from my machine, to the server, and back again. The sniffer had no idea what was being sent. So if I was logging in to my Internet banking, a threat actor would have no idea what my login credentials are.  

{: .full-bleed}
![HTTPS TLS Expanded](/assets/images/https-tls-expanded.webp){: loading="lazy"}

## Conclusion {#h-conclusion}

This is just one of the many ways in which HTTPS improves security over HTTP, but I thought it would be a good demonstration of why HTTPS is important.

Previously, TLS certificates (the tool that allows servers to use HTTPS) were not free, and were often fairly expensive. With Let’s Encrypt now offering free TLS certificates, there really is no excuse for not using HTTPS.

Many web hosting admin panels, like cPanel and Plesk, integrate with Let’s Encrypt seamlessly. So adding HTTPS to your website can be as simple as clicking on a check-box.

**Again, no excuses really.**

HTTPS is becoming so widespread that [Google are now marking HTTP websites that contain login forms as insecure](https://security.googleblog.com/2017/04/next-steps-toward-more-connection.html) within Chrome, and Firefox are following this trend too.

**If you’re running a website that is using plain old HTTP, I would suggest you take a look at [integrating Let’s Encrypt certificates in to your site](https://letsencrypt.org/getting-started).**
