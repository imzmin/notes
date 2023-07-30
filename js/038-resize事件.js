//Web浏览器中可以发生很多事件，所发生事件的类型决定了时间对象中会保存什么信息
//DOM3 Events定义了如下事件类型：
//（1）用户界面事件：涉及与BOM交互的通用浏览器事件，比如（load unload scroll select resize事件等 ）
//（2）焦点事件：在元素获得和失去焦点时触发，比如（blur focus事件）
//（3）输入事件：向文档中输入文本时触发
//（4）鼠标事件：使用鼠标在页面上执行某些操作时触发
//（5）键盘事件：使用键盘在页面上执行某些操作时触发
//（6）滚轮事件：使用鼠标滚轮时触发


//当浏览器窗口被缩放到新高度或者宽度时，会触发resize事件，
//这个事件在window上触发，因此可以通过js方式在window上或者<body>元素上添加onresize属性来指定事件处理程序

window.addEventListener('resize',(event)=>{
    console.log('resize')
})

window.onresize=function (){
    console.log('onresize')
}
// <body onresize="console.log('resize')"></body>
