---
title: "DeepSeek-Api及其几种调用方式"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "2 Feb 2025"
tags: ["DeepSeek", "NextChat"]
---


---

# DeepSeek-Api获取及其几种调用方式

![NVIDIA Deepseek-R1封面图](https://roim-picx-9nr.pages.dev/rest/hXTPPnK.png)

## 一、获取NVIDIA API密钥
### 1. 注册账号
**访问入口**：[NVIDIA NIM平台 Deepseek-R1页面](https://build.nvidia.com/deepseek-ai/deepseek-r1)  
**账号类型**：
- 个人邮箱：限额1000次/天（推荐Gmail/Outlook）
- 企业邮箱：限额5000次/天（任意企业域名邮箱，无需验证）

**注册流程**：
1. 点击右上角「Sign In」使用谷歌账号登录
2. 填写注册表单（企业信息可虚构）：
3. 提交后立即获得API密钥

### 2. 密钥管理
**查看位置**：Dashboard → Get API Keys → `nvapi-xxxx`  
![API密钥截图](https://roim-picx-9nr.pages.dev/rest/VndQPnK.png)

**代理地址**：
```bash
https://integrate.api.nvidia.com/v1
```

**技术参数**：
- 非蒸馏完整版671B参数模型
- 支持16k上下文
- 响应速度：平均2-3秒/请求

---

## 二、本地客户端配置（NextChat）
### 1. 客户端下载
**支持平台**：Windows/macOS/Linux  
**下载地址**：[GitHub Release页面](https://github.com/ChatGPTNextWeb/NextChat/releases)

### 2. 配置参数
![客户端配置截图](https://roim-picx-9nr.pages.dev/rest/ajPqPnK.png)

**必填字段**：
```yaml
API Base URL: https://integrate.api.nvidia.com/v1
API Key: nvapi-xxxx
自定义模型ID: deepseek-ai/deepseek-r1
```

**高级设置**：
```markdown
- Temperature: 推荐0.7（平衡创造性与准确性）
- Max Tokens: 建议2048（避免长文本截断）
```

---

## 三、私有化部署方案
### 方案A：Vercel免费部署（推荐）
**操作步骤**：
1. Fork仓库：访问 [NextChat GitHub](https://github.com/ChatGPTNextWeb/NextChat) → 点击右上角Fork

2. 创建Vercel项目：
   - 登录 [Vercel](https://vercel.com)
   - 选择「Import Project」→ 导入Fork的仓库

3. 环境变量配置：
   ```env
   OPENAI_API_KEY=nvapi-xxxx
   BASE_URL=https://integrate.api.nvidia.com/v1
   CODE=访问密码（如123456）
   CUSTOM_MODELS=deepseek-ai/deepseek-r1
   DEFAULT_MODEL=deepseek-ai/deepseek-r1
   ```

4. 部署完成获取域名：`your-project.vercel.app`(可绑定自己的域名)

5. 截图

   ![image.png](https://roim-picx-9nr.pages.dev/rest/FIptPnK.png)

### 方案B：Docker本地部署（仅供参考）
`docker-compose.yml` 配置：
```yaml
version: '3'
services:
  nextchat:
    image: yidadaa/chatgpt-next-web
    ports:
      - "3000:3000"
    environment:
      - OPENAI_API_KEY=nvapi-xxxx
      - BASE_URL=https://integrate.api.nvidia.com/v1
      - CUSTOM_MODELS=deepseek-ai/deepseek-r1
      - DEFAULT_MODEL=deepseek-ai/deepseek-r1
    restart: unless-stopped
```
启动命令：
```bash
docker-compose up -d
```

---

