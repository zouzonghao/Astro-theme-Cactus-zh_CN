---
title: "OG 社交分享图示例"
publishDate: "27 January 2023"
description: "一篇仙人掌主题的示例文章，演示如何在 frontmatter 中自定义社交分享图（OG image）"
tags: ["example", "blog", "image"]
ogImage: "/social-card.png"
---

## 为文章添加自定义社交分享图

本文演示如何为博客文章添加自定义的 [Open Graph](https://ogp.me/) 社交分享图，也称为 OG 图片。
只要在文章的 frontmatter 中加上可选的 ogImage 属性，就可以不再使用 [satori](https://github.com/vercel/satori) 为该页面自动生成的分享图。

打开这篇示例的源文件 `content/posts/testing/social-image.md`，可以看到 ogImage 属性指向了一张位于 public 目录的图片[^1]。

```yaml
ogImage: "/social-card.png"
```

本站使用的分享图可以在[这里](/social-card.png)查看。

[^1]: 图片可以放在你喜欢的任何位置。
