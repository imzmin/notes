//事件意味着用户或者浏览器执行的某种动作，比如单击（click）、加载（load），为响应事件而调用的函数被称为事件处理程序（事件监听器）
//事件处理程序的名字以'on'开头。onclick/onload


//HTML事件处理程序：
// (1) <input type="button" value="ClickMe" onClick="console.log('Clicked')">
// (2) function showMsg(){
//     console.log('hello world')
// }
// <input type="button" value="ClickMe" onClick="showMsg()">



//DOM0事件处理程序：
//把一个函数赋值给（DOM元素）的一个事件处理程序属性，要使用js指定事件处理程序，必须先取得要操作对象的引用
let btn=document.getElementById('myBtn')
btn.onclick=function (){
    console.log('hello')
    //this等于元素btn，在事件处理程序中，通过this可以访问元素的任何属性和方法
    console.log(this.id)   //myBtn
}
//通过将事件处理程序属性的值设置为null，就可以移除以DOM0方式添加的事件处理程序了
btn.onclick=null   //移除事件处理程序，再点击按钮就不会出现任何操作了
//如果事件处理程序是在HTML中指定的，则也可以通过上面这种方式移除

