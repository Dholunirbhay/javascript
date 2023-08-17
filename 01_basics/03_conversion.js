let score ="nirbhay";
console.log(typeof score);
console.log(typeof(score)); // typeof() function is used to see the datatype of the given variable.
  
let value = Number(score); // Number function is used to convert the variable in number data type.
console.log(typeof value);
console.log(value);

// by converting in Number
// "33" => 33
// "33abc" => NaN (Not a Number)

let loggedin = "n";

let booleanisloggedin = Boolean(loggedin);
console.log(booleanisloggedin);

// by converting in boolean
//1=> true , 0 => false
//"" => false
// " nasd" => true

let somenum = 564;
console.log(typeof(somenum));
let str = String(somenum);

console.log(typeof(str));
// by converting in string
//

//********************************* Operations *************************************
let val = 3;
let negValue = -val;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

