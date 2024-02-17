var guest = ["Areesha", "Shazia", "Aliyan", "Haseeb"];
var not_attend = "Areesha";
var newGuest = "aroosha";
guest[guest.indexOf(not_attend)] = newGuest;
console.log(guest);
guest.map(function (items) { return console.log("dear ".concat(items, ", just found a bigger dinner table ")); });
//part 2
var guestbig = "Mashal";
guest.unshift(guestbig);
console.log(guest);
//part 3
var middleguest = "fatima";
var middleindex = guest.length / 3;
guest.splice(middleindex, 0, middleguest);
console.log(guest);
//part4
guest.push("fatima");
console.log(guest);
// part5 
guest.map(function (items) { return console.log("dear ".concat(items, ", you are invited in more people category on dinner")); });
