//1、if语句
// 2、do-while
// 循环体至少执行一次
let i=1
do{
    i+=2
}while (i<4)
//3、while
//可以一次都不执行
let i=1
while (i<4){
    i+=3
}
//4、switch
let i=25
switch (i){
    case 23:
        console.log("23")
        break;
    case 24:
        console.log("24")
        break;
    case 25:
        console.log("25")
        break;
    default:
        console.log("other")
}
let num=23
switch (true){
    case num<0:
        console.log("-1")
        break;
    case num>0&&num<=10:
        console.log("2")
        break;
    case num>10&&num<=20:
        console.log("15")
        break;
    default:
        console.log("23")
}
switch ("hello world"){
    case "hello" + "world":
        console.log('1')
        break;
    case "goodbye":
        console.log('2')
        break;
    default:
        console.log("3")
}
//5、break：退出整个循环，不再执行这个循环
//6、continue：退出本次循环，但会再一次从头开始执行循环
