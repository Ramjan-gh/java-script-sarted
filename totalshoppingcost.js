let shoppingItems = [
  { name: "Shirt", price: 1200 },
  { name: "Jeans", price: 2500 },
  { name: "Shoes", price: 3000 },
  { name: "Watch", price: 5000 },
  { name: "Bag", price: 2200 },
];
let total = 0;
for (item of shoppingItems){
    total = total + item.price;
}

console.log(total);