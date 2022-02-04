// Asynchronous Javascript Promises Chaining
let stocks = {
  fruits: ["banana", "strawberry", "lemon", "orange"],
  liquid: ["water", "ice"],
  holders: ["cup", "stick", "cone"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`The shop has been closed.`));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[1]} has been selected.`))
  .then(() => {
    return order(0000, () => console.log(`Production Started.`));
  })
  .then(() => {
    return order(2000, () => console.log(`The fruits has been chopped.`));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log(`The machine has been started.`));
  })
  .then(() => {
    return order(2000, () => {
      console.log(`Ice Cream has been put into a ${stocks.holders[2]}.`);
    });
  })
  .then(() => {
    return order(3000, () =>
      console.log(
        `${stocks.toppings[0]} has been selected as Ice Cream Toppings.`
      )
    );
  })
  .then(() => {
    return order(2000, () => console.log(`Ice Cream has been Served.`));
  })
  .catch(() => {
    console.log(`Customer Left!!!`);
  })
  .finally(() => {
    console.log(`Day Ended. Our shop is closed.`);
  });
