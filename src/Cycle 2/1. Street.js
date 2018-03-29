
const { expect } = require('chai');

// Mirko and Slavko live in a long street consisting of N houses (N is always an even number).
// Each house is labeled with a house number ranging from 1 to N. Even numbers are located
//  on one side, and odd numbers are on the other side of the road (as shown on the picture below).

// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]

// Mirko, who lives in the house labeled A, wants to visit his friend Slavko who lives in the house
//  labeled B. It takes one minute for Mirko to cross the road or move to the neighboring house on
//  the same side of the road. Help Mirko and determine the time required to get from his
//  house to Slavko’s house.

function processLine(inputLine) {
  const mirko = Number(inputLine.split(' ')[0]);
  const slavko = Number(inputLine.split(' ')[1]);

  return Math.abs(Math.floor((mirko + 1) / 2) - Math.floor((slavko + 1) / 2)) +
    Math.ceil(Math.abs((mirko - slavko) % 2));
}

describe('Cycle 2: Street', () => {
  it('Return 1', () => {
    expect(processLine('3 4')).to.equal(1);
  });

  it('Return 6', () => {
    expect(processLine('8 20')).to.equal(6);
  });

  it('Return 10', () => {
    expect(processLine('12 29')).to.equal(10);
  });
});
