const htmlEL = document.documentElement
function setRemUnit() {
  // 获取html宽度(视口宽度)
  const htmlWidth = htmlEL.clientWidth
  // 根据宽度计算一个HTML的font-size的大小
  const unit = htmlWidth / 10
  // 将font-size赋值给html
  htmlEL.style.fontSize = unit + 'px'
}
setRemUnit()
window.addEventListener('resize', setRemUnit)
