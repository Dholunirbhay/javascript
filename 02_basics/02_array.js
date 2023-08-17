const marvel_hero = ["thor","ironman","spiderman"];
const dc_hero = ["superman","flash","batman"];

//const hero = marvel_hero +","+ dc_hero;
//const allheros = [...marvel_hero,...dc_hero];
//console.log(allheros); + and ... both merge the arrays.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//const realhero = another_array.flat(Infinity);
//console.log(realhero);
// .flat() it makes a single array from the entire nested array parts

console.log(Array.isArray("Nirbhay"));
console.log(Array.isArray("Nirbhay"));
console.log(Array.isArray({name:"Nirbhay"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
// Array.of[] is used to create the array of the given variables. 
console.log(Array.of(score1,score2,score3));


