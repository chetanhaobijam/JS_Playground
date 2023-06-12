// My Algorithm
const rotate = str => {
    let splitStr = str.split("");
    let newArr = [];
    if(str.length === 0) {
        return [];
    } else {
        for(let i = 0; i < splitStr.length; i++) {
            newArr.push([splitStr[i], splitStr.slice(i + 1), splitStr.slice(0, i)]);
        }
        let flatArr = newArr.map(item => {
            return item.flat().join("");
        });
        let lastItem = flatArr.shift();
        flatArr.push(lastItem);
        return flatArr;
    }
}

// Best Algorithm
const bestRotate = s => {
    return s.split("").map(e=>s = s.slice(1)+s.slice(0,1));
}


console.log(rotate("Hello"));
console.log(bestRotate("Stardew valley"));
console.log(rotate('').length);