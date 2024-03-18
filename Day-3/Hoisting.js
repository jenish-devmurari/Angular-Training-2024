
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Hoisting Task 1
// 1.	List down techniques with examples where hoisting does not work as expected in JS.



// ReferenceError: Cannot access 'x' before initialization
// ReferenceError: Cannot access 'y' before initialization
// Because Let and Const are Non-Hoisting variable

console.log(x);
console.log(y);
let x = 3;
const y = 3;


//  TypeError: myfunction is not a function
//  here below code where var myfunction declration is hoisting into top but assignment of function is not hoisted
//  so basically declartion will be host into top of the scope not assignment 

myfunction();
var myfunction = function greet() {
   console.log("Hello");
}




greet(); // print welcome  and Hello 
greet1(); // give the error ReferenceError: greet1 is not defined because greet1() scope is with in greet function can not access
function greet(){
    greet1(); // print Welcome greet1() is host to the top of scope
    console.log("Hello");
    function greet1(){
        console.log("Welcome");
    };
};



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Hoisting Task 2
// var a = 4;

// function greet(){
//     // into function scope var b; is host into top of the greet function scope
//     // and then we assign b = hello
//     // var b;

//     b = "hello";
//     console.log(b); // print hello;
//     var b;
// }

// greet(); // greet function execute and print hello

// console.log(b); 

// // this give the error (ReferenceError: b is not defined) because b is not define and var b; can be access within function scope where var has global or block scope 
// // here var b has block scope with in the function greet
               