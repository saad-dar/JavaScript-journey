function add_one(value) { return value + 1 }

function map(array, f) {
    let copy = []; // return value placeholder array
    for (let index = 0; index < array.length; index++) {
        let original = array[index];
        let modified = f(original); // return original + 1
        copy[index] = modified; // building return value one index at a time
    }

    return copy;
}

// original array object
let array = [0, 1, 2];

console.log('before', array);

// Let's try it out
array = map(array, add_one); // [1, 2, 3]

console.log("after", array)

// now using buildin native javascript Array.map function

array = array.map(add_one); // [2,3,4]

console.log(array);