---
title: "一篇包含各种 Markdown 元素的示例文章"
description: "本文用于测试和展示多种不同的 Markdown 元素"
publishDate: "2023-02-22"
updatedDate: "2024-01-22"
tags: ["示例", "markdown"]
pinned: true
---

## 这是一个二级标题

### 这是一个三级标题

#### 这是一个四级标题

##### 这是一个五级标题

###### 这是一个六级标题

## 水平分割线

---

---

---

## 强调

**这是粗体文本**

_这是斜体文本_

~~这是删除线文本~~

## 引号

"双引号" 和 '单引号'

## 引用块

> 引用块也可以嵌套……
>
> > ……只需在上一层的 > 后面紧跟着再写一个 > ……

## 脚注引用

一个包含可点击脚注引用[^1]的示例，点击可以跳转到来源。

第二个包含脚注引用[^2]的示例。

[^1]: 第一个脚注，带有返回正文的链接。

[^2]: 第二个脚注，带有链接。

如果你查看 `content/posts/markdown-elements/index.md` 这个示例文件，会发现脚注内容和“脚注”标题是由 markdown 处理器自动添加到页面底部的。

## 列表

无序列表

- 用 `+`、`-` 或 `*` 开头即可创建列表
- 子列表只需缩进 2 个空格：
  - 更换标记字符会强制开启新列表：
    - 列表项一
    - 列表项二
    - 列表项三
- 非常简单！

有序列表

1. 第一项示例内容
2. 第二项示例内容
3. 第三项示例内容

4. 可以使用连续的数字……
5. ……也可以全部写成 `1.`

从指定数字开始编号：

57. 第一项
1. 第二项

## 代码

行内 `代码`

缩进代码

    // 一些注释
    第一行代码
    第二行代码
    第三行代码

围栏代码块

```
这里是一段示例文本……
```

语法高亮

```js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

### Expressive Code 示例

添加标题

```js title="file.js"
console.log("标题示例");
```

终端样式

```bash
echo "一个基础的终端示例"
```

高亮代码行

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log("这一行被标记为删除");
	// 这一行和下一行被标记为新增
	console.log("这是第二行新增的代码");

	return "这一行使用默认的中性标记";
}
```

[Expressive Code](https://expressive-code.com/) 能做的远不止上面这些，还提供了丰富的[自定义配置](https://expressive-code.com/reference/configuration/)。

## 数学公式

行内公式用单美元包裹，如质能方程 $E = mc^2$，或者欧拉恒等式 $e^{i\pi} + 1 = 0$。

块级公式用双美元包裹，独立成段并居中显示：

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

化学方程式由 mhchem 扩展支持，使用 `\ce{}` 书写：

$$
\ce{CH4 + 2O2 -> CO2 + 2H2O}
$$

水分子 $\ce{H2O}$ 也可以行内书写，物理单位用 `\pu{}`，如标准摩尔熵 $S^\circ = \pu{205 J/(K mol)}$。

超宽的公式可以横向滚动，不会撑破布局：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} \quad \prod_{p \in \mathbb{P}} \frac{1}{1 - p^{-2}} = \frac{\pi^2}{6} \quad \int_0^1 \frac{\ln(1+x)}{x} \, dx = \frac{\pi^2}{12}
$$

## 表格

| 配置项 | 说明                                                     |
| ------ | -------------------------------------------------------- |
| data   | 提供模板所需数据的数据文件路径。                         |
| engine | 处理模板所用的引擎，默认为 Handlebars。                  |
| ext    | 目标文件使用的扩展名。                                   |

### 表格对齐

| 商品     | 价格 | 库存 |
| -------- | :---: | ---: |
| 多汁苹果 | 1.99 |  739 |
| 香蕉     | 1.89 |    6 |

### 键盘按键

| 操作           | 快捷键                                     |
| -------------- | ------------------------------------------ |
| 垂直分屏       | <kbd>Alt+Shift++</kbd>                     |
| 水平分屏       | <kbd>Alt+Shift+-</kbd>                     |
| 自动分屏       | <kbd>Alt+Shift+d</kbd>                     |
| 在分屏间切换   | <kbd>Alt</kbd> + 方向键                    |
| 调整分屏大小   | <kbd>Alt+Shift</kbd> + 方向键              |
| 关闭分屏       | <kbd>Ctrl+Shift+W</kbd>                    |
| 最大化当前面板 | <kbd>Ctrl+Shift+P</kbd> + 切换面板缩放     |

## 图片

同目录下的图片：`content/posts/logo.png`

![仙人掌主题 logo](./logo.png)

## 链接

[部分内容来自 markdown-it](https://markdown-it.github.io/)
