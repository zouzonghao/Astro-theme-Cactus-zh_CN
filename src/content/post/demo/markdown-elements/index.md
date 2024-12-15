---
title: "示例1 Markdown 基本语法"
description: "这篇文章用于测试和列出多种不同的Markdown元素"
publishDate: "1998-07-30"
tags: ["示例"]
ogImage: "/social-card.avif"
---

## 这是一个H2标题

### 这是一个H3标题

#### 这是一个H4标题

##### 这是一个H5标题

###### 这是一个H6标题

## 水平线

***

---

___

## 强调

**这是粗体文本**

_这是斜体文本_

~~删除线~~

## 引用

"双引号" 和 '单引号'

## 块引用

> 块引用也可以嵌套...
>
> > ...通过在每个块引用符号旁边使用额外的大于号...

## 参考文献

一个包含可点击参考文献[^1]并链接到来源的例子。

第二个包含参考文献[^2]并链接到来源的例子。

[^1]: 第一个脚注的参考文献，带有返回内容的链接。

[^2]: 第二个参考文献，带有一个链接。

如果你查看`src/content/post/markdown-elements/index.md`中的这个例子，你会发现参考文献和“脚注”标题是通过 [remark-rehype](https://github.com/remarkjs/remark-rehype#options) 插件添加到页面底部的。

## 列表

无序列表

- 通过在行首使用 `+`, `-`, 或 `*` 来创建列表
- 子列表通过缩进两个空格来实现：
  - 更改标记字符会强制开始新的列表：
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- 非常简单！

有序列表

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. 你可以使用连续的数字...
5. ...或者将所有数字都设为 `1.`

从偏移量开始编号：

57. foo
1. bar

## 代码

内联 `code`

缩进代码

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

代码块 "fences"

```
Sample text here...
```

语法高亮

```js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

### 表达性代码示例

添加标题

```js title="file.js"
console.log("Title example");
```

Bash终端

```bash
echo "A base terminal example"
```

高亮代码行

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log("this line is marked as deleted");
	// This line and the next one are marked as inserted
	console.log("this is the second inserted line");

	return "this line uses the neutral default marker type";
}
```

[Expressive Code](https://expressive-code.com/) 可以做比这里展示的多得多的事情，并且包括很多 [自定义选项](https://expressive-code.com/reference/configuration/)。

## 表格

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

### 表格对齐

| Item         | Price | # In stock |
| ------------ | :---: | ---------: |
| Juicy Apples | 1.99  |        739 |
| Bananas      | 1.89  |          6 |

### 键盘元素

| Action                | Shortcut                                   |
| --------------------- | ------------------------------------------ |
| Vertical split        | <kbd>Alt+Shift++</kbd>                     |
| Horizontal split      | <kbd>Alt+Shift+-</kbd>                     |
| Auto split            | <kbd>Alt+Shift+d</kbd>                     |
| Switch between splits | <kbd>Alt</kbd> + arrow keys                |
| Resizing a split      | <kbd>Alt+Shift</kbd> + arrow keys          |
| Close a split         | <kbd>Ctrl+Shift+W</kbd>                    |
| Maximize a pane       | <kbd>Ctrl+Shift+P</kbd> + Toggle pane zoom |

## 图像

同一文件夹中的图像：`src/content/post/demo/markdown-elements/logo.png`

![Astro theme cactus logo](./logo.png)

## 链接

[Markdown-it的内容](https://markdown-it.github.io/)
