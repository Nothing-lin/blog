---
title: 'remote: Support for password authentication was removed on August 13, 2021.'
index_img: /img/default.png
author: nothinglin
sticky: false
date: 2021-09-26 13:37:37
tags: github报错
categories: GitHub收集录
---







# 发现错误

我在写hexo博客的时候一般都有一个备份的习惯，就在这次我完成了Nothinglin主题的开发时，将博客主题移至现在这个博客中进行发布且备份时发现，`hexo b`不能正常备份到我的GitHub仓库中的brandName分支上。

![image-20210926153905171](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160202.png)

首先肯定的是这次备份失败了，但是是什么原因导致失败的呢？仔细阅读了一下那几句英语发现：

`remote: Support for password authentication was removed on August 13, 2021.`



> 2021年8月13号开始，GitHub客户端不支持密码登录了，我们在客户端不能用密码进行登录验证了，必须要创建一个token指令替代密码！！



# 错误分析

一开始没有发现：

`Please use a personal access token instead`

这句话，也就是说用token替换掉密码来进行登录，所以我遇到问题的第一反应就是找度娘。等我把报错语句进行搜索之后发现了一篇处理此问题的博文：

> [github开发人员在七夕搞事情：remote: Support for password authentication was removed on August 13, 2021.](https://blog.csdn.net/weixin_41010198/article/details/119698015)

按照他的方法进行处理之后，我的hexo博客也可以进行正常备份了！





# 处理错误

### 创建新的token

![image-20210926154826114](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160208.png)



![image-20210926154943316](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160212.png)



![image-20210926155045222](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160217.png)

![image-20210926155315585](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160220.png)



![image-20210926155440381](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160224.png)



![image-20210926155619130](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160228.png)



![image-20210926155736722](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160231.png)



![image-20210926155818849](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160235.png)



![image-20210926160013617](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/26/20210926160239.png)



所以到这里就差不多解决了这个问题了，为了防止以后还会出现这种情况，在这里以博客的形式记录下来了。