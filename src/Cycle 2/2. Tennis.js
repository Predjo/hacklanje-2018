
const { expect } = require('chai');

// Mirko and Slavko are playing their version of tennis. One set in a tennis match
//  consists of several games. You are given results of N sets played between Mirko
//  and Slavko, formatted as X:Y, where X represents the number of games won by Mirko
//  and Y represents the number of games won by Slavko in one set. The player with more
//  games won wins the set. Determine the number of sets won by Mirko and Slavko!

// INPUT
// The first line contains a positive integer N (1 ≤ N ≤ 100) - the number of sets played.
//  In the next N input lines you are given the set results, formatted as X:Y. X will always
//  be different than Y. (1 <= X, Y <= 100)

// OUTPUT
// In the first line of output write the solution, formatted as A:B where A represents the number
// of sets won by Mirko and B represents the number of sets won by Slavko. Note that A + B must be
// equal to N.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/


function absSign(a, b) {
  return (a - b > 0) ? 1 : 0;
}

function processLines(lines) {
  return lines.slice(1).reduce((acc, line) => {
    const [a, b] = line.split(':').map(i => Number(i));
    return [acc[0] + absSign(a, b), acc[1] + absSign(b, a)];
  }, [0, 0]).join(':');
}

describe('Cycle 2: Tennis', () => {
  it('Mirko wins 1:1', () => {
    expect(processLines(['2', '6:4', '4:6'])).to.equal('1:1');
  });

  it('Mirko wins 3:0', () => {
    expect(processLines(['3', '12:8', '15:11', '7:1'])).to.equal('3:0');
  });

  it('Slavko wins 4:2', () => {
    expect(processLines(['5', '3:8', '1:2', '7:1', '3:2', '1:5', '2:7'])).to.equal('2:4');
  });
});
