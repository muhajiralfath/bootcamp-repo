function Car(name, fuel) {
  this.name = name;
  this.fuel = fuel;
  this.run = function () {};
}

const terios = new Car("Terios", 50);
console.log(terios);

// cara menggunakan function

function Vehicle(name, fuel) {
  const car = {};
  car.name = name;
  car.fuel = fuel;
  car.sound = function () {
    return "Brem bremm";
  };
  return car;
}

const bmw = Vehicle("bmw");
console.log(bmw);

//  cara agar function tidak ikut terpanggil
const VehicleSound = {
  sound: function () {
    return "mbrem mbrem";
  },
};

function VehicleObject(name, fuel) {
  const car = Object.create(VehicleSound);
  car.name = name;
  car.fuel = fuel;
  return car;
}

const livina = VehicleObject("livina", 200);
console.log(livina);

// penggunaan Object assign dan object create
const personPrototype = {
  name: "Anonymous",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

const person1 = Object.create(personPrototype);
person1.name = "John";

const person2 = Object.create(personPrototype);
person2.name = "Alice";

console.log(person1.greet()); // Output: "Hello, my name is John"
console.log(person2.greet()); // Output: "Hello, my name is Alice"

const targetObj = { a: 1, b: 2 };
const sourceObj1 = { b: 3, c: 4 };
const sourceObj2 = { d: 5 };

const resultObj = Object.assign(targetObj, sourceObj1, sourceObj2);

console.log(resultObj); // Output: { a: 1, b: 3, c: 4, d: 5 }

const animalPrototype = {
  type: "unknown",
  legs: 0,
  hasTail: false,
};
const dog = Object.create(animalPrototype);
dog.type = "dog";
dog.legs = 4;
dog.hasTail = true;

console.log(dog); // Output: "unknown"
