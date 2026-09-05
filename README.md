<div align="center">
  <img alt="Astro Cactus logo" src="https://github.com/chrismwilliams/astro-theme-cactus/assets/12715988/85aa0d3c-ef6a-44e2-954d-ef035b4f4315" width="70" />
</div>
<h1 align="center">
  Astro 仙人掌
</h1>

Astro 仙人掌 是一个基于 Astro 框架的博客主题，使用 Astro 和 TailwindCSS，是 Astro Cactus 主题的中文汉化版。同时在原项目基础上集成 CMS 实现 web 在线编辑、发布：后台界面使用 [Sveltia CMS](https://github.com/sveltia/sveltia-cms)（Decap CMS 的现代开源替代前端，开箱即用的深色模式、更快的加载速度、更好的编辑体验），GitHub OAuth 认证由项目内置的 `/oauth` 路由提供。

原主题地址: https://github.com/chrismwilliams/astro-theme-cactus

## 演示站点 💻

点击预览 [Demo](https://demo.343700.xyz/)

## 快速开始 🚀

### A、网页编辑模式

教学视频：[【零基础】【零成本】搭建一个属于自己的Astro博客网站](https://www.bilibili.com/video/BV18eCpYcEAk)

1. 点击 Fork 按钮，复制本项目到你的 GitHub 仓库
2. [Vercel](vercel.com) 注册登录，关联 GitHub 账户，导入仓库
3. 添加一个[GitHub认证](https://github.com/settings/applications/new)，得到 Oauth ID 和 Secret
   - Homepage URL —— https://你的域名
   - Redirect URI —— https://域名/oauth/callback
   - 勾选项保持默认：不开启 "Allow wildcard matching"、"Enable Device Flow"、"Expire user access tokens"（开启 token 过期会导致 CMS 会话失效）
   - 注册完成后 GitHub 会给你两样东西：Client ID（页面上直接显示）和 Client Secret（点 "Generate a new client secret" 生成，只显示一次，当场复制保存）。
4. 在 Vercel -> Settings -> Environment Variables，添加 2 个环境变量（作用域建议选 All Environments，Preview 部署的构建同样会校验它们）
   - OAUTH_GITHUB_CLIENT_ID -> Oauth ID
   - OAUTH_GITHUB_CLIENT_SECRET -> Oauth secret
5. 在 Vercel -> Settings -> General -> Node.js Version，选择 **22.x**
   （项目锁定的 @astrojs/vercel 不认识构建机的新版 Node 24，会回退到已被 Vercel 淘汰的 nodejs18.x 运行时，导致部署报错）
6. 修改 GitHub 仓库中的 `public/admin/config.yml`（可直接在 GitHub 网页上编辑），共 4 处：
   - `repo` —— 你的仓库，如 `你的用户名/你的仓库名`
   - `branch` —— 发布分支（一般为 main）
   - `base_url` —— 你的线上域名（不带末尾斜杠）
   - `site_domain` —— 你的线上域名（用于后台"查看站点"链接，可留空）
7. 访问 `你的域名/admin` 登录后台，即可在线编辑、发布

部署完成后，站点的全部个性化设置——站点标题、作者、站点描述、**网站地址**、导航菜单、页头 Logo 开关、关于页内容——都可以在后台完成，无需再改任何代码。

### B、本地编辑模式

先完成【A、网页编辑模式】中的步骤，然后执行下面的步骤

1. 点击 Code 按钮，复制项目地址，在本地电脑上执行下面代码克隆项目
```bash
git clone https://github.com/your-username/your-repo.git

cd your-repo
```
2. 在 `content` 文件夹中新建 markdown 文件，例如 `content/posts/hello-world.md`（可参考现有文章的 frontmatter 写法）
3. 保存 md 文件，执行 git push 推送到远程仓库

#### 命令

| 命令             | 操作                                                          |
| :--------------- | :------------------------------------------------------------ |
| `pnpm install`   | 安装依赖项                                                    |
| `pnpm dev`       | 在 `localhost:4321` 启动本地开发服务器                        |
| `pnpm build`     | 构建生产站点（Vercel 适配器输出到 `.vercel/output/static/`）  |
| `pnpm postbuild` | 执行 Pagefind 脚本，为博客文章构建静态搜索功能                |
| `pnpm preview`   | 在部署前本地预览构建结果                                      |
| `pnpm sync`      | 根据 `src/content.config.ts` 中的配置生成类型                 |

> [!NOTE]
> 本地开发、构建**不需要**配置任何环境变量（OAuth 相关代码只在访问 `/oauth` 路由时才读取）。如需本地测试 OAuth 流程，复制 `.example.env` 为 `.env` 并填入两个变量即可。

## 后台功能 📝

- **博文**：标题、简介、发布日期、标签、草稿、置顶、正文（Markdown 编辑器，可插入图片）
- **笔记**：短内容随手记
- **标签页**：为标签写介绍页
- **页面**：关于页（标题、SEO 描述、Markdown 正文）
- **站点设置**：站点标题、作者、站点描述、网站地址（url）、页头 Logo 开关、导航菜单（保存后重新构建即全站生效）
- 上传的图片存放在仓库 `public/assets/images/` 目录

> [!NOTE]
> - 勾选"草稿"的文章不会出现在网站上，适合写到一半的内容
> - 封面图（coverImage）字段暂未接入后台，需要封面时请通过 Git 提交，参考现有文章的 frontmatter 写法
> - OG 分享图无需手动填写，构建时根据标题自动生成（已内置中文字体）

## 个性化配置 ⚙

站点标题、作者、站点描述、网站地址、导航菜单、页头 Logo 开关、关于页内容均可在后台「站点设置」「页面」中编辑，保存后等 Vercel 重新构建即全站生效。

仍需手动修改的：

- 页头 Logo 图案（SVG）→ `src/components/layout/Header.astro`
- 日期格式、代码块主题等主题级配置 → `src/site.config.ts`、`astro.config.ts`

## 实现原理 📖

这一节写给想弄明白"纯静态网站怎么实现在线编辑发布"的朋友。这套博客**没有数据库、没有传统后台服务器**，整站由几个免费服务拼装而成。

### 核心思路：把 GitHub 仓库当数据库

传统博客（如 WordPress）把文章存在数据库里，由后台程序读写。本主题的思路不同：

- 文章就是仓库里的 Markdown 文件（`content/` 目录），站点设置是 `content/settings/site.json`
- **编辑文章 = 修改文件，发布文章 = 提交一次 git commit**
- Vercel 检测到新提交后自动重新构建网站，几十秒后上线

于是 GitHub 一个仓库同时充当了"文章数据库 + 设置存储 + 图片库 + 版本历史"。

### 各组件分工

| 组件 | 扮演的角色 |
| :--- | :--- |
| GitHub 仓库 | 内容数据库（.md 文章 + 图片等媒体文件 + 站点设置） |
| GitHub OAuth App | 登录凭据（Client ID / Client Secret） |
| Sveltia CMS | 可视化编辑器，运行在你的浏览器里，通过 GitHub API 读写仓库 |
| 内置 `/oauth` 路由 | 登录认证网关（`src/pages/oauth.ts` 与 `src/pages/oauth/callback.ts`），整套系统里唯一的服务端代码 |
| Vercel | 网站托管 + 每次提交自动构建部署 |

### 发布一篇文章的完整流程

1. 访问 `你的域名/admin`，浏览器从 CDN 下载 Sveltia CMS 编辑器程序并渲染出后台界面（侧边栏、文章列表、编辑器都不在你的服务器上，运行时才加载）
2. 点击登录按钮：跳转到 GitHub 授权页，你点击同意后，GitHub 携带授权码跳回你的网站
3. 网站的 `/oauth/callback` 路由在**服务端**用授权码 + Client Secret 换取 access token，再转交给浏览器里的编辑器（Secret 只存在 Vercel 环境变量里，绝不经过浏览器）
4. 你在编辑器里写文章、点保存，编辑器调用 GitHub API，向 `config.yml` 中配置的分支提交一个 commit（新增/修改 .md 文件）
5. Vercel 检测到新 commit，自动重新构建并部署网站
6. 构建完成后，访客即可看到新文章

> [!NOTE]
> 在后台点"发布"后内容不是立即上线的，需要等 Vercel 完成一次重新构建（约半分钟到一分钟），这是 git-based 博客的正常现象，不是卡住了。

### 为什么必须要有服务端 OAuth 路由

浏览器里的编辑器要替你提交代码，必须持有 GitHub 的 access token；而获取 token 的最后一步要用 Client Secret 去向 GitHub 换取，**Secret 绝不能出现在浏览器代码里**（前端代码对所有访客可见）。这一步必须由一台"服务器"完成——但你用的是静态托管，恰恰没有服务器。本项目在 `src/pages/oauth.ts` 与 `src/pages/oauth/callback.ts` 里实现了两个 Serverless 函数（部署到 Vercel 后按需运行），把这个缺口补上了，仅此而已。

### 后台界面是怎么加载的

`/admin` 页面本身只是一个十几行的空壳 HTML（`public/admin/index.html`），你在后台看到的所有界面都打包在从 CDN 加载的一个 JS 文件里。Sveltia CMS 是 Decap CMS 的现代化替代品：它读取同一份 `config.yml`、对接同一套 GitHub API、使用同一套登录协议。想换成 Decap 官方界面，把 `index.html` 里的 script 下载地址换掉即可，配置、登录方式、仓库内容都不受影响。

## 常见问题 ❓

**后台登录报错 / 跳转后 404？**
检查 Vercel 环境变量是否已配置、OAuth App 的回调地址是否为 `https://你的域名/oauth/callback`、`public/admin/config.yml` 的 `repo`/`branch` 是否正确。

**构建失败提示缺少环境变量？**
本项目构建不强制要求环境变量。若遇到，确认变量名拼写为 `OAUTH_GITHUB_CLIENT_ID` / `OAUTH_GITHUB_CLIENT_SECRET` 且作用域包含 Production。

**部署后搜索功能不可用？**
Vercel 有时使用 `astro build` 作为构建命令而跳过 `postbuild` 脚本（搜索索引由它生成）。此时把 Vercel 的 Build Command 改为 `pnpm run build` 即可。

**在后台修改站点设置后网站没变化？**
和发布文章一样，设置保存后需要等 Vercel 完成一次重新构建（约半分钟到一分钟）才会生效，刷新前请稍等。

**想换 Sveltia CMS 版本？**
编辑 `public/admin/index.html` 中的 unpkg 地址，固定版本可避免 0.x 阶段自动升级引入变化。

## License

MIT
