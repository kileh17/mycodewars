let a = [101, 45, 75, 105, 99, 107]
let x = 101
let counter = 0
a.forEach(element => {
    if(element == x){
        counter += 1
    }
});
if(counter > 0){
    return true
}else{
    return false
}
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

