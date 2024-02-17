var magicians = ["areesha", "aliyan", "maaz", "manal"];
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
var greatMagicians = make_great(magicians);
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
show_magicians(greatMagicians);
