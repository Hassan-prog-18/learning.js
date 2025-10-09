let marvel_heros = ["Ironman", "Thor", "Spiderman"]
let dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat method
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread method
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// flat method
// const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]]
// const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hassan"));
console.log(Array.from("Hassan"));
console.log(Array.from({name: "Hassan"})); // interesting...

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


