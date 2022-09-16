let input = [1, 2, 3, 4]
let arr = []
for (let i = 0; i < input.length; i++) {
    arr[i] = input[(input.length - 1) - i]
    
}
console.log(arr)
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.