function ordinalEnding(num: number): string {
    if (num === 1 || num === 21 || num === 31) {
        return "st";
    } else if (num === 2 || num === 22) {
        return "nd";
    } else if (num === 3 || num === 23) {
        return "rd";
    } else {
        return "th";
    }
}

const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

for (const num of numbers) {
    const ordinalNum = num.toString() + ordinalEnding(num);
    console.log(ordinalNum);
}