//函数也是个对象，所以每个函数都有两个属性和两个方法
//两个属性：length和prototype
//两个方法：call和apply
//call、apply区别：
//call():第一个参数时this，第二个参数是要给被调用函数传的参数是逐个传递的。也就是说，通过call（）向函数传参时，必须将参数一个一个的列出来
function sum(num1,num2){
    return num1+num2
}
function callSum(num1,num2){
    return sum.call(this,num1,num2)
}
console.log(callSum(10,10))  //20

//apply()：:第一个参数时this，第二个参数是一个数组或者arguments对象
function sum1(num1,num2){
    return num1+num2
}
function callSum1(num1,num2){
    // return sum1.apply(this,[num1,num2])
    return sum1.apply(this,arguments)
}
console.log(callSum1(20,30))  //50

//bind():只会改变this指向，并不会调用函数，三者的this都指向被调用的函数
var color='red'
var o={
    color:'blue'
}
function sayColor(){
    console.log(this.color)
}
let getColor=sayColor.bind(o)
getColor()   //blue
