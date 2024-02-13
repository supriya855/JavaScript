// we have if expression else expresion just set the flow of excution if some condition is trrue just execute certain part of else 
//don't execute 

if(true)
console.log("Exceuted")
// else 
// console.log("Nothing got excecuted")// This is unreachable code coz everytime that if is true

temperature =41;
if(temperature==41) console.log("Temperature", temperature);
else if(temperature>41) console.log("temp",temperature);
//<,>,<=,>=,==,===,!=,!==
//Nullish coalsicing operator(??):null undefined
// this is used handle the null undefined to check from db or firebase is it returning if not else return null 
let va11;
val1 =5??10;
console.log(val1);
val1= null??15;
console.log(val1);
val1= null??1??55;
console.log(val1);
//ternary operation
//condition?true:false
 temp =50;
 temp>=50?console.log("High temp"):console.log("low temp");
