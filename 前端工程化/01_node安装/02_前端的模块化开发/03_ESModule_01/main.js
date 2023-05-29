//导入import
// 注意事项:
// 1.在浏览器直接使用esmodule时,必须假如文件后缀名
// 2.再我们打开对应的html时,如果html中使用模块化代码,那么必须以服务的形式打开
import { name, age, sayHello } from './foo.js'
// const name = 'main'
console.log(name, age)
sayHello()
