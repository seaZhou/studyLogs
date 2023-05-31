查看~.pnpm.store的位置-命令:pnpm store path

从store中删除当前未被引用的包来释放store的空间-命令:pnpm store prune

##### 整个项目的流程如下:

* npm/yarn/pnpm -> webpack架构 -> Vue/React
* Vue- -> 脚手架 -->  基于webpack
* React- -> 脚手架  -->  基于webpack
* node_modules
  * 依赖的包就要用npm等来管理(包管理过程)
* src
  * App.vue(html/css/js)
  * App.jsx(html/css/js)
  * index.js(ES6/7/8)
* package.json
* 依靠webpack打包成浏览器认识的代码(普通的代码) html css javascript(es5)
* 所以需要依赖于打包工具(gulp/rollup/webpack(可以说是这些最强大的工具/vite(速度快))):将用户的浏览器不能识别的代码通过打包工具转化为用户浏览器可以识别的普通的html/css/js(es5)的代码(这些运行的环境就是node环境(js代码))





##### webpack到底是什么呢？

* webpack是静态的模块化打包工具，为现代的JavScript应用程序
* 我们对上面的解释进行拆解
  * 打包bundler：webpack可以帮助我们进行打包，所以是一个打包工具
  * 静态的static:这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
  * 模块化module：webpack默认支持各种模块化开发：ES Module CommonJS AMD等
  * 现代的modern：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展

##### vue项目加载的文件有哪些呢？

* JavaScript的打包
  * 将ES6转换为ES5的语法
  * TypeScript的处理，将其转化为JavaScript
* css的处理
  * css文件模块的加载/提取
  * Less/Sass等预处理器的处理
* 资源文件img/font
  * 图片img文件的加载
  * 字体font文件的加载
* HTML资源的处理
  * 打包HTML资源文件
* 处理vue项目的SFC文件.vue文件



##### webpack的安装

* webpack安装目前分为两个：webpack webpack-cli
* npm install webpack webpack-cli -D(在项目中一般都是选择局部安装)



##### webpack默认打包

* 