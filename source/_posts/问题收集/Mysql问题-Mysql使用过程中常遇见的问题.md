---
title: Mysql问题 | Mysql使用过程中常遇见的问题
index_img: /img/default.png
author: nothinglin
date: 2021-12-17 15:18:57
tags: Mysql
categories: 问题收集
---



> 在编程的过程中，我们经常会遇到代码错误之外的报错，那就是环境变量的报错。对于Mysql来说的话那就是对应的数据库版本的匹配问题。

## 数据库版本与数据库驱动版本的冲突

**先来看看报错情况：**

![image-20211217152834130](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/17/20211217154155.png)



遇到报错的话第一时间就是先去百度搜索看看是哪里错误的，查询之后的搜索结果都把矛头指向了数据库驱动版本上。

![image-20211217153058826](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/17/20211217154200.png)



根据这个解决方案，最后我也把我的问题给解决了。

**参考资料：**

- [解决Could not retrieve transaction read-only status from server](https://www.codeleading.com/article/51273377891/)





## Mysql8+与mysql5+驱动名的差异

对于JavaWeb还有一个让我们摸不着头脑的问题就是数据库的驱动名，数据库5+的驱动名和数据库8+的驱动名是有区别的。比如：

**Mysql5+：**

```mysql
jdbc.driver=com.mysql.jdbc.Driver
```

**Mysql8+:**

```
jdbc.driver=com.mysql.cj.jdbc.Driver
```

![image-20211217153605041](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/17/20211217154206.png)

注意它们的区别，进行项目环境配置的时候一定要注意这些。



## 数据库地址连接问题

有时候就真的莫名其妙，我也不知道怎么回事，比如下面的地址配置：

```mysql
# 数据库连接（nothinglin_note是数据库的名称）
dbUrl=jdbc:mysql://localhost:3306/nothinglin_note
```

有时候可以，有时候出问题，必须要加一些后缀才能保证少出问题，我现在还没搞明白，但是我下面这些后缀能够保证我目前的**Mysql数据库6.0.11版本**与**jdbc驱动5.1.9版本**能够不出问题。

```mysql
# 数据库连接（nothinglin_note是数据库的名称）
dbUrl=jdbc:mysql://localhost:3306/nothinglin_note?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT&useSSL=false
```

既然还不清楚就先记着先吧，后面能力上去之后再去分析原因。



**更新中····**