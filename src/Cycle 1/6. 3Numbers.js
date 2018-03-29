
const { expect } = require('chai');

// Return an array of 3 numbers less than 100 whose sum equals 194 and product equals 229824.
// Sort the numbers ascending.

/*
  print(processLine())
*/

function processLine() {
  const sum = 194;
  const product = 229824;

  for (let first = 1; first < 100; first++) {
    for (let second = first + 1; second < 100; second++) {
      for (let third = second + 1; third < 100; third++) {
        if (((first + second + third) === sum) && ((first * second * third) === product)) {
          return [first, second, third];
        }
      }
    }
  }

  return '';
}

describe('Cycle 1: 3 numbers', () => {
  const array = processLine();

  it('Should create an array with 3 elements', () => {
    expect(array.length).to.equal(3);
  });

  it('Sum of elements should be 194', () => {
    expect(array[0] + array[1] + array[2]).to.equal(194);
  });

  it('Product of elements should be 229824', () => {
    expect(array[0] * array[1] * array[2]).to.equal(229824);
  });
});
