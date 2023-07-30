//虽然scroll事件发生在window对象上，但实际上反映的是页面中相应元素的变化
//在混杂模式下，可以通过<body>元素检测scrollTop和scrollLeft属性的变化
//在标准模式下，这些变化在除早期版的safari之外的所有浏览器中都发生在<html>元素之上，
//早期版的safari在<body>上跟踪滚动位置
//下面代码演示了如何处理这些差异：
window.addEventListener('scroll',(event)=>{
    if(document.compatMode==='CSS1Compat'){
        console.log(document.documentElement.scrollTop)
    }else {
        console.log(document.body.scrollTop)
    }
})

window.onscroll=function (){
    console.log('onscroll')
}
// document.compatMode:
// BackCompat：标准兼容模式关闭。浏览器宽度:document.body.clientWidth；
// CSS1Compat：标准兼容模式开启。浏览器宽度:document.documentElement.client
