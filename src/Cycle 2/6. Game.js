
const { expect } = require('chai');

// Mirko and Slavko are playing a game. There is a sequence of N natural numbers in front of them.
// Mirko and Slavko are taking turns. Mirko plays first. In each turn a player selects one of the
// numbers and divides it by one of its prime factors if it is possible. The game is over when all
// of the numbers are equal to 1. The first player who can't make a move loses. Determine the winner
// of the game and the total number of turns required to finish it.

// INPUT
// The first line contains a positive integer N (1 ≤ N ≤ 100), the length of the array of numbers.
// The second line contains N positive integers separated by space Ai (1 ≤ Ai ≤ 1000000000), the
// initial elements of the array.


// OUTPUT
// In the first line print the name of the winner, either Mirko or Slavko. In the second line print
// the required number of turns to finish the game.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function getPrimeFactors(number) {
  if (number === 1) return [1];

  const factors = [];

  while (number % 2 === 0) {
    factors.push(2);
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }

  if (number !== 1) {
    factors.push(number);
  }

  return factors;
}

function processLines(lines) {
  const players = ['Mirko', 'Slavko'];
  const numbers = lines[1].split(' ');

  const numOfTurns = numbers
    .reduce((acc, number) => acc + getPrimeFactors(Number(number)).length, 0);

  return players[(numOfTurns - 1) % 2] + '\n' + numOfTurns;
}

describe('Cycle 2: Game', () => {
  it('Return prime factors of 9', () => {
    expect(getPrimeFactors(9)).to.have.same.members([3, 3]);
  });

  it('Return prime factors of 48', () => {
    expect(getPrimeFactors(48)).to.have.same.members([2, 2, 2, 2, 3]);
  });

  it('Winner is Slavko in 2 turns', () => {
    expect(processLines(['1', '15'])).to.equal('Slavko\n2');
  });

  it('Winner is Mirko in 9 turns', () => {
    expect(processLines(['5', '5 3 8 9 4'])).to.equal('Mirko\n9');
  });
});
