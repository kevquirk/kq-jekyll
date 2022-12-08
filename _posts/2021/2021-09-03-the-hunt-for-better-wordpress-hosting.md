---
id: 7488
title: The Hunt For Better WordPress Hosting
date: 2021-09-03T16:44:46+01:00
author: Kev Quirk
layout: post
guid: https://kevq.uk/?p=7488
permalink: /the-hunt-for-better-wordpress-hosting/
image: /assets/images/wp-images/uploads/2021/09/wordpress-hosting-feature.png
categories:
  - Blogging
  - Web
---
<p class="tldr">
  I&#8217;ve recently been trying to improve my WordPress hosting workflow, and the related costs involved.<br />It hasn&#8217;t been a great success so far.
</p>

Before we get into the meat of the post, let me take a minute to set the scene here, dear reader. I have what I would consider a fairly complicated and expensive stack for a personal website such as this.

Here&#8217;s the details of the parts that make up my WordPress hosting stack and the associated annual cost:

<table>
  <tr>
    <th class="has-text-align-center" data-align="center">
      Line item
    </th>
    
    <th class="has-text-align-center" data-align="center">
      Annual price ($)
    </th>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      VPS hosting
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $105.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Yoast Premium
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $123.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Newsletter Glue
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $76.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      WP Rocket
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $49.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Updraft SFTP Plugin
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $16.50
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Bunny CDN
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $12.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
    </td>
    
    <td class="has-text-align-center" data-align="center">
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      <strong>Annual total:</strong>
    </td>
    
    <td class="has-text-align-center" data-align="center">
      <strong>$381.50</strong>
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      <strong>Monthly total:</strong>
    </td>
    
    <td class="has-text-align-center" data-align="center">
      <strong>$31.79</strong>
    </td>
  </tr>
</table> 

So all in, this site costs me approximately $380.00/year, or $30.00/month. That&#8217;s around £275.00/year, or £22.00/month for my fellow brits. 🇬🇧

What isn&#8217;t factored in here is my time. Since i use a self-hosted VPS with <a rel="noreferrer noopener" href="https://www.ionos.co.uk/servers/vps?ac=OM.UK.UKf11K357003T7073a&kwk=634887631" target="_blank">Ionos</a> (highly recommend them by the way) I have to maintain the OS and application stack. Maintenance is made **way** easier by running Plesk on the server, but it&#8217;s still an overhead nonetheless. 

I consider this stack to be very expensive for what basically equates to a hobby. Now I could get my WordPress hosting way cheaper, but as a result of my investment, I get a <a rel="noreferrer noopener" href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fkevq.uk" target="_blank">perfect lighthouse score</a>.

<img loading="lazy" width="705" height="215" src="/assets/images/wp-images/2021/09/perfect-lighthouse-score.png" alt="Perfect lighthouse score" class="wp-image-7524" srcset="/assets/images/wp-images/2021/09/perfect-lighthouse-score.png 705w, /assets/images/wp-images/2021/09/perfect-lighthouse-score-610x186.png 610w" sizes="(max-width: 705px) 100vw, 705px" /> *My perfect lighthouse score* 

I&#8217;m very fortunate to have a well paid job, but this is still a lot of money. **There had to be a better way&#8230;?**

## The hunt for WordPress hosting {#h-the-hunt-for-wordpress-hosting}

Recently I&#8217;ve been looking at Andy Bell&#8217;s most excellent <a rel="noreferrer noopener" href="https://piccalil.li/course/learn-eleventy-from-scratch/" target="_blank">learn Eleventy from scratch</a>; and I have to say, it had me seriously thinking about yet another switch in blogging platform.

But after a week or so of playing around with it in my spare time, it became apparent that it would be a time sink, just like <a href="https://kevq.uk/goodbye-wordpress-switched-to-jekyll/" data-type="post" data-id="4109">when I ran Jekyll previously</a> and ultimately <a href="https://kevq.uk/the-wonderful-world-of-wordpress-wizardry-for-working-with-websites/" data-type="post" data-id="4772">switched back to WordPress</a>.

I didn&#8217;t want to be in that same boat again, plus I love the WordPress writing workflow. Gutenberg is a joy to use and I&#8217;ve got my whole workflow down at this point.

So I started hunting for WordPress hosting that would continue to be performant, yet save me a few quid and hopefully, some time too.

## Managed WordPress hosting {#h-managed-wordpress-hosting}

I decided that managed WordPress hosting was probably a good way to go. As there&#8217;s no server, OS or application stack for me to manage. Plus, they often come pre-optmised so I can do away with WP Rocket and Bunny CDN.

### Cloudways {#h-cloudways}

My first attempt at managed WordPress hosting was <a href="https://www.cloudways.com/" target="_blank" rel="noreferrer noopener">Cloudways</a>, who are basically an intermediary between users and VPS providers, like Digital Ocean and Linode.

They build a VPS and manage all the stack automatically. It&#8217;s a great service and lighthouse tests show that it&#8217;s gets pretty much perfect scores too. My performance score dropped from 100, to around 97. So still very happy with that.

Because Cloudways servers are optmised out of the box, and use their free <a href="https://en-gb.wordpress.org/plugins/breeze/" target="_blank" rel="noreferrer noopener">Breeze plugin</a> for caching, I would no longer need a WP Rocket subscription. Having said that, they recommend a 2GB VPS, so their service would cost me $22/month.

That&#8217;s more than double the price of my current VPS. So anything I would save by ditching WP Rocket would be off-set by the hosting charges. Therefore, in the long run I&#8217;d be around $100 **worse** off every year:

