---
title: 实战项目研究 | 基于SSM仿天猫商城系统
index_img: /img/default.png
author: nothinglin
date: 2021-12-18 00:32:41
tags: SSM项目
categories: 项目实战研究分析
---





> 本次项目研究基于作者 **我没有三颗心脏** 的仿天猫商城代码及说明博文，原文地址参考如下：
>
> [Tmall_SSM](https://github.com/wmyskxz/Tmall_SSM)
>
> [模仿天猫实战【SSM】——总结](https://www.jianshu.com/p/8fc8e0bd45e0)

![image-20211218003850196](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020244.png)

## 前言

对于实战项目研究相关的博客，其实我不是很想分（一）、（二）、···、（六）那么多篇的文章来写，一次性写在一篇博客内也方便学习和查找。所以这篇博客将会从头到尾记录我对此项目的研究及获得的收获感悟。

**怎样发现这个项目的？**

其实很早的时候就发现了的，不过那时（大一、大二左右的样子吧）觉得自己的知识储备还不够，感觉无法下手这样的项目。有尝试过下载进行运行，但是都失败了，所以就没再弄过了。

不过最近确实有点焦虑，Java没学精通，框架在上课的时候也没好好听，JavaWeb简单的项目开发已经可以掌握了，不过还是要参考大量代码的那种，而SSM框架结构到现在都还没了解。而且现在感觉学校的一些成绩好的，在做课设的时候都直接用SSM框架搭建项目，对比自己的项目之后，让我感觉到了世界的参差。

前面的文章 **[思考|造轮子还是用轮子？](https://www.nothinglin.ml/2021/12/05/独立思考/思考-造轮子还是用轮子？/)** 也提及过，最高效的学习方法就是 **问题驱动型**的学习方式，也就是我学这个知识能给我解决什么样的问题。所以我觉得，如果我要入门SSM的话，那么我就应该从实战项目入手，对项目结构和涉及到的编程内容，包的使用进行拆解学习，而不是像在学校那样，把所有知识都系统地过一遍之后再来实战。如果是这样的话，那么我的学习热情将会降低一半以上。我不知道我下一章学到的内容在整个项目系统结构中有什么用！或许根本就不会被用到，这种情况下就会陷入自我怀疑当中，很容易影响学习的热情。

如果一开始就有了一个明确的实战项目，项目中所用到的知识点都是实实在在可以感受到的，这样的话就能加深我们的知识理解能力，达到事半功倍的效果。

所以我就在Github上面直接搜索 **SSM项目** ，第一个出现的就是这个基于SSM仿天猫商城的项目。其实试过很多其他的项目，要么就是没给数据库文件，要么就是导入运行报错很多，代码凌乱。最后也就只有这个项目是我目前能够运行开来执行其中的全部功能的项目。

如果要研究一个项目，把它成功运行起来就等于研究了一半。运行不起来的或者没有数据库文件的基本被我称为垃圾项目。

## 下载此项目

> 这个是项目的github地址：[Tmall_SSM](https://github.com/wmyskxz/Tmall_SSM)

把项目下载到本地中使用IDEA开发工具将其导入进去。



## 检查代码是否报错

**报错：**



![image-20211218015540365](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020252.png)



**分析：**

按照我的理解就是，大概是IDEA无法识别到Java工具包，难道是Java的环境配置问题？更换Java的工作环境试一试。

**解决：**

![image-20211218015831839](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020258.png)

原来是用错了Java开发版本导致的报错，只需要把对应的版本换回你电脑中的版本就没啥问题了，其他报错的话再根据IDEA给出的解决方案进行处理。一般都是代码语法错误或者是包的路径没导入正确，都是这些问题。



## 将数据库文件中的数据导入到mysql中

数据库导入的过程中就有点坑了，我大二的时候之所以放弃就是因为数据库没有成功导入，导入的过程中报了一堆错误。当时也看不懂，然后就放弃了。

它就报错说不能创建表，但是也不知道哪里有问题，就觉得可能是作者给的数据库错误导致的。

![image-20211218011028132](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020303.png)



后面我也不知道是怎么发现的，可能是能力提升了一点了吧，突然就觉得奇怪，创建下面的这些表的过程中涉及到了一些外键，我们都知道mysql在执行db文件的时候都是从上到下执行的，可是这里定义的外键是在下面的表中的，也就是此时定义外键而这个外键还不存在，所以说这个表能正常创建吗？不可能的。



![image-20211218010541652](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020309.png)



所以说涉及到数据库文件中含有外键定义的数据，一般都不成功，都需要自己手动按照顺序进行sql语句的执行。比如`order_item`这个表需要用到order表、product表、user表中的外键，所以就先找到这些表创建的sql语句执行运行。运行完，确定这些表都创建之后最后再运行`order_item`的sql语句进行这个表的创建，这样就能成功创建了。因为它要涉及到的外键表都已经存在了，所以可以正常创建了。



![image-20211218011916736](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020313.png)

把数据库中的数据搞定之后，当然就是要找到这个项目中的数据库配置文件，调通本地项目和数据库的连接，方便对数据库中的数据进行操作。



## 配置数据库连接信息

```txt
TMall_SSM
└── src
 └── main
     └── resource
         ├── jdbc.properties
         └── generatorConfig.xml
```

根据我的折腾，我对于数据库的连接信息修改了这两个文件中的内容之后就可以了。

![image-20211218013130460](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020318.png)



**注意：**

对于**jdbc.driver**项中的值，一定要看好自己数据库中的版本。

**Mysql5+：**

```sql
jdbc.driver=com.mysql.jdbc.Driver
```

**Mysql8+:**

```sql
jdbc.driver=com.mysql.cj.jdbc.Driver
```

还有jdbc.url值中的后缀，我的电脑没有这些后缀的话数据库会报错，我现在还没弄明白为什么。

```sql
# 数据库连接（nothinglin_note是数据库的名称）
dbUrl=jdbc:mysql://localhost:3306/nothinglin_note?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT&useSSL=false
```



![image-20211218013204325](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020323.png)

对应修改这两个地方的配置信息。

上面操作完成之后按道理来说，就应该连通数据库了。如果你的数据库还没有连通的话，那么就意味着你的数据库驱动版本和数据库版本不匹配。



## 解决数据库驱动版本和数据库版本的不匹配

我的Mysql数据库版本是6.0.1版本，网上说对应的数据库驱动版本需要在5.1.8 - 5.2.1 这些版本中。一开始我是没留意这个的，我一开始的数据库驱动版本是5.1.2版本。但是后来一直报jdbc的错误，复制报错信息到百度查了才发现可能是数据库驱动版本和数据库版本不匹配。最后尝试将数据库驱动版本也就是jdbc换成5.1.9版本之后，基本数据库连接问题就基本解决了。

![image-20211218014159300](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020328.png)



![image-20211218014228702](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020331.png)



数据库配置好了之后，接下来就是紧张的时刻了，就是如何把项目运行起来。这个很明显就是一个JavaWeb项目，需要用服务器把项目给跑起来。所以我选择用我熟悉的tomcat来把项目跑起来。



## 配置tomcat

![image-20211218014528064](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020336.png)



![image-20211218014658151](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020340.png)



![image-20211218014756267](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020344.png)



![image-20211218014840522](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020351.png)

做到这里，其实关于Tomcat的配置都是差不多了的，差不多就可以进行运行了。可是，在我的电脑上，对于这些要用到maven管理一些工具包，在本地环境中是可以识别到的，但是启动tomcat之后就报错，说某某包不存在，这种情况怎么解决？



## tomcat运行时报错maven包不存在？

**报错：**



![image-20211218015306452](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020356.png)



**解决：**



![image-20211218015139145](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020400.png)



![image-20211218015219082](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020408.png)

根据图片的提示来操作就可以把这个问题给解决掉。



## 成功运行项目

直接 http://localhost:8080/ 进入就会跳转到http://localhost:8080/home 这个页面中去

![image-20211218003850196](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/18/20211218020413.png)





## 数据库设计

> 一个好的系统需要有一个好的数据库设计，那么什么样的数据库设计能够更灵活地管理系统数据呢？我们在这个仿天猫系统的数据库设计中能得到什么启发？同时这个数据库有没有什么地方需要改进的？
>
> 我需要学习这个系统的数据库设计，同时我也要查阅更多资料看数据库应该怎么设计，不过这个内容应该会出一篇新的博客来记录，这里关于数据库的设计主要以仿天猫系统为主以及简要谈谈自己的感悟。

**仿天猫系统的数据库设计：**

![image-20211220003017211](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/20/20211220163209.png)



数据库设计的外键设计挺关键的，外键决定你各个表中的数据是否可以关联。

![image-20211220180723207](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/20/20211220180735.png)

从上面可以看出，数据库设计过程中外键的设计挺重要的，后面我会写一篇关于 **数据库设计外键之美** 的博客，讨论一下外键在整个数据库设计过程中的作用。



## SSM项目结构

我现在对SSM基本是零基础，我如果需要学习这个SSM项目实战的话，首先我需要知道SSM的基本结构是怎样的，还有和传统的servlet又有那些区别，有什么优势？为什么被称为轻量级应用框架。

> 我不会在这里太过于详细介绍关于ssm入门的内容，这里关于SSM项目结构是基于本次研究的项目进行的，不过在进行之前我需要恶补一下关于SSM的基本内容，我会单独写一篇博客来记录，这里的SSM项目刨析主要是围绕仿天猫项目展开，这样的话整篇博客就不会太冗余。
>
> **PS：**这其实就是一种主动学习的方法，我现在需要学习SSM基本内容来帮助我理解这个项目的源代码，有目的性的学习都是一种主动高效的学习，我觉得都会变得非常高效。
>
> 研究前先学内容：**SSM项目框架入门**







**持续更新中····**