//Immediatly Invoked Function Defination
// why we use iife because due to global scope values sometimes it can be polluted to avoid that we are usig iife

(function chair(){
    // named iife
    console.log("chai aur code");
})();// this semicolon ends executio of iife
// ()()--> first parenthesis for function defination second one for execution

// can we convert above one into using arrow function??
(()=>{
    console.log("DB Connected")
})();
// (function chaiAurCode(){
//     console.log("DB Connected")
// })()
// will get error for two becuase for the first iife function it don't know where to stop so for that purpose we need use
// semicolon 
((name)=>{
    console.log(`DB Connected ${name}`)
})("one")