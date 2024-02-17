let current_users: string[] = ['john', 'areesha', 'shazia', 'haseeb', 'aliyan'];

let new_users: string[] = ['John', 'aroosha', 'shazia', 'haseeb', 'mashal'];


for (let new_username of new_users) {
  let lowercase_new_username = new_username.toLowerCase();

  let is_used = false;
  for (let current_username of current_users) {
   
    let lowercase_current_username = current_username.toLowerCase();

    if (lowercase_new_username === lowercase_current_username) {
      is_used = true;
      break;
    }
  }
  
  if (is_used) {
    console.log(`The username ${new_username} is already taken, please choose another one.`);
  } else {
    console.log(`The username ${new_username} is available.`);
  }
}