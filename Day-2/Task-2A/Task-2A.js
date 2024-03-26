
// const input = [1,2,3,4,5,6];
// const result = [];

// for(let i=0;i<input.length;i++)
// {
//      result[i] = 2*input[i];
// }
// console.log(result);


// Using Map 

const input = [1,2,3,4,5,6];

const double = (x) => {
     return 2*x;
}
const output = input.map(double);

// const output = input.map(function double(x){
//      return 2*x;
// })

// const output = input.map((x) => {
//      return 2*x;
// });

console.log(output);
