#### 一.认识flexbox

##### 1.1.Flexbox 翻译为弹性盒子:

* 弹性盒子是一种用于按行或者列布局元素的一维布局方法
* 元素可以膨胀一填充额外的空间,收缩以适应更小的空间
* 通常我们使用Flexbox来进行布局的安安称之为flex布局(flex layout)

##### 1.2.flex布局是目前web开发中使用最多的布局方案

* flex布局(Flexible布局,弹性布局);
* 目前特别在移动端可以说已经完全普及
* 在PC端也几乎已经完全普及和使用,只有非常少数的网站依然在使用浮动来布局

##### 1.3.为什么需要flex布局呢?

* 长久以来,css布局中唯一可靠且跨浏览器兼容的布局工具只有floats 和 positioning
* 但是这两种方法本身存在很大的局限性,并且他们用于布局实在是无奈之举

#### 原先的布局存在的痛点

##### 1.1原来的布局存在哪些痛点?举例说明:

* 比如在父内容里面垂直居中的一个块内容
* 比如使容器的所有子项等分可用的宽度/高度,而不管有多少宽度/高度可用
* 比如使多列布局中的所有采用相同的高度,即使他们包含的内容量不同

##### 1.2 flex的出现

* 自然与自然的法则在黑暗隐藏,于是上帝说,让牛顿出现吧!于是世界明亮了起来.



#### 二.flex布局的重要概念

##### 2.1.两个重要的概念

* 开启了flex布局的元素叫 flex container
* ![](E:\studyLogs\上课笔记\img\flex container.png)
* flex container 里面的直接子元素叫做flex item

##### 2.2.当flex container中的子元素变成了flex item时,具备以下特点:

- flex item的布局将接受flex container 属性的设置来进行控制和布局
- flex item 不再严格区分块级元素和行内级元素
- flex item默认情况下是包裹内容的,但是可以设置宽度和高度

##### 2.3.设置display属性为flex或者inline-flex可以成为flex container

* flex: flex container 以block-level形式存在
* inline-flex: flex container以inline-level形式存在

##### 2.4.flex 布局模型

![](E:\studyLogs\上课笔记\img\flex-layout-module.png)



##### 2.5.flex相关的属性

* 应用在flex container上的css属性
  * flex-flow(简写属性)
  * flex-direction
  * flex-wrap
    * nowrap(默认值):单行
    * wrap:多行
    * wrap-reverse
  * justify-content
    * flex-start(默认值):与main start对齐
    * flex-end: 与main end对齐
    * center:居中
    * space-between:两端对齐(两端各放一个元素,其他元素(flex items)之间再来进行等分)
      * flex items之间距离相等
      * 与main start/main end两端对齐
    * space-around:两端也有间距,
      * flex items之间距离相等
      * 两端(main start/main end)的间距是flex items之间的一半
    * space-evenly:两端也有空隙,并且所有空间进行等分
      * flex items之间距离相等
      * 两端(main start/main end)的间距是flex items之间相等
  * align-items
    * normal:在弹性布局中,效果与stretch一样(默认值)
    * stretch:在flex items在cross axis方向的size为auto,会自动拉伸填充flex container
    * flex-start:与cross start对齐
    * flex-end:与cross end 对齐
    * center:居中对齐
    * baseline:与基线对齐
  * align-content(多行情况下)
* 应用在flex items上的css属性
  * flex-grow
  * flex-basis
  * flex-shrink
  * order
  * align-self
  * flexw