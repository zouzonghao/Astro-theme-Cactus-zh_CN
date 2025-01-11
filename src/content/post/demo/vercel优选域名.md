---
title: "Vercel优选域名加速网站"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "11 Jan 2025"
tags: ["优选", "Vercel"]
---
博客部署在Vercel上国内访问很慢，搞了个优选加速一下，提升一下体验。
## 配置域名
虽然vercel在创建好项目后会分配一个域名给你，但是访问十分拉跨，名字也不好记。先来到vercel的setting里找到domain设置一下域名。
![image.png](https://roim-picx-9nr.pages.dev/rest/TxWRmmK.png)
## 优选域名
Vercel 优选域名参考:
- vercel.cdn.cyfan.top 推荐
- vercel.cdn.yt-blog.top
- vercel-cname.xingpingcn.top
A 记录-->76.76.21.21，CNAME -->随便一个优选域名
![image.png](https://roim-picx-9nr.pages.dev/rest/18VrmmK.png)
## 测速
[在itdog测速](https://www.itdog.cn)
![image.png](https://roim-picx-9nr.pages.dev/rest/YzOummK.png)
[在Google网站pagespeed测试](https://pagespeed.web.dev)
移动
![image.png](https://roim-picx-9nr.pages.dev/rest/wtMTmmK.png)
桌面
![image.png](https://roim-picx-9nr.pages.dev/rest/WavTmmK.png)
[在GTmetrix测试](https://gtmetrix.com)
![image.png](https://roim-picx-9nr.pages.dev/rest/ihUummK.png)
这下舒服了.....
