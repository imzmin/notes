//模板字符串用反引号（`）表示，它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
//所有模板字符串的空格和换行都是会保留，如果不想要头尾空格，可以使用trim方法消除
//如果想要在模板字符串里嵌入变量，需要将变量名写在${}之中
//模板字符串还能调用函数
//模板字符串还能嵌套

//（1）普通字符串
// `in js '\n' is a line-feed`

//（2）多行字符串
`in js this is 
not legal`
console.log(`string text line 1 string line 2`.trim())

//（3）字符串嵌入变量
let name ='bob',time='today'
console.log(`hello ${name},how are you ${time}`)

//（4）调用函数
function fn(){
    return 'hello world'
}
console.log(`foo ${fn()} bar`)

