let s = "bitcoin take over the world maybe who knows perhaps"

let sArr = s.split(' ')
let smallest = sArr[0]

for (let i = 0; i < sArr.length; i++) {
    if(sArr[i].length < smallest.length){
        smallest = sArr[i]
    }
}
console.log(smallest.length)
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// FUNDAMENTALS