//每个表单字段都有两个公共的方法：focus()和blur()
//实现方法是监听load事件，然后在该字段上调用focus()
window.addEventListener('load',(event)=>{
    document.forms[0].elements[0].focus()
    }
)
window.addEventListener('load',(event)=>{
    document.forms[0].elements[0].blur()
    }
)
// 或者下面这种方式,自动为带有该属性的元素设置焦点
//设置了autofocus就不用在调用load事件了
// <input type="text" autofocus>


//表单字段的公共事件
//除了鼠标,键盘,变化和HTML事件外,所有字段还支持以下3个事件
//blur:在字段失去焦点时触发
//change:在<input>和<textarea>元素的value发送变化且失去焦点时触发,或者在<select>元素中选中项发生变化时触发
//focus:在字段获得焦点时触发

let textBox=document.forms[0].elements[0]
textBox.addEventListener('focus',(event)=>{
    let target=event.target
    if(target.style.backgroundColor!='red'){
        target.style.backgroundColor='blue'
    }
})
textBox.addEventListener('blur',(event)=>{
    let target=event.target
   target.style.backgroundColor=/[^\d]/.test(target.value)?"red":'';
})
textBox.addEventListener('change',(event)=>{
    let target=event.target
    target.style.backgroundColor=/[^\d]/.test(target.value)?"red":'';
})
