arr1 = [5,7,9,12,15]
arr2 = [5,7,9,12,15]
function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((x,y) => x + y,0)
    let sum2 = arr2.reduce((x,y) => x + y,0)
    return sum1 + sum2
    
  };
 
//   PROMPT
//   I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.