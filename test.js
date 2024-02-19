const numbers = [1,2,3,4,5,6,7,8]
const result = numbers.reduce((acc, item)=>{
    console.log(acc);
    return acc + item
},0)
console.log( "Final result=> ",result);




