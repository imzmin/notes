//getElementByTagName()接收一个参数，即要获取元素的标签名，返回包括零个或多个元素的NodeList
let images=document.getElementsByTagName('img')  //返回页面中所有的<img>元素和HTMLCollection
//HTMLCollection和NodeList一样，也可以使用中括号或者item()方法从HTMLCollection取得特定的元素
//取得元素的数量可以通过length属性得知
alert(images.length)  //图片的数量
alert(images[0].src)  //第一张图片的src属性
alert(images.item(0).src)  //第一张图片的src属性


//要想获取页面中所有的元素可以给getElementsByTagName('*')传入*
let allElement=document.getElementsByTagName('*')
