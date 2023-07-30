//过多的事件处理程序上午解决方案就是事件委托
//事件委托利用事件冒泡，可以使用一个事件处理程序来管理一种类型的事件
//例如：click事件冒泡到document，这意味着可以为整个页面指定一个onclick事件处理程序，而不用为每一个可点击元素分别指定事件处理程序


// <ul id="myBox">
//     <li id="myBox1">1</li>
//     <li id="myBox2">2</li>
//     <li id="myBox3">3</li>
// </ul>
//这里的HTML包含3个列表项，在被点击时应该执行某个操作，对此，通常的作做法就是指定3个事件处理程序
let myBox1=document.getElementById('myBox1')
let myBox2=document.getElementById('myBox2')
let myBox3=document.getElementById('myBox3')
myBox1.addEventListener('click',(event)=>{
    location.href="http://www.baidu.com"
})
myBox2.addEventListener('click',(event)=>{
    document.title="i changed the document title"
})
myBox3.addEventListener('click',(event)=>{
    console.log('hi')
})

//使用事件委托，只要给所有元素共同的祖先节点添加一个事件处理程序就可以解决问题

let myBox=document.getElementById('myBox')
myBox.addEventListener('click',(event)=>{
    let target=event.target
    switch (target.id){
            case "myBox1":
            location.href="http://www.baidu.com";
            break;
            case "myBox2":
                document.title="i changed the document title"
                break;
            case "myBox3":
                console.log('hi')
                break;
    }
})
