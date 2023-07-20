class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `
    Make: ${this.make}, Model: ${this.model}, Year: ${this.year}
    `;
  }
}

const myCar = new Car (`Honda`, `Civic`, `2023`);
console.log(myCar.getDescription())