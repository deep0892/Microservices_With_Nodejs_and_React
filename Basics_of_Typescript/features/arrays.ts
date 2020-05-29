const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carByMake = [['f150'], ['corolla'], ['camero']];

const twoDArray: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent inc(ompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-05-29');
importantDates.push(new Date());
