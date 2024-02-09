// const languges=["Java","C#","C","Python"];
// const frameworks=["SpringBoot","DotNet","Angular","React"];
// languges.push(frameworks);
// // console.log(languges);
// // console.log(languges[4][1]);//it results DotNet
// const langFrame = languges.concat(frameworks);
// console.log(langFrame);

const movies=["Hanuman","SitaRam","JaiRam"];
const heros=["Teja","Prabhas","MeHu"];
// movies.push(heros);
// console.log(movies);//[ 'Hanuman', 'SitaRam', 'JaiRam', [ 'Teja', 'Prabhas', 'MeHu' ] ]
const movieHeros=movies.concat(heros);//concat return new array without modifying the existing array
console.log(movieHeros);//[ 'Hanuman', 'SitaRam', 'JaiRam', 'Teja', 'Prabhas', 'MeHu' ]
const all_heros = [...movies,...heros];// this spread operator (...) this is preferred over concatenation because we can spread how many array we want
console.log(all_heros);

const numberArray = [1,2,3,4,[5,6,7],9,[1,0,[8,0,8,[8,6]]]] // array pe array depth 1 like ....
const realArray = numberArray.flat(2);// here we ca give upto which depth we want
const infArrayDepth = numberArray.flat(Infinity);//we can give infinity such that depths will be spread like in a single array all elements
console.log(infArrayDepth);/*[
    1, 2, 3, 4, 5, 6,
    7, 9, 1, 0, 8, 0,
    8, 8, 6
  ]*/
console.log(realArray);//[ 1, 2, 3, 4, 5, 6, 7, 9, 1, 0, 8, 0, 8, [ 8, 6 ] ]

console.log(Array.isArray('Supriya'));
console.log(Array.from("Supri"));
console.log(Array.from({name:"Supriya"}));// here it will not understand which one should I convert either key or value
// so it results  an empty array []

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



