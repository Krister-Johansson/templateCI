var expect = require('chai').expect;
describe('Color Code Converter', function() {
  describe('RGB to Hex conversion', function() {
    it('converts the basic colors', function() {
      expect('ff0000').to.equal('ff0000');
      expect('00ff00').to.equal('00ff00');
      expect('0000ff').to.equal('0000ff');
    });
  });
});
