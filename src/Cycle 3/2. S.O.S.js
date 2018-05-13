
const { expect } = require('chai');

// Wayne is a crazy scientist who knows how to shrink his surroundings.
// Unfortunately for him, this time he managed to shrink himself to the size
// of a centimeter. After jumping around in his laboratory he managed to reach
// a telephone and now he wants to make an SOS call, hoping that someone would
// be able to help him. A picture below shows the keyboard layout of the telephone:

/*

1 | 2 | 3
---+---+---
4 | 5 | 6
---+---+---
7 | 8 | 9
---+---+---
| 0 | CALL

*/

// Initially, Wayne stands on the button 0. In each second he can move to the
// adjacent button (to the left, right, top or bottom), or jump on the current
// button which triggers the press event. Given the number of the SOS service,
// help Wayne determine the minimal time in seconds to make the call.

// INPUT
// The first line contains the number of the SOS service, consisting of at most 100 digits.

// OUTPUT
// Print the minimal time in seconds to call the SOS service.

/*
  let inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(inputLine) {
  const numbers = inputLine.split('').map(num => Number(num));
  const formatedNumers = [10, ...numbers.map(num => (num === 0 ? 10 : num - 1)), 11];
  let numOfSteps = 0;

  for (let i = 1; i < formatedNumers.length; i++) {
    const x = formatedNumers[i - 1];
    const y = formatedNumers[i];
    numOfSteps += Math.abs(Math.floor(x / 3) - Math.floor(y / 3)) + Math.abs((x % 3) - (y % 3)) + 1;
  }

  return String(numOfSteps);
}

describe('Cycle 3: S.O.S', () => {
  it('Requires 8 steps', () => {
    expect(processLine('85')).to.equal('8');
  });

  it('Requires 15 steps', () => {
    expect(processLine('231')).to.equal('15');
  });

  it('Requires 24 steps', () => {
    expect(processLine('13463 ')).to.equal('24');
  });

  it('Requires 71 steps', () => {
    expect(processLine('1525856328535326023410029')).to.equal('73');
  });

  it('Requires 223 steps', () => {
    expect(processLine('642913217371675408575872074753320713357006373036985692090497949133768499028')).to.equal('237');
  });
});
