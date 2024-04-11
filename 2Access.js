let obj = {
    "21": true,
    "apple": 10,
    "mango": 20,
    "banana": 30,
    "cherry": 40,
    "lichi": 50,
    "t" : 500,
    "heelo world": "earth",
   
}

// limitations of dot notation
// let t = "apple"
// console.log(obj.t)

// console.log(obj.21)
// dot notation can be used with only those keys if they are valid identifiers or valid variable names

// universal syntax:

// console.log(obj["heelo world"])


for(let k in obj){
      console.log(k, obj[k])
}
