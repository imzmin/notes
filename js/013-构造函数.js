//1、Object和Array是原生的构造函数，也可以自定义构造函数，解决创建多个类似对象的问题
//但没有解决对象标识问题（即新创建的对象是什么类型）
//没有return
//要创建实例要用new操作符，以这种方式调用构造函数，则构造函数内部的this指向这个新的实例对象。
function Person(name,age,job){
    this.name=name
    this.age=age
    this.job=job
    this.sayName=function (){
        console.log(this.name)
    }
}
let person1=new Person("dsg",26,"fontEnd")
let person2=new Person("cgx",28,"backEnd")

person1.sayName()  //dsg
person2.sayName()  //cgx


