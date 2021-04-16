---
title: 【hexo主题开发】研究hexo博客主题一
index_img: https://z3.ax1x.com/2021/04/15/cRNSXT.jpg
date: 2021-04-15 22:20:01
tags: Hexo
categories: hexo主题开发日记
---

# ![](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/12/29/20201229203912.png)【hexo主题开发】研究hexo博客主题一

### 有话想说

虽然我目前对我的Hexo博客已经非常满意了，我的博客使用的主题是fuid。一开始不会修改主题对Hexo博客的主题有点挑剔，现在学会修改Hexo主题之后便开始魔改fuid主题了，改成现在的主题样式我挺满意的。

但是既然都研究hexo研究一半了，底层编译我是还没开始接触，但是表层的界面我还是研究过挺久的了，感觉自己有开发Hexo博客主题的能力，但是对Hexo博客的接口还不是很熟悉，所以还是慢慢研究吧。

以前都是被博客主题驱使我选择博客框架，从我开始搭建博客开始，一直以来都没有我满意的博客主题，为了找到合适自己的博客主题。我弄过Hugo、jekyll、wordpress、typecho、盖茨比等等... 尝试了这么多种博客框架之后，最适合白嫖和容易操作的还是Hexo博客。最后因为我发现hexo-pdf这个插件之后，我就彻底选择Hexo博客框架了。这样一来我就可以在我的博客中插入PDF文件，可以直接在我的博客页面中直接浏览pdf文件。这对我整理博客笔记和引入资料非常有帮助，也大大提高了我对写博客笔记的热情。

所以我现在先熟悉hexo主题开发的基本配置信息和开发流程，这样可以为我的主题开发奠定夯实基础。



### 官网文档

