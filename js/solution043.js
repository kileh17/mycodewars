const x = "ABC"
const abcArr = x.split('')

let total1 = 0
//storing charcodes into total
for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i)
}
//replacing 7s in total1, storing to splitTot
let splitTot = total1.toString().split("")
for (let i = 0; i < splitTot.length; i++) {
    if(splitTot[i] == 7){
        splitTot[i ]= 1
    }
}
//turning splitTot into a number: total2
let total2 = parseInt(splitTot.join(""))

//summing digits
const sumTotal1 = Array.from(String(total1), Number).reduce((a,b) => a + b,0)
const sumTotal2 = Array.from(String(total2), Number).reduce((a,b) => a + b,0)

return total1 - total2
// let total1 = []
// //storing charcodes into total
// for (let i = 0; i < x.length; i++) {
//     total1[i] =  x.charCodeAt(i)
// }
// let total1Str = total1.join("").toString()
// console.log(total1Str)
// let newString1 = ''
// //replacing 7s in total1, storing to splitTot
// for (let i = 0; i < total1Str.length; i++) {
//     if(total1Str[i] == 7){
//         newString1[i] = 1
//     }else{
//         newString1[i] = total1Str[i]
//     }
// }
// console.log(total1Str)
// //turning splitTot into a number: total2
// let total2 = parseInt(splitTot.join(""))

// //summing digits
// const sumTotal1 = Array.from(String(total1), Number).reduce((a,b) => a + b,0)
// const sumTotal2 = Array.from(String(total2), Number).reduce((a,b) => a + b,0)

// console.log(total1 - total2)

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2: