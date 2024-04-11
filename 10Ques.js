

function mapLetters(str){
  let obj = {}
  for(let i = 0; i<str.length; i++){ 
      let t = str[i] // d, o, d, o
        if(obj[t] == undefined){
            obj[t] = [i]  // {d: [0,2], o: [1,3]}
        }
        else{
            let arr = obj[t] // [0,2]
            arr.push(i)
        }
  }

  console.log(obj)
}









mapLetters("dodo") //➞ { d: [0, 2], o: [1, 3] }
mapLetters("froggy") // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
mapLetters("grapes") // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }