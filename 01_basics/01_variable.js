let a = "hello";
const c = "unchanged";
var v = 5;
/*
prefer not to use var 
because of issue of block scope and functional scope.
*/

console.table([a,c,v]);
console.log(a);