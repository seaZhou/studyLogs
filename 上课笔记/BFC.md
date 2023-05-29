#### 一.FC-Formatting Context

##### 1.1. FC全程是Formatting Context,元素在标准流里面都是属于一个FC的

* 块级盒子属于BFC(block formatting context)
* 行内级盒子属于IFC(inline formatting context)

##### 1.2. BFC- Block Foramtting Context

* MDN上有整理出在那些具体的情况下会创建BFC
  * 根元素(<html>)
  * 浮动元素(元素的float不是none)
  * 绝对定位元素(元素的position为absolute或fixed)
  * 行内块级元素(元素的display为inline-block)
  * 表格单元格(元素为table-cell,HTML表格单元格默认为该值),表格标题(元素的display为table-caption, HTML表格标题默认为该值)
  * 匿名表格单元格元素(元素的display为table,table-row,table-row-group,table-footer-group(分别是HTML table,row,tbody,thead,tfoot的默认属性)或inline-table)
  * overflow计算值(Computed)不为visible的块元素
  * 弹性元素(display为flex或inline-flex元素的直接子元素)
  * 网格元素(display为grid或inline-grid元素的直接子元素)
  * display职位flow-root的元素

##### 1.3. BFC有什么作用呢?

* 在BFC中,box会在**垂直方向上一个挨着一个**的排布
* **垂直方向的间距由margin属性**决定
* 在同一个BFC中,**相邻的两个box之间的margin会折叠(collapse)**
* 在BFC中,每个元素的**左边缘是紧挨着包含块的左边缘**的

##### 1.4. 那么这个东西有什么用呢?

* 解决margin的折叠问题
* 解决浮动高度塌陷问题(权威)
  * 浮动元素的父元素触发BFC,形成独立的块级格式上下文
  * 浮动元素的父元素的高度是auto的
* **BFC的高度是auto的情况下,是如下方法计算高度的**
  * 1.如果只是inline-level,是行高的顶部和底部的距离
  * 2.如果是block-level,是有最底层的快上边缘和最底层快盒子的下边缘之间的距离
  * 3.如果有绝对定位的元素,将被忽略
  * 4.如果有浮动元素,那么会增加高度以包括这些浮动元素的下边缘



#### 二.媒体 查询

##### 1.1 媒体查询是一种提供给开发者针对不同设备需求进行定制化开发的一个接口

##### 1.2 你可以根据不同的设备类型(比如屏幕设备,打印机设备)或者特定的特性(比如屏幕的宽度)来修改你的页面

##### 1.3 常见的使用方式

* 通过@media 和 @import 使用不用的css 规则(常用)

```css
<style>
	@import url(./css/miniScreen.css) (max-width: 600px);
</style>
```

* 使用media属性为<style>,<link>,<source>和其他HTML元素指定特定的媒体类型

  ```css
  <link rel="stylesheet" media="(max-width: 600px)" href="./css/miniScreen.css">
  ```

* 使用Window.matchMedia() 和 MediaQueryList.addListener()方法来测试和监控媒体状态

#### 作业布置

##### 1.1.说说你对BFC的理解(面试题) !important