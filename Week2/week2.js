// Pizza Place Homework

const { type } = require("os");

// create variables
let pizzaPlace = "The Pizza Place";
let numberOfToppings = 13;

// print variables and types
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

// print template literal using both variables
console.log(`At ${pizzaPlace}, you can choose up to ${numberOfToppings} toppings for each pizza.`);

// construct an if statement
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// BONUS: use a loop
let x = 1;
while (x <= numberOfToppings) {
  // print x only if an even number
  if(x%2 === 0){ console.log(x); }; x++;
}
