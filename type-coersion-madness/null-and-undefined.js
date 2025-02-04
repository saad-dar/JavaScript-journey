// let bike;
// console.log(bike);

// let bike = undefined;
// console.log(bike)

// we use null to check if the object is already initialized

let bike = null;

class Motorcycle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.features = null;
    }

    getFeatures() {
        if(this.features == null) {
            this.features = {/**get features from database */}
        } else {
            this.features = {/** get features form databases */}
        }
    }
}

// initializing new bike class
bike = new Motorcycle("Kawasaki", "Z900RS CAFE", 2019);

// Get features form database

bike.getFeatures();