const num =[1,2,4,5,7,8,9,13,56];
// const values = num.forEach((num)=>{
//     return num;
// });
// const values = num.forEach((num)=>(num));
// console.log(values);

// const val = num.filter((num)=>(num>5));
const val = num.filter((num)=> {
    return num>4;//after arrow expression if we use braces => {} whatever we use inside this without return one it can't be access because of scope of {}
})
console.log(val)

const value = num.forEach((num) => {
    if(num>=5){
       console.log(num);
    }
})
console.log("This is just return undefined because of foreach can't return any : " + value);
//where as filter return value
const newNums=[];
num.forEach((num)=> {
if(num>4) newNums.push(num)
}
)
console.log(newNums) // this how we need to do

//let's talk about map
const mapNum = [1,2,3,4,5,6];
const newMapNum = mapNum.map((num)=> num*10);
console.log(newMapNum);
//check -1
const doubleMapCheck = mapNum.map((num) => num*10)
                        .map((n)=>(n>10))

console.log(doubleMapCheck);
//check-2
const doubleMapCheck2 = mapNum.map((num) => num*10)
                        .map((n)=>(n+1))
console.log(doubleMapCheck2);

