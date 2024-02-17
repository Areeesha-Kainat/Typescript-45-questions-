let guests: string[] = ["Areesha", "Aliyan", "Shazia"];
let notAttend = "Areesha";
console.log(`${notAttend} can't attend dinner.`);
let newGuest = "Haseeb";
guests[guests.indexOf(notAttend)] = newGuest;
console.log("Updated guest list:", guests);

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

console.log(`Inviting ${guests.length} people to dinner.`);