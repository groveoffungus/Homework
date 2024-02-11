// Pizza Place Homework

// Create array with at least four different toppings
let pizzaToppings = ["mushrooms", "black olives", "onions", "sausage", "pepperoni", "extra cheese"];

// Create greetCustomer function that prints welcome message and available toppings
function greetCustomer() {
  let availableToppings = "";
  for (let index = 0; index < pizzaToppings.length; index++) {
    availableToppings += pizzaToppings[index] + ", ";
  }

  // welcome guest and print list of available toppings
  console.log(`Welcome to The Pizza House, our toppings are: ${listToppings(pizzaToppings)}.`);
  return;
}

// Create getPizzaOrder function
function getPizzaOrder(size, crust, toppings) {
  const pizzaOrder = [size, crust, toppings];

  // if no toppings then a cheese pizza
  if (!toppings) {
    console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
    return pizzaOrder;
  }

  // if item is not included in available toppings list exit application
  for (let item of toppings) {
    if (!pizzaToppings.includes(item)) {
      console.log(`This topping is not available: ${item}. So, no pizza for you! Please order again.`);
      process.exit(0);
    }
  }

  console.log(`One ${size} ${crust} crust pizza with ${listToppings(toppings)} coming up!`);
  return pizzaOrder;
}

// Create preparePizza function
function preparePizza(totalPizza) {
  const pizza = {
    size: totalPizza[0],
    crust: totalPizza[1],
    toppings: totalPizza[2],
  }
  console.log(`...Cooking pizza...`);
  return pizza;
}

// Create servePizza function
function servePizza(pizzaObject) {
  if (!pizzaObject.toppings) {
    console.log(`Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust cheese pizza. Enjoy!`);
    return (pizzaObject);
  }
  console.log(`Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${listToppings(pizzaObject.toppings)}. Enjoy!`);
  return pizzaObject;
}

// Call each function using returned values
let customerToppings = ["mushrooms", "black olives", "sausage"];
greetCustomer();
servePizza(preparePizza(getPizzaOrder("large", "thick", customerToppings)));


//BONUS FUNCTION

function listToppings(pizzaToppings) {
  let toppingsString = "";
  if (pizzaToppings != null) {
    for (let index = 0; index < pizzaToppings.length - 1; index++) {
    toppingsString += pizzaToppings[index] + ", ";}
  toppingsString += "and " + pizzaToppings[pizzaToppings.length - 1];
  }
  return toppingsString;
}
