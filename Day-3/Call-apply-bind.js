
const person1 = {
    firstname : "Jenish",
    lastname : "Dev",
    fullname : function fullname(prefix,sufix){
        let fn = `${this.firstname} ${this.lastname}`;
        if (prefix) {
            fn = `${prefix} ${fn}`;
        }
        if (sufix) {
            fn = `${fn} ${sufix}`;
        }
        return fn;
    }
}

const person2 = {
    firstname : "Karan",
    lastname : "Dev"
}

let result1 = person1.fullname.call(person2,'Jr'); // pass arguments individual
console.log(result1);


let result2 = person1.fullname.apply(person2,['Dr','KapilBhai']); // Pass as Array
console.log(result2);


let result3 = person1.fullname.bind(person2,'Dr'); // store as function 
console.log(result3());

