// Duplicate Encoder
// My Solution
function duplicateEncode(word){
  let newArr = [];
  let lowerCaseWord = word.toLowerCase();
  for(let i = 0; i < lowerCaseWord.length; i++) {
    // Logic to check if the character occur twice in the string or not
    if(lowerCaseWord.indexOf(lowerCaseWord[i]) !== lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
      newArr.push(")")
    } else {
      newArr.push("(")
    }
  }
  return newArr.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

/* Tests
describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
}); */


