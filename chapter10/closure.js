// In JavaScript you can define a
// function inside another function. Technically, thats what a closure is

// the function global() is defined in an already existing execution context that was
// created together with window

function global() {
    // At the time global() is involved, a new execution
    // context will be created for this function scope.
    // During declaration binding instantiation, internal
    // to JacaScript interpreter, inner() will be created
    // as a new native object with a scope that points to variable
    // enviorment of global()'s execution context

    function inner() {
        console.log("inner");
    }

    inner();    // call inner
}

global();

function sendEmail(from, sub, message) {
    let msg = `"${sub}" > "${message}" received from ${from}.`;
    let send = function() { console.log(msg); }
    send();
}

sendEmail('Jason', 'Re: subject', 'Good news.');

let print, set, increase, decrease;

function manager() {
    console.log("manager();");
    let number = 15;
    print = function() { console.log(number) }
    set = function(value) { number = value }
    increase = function() { number++ }
    decrease = function() { number-- }
}

manager();   // initialize manager
print(); // 15
for (let i =0; i< 200; i++) increase();

print(); // 215
decrease();
print();   // 214
set(755);
print(); // 755
let old_print = print;  // save a reference to print()

manager();  // initialize manager (again)
print();   // 15
old_print(); // 755

// Beautiful Closure

let get = null;

function closure() {
    this.inc = 0;

    get = () => this.inc; // getter
    
    function increase() { return this.inc++ }
    function decrease() { return this.inc-- }
    function sett(v) { 
        this.inc = v
        return this.inc 
    }
    function reset() { 
        this.inc = 0
        return this.inc 
    }

    function del() {
        delete this.inc; // becomes undefined
        this.inc = null; // additionally reset it to null
        console.log("this.inc deleted");
        return this.inc;
    }

    function readd() {
        // if null or undefined
        if(!this.inc) {
            this.inc = "re-added"
        }
    }

    return [increase, decrease, sett, reset, del, readd]
}

let f = closure();

console.log(f)
let inc = f[0];
let dec = f[1];
let sett = f[2];
let res = f[3];
let del = f[4];
let add = f[5];

console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3
console.log(dec()); // 2
console.log(get()); // 2
console.log(sett(7)); // 7
console.log(get()); // 7 
console.log(res(0)); // 0
console.log(get())


// Delete property
console.log("del(0)", del(0)); // null
console.log("get()", get()); // null


// Arity : number of arguments a function takes

// Define a function with 3 parameters

function f2(a, b, c) {
}

let arity = f2.length;

console.log(arity)

// Currying 

let planets = function(a) {
    return function(b) {
        return "Favorite planets are " + a + " and " + b
    };
};

let FavoritePlanets = planets("Jupiter");

// call the curried function with different arguments

console.log(FavoritePlanets("Earth"));
console.log(FavoritePlanets("Jupiter"));
console.log(FavoritePlanets("Saturn"));

console.log(planets("Jupiter")("Mars"));

let planetsArrow = (a) => (b) => "Planets are " + a + " and " + b;

console.log(planetsArrow("Venus")("Mars"));