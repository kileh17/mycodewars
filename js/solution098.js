let arr = [5,4,3,2,1]
function min(arr,toReturn){
    let smallest = arr[0]
    //find the smallest element and store in smallest
    arr.forEach(element => {
        if(element < smallest){
            smallest = element
        }
    });
    let smallIndex = arr.indexOf(smallest)

    if(toReturn === 'value'){
        return smallest
    }else if(toReturn === 'index'){
        return smallIndex
    }

}




// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.