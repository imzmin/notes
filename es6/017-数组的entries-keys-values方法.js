//entries(),keys(),values():用于遍历数组，他们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是
//keys()是对键名的遍历，
//values()是对键值的遍历，
//entries()是对键值对的遍历，

for(let index of ['a','b'].keys()){
    console.log(index)        //0 1
}
for(let elem of ['a','b'].values()){
    console.log(elem)          //a b
}
for(let [index,elem] of ['a','b'].entries()){
    console.log(index,elem)    //0 a   1 b
}
