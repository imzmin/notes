//1、函数参数也可以解构赋值
function add([x,y]){
    return x+y
}
add([1,2])
//3

[[1,2],[3,4]].map(([a,b])=>a+b)
//[3,7]


//2、函数参数的解构也可以使用默认值
function move({x=0,y=0}={}){
    return [x,y]
}
move({x:3,y:8})  //[3,8]
move({x:3})  //[3,0]
move({})  //[0,0]
move()  //[0,0]  理解：这个表示什么都不传，默认就是右边就是空对象，对空对象解构赋值，x,y就是解构赋值的默认值
//上面的代码，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值，如果解构失败，x和y等于默认值


function move({x,y}={x:0,y:0}){
    return [x,y]
}
move({x:3,y:8})  //[3,8]
move({x:3})      //[3,undefined]
move({})         //[undefined,undefined]
move()                 //[0,0]  理解：什么都不传，默认值为右边的{x:0,y:0}，对右边默认值解构赋值，得到x,y
//上面的代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值


function move({x,y=5}){
    return [x,y]
}
move({})          //[undefined,5]
move({x:1})       //[1,5]
move({x:1,y:2})   //[1,2]
move()                  // error
//只有当move传入的参数是一个对象的时候，变量x,y才能通过解构赋值生成，如果move调用时没有提供参数，变量x,y就不会生生，就会报错




function  f(x=1,y){
    return [x,y]
}
f()                  //[1,undefined]
f(2)              //[2,undefined]
// f(,1)             //报错
f(undefined,1) //[1,1]
//定义了默认参数，应该是函数的尾参数，这个参数可以省略，如果是非尾参数，这个是不能省略的，否则会报错
