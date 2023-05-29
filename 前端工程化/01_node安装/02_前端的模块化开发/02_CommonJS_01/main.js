// 直接获取导出的对象,从对象中获取属性
// const uitl = require('./util.js')
// console.log(uitl.UTIL_NAME)
// console.log(uitl.formatCount())

// // 小小的优化
// // 导入对象之后,直接对齐进行结构
// const { UTIL_NAME, formatCount } = require('./util.js')

// console.log(UTIL_NAME)
// console.log(formatCount())

const bar = require('./bar')
console.log(bar.name)
// 等待4s接收bar.js改掉的exports.name
// setTimeout(() => {
//   console.log(bar.name)
// }, 4000)

// 等待2s修改bar.js的值
setTimeout(() => {
	bar.name = 'lyy'
}, 2000);