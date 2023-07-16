//区别1：声明和赋值
// const定义的基础数据类型的变量声明之后要初始化，并且不能重复声明和赋值
// 但是const定义的引用数据类型变量可以修改，因为这里存的是变量的地址
// let声明的变量可以重复赋值，但是不能重复声明
// var声明的变量可以重复赋值，也可以重复声明
    let b=9
    b=10
    console.log(b)  //b=10
    var c=1
    var c=2
    console.log(c) // c=2
// const a=1
// a=2   报错：Uncaught TypeError: Assignment to constant variable.
const obj={
    name:'dsg',
    age: 26
}
obj.age=27
console.log(obj) // { name:'dsg', age: 27}
//区别2：是否存在变量提升
// var定义的变量存在变量提升，var定义的函数存在函数提升
// let和const定义的变量不存在变量提升
function foo(){
    console.log(age)
    var age=24
}
foo()   //age=undefined
//相当于执行
function foo(){
    var age
    console.log(age)
    age=24
}
foo()   //age=undefined

function fo(){
    console.log(age)
    let age=24
}
fo()   //age报错：Cannot access 'age' before initialization

//区别3：作用域
//1、var声明的变量是全局作用域/函数作用域，写在{}里面的变量，外面可以访问，函数内定义的变量，只在函数作用域内生效，外部不能访问
//2、let和const定义的变量存在块级作用域，写在{}里面的变量，外面不能访问
if(true){
    var name='dsg'
    console.log(name)   //dsg
}
console.log(name)   //dsg

if(true){
    let name1='dsg'
    console.log(name1)   //dsg
}
console.log(name1)   // 报错：name1 is not defined

