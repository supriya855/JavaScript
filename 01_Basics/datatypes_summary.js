// The Data types categorized based how it stored in memory and how it will be access
// 1. Primitive -> We have 7 types here (it is call by value)
//Number,String,Boolean,null,undefined,symbol, BigInt
const score =100;
const scoreValue =100.04;
const isLoggedIn=1;
const istempValue= null;
let userEmail;
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id==anotherid);

const BigNumber = 764794774983980289088347;
// console.log(BigNumber);
// console.log(typeof BigNumber);
// Here give some BIG NUMBER


//2. non-primitive (call by reference)
//Arrays,Object, function
// console.log(typeof null);
const fruits = ['mango','apple','grapes','banana'];
let myObj = {
    age : 16,
    name : 'supriya'

}

const myFun = function(){
    console.log("Hello world");
}

myFun()
console.log(typeof myFun);
// type of function is object function

