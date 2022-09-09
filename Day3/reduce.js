//program to determine the frequency of element and represent it in object

/*reduce() -> it returns a single value and accepts 2 arguments one is callback function and the other is
initial value
*/
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var obj = pets.reduce((previous,current)=>{
    if(previous[current]==undefined)
    {
        previous[current] = 1;
    }
    else
    {
        previous[current] = previous[current] + 1;
    }
    return previous;
},{})

console.log(obj);
/* 
if initial value is not mentioned then index 0 is assigned to previous and index 1 is assigned to current 
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/
const numbers = [175, 50, 25];

ans = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(ans);
