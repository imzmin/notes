//1、appendChild()：在childNodes列表末尾添加节点，返回新添加的节点
let returnedNode=someNode.append(newNode)
alert(returnedNode==newNode)        //true
alert(someNode.lastChild==newNode)  //true
// 如果文档中已经存在的节点传给appendChild()，则这个节点会从之前的位置被转移到新位置，
// 例如，如果把原来父元素第一个子节点传给appendChild()，那么第一个节点或称为父元素的最后一个子节点
// 假设someNode有很多子节点
let returnedNode=someNode.append(someNode.firstChild)
alert(returnedNode==someNode.firstChild)  //false
alert(returnedNode==someNode.lastChild)  //true


//如果想要把节点放在特点位置而不是末尾，可以使用insertBefore()方法
//insertBefore()：接收两个参数，一个是要插入的节点，一个是参照节点。要插入的节点会变成参照节点的前一个同胞节点，并被返回
//如果参照节点时null，insertBefore和appendChild效果相同


//作为最后一个子节点插入
returnedNode=someNode.insertBefore(newNode,null)
alert(newNode==someNode.lastChild)  //true

//作为新的第一个子节点插入
returnedNode=someNode.insertBefore(newNode,someNode.firstChild)
alert(returnedNode==newNode)  //true
alert(newNode==someNode.firstChild) //true

//插在最后一个子节点前面
returnedNode=someNode.insertBefore(newNode,someNode.lastChild)
alert(returnedNode==newNode)  //true
alert(newNode==someNode.childNodes[someNode.childNodes.length-2]) //true


//insertBefore和appendChild不会删除已有的节点，相反，replaceChild()方法接收两个参数：一个是要插入的节点，一个是要替换的节点
//要替换的节点会被返回并从文档中完全移除，要插入的节点会取而代之


//替换第一个子节点
let returnedNode=someNode.replaceChild(newNode,someNode.firstChild)

//替换最后一个子节点
let returnedNode=someNode.replaceChild(newNode,someNode.lastChild)


//要移除节点而不是替换节点，可以使用removeChild()方法，这个方法接收一个参数：要移除的节点，被移除的节点要被返回

//删除第一个子节点
let returnedNode=someNode.removeChild(someNode.firstChild)
//删除最后一个子节点
let returnedNode=someNode.removeChild(someNode.lastChild)


// cloneNode()：回返回与调用它的节点一模一样的节点。接收一个布尔值，传入true表示深复制，复制节点以及整个子DOM树，
// 如果传入false，只会复制调用该方法的节点
// 复制返回的节点属于文档所有，但尚未指定父节点，称为孤儿节点，可以通过insertBefore、appendChild、replaceChild三种方法
// 把孤儿节点添加到文档中


// <ul>
//     <li>1</li>
//     <li>1</li>
//     <li>1</li>
// </ul>

//如果myList保存对这个<ul>的引用
let deepList=myList.clone(true)
alert(deepList.childNodes.length)     //3

let shallowList=myList.clone(false)
alert(shallowList.childNodes.length)   //0  (浅复制，没有复制到子节点)
