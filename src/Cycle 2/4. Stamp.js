
const { expect } = require('chai');

// Bob is working as a stamp designer. Recently he drew 2 stamp designs on separate transparent
// papers. Each stamp can be described as a sequence of colored rectangles. None of the rectangles
// of the same stamp overlap. Unfortunately, he wasn't satisfied with the two designs, so he
// decided to merge them into one by placing the transparent paper with the first design on top
// of the other paper. Determine the total colored area of the merged designs.

// INPUT
// The first line contains a positive integer N (1 ≤ N ≤ 50), the number of rectangles of the
// first stamp. Then N lines follow, each representing one rectangle on the first stamp
// described with four integers: X1, Y1, X2 and Y2 (0 ≤ X1 < X2 ≤ 10000, 0 ≤ Y1 < Y2 ≤ 10000).
// (X1, Y1) is the bottom-left and (X2, Y2) is the top-right coordinate. The following line
// contains a positive integer M (1 ≤ M ≤ 50), the number of rectangles of the second stamp.
// Then M lines follow, each containing four integers X1, Y1, X2 and Y2
// (0 ≤ X1 < X2 ≤ 10000, 0 ≤ Y1 < Y2 ≤ 10000). (X1, Y1) is the bottom-left and (X2, Y2)
// is the top-right coordinate of the second stamp.

// OUTPUT
// Print the colored area after merging the 2 stamps.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function processLines(lines) {
  const board = [];
  let sum = 0;

  lines.forEach((line) => {
    const lineNums = line.split(' ').map(char => Number(char));

    if (lineNums.length > 1) {
      const [x1, y1, x2, y2] = lineNums;
      let surface = (x2 - x1) * (y2 - y1);

      board.forEach((pastLine) => {
        const [x3, y3, x4, y4] = pastLine;

        const xOverlap = Math.max(Math.min(x2, x4) - Math.max(x1, x3), 0);
        const yOverlap = Math.max(Math.min(y2, y4) - Math.max(y1, y3), 0);
        const overlapSurface = xOverlap * yOverlap;
        surface -= overlapSurface;
      });

      sum += surface;
      board.push(lineNums);
    }
  });

  return String(sum);
}

describe('Cycle 2: Stamp', () => {
  it('Number of squares is 7', () => {
    expect(processLines(['1', '2 2 4 4', '1', '3 3 5 5'])).to.equal('7');
  });

  it('Number of squares is 24', () => {
    expect(processLines(['2', '1 1 5 4', '2 4 9 5', '2', '4 4 8 6', '2 1 6 2', '1 2 3 4'])).to.equal('24');
  });

  it('Number of squares is 25', () => {
    expect(processLines(['3', '1 1 5 4', '2 4 9 5', '0 0 1 1', '2', '4 4 8 6', '2 1 6 2'])).to.equal('25');
  });
});
