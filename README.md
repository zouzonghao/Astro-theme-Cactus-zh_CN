<div align="center">
  <img alt="Astro Cactus logo" src="https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/85aa0d3c-ef6a-44e2-954d-ef035b4f4315" width="70" />
</div>
<h1 align="center">
  Astro 仙人掌
</h1>

Astro 仙人掌 是一个基于 Astro 框架的博客主题，使用 Astro 和 TailwindCSS。是 Astro Cactus 主题项目的中文汉化版。同时在原项目的基础上，集成 CMS 实现 web 在线编辑、发布：后台界面使用 [Sveltia CMS](https://github.com/sveltia/sveltia-cms)（Decap CMS 的现代开源替代前端，开箱即用的深色模式、更快的加载速度、更好的编辑体验），GitHub OAuth 认证由 [astro-decap-cms-oauth](https://github.com/dorukgezici/astro-decap-cms-oauth) 提供。

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
  - Redirect URI —— https://域名/oauth/callback
  - 勾选项保持默认：不开启 "Allow wildcard matching"、"Enable Device Flow"、"Expire user access tokens"（开启 token 过期会导致 CMS 会话失效）
  - 注册完成后 GitHub 会给你两样东西：Client ID（页面上直接显示）和 Client Secret（点 "Generate a new client secret" 生成，只显示一次，当场复制保存）。
4. 在 Vercel -> Settings -> Environment Variables，添加2个环境变量（作用域建议选 All Environments，Preview 部署的构建同样会校验它们）
  - OAUTH_GITHUB_CLIENT_ID ->  Oauth ID
  - OAUTH_GITHUB_CLIENT_SECRET ->  Oauth secret
5. 在 Vercel -> Settings -> General -> Node.js Version，选择 **22.x**
  （项目锁定的 @astrojs/vercel@8.0.1 不认识构建机的新版 Node 24，会回退到已被 Vercel 淘汰的 nodejs18.x 运行时，导致部署报错 `_render (nodejs18.x)` invalid）
6. 修改GitHub仓库 `public/admin/config.yml`，修改 `repo`、`site_domain`、`base_url`
7. 通过访问 `你的域名/admin` 访问博客后台，进行编辑、发布文章



### B、本地编辑模式

先完成【A、网页编辑模式】中的步骤，然后执行下面的步骤

1. 点击 Fork 按钮，复制本项目到你的GitHub 仓库，然后点击 Code 按钮，复制项目地址。
2. 本地电脑上执行下面代码，克隆项目
```bash
git clone https://github.com/your-username/astro-theme-cactus-zh-cn.git

cd astro-theme-cactus-zh-cn
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


## 实现原理 📖

这一节写给想弄明白"纯静态网站怎么实现在线编辑发布"的朋友。这套博客**没有数据库、没有传统后台服务器**，整站由几个免费服务拼装而成。

### 核心思路：把 GitHub 仓库当数据库

传统博客（如 WordPress）把文章存在数据库里，由后台程序读写。本主题的思路不同：

- 文章就是仓库里的 Markdown 文件（`src/content/` 目录）
- **编辑文章 = 修改文件，发布文章 = 提交一次 git commit**
- Vercel 检测到新提交后自动重新构建网站，几十秒后文章上线

于是 GitHub 一个仓库同时充当了"文章数据库 + 图片库 + 版本历史"。

### 各组件分工

| 组件 | 扮演的角色 |
| :--- | :--- |
| GitHub 仓库 | 内容数据库（.md 文章 + 图片等媒体文件） |
| GitHub OAuth App | 登录凭据（Client ID / Client Secret） |
| Sveltia CMS | 可视化编辑器，运行在你的浏览器里，通过 GitHub API 读写仓库 |
| astro-decap-cms-oauth | 登录认证网关（`/oauth` 等路由），整套系统里唯一的服务端代码 |
| Vercel | 网站托管 + 每次提交自动构建部署 |

### 发布一篇文章的完整流程

1. 访问 `你的域名/admin`，浏览器从 CDN 下载 Sveltia CMS 编辑器程序并渲染出后台界面（侧边栏、文章列表、编辑器都不在你的服务器上，运行时才加载）
2. 点击 "Sign In with GitHub"：跳转到 GitHub 授权页，你点击同意后，GitHub 携带授权码跳回你的网站
3. 网站的 `/oauth/callback` 路由在**服务端**用授权码 + Client Secret 换取 access token，再转交给浏览器里的编辑器
4. 你在编辑器里写文章、点保存，编辑器调用 GitHub API，向你的仓库 main 分支提交一个 commit（新增/修改 .md 文件）
5. Vercel 检测到新 commit，自动重新构建并部署网站
6. 构建完成后，访客即可看到新文章

> [!NOTE]
> 在后台点"发布"后文章不是立即上线的，需要等 Vercel 完成一次重新构建（约半分钟到一分钟），这是 git-based 博客的正常现象，不是卡住了。

### 为什么必须要 astro-decap-cms-oauth 这个包

浏览器里的编辑器要替你提交代码，必须持有 GitHub 的 access token；而获取 token 的最后一步要用 Client Secret 去向 GitHub 换取，**Secret 绝不能出现在浏览器代码里**（前端代码对所有访客可见）。这一步必须由一台"服务器"完成——但你用的是静态托管，恰恰没有服务器。

Decap CMS 原生搭配的 Netlify 平台自带这种认证服务，Vercel 没有。`astro-decap-cms-oauth` 就是往你的部署里注入了两个 Serverless 函数（`/oauth` 和 `/oauth/callback`），把这个缺口补上了，仅此而已。所以你的 Client Secret 只保存在 Vercel 的环境变量里，永远不经过浏览器。

### 为什么改一行配置就能把编辑界面换成 Sveltia

`/admin` 页面本身只是一个十几行的空壳 HTML，你在后台看到的所有界面都打包在从 CDN 加载的一个 JS 文件里。Sveltia CMS 是 Decap CMS 的现代化替代品：它读取同一份 `config.yml`、对接同一套 GitHub API、使用同一套登录协议，因此 `astro.config.ts` 里换个 JS 文件的下载地址（`decapCMSSrcUrl`），整个界面就换掉了，其余一切——配置、登录方式、仓库内容——都不受影响。

## License

MIT
