---
title: "关于Serv00+Vmess+Argo隧道实现节点搭建和加速"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "19 Dec 2024"
tags: ["vps", "singbox"]
---

# 1.起因和前提准备
最近serv00的S14开了，撸了两个小鸡来玩，本来就苦代理费用久矣，故做此计----搭建代理节点自己用。一是费用问题。二是用别人的有安全隐患，总怕被“偷窥”，被DNS挟持之类的。于是便有了下文。
- 前提准备：
- 1.注册登录serv00账号
- 2.开放serv00权限和端口
![](https://roim-picx-9nr.pages.dev/rest/gC2n7LK.png)
- random一个tcp端口
![](https://roim-picx-9nr.pages.dev/rest/3mqn7LK.png)
# 2.通过脚本安装singbox并部署vmess节点
因为我不想要那么多协议的节点，故没有选择四合一三合一之类的脚本，选了一个修改版的只有vmess协议的脚本github地址为：https://github.com/amclubs/am-serv00-vmess
- 脚本安装命令：
```
bash <(curl -Ls https://raw.githubusercontent.com/amclubs/am-serv00-vmess/main/install_serv00_vmess.sh)
```
## 安装
- 输入1安装sing-box

- ![](https://roim-picx-9nr.pages.dev/rest/U4To7LK.png)

- 确认安装并输入刚才Random出来的tcp端口

- 确认使用argo隧道
  ![](https://roim-picx-9nr.pages.dev/rest/928P7LK.png)
  这里可以使用随机的argo隧道，但是还是直接用固定的argo隧道比较稳定。故按照脚本步骤直接跳转到如何创建argo隧道。
## 固定argo隧道的创建 
首先你要有一个托管到cf的域名，然后打开cf点击这里：
![](https://roim-picx-9nr.pages.dev/rest/0eWp7LK.png)
(开启此功能需要绑定支付方式，我用的paypal可以绑定成功，白嫖免费套餐就行)
然后点击tunnels
![](https://roim-picx-9nr.pages.dev/rest/vOlQ7LK.png)
创建一个隧道，名字随便
![](https://roim-picx-9nr.pages.dev/rest/JFyQ7LK.png)
继续
![](https://roim-picx-9nr.pages.dev/rest/yl6q7LK.png)
输入隧道名字，点击部署
![](https://roim-picx-9nr.pages.dev/rest/r9mq7LK.png)
把这个token复制出来备用
![](https://roim-picx-9nr.pages.dev/rest/Nv4R7LK.png)
点下一步按照下图填写对应内容
![](https://roim-picx-9nr.pages.dev/rest/Wicr7LK.png)
点击这里查看隧道
![](https://roim-picx-9nr.pages.dev/rest/okMr7LK.png)
复制域名
![](https://roim-picx-9nr.pages.dev/rest/n5zr7LK.png)
然后填入隧道名到面板，并输入刚才保存的token,就可以看到生成的节点了，导入v2ray就可以使用了
![](https://roim-picx-9nr.pages.dev/rest/G5JS7LK.png)
## 设置端口回源
为了使用cf的优选ip提升节点速度我们需要设置端口回源
- 点击你刚才使用的域名，选择DNS,点击编辑
- ![](https://roim-picx-9nr.pages.dev/rest/fWFT7LK.png)
- 将CNAME改为A记录，后面填写小鸡的ip,并启动小黄云
- ![](https://roim-picx-9nr.pages.dev/rest/9YYT7LK.png)
- 然后点击规则，点击origen rules创建一条规则
- ![](https://roim-picx-9nr.pages.dev/rest/eZPt7LK.png)
- 按照下图填写保存部署即可
- ![](https://roim-picx-9nr.pages.dev/rest/5Psu7LK.png)
- 然后在v2ray里面填写伪装域名
- ![](https://roim-picx-9nr.pages.dev/rest/fx7V7LK.png)
- 至此可以随便填写优选ip之类的，教程结束。
