// Mumbling Codewars Algorithm Kata
function accum(s) {
  // your code
  let splitStr = s.split("");
  let newArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    let myStr = [];
    for (j = 0; j <= i; j++) {
      myStr.push(splitStr[i]);
    }
    myStr = myStr.join("");
    myStr = myStr.charAt(0).toUpperCase() + myStr.slice(1).toLowerCase();
    newArr.push(myStr);
  }
  return newArr.join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("VwhvtHtrxfE"));
console.log(accum("KurgiKmkphY"));
