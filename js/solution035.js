let str = "terrible"
let strArr = str.toLocaleUpperCase().split("")
let counter = 0

for (let i = 0; i < strArr.length; i++) {
    for(let z = i + 1; z < strArr.length; z++){
        if(strArr[i] == strArr[z]){
            counter += 1
        }
    }
    
}
if(counter > 0){
    console.log(false)
}else{console.log(true)}
// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)