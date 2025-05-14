function Human(name) {  }

console.log(typeof Human.prototype); // object

console.log(Human.prototype.constructor); // false
console.log(Human.prototype.constructor === Human); // true