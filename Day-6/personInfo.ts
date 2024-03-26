// create one interface of personinfo

interface personInfo {
    firstName: string;
    lastName: string;
    age: number;
    address: {
        city: string;
        street: string;
        Pincode: number;
    };
    contact?: (string | number)[];
    getFullName(): string;
    getAddress(): string;
    getContact(): string;
}

const person: personInfo = {
    firstName: "Jenish",
    lastName: "Devmurari",
    age: 21,
    address: {
        city: "Surat",
        street: "Surat-A",
        Pincode: 395006
    },
    contact: ['jenish.devmurari@bacancy.com', 9328302016],
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    },
    getAddress(): string {
        return `${this.address.street}, ${this.address.city}, ${this.address.Pincode}`;
    },
    getContact(): string {
        return `${this.contact}`;
    }
};

console.log("FullName : ", person.getFullName());
console.log("Address : ", person.getAddress());
console.log("Contact Details : ", person.getContact());

const person1: personInfo = {
    firstName: "Karan",
    lastName: "Devmurari",
    age: 21,
    address: {
        city: "Surat",
        street: "Surat-A",
        Pincode: 395006
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getAddress() {
        return `${this.address.street}, ${this.address.city}, ${this.address.Pincode}`;
    },
    getContact() {
        return `${this.contact}`;
    }
};

console.log("FullName : ", person1.getFullName());
console.log("Address : ", person1.getAddress());
console.log("Contact Details : ", person1.getContact());
