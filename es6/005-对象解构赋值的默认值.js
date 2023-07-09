//1、对象的解构也可以指定默认值，与数组一样，默认值生效的条件就是，对象的属性值严格等于undefined
var {x=3}={x:undefined}
//x=3
var {y=3}={y:null}
//y=null


//2、数组本质是特殊的对象，因此可以对数组进行对象属性的解构
let arr=[1,2,3]
let {0:first, [arr.length-1]:last}=arr
//first=1,
//last=3
//数组arr的0键对应的值是1， [arr.length-1]就是2键，对应的值是3
