import U, { printName as printUserName, printAge,  changeh1} from "./module.js";
const bobUser = new U ("Bob", 41);

console.log(bobUser);
printUserName(bobUser);
printAge(bobUser);

changeh1();
