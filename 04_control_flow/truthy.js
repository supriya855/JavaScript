const num =1;
if(num)
console.log("True")
const arr=[]
if(arr)
console.log("arr is also true");
else 
console.log('arr is not true');

const isTrue =true;
if(isTrue) console.log("Yes One line"),console.log("Yes, Two line");// her in javascript in single line with we can excute for that specific condition 
// where as in other languages it is not possible

// false condition 0,-0,false,BigInt --> 0n , NaN, undefined,null,""
//true conditions, "0",'false'," ",[],{},function(){}// empty funciton
const userEmail =[];
if(userEmail.length==0)
console.log("Email exits");
else
console.log('Email does not exist');

const emptyObj ={}
if(Object.keys(emptyObj).length==0)//bject.keys(emptyObj) this returns an empty array from that we are taking length
console.log("Empty obj");
else
console.log('Not an empty obj')