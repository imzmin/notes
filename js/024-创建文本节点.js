//创建新文本节点，接收一个参数：要插入节点的文本

let element=document.createElement('div')
element.className='msg'
let textNode=document.createTextNode('hello world')
element.appendChild(textNode)
document.body.appendChild(element)

// 以上代码，先创建一个div元素，然后给这个元素添加一个属性，
// 又给这个元素创建了一个文本节点，然后把这个文本节点添加到这个元素中，
// 最后把这个元素添加到文档的body中，这样元素以及其包含的文本都会出现在浏览器中。
//一般一个元素只包含一个文本子节点
