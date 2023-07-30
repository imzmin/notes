//用户点击重置按钮可以重置表单，重置按钮可以使用type属性为reset的<input>或<button>元素来创建
// <input type="reset"/>
// <button type="reset"></button>

//有reset事件，也有reset()方法
//用户单击重置按钮，重置表单会触发reset事件，这个事件为取消重置提供了机会

let form = document.getElementById('myForm')
form.addEventListener('reset',(event)=>{
    //阻止表单提交
    //调用preventDefault()方法可以阻止重置表单
    event.preventDefault()
})

//与表单提交一样，重置表单也可以通过调用reset()方法调用
let form = document.getElementById('myForm')
form.reset()

//与submit()方法的功能不同，调用reset方法会像单击了重置按钮一样触发reset事件
