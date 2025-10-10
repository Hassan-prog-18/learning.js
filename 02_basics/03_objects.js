// Singleton
// Object.create

// object literals

const mySym = Symbol("myKey1")

const JsUser = {
    name: "hassan",
    "full name" : "Hassan Ashraf",
    [mySym]:"myKey1",
    age: "17",
    email: "hassan@google.com",
    location: "faisalabad",
    isLoggedIn: "false",
    lastLoginDays: ["Monday" , "Thursday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
//   JsUser.email = "hassan@chatgpt.com"
// Object.freeze(JsUser);
//   JsUser.email = "hassan@yahoo.com"
//   console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["full name"]}`);  
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
  

    
