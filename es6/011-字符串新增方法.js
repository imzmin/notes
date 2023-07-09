
//传统的js只有indexof方法可以确定一个字符串是否包含在另一个字符串中，es6又新增了三种新方法
// includes():返回布尔值，表示找到了参数字符串
// startsWith():返回布尔值，表示参数字符串是否在原字符串的头部
// endsWith():返回布尔值，表示参数字符串是否在原字符串的尾部
let s='hello world'
console.log(s.includes('o'))    // true
console.log(s.startsWith('h'))  // true
console.log(s.endsWith('d'))    // true

//这三个方法都支持第二个参数，表示开始搜素的位置
//第二个参数表示n时，endsWith的行为与其他两个方法有所不同，他针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
let s1='hello world'
console.log(s1.includes('o',4))     // true
console.log(s1.startsWith('h',4))   // false
console.log(s1.endsWith('hell',4))  // true



//repeat():返回一个新的字符串，表示将原字符串重复n次
'x'.repeat(2)     // 'xx'
'like'.repeat(2)  // 'likelike'
'na'.repeat(0)    // ''
//如果repeat的参数是小数，会被取整
//如果repeat的参数是负数或者infinity，会报错
//如果repeat的参数是0-1之间的小数，则等同于0，结果也就是 ""
//如果repeat的参数是-1~0之间的数，也等同于0，结果也就是 ""
//如果repeat的参数是字符串，则会先转换成数字
'na'.repeat('na')  // ""
'na'.repeat(3)     // "nanana"



//padStart():如果某个字符串不够指定长度，会在头部补全指定长度
//padEnd():如果某个字符串不够指定长度，会在尾部补全指定长度
's'.padStart(5,'ad')    // 'adads'
's'.padEnd(5,'ad')    // 'sadad'

//如果原字符串的长度等于或者大于最大长度，则符串补全不生效，返回原字符串
'dsd'.padStart(2,'ff')    //'dsd'
'dsd'.padEnd(2,'ff')      //'dsd'

//如果省略第二个参数，则默认使用空格补全长度
'g'.padStart(3)  // '  g'
'g'.padEnd(3)  // 'g  '

//如果用来补全的字符串与原字符串，两者的长度超过了最大长度，则会截去超出位数的补全字符串
'cxc'.padStart(10,'jwjejcjq')      //'jwjejcjcxc'


//trimStart():消除字符串头部的空格
//trimEnd():消除字符串尾部的空格
//trim():消除字符串头部和尾部的空格
//返回的都是新字符串，不会改变原始的字符串



//at():接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数位置）
//如果参数位置超出了字符串的范围，返回undefined
const str='hello'
str.at(1)  //'e'
str.at(-1)  //'o'


//replaceAll():一次性替换所有匹配
'aaabbssssq'.replaceAll('b','o')
console.log('aaabbssssq'.replaceAll('b','o'))  //'aaaoossssq'
