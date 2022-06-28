let s = "sauce"
let strArr = s.toUpperCase().split("")

//loop going through original array
for(let i = 0;i < strArr.length;i++){
    let current = strArr[i]
    // loop for producing letters
    for(let z = 0;z < i;z++){
        strArr[i] += current.toLowerCase()
}
}
console.log(strArr.toString().replace(/,/g,'-'))
// loop for producing letters
// for(let z = 0;z < i;z++){
//     strArr[0] += strArr[0].toLowerCase()
// }



// // This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"