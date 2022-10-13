// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(input) {
    if (input === "Jane") {
        return "Hello, Jane!";
    } else if (input === "Alex") {
        return "Hello, Alex!"
    } else if (input === "Pat") {
        return "Hello, Pat!";
    } else if (input === "World") {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return '';
    }
}

//        *#8 refactor to be a SWITCH STATEMENT*

//  *refactored #6*
// function sayHello(input) {
//     return "Hello, " + input + "!"
// }

//             *exercise 10*

function isFive(input) {
    let nInput = parseInt(input);
    if (nInput === 5) {
        return true;
    } else {
        return false;
    }
}

//             *exercise 11*


