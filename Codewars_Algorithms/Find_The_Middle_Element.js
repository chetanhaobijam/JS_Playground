const gimme = (triplet) => {
    let sortArr = [...triplet].sort((a, b) => a - b);
    let middleElem = sortArr[1];
    return triplet.indexOf(middleElem);
}

console.log(gimme([5, 2, 14]));