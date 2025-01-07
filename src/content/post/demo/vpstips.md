---
title: "VPS tips"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "1 Jan 2025"
tags: ["vps", "Docker"]
---


Docker
```
非大陆服务器
wget -qO- get.docker.com | bash
或
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
大陆服务器Docker安装
curl https://install.1panel.live/docker-install -o docker-install && sudo bash ./docker-install && rm -f ./docker-install
查看Docker版本
docker -v
开机自动启动
sudo systemctl enable docker
卸载Docker
sudo apt-get purge docker-ce docker-ce-cli containerd.io
sudo apt-get remove docker docker-engine
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
查看Docker Compose版本
docker compose version
```
SSH

将默认的22端口修改为11451
```
sudo sed -i 's/^#\?Port 22.*/Port 11451/g' /etc/ssh/sshd_config
重启sshd服务

sudo systemctl restart sshd
```
fail2ban

安装fail2ban
```
apt install fail2ban
```
配置fail2ban

fail2ban的配置文件通常位于 /etc/fail2ban/ 目录下，fail2ban的.conf配置文件都是可以被.local覆盖，所以配置方式建议是添加.local文件，不修改原来的配置文件。
```
nano /etc/fail2ban/jail.local
```
配置文件如下：
```
[DEFAULT]
#忽略的IP列表,不受设置限制（白名单）
ignoreip = 127.0.0.1

#允许ipv6
allowipv6 = auto

#日志修改检测机制（gamin、polling和auto这三种）
backend = systemd

#针对各服务的检查配置，如设置bantime、findtime、maxretry和全局冲突，服务优先级大于全局设置

[sshd]

#是否激活此项（true/false）
enabled = true

#过滤规则filter的名字，对应filter.d目录下的sshd.conf
filter = sshd

#ssh端口
port = ssh

#动作的相关参数
action = iptables[name=SSH, port=ssh, protocol=tcp]

#检测的系统的登陆日志文件
logpath = /var/log/secure

#屏蔽时间，单位：秒
bantime = 86400

#这个时间段内超过规定次数会被ban掉
findtime = 86400

#最大尝试次数
maxretry = 3
```

Ctrl+S保存并退出

设置开机自动启动fail2ban
```
sudo systemctl enable fail2ban
```
重新启动fail2ban
```
sudo systemctl restart fail2ban
```
查看fail2ban的状态
```
sudo systemctl status fail2ban
```
查看所有可用jail的状态
```
fail2ban-client status

```