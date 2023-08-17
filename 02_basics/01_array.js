//array
const myArr = [0,1,2,3,4];
const myHeros = ["Thor","Spidermain","Batman"];

const myArr2 = new Array(1,2,3,4);

//console.log(myArr[3]);

// array methods
// myArr.push(5); to add element at the end.
//myArr.unshift(9); to add the element from the starting.
//myArr.shift(); to remove the element from the beginning.
//myArr.includes(4); to check wether the given element is present or not, it returns true or false value.
//myArr.indexOf(4); it returns the index at which the given element is present in array. 
//const newArr = myArr.join();
//arr.slice(1,3); it display the start point with includes and end point with excludes. without
// modifying the original array.
//arr.splice(1,3); it display the start and end point with includes. with modifying the original array. 

console.log(myArr.slice(1,3));
console.log(myArr);
console.log(myArr.splice(1,3));
console.log(myArr);
//console.log(myArr.unshift(7,9,5,1));
//console.log(myArr);
//console.log(myArr.shift(5));
//console.log(myArr.shift());
//console.log(myArr);

//console.log(myArr.includes(3));
//console.log(myArr);
