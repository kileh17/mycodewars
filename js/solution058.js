let arr = [1,2,3,4,5]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[(arr.length - 1) - i]
    
}

console.log(newArr)
// Write reverseList function that simply reverses lists.

// FUNDAMENTALSLISTS