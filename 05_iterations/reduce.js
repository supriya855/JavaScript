// reduce keyword

const numbers= [1,2,3];
const res = numbers.reduce(function(acc,curval) {
    return acc+curval;
},0 )
console.log(res);
// the syntax of reduce it consist of accumulator where it stores prev values

const result = numbers.reduce((acc,currnum) => (acc+currnum),0);
console.log(result);

const myStore = [
    {
        items:"Shampoo",
        price:190
    },
    {
        items:"Dates",
        price:590
    },
    {
        items:"Oil",
        price:300
    },
]

const totalPrice = myStore.reduce((acc,item) => (acc+item.price),0);
console.log(totalPrice);//1080