  function createCar(manufacturer: string, model: string, ...details: { [key: string]: string }):
   { manufacturer: string, model: string, details: { [key: string]: string } } {
    let car: { manufacturer: string, model: string, details: { [key: string]: string } } = {
        manufacturer,
        model,
        details
    };
    return car;
}

let car = createCar("Toyota", "Camry", {"color": "blue", "features": "navigation system"});

console.log(car);