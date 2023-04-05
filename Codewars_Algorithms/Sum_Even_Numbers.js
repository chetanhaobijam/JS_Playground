function sumEvenNumbers(input) {
    return input.filter(num => {
        return num % 2 === 0;
    }).reduce((acc, num) => {
        return acc + num;
    }, 0)
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArray2 = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8];

console.log(sumEvenNumbers(myArray));
console.log(sumEvenNumbers(myArray2));
