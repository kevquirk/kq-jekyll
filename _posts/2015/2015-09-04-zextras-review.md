---
title: 'ZeXtras Review'
date: '2015-09-04T12:08:00+01:00'
layout: post
permalink: /zextras-review/
categories:
    - Technology
---

In a previous article about [setting up a Zimbra server](/how-to-setup-a-zimbra-server/), I mentioned [ZeXtras](https://web.archive.org/web/20160613074217/http://www.zextras.com/) when talking about mobile sync, and in particular, ActiveSync support for Zimbra. However, I feel that the quick mention of ZeXtras didn’t really do it justice, so I thought I’d write a full ZeXtras review, to show you what the suite has to offer – which is a hell of a lot more than just ActiveSync support.

## Whats Does ZeXtras Offer?

Well, the basic answer to that question is – *a lot.* The ZeXtras suite is a collection on *Zimlets* (Zimbra plugins) that add a number of features to your Zimbra deployment. The plugins are as follows:

- **[ZxBackup](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-backup-for-zimbra.html)** – This is a real-time backup and restore solution for Zimbra.
- **[ZxMobile](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-mobile-for-zimbra.html)** – This plugin adds ActiveSync support to Zimbra, so you can sync to mobile devices or mail clients, like Outlook.
- **[ZxPowerstore](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-powerstore-for-zimbra.html)** – Allows you to manage the storage volumes in your server. It also reduces space using compression etc. If free space is a premium, you need this!
- **[ZxAdmin](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-admin-for-zimbra.html)** – This plugin simply extends the admin features on Zimbra, and allows you to do things like delegate control for domains.
- [**ZxChat**](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-chat-for-zimbra.html) – This is a free plugin that anyone can use, it adds a chat system to your Zimbra deployment. So users can chat with each other in real-time.
- **[ZxMigration](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-migration-tool-zimbra-to-zimbra.html)** – This is an other free plugin (which suprised me) that allows you to migrate from one Zimbra server to another – *very* useful when it comes to upgrades.

## My Initial Thoughts

Deploying ZeXtras is an absolute breeze ([instructions here](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/ZeXtras_Suite_Installation_Guide)), once it’s deployed, it instantly gets to work. The whole process is designed to be extremely easy to manage – even for novice administrators. However, if you feel like you want to get under the hood, you can also use ZeXtras via the CLI, which I found to be a lot more useful.

You don’t have to use the CLI though, that’s just what I prefer. Pretty much everything can be done from the Zimbra Admin GUI, with the use of wizards. So if you’re coming from a Microsoft background, this will really suit you.

I’ve been using ZeXtras off and on for a few months now, and so far I’ve not had a single issue with it. Everything has *just worked.* Which is great when you’re managing your own server! So let’s take a look at the zimlets and their features in a little more detail.

## ZxBackup

Thankfully, I haven’t really needed to use ZxBackup in anger. However, it’s always good to test your backups so you know they work before you actually have to use them. ZxBackup will backup all data for all users on a real-time basis.

You can of course set the retention policy (default is 30 days), and select which data you wish to backup, and where it’s backing up too. If you ever need to restore your data, you have a couple of options:

1. You can restore an entire mailbox as it was at a particular point in time, to a completely new mailbox. This won’t affect the live mailbox being restored from – awesome!
2. You can restore all deleted items from that point in time, back to any point within your retention period. It will restore to a separate folder within the users mailbox.
3. Using the CLI, you can also restore single items.
4. There are also [disaster recovery](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/Zx_Backup:_Disaster_Recovery) options, just in case the sh\*t really hits the fan!
5. There are many more options in the [ZxBackup Admin Guide](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/ZxBackup_Admin_Guide), but these are the ones I have tested so far, and are working perfectly.

## ZxMobile

ZxMobile is so easy to use, it’s unreal. Simply enable the zimlet, then head to your mobile device and add a new Exchange/ActiveSync account. Enter your username, password, and server address, click save and you’re done! Email, contacts, calendars (including shared calendars), and tasks are all synced to your device – it’s so simple.

On my Zimbra server, I host email accounts for my family and a couple of friends, none of which are technical. The fact that all of them have managed to set up their mobile devices with very little input from myself, proves how simple it all is.

## ZxPowerstore

Honestly, I haven’t really played with this plugin, as I haven’t had to. I simply set it up with my default mail store (it does this out of the box), and away it went. I haven’t had to change a thing, and I haven’t had any problems. You can set up secondary mail volumes with Powerstore (I imagine this works in a similar way to Exchange Mailbox Stores). I may set up a secondary store at some point, but for now I have plenty of space and only a few mailboxes, so I don’t really need it.

You can get more information about ZxPowerstore from [here](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/ZxPowerStore).

## ZxAdmin

ZxAdmin basically allows you to delegate junior admin control to other users on your Zimbra deployment. So you can allow standard users to be administrators for a particular domain. You can then set limitations on their accounts, such as mailbox limits and storage quotas.

If you’re running a large Zimbra deployment, then this could become invaluable. However, it also has it uses in a small deployment like mine. If i wanted to host mail for extended family, I could give them their own domain and let them manage it themselves. Very useful indeed.

## ZxChat

It does exactly what it says on the tin. When deployed, it adds a chat window to the Zimbra webmail interface, so users can add other users as “buddies” and chat to them in real-time. If you have a webcam and mic, you can even do a video calls. So you basically have your own internal version of Microsoft Lync, or Skype – pretty bloody impressive, especially since it’s free!

## ZxMigration

I haven’t had to use ZxMigration yet, as I haven’t had the need to migrate from one server to another. However, the plugin allows you to completely migrate from one Zimbra server to another, even if they are running different base operating systems. More information about the ZxMigration tool can be found [here](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/Migrate_Zimbra)

## Licensing

Although ZeXtras does have free plugins, the main plugins are not free. You can however get a [30 day unlimited free trial](https://web.archive.org/web/20160613074217/http://www.zextras.com/zextras-download-for-zimbra.html) of all the plugins, there is an annual licensing fee for the suite. There are a number of bundles that you can choose from, and the minimum license number is 10. However, the licensing is extremely affordable, as shown below:

- **Free plugins** – these include ZxChat, ZxAdmin and the ZxMigration Tool. You can use these 100% free of charge forever – **pretty awesome offering if you ask me!**
- **Mobile** – all of the free plugins, plus the ZxMobile plugin. This is an annual cost of 2EURO per license, per year. So the minimum 10 licences is just 20EURO per year (approx £15.00).
- **Backup &amp; Powerstore** – as well as the free plugins, you can also use the ZxBackup &amp; ZxPowerstore plugins. The annual cost of this bundle is 6EURO per license, per year. So a minimum cost of 60EURO (approx £43.00) for the minimum 10 licenses.
- **Complete bundle** – Everything that ZeXtras offers is just 7EURO per license, per year. So the minimum for 10 licenses would be 70EURO (approx £51.00) per year for the entire bundle.

There are also discounts available for bulk orders which can grow to as much as 40%. You can configure (and buy) your license using the [ZeXtras online configuration tool](https://web.archive.org/web/20160613074217/https://store.zextras.com/configure-license) – it’s extremely easy to use. Once you have your license, activating it only take a few seconds, and is also [very simple to do](https://web.archive.org/web/20160613074217/http://wiki.zextras.com/wiki/License_Management#How_to_activate_a_License).

## Conclusion

Overall, I’m finding [ZeXtras](https://web.archive.org/web/20160613074217/http://www.zextras.com/) to be a superb tool that’s cheap, easy to use, and does it’s job very, very well. If you’re looking for a way to protect your Zimbra deployment, or add extra features, like ActiveSync or extra admin abilities, then I can’t recommend ZeXtras highly enough.

I’ve had to use their community forums on a couple of occasions (more for general questions than support), and I’ve found the responses to be quick, helpful, and very useful. So not only is ZeXtras a great product, there’s a great support team behind it as well.

I hope you’ve found this ZeXtras review useful. As usual, feel free to leave your thoughts, comments, or questions below.