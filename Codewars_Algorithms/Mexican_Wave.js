// Mexican Wave Codewars Algorithm

function wave(str) {
  // Code here
  if (str.length < 1) {
    return [];
  } else {
    let splitStr = str.split("");
    let newArr = [];
    for (let i = 0; i < splitStr.length; i++) {
      if (/\S/.test(splitStr[i])) {
        let newStr = [
          splitStr.slice(0, i),
          splitStr[i].toUpperCase(),
          splitStr.slice(i + 1),
        ]
          .join("")
          .split(",")
          .join("");
        newArr.push(newStr);
      }
    }
    return newArr;
  }
}

console.log(wave(""));
console.log(wave("gap"));
console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave("two words"));
