
// // 1.	Converts a specified number to an array of digits. 
// //  	Input - 123
// //  	Output- [1,2,3]


// // Function will take one number convert into individul element of array ['1','2','3'] and map(Number) is convert each element 
// // of array element into number
function numberToArray(number) {
    return [...String(number)].map(Number);
}

const input = 123;
const output = numberToArray(input);
console.log(output);



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 2.

var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);  // ["A","B","C","D","E"]


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// here we create one array with two element [,,] thne we spread itrate value but here only two element 
var newArray = [...[,,]];
console.log(newArray); // [ undefined, undefined ]