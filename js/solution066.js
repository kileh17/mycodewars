let str = 'world'
let newStr = []
for(let i = 0; i < str.length; i++){
    newStr[i] = str[(str.length - i) - 1]
}
console.log(newStr.join(""))
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'