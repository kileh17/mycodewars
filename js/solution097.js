const numbers = [1,2,3,4]
let filteredNums = numbers.filter((item) => {
    if(item !== numbers[1]){
        return item
    }
})
console.log(filteredNums)
let product = 0
for (let i = 0; i < filteredNums.length; i++) {
    product += filteredNums[i] * filteredNums[i + 1]
}
console.log(product)



// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.