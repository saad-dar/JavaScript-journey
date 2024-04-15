var fruit = [
    { name: "Apple", count: 13, },
    { name: "Pear", count: 12, },
    { name: "Banana", count: 12, },
    { name: "Strawberry", count: 11, },
    { name: "Cherry", count: 11, },
    { name: "Blackberry", count: 10, },
    { name: "Pineapple", count: 10, },
]

let my_sort = (a,b) => a.count - b.count;

let sorted = fruit.sort(my_sort);
console.log(sorted);

//  array.forEach()
let fruit1= ['pear', 'banana', 'orange', 'apple', 'pineapple'];

let print = function(item, index, object) {
    console.log(item, index, object)
}

fruit1.forEach( print )

fruit1.forEach(function(item, index, object){
    console.log(item, index, object);
})

fruit1.forEach((item, index, object) => {
    console.log(item, index, object);
})

fruit1.forEach(item => console.log(item));

// array.every()

let arr = [12, 13, 45, 56];

console.log(arr.every(item => item > 10))