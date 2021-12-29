// Sum All Primes
const sumAllPrimes = (num) => {
  let newArr = [];
  for (let i = 0; i <= num; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (i >= 2 && flag === 0) {
      newArr.push(i);
    }
  }
  return newArr.reduce((num, acc) => {
    return num + acc;
  }, 0);
};

console.log(sumAllPrimes(5));
