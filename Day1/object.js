// object creation
var person = { 
    name: 'Sujit',
    age: 21
};
console.log(typeof(person)); 

var person = { name: 'Sujit', age: 22 }; //object creation

console.log(person.name);

console.log(person["name"]);

// nested object
const student = { 
    name: 'Sujit', 
    age: 22,
    marks: {
        science: 80,
        math: 90
    }
}

// accessing property of student object
console.log(student.marks); 

// accessing property of marks object
console.log(student.marks.science);

var person = {
    name: 'Yash',
    age: 22,
    // using function as a value
    greetHi: () => { console.log('hi') },
    // using function as a value
    greetHello: () => { console.log('hello') }
}

person.greetHi(); 
person.greetHello();
