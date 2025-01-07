---
title: "CloudFlare+roim-picx打造个人图床(Telegraph-Image寄了换成这个"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "30 Nov 2024"
tags: ["PICX", "CloudFlare"]
---

# 1.在 GitHub 上创建和配置仓库

-  访问 [roim-picx](https://github.com/roimdev/roim-picx) 并将其 fork 到你的账号下。

![](https://roim-picx-9nr.pages.dev/rest/wWhAqkK.png)
# 2.使用 Cloudflare Pages 搭建图床服务
- 登录 Cloudflare，并根据下图指示连接到 GitHub。
  ![](https://roim-picx-9nr.pages.dev/rest/kANAqkK.png)
- 选择pages
  ![](https://roim-picx-9nr.pages.dev/rest/H8nAqkK.png)
- 选择你刚才 fork 的仓库并开始设置。
- 按照默认设置保存并部署(这里选VUE)。
- ![](https://roim-picx-9nr.pages.dev/rest/aYNaqkK.png)
- 部署成功后，会显示一个页面，其中包含图床的网址。
# 3.管理图床
- 新建KV空间
![](https://roim-picx-9nr.pages.dev/rest/WX60qkK.png)
- 新建R2存储
![](https://roim-picx-9nr.pages.dev/rest/mVP0qkK.png)
- 进入设置绑定下图三个变量
![](https://roim-picx-9nr.pages.dev/rest/7JeBqkK.png)
- 进入KV设置登录密码
![](https://roim-picx-9nr.pages.dev/rest/HytBqkK.png)
- 最后，重新部署服务。![](https://roim-picx-9nr.pages.dev/rest/17obqkK.png)
- 现在，通过图床域名就可以访问了，输入TOKEN就可以进入上传和管理界面。
![](https://roim-picx-9nr.pages.dev/rest/lKfCqkK.png)