function receivesAFunction(callback) {
    callback();
  }
  
  // Define returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction() {};
  }
  
  // Define returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function () {};
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };