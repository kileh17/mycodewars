let s = ["take","bitcoin", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
sort = s.sort()
let word = sort[0]
let starWord = []
console.log(sort)

for(let i = 0; i < word.length; i++){
    if(word[i] != word[word.length - 1]){
        starWord[i] = word[i] + "***"
    }else{
        starWord.push(word[word.length - 1])
    } 
}

console.log(starWord.join(""))

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// FUNDAMENTALSSTRINGSARRAYS