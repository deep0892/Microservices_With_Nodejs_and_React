// const OldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// printVehicle(OldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const OldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'civic',
  carbonated: 2000,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar!`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(OldCivic);
printSummary(OldCivic);
printSummary(drink);
