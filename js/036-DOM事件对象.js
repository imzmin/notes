//在DOM发生事件中，所有相关信息都会被收集并存储在一个名为event的对象中。这个对象包含一些基本信息，比如：导致事件的元素、发生的事件类型等
//event对象是传给事件处理程序唯一的参数，不管以哪种方式（DOM0或者DOM2）指定事件处理程序，都会传入这个对象
let btn=document.getElementById('myBtn')
btn.addEventListener('click',(event)=>{
    console.log(event.type)  //click
},false)

let btn=document.getElementById('myBtn')
btn.onclick=function (event){
    console.log(event.type)  //click
}

//在HTML属性指定的事件处理程序中，同样也可以使用变量event引用事件对象
// (1) <input type="button" value="ClickMe" onClick="console.log(event.type)">


// type属性在一个处理程序处理多个事件时很有用，下面程序就使用了event.type属性确定了事件类型，从而做出不同的响应
let btn=document.getElementById('myBtn')
let handel=function (event){
    switch (event.type){
        case 'click':
            console.log('click')
            break;
        case 'mouseover':
            event.target.style.backgroundColor='red';
            break;
        case 'mouseout':
            event.target.style.backgroundColor='';
            break;
    }
};
btn.onclick=handel;
btn.onmouseover=handel;
btn.onmouseout=handel;
