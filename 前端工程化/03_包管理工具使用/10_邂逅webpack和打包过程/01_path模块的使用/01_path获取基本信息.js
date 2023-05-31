const path = require('path')
const filepath = 'c://abc/cba/nac.txt'
// 1.可以冲一个路径中获取一些信息
console.log(path.extname(filepath))
console.log(path.basename(filepath))
console.log(path.dirname(filepath))

//2.将多个路径拼接在一起path.join()
const path1 = '/abc/abc'
const path2 = '../zhp/kobe/jamse.txt'

console.log(path.join(path1, path2))
console.log('+++++++++++++++++++')
// 3.也是将多个路径拼接在一起(一定是绝对路径)path.resolve() !important

/**
 * path.resolve()方法会把一个路径或者路旁片段的序列解析为一个绝对路径
 * 给定的路径序列是
 * 
 * 
 * 
 * **/
console.log(path.resolve('./abx/cba', '', '../zhp/kobe', './abc.txt/'))
console.log(path.resolve())
