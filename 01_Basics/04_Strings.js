const firstName ='supriya';
const  lastName = 'rudroju';
const reposCount= 10;

// console.log(firstName +reposCount+lastName);
// This is not the correct way to use string use concatenation

console.log(`Hello my name is ${firstName} I have created ${reposCount} repos.`);
// we have so many methods using strings

// we can also declare string in a different way

const myString = new String("Supriya");
console.log(myString.length);
console.log(myString[0]);
console.log(myString.toUpperCase());
console.log(myString.charAt(2));
console.log(myString.indexOf('r'));
console.log(myString.substring(0,4));
console.log(myString.slice(-6,4));

const opString= "    hello    world    ";
console.log(opString);
console.log(opString.trim());

const url= "https://supriya%20rudroju";
console.log(url.replace('%20','-'));
console.log(url.includes('rudroju'));

const stringCheck ="Hello_EveryOne_Let's_Understand_Split";
console.log(stringCheck.split('_'));

