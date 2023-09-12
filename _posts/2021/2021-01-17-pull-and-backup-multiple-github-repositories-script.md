---
id: 4296
title: 'Pull &#038; Backup Multiple GitHub Repositories With This Script'
date: 2021-01-17T19:06:00+00:00

layout: post
permalink: /pull-and-backup-multiple-github-repositories-script/
description:
  - This is a simple script I created to pull multiple GitHub repositories and back them up so that they're protected.
categories:
  - Web
---
A while back [I confessed that I have no idea how to use Git](/confession-i-have-no-idea-how-to-use-git/), but since then I&#8217;ve done a lot of work to learn Git and it&#8217;s now become a crucial part of my workflow. So much so that I now have a number of GitHub repositories on my machines that I use for various projects that I&#8217;m involved in.

However, having multiple GitHub repositories to manage can be a bit of a pain. Especially when you do some work on a project, only to find that you&#8217;re working on an old version when you come to do a `git push`.

Git versioning is really useful, and being able to clone my projects in multiple places usually means that my data is pretty safe. However, after [nearly losing all my data](/i-nearly-lost-all-of-my-data/), I now make sure that I follow the 3-2-1 backup rule for all my data.

<blockquote class="wp-block-quote">
  <p>
    At least 3 copies of your data, on 2 different storage media, 1 of which needs to be off-site.
  </p>

  <p>
    – The 3-2-1 backup rule
  </p>
</blockquote>

## The problem {#h-the-problem}

So Git is brilliant, but I wanted a way to pull multiple repositories in one go **and** create a backup of that data too.

My first attempt was to basically have my GitHub folder (which contains all my repositories) stored in my `SynologyDrive` folder, which then syncs to my Synology automatically.

This worked really well for the most part, but every now and again the `.git` folder would have collisions between machines and go all wonky. Not ideal, I think you will agree. It also didn&#8217;t solve the problem of pulling multiple repositories in one go.

## The solution &#8211; a Git pull & backup script {#h-the-solution-a-git-pull-backup-script}

So I decided to go down the scripting route to achieve what I wanted and I have to say, I&#8217;m really happy with the results. It&#8217;s a **very** simple script, but it has become a crucial part of my workflow.

All the script really does is `cd` into every repository folder, run a `git pull`, the `cd` back into the parent folder, compress everything with a filename of the current date and time, then move that archive into my `SynologyDrive` folder so it&#8217;s synced up to my Synology. The archive is then backed up to multiple locations from my Synology.

So then, let&#8217;s take a look at the script:

<pre class="wp-block-code"><code>#!/bin/sh

# Pull the latest from all repos on your machine, then run a backup.
cd ~/GitHub/

cd repo1/
echo "Pulling repo 1"
git pull
cd ..

cd repo2/
echo "Pulling repo 2"
git pull
cd ..

cd repo3/
echo "Pulling repo 3"
git pull
cd ..

# Compress everthing in this folder except for .git stuff and generated Jekyll _site
echo "Running a backup"
tar --exclude='*/.git' --exclude='*/_site' -zcf "$(date '+%Y-%m-%d-%H%M').tar.gz" *

# Move the archive to the Synology Drive folder
mv *.tar.gz ~/SynologyDrive/GitHub-Backups
echo "Backup complete"</code></pre>

<p class="notice">
  If you want to use this script, be sure to edit the paths and repository names to ones that are applicable to your system.
</p>

Now save that file somewhere that makes sense to you. I personally save it in my `SynologyDrive` folder as `git-pull.sh` so it&#8217;s always available on my machines. The last thing to do is make the file executable. You can do this by right clicking on it, selecting **Properties** > **Permissions** and selecting the checkbox that says **Allow executing file as program**.

Alternatively you can run this command from the terminal:

<pre class="wp-block-code"><code>chmod +x git-pull.sh</code></pre>

That&#8217;s literally it. Super simple, huh? The output of this script is a single `.tar.gz` called `<date>-<time>.tar.gz`. So if I run the script at 13:30 on 14th Jan 2021, the file would be called `2021-01-14-1330.tar.gz`.

## Making it simple to run {#h-making-it-simple-to-run}

Now I had the script, I wanted a really simple way of running it, so I opted for a `bash_alias` to do this. If you don&#8217;t know, a `bash_alias` is basically a shortcut command within the terminal. So you run a command like `pull` in the terminal, and the alias knows to run the script we created above.

### Creating a `bash_alias` {#h-creating-a-bash_alias}

There a couple of ways to create an alias in bash. The easiest way is from the command line with the following command:

<pre class="wp-block-code"><code>alias pull="/path/to/the/script/git-pull.sh"</code></pre>

This will add an entry in your `.bash_aliases` file within your home folder. Once this alias is in place, all we need to do then is open a terminal and run the `pull` command. The alias will then invoke the GitHub pull/backup script. It doesn&#8217;t matter what directory we&#8217;re in as we call the full path in the alias command.

## Conclusion {#h-conclusion}

There may well be better ways of pulling and backing up multiple GitHub repositories in one go, but this solution works well for me. You could even go one step further and set your machine to run the `pull` command on startup. I don&#8217;t do that though, as I prefer to run it manually.

At some point, I may add further logic to the script that deletes backups older than a certain amount of days. If I get around to doing that, I&#8217;ll be sure to update this post.

If you have a better way to pull and backup multiple GitHub repositories, feel free to [let me know](/contact).

Until next time, folks. Kev, out.
