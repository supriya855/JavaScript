const myArr = [1,2,3,4];
const myArr1 =[1,2,3,'supriya'];
// console.log(myArr1);
const dynamicArray = new Array(1,2,3,4,'dynamicArray');
// console.log(dynamicArray);
myArr.push(5);
console.log(myArr)
myArr.pop();
console.log(myArr)
const mySlice = myArr.slice(1,3);
console.log(mySlice);
// myArr.splice(1,3)
// console.log(myArr)
console.log(myArr.includes(3));//true
console.log(myArr.indexOf(2));//1
//const checkisShift = myArr.unshift(2);// it inserts the value we provides always at the start position
// const checkisShift1 = myArr.unshift(0);
// console.log(myArr);//[ 0, 1, 2, 3, 4 ]
// console.log(checkisShift);
const checkShift = myArr.shift();// it removes the starting point of the intial one
console.log(myArr);

