//location是最有用的BOM对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能
//这个对象独特的地方在于，它既是window的属性，也是document的属性
//也就是说window.location和document.location指向同一个对象
//location对象不仅保存着当前加载文档的信息，也保存着把URL解析为离散片段后能够通过属性访问的信息

//假设浏览器当前加载的URL是http://foouser:password@www.wrox.com:80/WileyCDA/?q=javascript#content
//location对象的内容如下：
//    属性                值                                           说明
//location.hash      "#content"                          URL散列值（#后跟0或多个字符），如果没用则为空字符串
//location.href      "http://www.wrox.com:80/WileyCDA/?q=javascript#content"  当前加载页面的完整URL
//location.search    "?q=javascript"                     URL的查询字符串（这个字符串以？开头）


//查询字符串
// 给URLSearchParams构造函数传一个查询字符串，就可以创建一个实例
// 这个实例上暴露了get() set() delete()等方法，可以查询字符串执行相应操作(检查和修改)
let qs="?q=javascript&num=10";
let searchParams=new URLSearchParams(qs)
alert(searchParams.toString())    //q=javascript&num=10
searchParams.has("num")     //true
searchParams.set("page","3")
alert(searchParams.toString())    //q=javascript&num=10&page=3
searchParams.delete("q")
alert(searchParams.toString())    //num=10&page=3


//操作地址
// location.assign():传入一个URL，可以通过修改location对象修改浏览器的地址
location.assign('http://www.wrox.com')   //立即启动导航到新URL
window.location='http://www.wrox.com'  //修改浏览器的地址
location.href='http://www.wrox.com'    //修改浏览器的地址
location.reload()   //重新加载，重新加载当前显示的页面
location.reload(true)   //重新加载，从服务器加载
//最好把reload()作为最后一行代码
location.replace('http://www.wrox.com') //不会返回到前一页
