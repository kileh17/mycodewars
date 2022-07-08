let arr = ["Alex", "Jacob", "Mark", "Max"]
console.log(arr.length)
// loop to take us to each element
for (let i = 0; i <= arr.length; i++) {
    if( arr.length == 0 ){
        console.log('no one likes this')
    }else if(arr.length == 1){
        console.log(`${arr[0]} likes this`)
    }else if(arr.length == 2){
        console.log( `${arr[0]} and ${arr[1]} like this` )
    }else if(arr.length == 3){
        console.log( `${arr[0]}, ${arr[1]} and ${arr[2]} like this` )
    }else if(arr.length > 3){
        console.log( `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this` )
    }
    
}
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples: