---
id: 6163
title: How To Restore The Default PiHole Block List
date: 2021-07-14T21:55:50+01:00

layout: post
permalink: /how-to-restore-the-default-pihole-block-list/
description:
  - PiHole is a great application, but what if you go crazy with the block lists? This post show you how to restore the default PiHole block lists.
categories:
  - Privacy
  - Technology
---
<p class="medium">
  <a href="https://pi-hole.net/" target="_blank" rel="noreferrer noopener">PiHole</a> is awesome. I use it <a href="https://kevquirk.com/how-to-setup-pi-hole-on-a-synology-nas/" data-type="post" data-id="2780">on my Synology via Docker</a> and it&#8217;s been working great for years. But what if you get a little too trigger happy with the block list and end up with too many? In this post I&#8217;ll show you how to restore the default PiHole block list.
</p>

<p class="notice">
  <strong>Psst&#8230;</strong>if you're not interested in all my pre-waffle, <a href="#solution">click here</a> to skip to the solution.
</p>

The reason I'm writing this is because I've done this exact thing. I went bat shit crazy with PiHole block lists and ended up with over a quarter of a million domains blocked.

That sounds great in principle, right? **Woooh! No more ads!** Well, yeah, kinda. But it also had the undesired effect of constantly causing issues on my network.

I was finding that I had to regularly disable PiHole to troubleshoot connectivity issues. Shock horror, 90% of the time my ridiculously large block lists were to blame.

## Why restore the default PiHole block list?

I started using a number of additional PiHole block lists a few months ago, and since then I've noticed occasional connectivity issues when on my home network.

However, I've been using PiHole for a couple of years now and never had any issues when using the standard block list (which still has over 80k domains at the time of writing this).

![](/assets/images/pi-hole-dashboard.png)
*My PiHole dashboard*

I decided it was time to ditch all the additional block list and use the default PiHole block list alone. Problem is, **I had no idea which list was the default!**

Which is where this post comes in&#8230;I did some research and worked out which is the default list.

## Restoring the default PiHole block list {#solution}

The first thing you need to do, is login to your PiHole's dashboard, then navigate to **Group Management > Adlists**.

Once you're in the Adlists page, you should see a list of all the adlists you have added to your PiHole. It will look something like this:

![](/assets/images/pihole-adlists.png)

Now, you may have removed the default Adlist, or it may still be there, buried in the depths of your many block lists. **The default PiHole block list is as follows:**

```
https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts
```

All you need to do is look for this in the list, and delete everything else. If you removed the default list, just re-add it by pasting the URL above into the `Address` field on the Adlists page.

I would also recommend adding a comment to the default PiHole block list so you know which is the main one in the future. Once you're done, it should look something like this:

![](/assets/images/pihole-default-block-list.png) 

The final step is to update Gravity, which is the cumulative list of blocked domains. To do this, navigate to **Tools > Update Gravity**. Then click on the `Update` button.

PiHole should now parse the default block list and remove any domains that aren't on it.

That's it, you're done! Congratulations, you just restored the default PiHole block list. Not that difficult, is it?

## Final thoughts

I'm going to continue running the default PiHole block list on its own for a while to see if there continues to be connectivity issues on my network.

Once I'm happy, I'll probably add individual lists, one at a time, then re-test for a while. With a bit of luck, this will help me identify any problematic lists.

There are tonnes of block lists out there, but if you want a list of additional block lists in all kinds of categories, check out <a href="https://firebog.net/" target="_blank" rel="noreferrer noopener">The Firebog</a>.

**Are you using a million and one block lists with your PiHole? If so, are there any you would recommend?**
