//JSON对象有两个方法:stringify()和parse()
//stringify():在简单情况下,可以将js序列化为JOSN字符串
//parse():在简单情况下,可以将JSON解析为为js值

let book={
    name:"dsg",
    age:22
};
let jsonText=JSON.stringify(book)
// jsonText的值:
// {"name":"dsg","age":22}

//JSON字符串可以直接传给JSON.parse(),得到相同的js值
let bookCopy=JSON.parse(jsonText)

//注意:book和bookCopy是两个完全不同的对象,没有任何关系.但是它们拥有相同的属性和值
//如果给JSON.parse()传入的JSON字符串无效,则会导致抛出错误
