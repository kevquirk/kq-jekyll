---
title: How To Setup A Nextcloud Server In Ubuntu
layout: post
permalink: /how-to-setup-a-nextcloud-server-in-ubuntu/
categories:
  - De-Googling
  - Technology
---
If you’re a regular reader of this blog, you will know that [I recently built a Nextcloud server](/my-home-server-2-months-on) at home after [I nearly lost all of my data](/i-nearly-lost-all-of-my-data). I’ve learned a lot about Nextcloud since the build, so thought I’d write a setup guide.

## Prerequisites {#h-prerequisites}

This guide assumes a certain level of technical ability. If you are not comfortable administering your own server, then I would suggest you pay someone else to host your Nextcloud server. I can personally recommend [OwnCube](https://owncube.com).

As well as some technical knowledge, you will also need access to a LEMP server (Linux, Nginx, MariaDB & PHP). If you don’t have one, I’d recommend [this guide by LinuxBabe](https://www.linuxbabe.com/ubuntu/install-lemp-stack-nginx-mariadb-php7-2-ubuntu-18-04-lts).

<p class="notice">
  You do NOT need to install the LEMP stack if you intend to use the Nextcloud snap package.
</p>

Finally, you will need a domain name, or sub-domain, that has the A record pointing to your Nextcloud server’s public IP.

## Snaps – The Simple Method {#h-snaps-the-simple-method}

If you don’t want to install LEMP and Nextcloud manually, you can opt for the simple method, which is the [snap package](https://snapcraft.io/nextcloud).

The snap package is basically a Nextcloud server all bundled up in a nice little bucket that’s ready to go. However, you may have some issues later on when it comes to backing up your data. This is because snap packages are segregated from the rest of the OS, so your user account will not have access to the Nextcloud data by default.

If you want to get your Nextcloud server up and running quickly, with very little ongoing admin, then the snap package is worth considering. The snap will also update automatically as new versions are released.

You will also need to configure Let’s Encrypt to ensure that your Nextcloud server is using HTTPS, and therefore protecting your credentials (among other things) when logging in.

If you’re interested, this is [why HTTPS is important](/why-https-is-important).

To install the Nextcloud snap and configure Let’s Encrypt, you will need to run the following commands:

```
sudo snap install nextcloud

# Enable HTTPS via Let's Encrypt
sudo nextcloud.enable-https lets-encrypt

# Add your domain to the trusted domains
sudo snap run nextcloud.occ config:system:set trusted_domains 1 --value=nextcloud.domain.com

# Restart the snap to apply the changes
sudo snap restart nextcloud
```

<p class="notice">
  Remember to update <code>nextcloud.domain.com</code> to reflect your own domain.
</p>

The snap package is a quick and easy way to getting Nextcloud up and running, but I wanted more control. So let’s take a look at how we install and configure Nextcloud manually.

## Nextcloud Server Manual Installation {#h-nextcloud-server-manual-installation}

The first thing we need to do is get the download link for the Nextcloud server package. At the time of writing this guide, the latest version of Nextcloud is 16.0.1.

![](/assets/images/nextcloud-server-download-page.jpg)

Go to [this link](https://nextcloud.com/install/#instructions-server), right click on the blue **_Download_** button and select **_Copy link location_**. Then let’s head to our server and start work:

```
get https://download.nextcloud.com/server/releases/nextcloud-16.0.1.zip

# Install unzip and extract the Nextcloud package
sudo apt-get install unzip
sudo unzip nextcloud-16.0.1.zip -d /usr/share/nginx/
```

The Nginx user (www-data) needs to be given ownership of the Nextcloud directory, and everything within it, so Nginx can write to the Nextcloud folder:

```
sudo chown www-data:www-data /usr/share/nginx/nextcloud/ -R
```

## Setup A Database (MariaDB) {#h-setup-a-database-mariadb}

Nextcloud requires a database to store administrative data. I personally went with MariaDB, which is a fork of MySQL.

```
# Connect to MariaDB server
sudo mariadb

# Create a database & user
create database nextcloud;
create user nextclouduser@localhost identified by 'some-password';

# Grant the user all privileges to the Nextcloud database
grant all privileges on nextcloud.* to nextclouduser@localhost identified by 'some-password';

# Flush privileges and exit
flush privileges;
exit;
```

## Configure Nginx {#h-configure-nginx}

At this point, we have the Nextcloud files copied over and a database ready and waiting. It’s now time to configure Nginx so Nextcloud actually works.

Let’s start by creating a Nextcloud config file, so Nginx knows what to do with requests that are destined for our Nextcloud URL.

```
sudo nano /etc/nginx/conf.d/nextcloud.conf
```

Now paste the following into the file, editing the domain name and Nextcloud folder path as needed. If you don’t know how to use Nano, [this link might help](https://linux.die.net/man/1/nano).

```
server {
    listen 80;
    server_name nextcloud.domain.com;

# Add security related headers
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header X-Download-Options noopen;
    add_header X-Permitted-Cross-Domain-Policies none;

# Path to your Nextcloud folder - can be optionally changed
    root /usr/share/nginx/nextcloud/;

    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }

# Card and Cal DAV redirects
    location = /.well-known/carddav {
        return 301 $scheme://$host/remote.php/dav;
    }
    location = /.well-known/caldav {
       return 301 $scheme://$host/remote.php/dav;
    }

# For Let's Encrypt challenges
    location ~ /.well-known/acme-challenge {
      allow all;
    }

# Disable gzip
    gzip off;

# Specify paths to error pages
    error_page 403 /core/templates/403.php;
    error_page 404 /core/templates/404.php;

# Redirect bare domain to the index.php file
    location / {
       rewrite ^ /index.php$uri;
    }

# Block some stuff because, you know, bad guys
    location ~ ^/(?:build|tests|config|lib|3rdparty|templates|data)/ {
       deny all;
    }
    location ~ ^/(?:\.|autotest|occ|issue|indie|db_|console) {
       deny all;
     }

# Here be FastCGI dragons
    location ~ ^/(?:index|remote|public|cron|core/ajax/update|status|ocs/v&#91;12]|updater/.+|ocs-provider/.+|core/templates/40&#91;34])\.php(?:$|/) {
       include fastcgi_params;
       fastcgi_split_path_info ^(.+\.php)(/.*)$;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       fastcgi_param PATH_INFO $fastcgi_path_info;

# Avoid sending the security headers twice
       fastcgi_param modHeadersAvailable true;
       fastcgi_param front_controller_active true;
       fastcgi_pass unix:/run/php/php7.2-fpm.sock;
       fastcgi_intercept_errors on;
       fastcgi_request_buffering off;
    }

    location ~ ^/(?:updater|ocs-provider)(?:$|/) {
       try_files $uri/ =404;
       index index.php;
    }

# Let's cache all the things
    location ~* \.(?:css|js)$ {
        try_files $uri /index.php$uri$is_args$args;
        add_header Cache-Control "public, max-age=7200";

# More security related headers (these are supposed to be duplicates of the ones above)
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Robots-Tag none;
        add_header X-Download-Options noopen;
        add_header X-Permitted-Cross-Domain-Policies none;
# Don't log access to assets (optional)
        access_log off;
   }

   location ~* \.(?:svg|gif|png|html|ttf|woff|ico|jpg|jpeg)$ {
        try_files $uri /index.php$uri$is_args$args;
# Don't log access to assets (optional)
        access_log off;
   }
}
```

Test the Nginx config to ensure the new config will work as expected. We should see a `test is successful` message.

```
sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

# Config is fine, restart Nginx to apply the config
sudo systemctl reload nginx
```

The final step of the installation process is to install all of the PHP modules we will need for our Nextcloud server:

```
sudo apt-get install php-imagick php7.2-common php7.2-gd php7.2-json php7.2-curl  php7.2-zip php7.2-xml php7.2-mbstring php7.2-bz2 php7.2-intl
```

At this point, everything is installed and we should be able to navigate to our Nextcloud URL:

![](/assets/images/nextcloud-home-1.jpg)

<p class="notice-red">
  DO NOT configure anything at this point, as the connection is currently insecure.
</p>

## Configure Let’s Encrypt {#h-configure-let-s-encrypt}

Now we have Nextcloud running, it’s time to secure it with a TLS certificate. We will do this using Let’s Encrypt.

```
# Install Let's Encrypt certbot and the required Nginx plugin
sudo apt-get install certbot python3-certbot-nginx

# Generate the certificate
sudo certbot --nginx --agree-tos --redirect --hsts --staple-ocsp --email your@email.com -d nextcloud.domain.com
```

Once the certificate has been generated, you will get a warning that says *we were unable to set up enhancement ensure-http-header for your server, however, we successfully installed your certificate.*

Don’t worry, this is normal and expected behaviour when installing a Let’s Encrypt certificate with Nginx. Let’s fix that by heading back to our Nginx configuration:

```
sudo nano /etc/nginx/conf.d/nextcloud.conf
```

We need to tell Nginx to use the Let’s Encrypt certificates, redirect HTTP requests to HTTPS, and add the HSTS header configuration. So let’s change the Nginx config from this:

```
server {
    listen 80;
    server_name nextcloud.domain.com;

# Add security related headers
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header X-Download-Options noopen;
    add_header X-Permitted-Cross-Domain-Policies none;

**** REST OF THE CONFIG ****
```

To this:

```
server {
    listen 80;
    server_name nextcloud.domain.com;
    return 301 https://nextcloud.domain.com$request_uri;
}

server {
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/nextcloud.domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nextcloud.domain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

# Add security related headers
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header X-Download-Options noopen;
    add_header X-Permitted-Cross-Domain-Policies none;

**** REST OF THE CONFIG ****
```

Let’s test the Nginx configuration again and restart Nginx to apply the changes:

```
sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

sudo systemctl reload nginx
```

Back to the browser window and hit the refresh button, we should be redirected to HTTPS and see a valid certificate. Life is good!

![](/assets/images/nextcloud-home-https.jpg)  

## Setup A Data Folder {#h-setup-a-data-folder}

Our Nextcloud server is now more secure, so we can configure the admin account and database. I would recommend changing the Nextcloud data folder, so that our user’s personal data is stored separately from the Nextcloud admin data.

In the example below I called the data folder `ncdata`, but you can call it whatever you want.

```
sudo mkdir /usr/share/nginx/ncdata

# Make Nginx user the owner of the folder
sudo chown www-data:www-data /usr/share/nginx/ncdata -R
```

Whichever path you created and specified above, make sure you put that in the `data folder` field on the Nextcloud setup page. We also need to enter the database name, user and password that we created earlier.

![](/assets/images/nextcloud-home-config.jpg)  

Once we have entered the admin credentials, data folder path and the database details, we hit the finish button, and hey presto! We’re presented with Nextcloud interface complete with files. Life is getting better!

{: .medium}
Congratulations, you have just setup and configured your very own Nextcloud server!

![](/assets/images/nextcloud-home-logged-in.jpg)

## Next Steps {#h-next-steps}

You though we were all done? Nope, there’s more for us to do yet, but we’re nearly there. I promise.

Take this opportunity to have a click around and familiarise yourself with Nextcloud. Once you have done that, click on your avatar (top right corner) and select settings.

From the settings screen, go to `Administration > Overview` from the right-hand pane. In the overview pane there are likely to be a few warnings in orange text. Let’s fix them, shall we?

## Warning 1: PHP not setup properly {#h-warning-1-php-not-setup-properly}

***PHP does not seem to be setup properly to query system environment variables. The test with getenv(“PATH”) only returns an empty response. Please check the installation documentation for PHP configuration notes and the PHP configuration of your server, especially when using php-fpm.***

The solution to this is to enable some environment variables within PHP’s `www.conf` file.

```
sudo nano /etc/php/7.2/fpm/pool.d/www.conf
```

Now look for the section of the file shown in the code below and remove the preceding semicolon from all the lines.

```
;env&#91;HOSTNAME] = $HOSTNAME
;env&#91;PATH] = /usr/local/bin:/usr/bin:/bin
;env&#91;TMP] = /tmp
;env&#91;TMPDIR] = /tmp
;env&#91;TEMP] = /tmp
```

Save the file and restart PHP:

```
sudo systemctl reload php7.2-fpm.service
```

## Warning 2: Small PHP memory limit {#h-warning-2-small-php-memory-limit}

***The PHP memory limit is below the recommended value of 512MB.***

To fix this we need to edit the &#8216;php.ini' file to increase the maximum amount of memory that the PHP process can consume. While we’re there, we might as well increase the maximum upload limit too.

```
sudo nano /etc/php/7.2/fpm/php.ini
```

Now look for the following values within the php.ini file and change them as needed. You can increase the PHP memory limit above 512MB if you wish.

On my production server, I have the PHP memory limit set to 1GB, as my server has 4GB RAM.

```
# Default is 128M
memory_limit = 512M

# Default is 2M
upload_max_filesize = 100M

# Restart PHP service again
sudo systemctl reload php7.2-fpm.service
```

Restart PHP again to apply the new settings and head back to the admin overview screen. Hit refresh and hey presto! Two of the warnings are already gone. Life is getting better all the time!

## Warning 3: MySQL 4-byte characters {#h-warning-3-mysql-4-byte-characters}

***MySQL is used as database but does not support 4-byte characters. To be able to handle 4-byte characters (like emojis) without issues in filenames or comments for example it is recommended to enable the 4-byte support in MySQL. For further details read the documentation page about this.***

The final error that we need to resolve is to enable 4-byte character support. We can do this by using Nextcloud’s command line utility, occ. Run the commands below to enable 4-byte support.

```
cd /usr/share/nginx/nextcloud
sudo -u www-data php occ config:system:set mysql.utf8mb4 --type boolean --value="true"
sudo -u www-data php occ maintenance:repair
sudo -u www-data php occ maintenance:mode --off
```

Refresh the admin overview screen again and we see that all the warnings are cleared. There may be other warnings about caching and referrer policies, but these are nothing to worry about really.

You can configure memcache on your Nextcloud server if you wish, but it’s really not required if your Nextcloud server is designed for personal/family use.

If you notice poor server performance, then you can read about how to enable caching, among other things, in the [Nextcloud documentation](https://docs.nextcloud.com/server/16/admin_manual/installation/server_tuning.html).

## Security {#h-security}

Security is hugely important (duh!), especially since your Nextcloud server is likely to be available on the Internet. Luckily, Nextcloud have provided a [scan utility](https://scan.nextcloud.com/) that will check our Nextcloud server and provide a security rating.

The scoring is graded as follows:

  * **E** = This server is vulnerable to at least one vulnerability rated “high”. It is likely quite easy to break in and steal data or even take over the server.
  * **D** = This server is vulnerable to at least one vulnerability rated “medium”. With bit of effort, like creating a specially crafted URL and luring a user there, an attacker can likely steal data or even take over the server.
  * **C** = This server is vulnerable to at least one vulnerability rated “low”. This might or might not provide a way in for an attacker and will likely need some additional vulnerabilities to be exploited.
  * **A** = This server has no known vulnerabilities but there are additional hardening capabilities available in newer versions making it harder for an attacker to exploit unknown vulnerabilities to break in.
  * **A+** = This server is up to date, well configured and has industry leading hardening features applied, making it harder for an attacker to exploit unknown vulnerabilities to break in.

As you can see, our server gets an A+, so we know we’re pretty secure. Life is really good!

![](/assets/images/nextcloud-security-scan.jpg)

## That’s It {#h-that-s-it}

If you have made it this far you should now have a secure and private Nextcloud server. Congratulations, you no longer need to rely on services like Dropbox, Google or Microsoft.

From here, I would suggest taking a look at the many apps that Nextcloud has to offer. You can do some awesome stuff like:

  * Add contacts, calendar and mail
  * Add a password manager
  * Sync your bookmarks
  * Sync your phone’s data (Android & iOS)
  * Add an RSS reader
  * And many, many more

I hope this Nextcloud server setup guide was helpful. Who knows, maybe you will be able to start taking control of your privacy and start [de-Googling](/categories/de-googling), just like I did.
