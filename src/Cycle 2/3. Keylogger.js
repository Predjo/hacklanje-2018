
const { expect } = require('chai');

// Mirko has recently started encrypting his devices with passwords.
// Mirko's brother Slavko found the whole thing really suspicious,
// so he decided to install a keylogger on his laptop to find out his
// passwords and discover what Mirko is hiding. A keylogger is a tool which
// 7registers each key pressed on keyboard and saves it to a log file.

// Given the sequence of keys pressed by Mirko while entering his password,
// help Slavko solve the mystery and find out Mirko's password. You may assume that Mirko
// uses only English letters, the caps-lock key and the backspace key, and that his password
// consists of at least one character.

// INPUT
// The first line contains a positive integer N (1 ≤ N ≤ 200), the number of keys pressed by Mirko.
// N lines follow, each of them containing the keys pressed by Mirko, formatted as follows:
// * backspace if it's the backspace key,
// * caps if it's the caps-lock key or
// * a lowercase letter of the English alphabet.

// OUTPUT
// Print Mirko's password.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function processLines(lines) {
  const passwordArray = [];
  let isCapsOn = false;

  lines.slice(1).forEach((line) => {
    switch (line) {
      case 'caps':
        isCapsOn = !isCapsOn;
        break;

      case 'backspace':
        passwordArray.pop();
        break;

      default:
        passwordArray.push(isCapsOn ? line.toUpperCase() : line);
    }
  });

  return passwordArray.join('');
}

describe('Cycle 2: Tennis', () => {
  it('Password is aBc', () => {
    expect(processLines(['5', 'a', 'caps', 'b', 'caps', 'c'])).to.equal('aBc');
  });

  it('Password is abk', () => {
    expect(processLines(['9', 'a', 'b', 'caps', 'b', 'caps', 'c', 'backspace', 'backspace', 'k'])).to.equal('abk');
  });

  it('Password is Hello', () => {
    expect(processLines(['9', 'caps', 'h', 'caps', 'e', 'l', 'l', 'o', 'k', 'backspace'])).to.equal('Hello');
  });
});
