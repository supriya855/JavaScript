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

const BigNumber = 764794774983980289088347;//948789348n// last we need to add to make it as bigInt
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


//************************************************************************************* */

// Let's Have dive to stack and heap memory
// stack memory will be used by primitive types 
// heap memory will be used by non-primitive

// stack gives a copy of its memory even though if we change the values it will reflect in the copy of the names

// where as heap it gives reference so if we change any value in original values it will reflect

console.log("**************Let's check call by value with an example***************")
let checkReference = "HeapOrStack";
let isItHeapOrStack = checkReference;
console.log("This is before modify the value")
console.log(isItHeapOrStack);
console.log(checkReference);
console.log("After modifying the value")
isItHeapOrStack="Heap";
console.log(isItHeapOrStack);
console.log(checkReference);

console.log("****************Let's check call by Refernce with an example ************")
let upi = {
    upiMail: "user@google.com",
    upiNumber:"89374734@ybl"
    
}
let checkUpi = upi;
checkUpi.upiMail = "supriya@google.com";

console.log(checkUpi);
console.log(upi);




