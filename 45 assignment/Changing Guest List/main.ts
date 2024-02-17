
let Guests: string[] = ["Areesha", "Aliyan", "Shazia"];
let Not_Attend: string= "Areesha";

console.log(Not_Attend + " " + "can not attend dinner");

let New_Guest : string = "Haseeb"

Guests [Guests.indexOf(Not_Attend)] = New_Guest;
console.log(Guests);

Guests.map((items) => console.log(`dear ${items} , You are invited to dinner`));




