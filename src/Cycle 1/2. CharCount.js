
const { expect } = require('chai');

// Count the number of occurances of each letter of the input string.
// Count ONLY LETTERS, converted to LOWERCASE. Skip numbers or any other characters.

// Return a string containing the letters converted to lowercase and sorted alphabetically,
//  and their respective counts, separated by newlines, as described.
//  Omit the last newline in the result.

/*
  let inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(inputLine) {
  const letterRegEx = /^[a-z]+$/;

  const charDict = inputLine
    .toLowerCase()
    .split('')
    .filter(char => char.match(letterRegEx))
    .reduce((dict, char) => { dict[char] = dict[char] ? dict[char] + 1 : 1; return dict; }, {});

  return Object.keys(charDict)
    .sort()
    .reduce((array, key) => [...array, key + ':' + charDict[key]], [])
    .join('\n');
}

describe('Cycle 1: Char count', () => {
  it('Count all the characters', () => {
    expect(processLine('Hello world!')).to.equal('d:1\ne:1\nh:1\nl:3\no:2\nr:1\nw:1');
  });

  it('Count all the characters', () => {
    expect(processLine('*abc_CBC*')).to.equal('a:1\nb:2\nc:3');
  });

  it('Return empty string', () => {
    expect(processLine('')).to.equal('');
  });
});
