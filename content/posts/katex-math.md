---
title: "KaTeX 数学公式"
description: "本文演示仙人掌主题中数学公式与化学方程式的使用方法"
publishDate: "5 Sep 2026"
tags: ["markdown", "katex", "示例"]
---

## 什么是数学公式

主题内置 [KaTeX](https://katex.org/) 引擎，支持在文章中书写行内公式、块级公式和化学方程式。所有公式都在**构建时**直接渲染成 HTML，浏览器不需要加载任何公式脚本，也不会请求第三方 CDN。

## 如何使用

行内公式用单美元符号包裹，可以和正文混排。例如，下面这段 Markdown：

```md
质能方程 $E = mc^2$ 是物理学中最著名的公式之一。
```

渲染结果：

质能方程 $E = mc^2$ 是物理学中最著名的公式之一。

块级公式用双美元符号包裹，独占一段并居中显示：

```md
$$
e^{i\pi} + 1 = 0
$$
```

渲染结果：

$$
e^{i\pi} + 1 = 0
$$

超过版心宽度的公式会自动出现横向滚动条，不会撑破布局。

## 常用示例

### 分数与上下标

```md
$\frac{a}{b}$、$x^2$、$x_i$、$a_{ij}^2$
```

$\frac{a}{b}$、$x^2$、$x_i$、$a_{ij}^2$

### 根式

```md
$\sqrt{2} \approx 1.414$，$\sqrt[3]{8} = 2$
```

$\sqrt{2} \approx 1.414$，$\sqrt[3]{8} = 2$

### 求和与积分

```md
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

```md
$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$
```

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

### 极限与导数

```md
$\lim_{x \to 0} \frac{\sin x}{x} = 1$，$f'(x) = \frac{dy}{dx}$
```

$\lim_{x \to 0} \frac{\sin x}{x} = 1$，$f'(x) = \frac{dy}{dx}$

### 矩阵

```md
$$
A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}
$$
```

$$
A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}
$$

### 多行推导

用 `aligned` 环境书写多行推导，`&` 指定对齐点，`\\` 换行：

```md
$$
\begin{aligned}
(a+b)^2 &= a^2 + 2ab + b^2 \\
(a-b)^2 &= a^2 - 2ab + b^2
\end{aligned}
$$
```

$$
\begin{aligned}
(a+b)^2 &= a^2 + 2ab + b^2 \\
(a-b)^2 &= a^2 - 2ab + b^2
\end{aligned}
$$

## 常用符号速查

| 语法               | 效果      | 语法            | 效果      |
| ------------------ | --------- | --------------- | --------- |
| `$\alpha$`         | $\alpha$  | `$\beta$`       | $\beta$   |
| `$\gamma$`         | $\gamma$  | `$\delta$`      | $\delta$  |
| `$\theta$`         | $\theta$  | `$\lambda$`     | $\lambda$ |
| `$\mu$`            | $\mu$     | `$\pi$`         | $\pi$     |
| `$\sigma$`         | $\sigma$  | `$\omega$`      | $\omega$  |
| `$\Gamma$`         | $\Gamma$  | `$\Delta$`      | $\Delta$  |
| `$\pm$`            | $\pm$     | `$\times$`      | $\times$  |
| `$\leq$`           | $\leq$    | `$\geq$`        | $\geq$    |
| `$\neq$`           | $\neq$    | `$\approx$`     | $\approx$ |
| `$\infty$`         | $\infty$  | `$\to$`         | $\to$     |

更多符号可以查阅 [KaTeX 支持列表](https://katex.org/docs/supported)。

## 化学方程式

主题同时加载了 [mhchem](https://mhchem.github.io/MathJax-mhchem/) 扩展：用 `\ce{}` 书写化学式，用 `\pu{}` 书写物理单位。

分子式可以行内书写：

```md
水是 $\ce{H2O}$，浓硫酸是 $\ce{H2SO4}$。
```

水是 $\ce{H2O}$，浓硫酸是 $\ce{H2SO4}$。

反应方程式中，`->` 生成反应箭头，`<=>` 生成可逆号：

```md
$$
\ce{2H2 + O2 -> 2H2O}
$$
```

$$
\ce{2H2 + O2 -> 2H2O}
$$

```md
$$
\ce{N2 + 3H2 <=> 2NH3}
$$
```

$$
\ce{N2 + 3H2 <=> 2NH3}
$$

`v` 生成沉淀符号 ↓，`^` 生成气体符号 ↑，物质状态写在括号里：

```md
$$
\ce{Ag+ + Cl- -> AgCl v}
$$
```

$$
\ce{Ag+ + Cl- -> AgCl v}
$$

```md
$$
\ce{C(s) + O2(g) -> CO2(g)}
$$
```

$$
\ce{C(s) + O2(g) -> CO2(g)}
$$

物理单位用 `\pu{}`，会自动处理斜体、负指数和科学计数法：

```md
标准摩尔熵 $S^\circ = \pu{205 J/(K mol)}$，阿伏伽德罗常数 $N_A = \pu{6.022e23 mol-1}$
```

标准摩尔熵 $S^\circ = \pu{205 J/(K mol)}$，阿伏伽德罗常数 $N_A = \pu{6.022e23 mol-1}$

## 注意事项

### 美元符号转义

如果正文里恰好出现两个 `$`（例如两个价格），它们之间的文字可能被误认为公式。用反斜杠 `\` 转义即可让它显示为普通字符：

```md
这本书 \$39，那本 \$59。
```

这本书 \$39，那本 \$59。

### 错误处理

写错的公式不会导致构建失败，会以红色原样显示，方便定位和修正。例如 `$\unknowncmd{x}$` 会渲染成：$\unknowncmd{x}$
