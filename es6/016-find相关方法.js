//1、find():用于找出第一个符合条件的数组成员，返回该成员，如果没有找到，则返回undefined
//2、findIndex():返回第一个 符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
//3、前两个都是从数组的0号位，依次向后查找，
//4、findLast()和findLastIndex():从数组的最后一个成员开始，依次向前查找，其他保持不变。node版本低于18，这两个方法不支持

const arr=[
    {value:1},
    {value:2},
    {value:3},
    {value:4},
]
const arr1 = arr.find(a => a.value>2)              //{value:3}
const arr2 = arr.findIndex(a => a.value>2)         //2
const arr3 = arr.findLast(a => a.value>2)          // {value:4},
const arr4 = arr.findLastIndex(a => a.value>2)     //3


//4、上面的方法的回调函数可以接收三个参数，当前值（value），当前位置(index)，原数组(arr)
// arr.find(function (value,index,arr){
//     return value>2
// })

