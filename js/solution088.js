let str = "yoda doesn't speak like this"
let strArr = str.split(" ")
revStr = []
for(let i = 0; i < strArr.length; i++){
    revStr[i] = strArr[(strArr.length - 1) - i]
}
console.log(revStr)

// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):