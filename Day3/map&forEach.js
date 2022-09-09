const numbers = [1, 2, 3, 4];

//forEach - does not return modified array can only be used for traversing the array like for,for-of,for-in
numbers.forEach((item) => {
    process.stdout.write(item * 2+" "); // [2, 4, 6, 8]
    return item*2;
});

//map - returns modified array and be used for traversing the array like for,for-of,for-in
doubled = numbers.map((item) => {
    item=item*2;
    return item;
});

console.log(doubled);
const objects =
[
    {
        name:"A",
        age:12
    },
    {
        name:"B",
        age:21
    }
]
objects.map((object)=>{
    Object.values(object).map((x)=>{
        process.stdout.write(x+" ");
    });
    console.log();
    /*object.map((item)=>{
        console.log(Object.keys(item));
    })*/
    
})