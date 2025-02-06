const A = {
    property : 1,
    method: function() {return 2}
}

// A = {something: 1}; // TypeError: Assignment to constant variable.
A.property = 2; // No error
A.method = () => {return 3} // No Error

console.log(A)