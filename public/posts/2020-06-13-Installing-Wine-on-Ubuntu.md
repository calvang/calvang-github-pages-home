# Installing Wine on Ubuntu

*2020-06-13 by Calvin Huang* 

<picture>
    <source id="s1" srcset="/posts/images/actualwine.jpg">
    <souce id="s2" srcset="images/actualwine.jpg">
    <img width="100%" src="images/actualwine.jpg" alt="" onerror="this.onerror=null;document.getElementById('s1').srcset=document.getElementById('s2').srcset=this.src;">
</picture>

## What is Wine?

Wine is a Windows compatibility layer for Linux, similar to the Windows Subsystem for Linux, except reversed. Wine allows us to execute Windows programs (.exe, .msi, etc...) as easily as on Windows. Wine also supports graphical integration, so you can open up Windows applications similarly to how you would with no disturbances to your workflow. The only downside is that Wine has difficulty interfacing with some hardware, like bluetooth, sometimes and cannot run *all* Windows software. But unless you're running certain resource-intensive applications or those that use specific Windows features, Wine can usually manage just fine.

## Installation

Remove any previous Winehq or Wine repos from previous versions. And then run the following:

`sudo dpkg --add-architecture i386` 

`wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -`

`sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main'`

`sudo apt-get update`

Choose one of the following packages:

Stable:

`sudo apt install --install-recommends winehq-stable`

Dev:

`sudo apt install --install-recommends winehq-devel`

Staging:

`sudo apt install --install-recommends winehq-staging`

If you're using Ubuntu, you will likely get dependency errors. Follow the dependencies and install. For stable, this is:

`sudo apt install -f libasound2-plugins:i386`

`sudo apt install -f wine-stable-i386=5.01~focal`

`sudo apt install -f wine-stable=5.01~focal`

`sudo apt install --install-recommends winehq-stable`

Congrats, now you can run most Windows applications natively in Linux!