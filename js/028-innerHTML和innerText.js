//innerHTMl属性：在写入模式下，赋给innerHTML属性的值会被解析为DOM子树，并替代元素之前所有的节点
//其中的所有标签都会浏览器处理HTML的方式转换为元素
//如果赋值中不包含任何HTML标签，则直接生成一个文本节点
div.innerHTML='hello world'
div.innerHTML='<strong>hello world</strong>'  //加粗的hello world

//innerText属性对应元素中包含的所有文本内容
div.innerTextL='hello world'
div.innerText='<strong>hello world</strong>'  //<strong>hello world</strong>
