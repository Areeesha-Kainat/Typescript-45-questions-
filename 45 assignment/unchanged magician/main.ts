let magicians: string[] = ["areesha", "aliyan", "maaz", "manal"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`The Great ${magicians[i]}`);
    }
    return greatMagicians;
}

const greatMagicians = make_great(magicians);

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
show_magicians(greatMagicians); 