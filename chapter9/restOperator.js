let f = (...items) => items.map(item => console.log(item));

f(1, 2, 3, 6,4 ,5)

// shorthand of above code

let print = item => console.log(item)

let modifiedF = (...items) => items.map(print)

modifiedF(4 ,5 ,6, 7, 8)

// arrow function to further shorthand the syntax

let arrowF = (...i) => i.map(v => console.log(v))

arrowF(7,8,9)

// rest operator

function sumOfTwo(a, b) { return a + b; }

console.log(sumOfTwo(1, 2))
// using rest operator

function sumOfMany(...args) {
    console.log("args", args)
}

sumOfMany(1, 2, 3)

// ...rest must be either the only arguments token, or the last one on 
// the list. It cannot be the rst argument of many

// function sum(...args, b, c) // error 

// function sum(a, ... args, c) {} // SyntaxError: Rest parameter must be last formal parameter

function sumWithRest(a, b, ...args) {
    console.log(a, b, args)
} // correct

sumWithRest([1, 2, 3]); // [ 1, 2, 3 ] undefined []

sumWithRest(...[1,2,3]) // 1 2 [3]

//  But ...rest and ...spread can sometimes overlap

// here ...args is rest
function printRestSpread(a, ...args) {
    console.log(a);
    console.log(args)
}

printRestSpread(...[1,2,3], 4, 5); // here it is ...spread

// a = 1
// args = [2, 3, 4, 5]

// spreading an array of 3 items into the first 3 parameters:

function print2(a, b, c, ...args) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}

print2(...[1, 2, 3], 4, 5)
// a = 1
// b = 2
// c = 3
// args = [4, 5]

// creatig a sum function with ...rest auguments

function sumRest(...arguments) { // ...rest produces an array which makes it iterable
    let sum = 0;
    for (let arg of arguments) {
        sum += arg
    }
    return sum;
}

console.log(sumRest(1, 2, 5)); // 8

function sumReduce(...args) {
    return args.reduce((x, v) => x + v, 0); // initial value 0 and v carries the previous value
}

console.log(sumReduce(1, 2, 3, 4, 5)); // 15

// ...rest parameter work in arror functions and we can further shorten the function 

let sumReduceArrow = (...a) => a.reduce((x, v) => x + v, 0);
sumReduceArrow(100, 200, 400); // 700