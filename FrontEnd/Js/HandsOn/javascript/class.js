class Car {
  constructor(name, fuel) {
    (this.name = name), (this.fuel = fuel);
  }

  cetakInfo() {
    console.log("ini mobil namanya " + this.name);
  }
}

const livina = new Car("livina", 50);

console.log(livina);
console.log(livina.cetakInfo);

livina.cetakInfo();
