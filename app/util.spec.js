const { expect } = require('chai');
const { Util } = require('./utli');

let util;

describe('Util test', () => {
  beforeEach(() => {
    util = new Util();
  });

  describe('Methods test', () => {
    it('should reverse string', () => {
      expect(util.reverseString('abcdefg')).eq('gfedcba');
    });

    it('should add values', () => {
      expect(util.add(102, 201)).eq(303);
    });
  });
});
