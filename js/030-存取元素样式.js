//HTML style属性中css属性在javascript style对象中都有对应的属性
//css属性名使用连字符表示，在javascript中这些属性必须转换为驼峰大小形式

let myDiv=document.getElementById('myDiv')
myDiv.style.backgroundColor='red'
myDiv.style.border='1px solid red'
myDiv.style.width='200px'

//通过style属性设置的值也可以通过style对象获取
// <div id="myDiv" style="background-color: rosybrown;width: 10px;height: 25px"></div>
console.log(myDiv.style.backgroundColor) //rosybrown
console.log(myDiv.style.width) //10px
console.log(myDiv.style.height) //25px

//cssText属性；可以存取样式的css代码，在读模式下，cssText返回style属性css代码在浏览器内部的表示
//在写模式下，给cssText赋值会重写整个style属性的值
myDiv.style.cssText="background-color: rosybrown;width: 10px;height: 25px"
console.log(myDiv.style.cssText)
//设置cssText是一次性修改元素多个样式最快捷的方式

//removeProperty():该方法用于从元素样式中删除指定的css属性。
myDiv.style.removeProperty('border')  //删除style属性中设置的border样式
