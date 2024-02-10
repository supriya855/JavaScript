//Let's look into what exactly a function
console.log("S");
console.log("U");
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
// If I want to print this SUPRIYA like above one 10 times then code lines will be increased
// so to avoid that we are using functions

function sayMyName(){
console.log("S");
console.log("U");
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
}
sayMyName();


// function addTwoNumber(number1,number2){ // these are paramters
//     console.log(number1+number2);
// }
addTwoNumber//this is the reference of a function

addTwoNumber();//its gives NAN because you are not passing any numbers

addTwoNumber(2,3);
//other way to use functions
function addTwoNumber(number1,number2){ // these are paramters
    let result = number1+number2;
    return result;
}
console.log("result:", addTwoNumber(2,5));// theser are arguments
console.log(`result;${addTwoNumber(3,'a')}`)
// console.log("result",addTwoNumber(2,3));
// const result = addTwoNumber(2,9);
// console.log("result:",res);

function addTwoNumber(number1,number2){ // these are paramter
    return number1+number2;
}
const res =addTwoNumber(2,3);
console.log(res);

function isLoggedIn(username="Ram"){// this is a default value if you were not passing anything it will take
    // if you pass any name it will override
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username");
            return;
    }
     
    return `${username} just logged in`;
}
console.log(isLoggedIn("supriya"))
console.log(isLoggedIn())//undefined just logged in
function shoppingCost(num1){
    return num1
}
console.log(shoppingCost(300,500));// if i pass more than one value it will take first one

// How can we handle this using spread/rest both are same only representation meaning differs where we use

function shoppingCost(...num1){
    return num1;
}
console.log(shoppingCost(100,200,400,4000));
const user ={
    name:"supriya",
    price:199
}

function handleObject(anyObject){
    console.log(`The user with  a name ${anyObject.username} and has paid this much of price ${anyObject.price}`);

}//The user with  a name undefined and has paid this much of price 199 here I used username which is not in object
// this leads to lot of checks of if's type safty is missig here
handleObject(user);

const arr =[100,200,400,500];
function returnSecondValue(arr){
    return arr[1];
}
console.log(returnSecondValue(arr));//similarly you can pass direct array here 
