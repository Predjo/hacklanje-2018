
const { expect } = require('chai');


// Replace "not ... bad" substring starting with NOT and ending with BAD) with "good" in the input.

function processLine(inputLine) {
  const notBadRegex = /not.*?bad/gi;

  return inputLine.replace(notBadRegex, 'good');
}

describe('Cycle 1: Not bad is good', () => {
  it('Replace not ... bad with good once', () => {
    expect(processLine('This pizza is not too bad.')).to.equal('This pizza is good.');
  });

  it('Replace not ... bad with good twice', () => {
    expect(processLine('That is not too bad and this is also not too bad')).to.equal('That is good and this is also good');
  });

  it('Replace not ... bad with good case insensitive', () => {
    expect(processLine('That is NOT too BAD')).to.equal('That is good');
  });
});
