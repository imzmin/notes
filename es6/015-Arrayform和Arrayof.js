//1、Array.from():将两类对象转换为真正的数组：（类似数组的对象，可遍历的对象）
//它还可以接受一个函数作为第二参数，作用类似于数组的map方法，用来对每个元素进行处理。将处理后的值放入返回的数组
let arrLike={
    "0":2,
    "1":3,
    length:2
}
let arr=Array.from(arrLike,(x)=>x*x)
console.log(arr)   //[4,9]


//2、Array.of():用于将一组值转换为数组
//3、Array.of()总是返回参数值组成的数组，如果没有参数，则返回空数组
Array.of(1,2,3)       //[1,2,3]
Array.of(1)           //[1]
Array.of(1).length    //1
Array.of(undefined)   //[undefined]
Array.of()                  //[]


