// Making Ice Cream with Async/Await
let stocks = {
  fruits: ["banana", "strawberry", "lemon", "orange"],
  liquid: ["water", "ice"],
  holders: ["cup", "stick", "cone"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if(is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("The shop is closed"));
    }
  })
}

async function kitchen () {
  try{
    await time(2000);
    console.log(`${stocks.fruits[1]} is selected.`);

    await time(0000);
    console.log(`Production has started.`);

    await time(1000);
    console.log(`Fruits were chopped.`);
    
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);

    await time(1000);
    console.log(`Machine has started.`);

    await time(2000);
    console.log(`Ice Cream is placed on ${stocks.holders[1]}.`);

    await time(3000);
    console.log(`${stocks.toppings[1]} is selected as toppings.`);

    await time(2000);
    console.log(`Ice Cream is served.`);
  }
  catch(error){ 
    console.log("Customer Left", error);
  }
  finally{
    console.log("Day Ended. The Shop is closed");
  }
}

kitchen();