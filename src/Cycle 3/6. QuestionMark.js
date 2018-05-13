
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

function mod(aNumStr, aDiv) {
  let tmp = '';

  for (let i = 0; i < aNumStr.length; i++) {
    tmp += aNumStr[i];
    const r = tmp % aDiv;
    tmp = String(r);
  }
  return Number(tmp);
}

function zeroPad(numberString, length) {
  if (numberString.length < length) {
    return zeroPad('0' + numberString, length);
  }

  return numberString;
}

function combineNumber(digits, variation, variableIndexes) {
  const numberString = zeroPad(String(variation), variableIndexes.length);

  variableIndexes.forEach((variableIndex, index) => {
    digits[variableIndex] = numberString[index];
  });

  return digits.join('');
}
function processLines(lines) {
  const divisor = Number(lines[0].split(' ')[1]);
  const digits = lines[1].trim().split('');
  const variableIndexes = [];
  let numOfCombinations = 0;

  digits.forEach((digit, index) => {
    if (digit === '?') {
      variableIndexes.push(index);
    }
  });

  const startIndex = variableIndexes[0] === 0 ? Math.pow(10, variableIndexes.length - 1) : 0;

  for (let i = startIndex; i < Math.pow(10, variableIndexes.length); i++) {
    const numberStr = combineNumber(digits, i, variableIndexes);

    if (numberStr.length === digits.length && mod(numberStr, divisor) === 0) {
      numOfCombinations++;
    }
  }

  return String(numOfCombinations);
}

describe('Cycle 3: Question mark', () => {
  it('There is only one combination', () => {
    expect(processLines(['2 5', '2?'])).to.equal('2');
  });

  it('There are 3 combinations', () => {
    expect(processLines(['2 3', '?3'])).to.equal('3');
  });

  it('There are 30 combinations', () => {
    expect(processLines(['3 3', '??3'])).to.equal('30');
  });

  it('There are 18 combinations', () => {
    expect(processLines(['5 5', '?31?'])).to.equal('18');
  });

  it('There are 1285 combinations', () => {
    expect(processLines(['17 7', '?45181?2?33474?23'])).to.equal('1285');
  });

  it('There are 12856 combinations', () => {
    expect(processLines(['100 7', '89533855?559531809?7684461671461317912639334664684544201360617768?706456?8?6794532194129935204989607'])).to.equal('14285');
  });
});
