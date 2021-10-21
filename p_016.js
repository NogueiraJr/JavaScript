// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

//Enter an integer: 3
//3 * 1 = 3
//3 * 2 = 6
//3 * 3 = 9
//3 * 4 = 12
//3 * 5 = 15
//3 * 6 = 18
//3 * 7 = 21
//3 * 8 = 24
//3 * 9 = 27
//3 * 10 = 30
