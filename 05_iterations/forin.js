//to traverse the objects
const myObj={
    "js":"JavaScript",
    "ng":"Angular",
    "rb":"ruby",
    ".net":"ASP.NET CORE"
}
for(const key in myObj){
    console.log(`${key} shortcut for ${myObj[key]}`);
}
const promLang=["js","java","scala","swift","react"]
for(const key in promLang){
    console.log(promLang[key]);
}
//for in can't be used with map