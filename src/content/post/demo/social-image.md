---
title: "示例5 社交图片卡片"
publishDate: "1998-07-26"
description: "详细说明如何在 frontmatter 中添加自定义社交图片卡片"
tags: ["示例"]
ogImage: "/social-card.avif"
---

## 什么是社交图片卡片？

社交图片，也称为 OG（OpenGraph） 图片

当你想要分享你的文章到社交平台时，你可能会看到一张由网站自动生成的卡片。


## 添加自定义社交图片

在 Front Matter（最上面用`---`包裹的内容）里，添加一个 `ogImage` 属性，并设置路径（相对路径的根路径为 `src/public` 文件夹）。

```yaml
---
title: "示例5 社交图片卡片"
publishDate: "1998-07-26"
description: "详细说明如何在 frontmatter 中添加自定义社交图片卡片"
tags: ["示例"]
ogImage: "/social-card.avif"
---
```
## 如果不添加`ogImage`属性（不推荐）

如果 `ogImage` 属性没有设置，则项目会在构建的时候，根据文章标题、标签生成一张社交图片。

通过编辑 `src/pages/og-image/[...slug].png.ts` 控制生成规则。

此举会增加构建时间，极大地增加构建体积。

推荐全部文章使用一张图片，作为默认的社交图片。
