let obj = {
    b : 100,
    3: "apple",
    a: 200,
    0: "mango",
    true: 400,
    c: 300,
    "$36137y": 500,
    1: "banana",
}

// 0,1,3,b,a,c
// pure numbers will move to top in ascending order then all other keys in same order in which it is created
console.log(obj)