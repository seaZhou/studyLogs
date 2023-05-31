##### 一.那么对于一个项目来说,我们如何使用npm来管理这么多包呢?

* 事实上,每一个项目都会有一个对应的配置文件,无论是前端项目(Vue,React)还是后端项目(Node)
* 这个配置文件会记录着你项目的名称.版本号,项目描述等
* 也会记录着你项目所依赖的其他库的信息和依赖库的版本号

##### 二.这个配置文件就是package.json

##### 三.那么这个配置文件如何得到呢?

* 方式一:手动从零创建项目,npm init -y(所有信息使用默认的)
* 方式二:通过脚手架创建项目,脚手架会帮助我们生成package.json,并且里面有相关的配置

##### 四.常见的属性

* 必须填写的属性
  * name:项目名称
  * version:是当前项目的版本号
  * description:是描述信息,很多时候是作为项目的基本描述
  * author:是作者相关信息(发布时用到)
  * license:
* private属性
  * private属性记录当前的项目是否是私有的
  * 当前值为true,npm是不能发布它的,这是防止私有项目或者模块发布出去的方式
* main属性
  * 设置程序入口
    * 比如我们使用axios模块, const axios = require('axios')
    * 如果有main属性,实际上是找到**对应的main属性查找文件**的
* scripts属性
  * scripts属性用于配置一些脚本命令,以键值对的形式存在
  * 配置后我们可以通过npm run命令的key来执行这个命令
  * npm start 和 npm  run start 的区别是什么？
    * 他们是等价的
    * 对于常用的start,test,stop,restart可以省略掉run直接通过npm start等方式运行
* dependencies属性
  * dependences属性是指定无论开发环境还是生产环境都需要依赖的包
  * 通常是我们项目实际开发用到的一些库模板vue,vuex,vue-router,react,react-dom,axios等
  * 与之对应的是devDependencies
* devDependencies属性
  * 一些包在生产环境是不需要的，比如webpack，babel等
  * 这个时候我们会通过npm install webpack -save-dev，将他安装到devDenpendencies属性中
* peerDependencies属性
  * 还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，他必须是另外一个宿主包为前提的
  * 比如element-plus是依赖于vue3的，ant-design是依赖于react，react-dom

##### 五.依赖的版本管理

* 我们会发现安装的以来版本出现:^2.0.3 或者~2.0.3,这是什么意思呢?
* npm的包通常需要遵从semver版本规范
  * semver: https://semver.org/lang/zh-CN/
  * npm semver: https://docs.npmjs.com/misc/semver
* semver版本规范是X.Y.Z
  * X主版本号(major):当你做了不兼容的API修改(可能不兼容之前的版本)
  * Y次版本号(minor):当你做了向下兼容的功能性新增(新功能增加,但是兼容之前的版本)
  * Z修订号(patch):当你做了向下的兼容的问题的修正(没有新功能,修复了之前版本的bug)
* 我们这里解释一下^ 和 ~的区别
  * x.y.z:表示一个明确的版本号
  * ^x.y.z:表示x是保持不变的,y和z永远安装最新的版本
  * ~x.y.z:表示x和y保持不变的,z永远安装最新的版本
* engines属性(了解)
  * engines属性适用于指定Node和NPM的版本号
  * 在安装过程中,会先检查对应的引擎版本,如果不符合就会报错
  * 事实上也可以指定所在的操作系统"os":["darwin","linux"],只是很少用到
* browserslist属性(了解)
  * 用于配置大保护的JavaScript浏览器的兼容情况

##### npm install 命令

* 全局安装(global install)
  * 直接将
* 项目(局部安装)安装:

