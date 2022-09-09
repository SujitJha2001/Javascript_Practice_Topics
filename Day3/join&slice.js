/* 
Join method is used to create a String from an Array. 
Returns a String
This method takes an optional parameter which is a separator string that is added in between each element. 
If you omit the separator, then JavaScript will use comma (,) by default.
*/
var colors = ["Red", "Green", "Blue"];
 
console.log(colors.join()); // Prints: Red,Green,Blue
console.log(colors.join("")); // Prints: RedGreenBlue
console.log(colors.join("-")); // Prints: Red-Green-Blue
console.log(colors.join(", ")); // Prints: Red, Green, Blue

//SLICE - Does not modify array and returns a Portion of an Array
console.log(colors.slice(0,2));
console.log(colors.slice(0));
console.log(colors.slice(0,-1));