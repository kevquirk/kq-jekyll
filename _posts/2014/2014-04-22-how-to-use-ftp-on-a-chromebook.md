---
title: 'How To Use FTP On A Chromebook'
date: '2014-04-22T11:23:00+01:00'
layout: post
permalink: /how-to-use-ftp-on-a-chromebook/
categories:
    - Technology
    - Web
---

**Chromebook’s are brilliant. They’re cheap, quick, lightweight, and generally awesome. However, for power users, such as myself, Chromebook’s do lack some features. In this article, I’ll show you how to plug one of those gaps – FTP.**

## PRE-REQUISITES

Unfortunately, using FTP on a Chromebook, isn’t quite as simple as installing a program like Filezilla. But it’s not much more difficult to be honest. But you’re going to need a couple of things before we get started. The first of which is a hosting package. Personally, I use [Digital Ocean](https://web.archive.org/web/20150102011608/https://www.digitalocean.com/?refcode=3fb9d983adc7) (affiliate link), as you can get a pretty powerful server for as little as $5.00 a month. I’m not gonna go into detail on how to set up your own VPS, that’s an article for another day. Besides, if you need FTP, the likelihood is that you already have a hosting package.

You’re also going to need a domain. For example, kevquirk.com is a domain. Again, if you have a hosting package already, you’re bound to have a domain, [or 50](https://web.archive.org/web/20150102011608/http://kevquirk.com/2013/06/my-name-is-kev-quirk-and-im-an-addict/)!

## Net2FTP

So now, you’re probably thinking *“dude, what the fuck does hosting &amp; domains have to do with using ftp on a Chromebook?”* Well my fair readers, you’re going to be setting up your own Net2FTP server so that you can access it on your Chromebook (or any browser). That my friends, is how to use FTP on a Chromebook.

If you don’t want to do all this messing around, you can head over to [net2ftp.com](https://web.archive.org/web/20150102011608/http://net2ftp.com/) and use their public site. **However,** this means you will be sharing your FTP details, including your password, with a third party server – **bad times!** Lucky for us though, Net2FTP is available as a [free download from here](https://web.archive.org/web/20150102011608/http://www.net2ftp.com/homepage/download.html). So download it, extract the zip archive, and get ready to transfer yo’ sheet.

## Make a sub-domain

We’re nearly ready. Now you need to make a sub-domain in your hosting package. Something like myftp.yourdomain.com will do just fine. Once that’s ready, and the DNS has propagated. Connect to the FTP server on your hosting package, and upload all of the files and folders within the Net2FTP zip archive you just downloaded. Once that’s done, navigate to http://myftp.yourdomain.com (or whatever the correct URL is) and you should be able to your very own version of Net2FTP. Awesome, no?

## Securing your shizzle

You won’t want any old internet troll coming along and using your Net2FTP server, will you? So we’re going to do some clever stuff in order to password protect the site. Now, if you have a hosting account that’s using something like cPanel, then you can set that up easily via the cPanel GUI. However, if you don’t, here’s how to manually do it.

First of all, open up the htaccess.txt file that was downloaded with Net2FTP. Then change it so it looks something like this:

```
# Rename this file to .htaccess if you want to allow large file uploads
# Note that this file is not always taken into account, depending on your server configuration

php_value max_execution_time 1800
php_value memory_limit 2000M
php_value post_max_size 2000M
php_value upload_max_filesize 2000M

AuthType Basic
AuthName "Please Log In"
AuthUserFile /var/www/path/to/your-site/myftp.yourdomain.com/.htpasswd
require valid-user
```

Rename it to “.htaccess”, then upload it to the Net2FTP folder on your web server. Finally, create a second file and call it “.htpasswd”, then [click here](https://web.archive.org/web/20150102011608/http://davidwalsh.name/htaccess-username-password-generator) to use the MD5 password generator. Enter the username &amp; password you want to use on your Net2FTP site, and click generate. It will then make something similar to this – “kevin:fdwFG35gf”. The part after the colon is a hashed version of your password, this makes it more secure. So people can’t see your password, even if they somehow get on to your FTP server.

Paste that text into your .htpasswd file, save it, and upload it to your Net2FTP folder along with all the other stuff. Once that’s done, boot up your Chromebook and navigate to your new Net2FTP site’s URL. It should prompt you for a username and password. Enter the ones you inserted when you filled in the MD5 generator, and you should then have access to your very own, private Net2FTP server. Pretty bloody clever, I think you will agree. That, my friends, is how to use FTP on a Chromebook.

Problems? Well, this isn’t a support desk, but I’ll do my best to help you if I can. Just leave a comment below.