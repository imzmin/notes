//用户界面事件：
// （1）load事件：在window对象上，load事件会在整个页面（包括所有外部资源，如图片、js文件、css文件）加载完成后触发
// 可以通过两种方式触发load事件处理程序：
// 第一种是js方式：(推荐)
window.addEventListener('load',(event)=>{
    console.log('load')
})
//或者
window.onload=function (){
    console.log('onload')
}
//第二种方式是：指定load事件处理程序的方式向<body>元素添加onload属性
// <body onload="console.log('load')"></body>

//图片也会触发load事件
let image=document.getElementById('myImage')
image.addEventListener('load',(event)=>{
    console.log(event.target.src)
})
document.body.appendChild(image)
image.src="smile.gif"

// <img src="simile.gif" onload="console.log('load')"></img>

//（2）unload事件：会在文档卸载完成后触发。一般是在从一个页面导航到另一个页面时触发
//用法与load事件一致
