// Rot13
// My Solution
function rot13(message){
  //your code here
  let splitMessage = message.split("");
  let lowerCaseMessage = message.toLowerCase().split("");
  let newArr = [];
  for(let item of lowerCaseMessage) {
    switch(item) {
      case "a":
        newArr.push("n");
        break;
      case "b":
        newArr.push("o");
        break;
      case "c":
        newArr.push("p");
        break;
      case "d":
        newArr.push("q");
        break;
      case "e":
        newArr.push("r");
        break;
      case "f":
        newArr.push("s");
        break;
      case "g":
        newArr.push("t");
        break;
      case "h":
        newArr.push("u");
        break;
      case "i":
        newArr.push("v");
        break;
      case "j":
        newArr.push("w");
        break;
      case "k":
        newArr.push("x");
        break;
      case "l":
        newArr.push("y");
        break;
      case "m":
        newArr.push("z");
        break;
      case "n":
        newArr.push("a");
        break;
      case "o":
        newArr.push("b");
        break;
      case "p":
        newArr.push("c");
        break;
      case "q":
        newArr.push("d");
        break;
      case "r":
        newArr.push("e");
        break;
      case "s":
        newArr.push("f");
        break;
      case "t":
        newArr.push("g");
        break;
      case "u":
        newArr.push("h");
        break;
      case "v":
        newArr.push("i");
        break;
      case "w":
        newArr.push("j");
        break;
      case "x":
        newArr.push("k");
        break;
      case "y":
        newArr.push("l");
        break;
      case "z":
        newArr.push("m");
        break;
      default:
        newArr.push(item);
        break;
    }
  }
  for(let i = 0; i < splitMessage.length; i++) {
    if(splitMessage[i] === splitMessage[i].toUpperCase()) {
      newArr[i] = newArr[i].toUpperCase();
    }
  }
  return newArr.join("");
}

// Best and most clever Solution
const cleverRot13 = message => {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, c => a[b.indexOf(c)]);
}

console.log(cleverRot13("test"));
console.log(cleverRot13("Test"));
console.log(cleverRot13("Chetan !"));
