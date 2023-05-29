let name = 'bar'
exports.name = name
// setTimeout(() => {
//   exports.name = 'zhp'
// }, 2000)

setTimeout(() => {
  console.log(exports.name)
}, 4000)
 