let str = 'xoxox'
let strArr = str.toLocaleLowerCase().split('')
let xCount = 0 
let oCount = 0
// counting loop
strArr.forEach(element => {
    if(element == 'x'){
        xCount += 1
    }else if(element == 'o'){
        oCount += 1
    }
});
// decision code
if(xCount == 0 && oCount == 0){
    console.log(true)
}else if(xCount == oCount){
    console.log(true)
}else{
    console.log(false)
}

// heck to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false