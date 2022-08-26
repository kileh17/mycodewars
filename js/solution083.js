let text = 'abc'
let char = 'z'
let textArr = text.split('')
for(let i = 0; i < textArr.length;i++){
    textArr[i] = char
}
console.log(textArr)
if(text == '' || char == ''){
    return ''
}else{
    for(let i = 0; i < textArr.length;i++){
        textArr[i] = char
    }
}
return textArr.join("")
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"
