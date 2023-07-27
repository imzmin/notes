//Document类型是文档节点的类型，文档对象document是HMTMLDocument的实例，表示整个HTML页面。document是window对象的属性，因此是一个全局对象
//Document节点的子节点可以是DocumentTYpe、Element或者Comment类型和ProcessingInstruction
//两个快捷方式可以访问Document节点的子节点：
// 第一个是documentElement属性，始终指向HTML页面的<html>元素
// 虽然document.childNodes中始终有<html>元素，但是documentElement属性可以更快更直接访问该元素

// <html>
// <body></body>
// </html>
let html=document.documentElement
alert(html===document.childNodes[0])  //true
alert(html===document.firstChild)  //true
//这个例子表明documentElement、firstChild、childNodes[0]都指向同一个值-><html>元素

//作为HTMLDocument的实例，document对象还有一个body属性，直接指向<body>元素
let body=document.body

//所有主流浏览器都支持document.documentElement和document.body
