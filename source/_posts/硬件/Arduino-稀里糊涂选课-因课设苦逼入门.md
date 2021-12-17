---
title: Arduino | 稀里糊涂选课-因课设苦逼入门
index_img: /img/default.png
author: nothinglin
date: 2021-12-15 13:31:09
tags: arduino编程
categories: 硬件
---

![IMG_20211215_002106](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000242.jpg)



## 前言

先讲一下背景吧，arduino真的是误打误撞入门的。我在学校的专业是软件工程，除非自己感兴趣，否则是很少会接触硬件相关的东西的。大二下学期选课，本来已经选了好多水课了的，但是还是差2分才把这学期的选分选满，为了大四不用再上选修课，所以选修分能提前修就提前修，不然后面压力就会挺大的。

此时正一筹莫展时，辅导员在群里发布了一些推荐课程，其中就有这门arduino创意实践，我看是考查课不用考试，而且说到时跟着老师做一些硬件成品，比如什么自动浇花之类的好玩创意实践。本来我对这些就有点感兴趣，再加上主观判断应该是门水课，压力不会太大，可以省出时间搞其他事情，于是就上了辅导员的贼船。刚好选完这门课之后这学期的选修分修满了。

其实我对这门课想吐槽又想点赞，就怀着这种矛盾的心情。为什么想吐槽，上课几个星期下来，慢慢觉得这门课挺枯燥的，最后才发现，班里就我这么一个软件系的，其他的都是计算机系。难怪看他们插电路插得那么老练，我还在那里懵逼地看着教程，而且不懂原理地照着教程一孔一孔地插。

好在老师对实验报告要求不多，但是他挺认真改的。其实我挺怕哪些认真地老师，老师一认真，你的平时分就少了。这就意味着要费更多时间去应付分数，祈祷能过。

一直以来的实验报告我都是做得出来的我就拍照，做不出来就拍别人的照。反正都是能混就混。反正实验报告也就只是要看运行结果图。

平时上课也就是根据元器件的顺序来进行得，比如第一周认识arduino开发板，搞一个helloworld输出。第二周就是led灯点亮实验，第三周控制开关按键的使用，第四周蜂鸣器、第五周数码管显示器等等····

> 学到第十四周，好了给你一个课设题目，自己去完成，准时交！

![image-20211215172035662](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000250.png)

我的老天，这个时候我既不懂C语言，也不懂电路设计一点基础，要怎么搞啊？

原本我想着的是，我们学完老师会一周一个步骤，带我们做一个什么浇花系统啊，或啥的。然后成品就当课设之类的，万万没想到啊，带我们学会用元器件之后就给我们题目自己搞。要怎么搞哦？

**arduino课设题目**

![image-20211215172603648](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000254.png)

![image-20211215172640079](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000300.png)

对于零基础arduino的朋友们来说，谈谈你们的感受。我一开始看题目我是真的懵逼啊，这怎么搞？对了我第一反应就是上github上找。糟糕！一点有用的或者说搭边的都没有，我分析了这题目，找了一个我认为较为简单的选题来做。那就是第一个**声敏反应测试仪**，其他的看得我真的一脸懵逼。

不知道是不是这么名字太高大上了，还是怎的。我上百度搜了声敏反应测试仪+arduino关键字，就没几个有用的，所以说那几周我都很郁闷，一筹莫展。主要是这门课只有我自己，其他我都不熟，想抱大腿也找不到。这时我真的绝望了，我一直劝舍友不要再选单片机了。

这时对这门课的厌恶心情也起来了，一直骂这门课疯狂吐槽。再加上这门课是辅导员推荐的，私底下也疯狂吐槽。就这样，郁闷了一两周，十七周就要交作业了，我已经做好抱大腿的准备了，准备尝试厚着脸皮去搭讪几个大牛。可惜没成，终归怪我脸皮薄，要怎么搭讪？

- 嘿！兄弟，课程设计一起组队咯！
- **这门课设不用组队的！**
- 呜呜，兄弟，能不能带带我？
- **呵呵**

当然上面都是我造的梗，但想到这些我真的厚不了脸皮。难道跟老师摊牌，说自己是软件系的，对电路没有基础，这个课设真的完成不了？

算了吧，我就这么点出息？



## 灵感出现

如果按照常规操作搜索声敏反应测试仪的话，那么肯定没有这么高大上的东西。但仔细想想，这玩意像什么？

![image-20211215174331829](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000305.png)

> 像不像一个蜂鸣器+秒表？

顺着秒表的思路去搜索`arduino秒表`果然有一些参考资料了。

![image-20211215174807370](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000310.png)

