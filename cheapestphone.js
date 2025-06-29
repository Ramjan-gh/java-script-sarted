function findCheapest(objects){
    let min = objects[0];
    for (object of objects){
        if (object.price < min.price){
            min = object;
        }
    }
    return min;
}

let phones = [
  { brand: "Samsung", price: 25000, camera: "48MP" },
  { brand: "Apple", price: 120000, camera: "12MP" },
  { brand: "Xiaomi", price: 18000, camera: "50MP" },
  { brand: "OnePlus", price: 35000, camera: "64MP" },
  { brand: "Realme", price: 15000, camera: "32MP" },
];

cheapest = findCheapest(phones);
console.log(cheapest);