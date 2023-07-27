//可以使用document.createElement()创建新元素，这个方法接收一个参数，就是要创建的元素的标签名
//使用createElement()方法创建新元素的同时，也会将其ownerDocument属性设置为document，可以再为其添加属性

let div=document.createElement('div')
div.id='myDiv'
div.className='box'

//在新元素上设置这些属性只会附加信息，因为这个元素还没有添加到文档树上，所以不会影响浏览器显示
//要把元素添加到文档树上，可以使用appendChild() insetBefore() replaceChild()
document.body.append(div)  //把刚才创建的元素添加到文档的body元素中
