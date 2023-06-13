function sortArray(a1, a2) {
    let newArr = [];
    for(let i = 0; i < a1.length; i++) {
        a2.forEach(item => {
            if(item[0] == a1[i][0]) {
                newArr.push(item);
            }
        })
    }
    return newArr;
}

console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'], ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']))