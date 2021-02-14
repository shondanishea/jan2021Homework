const { get } = require("http");

const pizzaToppings = ["Cheese", "Sausage", "Hamburger", "Olives","Bacon"];

function greetCustomer() {
  let greeting = 'Welcome to Anthony Pizza,our toppings are '
  for (let topping of pizzaToppings) {
greeting +=`${topping},`;

}
console.log(greeting);
};
greetCustomer();



  function getPizzaOrder(size, crust, ...toppings){
    let order = `One ${size} ${crust} crust pizza with`;
    for (let topping of pizzaToppings){
      order += `${topping},`
    }
console.log(`${order}. coming up!`);
return [size,crust, toppings];
  }
  let customerOrder = getPizzaOrder("Large","Thin","Cheese","Bacon")

getPizzaOrder("Large","Thin");

function preparePizza(orderSize, orderCrust, orderToppings){
  console.log("...Cooking Pizza....");
  return{
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
preparePizza();

let cookedPizza = preparePizza(customerOrder);

function servePizza(pizza){
  let orderReady = `Order up! here's your ${pizza.size} ${pizza.crust} crust pizza`
  for(let topping of pizzaToppings) {
    orderReady += `${topping},`;
  }
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}
servePizza(cookedPizza);
preparePizza();
