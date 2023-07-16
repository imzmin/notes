//1、每个函数都有一个prototype属性，这个属性是个对象，包含一些共享的方法和属性给实例对象使用
// 这个属性称为原型，它是一个对象，所以也叫为原型对象
//使用原型对象的好处：在它上面定义的属性和方法可以被对象实例共享
//原型链：
//每个实例对象都有一个__proto__属性，指向构造函数的原型对象
//但是这个原型也是一个对象，它也有__proto__属性，指向原型的原型对象，一直往上链式查找
function Person(name,age){
   Person.prototype.name="dsg"
   Person.prototype.age=28
   Person.prototype.sayName=function (){
       console.log(this.name)
   }
}
let person1=new Person()
let person2=new Person()

console.log(person1.__proto__)  // { name: 'dsg', age: 28, sayName: [Function (anonymous)] }
console.log(person1.__proto__===Person.prototype)  // true
console.log(Person===Person.prototype.constructor)  // true

person1.sayName()  //dsg
person2.sayName()  //dsg
