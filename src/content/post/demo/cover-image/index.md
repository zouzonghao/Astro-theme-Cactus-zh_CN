---
title: "示例3 添加封面图"
description: "这篇文章是如何添加封面的示例"
publishDate: "1998-07-28"
coverImage:
  src: "./cover.png"
  alt: "封面图"
tags: ["示例"]
ogImage: "/social-card.avif"
---

## 添加封面图

在 Front Matter（最上面用`---`包裹的内容）里，添加一个 `coverImage` 属性，并设置图片路径和描述。

```yaml
---
title: "示例3 添加封面图"
description: "这篇文章是如何添加封面的示例"
publishDate: "1998-07-28"
coverImage:
  src: "./cover.png"
  alt: "封面图"
tags: ["示例"]
ogImage: "/social-card.avif"
---

```

## 路径

将图片和文章放入相同文件夹下

通过 `./cover.png` 来引入图片

在文章中也是一样的

如：

```md
![](./cover.png)
```

显示：

![Astro build wallpaper](./cover.png)
