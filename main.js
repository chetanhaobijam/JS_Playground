// Asynchronous Javascript Promises Chaining
let stocks = {
  fruits: ["banana", "strawberry", "lemon", "orange"],
  liquid: ["water", "ice"],
  holders: ["cup", "stick", "cone"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Which topping would you love?`));
    }, 3000);
  })
}

async function kitchen() {
  console.log("First Kitchen Task");
  console.log("Second Kitchen Task");
  await toppings_choice();
  console.log("Third Kitchen Task");
  console.log("Fourth Kitchen Task");
}

kitchen();
console.log("Doing the dishes");
console.log("Cleaning the tables");
console.log("Taking other dishes");