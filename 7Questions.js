

let obj1 = {
    a:10,
    b:20,
    c:30,
    // f: 60
}

let obj2 = {
    d: 40,
    e: 50,
    // f: 100
}

let obj3 = {}

for(let t in obj1){
    // t, obj1[t]
    obj3[t] = obj1[t]
}


for(let t in obj2){
    // t, obj2[t]
    obj3[t] = obj2[t]
}

console.log(obj3)
