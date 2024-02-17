function ordinalEnding(num) {
    if (num === 1 || num === 21 || num === 31) {
        return "st";
    }
    else if (num === 2 || num === 22) {
        return "nd";
    }
    else if (num === 3 || num === 23) {
        return "rd";
    }
    else {
        return "th";
    }
}
var numbers = Array.from({ length: 9 }, function (_, i) { return i + 1; });
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinalNum = num.toString() + ordinalEnding(num);
    console.log(ordinalNum);
}
