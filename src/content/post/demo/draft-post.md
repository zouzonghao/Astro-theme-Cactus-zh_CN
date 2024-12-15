---
title: "示例4 草稿"
description: "This post is for testing the draft post functionality"
publishDate: "1998-07-27"
tags: ["示例"]
draft: true
ogImage: "/social-card.avif"
---

如果你的文章还未完成

在 Front Matter（最上面用`---`包裹的内容）里，添加一个 `draft` 属性，并设置为 `true`。

此时你的文章只会在运行 `pnpm run dev` 时可见，其他情况下会被忽略

```yaml
---
title: "示例4 草稿"
description: "This post is for testing the draft post functionality"
publishDate: "1998-07-27"
tags: ["示例"]
draft: true
ogImage: "/social-card.avif"
---
```
