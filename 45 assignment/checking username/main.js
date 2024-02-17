var current_users = ['john', 'areesha', 'shazia', 'haseeb', 'aliyan'];
var new_users = ['John', 'aroosha', 'shazia', 'haseeb', 'mashal'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    var lowercase_new_username = new_username.toLowerCase();
    var is_used = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_username = current_users_1[_a];
        var lowercase_current_username = current_username.toLowerCase();
        if (lowercase_new_username === lowercase_current_username) {
            is_used = true;
            break;
        }
    }
    if (is_used) {
        console.log("The username ".concat(new_username, " is already taken, please choose another one."));
    }
    else {
        console.log("The username ".concat(new_username, " is available."));
    }
}
