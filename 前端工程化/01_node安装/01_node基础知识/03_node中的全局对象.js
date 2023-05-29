// 类似于window的全局对象
console.log(global)

// 特殊的全局对象
// __dirname当前文件所在的目录(重要)

console.log(__dirname)

// __filename 获取当前所在目录并且包括文件名称
console.log(__filename)

// console.log(process)

// 定时器
// setTimeout(() => {
//   console.log('setTimeout')
// }, 2000)

// setInterval(() => {
//   console.log('setInterval')
// }, 3000)

// Immediate:立即立刻
setImmediate(() => {
  console.log('setImmediate')
})

process.nextTick(() => {
  console.log('nextTick')
})

// globalThis

console.log(globalThis === global, 'globalThis')
