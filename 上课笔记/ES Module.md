##### 1.前端模块化的方案

* 1.es module
  * ECMA2015提出来的模块化规范
  * 浏览器本身支持es module

* 2.webpack 模块化打包工具
* ![](E:\studyLogs\上课笔记\img\前端使用模块化方案.png)

##### 2.认识 ES Module

* ES Module和CommonJS的模块化不同之处:
  * 一方面它使用了import和export关键字
  * 另一方面它采用编译期的静态分析,并且也加入了动态引用的方式
* ES Module模块采用export 和import关键字来实现模块化:
  * export 负责将模块内容导出
  * import负责从其他模块导入内容
* 了解:采用ES Module将自动采用严格模式:use strict

##### 3.export关键字

##### 4.import关键字

##### 5.export和import结合使用

##### 6.default用法(默认导出)(一个模块只能有一个默认导出)

* 默认导出export时可以不需要指定名字;

* 在导入时不需要使用{},并且可以自己来指定名字;
* 它也方便我们和现有的CommonJS等规范相互操作;