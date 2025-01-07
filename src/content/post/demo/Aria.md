---
title: "Aria2离线下载"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "10 Dec 2024"
tags: ["Aria2"]
---

# 一、Docker安装Aria2
## 1、使用拉取aria2镜像

```
docker pull p3terx/aria2-pro
```
## 2、启动容器
```
docker run -d \
--name aria2 \
--restart unless-stopped \
--log-opt max-size=1m \
-e PUID=$UID \
-e PGID=$GID \
-e UMASK_SET=022 \
-e RPC_SECRET=prc_password \  #密钥
-e RPC_PORT=6800 \ #设置PRC通讯端口（与宿主主机的端口映射一致）
-e LISTEN_PORT=6888 \ # 监听端口
-p 16800:6800 \ #为RPC 通讯端口映射
-p 16888:6888 \ #为BT 监听端口（TCP）映射，即 Aria2 配置中listen-port选项定义的端口
-p 16888:6888/udp \ #为DHT 监听端口（UDP）映射，即 Aria2 配置中dht-listen-port选项定义的端口
-v /root/aria2/config:/config \
-v /root/aria2/downloads:/downloads \
p3terx/aria2-pro
```


# 二、Docker安装AriaNg
1、拉取AriaNg镜像
```
docker pull p3terx/ariang
```
2、启动容器
```
docker run -d \
--name ariang \
--log-opt max-size=1m \
--restart unless-stopped \
-p 16880:6880 \
p3terx/ariang
```
3、访问 http://你的服务器ip:16880 访问AriaNg的web管理界面
![](https://roim-picx-9nr.pages.dev/rest/OoZ0ZkK.png)
4、点击“AriaNg 设置”菜单，再点击“全局”右边的标签配置RPC
![](https://roim-picx-9nr.pages.dev/rest/EZl0ZkK.png)
5、配置完刷新一下页面，如果状态显示“已连接”就ok了
