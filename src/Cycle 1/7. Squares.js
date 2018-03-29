
const { expect } = require('chai');

// You are in squareland. The world is a square board (side = 10 meters).
// The buildings are little squres (side = 1 meter).
// The blocks are placed on the board from top to bottom and stacked on top of other blocks.

// You have to put a large block (side = 5 meters) inside, but it may not fit.
// In that case, you have to remove some of the small blocks, but only as few as necessary
//  to fit the big block.

// Your input is an array of numbers, corresponding to the number of small blocks in each
//  column of the board.
// Return the minimal number of small blocks to remove to fit the big block.

/*
  let inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(inputLine) {
  const box = 10;
  const smallBlock = 1;
  const bigBlock = 5;

  const blockArray = inputLine.split(' ').map(num => Number(num));

  const isStableFloor = (x, y) => {
    if (y === 0) {
      return true;
    }

    return blockArray
      .slice(x, x + bigBlock)
      .reduce((isStable, height) => isStable && height >= y, true);
  };

  const removeCount = (x, y) => (
    blockArray
      .slice(x, x + bigBlock)
      .reduce((count, height) => (count + height) - y, 0)
  );

  let min = box * box;

  for (let x = 0; x <= box - bigBlock; x += smallBlock) {
    for (let y = 0; y <= box - bigBlock; y += smallBlock) {
      if (isStableFloor(x, y)) {
        const newMin = removeCount(x, y);
        if (newMin < min) {
          min = newMin;
        }
      }
    }
  }

  return min;
}

describe('Cycle 1: Squares', () => {
  it('Should remove 0 squares', () => {
    expect(processLine('1 1 1 1 1 0 0 1 1 1')).to.equal(0);
  });

  it('Should remove 7 squares', () => {
    expect(processLine('10 10 10 10 10 0 0 1 5 1')).to.equal(7);
  });

  it('Should remove 3 squares', () => {
    expect(processLine('10 10 10 10 10 1 0 1 1 1')).to.equal(4);
  });

  it('Should remove 5 squares', () => {
    expect(processLine('5 5 10 5 5 1 0 1 7 1')).to.equal(5);
  });
});
