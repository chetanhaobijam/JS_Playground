// Simple Pig Latin
function pigIt(str){
  let splitStr = str.split(" ");
  let arr = [];
  for(let item of splitStr) {
    if(/[a-z0-9]/gi.test(item)) {
      if(item.length < 3) {
        arr.push(item.split("").reverse().join("") + "ay")
      } else {
        arr.push(item.substring(1) + item.substring(0, 1) + "ay");
      }
    } else {
      arr.push(item);
    }
  }
  return arr.join(" ");
  //Code here
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string !'));
console.log(pigIt('O tempora o mores !'));

// Tests
/* describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
}); */