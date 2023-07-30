//DOM3定义了9种鼠标事件：

//click:单击鼠标主键或者按键盘回车键触发
//dblclick:双击鼠标主键触发

//mousedown:在用户按下任意鼠标键时触发，这个事件不能通过键盘触发
//mouseup:在用户释放鼠标键时触发，这个事件不能通过键盘触发

//mouseenter:在用户把鼠标光标从元素外部移到元素内部时触发，这个事件不冒泡，也不会在光标经过后代元素时触发
//mouseover:在用户把鼠标光标从元素外部移到元素内部时触发,这个事件不能通过键盘触发
//mouseleave:在用户把鼠标光标从元素内部移到元素外部时触发，这个事件不冒泡，也不会在光标经过后代元素时触发

//mousemove:在鼠标光标在元素上移动时反复触发。这个事件不能通过键盘触发
//mouseout:在用户把鼠标光标从一个元素移到另一个元素上时触发

//获取鼠标事件的客户端坐标
let div=document.getElementById('myDiv')
div.addEventListener('click',(event)=>{
    console.log(`${event.clientX},${event.clientY},`)
})

//获取鼠标事件的页面坐标
//IE8以及更早版本没有在event对象上暴露页面坐标
let div=document.getElementById('myDiv')
div.addEventListener('click',(event)=>{
    let pageX=event.pageX
    let pageY=event.pageY
    if(pageX===undefined){
        pageX=event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft)
    }
    if(pageY===undefined){
        pageY=event.clientY+(document.body.scrollTop||document.documentElement.scrollTop)
    }
    console.log(`${pageX},${pageY}`)
})

//获取鼠标事件的屏幕坐标
let div=document.getElementById('myDiv')
div.addEventListener('click',(event)=>{
    console.log(`${event.screenX},${event.screenY},`)
})
