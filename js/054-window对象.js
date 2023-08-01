//现代浏览器都支持4个属性：innerWidth innerHeight outWidth outHeight
// outWidth和outHeight返回浏览器窗口自身大小
// innerWidth innerHeight返回浏览器窗口中页面视口的大小（不包括浏览器边框和工具栏）
// document.documentElement.clientWidth和document.documentElement.clientHeight返回页面视口的宽度和高度
//浏览器窗口自身的精确尺寸不好确定，但可以确定页面视口的大小
let pageWidth=window.innerWidth
let pageHeight=window.innerHeight
if(typeof pageWidth!="number"){
    //检查页面是否处于标准模式
    if(document.compatMode=="CSS1Compat"){
        pageWidth=document.documentElement.clientWidth
        pageHeighth=document.documentElement.clientHeight
    }else {
        pageWidth=document.body.clientWidth
        pageHeighth=document.body.clientHeight
    }
}

//视口位置
//浏览器窗口尺寸通常无法满足完整显示整个页面，为此用户可以通过滚动在有限的视口中查看文档
//度量文档相对于视口滚动距离的属性有两对，返回相等的值：
// window.pageXoffset/window.scrollX
// window.pageYoffset/window.scrollY
//可以使用scroll() scrollTo() scrollBy() 这三个方法滚动页面
//这三个方法都接收表示相对视口距离的x和y坐标
//这两个参数在scroll() scrollTo()这两个方法这表示要滚动到的坐标，在scrollBy()这个方法中表示滚动的距离

window.scrollBy(0,100)    //相对于当前视口向下滚动100像素
window.scrollBy(20,0)     //相对于当前视口向右滚动20像素
window.scrollTo(100,100)  //滚动到距离屏幕左边及顶边100像素的位置
window.scrollTo(0,0)      //滚动到页面左上角

//这几个方法也都接收一个ScrollToOptions字典，除了提供偏移值，还可以通过behavior属性告诉浏览器是否平滑滚动
//正常滚动
window.scrollTo({
    left:100,
    top:100,
    behavior:'auto'
})
//平滑滚动
window.scrollTo({
    left:100,
    top:100,
    behavior:'smooth'
})

//导航与打开新窗口
// window.open():用于导航到指定URL，也可以用于打开新浏览器窗口
//这个方法接收4个参数：要加载的URL、目标窗口，特定字符串（用于指定新窗口的特性，用逗号分割）、表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值
//通常调用这个方法是只传前3个参数，最后一个参数只有在不打开新窗口时才会使用
//如果window.open()的第二个参数是一个已经存在的窗口或者窗格(frame)的名字、则会在对应的窗口或窗格中打开URL
//如果window.open()的第二个参数不是一个已有的窗口、则会打开一个新窗口或者标签页

// 与<a href="http://www.wrox.com" target="topFrame"/>相同
window.open("http://www.wrox.com/","topFrame")
//上面代码的结果就如同用户点击了一个href属性为http://www.wrox.com，target属性为topFrame的链接。
// 如果有一个窗口叫topFrame，则这个窗口就会打开这个URL，否则就会打开一个新窗口并将其命名为topFrame
//第二个参数也可以是一个特殊的窗口名，_self _blank _top _parent




