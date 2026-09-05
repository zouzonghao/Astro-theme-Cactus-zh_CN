---
title: "Markdown 提示块"
description: "本文演示仙人掌主题中 Markdown 提示块（Admonition）功能的使用方法"
publishDate: "25 Aug 2024"
updatedDate: "4 July 2025"
tags: ["markdown", "admonitions", "示例"]
---

## 什么是提示块

提示块（Admonitions，也称为“旁注”）适合为正文提供辅助性、补充性的信息。

## 如何使用

在仙人掌主题中，把 Markdown 内容包在一对三个冒号 `:::` 之间即可使用提示块。开头的 `:::` 后面还要写上想使用的提示块类型。

例如，下面这段 Markdown：

```md
:::note
即使只是快速浏览，也不应该忽略的重要信息。
:::
```

渲染结果：

:::note
即使只是快速浏览，也不应该忽略的重要信息。
:::

## 提示块类型

目前支持以下几种提示块：

- `note`
- `tip`
- `important`
- `caution`
- `warning`

### Note（提示）

```md
:::note
即使只是快速浏览，也不应该忽略的重要信息。
:::
```

:::note
即使只是快速浏览，也不应该忽略的重要信息。
:::

### Tip（技巧）

```md
:::tip
帮助用户更好地完成任务的附加建议。
:::
```

:::tip
帮助用户更好地完成任务的附加建议。
:::

### Important（重要）

```md
:::important
用户想要达成目标必须了解的关键信息。
:::
```

:::important
用户想要达成目标必须了解的关键信息。
:::

### Caution（注意）

```md
:::caution
某个操作可能带来的负面后果。
:::
```

:::caution
某个操作可能带来的负面后果。
:::

### Warning（警告）

```md
:::warning
存在潜在风险、需要用户立即注意的关键内容。
:::
```

:::warning
存在潜在风险、需要用户立即注意的关键内容。
:::

## 自定义提示块标题

可以使用如下写法自定义提示块的标题：

```md
:::note[我的自定义标题]
这是一个带自定义标题的提示块。
:::
```

渲染结果：

:::note[我的自定义标题]
这是一个带自定义标题的提示块。
:::

## GitHub 仓库卡片

可以在文章中插入指向 GitHub 仓库的动态卡片，页面加载时会通过 GitHub API 拉取仓库信息。

::github{repo="chrismwilliams/astro-theme-cactus"}

也可以展示 GitHub 用户：

::github{user="withastro"}

使用时只需写 github 指令：

```md title="链接一个仓库"
::github{repo="chrismwilliams/astro-theme-cactus"}
```

```md title="链接一个用户"
::github{user="withastro"}
```
