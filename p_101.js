// program to trim a string

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);

//HelloWorld

// program to trim a string

function trimString(x) {

    const result = x.replace(/\s/g,'');
    return result

}

const result = trimString('    Hello World    ');
console.log(result);

//HelloWorld
