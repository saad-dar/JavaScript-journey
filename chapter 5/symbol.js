// symbol 
/**
 // let sym = new Symbol("sym")  // Error : Symbol is not a constructor
 
 let sym = Symbol("sym")
 
 console.log(sym)
 
 console.log(Symbol("sym") === Symbol("sym"))
 * 
 */

let sym = Symbol('unique')
let bol = Symbol('distinct')
let one = Symbol('only-one')

let obj = {
    property : "regular property",
    [sym] : 1,
    [bol] : 2,
    [one] : 3,
}

console.log(obj)

for (let prop in obj) {
    console.log(prop + ': ' + obj[prop])
}

console.log(Object.entries(obj))

console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))

const seasons = {
    Winter : Symbol('Winter'),
    Spring : Symbol('Spring'),
    Summer : Symbol('Summer'),
    Autumn : Symbol('Autumn'),
}

console.log(seasons)

let sym1 = Symbol.for('age');
let bol1 = Symbol.for('age');

obj[sym1] = 20;
obj[bol1] = 25;

console.log(obj[sym1])
console.log(obj[bol1])