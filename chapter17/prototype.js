function Human(name) {  }

console.log(typeof Human.prototype); // object

console.log(Human.prototype.constructor); // false
console.log(Human.prototype.constructor === Human); // true

// you can also access the prototype of a function using the __proto__ property

let human = new Human("saad");

console.log(human);

let literal = {
    prop: 123,
    meth: function() {}
}

console.log(literal.__proto__)
console.log(literal.__proto__.constructor)
console.log(literal.constructor)

