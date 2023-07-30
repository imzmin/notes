//焦点事件在页面元素获得焦点或者失去焦点时触发。
// 这些事件可以与document.hasFocus()和document.activeElement一起为开发者提供用户在页面中导航的信息
//焦点事件有以下2种：
//blur:当元素失去焦点时触发。这个事件不冒泡，所有浏览器都支持
//focus:当元素获得焦点时触发。这个事件不冒泡，所有浏览器都支持

let ipt=document.getElementById('myInput')
ipt.addEventListener('focus',()=>{
    console.log('input')
})

ipt.onfocus=function (){
    console.log('onfocus')
}


let ipt=document.getElementById('myInput')
ipt.addEventListener('blur',()=>{
    console.log('blur')
})

ipt.onblur=function (){
    console.log('onblur')
}
