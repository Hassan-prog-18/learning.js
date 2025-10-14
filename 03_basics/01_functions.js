
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
console.log(loginUserMessage("Chico"));
