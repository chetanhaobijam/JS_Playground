const toCamelCase = str => {
    if(str.length < 1) {
        return '';
    } else {
        let [camelStr, ...restArr] = str.split(/[-_]/);
        let newArr = [];
        restArr.forEach(item => {
            item = item[0].toUpperCase() + item.slice(1);
            return newArr.push(item);
        })
        return camelStr.concat(newArr.join(''));
    }
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase(''));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));