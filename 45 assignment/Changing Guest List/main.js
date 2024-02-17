var Guests = ["Areesha", "Aliyan", "Shazia"];
var Not_Attend = "Areesha";
console.log(Not_Attend + " " + "can not attend dinner");
var New_Guest = "Haseeb";
Guests[Guests.indexOf(Not_Attend)] = New_Guest;
console.log(Guests);
Guests.map(function (items) { return console.log("dear ".concat(items, " , You are invited to dinner")); });
