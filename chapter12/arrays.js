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

// array.flatMap() in javascript

let array = [1, 2, 3, 4, 5];
let mapResult = array.map(x => [x, x * 2]);
console.log(mapResult); // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]

// array.flatMap flatten the result of map function

let flatMap = array.flatMap(v => [v, v * 2]);
console.log(flatMap); // [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10 ]

//  String.prototype.matchAll()

let string = "Hello";
let matches = string.match("l");
console.log(matches[0]); // "l"

let regMatches = string.match(/l/);
console.log(regMatches[0]);

// /g to get the multiple matches

let ret = string.match(/l/g);
console.log(ret);

// regular expression capture group

const groupString = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;

while(match = regex.exec(groupString)) {
    let value = match[0];
    let index = match.index;
    let input = match.input;

    console.log(`${value} at ${index} with '${input}`);

    console.log(match.groups.color);
    console.log(match.groups.bird);
}

// Match all occurences of the letters: "e" or "l"
let iterator = "hello".matchAll(/[el]/g);
for (const match of iterator) {
    console.log(match)
}

// regular expression capture group using matchAll

const stringGro = 'black*raven lime*parrot white*seagull';
const regexGro = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;

for (const match of stringGro.matchAll(regexGro)) {
    let value = match[0];
    let index = match.index;
    let input = match.input;

    console.log(`${value} at ${index} with ${input}`)
    console.log(match.groups.color);
    console.log(match.groups.birds);
}

// comparing two objects

console.log([] == []) // false by value
let x = [];
console.log(x === x); // true by reference

function objcmp(a, b) {

    // Copy properties into A and B
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);

    // Return early if number of properties is not equal
    if(A.length != B.length) 
        return false;

    // Walk and compare all properties on both objects
    for(let i=0; i< A.length; i++){
        let propName = A[i];

        // properties must equal by value and type
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // object are equal
    return true;
}

let comresult = objcmp({age: 27, name: 'saadullah dar'}, {name: 'saadullah dar', age: 27})

console.log("result", comresult);

// for nested objects above function will fail

let a = { prop: [1,2], obj: {}};
let b = { prop: [1,2], obj: {}};

console.log(objcmp(a,b)); // false

// Our algorithm failed on [1,2] === [1,2] comparison. So how do we deal with
// this situation? First, we can write our own is array function. Because array is
// the only object in JavaScript with length property and at least 3 higher-order
// functions: lter, reduce and map, we can say that if these methods exist on an
// object, then it must be an array, with roughly 99% certainty:

function is_array(value) {
    return typeof value.reduce == "function" && 
            typeof value.filter == "function" &&
            typeof value.map == "function" &&
            typeof value.length == "number";
}

// Test the function

console.log(is_array(1)); // false
console.log(is_array("string")); //false
console.log(is_array({a: 1})); // false
console.log(is_array(true)); // false
console.log(is_array([])); // true
console.log(is_array([1,2,3,4,5])); // true


// writing array comparison

let arr1 = [1, 2];
let arr2 = [1, 2];
let arr3 = [5, 5];

function arrcmp(a, b) {
    // one or more values are not arrays:
    if(!(is_array(a) && is_array(b))) {
        return false;
    }

    // Not equal by length
    if(a.length != b.length) {
        return false
    }

    // compare by value
    for(let i=0; i< a.length; i++) {
        if(a[i] != b[i]){
            return false
        }
    }

    // all test passed: arrays a and b are equal
    return true;
}

console.log('array comparison:')
console.log(arrcmp(arr1, arr2)); // true
console.log(arrcmp(arr2, arr2)); // true
console.log(arrcmp(arr2, arr3)); // false

// enhace algorithm for obj cmp

function objcmpEnhance(a, b) {
    // copy properties into A and B
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);

    // Return early if humber of properties is not equal

    if (A.length != B.length) {
        return false
    }

    // walk and compare all properties on both objects

    for (let i=0; i< A.length; i++) {
        let propName = A[i];
        let p1 = a[propName];
        let p2 = b[propName];
        // property points to an array
        if(is_array(p1) && is_array(p2)) {
            if (!arrcmp(p1, p2))
                return false
        } else{
            // property ponts to an object
            if(p1.constructor === Object && p2.constructor === Object) {
                if (!objcmpEnhance(p1, p2))
                    return false;
            } else if (p1 !== p2) {
                return false
            }
        }
    }
    return true
}

let M = {
    a: 1, 
    b: 100n,
    C: {},
    d: [1,2],
    e: "abc",
    f: true,
    g: () => {}
};

let N = {
    a: 1,
    b: 100n,
    C: {},
    d: [1,2],
    e: "abc",
    f: true,
    g: () => {}
}

let O = {
    a: 1, 
    b: 100n,
    C: {},
    d: [5,7],
    e: "abc",
    f: true,
    g: () => {}
}
console.log(objcmpEnhance(M, M)); // true
console.log('hi', objcmpEnhance(M, N)); // true
console.log('hello', objcmpEnhance(M, O)); // false

let newA = { prop: [1,2], obj: {} };
let newB = { prop: [1,2], obj: {} };

console.log(objcmpEnhance(a, b)); // true

console.log(objcmpEnhance({a: [1, 2]}, {a:[1,2]})); // true
console.log(objcmpEnhance({a: [b, 1]}, {a:[b,1]})); // true
console.log(objcmpEnhance({a: [1, 2]}, {a:[1,3]})); // false
console.log(objcmpEnhance({a: [b, 1]}, {a:[b,2]})); // false