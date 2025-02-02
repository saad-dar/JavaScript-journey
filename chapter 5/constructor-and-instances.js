let Pancake = function() {
    this.number = 0

    this.bake = function() {
        console.log("baking the pancake...");
        this.number++;
    }
}

let pancake = new Pancake();

pancake.bake();
pancake.bake();
pancake.bake();

console.log(pancake.number); // 3

console.log(Pancake.constructor)

// Function build-in constructor

let body = "console.log('Hello from F() function!')"

let f = new Function(body);

f(); // Hello form F() function!