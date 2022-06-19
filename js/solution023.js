let arr = [1,-2,3,4,5]

let filtArr = arr.filter( x => x >= 0)
let sumArr = filtArr.reduce((p,c) => p + c, 0)
// RETURN THE SUM OF THE ARRAY TAKING OUT ALL THE NEGATIVE NUMBERS