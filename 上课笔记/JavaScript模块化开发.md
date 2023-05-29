##### 1.什么是模块化?

* 最终的目的:将程序划分为一个个小的结构
* 这个结构中编写属于自己的逻辑代码,有自己的作用域,定义变量名词时不会影响到其他的结构
* 这个结构可以将自己希望暴露的位置.函数.对象等导出给其结构使用
* 也可以通过某种方式,导入另外结构中的变量/函数/对象等

##### 2.上面提到的结构,就是模块;按照这种结构划分开发程序的过程,就是模块化开发的过程

##### 3.模块化的历史

* 在网页开发的早期,Brendan Eich开发JavaScript仅仅作为一种脚本语言,做一些简单的表单验证或者动画实现等,那个时候代码还是很少的
  * 这个时候我们只需要将JavaScript代码写到script标签中即可
  * 并没有必须要放到多个文件中来编写;甚至流行:通常来说JavaScript程序的长度只有一行

* 但是随着前端和JavaScript的快速发展,JavaScript代码变得越来越复杂了
  * ajax的出现,前后端开发分离,意味着后端返回数据后,我们需要通过JavaScript进行前端页面的渲染
  * SPA的出现,前端页面变得更加复杂;包括前端路由/状态管理等等一系列复杂的需求需要通过JavaScript来实现
  * 包括Node的实现,JavaScript编写复杂的后端程序,没有模块化是致命的硬伤
* 所以,模块化已经是JavaScript一个非常迫切的需求
  * 但是JavaScript本身,直到es6(2015)才退出了自己的模块化方案
  * 在此之前,为了让JavaScript支持模块化,涌现出了很多不同的模块化规范:AMD,CMD.CommonJ等

##### 4.CommonJS规范和Node关系

* 我们需要知道CommonJS是一个规范,最初提出来实在浏览器以外的地方使用.,并且当时被命名为ServerJS,后来为了体现它的广泛性,.修改为CommonJS,平时我们也会简称为CJS
  * Node是CommonJS在服务器端一个具有代表性的实现
  * Browserif是CommonJS在浏览器中的一种实现(现在开发里面没有用了,只是早期再用)
  * webpack打包工具具备对CommonJS的支持和转换
  * CommonJS规范:
    * 模块中要导出内容:exports
    * 模块中要导入内容化:require
* 模块化的核心是导入导出

##### 5.exports导出

* exports是一个对象,我们可以在这个对象中添加多个属性,添加的属性会导出

  * ```js
    exports.name = name
    exports.age = age
    exports.sayHello = sayHello
    ```

* 另外一个文件中可以引入

  * ```js
    const bar = require('./bar')
    ```

* 上面这行完成了什么操作呢?理解下面这句话,Node中的模块化一目了然

  * 意味着main中的bar变量扽关于exports对象
  * 也就是require通过各种查找坊市,最终找到exports这个对象
  * 并且将这个exports对象赋值给了bar变量
  * bar变量就是exports对象了

##### 6.module.exports导出

* module.exports和exports的区别?
* 我们追溯溯源,通过维基百科中对CommonJS规范的解析
  * CommonJS中是没有module,exports的概念的
  * 但是为了实现模块的导出,Node中使用的是Module的类,每一个模块都是Module的一个实例,也就是module
  * 所以在Node中真正用于导出的其实根本不是exports,而是module.exports
  * 因为module才是导出的真正的实现者
* 但是为什么exports也可以导出呢?
  * 这是因为module对象的exports属性时exports对象的一个引用
  * 也就是说module.exports = exports = main中的bar

##### 7.require

* require是一个函数,可以帮助我们引入一个文件(模块)中导出的对象
* 那么,require的查找规则是怎么样的呢?
  * 情况二
    * X是以./或../或/(根目录)开头的
    * 第一步:将X当成一个文件在对应的目录下查找
      * 1.如果没有后缀名,按照后缀名的格式查找对应的文件
      * 2.如果没有后缀名,会按照如下顺序:
        * 1>直接查找文件X
        * 2>查找X.js文件
        * 3>查找.json文件
        * 4>查找.node文件
    * 第二步:没有找到对应的文件,将X作为一个目录
      * 查找目录下面的index文件
        * 1>查找X/index.js文件
        * 2>查找X/index.json文件
        * 3>查找X/index.node文件
  * 情况三:直接是一个X(没有路径),并且X不是一个核心模块
    * 如果上面的路径都没有,才会报错



##### 8.模块的加载过程

* 结论一:模块在被第一次引入时,模块中的代码会被运行一次
* 结论二:模块被多以引入时,会缓存,最终只加载(运行)一次
  * 为什么只会加载运行一次呢?
  * 这是因为每个模块对象module对象都有一个属性:loaded
  * 为false表示还没有加载,为true表示已经加载
* 结论三:如果有循环引入,那么加载顺序是什么?
* 如果出现下图的引用关系,那么加载顺序是什么呢?
  * 这个其实是一种数据结构:图结构
  * 图结构在遍历的过程中,有深度优先搜索(DFS,depth first search)和广度优先搜索(BFS,breadth first searc )
  * Node采用深度优先算法: main -> aaa -> ccc -> ddd -> eee -> bbb
  * ![](E:\studyLogs\上课笔记\img\模块加载过程-图结构.png)

##### 9.CommonJS的规范缺点:

* CommonJS加载模块是同步的
  * 同步的意味只有等到对应的模块加载完毕,当前模块中的内容才能被运行;
  * 这个在服务器不会有什么问题,因为服务器加载的js文件都是本地文件,加载速度非常快;
* 如果将它应用于浏览器呢?
  * 浏览器加载js文件需要先从服务器将文件下载下来,之后再加载运行;
  * 那么采用同步的意味着后续的js代码都无法正常运行,即使是一些简单的DOM操作
* 所以在浏览器中,我们通常不使用CommonJS规范:
  * 当然在webpack中使用CommonJS是另外一回事
  * 因为它会将我们的代码转化成浏览器可以直接执行的代码

##### 10.AMD规范(了解)

* 它是采用的异步加载模块
* 对应的实现库requirejs

##### 11.CMD规范(了解)

* 也是采用异步加载模块
* 对应的实现库seajs