---
title: 'How To Check If You Are Vulnerable To Bash Shellshock'
date: '2014-09-27T11:28:00+01:00'
layout: post
permalink: /how-to-check-if-you-are-vulnerable-to-bash-shellshock/
categories:
    - Security
---

**Over the last few days, it has come to light that there is a large vulnerability in the widely used command line shell, Bash. This vulnerability has been dubbed “Shellshock”, if you want to know how to check if you are vulnerable to Bash Shellshock, then read on…**

This vulnerability was discovered on 24th September 2014, and it allows would be attackers to execute code remotely, given certain conditions. It does this by passing strings of code following environment variable assignments. Since bash is extremely common on machines running Linux, BSD, and Mac OS X, many computers are affected by Shellshock.

**All un-patched versions of Bash from version 1.14 to 4.3 are affected (basically everything until this latest release).**

The Shellshock vulnerability can be exploited on systems that are running services or applications that allow unauthorised remote users to assign Bash environment variables. Examples of exploitable systems include the following:

- Apache HTTP Servers that use CGI scripts (via *mod\_cgi* and *mod\_cgid*) that are written in Bash or launch to Bash sub-shells.
- Certain DHCP clients.
- Certain OpenSSH servers that use the *ForceCommand* capability.
- Various network exposed services that use Bash.

A detailed description of the bug can be found at [CVE-2014-6271](https://web.archive.org/web/20150215193518/http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271) and [CVE-2014-7169](https://web.archive.org/web/20150215193518/http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7169).

Because the Bash Shellshock vulnerability is so wide-spread (even more so than the recent OpenSSH Heartbleed bug), not to mention *extremely* easy to exploit – I’d recommend that you properly update ans affected system(s) ASAP, in order to mitigate any possible attacks.

## How do I know if I’m vulnerable?

It’s very simply to find out if you are vulnerable to the Shellshock bug. As mentioned before, it mainly affects Linux, BSD, and Mac OS X systems. But if you’re running a Windows system that uses Cygwin, then you may well be affected also.

First of all, connect to an SSH session of any suspect device (or command line via the console). Enter the Bash shell, and type in the following command:

***env VAR='() { :;}; echo Bash is vulnerable!’ bash -c “echo Bash Test”***

The “***echo Bash is vulnerable!**”* part of the command represents where a remote attacker would add malicious; arbitrary code following a function definition within an environment variable assignment. **Therefore, if you see the following output, your version of Bash is vulnerable and should be updated:**

***Bash is vulnerable!  
Bash Test***

However, if your output does not include the simulated attacker’s payload, i.e. “*Bash is vulnerable*” is not printed as output, your version of bash is not vulnerable. It would look something like this:

***bash: warning: VAR: ignoring function definition attempt  
bash: error importing function definition for `VAR’  
Bash Test***

There is also [this online tool](https://web.archive.org/web/20150215193518/http://shellshock.brandonpotter.com/) which allows administrators to test websites, or specific CGI scripts.

## I’m vulnerable how do I fix it?

Simple. Update your machine(s) ASAP (note: this *will* require a reboot). Most vendors have already released a patch and placed it in their respective repositories, so running a system update should pull down the patched update for Bash.

**On Ubuntu/Debian bases systems:**

`sudo apt-get update && sudo apt-get install –only-upgrade bash`

**On YUM (Fedora, CentOS, RedHat) based systems:**

`sudo yum update bash`

## Conclusion

The Shellshock vulnerability is a particularly nasty one, that is **very** easy to exploit. Anyone with even basic Bash skills can exploit this vulnerability. So please make sure you patch all of your affected machine(s) **as soon as possible.**