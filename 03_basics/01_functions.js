
function sayMyName(){
console.log("H")
console.log("A")
console.log("S")
console.log("S")
console.log("A")
console.log("N")
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2) {
//  let result = number1 + number2 
//  return result
return number1 + number2
}
const result = addTwoNumbers(5, 6);
// console.log("Result: ", result );


// function loginUserMessage(username){
// // if(username === undefined)
// if(!username){
// console.log("Please enter a username")
// return
// }
// return `${username} just logged in`
// }
// console.log(loginUserMessage());


function loginUserMessage(username = "hassan"){
// if(username === undefined)
if(!username){
console.log("Please enter a username")
return
}
return `${username} just logged in`
}
// console.log(loginUserMessage("Chico"));

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(50,1000,150,780));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(50,1000,150,780));

const user = {
    username : "Hassan",
    price: "399"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username : "sam",
    price : "499"
})

const myNewArray = [300, 4000, 500, 2000 ]

function returnSecondValue(getArray){
return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,700, 230, 85000]));

