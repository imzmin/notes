//1、函数的length属性
//指定了默认值之后，函数的length属性将返回没有指定默认值的参数个数
(function (a=2){}).length      //0
(function (a){}).length                 //1
(function (a,b,c=2){}).length   //2



//2、剩余参数rest和arguments区别
//（1）、rest是一个真正的数组，可以用数组的方法，arguments是一个伪数组，要先转成数组才可以用数组方法
//（2）、rest（...变量名）  放在形参中，用来接收剩余的参数（可以是全部，也可以是部分），接收的参数是放在数组里的
//（3）、arguments函数内置对象，用来接收所有的参数

function fn(...s){
    console.log(s)             //[1，2,3]
    console.log(arguments)     //{'0':1,'1':2,'2':3}
}


fn(1,2,3)
function fn(a,...s){
    console.log(s)             //[2,3]
    console.log(arguments)     //{'0':1,'1':2,'2':3}
}
fn(1,2,3)
