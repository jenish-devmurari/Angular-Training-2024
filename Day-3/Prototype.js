
// FOR ARRAY

//  Custom Method of Array  to find maximum element of an array
var arr1 = [10,80,30,40,50];

Array.prototype.max = function () {
   this.sort();
   return this[this.length-1];
}

//  Custom Method of Array  to find minimum element of an array
Array.prototype.min = function () {
    this.sort();
    return this[0];
 }

const maximum = arr1.max();
const minimun = arr1.min();

console.log("Maximum Element of an array is : ",maximum);
console.log("Minimum Element of an array is : ",minimun);




// For Object

var person = {
    firstname : "jenish",
    lastname : "Dev",
    age : 20,
    mobile : "1234567890",
    email : "jenish.dec@bacancy.com"
}




// create one method that return how many keys are into object
Object.prototype.numberOfKeys = function (){
    let count = 0;

    for(let i in this){
        if(this.hasOwnProperty(i)){
            count++;
        }
    }

    return count;
}

console.log(person.numberOfKeys());