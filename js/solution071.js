let p = 563 // this will be given
let x = p - 1
// for loop that turns x into a factorial 
let fac = 0
for(let i = (x - 1); i >= 1; i--){
    fac += (x * i)
} 
console.log(fac)

let answer = (fac + 1) / (p * p)
console.log(answer)
// should be whole number to return true
if(answer % 1 == 0){
    console.log(true)
}else{
    console.log(false)
}
// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.