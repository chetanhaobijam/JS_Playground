const solution = (start, finish) => {
    if(finish >= start) {
        let difference = finish - start;
        return Math.floor(difference / 3) + (difference % 3);
    } else {
        return null;
    }
}

console.log(solution(743, 3232));
console.log(solution(1, 4));