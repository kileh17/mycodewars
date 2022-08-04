let x = '8 j 8   mBliB8g  imjB8B8  jl  B'
let strArr = x.split("")
let cleanArr = []
for(let i = 0; i < strArr.length; i++){
    if(strArr[i] !== " "){
        cleanArr.push(strArr[i])
    }
}
let answer = cleanArr.join("")
console.log(answer)

// Simple, remove the spaces from the string, then return the resultant string.

// FUNDAMENTALSSTRINGSARRAYS