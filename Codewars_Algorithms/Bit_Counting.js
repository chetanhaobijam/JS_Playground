// Bit Counting CA Kata
const countBits = (num) => {
    let binaryStr = num.toString(2).split("");
    return binaryStr.filter(num => {
        return num === "1";
    }).length;
}

// Best Practices
const countBitsBest = n => n.toString(2).split('0').join('').length;

console.log(countBitsBest(56));
console.log(countBitsBest(0));
console.log(countBitsBest(10));