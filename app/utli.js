class Util {

  reverseString(str) {
    return str.split('').reverse().join('');
  }

  add(a, b) {
    return a + b;
  }
}

module.exports.Util = Util;
