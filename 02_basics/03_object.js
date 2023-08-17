//singleton  
// Object.create

//object literals

const mySym = Symbol("key1");


const JsUser = {
    name:"Nirbhay",
    "fullname":"Dholu Nirbhay",
    [mySym]:"mykey1",
    age:21,
    location:"USA",
    email:"dholunirbhay04@gmail.com",
    isloggedin:false,
    lastloggedin:["Monday","Saturday"]
}

//console.log(JsUser.name);
//console.log(JsUser["name"]); this is good way to access the variable from an object.
//console.log(JsUser[mySym]);


//JsUser.email = "dnchatgpt04@gmail.com";
//Object.freeze(JsUser); it freezes means once it freeze later it ain't be change.

//JsUser.email = "dnirbhay@gmail.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hi hello everyone..");
}

JsUser.greeting2 = function(){
    console.log(`hello ${this.fullname}....`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());






