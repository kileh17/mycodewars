
const arr = [40, 100, 1, 5, 25, 10];
let newArr = [];
let finalSum = [];
function sumOfDifferences(arr){
    const xSort = arr.sort(function(a,b){return b-a});
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        newArr[i] = (xSort[i] - xSort[i+1])
    }
    newArr.pop()
    finalSum = newArr.reduce(function(a,b){
        return a + b
    },0);
    return finalSum
};


// for(let i = 0; i < arr.length; i++){
//     newArr[i] = (xSort[i] - xSort[i+1])
// }
// newArr.pop()
// console.log(newArr)

// function sumOfDifferences(arr){
//     const xSort = arr.Sort();

    
//   };