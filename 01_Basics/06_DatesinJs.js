//Dates
let myDate = new Date();// we are creating an object here and myDate is an instance
console.log(myDate);//2024-02-04T12:23:24.511Z
console.log(myDate.toString());//Sun Feb 04 2024 12:23:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sun Feb 04 2024
console.log(myDate.toISOString());//2024-02-04T12:23:24.511Z
console.log(myDate.toJSON());//2024-02-04T12:25:54.894Z
console.log(myDate.toLocaleDateString());//2/4/2024
console.log(myDate.toLocaleTimeString());//12:25:54 PM
console.log(myDate.toTimeString());//12:25:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Sun, 04 Feb 2024 12:25:54 GMT

let myCreatedDate = new Date(2024,0,1);// here by this you can understand that month are starts with 0 --> january
console.log(myCreatedDate);//2024-01-01T00:00:00.000Z
let myCreatedDateIs = new Date(2024,0,2,5,30);
console.log(myCreatedDateIs.toLocaleString());//1/2/2024, 5:30:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1707545536443
console.log(myCreatedDate.getTime());//1704067200000
console.log(Math.floor(Date.now()/1000));//1707545536

let newMyTime = new Date(2024,2,14);
console.log(newMyTime.getDay());//4
console.log(newMyTime.getMonth());//2
newMyTime.toLocaleString('default', {'weekday':"long"});
console.log(newMyTime);//2024-03-14T00:00:00.000Z
