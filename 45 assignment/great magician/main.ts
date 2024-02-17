function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan")); 
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan")); 

let magicians: string[] = ["areesha","aliyan", "maaz", "manal"];

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

make_great(magicians);

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians); 