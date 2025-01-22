import { Mouse, Keyboard } from './importExport.js'
import { add, subtract, multiply, divide } from './math.js'

// initialize mouse object and access mouse position
let mouse = new Mouse();
console.log(mouse.x);
console.log(mouse.y);

// initialize keyboad class and check if shift is pressed

let keyboad = new Keyboard();
console.log(keyboad.shiftIsPressed);

// use math function from math library

console.log(add(2,3));
console.log(subtract(10,3));
console.log(multiply(2,3));
console.log(divide(6,3));