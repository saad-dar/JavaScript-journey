let x = { p: 1 }
let y = x;
x.p = 2;
console.log(y.p)


let a = { p : 1 }; // created new variable a
let b = a;  // b is a reference to a
let c = b;
let d = c;
let e = d;
let f = e;
let g = f;

a.p = 5;
console.log(g.p);