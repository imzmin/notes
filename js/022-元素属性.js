//每个元素都有零个或者多个属性，与属性相关的DOM方法主要有3个：getAttribute()、setAttribute()、removeAttribute()、

//getAttribute()：获得属性
//注意：属性名不区分大小写，ID和id被认为是一个属性
//访问style属性时，返回的是css字符串
//访问事件属性(onclick)时，返回的是字符串形式的源代码
//主要用于获得自定义属性的值

// <div class="bd" id="myDiv" title="body text" lang="en" dir="ltr"></div>
let div=document.getElementById('myDiv')
alert(div.getAttribute('id'))       //myDiv
alert(div.getAttribute('class'))    //bd
alert(div.getAttribute('title'))    //body text
alert(div.getAttribute('lang'))     //en
alert(div.getAttribute('dir'))      //ltr

// setAttribute()：设置属性，接收两个参数：一个是要设置属性名，一个是属性的值
// 如果属性存在，则该方法会以指定的值替换原来的值
// 如果属性不存在，则该方法会以指定的值创建该属性
// 该方法适用于HTML属性，也适用于自定义属性
// 该方法设置的属性名会规范大小写，ID会变成id
// 元素属性也是DOM对象属性，直接给DOM对象赋值也可以设置元素属性的值

div.setAttribute('id','yourDiv')
div.setAttribute('class','yd')
div.setAttribute('title','body info')
div.setAttribute('lang','en')
div.setAttribute('dir','rtl')

//removeAttribute():从元素中删除属性，这不单单是清除属性，而是会把整个属性完全从元素中去掉
div.removeAttribute('class')

