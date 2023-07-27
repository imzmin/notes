//getElementClassName():接收一个参数，即包含一个或多个类名的字符串，返回类名中包含相应类的元素的NodeList
//如果提供了多个类名，则顺序无关紧要
//这个方法只返回以调用它的对象为根元素的子树中所有匹配的元素
//而在特定元素上调用则返回该元素后代中匹配的元素

//获取所有类名中包含’username‘和'age'元素
let allUserNameAges=document.getElementsByClassName('username age')

//获得ID为'myDiv'的元素子树中包含’msg’类名的元素
let msgs=document.getElementById('myDiv').getElementsByClassName('msg')


