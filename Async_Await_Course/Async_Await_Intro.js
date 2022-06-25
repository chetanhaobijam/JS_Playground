// Asynchronous Javascript Promises Chaining
let stocks = {
  fruits: ["banana", "strawberry", "lemon", "orange"],
  liquid: ["water", "ice"],
  holders: ["cup", "stick", "cone"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

async function kitchen() {
  try {
    await abc;
  } catch (error) {
    console.log(`abc does not exist`, error);
  } finally {
    console.log(`Run code anyways`);
  }
}

kitchen();
