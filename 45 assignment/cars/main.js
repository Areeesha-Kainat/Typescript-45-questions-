function createCar(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        details: details
    };
    return car;
}
var car = createCar("Toyota", "Camry", { "color": "blue", "features": "navigation system" });
console.log(car);
