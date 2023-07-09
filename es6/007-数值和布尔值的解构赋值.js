//1、解构赋值的规则：只要等号右边的值不是对象或者数组，就先将其转化为对象
let {toString:s}=123
s===Number.prototype.toString  //true
let {toString:s}=true
s=Boolean.prototype.toString()  //true
//以上代码，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值


//2、但是undefined和null无法转化为对象，所以对他们进行解构赋值的时候都会把报错
let {prop:x}=undefined
let {prop:y}=null
//报错

