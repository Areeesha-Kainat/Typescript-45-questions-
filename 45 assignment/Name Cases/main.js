var Name = "Areesha Kainat";
// In lowercase
console.log("lowercase :", Name.toLowerCase());
// In uppercase
console.log("uppercase :", Name.toUpperCase());
// In title case
console.log("titlecase :", Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
