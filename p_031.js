// program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = prompt('Enter a decimal number: ');

convertToBinary(number);

// Step 1: 9/2, Remainder = 1, Quotient = 4
// Step 2: 4/2, Remainder = 0, Quotient = 2
// Step 3: 2/2, Remainder = 0, Quotient = 1
// Step 4: 1/2, Remainder = 1, Quotient = 0
// Binary: 1001
