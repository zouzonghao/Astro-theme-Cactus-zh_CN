---
title: "astro添加评论功能"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "9 Jan 2025"
tags: ["astro"]
---

前几天用astro搭建好了本博客，感觉缺点什么，想起来是没有评论功能，遂有了本文。评论插件用的是giscus，是用GitHub Discussions存储的，也不会丢失，随便选一个仓库就行了。

# 配置giscus

首先，对你的仓库有一些前置要求：
- 必须是 [公开的 GitHub 仓库](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public)

- 安装了 [giscus app](https://github.com/apps/giscus)

- 在仓库中 [启用 Discussions 功能](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)



在 [giscus.app](https://giscus.app) 创建配置。



输入仓库名称，然后选择用<title>做映射，它会作为discussion的标题。

![](https://roim-picx-9nr.pages.dev/rest/bcZnImK.png)

分类选择 announcements。

启用以下特性：

- reaction

- 评论输入框在上方

- 懒加载

主题暂时选择dark，下面再讲主题的配置。

配置好后会得到一段代码

```

<script src="https://giscus.app/client.js"

​        data-repo="faust6312/astroblog"

​        data-repo-id="R_kgDONnB1Tadawadadadg"

​        data-category="Announcements"

​        data-category-id="DIC_kwDONnB1Ts4Cldawdada1Oz"

​        data-mapping="title"

​        data-strict="0"

​        data-reactions-enabled="1"

​        data-emit-metadata="0"

​        data-input-position="top"

​        data-theme="dark"

​        data-lang="en"

​        data-loading="lazy"

​        crossorigin="anonymous"

​        async>

</script>

```

# 配置主题亮暗切换

由于博客网站是可以切换黑暗/明亮主题的，所以我们这里安装了 @giscus/react。



在 Astro 中，还需要安装 React 集成。

先把仓库克隆下来：

![](https://roim-picx-9nr.pages.dev/rest/6DZMImK.png)

然后执行：

```

pnpm install

npx astro add react

pnpm i @giscus/react

```

创建Comment.tsx

```



import * as React from 'react';

import Giscus from '@giscus/react';



const id = 'inject-comments';



const Comments = () => {

  const [mounted, setMounted] = React.useState(false);



  React.useEffect(() => {

​    setMounted(true);

  }, []);



  return (

    <div id={id} className="w-full">

​      {mounted ? (

​        <Giscus

​          id={id}

​          repo="username/repo"

​          repoId="R_kgDOKeudTw"

​          category="Announcements"

​          categoryId="DIC_kwDOKeudT84Cch4W"

​          mapping="title"

​          reactionsEnabled="1"

​          emitMetadata="0"

​          inputPosition="top"

​          lang="zh-CN"

​          loading="lazy"

​          theme="dark"

​        />

​      ) : null}

​    </div>

  );

};



export default Comments;

```

路径在-->src/components/Comment.tsx



配置主题切换

```

import * as React from 'react'

import Giscus from '@giscus/react'



const id = 'inject-comments'



// 获取 localStorage 中 theme 的值

function getSavedTheme() {

  return window.localStorage.getItem('theme')

}



// 获取系统主题

function getSystemTheme() {

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

}



const Comments = () => {

  const [mounted, setMounted] = React.useState(false)

  const [theme, setTheme] = React.useState('light')



  React.useEffect(() => {

​    const theme = getSavedTheme() || getSystemTheme()

​    setTheme(theme)

​    // 监听主题变化

​    const observer = new MutationObserver(() => {

​      setTheme(getSavedTheme())

​    })

​    observer.observe(document.documentElement, {

​      attributes: true,

​      attributeFilter: ['data-theme'],

​    })



​    // 取消监听

​    return () => {

​      observer.disconnect()

​    }

  }, [])



  React.useEffect(() => {

​    setMounted(true)

  }, [])



  return (

    <div id={id} className="w-full">

​      {mounted ? (

​        <Giscus

​          id={id}

​          repo="username/repo"

​          repoId="R_kgDOKeudTw"

​          category="Announcements"

​          categoryId="DIC_kwDOKeudT84Cch4W"

​          mapping="title"

​          reactionsEnabled="1"

​          emitMetadata="0"

​          inputPosition="top"

​          lang="zh-CN"

​          loading="lazy"

​          theme={theme}

​        />

​      ) : null}

​    </div>

  )

}



export default Comments

```

导入组件

```

---

import Comments from "@components/Comment";

---

<!-- 使用 client:only 指令 -->

<Comments client:only="react" />



```

路径为-->src/layouts/BlogPost.astro



然后把配置好的文件，直接push到仓库，重新部署一下就OK了。

效果图：

![](https://roim-picx-9nr.pages.dev/rest/M0ZQImK.png)
