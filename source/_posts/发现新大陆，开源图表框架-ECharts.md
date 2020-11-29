---
title: 发现新大陆，开源图表框架--ECharts
date: 2020-11-29 16:44:20
tags:
- Tools
---

ECharts是一个开源的JS图表框架，如果熟悉Github的朋友们会对其中的contributions表格不陌生。不知道GitHub是不是用了ECharts制作的贡献值图表，但是可以利用ECharts制作出仿GitHub的贡献值图表。<!-- more -->

## 我是怎么发现ECharts的？



我最近在研究开发一个web项目，应该有点类似博客系统之类的，可以说是从零开始吧。

像我这些没见过什么世面的大二仔，面对一个web项目简直是毫无头绪。

我是上大一买了电脑之后才开始接触程序开发的相关知识，可以说接触面相当小。

大一的课程只是简单教了一些C++和Java的简单基础知识，其他拓展知识大部分都是靠疫情期间在家里网上冲浪吸收的。

由于我自己的知识面非常窄，天真的我以为所有程序都是靠开发者一个轮子一个轮子的造。

比如一个资深的程序员接了一个项目并且在一个月就完成了。

我会天真的以为他是以超强的编程能力来开发项目的，一开始佩服得我五体投地。

直到我后来接触到了开发框架，我发现好像如果我的知识面再广一点、动手能力和理解能力再锻炼一下，好像我也能够在一个月之内开发出一个不怎么复杂的项目。

我后面在面临“重复造轮子”和“改造轮子”之间进行了思考。

重复造轮子吧，如果自己不是大神，起码要花很多很多时间投入，才能造出一个好的轮子。造轮子的人编程能力是毋庸置疑的，但是需要投入的时间就很让我自己思考。

> 造轮子是学习所需，改轮子是职业素养

这是师兄们偶尔开玩笑提到。我想了一想好像也挺有道理的。

一般在学习相关知识的时候，尝试重复造轮子的话，能提高自己对相关编程知识的理解。毕竟学习阶段时间就是多，随便造。

但是如果是在职场赶项目或者参加比赛之类的，重复造轮子就没什么时间成本了。

一般情况下，时间都是不充分的，除非自己的编程能力非常强，否则大多情况的人都会选择在GitHub上搜索类似的项目源码来阅读和学习，并且改造它用到自己的项目中去。

额嗯...跑题了。

我一开始是想设计一个仿GitHub 的contributions的贡献值表格的。

![image-20201129172124322](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180014.png)

一开始我是有一点懵懵的。

我的前端基础知识只学了一点HTML，CSS。我的JS还没接触过。

这该怎么下手？

我在[codeopen](https://codepen.io/)上搜索了一些相似的demo

![image-20201129172533402](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180018.png)

我利用这个demo改造成了我想要的样子

<img src="https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180020.png" alt="image-20201129172722832" style="zoom:80%;" />

> 这是一个改造轮子的经历。

不过在后面的开发中，如果需要设计各种各样的表格的话，如果还是去codeopen上找demo的话，那么js的整合就比较复杂了。

如果有像jQuery这样一个JS集成框架来设计表格是最好的。

正当我今天研究一个Contributions表格源码的时候，我突然发现了什么。

![image-20201129173647496](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180025.png)

我意外地浏览到这个博客，我发现它的这一个contributions表格挺好的，于是我就去他的GitHub上面查看源码。我把相关的代码提取出来后就像下面这样。

![image-20201129173900013](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180038.png)

我在研究代码的时候，我像优化到最简，然后再阅读它的代码逻辑。方法类似从codeopen上获取demo然后研究一样。

我在简化HTML代码之后，就是这样：

![image-20201129174314597](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180042.png)

它的body代码逻辑和css代码逻辑我基本都理解和弄懂了。

但是它的JS我却不知道怎么简化，

![image-20201129174459367](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180048.png)

它的JS代码竟然有5万多行！！

我在codeopen上找到的demo才几十行，就算你的博客有很多js组件，我猜应该也不用几万行的JS代码吧？

后来我发现：

![image-20201129174733256](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180102.png)

echars.min.js这个插件和jQuery的插件有点像。

于是我就上百度搜了一下Echars这个词。

果然还有像jQuery这样的使用教程，那么我明白了。Echars这个JS插件是一个表格的开发框架来的。

### Echars表格

![image-20201129174954351](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180106.png)

![image-20201129175042934](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180111.png)

![image-20201129173900013](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/29/20201129180119.png)



菜鸟教程上有这个教程的：[点击我](https://www.runoob.com/echarts/echarts-tutorial.html)

其实说到这里，我就思考：今后我学会了Echarts的使用，那么需要制作表格之类的，我就不需要再重复造轮子了。我可以直接使用Echarts这个开发框架来开发自己想要的表格模板。

所以说，今天发现Echarts，解决了我制作表格的困惑与困难。我的项目进展也解决了这一个表格制作的问题。

后面可能我需要安排时间来学习Echarts这表格开发框架了。

可能后面我学习的时候，会记录自己的学习笔记，等后面再说吧！

今天就先到这。

我是Nothinglin，苦逼的学生仔。

![image-20201126105007791](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/11/26/20201126105010.png)