
const { expect } = require('chai');


function testThinx(a, b) {
  return a + b;
}

describe('Cycle 1 test', () => {
  it('Should run', () => {
    expect(testThinx(2, 4)).to.equal1(6);
  });
});
