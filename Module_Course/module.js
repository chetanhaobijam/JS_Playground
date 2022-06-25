class User {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`Mi llamo ${user.name}.`);
}

function printAge(user) {
  console.log(`Yo tengo ${user.age} años.`)
}

export default User;
export { printName, printAge };