
const { expect } = require('chai');

// You're given a chessboard consisting of N rows and N columns. The rows and columns are
// labeled with numbers from 1 to N. You're also given K figures and their positions on the
// board. Each figure can be either a rook or a bishop. Find the area of the largest piece of
// the board with unaffected cells.

// INPUT
// The first line contains positive integers N (1 <= N <= 15) and K (1 <= K <= 10), the numbers
// from the task description. K lines follow, each formatted as: type_of_the_figure X Y where
// type_of_the_figure can be “rook” or “bishop”, X is the row label and Y is the column label.
// You may assume that all of the figures are on different positions.

// OUTPUT
// Print the area of the largest piece of the board with unaffected cells.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function populateBoardPos(x, y, xDirection, yDirection, size, board) {
  if (x >= 0 && x < size && y >= 0 && y < size && board[y] && board[y][x] !== 2) {
    board[y][x] = 1;
    populateBoardPos(x + xDirection, y + yDirection, xDirection, yDirection, size, board);
  }
}

function isZeroSquare(x, y, width, height, board, boardSize) {
  if ((y + height > boardSize) || (x + width > boardSize)) {
    return false;
  }

  return board.slice(y, y + height)
    .reduce((acc, line) => line.slice(x, x + width)
      .reduce((lineAcc, num) => lineAcc + num, 0) + acc, 0) === 0;
}

function countMaxSquare(size, board) {
  let max = 0;
  let currentWidth = 0;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (board[y][x] === 0) {
        currentWidth += 1;

        for (let height = 1; height <= (size - y); height++) {
          if (currentWidth * height > max &&
            isZeroSquare((x - currentWidth) + 1, y, currentWidth, height, board, size)) {
            max = currentWidth * height;
          }
        }
      } else {
        currentWidth = 0;
      }
    }
    currentWidth = 0;
  }

  return max;
}

function processLines(lines) {
  const boardSize = Number(lines[0].split(' ')[0]);
  const moveSize = Number(lines[0].split(' ')[1]);
  const board = []; while (board.push(new Array(boardSize + 1).join('0').split('').map(Number)) < boardSize);

  lines.slice(1, moveSize + 1).forEach((line) => {
    const lineParts = line.split(' ');
    const figure = lineParts[0];
    const [x, y] = lineParts.slice(1).map(part => Number(part) - 1);

    board[y][x] = 2;

    if (figure === 'rook') {
      [[0, -1], [-1, 0], [0, 1], [1, 0]].forEach(([xDirection, yDirection]) => {
        populateBoardPos(x + xDirection, y + yDirection, xDirection, yDirection, boardSize, board);
      });
    }

    if (figure === 'bishop') {
      [[1, -1], [-1, 1], [-1, -1], [1, 1]].forEach(([xDirection, yDirection]) => {
        populateBoardPos(x + xDirection, y + yDirection, xDirection, yDirection, boardSize, board);
      });
    }
  });

  return String(countMaxSquare(boardSize, board));
}

describe('Cycle 2: Chess', () => {
  const testBoard = [
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 2, 0, 1, 0, 1],
    [0, 0, 1, 0, 2, 0, 1, 0],
    [0, 1, 0, 1, 0, 2, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1],
  ];

  it('Should detect square at 3 0 2', () => {
    expect(isZeroSquare(2, 0, 3, 2, testBoard, 8)).to.equal(true);
  });

  it('Should not detect square at 4 7 3', () => {
    expect(isZeroSquare(4, 7, 3, 3, testBoard, 8)).to.equal(false);
  });

  it('Max square should be 6', () => {
    expect(countMaxSquare(8, testBoard)).to.equal(6);
  });

  it('Largest square unaffected is 16', () => {
    expect(processLines(['8 1', 'rook 4 4'])).to.equal('16');
  });

  it('Largest square unaffected is 9', () => {
    expect(processLines(['8 3', 'rook 4 4', 'rook 5 5', 'rook 6 6'])).to.equal('9');
  });

  it('Largest square unaffected is 4', () => {
    expect(processLines(['10 12', 'bishop 1 1', 'bishop 9 1', 'rook 5 5', 'rook 1 1',
      'rook 2 1', 'rook 3 1', 'rook 4 1', 'rook 6 1', 'rook 7 1', 'rook 8 1',
      'bishop 3 10', 'rook 1 6',
    ])).to.equal('4');
  });

  it('Largest square unaffected is 6', () => {
    expect(processLines(['8 3', 'bishop 4 4', 'bishop 5 5', 'bishop 6 6'])).to.equal('6');
  });

  it('Largest square unaffected is 9', () => {
    expect(processLines(['7 3', 'rook 4 5', 'bishop 6 4', 'bishop 6 7'])).to.equal('9');
  });

  it('Largest square unaffected is 49', () => {
    expect(processLines(['20 3', 'rook 4 5', 'bishop 6 4', 'bishop 6 7'])).to.equal('56');
  });
});

