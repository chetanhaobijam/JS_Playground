import U, { printName as printUserName, printAge } from "./module.js";

const bobUser = new U ("Bob", 41);

console.log(bobUser);
printUserName(bobUser);
printAge(bobUser);