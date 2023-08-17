// Dates

let mydate = new Date();

//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);

let myCreaterDate = new Date(2023,0,23);
//let myCreaterDate = new Date(2023,0,23,5,3);
//let myCreaterDate = new Date("2023-6-23");

//console.log(myCreaterDate.toLocaleString());

let mytime = Date.now();
//console.log(mytime);
//console.log(myCreaterDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
//console.log(newdate);

//console.log(newdate.getMonth() + 1);
//console.log(newdate.getDay());
console.log(`${newdate.getDay()} and the time`);

newdate.toLocaleString('default',{weekday: "long",});

















