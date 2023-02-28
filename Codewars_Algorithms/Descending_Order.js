/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){
    let splitNum = n.toString().split("");
    for(let i = 0; i <= splitNum.length; i++) {
      splitNum.sort((a, b) => {
        return b - a;
      })
    }
    return Number(splitNum.join(""));
    //...
  }
  
  const bestDescendingOrder = n => {
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
  
  console.log(bestDescendingOrder(42145));
  console.log(bestDescendingOrder(123456789));