function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " t-shirt with the message \"").concat(message, "\" would be a great choice."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "TypeScript is the best!");
