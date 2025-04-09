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

