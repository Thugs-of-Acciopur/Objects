
// let obj = {
//     a: "apple",
//     b: "banana",
//     c: ["cat", "cherry"],
//     d: {
//         "d1": "dog",
//         "d2": "donkey"
//        }
// }

// // let t = obj["c"]
// // let t1 = t[1]
// // console.log(t1[0])

// // console.log(obj.c[1][0])



// console.log(obj.d.d1)

// console.log(obj["d"]["d1"])


let obj = {
    "success": true,
    "message": "User logged in successfully",
    "data": {
        "_id": "64b815172c81b3cd11a5c5cd",
        "name": "Abhishek",
        "email": "theabhishek.srm@gmail.com",
        "password": "$2b$10$tyWBw2nw0Z1.BPKh3VPML.CyNT72cziyH61U3B2rWJ4uLyt3BicFa",
        "createdAt": "2023-07-19T16:53:43.488Z",
        "updatedAt": "2024-04-11T15:53:06.006Z",
        "__v": 0,
        "token": "3e434662-fe7f-424a-9347-e007a298c600"
    }
}

console.log(obj.data.password)