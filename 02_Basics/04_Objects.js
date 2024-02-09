//using Constructer

const tinderUser1 = new Object();//this was singleton object
tinderUser1.id="934p0";
console.log(tinderUser1);
const tinderUser={};//this is not a singleton object
tinderUser.id=124;
tinderUser.name='hsdwu';
tinderUser.age=18;
console.log(tinderUser);//both are results same singleton object is the only difference

const regularUser = {
    name : "supriya",
    age:21,
    fullname :{
        firstname:"supriya",
        lastname:"rudroju",
        address:{
            city:"Hyd",
            pincode:409878
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.firstname);
console.log(regularUser.fullname.address);
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3={obj1,obj2};
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2);//{} it's optional one where all remaing values soures stored in that 
const obj5= {...obj1,...obj2};

console.log(obj5);
console.log(obj4);
//Arrays has lot of objects
const users =[
    user1={
        name:"iu",
        age:19
    },
    user2={
        name:"sduwe",
        age:10
    }
]
console.log(users[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

const course = {
    coursename:"javascript",
    price:"555",
    courseInstructor:"supriya"
}
console.log(courseInstructor);
const {courseInstructor:instructor} = course;//destructring the objects
console.log(instructor);

//*********API******************
//JSON
// {
//     "name":"supriya",
//     "city":"Hyd",
//     "favPlace":"Home"
// }