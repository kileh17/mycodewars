let arr = [19, 5, 42, -2, 2, 77, 0.69]
let posArr = []
let nonFloat = []
let newArr = arr.sort((a,b) => a-b)
console.log(newArr)
newArr.forEach((element, i) => {
    console.log(element + " " + typeof element)
  if(element < 0){
      newArr.shift()
  }else if(typeof element === 'number' &&
  !Number.isNaN(element) &&
  !Number.isInteger(element) ){
    newArr.shift()
      
  }
  posArr = newArr
});

let answer = (posArr[0] + posArr[1]).toString()
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.