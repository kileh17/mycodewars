let arr = [1, 3, 7]
let a = 3
let b = 7


let counter = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] == a && arr[i + 1] == b){
        counter += 1
    }else if(arr[i+1] == a && arr[i] == b){
        counter += 1
    }
}
if(counter >= 1){
    console.log(true)
}else{
    console.log(false)
}
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

