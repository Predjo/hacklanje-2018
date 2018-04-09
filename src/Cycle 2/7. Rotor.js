
const { expect } = require('chai');

// You're given a picture constisting of N × M pixels which can be described as a matrix with N
// rows and M columns. The color of each pixel is written in a cell of the matrix as a lowercase
// letter of the English alphabet (a-z). For the purposes of the task, a 2d-palindrome is defined
// as a picture which looks the same when rotated by 180 degrees. Your task is to cut a K × K sized
// 2d-palindrome from the given picture in such a way that the number K is the largest possible.

// INPUT
// The first line contains positive integers N and M (1 ≤ N, M ≤ 500), the dimensions of the
// picture. N lines follow, each containing M characters which represent the given picture.


// OUTPUT
// Print the largest possible number K from the task description.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function isSubMatrix2DPalindrome(matrix, xStart, yStart, size) {
  if (yStart + size > matrix.length || xStart + size > matrix[0].length) {
    return false;
  }

  for (let y = 0; y <= (size / 2); y++) {
    for (let x = y; x < size; x++) {
      const startY = yStart + y;
      const endY = (yStart + size) - 1 - y;
      const startX = xStart + x;
      const endX = (xStart + size) - 1 - x;

      if (matrix[startY][startX] !== matrix[endY][endX]) {
        return false;
      }

      if (matrix[startY][endX] !== matrix[endY][startX]) {
        return false;
      }
    }
  }

  return true;
}

function processLines(lines) {
  const matrix = lines.slice(1).map(line => line.split(''));
  let largestPalindrome = 1;

  for (let y = 0; y < matrix.length - largestPalindrome; y++) {
    for (let x = 0; x < matrix[y].length - largestPalindrome; x++) {
      for (let size = largestPalindrome + 1; size < matrix[y].length - x; size++) {
        if (size > largestPalindrome && isSubMatrix2DPalindrome(matrix, y, x, size)) {
          largestPalindrome = size;
        }
      }
    }
  }

  return String(largestPalindrome);
}

describe('Cycle 2: Rotor', () => {
  const palindrome = [
    [1, 2, 3, 4, 5],
    [2, 5, 6, 7, 4],
    [3, 3, 1, 3, 3],
    [4, 7, 6, 5, 2],
    [5, 4, 3, 2, 1],
  ];

  const notPalindrome = [
    [1, 2, 3, 4, 5],
    [2, 3, 6, 4, 4],
    [3, 2, 1, 2, 3],
    [4, 1, 6, 4, 6],
    [5, 4, 3, 2, 1],
  ];

  it('Matrix is a 2D palindrome', () => {
    expect(isSubMatrix2DPalindrome(palindrome, 0, 0, 5)).to.equal(true);
  });

  it('Matrix is a 2D palindrome', () => {
    expect(isSubMatrix2DPalindrome(palindrome, 1, 1, 3)).to.equal(true);
  });

  it('Matrix is not a 2D palindrome', () => {
    expect(isSubMatrix2DPalindrome(notPalindrome, 0, 0, 5)).to.equal(false);
  });

  it('Matrix is a 2D palindrome', () => {
    expect(isSubMatrix2DPalindrome(notPalindrome, 2, 2, 3)).to.equal(true);
  });

  it('Largest palindrome is 4', () => {
    expect(processLines(['5 5', 'abaaa', 'acaab', 'aacaa', 'aabaa', 'acaaa'])).to.equal('4');
  });

  it('Largest palindrome is 3', () => {
    expect(processLines(['5 8', 'wsdvllzh', 'lxrcovnu', 'sfcfcccc', 'hcrcrzaz', 'uscfcccy'])).to.equal('3');
  });

  it('Largest palindrome is 8', () => {
    expect(processLines(['10 10',
      'aaaaaaaaaa', 'abacacbaaa', 'abaaaabaaa', 'abackabaaa', 'abakcabaaa', 'abaaaabaaa',
      'abcacabaaa', 'aaaaaaaaaa', 'aaaaaaaaaa', 'aaaaaaaaaa',
    ])).to.equal('8');
  });
});
