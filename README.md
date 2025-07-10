<div align="center">
  <img alt="Astro Cactus logo" src="https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/85aa0d3c-ef6a-44e2-954d-ef035b4f4315" width="70" />
</div>
<h1 align="center">
  Astro 仙人掌
</h1>

Astro 仙人掌 是一个基于 Astro 框架的博客主题，使用 Astro 和 TailwindCSS。是 Astro Cactus 主题项目的中文汉化版。同时在原项目的基础上，集成 **decap cms**，实现 web 在线编辑、发布。

原主题地址: https://github.com/chrismwilliams/astro-theme-cactus

## 演示站点 💻

点击预览 [Demo](https://demo.343700.xyz/)

## 快速开始 🚀

### A、网页编辑模式

教学视频：[【零基础】【零成本】搭建一个属于自己的Astro博客网站](https://www.bilibili.com/video/BV18eCpYcEAk)

1. 点击 Fork 按钮，复制本项目到你的GitHub 仓库
2. [Vercel](vercel.com) 注册登录，关联 GitHub 账户，导入仓库
3. 添加一个[GitHub认证](https://github.com/settings/applications/new)，得到 Oauth ID 和 secret
  - Homepage URL —— https://你的域名
  - Authorization callback URL —— https://域名/oauth/callback
4. 在 Vercel -> Settings -> Environment Variables，添加2个环境变量
  - OAUTH_GITHUB_CLIENT_ID ->  Oauth ID
  - OAUTH_GITHUB_CLIENT_SECRET ->  Oauth secret
5. 修改GitHub仓库 `public/admin/config.yml`，修改 `repo`、`site_domain`、`base_url`
6. 通过访问 `你的域名/admin` 访问博客后台，进行编辑、发布文章



### B、本地编辑模式

先完成【A、网页编辑模式】中的步骤，然后执行下面的步骤

1. 点击 Fork 按钮，复制本项目到你的GitHub 仓库，然后点击 Code 按钮，复制项目地址。
2. 本地电脑上执行下面代码，安装项目
```bash
git clone https://github.com/your-username/astro-theme-cactus-zh-cn.git

cd astro-theme-cactus-zh-cn

pnpm install
```
3. 在 `src/content` 文件夹中，新建 markdown 文件，例如 `src/content/posts/hello-world.md`
4. 保存md文件，执行 git push 推送到远程仓库

#### 命令

| 命令             | 操作                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | 安装依赖项                                                   |
| `pnpm dev`       | 在 `localhost:3000` 启动本地开发服务器                       |
| `pnpm build`     | 将生产站点构建到 `./dist/` 目录下                             |
| `pnpm postbuild` | 执行 Pagefind 脚本，为博客文章构建静态搜索功能                |
| `pnpm preview`   | 在部署前本地预览构建结果                                       |
| `pnpm sync`      | 根据 `src/content/config.ts` 中的配置生成类型                 |

## 个性化配置 ⚙

- 修改导航栏标题，图片 -> `src/components/layout/Header.astro`
- 修改网站配置 -> `src/site.config.ts`
- 修改框架配置 -> `astro.config.ts`
- 修改社交图标链接 -> `src/components/SocialList.astro`


## License

MIT
