class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// honk Cannot called outside the class or child classes as it is marked protected
// vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
console.log(car.wheels);
// honk Cannot called outside the class or child classes as it is marked protected
// car.honk();
