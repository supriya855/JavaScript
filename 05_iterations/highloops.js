//Different way to iterated over arrays or any other objects forofloop

nums=[14,74,3,6,7]
for (const num of nums) {
    console.log(num);
}
greetings="welcome"
for (const greet of greetings) {
    console.log(greet);
}
// Other ways also using MAp

const map = new Map();
map.set("IN","INDIA");
map.set("USA","United States Of America");
map.set("RU","Russia");

for(const key of map){
    console.log(key);
}

// will destrcture the map
// for (const iterator of object) {
    
// } This is the syntax of forof loop

for(const [key,value] of map){
    console.log(key,":-",value);
}
//can we iterte objects using for of ??

const myObj ={
    'game1':"candycrush",
    'game2':"templeRun"
}
for (const  [key,value] of myObj) {
    console.log(key,value);//TypeError: myObj is not iterable
}
//because to iterate the objects we have anothert type