<table>
  <tr>
    <th class="has-text-align-center" data-align="center">
      Line item
    </th>
    
    <th class="has-text-align-center" data-align="center">
      Annual price ($)
    </th>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Cloudways hosting
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $264.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Yoast Premium
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $123
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Newsletter Glue
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $76.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      WP Rocket
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $0
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Updraft SFTP Plugin
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $16.50
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      Bunny CDN
    </td>
    
    <td class="has-text-align-center" data-align="center">
      $12.00
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
    </td>
    
    <td class="has-text-align-center" data-align="center">
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      <strong>Annual total:</strong>
    </td>
    
    <td class="has-text-align-center" data-align="center">
      <strong>$491.50</strong>
    </td>
  </tr>
  
  <tr>
    <td class="has-text-align-center" data-align="center">
      <strong>Monthly total:</strong>
    </td>
    
    <td class="has-text-align-center" data-align="center">
      <strong>$40.96</strong>
    </td>
  </tr>
</table> 

### EasyWP

Cloudways was great, but too expensive. So next up I decided to try <a href="https://www.shareasale.com/m-pr.cfm?merchantID=46483&userID=2420767&productID=964069415" target="_blank" rel="noreferrer noopener">EasyWP by Namecheap</a>. I had used them in the past and seemed to remember them being pretty good.

I signed up for the **Turbo** account as the site said it had more resources, plus SSL and CDN services thrown in. All this for around $35/year (first year is discounted by 50% so full price is $70/year) &#8211; almost too good to be true!

<img loading="lazy" width="1077" height="756" src="/assets/images/wp-images/2021/09/easywp-pricing.png" alt="EasyWP pricing" class="wp-image-7527" srcset="/assets/images/wp-images/2021/09/easywp-pricing.png 1077w, /assets/images/wp-images/2021/09/easywp-pricing-610x428.png 610w, /assets/images/wp-images/2021/09/easywp-pricing-768x539.png 768w" sizes="(max-width: 1077px) 100vw, 1077px" />  

<blockquote class="wp-block-quote">
  <p>
    If something looks too good to be true, it usually is.
  </p>
  
  <cite>A very wise person.</cite>
</blockquote>

I was surprised that a free SSL certificated is touted as a selling point these days, with services like Let&#8217;s Encrypt being commonplace these days. Anyway, what I was really looking for here was the performance and CDN combination.

I set everything up and migrated my site over to EasyWP using a temporary domain, but I had no option to claim my free SSL certificate. I contacted support, only to find that there was a prerequisite where the domain in use had to be managed by Namecheap.

Namecheap is my domain registrar, but I use <a href="https://www.cloudns.net/aff/id/74311/" target="_blank" rel="noreferrer noopener">ClouDNS</a> for all my DNS services. So I begrudgingly changed the Name Servers back to Namecheap so I could setup the SSL certificate.

### Limping along {#h-limping-along}

I could now claim my free SSL, but found that this would take _&#8220;a few hours&#8221;_ to process. Considering Let&#8217;s Encrypt takes less than a minute to provision, this surprised me. Anyway, 3 hours later I had my SSL working &#8211; time to get the CDN sorted.

After reading Namecheap&#8217;s <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/10191/2251/how-to-setup-supersonic-cdn-with-easywp/" target="_blank" rel="noreferrer noopener">how to guide</a> on setting up the CDN with EasyWP, it quickly became apparent than the CDN offering was a basic one that needed to be upgraded for anything over 50GB of traffic/month.

This site uses way less than 50GB of traffic/month, so not the end of the world. But I felt like it was a poor show from Namecheap that their CDN offering was Billy basic.

After setting it all up, I had issues with caching and not being able to clear it. I spoke to support and they manually cleared the cache for me, but they couldn&#8217;t fix the issue. So they logged a ticket with L2 to have the problem sorted long-term.

Finally I was limping along, but all these little niggles left a bad taste in my mouth. I did a lighthouse test and it returned scores of mid-80s for performance, and my best practices score was somewhere in the high 70s.

It seems the EasyWP caching isn&#8217;t as good as that of WP Rocket or Cloudways. So after all that work, my performance had dropped fairly significantly.

The WordPress dashboard was where I **really** noticed the reduced performance. On my current server and on Cloudways, the `wp-admin` dashboard was snappy and responsive, but on EasyWP is felt bloated and lethargic for some reason.

I had lost a fair amount of time, and saved little money. So I decided to ditch EasyWP too.

## What now? {#h-what-now}

Well, I&#8217;m back on my original setup and nothing has changed. Performance is still great, but my fairly significant financial outlay remains.

There&#8217;s a fair amount of time left on my various contracts with my hosting provider and plugins, so I can afford some time to think about what I&#8217;m going to do long-term. But at the moment, I feel like the best WordPress hosting solution for me is&#8230;_drumroll please_&#8230;**what I have now!** 🤦‍♂️

To save some some cash, I don&#8217;t think I&#8217;ll renew my Yoast Premium subscription. I&#8217;ve used their free plugin for years, and wanted to contribute back to the project, but the only Premium feature I use are redirects which can be easily achieved using `.htaccess`.

That&#8217;s a total saving of $123/year over what I have now. So it&#8217;s certainly something. I don&#8217;t know, this whole thing is a minefield; but I still have plenty of time to decide what I&#8217;m going to do with my WordPress hosting.<section class="wp-block-newsletterglue-group"> 

**In the meantime, if you have any recommendations as to what I should do, please use the reply button below to send me an email.**</section>