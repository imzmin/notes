//querySelectorAll()和querySelector()一样，只接收用于查询的参数，但是会返回所有匹配的节点

//取得ID为’myDiv‘的div元素中所有的<em>元素
let ems=document.getElementById('myDiv').querySelectorAll('em')

//取得所有类名中包含’msg‘的元素
let msgs=document.querySelectorAll('.msg')

//取得所有是<p>元素子元素的<strong>元素
let strongs=document.querySelectorAll('p strong')
