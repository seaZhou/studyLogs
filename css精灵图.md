### 一.CSS精灵图的好处

* 减少网页的http请求,加快网页响应速度,减轻服务器压力

* 减少图片的总大小

*  解决了图片命名的困扰,只需要针对一张集合的图片命名

  

### 二.绝对定位

* 定位参照对象是邻近的定位的祖先元素
* 在没有祖先元素的定位情况下,相对于视口定位



### 三.将position设置为absolute /fixed元素的特点一(absolute positioned element(绝对定位元素))

#### 1.1可以随意设置宽高

#### 1.2 宽高默认由内容决定

#### 1.3不再受标准流流的约束

* 不再严格按照 从上到下,从左到右排布
* 不再严格区分块级(block),行内级(inline),行内块级(inline-blcok)的很多特性都会消失

#### 1.4不再给父元素汇报宽高数据(重要)

#### 1.5脱标元素内部默认还是i按照标准流布局

### 四.将position设置为absolute /fixed元素的特点二(absolute positioned element(绝对定位元素))

```html + css
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.container {
			width: 800px;
			height: 300px;
			background-color: #f00;
			position: relative;
		}
		/* 兼容性非常好 */
		.box {
			width: 200px;
			height: 100px;
			background-color: #0f0;
			/* 水平方向公式: .container box width = .box box width(auto) + left(0) + right(0) + margin-left(0) + margin-right(0) */
			/* 垂直方向公式: .container box height = .box box height(auto) + top(0) + bottom(0) + margin-top(0) + margin-bottom(0) */
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="box"></div>
	</div>
</body>
</html>
```

```css
1.绝对定位元素(absolutely positioned element)
	position值为absolute或者fixed元素
2.对于绝对定位元素来说
    定位参照对象的width = left + right + margin-left + margin-right + 绝对定位元素大的实际占用width
    定位参照对象的height = top + bottom + margin-top + margin-bottom + 绝对定位元素大的实际占用height
3.如果希望绝对定位元素的宽高和定位参照对象一样,可以给绝对定位元素设置一下属性
	left:0,right:0,top:0,bottom:0,margin: 0
4.如果希望绝对定位i元素在定位参照对象中居中显示,可以给绝对定位元素设置一下属性
    left:0,right:0,top:0,bottom:0,margin: auto
    另外:还得设置具体的宽高值(宽高小于定位参照对象的宽高)
```

```
width: auto
    auto->交给浏览器来决定
    1.行内非替换元素->width:包裹内容
    2.块级元素-> width:包含块的宽度
    3.绝对定位元素-> width:包裹内容
```

#### 五.绝对定位案例的练习(仿网易云)