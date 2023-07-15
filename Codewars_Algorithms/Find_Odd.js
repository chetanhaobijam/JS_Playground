// Find the Odd Int Codewars Algorithm
const findOdd = (arr) => {
    const setArr = [...new Set(arr.map(item => {
        return item;
    }))];
    for(let i = 0; i < setArr.length; i++) {
        let filterArr = arr.filter(item => {
            return item === setArr[i];
        })
        if(filterArr.length % 2 !== 0) {
            return setArr[i];
        }
    }
}

console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
