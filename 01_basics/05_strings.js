const name = "Hassan"
const repoCount = "18"

// console.log(name + repoCount)

console.log(`Hey I'm ${name} and my repo count is ${repoCount}`)

const gameName = new String ('Hassan Vk 18')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(7));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-7 , 5)
console.log(anotherString);

const newStringOne = "   Hassan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hassan.com/hassan%20sheikh"

console.log(url.replace('%20', '-'));
console.log(url.includes('chico'));

console.log(gameName.split(" "));
