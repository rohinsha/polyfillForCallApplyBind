// //method
function getName(fname, lname) {
  console.log(`${fname} ${lname}'s - ${this.carName} Car`);
}
// //object
const objCar = {
  carName: "BMW"
};
// getName.call(objCar, "Rohinsha", "Gajhbiye");
//Polyfill for CALL
Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};

// getName.myCall(objCar, "Rohinsha", "Gajhbiye");

//Polyfill for APPLY
Function.prototype.myApply = function (context, args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};

// getName.myApply(objCar, ["Rohinsha", "Gajhbiye"]);

//Polyfill for BIND

Function.prototype.myBind = function (...args) {
  var callback = this,
    ctx = args.splice(1);
  return function (...a) {
    callback.call(args[0], ...[...ctx, ...a]);
  };
};

const result2 = getName.myBind(objCar, "Rohinsha");
result2("Gajhbiye");
