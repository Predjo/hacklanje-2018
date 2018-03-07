
const { expect } = require('chai');

// Replace numbers with "*", letters with "-" and other characters with "?"

function processLine(inputLine) {
  const numberRegEx = /^[0-9]+$/;
  const letterRegEx = /^[a-zA-Z]+$/;

  const isNumber = char => char.match(numberRegEx);
  const isLetter = char => char.match(letterRegEx);

  return inputLine
    .split('')
    .map(char => (isNumber(char) ? '*' : isLetter(char) ? '-' : '?'))
    .join('');
}

describe('Cycle 1: Char replace', () => {
  it('Replace numbers with "*"', () => {
    expect(processLine('314')).to.equal('***');
  });

  it('Replace letters with "-"', () => {
    expect(processLine('piPI')).to.equal('----');
  });

  it('Replace numbers with "*", letters with "-" and other characters with "?"', () => {
    expect(processLine('pi=3.14')).to.equal('--?*?**');
  });
});
