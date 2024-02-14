let score = 33;
//we can use typeof in 2 ways
 console.log(typeof score);
 console.log(typeof(score));

 //type conversion string--> number
let score1="33";
console.log("***************Let's have look string with number case : **********")
let valueNumber = Number(score1);
console.log(typeof valueNumber);
console.log(valueNumber);

// //string+number --> number

let score2="33abc";
console.log("***************Let's have look string+number+character case : **********")
console.log(typeof score2);
let valueNumber1 = Number(score2);
console.log(typeof valueNumber1);
console.log(valueNumber1);

let score3="Supriya";
console.log("***********Let's have look string case with charcaters : ***********")
console.log(typeof score3);
let valueNumber2 = Number(score3);
console.log(typeof valueNumber2);
console.log(valueNumber2);

let score4=null;
console.log("**************Let's have look null case :*************")
console.log(typeof score4);
let valueNumber3 = Number(score4);
console.log(typeof valueNumber3);
console.log(valueNumber3);

let score5= undefined;
console.log("***********Let's have look undefined case : ****************")
console.log(typeof score5);
let valueNumber4 = Number(score5);
console.log(typeof valueNumber4);
console.log(valueNumber4);

let score6= true;
console.log("***********Let's have look boolean case : ****************")
console.log(typeof score6);
let valueNumber5 = Number(score6);
console.log(typeof valueNumber5);
console.log(valueNumber5);

//  "33" --> 33
//  "33abc"--> NaN
//"supriya"--> NaN
//  true=1 and false =0
// undefined --> NaN
// null  --> 0

let isTrue =1;// here if is empty ==> it will give false;
let checkisTrue = Boolean(isTrue);
console.log(typeof checkisTrue);
console.log(checkisTrue);
// if you put any values isTrue below are results
// 1--> true
// 0 --> false
// " "--> false
// "supriya"--> true

let aNumber =33;
let stringNumber = String(aNumber);
console.log(typeof stringNumber);//string
console.log(aNumber);//33
//Operations <= ,==,>= != strict check === precedence