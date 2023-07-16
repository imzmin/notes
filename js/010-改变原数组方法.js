
let arr0=[1,2,3,4,5,6,7,8]
// 在数组的末尾添加元素改变原数组
arr0.push('dsg')
console.log(arr0) // [1,2,3,4,5,6,7,8,'dsg']



// 在数组的末尾删除元素改变原数组
arr0.pop()
console.log(arr0) // [1,2,3,4,5,6,7,8]
// 在数组的头部添加元素，改变原数组



arr0.unshift('dsg')
console.log(arr0) // ['dsg',1,2,3,4,5,6,7,8]



// 在数组的头部删除元素，改变原数组
arr0.shift()
console.log(arr0) // [1,2,3,4,5,6,7,8]
// 注意：pop和shift返回被删除的元素，push和unshift返回数组的新长度



// 删除数组元素，改变原数组，返回被删除的元素
// arr0.splice(start, number) // start为起始索引 number为删除个数
// arr0.splice(start, number, value) // value为新增元素
console.log(arr0.splice(1,4)) //[ 2, 3, 4, 5 ]
console.log(arr0) // [ 1, 6, 7, 8 ]



let arr1=[4,2,1,9,7,5,3,2]
arr1.sort((a,b)=>a-b) // 数组排序改变原数组（a-b为升序，b-a为降序）
console.log(arr1) //[1, 2, 2, 3, 4, 5, 7, 9]



let arr2=['a','f','b','c','d','e','f']
arr2.reverse() // 数组反转，改变原数组
console.log(arr2) // ['f', 'e', 'd','c', 'b', 'f','a']

