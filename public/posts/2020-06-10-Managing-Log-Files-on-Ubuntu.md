# Managing Log Files on Ubuntu

*2020-06-10 by Calvin Huang* 

<picture>
    <source id="s1" srcset="/posts/images/Penguin_Admin.svg">
    <souce id="s2" srcset="images/Penguin_Admin.svg">
    <img width="100%" src="images/Penguin_Admin.svg" alt="" onerror="this.onerror=null;document.getElementById('s1').srcset=document.getElementById('s2').srcset=this.src;">
</picture>

Log files on Ubuntu can get bloated if left with the default configurations. You can run disk analysis tools such as QDirStat to get an overview of your log file sizes.

> Note: Although configurations can cause bloating, you should first check whether your system is generating large numbers of error messages in the log files. You can use `tail -50` <path_to_file> to check the last 50 lines of a file to see if repeated error messages are being generated. Common culprits include wifi/bluetooth drivers, BIOS settings, and Xsession errors.

## Table of Contents
- [Managing Log Files on Ubuntu](#managing-log-files-on-ubuntu)
  - [Table of Contents](#table-of-contents)
  - [How to change log configurations](#how-to-change-log-configurations)
    - [How to manage journals](#how-to-manage-journals)

## How to change log configurations

First, go to `/etc/logrotate.d`.

This directory contains configurations for the logrotate job (you can find the cron job that runs this in `/etc/cron.daily`). Here, you can set standard log configurations for how often and under what conditions logs will be rotated. The default settings store backlogs for 4 weeks, with the system allowing some logs to take up all but 15% of your `/var/log` space. 

The first change to make is in the `rsyslog` filez;

`sudo vim /etc/logrotate.d/rsyslog`

This contains configurations for files such as `kern.log` and `syslog`, which are common culprits for overuse of disk space.

To limit the size of log files, you can set the `maxsize` for each log file. This will trigger a rotation even before the specified schedule if a log file hits or exceeds a size. For example to set a log to rotate upon reaching 500 megabytes, we can set `maxsize 500M`. You can also decrease the `rotate` variable, which will rotate out the current log file quicker, but this should have little effect if `maxsize` is set correctly.

### How to manage journals

The journald management process is similar to logrotate, except that generated journals lack a rotation schedule, instead relying on space configurations. This configuration file can be accessed with the command:

`sudo vim /etc/systemd/journald.conf`

There are multiple variables here that should be uncommented and can affect journal sizes:

`Compress`- Set this to equal yes so old journals are automatically compressed before storing

`SystemMaxUse` - Set this to the max size you want journald to allow for journals (500M is more than enough as a limiter).

`SystemMaxFileSize` - Set this to the max size you want to limit individual journals to. This is less useful than `SystemMaxUse`, but can be configured for efficiency.

`RuntimeMaxUse` - Set this to the max space you want journald to use during system runtime. This is generally unneeded, but I set this as equal to `SystemMaxUse`.

`RuntimeMaxFileSize` - This can be useful to limit runtime bloating. However, if your journals are filling up quickly during runtime, you might have an error generating copious numbers of messages. I generally set this as equal to `SystemMaxFileSize`.

Other variables, such as `SystemKeepFree` and `SystemMaxFiles` also affect disk usage, but journald will take the lowest space limiter regardless, so setting one universal space limitation should be enough.