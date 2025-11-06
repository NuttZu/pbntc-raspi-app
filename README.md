## **PBNTC GUI APP**

it's about travel landmark in Phetchabun

## **How to install?**

## **Windows**

Download [This file](https://github.com/NuttZu/pbntc-raspi-app/releases/download/official-release/pbntc-raspi-app-win32-x64.zip) and extract it then double click ***pbntc-raspi-app.exe***
	

## **Ubuntu & Debian & Raspberry pi**

Download [This file](https://github.com/NuttZu/pbntc-raspi-app/releases/download/official-release/pbntc-raspi-app_1.0.0_arm64.deb)	or you can download from terminal

Option 1 : wget

    wget -O pbntc-raspi-app_1.0.0_arm64.deb \
    https://github.com/NuttZu/pbntc-raspi-app/releases/download/official-release/pbntc-raspi-app_1.0.0_arm64.deb

Option 2 : curl

    curl -L -o pbntc-raspi-app_1.0.0_arm64.deb \
    https://github.com/NuttZu/pbntc-raspi-app/releases/download/official-release/pbntc-raspi-app_1.0.0_arm64.deb

Then install it

    sudo apt install pbntc-raspi-app_1.0.0_arm64.deb

*then you can remove the **.deb** file*

and you can run the app by type :

    pbntc-raspi-app

## **How to uninstall?**
for **Windows** you can just remove the directory

for **Linux** you can remove like this

    sudo apt remove pbntc-raspi-app

## How to make it run on boot? (for linux)

you can do like this :

**first you need to find where is the app path**
by type :

    which pbntc-raspi-app
you will get something like this :

> /usr/bin/pbntc-raspi-app

**then you need to know your user name**
by type :

    whoami

you will get your user name like this :

> admin

**then make service script**

    sudo nano /etc/systemd/system/pbntc-raspi-app.service

then place this :

    [Unit]
    Description=PBNTC Raspi App (run once after boot)
    After=network.target
    
    [Service]
    Type=oneshot
    
    ## change this to your app path
    ExecStart=/usr/bin/pbntc-raspi-app
    
    WorkingDirectory=/usr/share/pbntc-raspi-app
    
    ## change these to your user name
    User=admin
    Group=admin

    RemainAfterExit=no
    
    [Install]
    WantedBy=multi-user.target

then press **Ctrl + Y** and press **Enter**

**Then Reload and re-enable service**
by type :

    sudo systemctl daemon-reload
    sudo systemctl enable pbntc-raspi-app.service
    sudo systemctl restart pbntc-raspi-app.service

**if you want to stop it form run on boot.**
you can just delete service file by type :

    sudo rm -rf /etc/systemd/system/pbntc-raspi-app.service
