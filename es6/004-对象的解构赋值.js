//1、对象的解构赋值与数组有一个重要的不同
//数组的元素是按次序排列的，变量的取值由它的位置决定
//但是对象的属性没有次序，变量名与属性名同名，才能取到正确的值
//如果解构失败，变量的值就是undefined
let {bar,foo}={
    foo:'aaa',
    bar:'bbb'
}
//bar='bbb'
//foo='aaa'

let{baz}={
    foo:'aaa',
    bar:'bbb'
}
//baz=undefined


//2、如果变量名和属性名不一样，必须写成下面这样
//下面的代码中，foo是匹配模式，baz才是变量。真正被赋值的是变量bac，而不是模式foos
let {foo:bac}={
    foo:'aaa',
    bar:'bbb'
}
//bac='aaa'

//3、这实际上说明，对象的解构赋值是下面形式的简写，也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量
//真正被赋值的是后者，而不是前者
let {foo:foo,bar:bar}={
    foo:'aaa',
    bar:'bbb'
}

let obj={
    p:[
        'hello',
        {
            y:'world'
        }
    ]
}

let {p,p:[x,{y}]}=obj
//x='hello'
//y='world
//p=['hello',{y:'world}]

//4、如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，则会报错
//对象的解构赋值可以取到继承的属性

let {foo:{bar}}={baz:'aaa'}
//bar报错。因为foo=undefined，再取子属性就会报错

let obj={}
({foo:obj.prop} ={foo:123})
//obj={prop:123}

