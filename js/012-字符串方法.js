let str='dsgabcdefg'
let str1='d-s-g'

//split():以指定的分隔符，分割字符串形成为一个数组
console.log(str.split(''))  // ['d', 's', 'g', 'a','b', 'c', 'd', 'e', 'f', 'g']
console.log(str1.split('-'))  // ['d', 's', 'g']


console.log(str.toLowerCase() )// 用于把字符串转换为小写。
console.log(str.toUpperCase()) // 用于把字符串转换为大写。


console.log(str.includes('o'))   //false
console.log(str.includes('d'))   //true


// 截取str从start到end的所有字符(包含起始位置,但不包含结束位置)
// 两个参数都必须是非负整数，如果参数start与end相等，那么该方法返回的就是一个空字符串
// 如果start比end大，那么该方法在提取字符串之前会先交换这两个参数
// 如果未指定end参数，则截取从start到原字符串结尾的字符串
console.log(str.substring(1,8))   //sgabcde
console.log(str.substring(4))     //bcdefg

// 从一个字符串中返回指定的下标的字符
console.log(str.charAt(1))  //s
