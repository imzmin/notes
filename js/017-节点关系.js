//每个标签就是一个节点。每个节点都有一个childNodes属性，其中包含一个nodeList实例(通过获取元素，打印出来去看)
//nodeList是一个伪数组，用于保存标签节点的关键信息，有length属性
//可以通过中括号或者item()方法访问nodeList中的元素

// let firstChild=someNode.childNodes[0]  //(推荐)
// let secondChild=someNode.childNodes.item(1)

// someNode.firstChild=someNode.childNodes[0]
// someNode.lastChild=someNode.childNodes[someNode.childNodes.length-1]

//每个节点都有一个parentNode属性，指向DOM树的父元素
//childNodes列表中的每个节点都是同一列表中其他节点的同胞元素，可以使用previousSibling和nextSibling查找


//注：div里面的也是节点(span p 之类的)，div就是父节点，节点关系以及节点操作同样使用，而且大部分就是对里面的节点进行操作
