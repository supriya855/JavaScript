// we have global scope and block scope

// const a =10;
// let b =20;
// var c =30;
// console.log(a,b,c);
var c =300;
let b =540;
if(true){
const a =10;// this scope for inside if
let b =20;//let scope also inside if
var c =30;// there is no specific scope to var
}
// console.log(a);
console.log(b);
console.log(c);//still we get 30 because that global variable be overriden
const array =[1,10,2,30,40]
for(let i=0;i<array.length;i++){
   const element = array[i];
//    console.log(element)
}
//console.log(element)
// one more thing to remeber when using node the global scope is different and in the console of inspect that is also different

function one(){
    const username ="supriya";
    function two()
    {
        const website ="google.com";
        console.log(username);// as it's like child it can access parent
    }
    //console.log(website);
    two();
}
one();

// this same case we can do for if 
if(true){
    const username ="supriya";
    if(true){
        const website ="google.com";
        console.log(username +website);
    }
    //console.log(website);// out of scope
}
//console.log(username);as this out of scope
addOne(1)// if i call this one from here before defination then this will not give any error
function addOne(num){
    return num+1;
}
// console.log(addOne(1));
// addOne(1)

addTwo(5);// if i call this one here we will get a error because we are storing a function in expression 
var addTwo = function(num){
    return num+2;
}
// console.log(addTwo(5));
// addTwo(5);

