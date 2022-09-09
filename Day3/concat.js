/*
conact() -> Returns the new array and can take multiple arguments as array
*/
var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
 
// Creating new array by combining pets and wilds arrays
var animals = pets.concat(wilds); 
document.write(animals); // Prints: Cat,Dog,Parrot,Tiger,Wolf,Zebra

var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
var bugs = ["Ant", "Bee"];
 
// Creating new array by combining pets, wilds and bugs arrays
var animals = pets.concat(wilds, bugs); 
document.write(animals); // Prints: Cat,Dog,Parrot,Tiger,Wolf,Zebra,Ant,Bee


