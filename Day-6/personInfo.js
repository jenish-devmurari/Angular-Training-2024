// create one interface of personinfo
var person = {
    firstName: "Jenish",
    lastName: "Devmurari",
    age: 21,
    address: {
        city: "Surat",
        street: "Surat-A",
        Pincode: 395006
    },
    contact: ['jenish.devmurari@bacancy.com', 9328302016],
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    getAddress: function () {
        return "".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.Pincode);
    },
    getContact: function () {
        return "".concat(this.contact);
    }
};
console.log("FullName : ", person.getFullName());
console.log("Address : ", person.getAddress());
console.log("Contact Details : ", person.getContact());
var person1 = {
    firstName: "Karan",
    lastName: "Devmurari",
    age: 21,
    address: {
        city: "Surat",
        street: "Surat-A",
        Pincode: 395006
    },
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    getAddress: function () {
        return "".concat(this.address.street, ", ").concat(this.address.city, ", ").concat(this.address.Pincode);
    },
    getContact: function () {
        return "".concat(this.contact);
    }
};
console.log("FullName : ", person1.getFullName());
console.log("Address : ", person1.getAddress());
console.log("Contact Details : ", person1.getContact());
