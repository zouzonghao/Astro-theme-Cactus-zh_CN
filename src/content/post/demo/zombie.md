---
title: "Ubuntu搭建僵毁服务器"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "19 Nov 2024"
tags: ["Zombie", "Ubuntu"]
---

![](https://roim-picx-9nr.pages.dev/rest/tgMpjlK.jpeg)

## 1.安装lib32stdc++6来支持32bit程序

- 指令: sudo apt-get install lib32stdc++6

lib32stdc++6是C++标准库的一个32位版本，主要用于在64位的Ubuntu系统上运行需要32位 库支持的应用程序或软件。为什么要安装呢？因为linux系统的steam只有32位。

## 2.下载解压运行并登录steam

（如果一些命令没权限就在前面加一个sudo）

- cd /usr/local/ （切换到这个目录下）

- mkdir steamcmd （创建一个steamcmd 文件夹）

- cd steamcmd/ （切换到刚创建的steamcmd 文件夹）

- wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz （下载steamcmd）

- tar -zxvf steamcmd_linux.tar.gz （解压）

- ./steamcmd.sh（运行steamcmd）

安装完成后会有个 steam> 的符号,意味着已经进入了控制台版本的steam
下面是登录操作：
(假如我的账号是114514，密码是1919810）
则输入：

- login 114514 1919810

如果有steam令牌还需要输入steam令牌

## 3.下载僵尸毁灭工程

登录成功后输入：

- app_update 380870 validate

(有时候由于网络问题有可能一次下不完整，可以再输一遍命令）

下载完成后输入：

- exit

退出steamCMD

- 输入：tmux

进入tmux

(用tmux保一下进程)

然后输入：

- cd ~

再然后再输入 ：

- cd Steam/steamapps/common/

- cd Project\ Zomboid\ Dedicated\ Server/

最后再输入 :

- ./start-server.sh

启动服务器。

后面会要你设置一个僵毁服务器密码，需要输入两遍，请自行设置。

启动后如果无法连接到服务器那多半就是没开放端口，请在你购买的云服务器开放一下，这里以腾讯云为例

![](https://roim-picx-9nr.pages.dev/rest/ZxNpjlK.png)

## 4.如何进行更新操作：

- (1).启动steamcmd

- /usr/local/steamcmd/steamcmd.sh

- (2).登录

login 用户名 密码 令牌

- (3).更新

- app_update 380870 validate

## 5.如何添加模组：

先配置好一个服务器配置文件，例如：

![](https://roim-picx-9nr.pages.dev/rest/F6VpjlK.png)

默认保存在这个路径下：C:\Users\XXXX\Zomboid\Server，配置的时候也能看到路径 然后拿这个配置文件替换掉服务器的配置文件就行了,再次启动服务器会自己加载mod。
