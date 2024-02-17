var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["dubai", "saudia", "austrailia", "canada", "New York"];
// Part 1
console.log("Original order:", placesToVisit);
// Part 2
var alphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical order:", alphabeticalOrder);
// part 3
console.log("Updated guest list:", placesToVisit);
// Part 4
var reverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort().reverse();
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
