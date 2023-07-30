//IE实现了DOM类似的方法，即attachEvent()和detachEvent()这两个方法接收两个同样的参数：
//参数：一个是事件处理程序的名字和事件处理函数
//即attachEvent()也可以给元素添加多个事件处理程序，但是执行顺序时反向执行，后添加的先执行
//使用即attachEvent添加的事件处理程序要用detachEvent移除
//同样，事件处理程序添加的匿名函数，也无法移除

let btn=document.getElementById('myBtn')
btn.attachEvent('onclick',function (){
    console.log('hello world')
    //this等于window
    console.log(this===window) //true
})
btn.attachEvent('onclick',function (){
    console.log('clicked')
})
//以上代码不能被移除

//下面代码可以被移除
let btn=document.getElementById('myBtn')
let handel=function (){
    console.log('hello')
}
btn.attachEvent('onclick',handel)  //添加
btn.detacEvent('onclick',handel)   //移除
