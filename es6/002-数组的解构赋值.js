//1、解构赋值：es6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，就是解构
let [foo,[[bar],baz]]=[1,[[2],3]]
//foo= 1
//bar= 2
//baz= 3


let [ , , third]=['foo','bar','baz']
//third=baz


let [x, , ,y]=[1,2,3,4]
//x=1
//y=4


let [head,...tail]=[1,2,3,4,5,6]
//head=1
//tail=[2,3,4,5,6]


let [m,n, ...h]=['s']
//m=s
//n=undefined
//h=[]


//2、如果等号右边是个空数组，则解构不成功，变量的值就是undefined
// undefined：只声明未赋值，以后就叫他未赋值吧，他就是因为未赋值才叫的未定义，他就是未赋值的意思，这个单词太误导我
let [fooo]=[]
let [bus,foo0]=[1]
//两个foo0都是=undefined


//3、如果等号左边的模式只匹配一部分的等号右边的数组，这种情况下，成为不完全结构，但是解构依然成功
let [w,z]=[1,3,4]
//w=1
//z=3


//4、如果等号右边不是一个数组，或者不是可遍历的结构，那么就会报错
// let [foo]=1
// let [foo]=false
// let [foo]=undefined
// let [foo]=NaN
// let [foo]=null
// let [foo]={}


//5、解构赋值指定默认值
let [fo=true]=[]
//fo=true

let [j,k='b']=['a']
//j=a
//k=b


//6、es6内部使用严格相等运算符（===），只有当一个数组成员严格等于undefined，默认值才会生效
// 等号右边才是数组，左边只是解构的形式，等号右边的数组成员每一个和undefined比较，
// 严格等于undefined就使用它们的默认值，不严格等于，就使用数组成员，不使用默认值
//再强调一次，undefined就是没赋值，没有值的意思
let [q=1]=[undefined]
console.log(q)
//q=1


//7、如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined
let [e=1]=[null]
console.log(e)
//e=null


//8、默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [r=1,t=r]=[]
// r=1
// t=r
let [r1=1,t1=r1]=[2]
// r1=2
// t1=2
let [r3=1,t3=r3]=[1,2]
// r3=1
// t3=2
let [r4=t4,t4=1]=[]
// 报错，t4没有声明



