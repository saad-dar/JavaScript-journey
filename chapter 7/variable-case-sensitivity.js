let a = 1;
let A = "hello"

console.log(a);
console.log(A);

// console.log(apple); // ReferenceError: apple is not defined

// prior to let and const the traditional model allowed only var definitions:

var apple = 1;

{
    console.log("apple", apple);
}