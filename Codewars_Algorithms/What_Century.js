function whatCentury(year)
{
  // My solution
  let numString = year.toString();
  const ordinalNaming = num => {
    let numStr = num.toString();
    if(numStr[numStr.length - 1] === "1" && numStr !== "11") {
        return "st";
    } else if(numStr[numStr.length - 1] === "2" && numStr !== "12") {
        return "nd";
    } else if(numStr[numStr.length - 1] === "3" && numStr !== "13") {
        return "rd";
    } else {
        return "th";
    }
  }
  const determineCentury = str => {
    if(str.slice(str.length - 2) === "00") {
        return Number(numString.substring(numString.length - 2, 0));
    } else {
        return Number(numString.substring(numString.length - 2, 0)) + 1;
    }
  }
  return determineCentury(numString) + ordinalNaming(determineCentury(numString));
    // Best Solution
    var century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + "th";
    switch (century % 10) {
        case 1: return century + "st";
        case 2: return century + "nd";
        case 3: return century + "rd";
        default: return century + "th";
    }
  
}

console.log(whatCentury(1234));
