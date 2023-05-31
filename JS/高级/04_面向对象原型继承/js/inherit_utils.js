// 创建对象的过程
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// 将Subtype和Supertype联系在一起
// 寄生式函数
function inherit(Subtype, Supertype) {
  Subtype.prototype.__proto__ = Supertype.prototype
  // Subtype.prototype = createObject(Supertype.prototype)
  // Object.setPrototypeOf(Subtype.prototype, Supertype.prototype)
	// 这种事最具兼容性的写法
  Object.defineProperty(Subtype.prototype, 'constructor', {
    enumerable: false,
    configuraable: true,
    writable: true,
    value: Subtype,
  })
}
