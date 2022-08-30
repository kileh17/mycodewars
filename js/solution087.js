let x = '45385593107843568'
let array = x.split('')
let binary = []
for(let i = 0; i < array.length;i++){
    if(array[i] >= 5){
        binary[i] = 1
    }else{
        binary[i] = 0
    }
}
console.log(binary.join(''))
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// FUNDAMENTALSSTRINGSARRAYS