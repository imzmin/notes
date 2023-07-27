//使用DOM最常见的情形可能就是获取某个或者某组元素的引用，
//getElementById和getElementByTagName就是Document类型提供的两种方法
//getElementById()方法接收一个参数，即要获取元素的ID，如果找到了则返回这个元素，如果没有则返回null
//参数ID必须跟元素在页面中的id属性值完全匹配，包括大小写
// <div id="myDiv">some text</div>
let div=document.getElementById("myDiv")  //获取这个元素
let div=document.getElementById("mydiv")  //null
//如果页面中存在多个具体相同ID的元素，则getElementById()返回第一个元素







































































