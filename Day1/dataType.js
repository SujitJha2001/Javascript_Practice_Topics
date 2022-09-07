const name = 'ram';
console.log(typeof(name)); // returns "string"

const number = 4;
console.log(typeof(number)); //returns "number"

const valueChecked = true;
console.log(typeof(valueChecked)); //returns "boolean"

const a = null;
console.log(typeof(a)); // returns "object"

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(typeof(student)); // returns "object"

const undef = undefined;
console.log(typeof(undef)); // returns "undefined"

let undef2;
console.log(typeof(undef2)); // returns "undefined"

// BigInt value
const value1 = 900719925124740998n;
console.log(typeof(value1));
