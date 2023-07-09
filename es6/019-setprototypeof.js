// Object.setPrototypeOf()方法与__proto__相同，用来设置一个对象的原型对象(prototype)，返回参数对象本身
let proto={}
let obj={x:10}
Object.setPrototypeOf(obj,proto)
proto.y=20
proto.z=30
console.log(obj.x,obj.y, obj.z)
//10 20 30
//上面的代码将proto对象设置为obj对象的原型对象，所以obj可以读取proto对象的属性


// Object.getPrototypeOf()：用于读取一个对象的原型对象
function Recs(){}
const rec=new Recs()
console.log(Object.getPrototypeOf(rec)===Recs.prototype)   //true
