# 博客在线编辑（Sveltia CMS）部署指南

本博客已集成 [Sveltia CMS](https://github.com/sveltia/sveltia-cms)（Decap CMS 的现代开源替代前端），实现网页端在线编辑、发布文章：**GitHub 作为代码仓库，Vercel 作为托管平台，GitHub OAuth 认证登录后台**。

## 工作原理

1. 访问 `你的域名/admin`，浏览器从 CDN 加载 Sveltia CMS 编辑器
2. 点击登录，跳转 GitHub 授权页，同意后 GitHub 携带授权码跳回 `/oauth/callback`
3. 服务端用授权码 + Client Secret 换取 access token 交给浏览器里的编辑器（Secret 只存在 Vercel 环境变量里，绝不经过浏览器）
4. 你在编辑器里写文章、点保存 → 编辑器调用 GitHub API 向仓库提交一个 commit
5. Vercel 检测到新提交，自动重新构建部署（约半分钟到一分钟）
6. 构建完成后，访客即可看到新文章

> [!NOTE]
> 后台点"发布"后文章不是立即上线的，需要等 Vercel 完成一次重新构建（约 0.5–1 分钟），这是 git-based 博客的正常现象。

## 部署步骤

### 1. 推送到 GitHub

把本项目推送到你的 GitHub 仓库（新建仓库后 `git push` 即可）。

### 2. Vercel 导入仓库

在 [vercel.com](https://vercel.com) 注册登录 → 关联 GitHub → Import 你的仓库。

- Framework Preset 会自动识别为 Astro
- 项目根目录的 `.nvmrc` 已指定 Node 22，无需额外设置
- 先不要急着部署，完成下面第 3、4 步后再触发部署（`/oauth` 路由需要环境变量）

### 3. 注册 GitHub OAuth App

打开 https://github.com/settings/applications/new ，填写：

- **Application name**：随意，如 `my-blog-cms`
- **Homepage URL**：`https://你的域名`
- **Authorization callback URL**：`https://你的域名/oauth/callback`
- 其余保持默认：**不要**勾选 "Enable Device Flow"，**不要**勾选 "Expire user access tokens"（开启后 token 过期会导致 CMS 会话频繁失效）

注册后会得到：

- **Client ID**（页面直接显示）
- **Client Secret**（点 "Generate a new client secret" 生成，只显示一次，当场复制保存）

### 4. 配置 Vercel 环境变量

Vercel → 你的项目 → Settings → Environment Variables，添加两个变量（作用域选 **All Environments**）：

| 变量名 | 值 |
| --- | --- |
| `OAUTH_GITHUB_CLIENT_ID` | 第 3 步得到的 Client ID |
| `OAUTH_GITHUB_CLIENT_SECRET` | 第 3 步得到的 Client Secret |

### 5. 修改 CMS 配置并推送

编辑 `public/admin/config.yml`：

```yaml
backend:
  name: github
  repo: 你的用户名/你的仓库名   # 例如 zouzonghao/astro-cactus
  branch: main                  # 你的分支
  base_url: https://你的域名    # 不带末尾斜杠
  site_domain: 你的域名
```

提交推送到 GitHub，Vercel 会自动构建部署。

### 6. 开始使用

访问 `https://你的域名/admin` → 点击登录按钮跳转 GitHub 授权 → 回到后台即可编辑发布。

## 后台功能

- **博文**：标题、简介、发布日期、标签、草稿、置顶、正文（Markdown 编辑器，可插入图片）
- **笔记**：短内容随手记
- **标签页**：为标签写介绍页
- 上传的图片存放在仓库 `public/assets/images/` 目录

> [!NOTE]
> - 勾选"草稿"的文章不会出现在网站上，适合写到一半的内容
> - 封面图（coverImage）字段暂未接入后台，需要封面时请通过 Git 提交，参考 `content/posts/testing/cover-image/` 的写法
> - OG 分享图无需手动填写，构建时根据标题自动生成（已内置中文字体）

## 本地开发

本地开发、构建**不需要**配置任何环境变量（OAuth 相关代码只在访问 `/oauth` 路由时才读取）。如需本地测试 OAuth 流程，复制 `.example.env` 为 `.env` 并填入两个变量即可。

```bash
pnpm install   # 安装依赖
pnpm dev       # 本地开发 http://localhost:4321
pnpm build     # 构建到 dist/
```

## 常见问题

**后台登录报错 / 跳转后 404？**
检查 Vercel 环境变量是否已配置、OAuth App 的回调地址是否为 `https://你的域名/oauth/callback`、`config.yml` 的 `repo`/`branch` 是否正确。

**构建失败提示缺少环境变量？**
本项目构建不强制要求环境变量。若遇到，确认变量名拼写为 `OAUTH_GITHUB_CLIENT_ID` / `OAUTH_GITHUB_CLIENT_SECRET` 且作用域包含 Production。

**部署后搜索功能不可用？**
Vercel 有时使用 `astro build` 作为构建命令而跳过 `postbuild` 脚本（搜索索引由它生成）。此时把 Vercel 的 Build Command 改为 `pnpm run build` 即可。

**想换 Sveltia CMS 版本？**
编辑 `public/admin/index.html` 中的 unpkg 地址，固定版本可避免 0.x 阶段自动升级引入变化。

## 个性化清单

上线前建议修改以下内容（均有中文 TODO 注释）：

- [ ] `src/site.config.ts`：站点名（title）、作者（author）、简介（description）、网站地址（url）
- [ ] `src/pages/about.astro`：关于页内容
- [ ] `src/pages/index.astro`：首页的自我介绍
- [ ] `src/components/SocialList.astro`：社交链接（默认指向主题仓库）
- [ ] 删除 `content/` 下的示例文章，开始写你自己的内容
