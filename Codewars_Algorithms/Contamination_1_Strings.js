const contamination = (text, char) => {
    if(text.length === 0) {
        return "";
    } else {
        let arr = [];
        for(let i = 0; i < text.length; i++) {
            arr.push(char);
        }
        return arr.join("");
    }
}

console.log(contamination("abc", "z"));
console.log(contamination("abc", ""));
console.log(contamination("", "z"));