class Vehicle {
  #owner;
  #license_plate;
  #brand;
  #color;
  #year;

  constructor(owner, license_plate, brand, color, year) {
    this.#owner = owner;
    this.#license_plate = license_plate;
    this.#brand = brand;
    this.#color = color;
    this.#year = year;
  }

  get owner() {
    return this.#owner;
  }

  get license_plate() {
    return this.#license_plate;
  }

  get brand() {
    return this.#brand;
  }

  get color() {
    return this.#color;
  }

  get year() {
    return this.#year;
  }

  mustPayTaxes() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const vehicleAge = currentYear - this.#year;
    const ageToStopPaying = 15;

    if (vehicleAge < ageToStopPaying) return "Yes";

    return "No";
  }

  vehicleInfoStr() {
    return `${this.color} ${this.brand} ${this.year}\nLicense plate: ${
      this.license_plate
    }, Owner: ${this.owner}\nMust pay annual taxes?: ${this.mustPayTaxes()}`;
  }
}

class Motorcycle extends Vehicle {
  static wheels = 2;
  #engine_displacement;

  constructor(owner, license_plate, brand, color, year, engine_displacement) {
    super(owner, license_plate, brand, color, year);
    this.#engine_displacement = engine_displacement;
  }

  get engine_displacement() {
    return this.#engine_displacement;
  }
}

class Car extends Vehicle {
  static wheels = 4;
  #horsepower;

  constructor(owner, license_plate, brand, color, year, horsepower) {
    super(owner, license_plate, brand, color, year);

    this.#horsepower = horsepower;
  }

  get horsepower() {
    return this.#horsepower;
  }
}

const firstVehicle = new Car("John", "20AL54C", "Audi", "Black", 2015, 160);

const secondVehicle = new Motorcycle(
  "Vanessa",
  "29BC45",
  "Yamaha",
  "Black",
  2023,
  300
);

console.log(
  `${firstVehicle.vehicleInfoStr()}\n${firstVehicle.horsepower} horsepower`
);

console.log(`\n`);

console.log(
  `${secondVehicle.vehicleInfoStr()}\n${
    secondVehicle.engine_displacement
  } engine displacement`
);
