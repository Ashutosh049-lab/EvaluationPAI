

  // problem -2

  function Vehicle(make,year){
    this.make=make;
    this.year=year;
  }

  Vehicle.prototype.getDetails=function(){
    return `${this.make}  (${this.year})`;
  }


  function Car(make,year,model){
    Vehicle.call(this,make,year);
    this.model=model;
  }


  Car.prototype=Object.create(Vehicle.prototype);
  Car.prototype.constructor=Car;


  // override
  Car.prototype.getDetails=function(){
    return `${this.make} ${this.model} (${this.year})`;
  }

  const car1 = new Car("Toyota", 2022, "Corolla");
console.log(car1.getDetails());