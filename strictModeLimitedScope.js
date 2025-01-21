// limited strict mode in function scope

function my_strict_function() {
    "use strict"
    function inner() {console.log("Me too.")}

    return 'I am in strict mode ' + inner();
}

my_strict_function()