// flattening arrays with ...spread

let names = ["felix", "luna"];
const cats = [...names, "daisy"];
console.log(cats) // (3) ["felix", "luna", "daisy"]

// let a = ...[1, 2, 3] // SyntaxError: Unexpected token '...'

// Destructuring assignment

// for array

var [a, b] = [10, 20];
console.log(a, b);

// it is possible to destructure into ...rest array

let [x, y, ...rest] = [30, 40, 50, 60, 70];
console.log(x, y); // 30, 40
console.log(rest); // [50, 60, 70]

// destructure from object

let { oranges } = { oranges : 1 };
console.log(oranges); // 1

let fruit_basket = {
    apples : 0,
    grapes : 1,
    mangos : 3,
}

let { grapes, mangos } = fruit_basket;

console.log(grapes); // 1
console.log( grapes + mangos ) // 4

// destructuring is not implicitly recursive, second-level objects are not scanned
let { bananas } = { apples : 1, inner: {bananas : 2} };

console.log(bananas); // undefined

// extracting from object inner properties

let deep = {
    basket: {
        fruit : {
            name : "orange",
            shape : "round",
            weight : 0.2,
        }
    }
}

let { name, shape, weight } = deep.basket.fruit

console.log(name, shape, weight); // orange rounf 0.2

// if property does not exist in the object
let { apples } = { oranges : 1 };
console.log(apples); // undefined

// destructure and rename at the same time
let { automobile : car } = { automobile : "Tesla" };
console.log(car); // "Tesla"

// merging objects with ...spread

let g = { p: 1, q: 2, m: ()=> {} };
let f = { r: 1, s: 2, n: ()=> {} };

let c = { ...g, ...f };

console.log(c)

let arr1 = [1,2];
let arr2 = [3,4];
let joinArr = [...arr1, ...arr2];
console.log(joinArr);