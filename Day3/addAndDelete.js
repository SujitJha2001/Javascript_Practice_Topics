// PUSH - Adds elements to the end
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow","Black");

// unshift - Adds elements to the front
colors.unshift("Voilet1","Voilet2");
console.log(colors);

// pop - Removes one element from back
var last = colors.pop();
 console.log(last); 

// shift - Removes one element from front
var first = colors.shift();
console.log(first);

console.log(colors);
/*
Splice - We can both delete and add elements using splice. It returns all the deleted elements, if no element
is deleted then returns empty array and the array is modified on which it is performed. First we need to pass 
the starting index of the element then total number of elements to delete. 0 if don't want to delete any.
And the third parameter is a set of replacement elements, it is also optional.   
*/
var colors = ["Red", "Green", "Blue"];
var removed = colors.splice(0,3); // Remove the first element
 
console.log(colors); // Prints: Green,Blue
console.log(removed); // Prints: Red (one item array)
console.log(removed.length); // Prints: 1
 
removed = colors.splice(1, 0, "Pink", "Yellow"); // Insert two items at position one
console.log(colors); // Prints: Green,Pink,Yellow,Blue
console.log(removed); // Empty array
console.log(removed.length); // Prints: 0
 
removed = colors.splice(1, 1, "Purple", "Voilet"); // Insert two values, remove one
console.log(colors); //Prints: Green,Purple,Voilet,Yellow,Blue
console.log(removed); // Prints: Pink (one item array)
console.log(removed.length); // Prints: 1

