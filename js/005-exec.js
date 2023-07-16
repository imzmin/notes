//exec()：如果找到匹配项，则返回第一个匹配信息数组，如果没找到返回null
//返回的数组包含两个额外的参数index和input
//index:字符串中匹配模式的起始位置
//input:要查找的字符串
let text="and mom and dad mom and dad"
let pattern=/mom and dad/
matches=pattern.exec(text)
console.log(matches)
matches=pattern.exec(text)
console.log(matches)

//     [
//     'mom and dad',
//         index: 4,
//     input: 'and mom and dad mom and dad',
//     groups: undefined
// ]
// [
//     'mom and dad',
//     index: 4,
//     input: 'and mom and dad mom and dad',
//     groups: undefined
// ]


//g:全局标记，表示从下一个符合条件的位置开始匹配
let text="and mom and dad mom and dad"
let pattern=/mom and dad/g
matches=pattern.exec(text)
console.log(matches)
matches=pattern.exec(text)
console.log(matches)
//
//     [
//     'mom and dad',
//         index: 4,
//     input: 'and mom and dad mom and dad',
//     groups: undefined
// ]
// [
//     'mom and dad',
//     index: 16,
//     input: 'and mom and dad mom and dad',
//     groups: undefined
// ]
