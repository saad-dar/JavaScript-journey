/**
class Cat {
    let property = 1; // "unexpected token" Error
    this.property = 2; // unexpected token Error
}

 */

class Cat {
    constructor() {
        let property = 1; // ok: local variables
        this.something = 2; // ok: object property
    }

    method() {
        console.log(this.property); // undefined
        console.log(this.something); // 2
    }
}

let cat = new Cat();
cat.method()