一个按键开始，一个按键停止，把这个秒表做成反应测试仪也是可以的，只不过差了一个蜂鸣器做成声敏。如果能够把蜂鸣器加到这个电路中并且跑起来的话那么我的课设计算有着落了。可是怎么接？要知道我是零基础啊！

![image-20211215175044965](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000318.png)

所以只能摸打滚爬，开始去了解一些基本原理，在上面装置的基础上加上蜂鸣器，让蜂鸣器开始响一声之后启动秒表然后自己听到蜂鸣器的响声之后立刻按下按钮，然后输出这个过程是时间。如果能实现这个的话，那么我的课设就基本完成了。

可是要怎么接？arduino上面的孔要怎么插？面包板的电路原理是怎样的？我上课的时候都没有思考过这些问题，都是照着教程和图片插线的，根本就没想过这些问题，为什么有的电路要用电阻？有的却不用？明明都是一样的目的，为什么一个可以用电阻，一个可以不用？真的想不明白。

![image-20211215175654903](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000321.png)



## 明白面包板原理

![image-20211215180156584](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000325.png)

上面这个秒表的装置，看一下面包板的电路，看到那些绿色的荧光线了没有？中间是上下连通导电而左右不导电，两边是左右连通，上下不导电。中间凹槽隔缘了两边电路，如果要连接就需要用到导线。

理解了面包板原理了，那么按键如何控制蜂鸣器发声？或者arduino如何监听按键是否按了？



## arduino代码理解

上面秒表的代码如下：

```c++
unsigned long startTime,finishedTime,passedTime;

void setup() {
// put your setup code here, to run once:
Serial.begin(9600);

pinMode(2,INPUT);

pinMode(3,INPUT);

Serial.println(“按第一个按钮开始/重置，按第二个按钮计时。”);

}

void loop() {

  // put your main code here, to run repeatedly:

 if(digitalRead(2))

 {

  startTime=millis();

  delay(200);//按钮消抖

  Serial.println(“开始…”);

  }

 if(digitalRead(3))

 {

   finishedTime=millis();

   delay(200);

   passedTime=finishedTime-startTime;

   display_time(passedTime);

  }

}

void display_time(unsigned long t)

{

  float h ,m, s, ms;

  unsigned long left;

  h=int(t/3600000);//一个小时3600秒

  left = t%3600000;//除去小时数剩余的毫秒数

  m = int(left/60000);

  left = left%60000;

  s=int(left/1000);

  left = left%1000;

  ms=left;

  Serial.println(“原始毫秒数为：”+String(t));

  Serial.println(“转换后的时间：”);

  Serial.print(“时：”);

  Serial.print(h,0);

  Serial.print(“分：”);

  Serial.print(m,0);

  Serial.print(“秒：”);

  Serial.print(s,0);

  Serial.print(“毫秒：”);

  Serial.println(ms,0);

  }
```

**代码结构示意图**

![image-20211215181918257](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000331.png)



## 代码监听元器件-如何控制元器件

![image-20211215190441172](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000336.png)

![image-20211215190704482](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216002023.png)

我的乖乖，我一直以为arduino上面那些1-9的数字是电压值，没想到是引脚号，不同应交的接上不同的元器件，相当于：

![image-20211215190934590](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000341.png)

然后arduino代码中只要控制对应的引脚号中的值就能控制面包板上的元器件，我的乖乖！

**随便看个简单的蜂鸣器案例或许就明白了**

![image-20211215191237745](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000346.png)

![image-20211215191513364](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000349.png)

## 如何实现按钮+蜂鸣器实现按一下哔一下？

**代码**

代码的话我在网上找到了，可气的是CSDN作者竟然没给出电路图，这咋办？

![image-20211215192453509](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000354.png)

