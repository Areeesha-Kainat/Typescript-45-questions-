
let guestList: string[] = ['Areesha', 'shazia', 'haseeb', 'aliyan', 'aroosha', 'mashal'];

console.log('You can invite only two people for dinner.');

while (guestList.length > 2) {
    let guestToRemove = guestList.shift();
    console.log(`Sorry ${guestToRemove}, we can't invite you to dinner.`);
}

const remainingGuests = guestList.splice(0, 2);

remainingGuests.forEach(guest => {
    console.log(`${guest}, you're still invited to dinner.`);
});

console.log('Updated guest list:', guestList);