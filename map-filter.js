const numbers = [6, 8, 3, 9, 29];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


// function square (element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);

// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);
