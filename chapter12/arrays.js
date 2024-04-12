var fruit = [
    { name: "Apple", count: 13, },
    { name: "Pear", count: 12, },
    { name: "Banana", count: 12, },
    { name: "Strawberry", count: 11, },
    { name: "Cherry", count: 11, },
    { name: "Blackberry", count: 10, },
    { name: "Pineapple", count: 10, },
]

let my_sort = (a,b) => a.count - b.count;

let sorted = fruit.sort(my_sort);
console.log(sorted);

//  array.forEach()
let fruit1= ['pear', 'banana', 'orange', 'apple', 'pineapple'];

let print = function(item, index, object) {
    console.log(item, index, object)
}

fruit1.forEach( print )

fruit1.forEach(function(item, index, object){
    console.log(item, index, object);
})

fruit1.forEach((item, index, object) => {
    console.log(item, index, object);
})

fruit1.forEach(item => console.log(item));

// array.every()

let arr = [12, 13, 45, 56];

console.log(arr.every(item => item > 10))

// array.every and array.some

let numbers = [0, 10, 2, 3, 4, 5, 6, 7];
let condition = value => value < 10; // value is less than 10
let some = numbers.some(condition); // true
let every = numbers.every(condition); // false

console.log(every, some)

// array.filter in javascript

let filtered = numbers.filter(condition);
console.log(filtered); // [ 0, 2, 3, 4, 5, 6, 7]
console.log(numbers); 

// array.map

let num = [0, 1, 256, 3, 4, 5, 6, 7];

let result = num.map(value => value = value + 1);

console.log(result);
console.log(num);

// array.reduce
// array.reduce is a father of array.map and array.filter 
// anything that can be done with .map and .filter, can be done with .reduce function

let count = [1,2,3,4,5].reduce((a,b) => a + b, 0)
console.log(count);

// array.flat()

let multi = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

console.log(multi.flat()); // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, [ 10, 11, 12 ] ] ]
console.log(multi.flat().flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]
console.log(multi.flat().flat().flat()); // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]
console.log(multi.flat(Infinity)); // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]