点击官网直达：[官网](https://hexo.io/zh-cn/docs/templates)

**设定博客主题**

![](https://z3.ax1x.com/2021/04/16/cWYK6f.png)

我们首先是找到博客的配置文件`_config.yml`，其中有一个`theme`的配置选项，我们填写我们的主题文件名，像上图中，我的主题文件夹是`hashnode`，所以我在主题配置中填写`hashnode`。



### 主题文件夹中的结构

```cmd
.
├── _config.yml
├── languages
├── layout
├── scripts
└── source
```

- _config.yml：主题的配置文件
- languages：语言文件夹
- layout：布局文件夹，用来存放主题的模板文件，决定了网站内容的呈现方式，支持ejs文件或swig文件
- script：脚本文件夹，在启动时，hexo会载入此文件内的JavaScript文件
- source：资源文件夹，除了模板以外的Asset，例如CSS、JavaScript文件等，都应该放在这个文件夹中，文件或文件夹开头名称为`_`(下划线)

> 如果文件可以被渲染的话，会经过解析后存储到public文件夹，否则会拷贝到public文件夹中，这里的文件是指ejs、JavaScript、css等这些文件。
>



### 主题发布

当我们完成主题后，可以考虑将它发布到Hexo官方主题列表中，[主题单元测试](https://github.com/hexojs/hexo-theme-unit-test) | [更新文档](https://hexo.io/zh-cn/docs/contributing#%E6%9B%B4%E6%96%B0%E6%96%87%E6%A1%A3)

- fork [hexojs/site](https://github.com/hexojs/site)
- 把仓靠复制到电脑上，并安装相关依赖插件

```bash
$ git clone https://github.com/<username>/site.git
$ cd site
$ npm install
```

- 编辑`source/_data/themes.yml`，在文件中新增主题

```yml
- name: landscape
  description: A brand new default theme for Hexo.
  link: https://github.com/hexojs/hexo-theme-landscape
  preview: http://hexo.io/hexo-theme-landscape
  tags:
    - official
    - responsive
    - widget
    - two_column
    - one_column
```

- 在`source/themes/screenshots`新增同名的截图文档，图片必须为800*500的PNG文件。
- 推送分支
- 建立一个新的合并申请（pull request）并描述改动

> 这一步应该等博客主题开发完毕之后再进行，所以开头先跳过这一部分。



### 模板

模板决定了网站的呈现方式，以下是各页面相对应的模板

| 模板       | 用途     | 回退      |
| :--------- | :------- | :-------- |
| `index`    | 首页     |           |
| `post`     | 文章     | `index`   |
| `page`     | 分页     | `index`   |
| `archive`  | 归档     | `index`   |
| `category` | 分类归档 | `archive` |
| `tag`      | 标签归档 | `archive` |



### 布局（Layout）

如果页面结构类似，例如两个模板都有页首（header）和页脚（footer），那么我们可以考虑通过（layout）布局来让两个模板共享相同的结构。一个布局文件必须要能显示body变量的内容，如此一来模板的内容才能被显示。

![](https://z3.ax1x.com/2021/04/16/cWYMX8.png)

![](https://z3.ax1x.com/2021/04/16/cWY10g.png)

像上图所示，页首就是相同结构的，这样一来我们只需要布局一个layout文件，保存页首和页脚在这个布局文件中，然后中间的主题body变量再各自定义。

![](https://z3.ax1x.com/2021/04/16/cWY37Q.png)

像下图中我定义我的首页，如下：

![](https://z3.ax1x.com/2021/04/16/cWYGkj.png)

我们只需要引入Layout模板，然后在模板中定义我们的主体body内容，我首页body部分定义的就是首页的列表清单部分。



**官方示例**

![](https://z3.ax1x.com/2021/04/16/cWYJts.png)

每一个ejs文件模板都是默认使用layout模板布局的，我们可以在[front-matter](https://blog.csdn.net/weixin_42252518/article/details/99550466)中指定为其他布局，或者设定为false来关闭布局功能，甚至可以在布局中再使用其他布局来建立嵌套布局。

```yml
---
layout: layout（默认）
---
---
layout: post（布局指向post.ejs文件）
---
---
layout: false（关闭布局文件的指向）
---
```



### 局部模版（partial）

局部模版可以让不同模板之间共享相同的组件，例如页首（header)、页脚（Footer）或侧边栏（Sidebar）等，可以利用局部模板功能分割为个别文件，让维护更加便利。

![](https://z3.ax1x.com/2021/04/16/cWYNpq.png)



### 局部变量

![](https://z3.ax1x.com/2021/04/16/cWYyN9.png)



### 优化

如果主题太过于复杂的话，或者是需要生成的文件量太过于庞大的话，可能会大幅度降低性能，出了简化主题之外，还可以使用hexo2.7之后新增的局部缓存（Fragment Caching）功能。它可以存储局部内容，下次便能直接使用缓存内容，可以减少文件夹查询并使生成的速度更快。

它可以用于页首、页脚、侧边栏等文件不常变动的位置，例如：

```JavaScript
<%- fragment_cache('header', function(){
  return '<header></header>';
});
```

如果使用局部模板的话

```JavaScript
<%- partial('header', {}, {cache: true});
```

> fragment_cache()将会缓存第一次的渲染结构，并在之后直接输出缓存的结果，因此只有在不同页面的渲染结果都相同时才应使用局部缓存。比如，在配置中启用了relative_link后不应该再使用局部缓存，因为相对链接在每个页面可能不同。

![](https://z3.ax1x.com/2021/04/16/cWYRc6.png)



### 全局变量

| 变量     | 描述                                                      | 类型                                                         |
| :------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| `site`   | [网站变量](https://hexo.io/zh-cn/docs/variables#网站变量) | `object`; 见 [网站变量](https://hexo.io/zh-cn/docs/variables#网站变量) |
| `page`   | 针对该页面的内容以及 front-matter 中自定义的变量。        | `object`; 见 [页面变量](https://hexo.io/zh-cn/docs/variables#页面变量) |
| `config` | 网站配置                                                  | `object` (站点的配置文件)                                    |
| `theme`  | 主题配置。继承自网站配置。                                | `object` (主题配置文件)                                      |
| `path`   | 当前页面的路径（不含根路径）                              | `string`                                                     |
| `url`    | 当前页面的完整网址                                        | `string`                                                     |
| `env`    | 环境变量                                                  | ???                                                          |



### 网站变量

| 变量              | 描述     | 类型                           |
| :---------------- | :------- | :----------------------------- |
| `site.posts`      | 所有文章 | `array` of `post` objects      |
| `site.pages`      | 所有分页 | `array` of `page` objects      |
| `site.categories` | 所有分类 | `object`，包含了站点全部的分类 |
| `site.tags`       | 所有标签 | `array`，包含了站点全部的标签  |



### 页面变量

**页面（page）**

| 变量               | 描述                                                         | 类型                                   |
| :----------------- | :----------------------------------------------------------- | :------------------------------------- |
| `page.title`       | 页面标题                                                     | `string`                               |
| `page.date`        | 页面建立日期                                                 | [Moment.js](http://momentjs.com/) 对象 |
| `page.updated`     | 页面更新日期                                                 | [Moment.js](http://momentjs.com/) 对象 |
| `page.comments`    | 留言是否开启                                                 | `boolean`                              |
| `page.layout`      | 布局名称                                                     | `string`                               |
| `page.content`     | 页面的完整内容                                               | `string`                               |
| `page.excerpt`     | 页面摘要                                                     | `string`                               |
| `page.more`        | 除了页面摘要的其余内容                                       | `string`                               |
| `page.source`      | 页面原始路径                                                 | `string`                               |
| `page.full_source` | 页面的完整原始路径                                           | `string`                               |
| `page.path`        | 页面网址（不含根路径）。我们通常在主题中使用 `url_for(page.path)`。 | `string`                               |
| `page.permalink`   | 页面的完整网址                                               | `string`                               |
| `page.prev`        | 上一个页面。如果此为第一个页面则为 `null`。                  | `string` or `null`                     |
| `page.next`        | 下一个页面。如果此为最后一个页面则为 `null`。                | `string` or `null`                     |
| `page.raw`         | 文章的原始内容                                               | ???                                    |
| `page.photos`      | 文章的照片（用于相簿）                                       | `array`                                |
| `page.link`        | 文章的外部链接（用于链接文章）                               | `string`                               |



**文章（post）**

与 `page` 布局相同，但新增以下变量。

| 变量              | 描述                      | 类型           |
| :---------------- | :------------------------ | :------------- |
| `page.published`  | 如果该文章已发布则为 true | `boolean`      |
| `page.categories` | 该文章的所有分类          | `array` of ??? |
| `page.tags`       | 该文章的所有标签          | `array` of ??? |



**首页（index）**

| 变量               | 描述                                                         | 类型     |
| :----------------- | :----------------------------------------------------------- | :------- |
| `page.per_page`    | 每页显示的文章数量                                           | `number` |
| `page.total`       | 总页数                                                       | `number` |
| `page.current`     | 目前页数                                                     | `number` |
| `page.current_url` | 目前分页的网址                                               | `string` |
| `page.posts`       | 本页文章 ([Data Model](https://hexojs.github.io/warehouse/)) | `object` |
| `page.prev`        | 上一页的页数。如果此页是第一页的话则为 `0`。                 | `number` |
| `page.prev_link`   | 上一页的网址。如果此页是第一页的话则为 `''`。                | `string` |
| `page.next`        | 下一页的页数。如果此页是最后一页的话则为 `0`。               | `number` |
| `page.next_link`   | 下一页的网址。如果此页是最后一页的话则为 `''`。              | `string` |
| `page.path`        | 当前页面的路径（不含根目录）。我们通常在主题中使用 `url_for(page.path)`。 | `string` |



**归档（archive）**

与 `index` 布局相同，但新增以下变量。

| 变量           | 描述                         | 类型      |
| :------------- | :--------------------------- | :-------- |
| `page.archive` | 等于 `true`                  | `boolean` |
| `page.year`    | 年份归档 (4位)               | `number`  |
| `page.month`   | 月份归档 (没有前导零的2位数) | `number`  |



**分类 (category)**

与 `index` 布局相同，但新增以下变量。

| 变量            | 描述     | 类型     |
| :-------------- | :------- | :------- |
| `page.category` | 分类名称 | `string` |



**标签 (tag)**

与 `index` 布局相同，但新增以下变量。

| 变量       | 描述     | 类型     |
| :--------- | :------- | :------- |
| `page.tag` | 标签名称 | `string` |



### 辅助函数（重点）

点击直达：[辅助函数](https://hexo.io/zh-cn/docs/helpers)



### 总结

对于博客的主题研究，下面还有细节我就不继续写下去了，因为大部分内容都是来自Hexo官方文档，如果我有什么问题的话可以进入官网去查询。我觉得花时间去记录在开发中使用到的内容会更有价值，也就是说进行主题开发总结才更有参考意义。

仔细读完官方文档之后，我对基本的配置信息也都差不多了解了，下面我就准备到官网主题上找到几个主题模板来进行研究，然后就进入开发过程。



### 主题开发模板

![](https://z3.ax1x.com/2021/04/16/cWYhnO.png)

我的模板是准备参考酷壳网的主题，虽然它的是wordpress框架，但我觉得Hexo框架也可以开发出它那样简洁的主题模板。因为我感觉他那种主题阅读起来太舒服了，所以我就决定去开发一套类似酷壳之类的博客主题。

[酷壳 - CoolShell](https://coolshell.cn/)

![](https://z3.ax1x.com/2021/04/16/cWY5He.png)





![](https://NothingLin.coding.net/p/picture/d/picture/git/raw/master/2020/12/31/20201231121340.png)