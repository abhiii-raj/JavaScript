let diceRoll = Math.floor(Math.random() * 6) + 1;

const car = {
    name: "Tata",
    Model: "Harrier",
    color: "Black"
}
console.log(car.name);
console.log(car["name"]);


const Person = {
    name: "Abhi",
    age: 21,
    city: "Patna"
}
console.log(Person);

Person.city = "New York";
Person.country = "United States";

console.log(Person);