
const { expect } = require('chai');

// Replace all adjacent equal elements of the given array with one element.

function processLine(inputLine) {
  return inputLine
    .split(' ')
    .reduce((array, number) =>
      (array[array.length - 1] === number ? array : [...array, number]), [])
    .join(' ');
}

describe('Cycle 1: Shrink the duplicates', () => {
  it('Replace all adjacent equal elements with one element', () => {
    expect(processLine('4 4 4 2 8 8 7')).to.equal('4 2 8 7');
  });

  it('Replace all adjacent equal elements with one element', () => {
    expect(processLine('3 2 2 2 3 5 6 6 6 6')).to.equal('3 2 3 5 6');
  });
});
