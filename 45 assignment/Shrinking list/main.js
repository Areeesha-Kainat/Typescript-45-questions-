var guestList = ['Areesha', 'shazia', 'haseeb', 'aliyan', 'aroosha', 'mashal'];
console.log('You can invite only two people for dinner.');
while (guestList.length > 2) {
    var guestToRemove = guestList.shift();
    console.log("Sorry ".concat(guestToRemove, ", we can't invite you to dinner."));
}
var remainingGuests = guestList.splice(0, 2);
remainingGuests.forEach(function (guest) {
    console.log("".concat(guest, ", you're still invited to dinner."));
});
console.log('Updated guest list:', guestList);
