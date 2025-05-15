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

let cat = {};

cat.name = "Felix";
cat.hunger = 0;
cat.energy = 1;
cat.state = "idle";

// sleep to restore the energy
cat.sleep = function(amount) {
    this.state = "sleeping";
    console.log(`${this.name} is ${this.state}.`);
    this.energy += 1;
    this.hunger += 1;
}

// wake up
cat.wakeup = function() {
    this.state = "idle";
    console.log(`${this.name} woke up`);
}

// eat until hunger is quenched
cat.eat = function(amount) {
    this.state = "eating";
    console.log(`${this.name} is ${this.state} ${amount} unit(s) of food`);
    if(this.hunger -= amount <= 0)
        this.energy += amount;
    else
        this.wakeup();
}

// wandaring depletes energy,
// if necessary, sleep for 5 hours to restore energy

cat.wander = function() {
    this.state = "wandering";
    console.log(`${this.name} is ${this.state}.`);
    if(--this.energy < 1) {
        this.sleep(5)
    } 
}

cat.sleep();

// function as a class in javascript

function Cat(name, hunger, energy, state) {
    let cat = {};

    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    cat.sleep = function (amount) {
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}.`);
        this.energy += 1;
        this.hunger += 1;
    }

    cat.wakeup = function(amount) {
        this.state = "idle";
        console.log(`${this.name} woke up`);
    }

    cat.eat = function(amount) {
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} unit(s) of food`);
        if(this.hunger -= amount <= 0)
            this.energy += amount;
        else
            this.wakeup();
    }

    cat.wander = function() {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if(--this.energy < 1) {
            this.sleep(5)
        } 
    }

    return cat;
}


let felix = Cat("Felix", 10, 5, "idle");
felix.sleep(); // "Felix is sleeping."
felix.eat(5); // "Felix is eating 5 unit(s) of food."
felix.wander(); // "Felix is wandering."

let luna = Cat("Luna", 8, 3, "idle");
luna.sleep();  // "Luna is sleeping."
luna.wander(); // "Luna is wandering."
luna.eat(1); // "Luna is eating 1 unit(s) of food."

// prototype 

const prototype = {
    sleep(amount) {
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}.`);
        this.energy += 1;
        this.hunger += 1;
    },

    wakeup(amount) {
        this.state = "idle";
        console.log(`${this.name} woke up`);
    },

    eat(amount) {
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} unit(s) of food`);
        if(this.hunger -= amount <= 0)
            this.energy += amount;
        else
            this.wakeup();
    },

    wander(amount){
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if(--this.energy < 1) {
            this.sleep(5)
        } 
    }
}

function CatPrototype(name, hunger, energy, state) {
    let cat = {};

    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    cat.sleep = prototype.sleep;
    cat.wakeup = prototype.wakeup;
    cat.eat = prototype.eat;
    cat.wander = prototype.wander;

    return cat;
}

// Creating object using Object.create

const catObject = {
    name: "Felix",
    state: "idle",
    hunger: 1,
}

const kitten = Object.create(catObject);
kitten.name = "Luna";
kitten.state = "sleeping";


// following behavior is unique to Object.create method

console.log(kitten); // {name: "Luna", state: "sleeping"} // missing 'hunger' property 

console.log(kitten.hunger); // 1 // get this value from catObject bcz catObject is parent 

// back to the future

function CatCreateObject(name, hunger, energy, state) {
    let cat = Object.create(prototype);

    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    // We no longer need them here
    // cat.sleep = prototype.sleep;
    // cat.wakeup = prototype.wakeup;
    // cat.eat = prototype.eat;
    // cat.wander = prototype.wander;

    return cat;
}

// No matter how many felixes or lunas you create, we are no longer wasting memory
// on their methods, because they are defined only once

let felix1 = CatCreateObject("Felix", 10, 5, "idle");
felix1.sleep();

let luna1 = CatCreateObject("Luna", 8, 3, "idle");
luna1.sleep();

