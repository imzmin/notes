//Object.keys():返回一个数组，成员是参数对象自身的键名，
//Object.values():返回一个数组，成员是参数对象自身的键值，
//Object.entries():返回一个数组，成员是参数对象自身的键值对数组，

//以下是es5写法
let obj={foo:'bar',baz:'42'}
console.log(Object.keys(obj))   //['foo','baz']

let obj2={foo:'bar',baz:'42'}
console.log(Object.values(obj2))   //['bar','42']

let obj3={foo:'bar',baz:'42'}
console.log(Object.entries(obj3))   //['foo','bar'],['baz','42']


//以下是es6写法
let {keys,values,entries}=Object
let obj={a:1,b:2,c:3}
for(let key of keys(obj)){
    console.log(key)
    //a b c
}
for(let value of values(obj)){
    console.log(value)
    //1 2 3
}
for(let [key,values] of entries(obj)){
    console.log([key,values])
    //['a':1]
    //['b':2]
    //['c':3]
}
