//键盘事件：用户操作键盘时触发的，DOM2Events最初定义了键盘事件，但该规范在最终发布前删除了相应内容
// 因此，键盘事件很大程度上是基于原始的DOM0实现的
// 键盘事件包含3个事件：
//keydown:用户按下键盘上某个键时触发，而且持续按住会重复触发
//keypress:用户按下键盘上某个键并产生字符时触发，而且持续按住会重复触发，Esc键也会触发这个事件
//DOM3废弃了keypress事件，而推荐textInput事件
//keyup：用户释放键盘上某个键时触发

//当用户按下键盘上的某个字符键时，首先触发keydown事件，然后触发keypress事件，最后触发keyup事件
//对于非字符键，在键盘上按一下这个键，会先触发keydown事件，然后触发keyup


//输入事件只有一个：textInput，字符在被输入到可编辑区域时触发和有新字符被插入时触发
//因为textInput事件主要关注字符，所以在event对象上提供了一个data属性，包括要插入的字符
//data的值始终是要被插入的字符

let textBox=document.getElementById('myText')
textBox.addEventListener('textInput',(event)=>{
    console.log(event.data)
})

//event对象上还有一个inputMethod属性，该属性表示向控件中输入文本手段，可能的值如下：
//0：不能确定什么手段
//1：表示键盘
//2：粘贴
//3：拖放操作
//5：表单选项
//6：手写
//7：语音
//9：脚本
