// const tinderuser = new Object() //Singleton

const tinderuser = {} // non-singleton

tinderuser.id = "123abc",
tinderuser.name = "Guzman",
tinderuser.isLoggedIn = false

// console.log(tinderuser)

const regularUser = {
    email: "hassan@gmail.com",
    fullname:{
        userFullName: {
            firstName: "M.Hassan",
            lastName: "Ashraf"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign ({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: "1",
        email: "hassan@gmail.com",
    },
    {
        id: "1",
        email: "hassan@gmail.com",
    },
    {
        id: "1",
        email: "hassan@gmail.com",
    },
     {
        id: "1",
        email: "hassan@gmail.com",
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('isLogged'));






