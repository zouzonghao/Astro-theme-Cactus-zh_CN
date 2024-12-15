<div align="center">
  <img alt="Astro Cactus logo" src="https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/85aa0d3c-ef6a-44e2-954d-ef035b4f4315" width="70" />
</div>
<h1 align="center">
  Astro 仙人掌
</h1>

Astro 仙人掌 是一个基于 Astro 框架的博客主题，使用 Astro 和 TailwindCSS。是 Astro Cactus 项目的中文汉化版。

原项目地址: https://github.com/chrismwilliams/astro-theme-cactus

## 演示站点 💻

点击预览 [Demo](https://demo.343700.xyz/)

## 快速开始 🚀

点击 Fork 按钮，复制本项目到你的GitHub 仓库，然后点击 Code 按钮，复制项目地址。

```bash
git clone https://github.com/your-username/astro-theme-cactus-zh-cn.git

cd astro-theme-cactus-zh-cn

pnpm install
```


## 命令

| 命令             | 操作                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | 安装依赖项                                                   |
| `pnpm dev`       | 在 `localhost:3000` 启动本地开发服务器                       |
| `pnpm build`     | 将生产站点构建到 `./dist/` 目录下                             |
| `pnpm postbuild` | 执行 Pagefind 脚本，为博客文章构建静态搜索功能                |
| `pnpm preview`   | 在部署前本地预览构建结果                                       |
| `pnpm sync`      | 根据 `src/content/config.ts` 中的配置生成类型                 |

## 配置

- 修改导航栏标题，图片 -> `src/components/layout/Header.astro`
- 修改网站配置 -> `src/site.config.ts`
- 修改框架配置 -> `astro.config.ts`
- 修改社交图标链接 -> `src/components/SocialList.astro`

## 使用

在 `src/content` 文件夹中

新建 markdown 文件，例如 `src/content/posts/hello-world.md`

项目会自动扫描全部的 markdown 文件，并生成静态页面

## License

MIT
