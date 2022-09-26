// ex 1 | Highest value in an array
// Create a program to find the highest value in an array. 
// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

const numbers = [1, 7, -3, 9];
let max = 0;


for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("largest number: " + max);



