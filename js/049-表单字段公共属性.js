//表单字段就是表单所包含的控件
//表单元素可以像页面中的其他元素一样使用元素DOM方法来访问，此外，所有表单元素都是表单element属性(元素集合)中包含的一个值
//这个elements集合是一个有序列表，包含对表单中所有字段的引用，包括所有<input><button><select><fieldset>元素
//其每个字段都以它们在HTML标记中出现的顺序保存，可以通过索引位置和name属性来访问
let form = document.getElementById('myForm')
//取得表单中的第一个字段
let field=form.elements[0]
//取得表单中名为textBox的字段
let field2=form.elements['textBox']
//取得表单的数量
let fieldCount=form.elements.length


//表单字段的公共属性以及属性值
//除了<fieldset>元素外，所有表单字段都有一组相同的属性
//disable：表示表单字段是否禁用
//form:指针，指向表单字段所属的表单，只读
//name:表单字段的名字
//readOnly:表示这个字段是否只读
//type:表示表单字段的类型 比如checkbox radio
//value:要提交给服务器的字段值，对于文件输入字段来说，这个属性是只读的
//这里面除了form属性外，js可以动态修改任何属性

// <form id="myForm">
//     <ul>
//     <li><input type="text" name="color" value="red"></li>
//     <li><input type="text" name="color" value="blue"></li>
//     <li><input type="text" name="color" value="white"></li>
// </ul>
// </form>
let form = document.getElementById('myForm')
let field=form.elements[0]
field.value='another value'
field.focus()  //给字段设置焦点
field.disable=true  //禁用字段
field.type='checkbox' //改变字段类型
