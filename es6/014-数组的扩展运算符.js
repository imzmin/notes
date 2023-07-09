//1、复制数组（浅拷贝）
const a1=[1,2]
const a2=[...a1]
console.log(a2)   //a2=[1,2]

//2、合并数组（浅拷贝）
const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[7,8,9]
const arr4=[...arr1,...arr2,...arr3]
console.log(arr4)
//arr4=[1,2,3,4,5,6,7,8,9]

//3、与解构赋值结合，生成数组
const [first,...rest]=[1,2,3,4,5]
//first=1
//rest=[2,3,4,5]

const [first,...rest]=[]
//first=undefined
//rest=[]

const [first,...rest]=["foo"]
//first="foo"
//rest=[]


//4、如果扩展运算符用于数组的赋值，只能放在参数的最后一位，否则会报错

//5、扩展运算符还可以将字符转为真正的数组
// [..."hello"]
//['h','e','l','l','o']


//6、扩展运算符也可以将某些数据结构转化为数组
// [...arguments]
