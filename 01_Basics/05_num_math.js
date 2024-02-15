const score =500;
console.log(score);

const myNumber = new Number(100);
console.log(myNumber.toString());
console.log(myNumber.toString().length);
console.log(myNumber.toFixed(2));//how decimal points after number --> 100.00

const otherNumber=12.894763;
console.log(otherNumber.toPrecision(3));
const hundreads=10000000;
console.log(hundreads.toLocaleString());//It takes by default USD range
console.log(hundreads.toLocaleString('en-IN'));



