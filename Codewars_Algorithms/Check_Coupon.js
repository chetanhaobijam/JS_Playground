function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // let cd = new Date(currentDate);
    // let ed = new Date(expirationDate);
    // return enteredCode === correctCode && cd < ed;

    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123','123','November 5, 2014','October 1, 2014'));