let obj={
    "q":1,
    "j":2,
    "k":3
}
console.log(obj.q)    //1

for(let i in obj){
    console.log(obj[i])
    //1 2 3
}

 for(let a in obj){
     console.log(obj.a)
     //undefined undefined undefined
 }

