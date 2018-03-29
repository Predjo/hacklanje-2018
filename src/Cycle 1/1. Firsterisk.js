
const { expect } = require('chai');

// Replace all characters equal to the first character of the input,
// except the first character, with an asterisk (*).

/*
  let inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(inputLine) {
  if (!inputLine) return '';
  return inputLine[0] + inputLine.substring(1).replace(new RegExp(inputLine[0], 'gi'), '*');
}

describe('Cycle 1: Firsterisk', () => {
  it('Return empty string', () => {
    expect(processLine('')).to.equal('');
  });

  it('Return input string', () => {
    expect(processLine('i')).to.equal('i');
  });

  it('Replace all but first characters with *', () => {
    expect(processLine('initialization')).to.equal('in*t*al*zat*on');
  });
});
