// Example 1: Using instanceof Operator
// program to check if a variable is of function type

function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);

// The variable is not of function type
// The variable is of function type

// ---

// Example 2: Using typeof Operator
// program to check if a variable is of function type

function testVariable(variable) {
      
    if(typeof variable === 'function') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);

// The variable is not of function type
// The variable is of function type

// ---

// Example 3: Using Object.prototype.toString.call() Method

// program to check if a variable is of function type

function testVariable(variable) {
      
    if(Object.prototype.toString.call(variable) == '[object Function]') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);

// The variable is not of function type
// The variable is of function type
