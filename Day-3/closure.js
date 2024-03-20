// 1.	Write a factorial program of given range: 0 - 10 using closure

function fac(n){
    return function(num){
        if(num == 0 || num == 1){
           return 1;
        }
        else{
            return num*fac(n-1)(num-1);
        }
    }
}

for(let i =0; i<11;i++){
    const result = fac(i); // pass value of n
    console.log(result(i)); // pass value of num and print factorial value
}



// 2

// calculate function is take x as parameter 
// there is another function inside the calculate function called multiply which take x and y and return it s multiplication
// calulate function retun multiply function
function calculate(x){
    function multiply(y){
        return x*y;
    }
    return multiply;
}
const multiply3 = calculate(3); // here return function multiply with parent scope calulate(x= 3)
const multiply4 = calculate(4); // here return function multiply with parent scope calulate(x= 4)

console.log(multiply3); // print [Function: multiply]
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8


// 3
function outest(){
    var c = 12;
    function outer(b){
        function inner(){
            console.log(a,b,c); 
            // here first find x in inner function it is not there then it will find in its parent(outer) lexical environment 
            // x =10 then b is passed as parameter b = "Hi clousers" then c is not in outer scope then it find in parent(outest) lexical environment
            // c = 12 
            // print 10 Hi clousers 12
        }
        let a =10;
        return inner;
    }
    return outer;
}

let a =100;
var close = outest()("Hi clousers"); // here Clouser will create 
close();


// 4
function setcount(){
    let number = 0;
    return function(){
        console.log(number++);
        console.log(++number);
    };
}

const counter = setcount();  // Here Closure is return with function scope as well as it's parent scope setcount (Function along with its lexical scope)

counter();// 0,2
counter();// 2,4
counter();// 4,6