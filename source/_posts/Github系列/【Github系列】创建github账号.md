---
title: 【Github系列】创建github账号
index_img: /img/default.jpg
date: 2021-03-28 13:07:00
tags:
categories:
---

# ![](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/12/29/20201229203912.png)【Github系列】创建github账号

> 此教程在windows操作系统平台下进行操作，但是在进行github官网的访问过程中需要一些准备工作。



### 配置HOSTS文件

在创建GitHub的过程中，可能有些电脑并不能直接访问github官网的 - - 需要借助一些方法来解决这个问题。对于没有科学上网环境的电脑配置来说，最好的方法那就是修改HOSTS文件来实现github官网的访问。

> 网站推荐：https://github.com/521xueweihan/GitHub520  ，[备用链接（推荐chrome）](https://cdn.fobzs.com/-----https://github.com/521xueweihan/GitHub520)



##### 寻找HOSTS文件

HOSTS文件在Windows操作系统下的默认路径一般是`C:\Windows\System32\drivers\etc`。

![](https://z3.ax1x.com/2021/03/26/6X4Dcd.png)



使用记事本的方式进行打开，并且向其中添加下面的内容，在我写这个教程的时候我这边还是有效的，如果大家添加了这段内容仍然不能正常访问GitHub官网的话，可以点击我上面给的链接地址，有一个GitHub520的项目持续更新新的且有效的内容，大家可以去获取最新的内容添加到HOSTS文件即可。

```bash
# GitHub520 Host Start
185.199.108.154               github.githubassets.com
140.82.113.22                 central.github.com
185.199.108.133               desktop.githubusercontent.com
185.199.108.153               assets-cdn.github.com
185.199.108.133               camo.githubusercontent.com
185.199.108.133               github.map.fastly.net
199.232.69.194                github.global.ssl.fastly.net
140.82.112.4                  gist.github.com
185.199.108.153               github.io
140.82.112.3                  github.com
140.82.113.6                  api.github.com
185.199.108.133               raw.githubusercontent.com
185.199.108.133               user-images.githubusercontent.com
185.199.108.133               favicons.githubusercontent.com
185.199.108.133               avatars5.githubusercontent.com
185.199.108.133               avatars4.githubusercontent.com
185.199.108.133               avatars3.githubusercontent.com
185.199.108.133               avatars2.githubusercontent.com
185.199.108.133               avatars1.githubusercontent.com
185.199.108.133               avatars0.githubusercontent.com
185.199.108.133               avatars.githubusercontent.com
140.82.114.10                 codeload.github.com
52.217.1.132                  github-cloud.s3.amazonaws.com
52.216.179.211                github-com.s3.amazonaws.com
52.216.99.43                  github-production-release-asset-2e65be.s3.amazonaws.com
52.217.110.220                github-production-user-asset-6210df.s3.amazonaws.com
52.216.107.44                 github-production-repository-file-5c1aeb.s3.amazonaws.com
185.199.108.153               githubstatus.com
64.71.168.201                 github.community
185.199.108.133               media.githubusercontent.com


# Update time: 2021-03-25T22:05:26+08:00
# Star me GitHub url: https://github.com/521xueweihan/GitHub520
# GitHub520 Host End
```



![](https://z3.ax1x.com/2021/03/26/6X4ynI.png)



我们在修改HOSTS文件的过程中可能会遇到一些权限问题，保存修改的时候HOSTS文件是需要你进行另外保存的情况。这种情况建议你在修改之前进行HOSTS文件的备份，如下图所示。

![](https://z3.ax1x.com/2021/03/26/6X46Bt.png)



我们先为HOSTS文件添加一个后缀`.bak`。然后再复制新的HOSTS文件进行修改，注意，这里的HOSTS.bak是原HOSTS文件。



### 注册GitHub账号

> GitHub官网：https://github.com/

![](https://z3.ax1x.com/2021/03/26/6X42Af.png)



我们点击`Sign up`进行注册账号。

![](https://z3.ax1x.com/2021/03/26/6X4RN8.png)



下一步我们需要到邮箱中确认邮箱地址（邮箱内容）。

![](https://z3.ax1x.com/2021/03/26/6X4W4S.png)



完成之后我们将再次收到一封邮箱告知我们已经成功注册了GitHub账号（邮箱内容）。

![](https://z3.ax1x.com/2021/03/26/6X45cj.png)



目前我们先暂时跳过下面的三个选项。

![](https://z3.ax1x.com/2021/03/26/6X4Ijs.png)



我们先浏览我们的个人主页，也就是我们最经典的页面。

![](https://z3.ax1x.com/2021/03/26/6X4HH0.png)



目前来说我们就已经完成了Github账号的注册了，接下来就需要我们对Github进行实用性操作了。

目前来说我也还是在学习阶段，我也还是Github小白，所以文中存在错误或其它问题，还希望大家多多指正，此教程分享给自己跟和我一样的小白进行学习参考。

![image-20201231121338270](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/12/31/20201231121340.png)