// My Solution
const validateBet = (game, text) => {
    if(text.length < 1) {
        return null;
    } else {
        let textArr = text.split(/,|\s{1,}/);
        let newArr = [];
        textArr.forEach(item => {
            if(item !== "") {
                newArr.push(Number(item));
            }
        })
        if(newArr.length === game[0] && !newArr.includes(NaN)) {
            for(let i = 0; i < newArr.length; i++) {
                if(newArr[i] < 1 || newArr[i] > game[1] || newArr.indexOf(newArr[i]) !== newArr.lastIndexOf(newArr[i])) {
                    return null;
                }
            }
            return newArr.sort((a, b) => a - b);
        } else {
            return null;
        }
    }
}

console.log(validateBet([5, 90], "1 2 3 4 90",));
console.log(validateBet([5, 90], "5 , 3, 1   4,2"));
console.log(validateBet([4, 90], "7 , 26, 12   5"));
console.log(validateBet([5, 90], "20, 7 ,5"));

