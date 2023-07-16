let arg={
    0:'111',
    1:'222',
    2:'333',
    length:3
}
//Array.from(伪数组)：把伪数组转化为真的数组
let argArr=Array.from(arg)
console.log(argArr)  //[ '111', '222', '333' ]

//Array.of()：把传递的1个或多个参数收集起来，形成一个数组
let arr=Array.of(2)
console.log(arr)  //[2]


//new Array()：参数为数字时，表示创建一个该数字长度的空数组
// 参数为其他类型时，表示创建一个由该类型组成的数组
let arr0=new Array(4)
console.log(arr0)   // [ <4 empty items> ]  创建一个长度为4的数组

let arr1=new Array("1")
console.log(arr1)   //["1"]

let arr2=new Array("dsg","cgx")
console.log(arr2)   //[ 'dsg', 'cgx' ]


// let opt=[1,,,,5]
// console.log(opt.length)  //5