> [原文链接](https://blog.csdn.net/weixin_50198463/article/details/121485240?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-121485240.pc_agg_new_rank&utm_term=%E8%9C%82%E9%B8%A3%E5%99%A8%E6%8C%89%E4%B8%80%E4%B8%8B%E5%93%8D%E4%B8%80%E4%B8%8B&spm=1000.2123.3001.4430)



```c
#define buzzer 3		//定义buzzer I/O number is 7;
#define KEY 2			//定义key I/O NUMBER IS 2;
int KEY_NUM = 0;		//按键变量赋初值

void BUZZER(){
    for (int i = 0; i < 80; i++) { //输出一个频率的声音
        digitalWrite(buzzer, HIGH); //发声音
        delay(1);//延时1ms
        digitalWrite(buzzer, LOW); //不发声音
        delay(1);//延时1ms
  }
}   
                                                           
void ScanKey() {
  KEY_NUM = 0;
  if (digitalRead(KEY) == LOW) 			//有按键按下
{ delay(80);
    if (digitalRead(KEY) == LOW) {
      KEY_NUM = 1; 			//变量设置为1
      while(digitalRead(KEY) == LOW);			 //等待按键松手
    }
  }
  if (KEY_NUM == 1)
    BUZZER();
}

void setup()
{
  pinMode(KEY, INPUT_PULLUP); 		//定义keyI/O is INPUT_PULLUP
  pinMode(buzzer, OUTPUT); 			//定义buzzer I/O is OUTPUT
  Serial.begin(300);
}
void loop()
{
  ScanKey();			//按键扫描程序，当按键按下时，该子程序会修改key-num的值
}


```



**电路图**

对我这种小白，垃圾白来说，必须要电路图和代码才能把功能给实现出来。没电路图怎么办？只能自己根据上面的发现自己尝试折腾一下咯，还能怎办？

> 在线arduino模拟器
>
> [点击打开](https://wokwi.com/arduino/projects/318056720122249793)

按照思路就是，buzzer（蜂鸣器）接入3号引脚，KEY（按钮）接入2号引脚。因为两者是不同的元器件，所以各自接入不同的GND中，或许也可以接入同一个GND中，但是我没调通，入门暂且就先这么认为吧。如图所示：

![image-20211215232430137](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000400.png)

研究把GND放同一个地方也可以：

![image-20211215233103940](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000405.png)



## 两个按钮控制同一个蜂鸣器如何实现？

实际上就只需要思考如何添加新的按钮到arduino上还有代码需要怎么改而已。一步一步来吧，首先arduino上怎么加装一个按钮？我的思路是，两个按钮是同一个元器件，这样的话我尝试把另一个按钮接到4号引脚上，再把GND接在同一个孔位上。

**线路图：**

![image-20211215233249635](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000412.png)

**代码：**

```c
#define buzzer 2		//定义buzzer I/O number is 7;
#define KEYO 3			//定义key I/O NUMBER IS 2;
#define KEYT 4			//定义key I/O NUMBER IS 2;
int KEY_NUM = 0;		//按键变量赋初值

void BUZZER() {
  for (int i = 0; i < 80; i++) { //输出一个频率的声音
    digitalWrite(buzzer, HIGH); //发声音
    delay(1);//延时1ms
    digitalWrite(buzzer, LOW); //不发声音
    delay(1);//延时1ms
  }
}

void ScanKey() {
  KEY_NUM = 0;
  if (digitalRead(KEYO) == LOW) 			//有按键按下
  { delay(80);
    if (digitalRead(KEYO) == LOW) {
      KEY_NUM = 1; 			//变量设置为1
      while (digitalRead(KEYO) == LOW);			 //等待按键松手
    }
  }

  if (digitalRead(KEYT) == LOW) 			//有按键按下
  { delay(80);
    if (digitalRead(KEYT) == LOW) {
      KEY_NUM = 1; 			//变量设置为1
      while (digitalRead(KEYT) == LOW);			 //等待按键松手
    }
  }
  if (KEY_NUM == 1)
    BUZZER();
}

void setup()
{
  pinMode(KEYO, INPUT_PULLUP); 		//定义keyI/O is INPUT_PULLUP
  pinMode(KEYT, INPUT_PULLUP); 		//定义keyI/O is INPUT_PULLUP
  pinMode(buzzer, OUTPUT); 			//定义buzzer I/O is OUTPUT
  Serial.begin(300);
}
void loop()
{
  ScanKey();			//按键扫描程序，当按键按下时，该子程序会修改key-num的值
}


```

新增了按键KEYO、KEYT（按键1、按键2），注意代码的变化，理解代码。

这样我就能够学会两个按键控制一个蜂鸣器了，这样的话再结合秒表的代码，其中按键1按下之后给出提示语**“等下听到哔一声之后立刻按下按钮”**的提示，然后再延迟4s出提示语且开始计时。但我们按下按键2之后，就触发截至计时且计算时间和输出结果。

所以整个思路就这样，还行吧，强行学习。从被动学习变成主动学习，效率高上一倍。实际上我只是一个下午和一个晚上的研究就把这个思路想出来了。所以迫不得已写下这篇文章记录一下接触arduino的过程，也不知道自己后面还会不会再接触arduino，当然入门了就挺好的。



## 简易版声敏反应测试仪

电路图出来了，就差代码了，代码其实也很简单。秒表的核心代码我已经拿过来了，我只需要更改按键1和按键2的判断执行的内容就行了，详细请看代码：

```c
#define buzzer 7    //定义buzzer I/O number is 7;
#define KEY 2     //开始按钮
#define KEYO 3   //结束按钮
int KEY_NUM = 0;    //按键变量赋初值
unsigned long startTime, finishedTime, passedTime;

//蜂鸣器发声方法
void BUZZER() {
  for (int i = 0; i < 80; i++) { //输出一个频率的声音
    digitalWrite(buzzer, HIGH); //发声音
    delay(1);//延时1ms
    digitalWrite(buzzer, LOW); //不发声音
    delay(1);//延时1ms
  }
}

//时间换算方法
void display_time(unsigned long t) {

  float h , m, s, ms;
  unsigned long left;
  h = int(t / 3600000); //一个小时3600秒
  left = t % 3600000; //除去小时数剩余的毫秒数
  m = int(left / 60000);
  left = left % 60000;
  s = int(left / 1000);
  left = left % 1000;
  ms = left;

  Serial.println("原始毫秒数为：" + String(t));
  Serial.println("转换后的时间：");
  Serial.print("时：");
  Serial.print(h, 0);
  Serial.print("分：");
  Serial.print(m, 0);
  Serial.print("秒：");
  Serial.print(s, 0);
  Serial.print("毫秒：");
  Serial.println(ms, 0);
}

//按键响应方法
void ScanKey() {
  //  KEY_NUM = 0;
  //  按键1开始计时
  if (digitalRead(KEY) == LOW)      //有按键按下
  {
    if (digitalRead(KEY) == LOW) {
      //      KEY_NUM = 1;      //变量设置为1
      //while (digitalRead(KEY) == LOW);     //等待按键松手
      Serial.println("听到哔一声，立刻按下按钮！");
      delay(4000);
      BUZZER();
      startTime = millis();
    }
  }
  //  按键2停止且输出计时
  if (digitalRead(KEYO) == LOW) {

    finishedTime = millis();
    delay(200);
    passedTime = finishedTime - startTime;
    display_time(passedTime);

  }
}

void setup()
{
  pinMode(KEY, INPUT_PULLUP);     //定义keyI/O is INPUT_PULLUP
  pinMode(KEYO, INPUT_PULLUP);     //定义keyI/O is INPUT_PULLUP
  pinMode(buzzer, OUTPUT);      //定义buzzer I/O is OUTPUT
  Serial.begin(9600);

}
void loop()
{

  ScanKey();      //按键扫描程序，当按键按下时，该子程序会修改key-num的值
}
```

![1940129568-林子愉-3](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000418.png)

上传代码到arduino且打开串口监听器：

![1940129568-林子愉](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000422.png)



## 总结

做完项目我就迫不及待地想记录下来，当然还有很多地方没写好，我更想把自己从无到有的思路写出来，不过感觉挺难的，当时思考、获得启发的资料都没有保存下来，只能直接写了。下面我想分享出一些我觉得好用的东西：

**电路图设计工具（fritzing）：**

![image-20211215235243556](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000427.png)

**在线arduino模拟器（WOKWI）：**

![image-20211215235326427](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000431.png)



**我的课设成果：**

这门课本来就是体验课，老师其实也是知道我们班里的人的水平参差不齐，都是鼓励我们做出来，不要求做得有多好，能够入门，体会到arduino的好玩就可以了，这个还让我感觉挺不错的。也是能够研究下去的原因，所以我的成品就是有点简陋，不过对于我来说感觉真的挺不错了，毕竟是入门就可以弄成这样了~（尴尬不失礼貌的微笑）

![](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2021/12/16/20211216000437.jpg)

**参考材料：**

- [Arduino 蜂鸣器+按键 （按一下响一声）](https://blog.csdn.net/weixin_50198463/article/details/121485240?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-121485240.pc_agg_new_rank&utm_term=%E8%9C%82%E9%B8%A3%E5%99%A8%E6%8C%89%E4%B8%80%E4%B8%8B%E5%93%8D%E4%B8%80%E4%B8%8B&spm=1000.2123.3001.4430)
- [Arduino第一行代码——Hello World](https://www.jianshu.com/p/c358e6fc8baf)
- [Arduino蜂鸣器与按键的结合](https://blog.csdn.net/qq_43813140/article/details/103263200)
- [Arduino 用两个按键分别控制两个LED灯点亮](https://blog.csdn.net/ling3ye/article/details/52933792)
- [arduino从零开始（31）制作秒表](https://www.kidscoding8.com/27079.html)
- [（二十）arduino入门：蜂鸣器的使用](https://www.qutaojiao.com/4627.html)