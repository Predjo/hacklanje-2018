
const { expect } = require('chai');


// Replace all characters equal to the first character of the input,
//  except the first character, with an asterisk (*).

function processLine(inputLine) {
  if (inputLine.length > 0) {
    const firstChar = inputLine[0];
    let newLine = inputLine;

    for (let i = 1; i < inputLine.length; i++) {
      if (inputLine[i] === firstChar) {
        newLine = newLine.substr(0, i) + '*' + newLine.substr(i + 1);
      }
    }

    return newLine;
  }

  return '';
}

describe('Cycle 1: Firsterisk', () => {
  it('Replace all but first characters with *', () => {
    expect(processLine('initialization')).to.equal('in*t*al*zat*on');
  });
});
