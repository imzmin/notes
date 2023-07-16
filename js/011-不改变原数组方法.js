// arr.map((item, index, arr)=>{}) // 循环遍历数组、返回一个新的数组
// arr.forEach((item, index, arr)=>{}) // 循环遍历数组，不改变原数组
// arr.some((item, index, arr)=>{}) // 有一项返回为true，则整体为true
// arr.every((item, index, arr)=>{}) // 有一项返回为true，则整体为false
// arr.filter((item, index, arr)=>{}) // 数组过滤
// arr.reduce(prevValue/accumulator, currentValue, currentIndex, arr)=>{},init) // 数组求和
// arr.findIndex(item) // 查找并返回第一个符合要求的值的索引
// arr.find (item) // 查找并返回第一个符合要求的值




let arr=[1,2,3,4,5,6,7,8]

// arr.slice(start, end) // 数组截取，包括start，不包括end，返回一个新的数组（start为起始索引end为结束索引值）
console.log(arr.slice(1, 3) )  //[2,3]

// 数组的拼接，不影响原数组，浅拷贝
console.log(arr.concat(arr))  // [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]

//查找该项所在的位置/索引值/对应的下标(注意：仅仅返回第一个项的位置下标)
console.log(arr.indexOf(7))  //6

//把数组中的每一项以指定的分割符拼接成字符串
console.log(arr.join('-') )
//"1-2-3-4-5-6-7-8"


