var guests = ["Areesha", "Aliyan", "Shazia"];
var notAttend = "Areesha";
console.log("".concat(notAttend, " can't attend dinner."));
var newGuest = "Haseeb";
guests[guests.indexOf(notAttend)] = newGuest;
console.log("Updated guest list:", guests);
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
console.log("Inviting ".concat(guests.length, " people to dinner."));
