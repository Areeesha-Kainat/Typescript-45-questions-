// Array of places to visit
let placesToVisit: string[] = ["dubai", "saudia", "austrailia", "canada", "New York"];

// Part 1
console.log("Original order:", placesToVisit);

// Part 2
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical order:", alphabeticalOrder);

// part 3
console.log("Updated guest list:", placesToVisit);

// Part 4
let reverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order:", reverseAlphabeticalOrder);

// part 5
placesToVisit.reverse();
console.log("Reversed list:", placesToVisit);

// part 6
placesToVisit.reverse();
console.log("Reversed list again:", placesToVisit);

//part 7
placesToVisit.sort();
console.log("Sorted list:", placesToVisit);

// part 8
placesToVisit.sort().reverse();
console.log("Sorted list in reverse alphabetical order:", placesToVisit);