var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Ordering a sandwich with the following items: ".concat(items.join(", ")));
}
order_sandwich("egg", "cheese", "tomato");
order_sandwich("chicken", "bbq");
order_sandwich("butter", "jam", "bread", "banana");
function order_sandwich1(items) {
    items.forEach(function (item) { return console.log(item); });
    console.log("Ordering a sandwich with the following items: ");
    items.forEach(function (item) { return console.log(item); });
}
order_sandwich1(["egg", "cheese", "tomato"]);
order_sandwich1(["chicken", "bbq"]);
order_sandwich1(["butter", "jam", "bread", "banana"]);
var sandwichItems = ["egg", "cheese", "tomato"];
function order_sandwich2(items) {
    items.forEach(function (item) { return console.log(item); });
    console.log("Ordering a sandwich with the following items: ");
    items.forEach(function (item) { return console.log(item); });
}
order_sandwich2(__spreadArray([], sandwichItems, true));
