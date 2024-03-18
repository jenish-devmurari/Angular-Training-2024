

// 1.	

// const arrValue = ['one', 'two', 'three', 'four'];
// const [ ...x, y] = arrValue; 
// console.log(x); 

// this code gives error that rest element are must be last element 

// correct code 
// const arrValue = ['one', 'two', 'three', 'four'];
// const [x, ...y] = arrValue;
// console.log(x); 
// console.log(y); 


// 2.	

// const arrValue = ["one", ["two", "three"]];
// const [x, [y, z]] = arrValue;
// console.log(x); // one
// console.log([y,z]); // ["two", "three"]
// console.log(z); // three


// 3.
// let arrValue = [10];
// let [x = 5,  y = 7] = arrValue; // defalt value x and y here arrvalue is replace first value x 
// console.log(x); // 10
// console.log(y); // 7

// let arrValue = [10,20,30,40];
// let [x = 5,  y = 7,...z] = arrValue; // defalt value x and y here arrvalue is replace first value x 
// console.log(x); // 10
// console.log(y); // 7
// console.log(z); // [ 30, 40 ]


// 4.	
// const [a, b, ...[ length ]] = [1, 2, 3];
// console.log(a, b, length); // 1,2,3

// 5.
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // here a = 1,b=2, and object{3} it will print length of object  = 1 output = 1,2,1

// const [a, b, ...{ length }] = [1, 2, 3,4];
// console.log(a, b, length); // output = 1,2,2
