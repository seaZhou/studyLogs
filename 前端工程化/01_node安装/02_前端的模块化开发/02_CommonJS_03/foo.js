const name = 'foo'
const age = 18
function sayHello() {
  console.log('say hello')
}

// 2.模块中内容导出
// 结论: Node导出的本质是在导出module,exports对象
// module.exports.name = name
// module.exports.age = age
// module.exports.sayHello = sayHello

// console.log(exports === module.exports)

// 开发中常见的写法
// 一但使用大括号就是一个新对象
module.exports = {
  name,
  age,
  sayHello,
}
