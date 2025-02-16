---
title: "Debain/Ubuntu开启Swap交换内存"
description: "This post showcases using the markdown admonition feature in Astro Cactus"
publishDate: "16 Feb 2025"
tags: ["Swap", "Linux"]
---
最近捡了个垃圾NAT小鸡，老是炸内存关机，开个swap能好一点，勉强能跑......
## 什么是Swap?
Swap就像内存的备胎，当物理内存不够用时，系统会把内存里躺平的老数据搬到硬盘上躺尸。虽然速度慢得像树懒交配，但总比程序当场暴毙强。
## 检查Swap 分区
```
free -m
```
![image.png](https://roim-picx-9nr.pages.dev/rest/C0V4YOK.png)

可以看到swap分区是0，就是没开。
## 开启Swap
比较优雅的办法，使用fallocate命令创建Swap 分区：
```
fallocate -l 256MB /swapfile
```
老实一点的办法：
```
dd if=/dev/zero of=/swapfile bs=1M count=256
```
一般2G以下开RAM的1.5-2倍都可以。

设置文件权限：
```
chmod 600 /swapfile
```
激活 SWAP 分区:
```
mkswap /swapfile
swapon /swapfile
```
经过一翻操作过后再用free -m命令查看，可以看到swap分区已经启用了
![image.png](https://roim-picx-9nr.pages.dev/rest/zY4GYOK.png)
下面就是一些收尾工作
## 开机自启
```
echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```
## 调整Swappiness值
Swapiness值默认是60(0-100),开得太高内存交换过于频繁，CPU遭不住
可以使用这个命令查看值：
```
cat /proc/sys/vm/swappiness
```
![image.png](https://roim-picx-9nr.pages.dev/rest/9OkgYOK.png)

稍微改小一点，本来就是洋垃圾拼起来的垃圾小鸡
使用这个命令修改：
```
echo "vm.swappiness=10" >> /etc/sysctl.conf
```
然后输入这个命令让它生效
```
sysctl -p
```
![image.png](https://roim-picx-9nr.pages.dev/rest/EDL6YOK.png)

## 临时开启（重启失效）：

```
sysctl vm.swappiness=10
```

## 关闭Swap

停用 Swap 分区：
```
swapoff -v /swapfile
```
编辑fstab
```
vim  /etc/fstab
```
删除 /swapfile swap swap defaults 0 0 这一行。

删除 /swapfile文件：
```
rm /swapfile
```
- **SWAP用的好，关机次数少；盲目开太大，硬盘死得早**