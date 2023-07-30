//表单是通过用户点击提交按钮或者图片按钮的方式提交的
//提交按钮可以使用type属性为submit的<input><button>元素来定义
//图片按钮可以使用type属性为image的<input>元素来定义
//有submit事件，也有submit()方法

//通用提交按钮
// <input type="submit" />
//自定义提交按钮
// <button type="submit"></button>
//图片按钮
// <input  type="image" src="smile.gif"/>

// 提交表单主要有两种方式：
// 第一种 —— 点击 <input type="submit"> 或 <input type="image">。
// 第二种 —— 在 input 字段中按下 Enter 键。
// 这两个行为都会触发表单的 submit 事件。处理程序可以检查数据，如果有错误，就显示出来，并调用 event.preventDefault()，
// 这样表单就不会被发送到服务器了。

// 在下面的表单中：
//（1） 在文本字段中按下 Enter 键。
//（2）点击 <input type="submit">。
// <input type="text" value="text"> <input type="submit" value="Submit">

//以这种方式提交表单会在向服务器发送请求之前触发submit事件
//这样就提供了一个验证表单数据的机会，可以根据验证结果决定是否真的要提交
//阻住这个事件的默认行为可以取消提交表单
let form = document.getElementById('myForm')
form.addEventListener('submit',(event)=>{
    //阻止表单提交
    //调用preventDefault()方法可以阻止表单提交
    event.preventDefault()
})

//也可以通过form.submit()方法来提交表单，可以在任何时候调用这个方法来提交表单，而且表单中不存在提交按钮 也不影响表单提交
//通过submit()提交表单时，submit事件不会被触发，因此在调用这个方法之前要先做数据验证
let form = document.getElementById('myForm')
form.submit()


//提交表单一个最大的问题就是可能会提交两次：
//解决：（1）在表单提交之后禁用提交按钮，（2）通过onsubmit事件处理程序取消之后的表单提交
