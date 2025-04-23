// creating objects using function constructors
function Season(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

let winter = new Season("Winter");
console.log(winter)
console.log(winter.name, winter.getName());
let spring = new Season("Spring");
console.log(spring.name, spring.getName());
let summer = new Season("Summer");
console.log(summer.name, summer.getName());
let autumn = new Season("Autumn");
console.log(autumn.name, autumn.getName());
