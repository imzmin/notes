//es6在Number对象上，新提供了Number.isNaN()和Number.isFinite()两个方法
//Number.isNaN():用来检查一个值是否为NaN，如果参数类型不是NaN，Number.isNaN()一律返回false
Number.isNaN(NaN)            //true
Number.isNaN(22)     //false
Number.isNaN(9/NaN)  //true
Number.isNaN('true'/0)  //true
Number.isNaN('true'/'true')  //true

//Number.isFinite():用来检查一个数值是否为有限的，参数类型不是数值，一一律返回false
Number.isFinite(11)  //true
Number.isFinite('ss')  //false
Number.isFinite(NaN)  //false

//es6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持一致
Number.parseInt('12,34')      //12
Number.parseFloat('123.3#')   //123.3

//Number.isInteger():用来判断一个数值是为整数，参数值不是数值，易拉宝返回false
Number.isInteger(3.1)     //false
Number.isInteger(3)       //true
Number.isInteger(3.0)       //true
Number.isInteger('12')    //false
Number.isInteger(null)    //false
Number.isInteger(true)    //false


//Math.trunc():用于出去一个数的小数部分，返回整数部分
//Math.cbrt():用于计算一个数的立方根，用法与上面一样
Math.trunc(2.1)     //2
Math.trunc(-2.1)    //-2
Math.trunc(-0.111)  //-0

//对于非数值，Math.trunc()内部使用Number方法先将其转化为数值
Math.trunc('123.11')  //123
Math.trunc(true)      //1
Math.trunc(false)     //0
Math.trunc(null)      //0

//对于空值或者无法截取整数的值，返回NaN
Math.trunc(NaN)             //NaN
Math.trunc('foo')        //NaN
Math.trunc()                //NaN
Math.trunc(undefined)    //NaN
