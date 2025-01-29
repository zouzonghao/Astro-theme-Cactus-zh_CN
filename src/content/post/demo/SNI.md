---
title: "SNI与CloudFlare流量劫持"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "29 Jan 2025"
tags: ["优选", "Vercel"]
---

## 1. SNI基础概念

想象一个会员制餐厅大楼：
- 大楼里有多家不同的餐厅（多个网站）
- SNI就像是你的预约信息（"我要去xx餐厅"）
- 前台根据预约信息引导你到对应餐厅

```mermaid
graph TB
    subgraph "会员制餐厅大楼(服务器)"
    A[前台<br/>服务器接待] -->|SNI信息| B[餐厅114]
    A -->|SNI信息| C[餐厅514]
    A -->|SNI信息| D[餐厅1919]
    end
    E[访客<br/>客户端] -->|告知预约餐厅<br/>SNI信息| A
```

![image.png](https://roim-picx-9nr.pages.dev/rest/M3OgfnK.png)

## 2. 正常代理流程

把这个过程想象成：你想去一个需要通过走地道才能到达的地方（目标网站），找了一个老北京人（向导）帮助你。

```mermaid
sequenceDiagram
    participant C as 你(客户端)
    participant P as 向导(代理VPS)
    participant T as 目的地(目标网站)
    
    Note over C,T: 正常代理流程就像找向导带路
    C->>P: 1. 找到向导(建立连接)
    C->>P: 2. 告诉向导暗号(SNI)
    P->>T: 3. 向导带你去目的地
    T->>P: 4. 获取资源
    P->>C: 5. 交给你
```

![image.png](https://roim-picx-9nr.pages.dev/rest/DhPgfnK.png)

## 3. CloudFlare劫持流程

现在想象：你原本约好的向导在一个中转站(CloudFlare)工作，所以所有人都必须先去中转站报到。

```mermaid
graph LR
    subgraph "完整流程(双倍路程)"
    A[你<br/>客户端] -->|1.先去中转站| B[CloudFlare<br/>中转站]
    B -->|2.转给向导| C[代理VPS<br/>向导]
    C -->|3.还要回中转站| B
    B -->|4.最后才到目的地| D[目标网站]
    end
    
    style B fill:#ff9,stroke:#333,stroke-width:4px
    style C fill:#bbf,stroke:#333,stroke-width:4px
```

![image.png](https://roim-picx-9nr.pages.dev/rest/lNUgfnK.png)

### 3.1 流量消耗说明

就像本来一次就能到的地方：
- 现在要先去中转站报到
- 再从中转站去见向导
- 向导还要带你回中转站
- 最后才能到目的地

结果：
- 向导要跑双倍的路（代理VPS流量翻倍）
- 路程变长（延迟增加）
- 花费更多（流量费用增加）

## 4. SNI伪装机制

SNI伪装就像是：
- 你有一本特殊的"护照"(SNI)
- 表面写着去普通地方(如microsoft.com)
- 实际是用来通过特殊通道的暗号

```mermaid
graph TB
    subgraph "SNI伪装机制"
    A[你的请求] -->|看似去微软| B{代理服务器}
    B -->|实际目的地| C[真实网站]
    end
    
  
```

![image.png](https://roim-picx-9nr.pages.dev/rest/kDZgfnK.png)

## 5. 为什么CloudFlare会劫持流量？

想象CloudFlare像一个强制检查站：
- 如果用了他们的标记(CloudFlare域名)
- 所有相关人员(流量)都必须经过他们检查
- 不能走其他路(直连)

```mermaid
sequenceDiagram
    participant C as 客户端
    participant CF as CloudFlare(强制检查站)
    participant V as 代理VPS(向导)
    participant T as 目标网站
    
    Note over C,T: 使用CloudFlare域名的后果
    C->>CF: 1.必须先检查
    CF->>V: 2.转交给向导
    V-->>T: 3.想直接去目的地(失败)
    V->>CF: 4.被迫回检查站
    CF->>T: 5.由检查站送达
```

![image.png](https://roim-picx-9nr.pages.dev/rest/PTa6fnK.png)

## 6. 最佳实践建议

为避免这种情况，应该：
1. 使用没有CloudFlare代理的域名
2. 或使用IP直连
3. 避免不必要的中转

```mermaid
graph TB
    subgraph "正确的配置"
    A[客户端] -->|直接联系| B[代理VPS]
    B -->|直接访问| C[目标网站]
    end
    
    subgraph "错误的配置"
    D[客户端] -->|被迫中转| E[CloudFlare]
    E -->|多余路径| F[代理VPS]
    end
```

## 核心要点总结：

1. SNI是访问网站的"预约信息"
2. 代理服务是找"向导"带路
3. CloudFlare域名会迫使流量绕路
4. 流量绕路导致双倍消耗
5. 选择正确的SNI可避免这些问题

