
const { expect } = require('chai');

// There’s an expression written on a piece of paper in the following way:
// A op1 B op2 C op3 D
// Each operator (opi) can be either a + or a -. Given the values of
// A, B, C and D, determine the operators op1, op2 and op3 such that the
// iven expression gives the largest possible result. You may assume that the
// answer will be unique.

// INPUT
// The first line contains four integers A, B, C, D (-100 <= A, B, C, D <= 100, A, B, C, D != 0).

// OUTPUT
// The three operators (+ or -).

/*
  var inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(line) {
  const numbers = line.trim().split(' ').map(bottle => Number(bottle));
  let expression = '';

  for (let i = 1; i < numbers.length; i++) {
    expression += numbers[i] > 0 ? '+' : '-';
  }

  return expression;
}

describe('Cycle 3: Expression', () => {
  it('Expression is +-+', () => {
    expect(processLine('4 8 -1 2')).to.equal('+-+');
  });

  it('Expression is +++', () => {
    expect(processLine('10 10 10 10')).to.equal('+++');
  });
});
