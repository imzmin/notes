//DOM2事件处理程序
//Events为事件处理程序的赋值和移除定义了两个方法：addEventListener()和removeEventListener()
//这两个方法接收三个参数：事件名，事件处理函数，布尔值（true:在捕获阶段调用事件处理程序，false:在冒泡阶段调用事件处理程序，默认false）
let btn=document.getElementById('myBtn')
btn.addEventListener('click',()=>{
    console.log('this.id')
},false)

//使用DOM2的主要优势是可以为同一个事件添加多个事件处理程序
btn.addEventListener('click',()=>{
    console.log('hello')
},false)

//多个事件处理程序会以添加顺序来触发，因此前面的代码会先执行
//通过addEventListener添加的事件，和removeEventListener()传入与添加时同样的参数来移除
//这就意味着，以和addEventListener()添加的匿名函数无法移除（上面的代码不能通过和removeEventListener移除）

//下面代码可以

let btn=document.getElementById('myBtn')
let handel=function (){
    console.log(this.id)
}
btn.addEventListener('click',handel,false)    //添加
btn.removeEventListener('click',handel,false) //移除
