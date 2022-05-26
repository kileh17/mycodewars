class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sorted = args.sort(function (a,b){return a-b})
      let smallest = sorted[0]
      return smallest
    }
  }
  
  let myClass = new SmallestIntegerFinder();
    const args = [15,21,7,2,8,42];
    let solution = myClass.findSmallestInt(args);
    
  console.log(solution);
       
 
// PROMPT
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.