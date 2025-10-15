let a = "100"
// const b = "20"
var c = "300"

if (true) {
    let a = "10"
    const b = "20"
    var c = "30"
    // console.log("INNER:",a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log("GLOBAL:",a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hassan"

function two(){
    const website = "Youtube"
    console.log(username);
}

// console.log(website);
// two()

}
// one()

if (true) {
    const username = "Hassan"
    if (username === "Hassan") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// console.log(addTwo(8)) it can make errors before declaration....
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(8))