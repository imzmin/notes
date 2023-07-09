//1、解构赋值指定默认值
let [foo=true]=[]
//foo=true

let [j,k='b']=['a']
//j=a
//k=b


//2、es6内部使用严格相等运算符（===），只有当一个数组成员严格等于undefined，默认值才会生效
// 等号右边才是数组，左边只是解构的形式，等号右边的数组成员每一个和undefined比较，
// 严格等于undefined就使用它们的默认值，不严格等于，就使用数组成员的值，不使用默认值
//再强调一次，undefined就是没赋值，没有值的意思

let [q=1]=[undefined]
console.log(q)
//q=1（因为undefined严格等于undefined，所以默认值生效，q=1）

let [e=1]=[null]
console.log(e)
//e=null（因为null不严格等于undefined，默认值就不会生效，e就等于数组成员的值，就是null）



//3、默认值可以引用解构赋值的其他变量，但该变量必须已经声明
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



