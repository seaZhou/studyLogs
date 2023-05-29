##### 1.官方对Node.js的定义:

* Node.js是一个基于v8 JavaScript引擎的JavaScript运行时环境

##### 2.也就是说Node.js基于V8 引擎来执行JavaScript的代码,但是不仅仅只有v8引擎

* v8可以嵌入到任何c++应用程序中,无论是Chrome还是node.js,事实上都是嵌入了v8引擎来执行JavaScript代码
* 但是在Chrome浏览器中,还需要解析,渲染HTML/css等相关渲染引擎,另外还需要提供支持浏览器操作的API,浏览器自己的事件循环等
* 另外,在node.js中我们也需要进行一些额外的操作,比如文件系统读/写/,网络IO,加密,压缩解压文件等

##### 3.Node程序时使用什么语言编写的

* js/c++/c语言

##### 4.node的版本工具(n(TJ开发的)/nvm不支持windows系统)

* 在社区里面,所以有人开发了nvm-windows

* nvm(node version manager)
* n: interactively manage you node.js version(交互管理你的node.js版本)
* 在windows上面
  * nvm install latest 安装最新的node版本
  * nvm list 展示目前安装的所有版本
  * nvm use切换版本
* Node程序传递参数
  * 为什么process里面的参数叫做argv呢?
    * 在c/c++程序中的main函数中,实际上可以获取到两个参数
      * argc
      * argv
  * node的输出
    * console.log
    * console.clear() 清空控制台
    * console.trace() // 调用栈
* Node的REPL
  * node(cmd终端需要输入cls清空控制台)
  * .exit退出程序(或者两次ctrl+c)



##### 5.node全局对象

* 某些全局对象我们后续学习中讲到

  * module exports require()会在模块化中讲到
  * buffer

* 特殊的全局对象

  * 这些全局对象实际上是模块中的变量,只是每个模块都有,看起来像全局变量

  * 在命令行交互中是不可以使用的

  * 包括:__dirname, __filename

    * *// 特殊的全局对象*

      // __dirname当前文件所在的目录(重要)

      console.log(__dirname)

      *// __filename 获取当前所在目录并且包括文件名称*

      console.log(__filename)

##### 6.global和window的区别?(重要)

* 在浏览器中,全局变量都是在window上的,比如document,setInterval,setTimeout,alert,console等等

* 在Node中,我们也有一个global属性,并且看起来它里面有很多其他对象

* 但是在浏览器中执行的JavaScript代码,如果我们在顶级范围内通过var定义一个属性,默认会被添加到window对象上

  * ```js
    var name = 'coderzhp';
    console.log(window.name) // coderzhp
    ```

* 在node中,我们通过var定义一个变量,它只是在当前模块中有一个变量,不会被放到全剧终

  * ```js
    var name = 'coderzhp'
    console.log(global.name) // undefined
    ```

