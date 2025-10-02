// primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt 

// const score = 100    
// const scoreValue = 100.1

// const isLoggedIn = false
// const outsideTemp = null

// let useremail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id===anotherId);

// const bigNumber = 35467493643865487n


// Reference (Non-primitive)

// Array, Objects, Function


const heros = ["Supraman", "Bootaman", "Hanuman"]

 
let myObj = {
name:"Hassan",
age : "17",
}

const myFunction = function(){
    console.log("Hey Daddy");  
}

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Hassansheikhdotcom"
let anotherName = myYoutubename
anotherName = "itsHassan11"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "google.com",
    epaisa:"8835"
}

let userTwo = userOne

userTwo.email = "hassan.google.com"

console.log(userOne.email);
console.log(userTwo.email);


