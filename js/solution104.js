class Animal{
    constructor(type,name) {
        this.type = type;
        this.animalName = name;

        
    }
    

    toString(){
        return `${this.animalName} is a ${this.type}` 
    }
}

let dolphin = new Animal('dolphin', 'Susan');

console.log(dolphin)
console.log(dolphin.toString())

// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be: