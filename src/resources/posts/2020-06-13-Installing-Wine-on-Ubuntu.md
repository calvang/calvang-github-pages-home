# Installing Wine on Ubuntu

Remove any previous Winehq or Wine repos from previous versions.

```
sudo dpkg --add-architecture i386 
wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main'
sudo apt-get update
```

Choose one of the following packages:

Stable:

```
sudo apt install --install-recommends winehq-stable
```

Dev:

```
sudo apt install --install-recommends winehq-devel
```

Staging:

```
sudo apt install --install-recommends winehq-staging
```

If you're using Ubuntu, you will likely get dependency errors. Follow the dependencies and install. For stable, this is:

```
sudo apt install -f libasound2-plugins:i386
sudo apt install -f wine-stable-i386=5.01~focal
sudo apt install -f wine-stable=5.01~focal
sudo apt install --install-recommends winehq-stable
```

