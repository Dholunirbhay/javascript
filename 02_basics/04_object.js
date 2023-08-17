// const fb_user = new Object();
const fb_user = {}

fb_user.id="123abc";
fb_user.name="nirbhay";
fb_user.isloggedin=false;


//console.log(fb_user);

const regular_user = {
    email:"d04@gmail.com",
    fullname: {
        userfullname:{
            firstname:"dholu",
            lastname:"nirbhay"
        }
        
    }
        
}

//console.log(regular_user.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"a",5:"b",6:"c"};
const obj3 = {7:"a",8:"b",9:"c"};

const obj4 = {...obj1,...obj2,...obj3};
//console.log(obj4);

const course = {
    coursename:"DSA",
    instructorname:"kunal",
    fees:0
}

console.log(course);


