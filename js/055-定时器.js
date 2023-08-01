//js在浏览器中是单线程执行的，但允许使用定时器指定在某个时间之后或者每隔一段时间就执行相应的代码
//setTimeout()方法通常接收两个参数：要执行的代码和在执行回调函数前等待的时候（毫秒）
//第一个参数可以是包含js代码的字符串或者一个函数

setTimeout(()=>alert('hello'),1000)

//调用setTimeout()时，会返回一个表示该超市排期的数值ID.这个超时ID是被排期执行的唯一标识，可用于取消该任务
//要取消该任务可以调用clearTimeout()并传入超时ID


//设置超时任务
let timeoutId=setTimeout(()=>alert('hello'),1000)
//取消超时任务
clearTimeout(timeoutId)
//只要在指定时间到达之前调用该方法，就可以取消任务


// setInterval()和setTimeout()的使用方法类似，只不过指定的任务会每隔指定时间就执行一次，直到取消循环定时或者页面卸载
// setInterval()也会返回一个循环定时ID，可以用于在未来某个时间点上取消循环定时
// 取消循环定时可以调用clearInterval()并传入ID
// 相对于setTimeout()而言，取消定时的能力对setInterval()更加重要
// 毕竟如果一直不管它，那么定时任务会一直执行到页面卸载
