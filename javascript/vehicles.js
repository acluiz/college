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
    let infosStr = "";

    infosStr += `${this.color} ${this.brand} ${this.year}\n`;
    infosStr += `License plate: ${this.license_plate}, Owner: ${this.owner}\n`;
    infosStr += `Must pay annual taxes?: ${this.mustPayTaxes()}\n`;

    if (this instanceof Car) {
      infosStr += `${this.horsepower} horsepower`;
    }

    if (this instanceof Motorcycle) {
      infosStr += `${this.engine_displacement}cc engine displacement`;
    }

    return infosStr;
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

const vehicle1 = new Car("John", "20AL54C", "Audi", "Black", 2015, 160);

const vehicle2 = new Motorcycle(
  "Vanessa",
  "29BC45",
  "Yamaha",
  "Black",
  2023,
  300
);

console.log(`${vehicle1.vehicleInfoStr()}`);
console.log(`\n`);
console.log(`${vehicle2.vehicleInfoStr()}`);
