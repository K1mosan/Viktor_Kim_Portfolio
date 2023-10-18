//function expression
let anonFunction = function () {
  console.log("annonFunction called");
};
anonFunction();

let annonFunction2 = (function () {
  console.log("anonFunction called");
})();

(function () {
  console.log("iffe called");
})();

console.log("userName");

(() => {
  console.log("arrow iffe called");
})();
