const user = {
    username : "Hassan",
    price: "Rs 1999",

    welcomeMessage: function() {
console.log(`welcome to the website ${this.username}`);
console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//    let username = "Hassan"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "Hassan"
//      console.log(this);
// }

// const chai = () => {
//     let username = "Hassan"
//      console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//    return num1 + num2
// }
// console.log(addTwo(4,6));

// Implecent return.......

// const addTwo = (num1,num2) => num1 + num2

//  const addTwo = (num1,num2) => (num1 + num2)

 const addTwo = (num1,num2) => ({username: "Hassan"})

console.log(addTwo(4,6));

