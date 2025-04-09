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

