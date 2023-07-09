// Object.hasOwn()：用来判断是否为自身的属性（不是继承的属性）
//可以接受两个参数，第一个为要判断的对象，第二个为属性名
//Object.hasOwn()一个好处是，对于不继承的对象不会报错，hasOwnProperty()是会报错的
const foo=Object.create({a:123})
foo.b=456
console.log(Object.hasOwn(foo,"a"))   //false
console.log(Object.hasOwn(foo,"b"))   //true
//对象foo的属性a是继承属性，属性b是原生属性（自身的属性）

