// Asynchronous Javascript Callbacks
let stocks = {
  fruits: ["banana", "apple", "lemon", "orange"],
  liquid: ["water", "ice"],
  holders: ["cup", "stick", "cone"],
  toppings: ["chocolate", "peanuts"],
};

const order = (fruit_index, call_production) => {
  // Select Fruits
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_index]} has been selected`);

    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("Fruit has been cut");
      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`
        );
        setTimeout(() => {
          console.log("Machine has started");
          setTimeout(() => {
            console.log(`Ice Cream has been put into a ${stocks.holders[1]}`);
            setTimeout(() => {
              console.log(
                `${stocks.toppings[0]} has been selected as Ice Cream Toppings`
              );
              setTimeout(() => {
                console.log("Ice Cream Served. Bon apetit!");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

// Trigger
order(1, production);
