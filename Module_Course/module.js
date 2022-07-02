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

const h1 = document.querySelector("h1");

export function changeh1() {
  h1.addEventListener("click", () => {
    h1.style.background = "pink";
  })
}