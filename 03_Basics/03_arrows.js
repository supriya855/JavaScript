//Let's talk about this keyword
//this can be used in the objects to access the current context

const users={
    name: "supriya",
    age:21,
    welcomeMessage: function(){
        console.log(`Hey ${this.name} welcome to the course of JavaScript`);
        console.log(this);
    }
}
users.welcomeMessage();
users.name="sammy";
users.welcomeMessage();

console.log(this);// it will give empty if only print this without calling any functions 
// if we are runing this browser console then it will give window because by default we have window

//Now lets look into how this works in functions

const myThisCheck = function(){
    let name ="supriya "
    // console.log(`${this.name} purchased the chai aur code javascript course`)// it results undefined
    console.log(this);// it results predfined some objects or functions
}
myThisCheck();


const myThisCheck1 = () => {
    let name ="supriya "
    console.log(this);// it results => {}
}
myThisCheck1();

const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(1,4));
//const addTwoFun= (num1,num2) => num1+num2;
const addTwoFun= (num1,num2) => (num1+num2);

console.log(addTwoFun(5,7));
