'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

// Function that times the execution of another funciton
// Usage timeIt(foo, "Description of execution")(arg1, arg2, ...)
var timeIt = (func, description) => /*#__PURE__*/_asyncToGenerator(function* () {
  console.time(description);

  try {
    return yield func(...arguments);
  } catch (error) {
    throw error;
  } finally {
    console.timeEnd(description);
  }
});

module.exports = timeIt;
