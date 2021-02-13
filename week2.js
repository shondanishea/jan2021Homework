const pizzaPlace ="Anthony's Pizza";
let numberOfToppings = 3;

numberOfToppings = 6;

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(`"I love ${pizzaPlace}!," They have "${numberOfToppings} toppings."`);

function pizza(numberOfToppings){

if  (numberOfToppings <= 5){
  console.log("Quality, not quantity.");
}else{
  console.log("A whole lot of pizza.");
}
}
pizza(3);
pizza(6);
