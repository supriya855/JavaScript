//Objects can be declared via literals, constructers
//Object Literal
const mySign = Symbol("myKey");
const JsUser = {
    name:"Supriya",
    age:21,
    mySign:"myKey1",
    [mySign]:"MyKeys1",
    "full_name":"rudroju supriya",
    isLoggedin:false,
    email:"supriya1782@gmail.com",
    employeeid:1244879,
    gender:"female",
    lastLoggedDay:["Monday","Tuesday"]
}
console.log(JsUser.email);
// console.log(JsUser[email]); we can't do like this
console.log(JsUser["email"]);
console.log(JsUser.full_name);
console.log(JsUser["full_name"])
console.log(JsUser.mySign);
console.log(JsUser[mySign]);
// normal declararion but using[mySign] : "MyKeys1" same ans it will print but the differnece is the correct declaration
JsUser.email="supriya@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="supriya@google.com";
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello i'm printing hello world");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting);// this results [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
