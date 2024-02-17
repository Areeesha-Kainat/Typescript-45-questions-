var animals = [
    { name: "Dog", commonCharacteristic: "Loyalty", statement: "A dog would make a great pet." },
    { name: "Cat", commonCharacteristic: "Loyalty", statement: "A cat would make a great companion." },
    { name: "Horse", commonCharacteristic: "Loyalty", statement: "A horse would make a great partner for riding." }
];
for (var i = 0; i < animals.length; i++) {
    console.log("Name: " + animals[i].name);
    console.log("Statement: " + animals[i].statement);
}
console.log("Any of these animals would make a great pet due to their " + animals[0].commonCharacteristic);
