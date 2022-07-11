let arr = [2, 10, 9, 3]
let counter = 0
for(let i = 0; i < arr.length;i++){
    if(arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)){
        counter += 1
    }
}
if(counter == arr.length && arr.length != 0){
    console.log(true)
}else{
    console.log(false)
}

// DIDNT WORK
// let boolArr = []
// // for loop to go through each element
// for(let i = 0; i < arr.length; i++){
//     // for loop to check each element against others
//     for(let z = 0; z < arr.length; z++){
//         if(arr[i] == arr[z] + 1 || arr[0] == arr[z] - 1 ){
//             boolArr[i] = true
//         }else{
//             boolArr[i] = false
//         }
//     }
// }
// //testing boolArr
// let counter = 0
// boolArr.forEach(element => {
//     if(element == true){
//         counter += 1
//     }
// });
// if(counter == arr.length){
//     console.log(true)
// }else{
//     console.log(false)
// }



// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

