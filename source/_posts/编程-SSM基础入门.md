---
title: 编程 | SSM基础入门
index_img: /img/default.png
author: nothinglin
date: 2022-01-13 19:39:18
tags: Spring
categories: 编程
---



> 本篇文章是我的SSM框架入门笔记，笔记内容基于黑马程序员的课程内容：[点击打开](https://www.bilibili.com/video/BV1WZ4y1P7Bp?p=35&spm_id_from=pageDriver)

# Spring 简介

Spring是分层的Java SE、EE 应用的全栈轻量级开源框架，以IoC（inverse Of Control：控制反转）和AOP（Aspect OrientedProgramming：面向切面编程）为内核。

提供了**视图层SpringMVC、持久层Spring JDBCTemplate以及业务层事务管理**等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和类库，逐渐称为使用最多的Java EE企业应用开源框架。

> 这句话视频里抄下来的，我现在还不懂这是什么意思。



## 优势

### 方便解耦、简化开发：

通过Spring提供的IoC容器，可以将对象间的依赖关系交由Spring惊醒控制，避免硬编码所造成的过度耦合。用户也不必再为单例模式类、属性文件解析等这些很底层的需求编写代码，可以更专注于上层应用。

### AOP编程的支持：

通过Spring的AOP功能，方便进行面向切面编程，许多不容易用创痛OOP实现的功能都可以通过AOP实现。

> 这个听抽象的，我的水平还不够去理解！

### 声明式事务的支持：

可以将我们从单调烦闷的事务管理代码中解脱出来，通过声明式方式灵活的进行事务管理，提高开发效率和质量。

### 方便程序的测试：

可以用非容器依赖的编程方式进行几乎所有的测试工作，测试不再是昂贵的操作，而是随手可做的事情。

### 方便集成各种优秀框架：

Spring对各种优秀框架（Struts、Hibernate、Hessian、Quartz）的支持。

### 降低JavaEE API的使用难度：

Spring对JavaEE API（如JDBC、JavaMail、远程调用等）进行了薄薄的封装层，使这些API的使用难度大为降低。



## Spring体系结构

![image-20220113200301349](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015353.png)

简单对比一下 javaweb 和 spring 的用法。

![image-20220113200749395](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015358.png)

![image-20220113200833283](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015402.png)



## Spring开发步骤

- 导入Spring开发包
- 编写Dao接口和实现类
- 创建Spring核心配置文件
- 在Spring配置文件中配置UserDaoImpl接口实现类
- 使用Spring的API获得Bean实例



**导入Spring开发包**

```xml
//pom.xml文件
<dependencies>
	<dependency>
    	<groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.0.5.RELEASE</version>
    </dependency>
</dependencies>
```



## 简单的Spring程序

```txt
Spring 
├─.idea
│      
└─spring_ioc
    │  pom.xml
    │  spring_ioc.iml
    │  
    └─src
        ├─main
        │  ├─java
        │  └─resources
        └─test
            └─java
```

> 上面个是项目的基本结构，下面的相关代码，按顺序操作。

```xml
//pom.xml
<dependencies>
	<dependency>
    	<groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.0.5.RELEASE</version>
    </dependency>
        
  <dependency>
     <groupId>junit</groupId>
     <artifactId>junit</artifactId>
     <version>4.12</version>
     <scope>test</scope>
  </dependency>
</dependencies>
```

```java
//UserDao.java
package com.nothinglin.dao;

public interface UserDao {
    public void save();
}
```

```java
//UserDaoImpl.java
package com.nothinglin.dao.impl;

import com.nothinglin.dao.UserDao;

public class UserDaoImpl implements UserDao {
    //这里没写，实际有一个无参构造器
    public void save(){
        System.out.println("save running...");
    }
}
```

```xml
//applicationContext.xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">
<beans>
    <bean id="userDao" class="com.nothinglin.dao.impl.UserDaoImpl"></bean>
</beans>
```

```java
//firstSpringTest.java
public class firstSpring {

    public static void main(String[] args) {
        //加载Spring配置文件
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //获取Spring容器中对应id下的内容
        UserDao userDao = (UserDao)app.getBean("userDao");
        //调用目标对象的方法
        userDao.save();
    }
}
```

![image-20220113200833283](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015408.png)



# SpringXML配置文件

## Bean标签基本配置

> **基本属性：**
>
> **id**：Bean实例在Spring容器中的唯一标识
>
> **class**：Bean的全限定名称
>
> **scope**：指对象的作用范围（**singleton、prototype、request、session、global session**）

![image-20220113225557690](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015414.png)



singleton和prototype之间的区别：

![image-20220113234210550](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015418.png)

**singleton：**

```xml
//applicationContext.xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">
<beans>
    <bean id="userDao" class="com.nothinglin.dao.impl.UserDaoImpl" scope="singleton"></bean>
</beans>
```

```java
public class firstSpring {

    public static void main(String[] args) {
        //加载Spring配置文件
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //获取Spring容器中对应id下的内容
        UserDao userDao1 = (UserDao)app.getBean("userDao");
        UserDao userDao2 = (UserDao)app.getBean("userDao");
        //调用目标对象的方法
//        userDao.save();
        System.out.println(userDao1);
        System.out.println(userDao2);
    }
}
```

![image-20220113234657273](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015423.png)



> 当scope的取值为singleton值时，
>
> Bean的实例化个数：1个
>
> Bean的实例化时机：当Spring核心文件被加载时，实例化配置Bean实例
>
> Bean的生命周期：
>
> 1.**对象创建**：当应用加载，创建容器时，对象就被创建了
>
> 2.**对象运行**：只要容器在，对象就一直活着
>
> 3.**对象销毁**：当应用写在，销毁容器时，对象就被销毁



**prototype：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN//EN" "http://www.springframework.org/dtd/spring-beans.dtd">
<beans>
    <bean id="userDao" class="com.nothinglin.dao.impl.UserDaoImpl" scope="prototype"></bean>
</beans>
```



![image-20220113235100507](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015428.png)



> Bean的实例化个数：多个
>
> Bean的实例化时机：当调用getBean（）方法时实例化Bean
>
> 1.**对象创建**：当使用对象时，创建新的对象实例
>
> 2.**对象运行**：只要对象在使用中，就一直活着
>
> 3.**对象销毁**：当对象长时间不用时，被Java的垃圾回收机制回收



## Bean生命周期配置

inti-method 和 destroy-method的意义

> **init-method**：指定类中的初始化方法的名称
>
> **destroy-method**：指定类中销毁方法的名称



```xml
//applicationContext.xml
<beans>
    <bean id="userDao" class="com.nothinglin.dao.impl.UserDaoImpl" init-method="init" destroy-method="destroy"></bean>
</beans>
```


```java
//UserDaoImpl.java
public class UserDaoImpl implements UserDao {

    //无参构造器
    public UserDaoImpl(){
        System.out.println("UserDaoImpl创建...");
    }

    //初始化方法
    public void init(){
        System.out.println("初始化方法...");
    }

    //销毁方法
    public void destroy(){
        System.out.println("销毁方法...");
    }

    //普通方法
    public void save(){
        System.out.println("save running...");
    }
}
```


```java
public class firstSpring {

    public static void main(String[] args) {
        //加载Spring配置文件
        ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //获取Spring容器中对应id下的内容
        UserDao userDao = (UserDao)app.getBean("userDao");
        System.out.println(userDao);
        app.close();
    }
}
```

![image-20220114002719678](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015434.png)



## Bean实例化的三种方式

> 1.无参构造方法实例化
>
> 2.工厂静态方法实例化
>
> 3.工厂实例方法实例化

工厂实例化方法还没接触，无参构造方法实例化就是我们上面的那个spring程序一样，那个就是无参构造方法的方式来实例化对象。



**工厂静态方法实例化：**

```xml
//applicationContext.xml
//静态工厂
<beans>
    <bean id="userDao" class="com.nothinglin.factory.StaticFactory" factory-method="getUserDao"></bean>
</beans>
```
```java
//StaticFactory.java
//静态工厂
public class StaticFactory {

    public static UserDao getUserDao(){
        return new UserDaoImpl();
    }
}
```


```java
//userdao接口
public interface UserDao {
    public void save();
}
```


```java
//userdao实例化
public class UserDaoImpl implements UserDao {

    //无参构造器
    public UserDaoImpl(){
        System.out.println("UserDaoImpl创建...");
    }

    //普通方法
    public void save(){
        System.out.println("save running...");
    }
}
```


```java
public class firstSpring {

    public static void main(String[] args) {
        //加载Spring配置文件
        ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //获取Spring容器中对应id下的内容
        //静态工厂实例化
        UserDao userDao = (UserDao)app.getBean("userDao");
        //调用目标对象的方法
        userDao.save();
    }
}
```

![image-20220114013545101](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2022/1/14/20220114015446.png)



**工厂实例方法实例化：**

```xml
//applicationContext.xml
//实例工厂实例化bean对象
<beans>

    <!--  实例工厂实例化bean对象  -->
    <bean id="factory" class="com.nothinglin.factory.DynamicFactory"></bean>
    <bean id="userDao" factory-bean="factory" factory-method="getUserDao"></bean>

</beans>
```


```java
//DynamicFactory.java
//实例工厂
public class DynamicFactory {

    public UserDao getUserDao(){
        return new UserDaoImpl();
    }
}
```


```java
//userdao接口
public interface UserDao {
    public void save();
}
```


```java
//userdao实例化
public class UserDaoImpl implements UserDao {

    //无参构造器
    public UserDaoImpl(){
        System.out.println("UserDaoImpl创建...");
    }

    //普通方法
    public void save(){
        System.out.println("save running...");
    }
}
```


```java
public class firstSpring {

    public static void main(String[] args) {
        //加载Spring配置文件
        ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //获取Spring容器中对应id下的内容
        //静态工厂实例化
        UserDao userDao = (UserDao)app.getBean("userDao");
        //调用目标对象的方法
        userDao.save();
    }
}
```

> 对比了上面的几种方法，我在想：这三种方式存在的意义在哪？我还没搞明白这个。



## service层封装实例化bean对象方法

通过观察上面的代码可以发现有个地方是可以进行优化，那就是配置文件的加载。对于配置文件加载这种繁琐的工作，应该交由service层去完成。

```txt
Spring
│  
├─main
│  ├─java
│  │  └─com
│  │      └─nothinglin
│  │          ├─dao
│  │          │  │  UserDao.java
│  │          │  │  
│  │          │  └─impl
│  │          │          UserDaoImpl.java
│  │          │          
│  │          ├─factory
│  │          │      DynamicFactory.java
│  │          │      StaticFactory.java
│  │          │      
│  │          └─service
│  │              │  UserService.java
│  │              │  
│  │              └─impl
│  │                      UserServiceImpl.java
│  │                      
│  └─resources
│          applicationContext.xml
│          
└─test
    └─java
            firstSpring.java
```

```xml
//applicationContext.xml
<beans>
<bean id="userDao" class="com.nothinglin.dao.impl.UserDaoImpl"></bean>
</beans>
```

```java
public interface UserDao {
    public void save();
}
```

```java
public class UserDaoImpl implements UserDao {

    //无参构造器
    public UserDaoImpl(){
        System.out.println("UserDaoImpl创建...");
    }

    //初始化方法
    public void init(){
        System.out.println("初始化方法...");
    }

    //销毁方法
    public void destroy(){
        System.out.println("销毁方法...");
    }

    //普通方法
    public void save(){
        System.out.println("save running...");
    }
}
```

```java
public interface UserService {
    public void save();
}
```

```java
public class UserServiceImpl implements UserService {
    public void save() {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao = (UserDao) app.getBean("userDao");
        userDao.save();
    }
}
```

```java
public class SpringTest {

    public static void main(String[] args) {

        UserService userService = new UserServiceImpl();
        userService.save();

    }
}
```

通过观察可以发现，这个service层更像是封装起一些繁琐的方法而存在的。