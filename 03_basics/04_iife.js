// iMMEDIATELY INVOKED FUNCTION EXPRESSIONS.....

// Named iife
(function chai(){
    console.log(`DB CONNECTED`)
})();

// unnamed iife
( () => {
console.log(`DB CONNECTED TWO`)
})();

( (name) => {
console.log(`DB CONNECTED TWO ${name}`)
})("Hassan")