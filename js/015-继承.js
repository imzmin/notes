//子类有时候需要覆盖父类的方法，或者增加父类没有的方法，因此这些方法必须在原型赋值之后在添加到原型上

function Person(){
    this.name="dsg"
}
Person.prototype.getName=function (){
    return this.name
}

function Student(){
    this.age=22
}
//继承Person
Student.prototype=new Person()
//新方法
Student.prototype.getAge=function (){
    return this.age
}
//覆盖已有的方法
Student.prototype.getName=function (){
    return this.age
}
let student1=new Student()
console.log(student1.getName())  //22
