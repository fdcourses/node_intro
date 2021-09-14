
class MyMath {
  static sum = (...args) =>  args.reduce((acc, currentValue) => acc + currentValue, 0);

  static subtract = (...args) => args.reduce((acc, currentValue) => acc - currentValue, 0);

  static div = (...args) => args.reduce((acc, currentValue) => acc / currentValue, 0);

  static multiply = (...args) => args.reduce((acc, currentValue) => acc * currentValue, 0);
}

module.exports = MyMath;

// console.log(module.exports);