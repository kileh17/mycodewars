let str = 'sauce'
let strArr = str.split('')
let answer =  strArr.splice(1, ( strArr.length - 2 ))
let answerStr = answer.join('')
console.log(answer)

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

