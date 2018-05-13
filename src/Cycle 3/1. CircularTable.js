
const { expect } = require('chai');

// In one circular table there are exactly 3N voters from political parties named
// A, B and C. There are exactly N voters from each party. Every voter wants his
// immediate neighbour (left or right) to be from different parties (also different from his party).
// For example, voter A can sit in one of two options: left neighbour B, right neighbour C or left
// neighbour C, right neighbour B. Other options aren’t allowed. Two voters can stand up and swap
// their places. Find the least number of swaps such that every voter sits between voters
// from different parties.

// INPUT
// In the first line you are given a natural number N (1 <= N <= 100 000)
// In the second line you are given an array of 3N chars (every char is ‘A’, ‘B’ or ‘C’)

// OUTPUT
// In the first and only line of output print the least number of swaps.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function mod(a, b) {
  return ((a % b) + b) % b;
}

function isValidPosition(index, value, list) {
  const indexBefore = mod(index - 1, list.length);
  const indexAfter = mod(index + 1, list.length);
  if (list[indexBefore] === value ||
    value === list[indexAfter] ||
    list[indexBefore] === list[indexAfter]) {
    return false;
  }

  return true;
}

function isValidSwap(firstIndex, secondIndex, list) {
  const firstVal = list[firstIndex];
  const secondVal = list[secondIndex];
  const testList = list.slice();
  testList[firstIndex] = secondVal;
  testList[secondIndex] = firstVal;
  return isValidPosition(firstIndex, secondVal, testList);
}

function processLine(inputLines) {
  const partyList = inputLines[1].split('');
  let minSwitches = 0;

  for (let y = 0; y < partyList.length - 1; y++) {
    const firstVal = partyList[y];
    if (!isValidPosition(y, partyList[y], partyList)) {
      for (let x = y + 1; x < partyList.length; x++) {
        const secondVal = partyList[x];
        if (firstVal !== secondVal) {
          if (isValidSwap(y, x, partyList)) {
            partyList[x] = firstVal;
            partyList[y] = secondVal;
            minSwitches++;
            console.log(partyList.join(''))
            break;
          }
        }
      }
    }
  }

  return String(minSwitches);
}

describe.skip('Cycle 3: Circular table', () => {
  it('Requires no switches', () => {
    expect(processLine(['2', 'ABCABC'])).to.equal('0');
  });

  it('Requires 2 switches', () => {
    expect(processLine(['2', 'ABBCCA'])).to.equal('2');
  });

  it('Requires 5 switches', () => {
    expect(processLine(['5', 'ABBCCAABABABCCC'])).to.equal('5');
  });
});
