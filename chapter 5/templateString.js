// define a variable
let apples = 10;
// Embed a variable inside tempalte string
let msg = `There are ${apples} apples in the basket`
console.log(msg)

// creative use case of template literals

for (let alert = 0; alert < 4; alert++) {
    let one = (alert == 1)
    let is = one ? "is" : "are";
    let s = one ? "" : "s";

    let message = `There ${is} ${alert} alert${s}`
    console.log(message);
}