// types of datetypes are basically divided in js are:-  Primitive type and non-primitive type

// primitive type (call by value) are stored in stack memory especialy.
// 7 types :-  String , number , boolean , undefined , BigInt , Symbol , null

const bignum = 343235331331346545n;

// Non-primitive type (call by reference) are stored in heap memory especialy
// ex: - Array , object , functions

const arr = ["asd","ald","ad"];

let Obj = {
    name:"ac";
    rollno:4,
}

const my_func = function () {
    console.log("hello world!");
}
 // to check the datatype we use typeof
 console.log(typeof(bignum));
 //type of null => object , rest all has same as given about while we check.
 