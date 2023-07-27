// querySelector():方法接收css选择符参数，返回匹配该模式的第一个后代元素
// 如果没有匹配则返回null
// 在dom上使用该方法时，会从文档元素开始搜索
// 在element上使用时，则只会从当前元素的后代开始查询

//获取body元素
let body =document.querySelector('body')

//获取ID为’myDiv‘的元素
let myDiv=document.querySelector('#myDiv')

//获取类名为’msg‘的第一个元素
let msg=document.querySelector('.msg')

//获取类目为button的图片
let img=document.body.querySelector('img.button')
