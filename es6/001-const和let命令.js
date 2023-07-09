//1、 const和let一样，相同作用域下不能重复定义
//2、 const和let都存在块级作用域，他们只在自己的块级作用域里起作用，其他作用域对他们没影响
//3、 有大括号就有块级作用域，函数作用域是函数大括号内，
//    函数作用域一定是块级作用域，块级作用域不一定是函数作用域，if和for循环的大括号也是块级作用域

var a=[]
for (var i=0;i<10;i++){
    a[i]=function (){
        console.log('i=',i)
    }
}
a[6]()  //10



let b=[]
for (let y=0;y<10;y++){
    b[y]=function (){
        console.log('y=',y)
    }
}
b[6]()  //6

