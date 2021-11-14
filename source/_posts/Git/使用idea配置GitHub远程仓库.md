---
title: 使用idea配置GitHub远程仓库
index_img: /img/default.png
author: nothinglin
date: 2021-11-13 21:49:48
tags: Git
categories: Git
---

# 使用idea配置GitHub远程仓库

前言：本教程是参考csdn博主的教程进行编写的，编写理由为：

- 整理成为适合自己的笔记教程
- 害怕博主删除博文之后就没有参考教程了，可说是一种备份吧



你什么时候会希望使用idea配置git和GitHub进行代码版本管理？前提条件是我们已经有了一个项目等待进行管理，所以我们先要有一个现存的项目。当然我们也要先把git的基本环境配置给准备好先。

（创建项目的过程和git的环境变量配置过程我就不写了····）



## idea配置导入git

![菜单文件2](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/8/20210908175717.gif)

这个是教程给出的，我好像没设置过这一步，我的idea直接就可以使用git的了，如果不能正常使用git的话，那么建议不要跳过这一部分，如果git正常使用就直接略过这里吧····



## 给项目进行git仓库初始化

![菜单文件2](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/8/20210908175727.gif)

一般上面的步骤完成之后，验证git仓库是否创建成功可以右键项目文件夹看有没有git选项：

![image-20210908162242938](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/8/20210908175732.png)



## 熟悉idea的git版本管理，配置GitHub仓库且上传项目

![菜单文件2](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/8/20210908175755.gif)

通过上面的操作过程我们可以发现，我们如果要将项目推送到GitHub仓库的话，那么我们就需要GitHub仓库的仓库地址，还有一个就是GitHub账号的token令码。



## 创建GitHub仓库和创建GitHub的token令牌

![菜单文件2](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/9/8/20210908175812.gif)



> 为什么需要token令牌？因为我尝试使用账号、密码进行登录的时候idea给我报错404，后来使用token的方法来和GitHub进行连接就可以了，所以我还是推荐使用token的方法来配置GitHub账号。



## 补充说明

因为我的idea已经和GitHub进行过链接，我已经配置好了token，所以后面我直接push项目到GitHub上就直接上传了，没有弹出账号配置。不过一般都没有什么问题，只要拥有新建的仓库地址和建立的token，后面按照要求一步一步的进行配置就能够将项目上传到GitHub上。push成功之后就到GitHub的仓库中查看，看有没有上传成功，看到仓库上有文件的话就说明idea的git和GitHub的配置基本完成了。



## 参考材料

由于我的笔记更适合我个人来理解，其中疏漏了许多的细节，因此请查阅我这篇笔记的一手资料进行补漏。

- [github获取token](https://blog.csdn.net/u014175572/article/details/55510825)
- [IDEA 使用Git图文详解](https://blog.csdn.net/a749402932/article/details/107148373/)
- [IDEA 连接github 出错 invalid authentication data. 404 Not Found-Not Foun](https://blog.csdn.net/vast_lee/article/details/111254157)
