
const { expect } = require('chai');

// Mirko has N bottles of water. Every bottle has a certain number of deciliters.
// Mirko knows that in next month he can drink X deciliters of water maximum.
// Find the largest number of empty bottles after one month, which Mirko can drink.

// INPUT
// In the first line you are given natural numbers N and X separated by space
// (1 <= N <= 100, 1 <= X <= 10000)
// In the second line you are given N natural numbers separated by spaces which
// represent amount of deciliters in each of N bottles. Deciliters are
// between 1 and 1000 (inclusive)

// OUTPUT
// In the first and only line of output print largest number of empty bottles.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function processLines(lines) {
  const numOfBottles = Number(lines[0].split(' ')[0]);
  const maxDecs = Number(lines[0].split(' ')[1]);
  const bottles = lines[1].trim().split(' ').map(bottle => Number(bottle)).sort((a, b) => a - b);
  let maxBottles = 0;
  let currentDecs = 0;

  while ((maxBottles < numOfBottles) && ((currentDecs + bottles[maxBottles]) <= maxDecs)) {
    currentDecs += bottles[maxBottles];
    maxBottles++;
  }

  return String(maxBottles);
}

describe('Cycle 3: Water', () => {
  it('Mirko can empty 3 bottles', () => {
    expect(processLines(['3 8', '3 1 4'])).to.equal('3');
  });

  it('Mirko can empty 2 bottles', () => {
    expect(processLines(['5 14', '6 8 7 10 9'])).to.equal('2');
  });

  it('Mirko can empty 13 bottles', () => {
    expect(processLines(['20 20', '2 5 2 5 3 3 1 4 1 4 1 2 5 2 1 3 3 1 5 2'])).to.equal('11');
  });

  it('Mirko can empty 13 bottles', () => {
    expect(processLines(['19 19', '1 1 1 5 1 4 2 2 2 5 1 1 4 5 1 1 1 3 4'])).to.equal('13');
  });

  it('Mirko can empty 9 bottles', () => {
    expect(processLines(['19 20', '4 5 1 2 5 5 4 4 3 2 4 4 4 3 5 1 1 4 2'])).to.equal('9');
  });
});
