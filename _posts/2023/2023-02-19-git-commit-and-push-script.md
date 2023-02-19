---
title: A Script to Automate Git Add, Commit & Push
description: I wanted a way to automate the git add, commit & push commands. Here's how I did it...
date: 2023-02-19T10:20:00.000Z
permalink:
typora-root-url: ../../
category:
  - Technology
  - Web
---

{: .tldr}
{{ page.description }}

Since learning [how to use Git](https://kevquirk.com/getting-started-with-git-a-simple-beginners-guide/), it has become an integral part of my workflow for things like publishing to this site, and updating [my various projects](https://kevquirk.com/projects), like [Simple.css](https://simplecss.org) and [That Watch Bloke](https://thatwatchbloke.com). However, pushing changes to a Git repository can get tedious, as it involves 3 commands. Every. Single. Time:

```
git add *
git commit -m "Your commit message..."
git push
```

I use [VSCodium](https://vscodium.com) to write code, which integrates with Git, making things easier. But I still wanted a way to automate the process of committing to my Git repositories without having to enter those 3 commands, over and over again.

Plus, if I'm writing a post (like this very one), I'm not in VSCodium. I'm typing the post in [Typora](https://typora.io); so being able to flip to the command line and enter a single command, would be great.

## BASH script

Since I use an [M1 Macbook Air](https://kevquirk.com/macbook-m1-4-month-update/), which is basically Unix under the hood, I can use good old BASH to do this. So I used the following script ([thanks to StackOverflow](https://stackoverflow.com/questions/8482843/git-commit-bash-script)):

```bash
#!/bin/bash
read -p "Commit message: " desc
git add . && \
git add -u && \
git commit -m "$desc" && \
git push
```

I then added the following line to my `.zshrc` file so I can call this script with a single command:

```
alias push=~/path/to/git-push.sh
```

{: .notice}
If running the script fails with permission issues, run `chmod +x git-push.sh` to give the script execution rights.

So now, whenever I'm in a Git repo within my command line, all I need to do is type the command `push`. My script will then be called, it will ask for a commit message, then push to the repo. All automatically.

Perfect. 👌
