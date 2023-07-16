let obj=[
    {name:'dsg1',age:24,checked:true},
    {name:'dsg2',age:25,checked:true},
    {name:'dsg3',age:26,checked:false},
    {name:'dsg4',age:27,checked:true},
    {name:'dsg5',age:28,checked:false},
]
//map():返回的数组是对原数组进行相同的操作，返回的数组不会比原数组多或者少
//可以用于拿到数组里面每一个对象的某个属性
console.log(obj.map(item=>item.name))  //[ 'dsg1', 'dsg2', 'dsg3', 'dsg4', 'dsg5' ]



//forEach():用法和map差不多，只是没有返回值
let arr=[]
obj.forEach(item=>{
    arr.push(item.name)
})
console.log(arr)    // [ 'dsg1', 'dsg2', 'dsg3', 'dsg4', 'dsg5' ]



//find():找到第一个符合条件的项，返回
//find和filter区别：find只会返回第一个符合条件的项，filter会把所有符合条件的项收集起来，形成一个数组
console.log(obj.find(item=>item.checked))  //{ name: 'dsg1', age: 24, checked: true }



//filter():返回条件为true的那些项，形成一个新的数组
//可以用于拿到数组中满足指定条件的那几项
console.log(obj.filter(item=>item.checked))
    // [
    //     { name: 'dsg1', age: 24, checked: true },
    //     { name: 'dsg2', age: 25, checked: true },
    //     { name: 'dsg4', age: 27, checked: true }
    // ]
let obj1=['dsg1','dsg2',24, 'dsg3', 25, 'dsg4', 'dsg5', 26, 27, 28]
console.log(obj1.filter(item=>typeof item==='string')) //[ 'dsg1', 'dsg2', 'dsg3', 'dsg4', 'dsg5' ]


//some():只要有一项满足条件，结果就返回true
console.log(obj.some(item=>item.checked)) // true



//every():只要有一项不满足条件，结果就返回false
console.log(obj.every(item=>item.checked)) // false




//reduce():累加器，sum:累加结果，i:当前项（数值/对象），初始值（数值/字符串）
    let arr11=[
        {name:'dsg1',age:24,checked:true,price:175},
        {name:'dsg2',age:25,checked:true,price:176},
        {name:'dsg3',age:26,checked:false,price:177},
        {name:'dsg4',age:27,checked:true,price:179},
        {name:'dsg5',age:28,checked:false,price:178},
    ]
console.log(arr11.reduce((sum,i)=>{
    return sum+i.price
},0))
//885
console.log(arr11.reduce((sum,i)=>{
    return sum+i.name
},''))
//dsg1dsg2dsg3dsg4dsg5
