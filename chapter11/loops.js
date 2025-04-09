// You can say that an iterable object abstracts away the index values of
//  a list and helps you focus on solving the problem

// Array is an iterable. Object is not (objects are enumerable).

// An iterable type guarantees the order of items in the set. This is why arrays have
//  an index for each item. Enumerable types do not guarantee the order in which
//  properties will appear when iterated

// increamenting and reducing 

let miles = [5, 12, 75, 2, 5];


let A = 0;

for(let i = 0; i < 5; i++) {
    A += miles[i];
}

console.log(A); // 99

// a reducer function of the same above effect

const R = (accumulator, value) => accumulator + value;
const result = miles.reduce(R);
console.log(result); // 99

// generating HTML Element Dynamically

// for (let i =0; i < 10; i++) {
//     let element = document.createElement("div");

//     element.innerHTML = "element" + i;
//     document.appendChild(element);
// }

// infinite loop
/**
 for(;;)
     console.log('hi');
 */

//  multiple statement

// bodyless for loop
/*
let counter = 0;

function inc() { counter ++}
for (let i=0; i < 10; i++, inc());
console.log(counter);  // 10
*/

// incrementing Numbers

let counter =0;

for(let i=0; i < 10; i++) {
    counter++
}

console.log(counter);

// for loops and let scope

// bracket less for loop does not allow varialbe declaration using let
// following code will generate an error
// for(var i=0; i< 10; i++) let x =1; 

// correct way to daclare a variable using bracket for loop

for(var i =0;i < 10; i++) {
    let x = i;
}

// nested for loops

for (let y =0; y< 2; y++) {
    for (let x=0; x < 2; x++) {
        console.log(x, y);
    }
}

for (let i=0; i< 3; i++) {
    let loop = "loop."
    console.log(loop);
}

// skipping steps

for (let i=0; i<3; i++) {
    if(i == 1) 
        continue;
    console.log(i);
}

// Breaking Early
for (let i=0;; i++) {
    console.log("loop");
    if(i == 10) break;
}

// breaking to label

let c = 0;
mark: for (let i=0; i< 5; i++) {
    inner: for (let j=0; j< 5; j++) {
        c++;
        if(i == 2)
            break inner;
    }
}
console.log(c); // 21

// breaking from a labeled block scope

block: {
    console.log("before");
    break block;
    console.log("after");
}

// for...of and generator function

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let value of generator()) 
    console.log(value);

// above for loop is equivalent to below code

let gen = generator();

console.log("first one", gen.next().value);
console.log("second one" ,gen.next().value);
console.log("third one", gen.next().value);
console.log("fourth try", gen.next().value);

// Generators are one-time use functions. You should not attempt to reuse a generator 
// function more than once as if it were a regular function (after the last yield
//  statement has been executed.)

// for...of and string

// arrays are iterables
// strings are iterables
let string = 'text';

for(let value of string) 
    console.log(value);

let array = [0, 1, 2];

for (let value of array)
    console.log(value)

// for...of and object

// let object = { a: 1, b: 2, c: 3};

// for (let value of object) // TypeError: object is not iterable
//     console.log(value)


// for...of and objects converted to iterables
let enumerable = { property: 1, method: () => {} };

for (let key of Object.keys(enumerable)) {
    console.log(key)
}

for (let value of Object.values(enumerable)) 
    console.log(value);

for (let entry of Object.entries(enumerable)){
    console.log(entry)
}

// for...in loops

let object = {
    a: 1,
    b: 2,
    c: 3,
    method: () => { }
}

for (let value in object) 
    console.log(value, object[value]);
