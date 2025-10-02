// primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt 

// string
const score = 100    
// Number
const scoreValue = 100.3
// Boolean 
const isLoggedIn = false
// Null 
const outsideTemp = null
// undefined 
let useremail;
// Symbol 
const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);
// BigInt 
// const bigNumber = 35467493643865487n


// Reference (Non-primitive)

// Array, Objects, Function

// Array 
const heros = ["Supraman", "Bootaman", "Hanuman"]

// Object 
let myObj = {
name:"Hassan",
age : "17",
}

const myFunction = function(){
    console.log("Hey Daddy");  
}

console.log(typeof myFunction);



