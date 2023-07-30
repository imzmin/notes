//form元素的一些属性和方法：
//action:请求的url，等价于HTML的action属性
//length:表单中控件的数量
//method:http请求的类型，通常"get" "post"，等价于HTML的method属性
//name:表单的名字，等价于HTML的name属性
//reset():把表单字段重置为各自的默认值
//submit():提交表单
//target:用于发送请求和接收响应的窗口的名字，等价于HTML的target属性

//有几种方式可以取得对form元素的引用，最常用的时将表单当中普通元素为它指定一个id属性，从而使用getElementById()来获取表单
let form=document.getElementById('form1')

//此外，使用document.forms集合可以获取页面上所有的表单元素，然后可以进一步使用数字索引或者表单名字(name)来访问特定的表单
//取得页面中的第一个表单（<form>元素开头的表单，并不是<input>，它只是其中一个表单控件/字段）
let firstForm=document.forms[0]
//取得名字为form2的表单
let myForm=document.forms['form2']
