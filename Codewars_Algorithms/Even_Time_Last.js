// Evens times last
function evenLast(numbers) {
  // Code below
  let sumTotal = 0;
  if (numbers.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i += 2) {
      sumTotal += numbers[i];
    }
    return sumTotal * numbers[numbers.length - 1];
  }
}

console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([]));

// Tests
// evenLast([2, 3, 4, 5]) should return  30
