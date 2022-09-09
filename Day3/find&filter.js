/*find() - returns the first element that satisfies the condition and returns undefined if not found.
filter() - returns all the elements that satisfies the condition

both accepts a callback function
*/
var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result1 = arr.find((element)=>{
    if(element>1)
        return true;
})
console.log(result1);

//filter
var result2 = arr.filter((element)=>{
    if(element>1)
        return true;
})
console.log(result2);