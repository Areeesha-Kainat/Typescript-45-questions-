let guest : string [] = ["Areesha" , "Shazia" ,"Aliyan","Haseeb"];
let not_attend : string = "Areesha"

let newGuest : string = "aroosha"

guest[guest.indexOf(not_attend)] = newGuest;
console.log(guest);

guest.map((items)=> console.log(`dear ${items}, just found a bigger dinner table `));

//part 2
let guestbig : string = "Mashal"
guest.unshift(guestbig);
console.log(guest);

//part 3
let middleguest : string = "fatima"
let middleindex = guest.length/3
guest.splice(middleindex,0,middleguest)
console.log(guest);

//part4
guest.push("fatima")
console.log(guest);

// part5 
guest.map((items)=> console.log(`dear ${items}, you are invited in more people category on dinner`));


