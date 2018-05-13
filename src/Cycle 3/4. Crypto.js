
const { expect } = require('chai');

// Mirko wants to send a secret message to his friend Slavko.
// He is afraid that the message could end up in the wrong hands,
// so he decided to encrypt it.
// Let's denote the original message with S, and the encrypted message
// with P. At the beginning, the string P is empty and Mirko is going
// to construct it in several steps:

// He selects all characters at odd positions in string S, and adds them to the end of string P.
// He removes the selected characters from string S.
// If the string S becomes empty, the process finishes with P being the encrypted message.
// Otherwise, the procedure repeats from step 1.

// INPUT
// The first line contains the encrypted message P containing only lowercase letters of
// the English alphabet. The message will consist of at most 1 000 000 characters.

// OUTPUT
// Print the original message S.

/*
  var inputLine;
  while (inputLine = readline()) {
      print(processLine(inputLine));
  }
*/

function processLine(line) {
  const cipher = line.trim().split('');
  const message = [];
  let offset = 0;

  while (cipher.length > 0) {
    const cypherPart = cipher.splice(0, Math.ceil(cipher.length / 2));
    let cypherIndex = 0;
    for (let i = Math.pow(2, offset) - 1; i < line.length; i += Math.pow(2, (offset + 1))) {
      message[i] = cypherPart[cypherIndex];
      cypherIndex++;
    }
    offset++;
  }

  return message.join('');
}

describe('Cycle 3: Crypto', () => {
  it('Message is superman', () => {
    expect(processLine('spraumen')).to.equal('superman');
  });

  it('Message is helloworld', () => {
    expect(processLine('hloolewdlr')).to.equal('helloworld');
  });

  it('Message is stipany', () => {
    expect(processLine('siaytnp')).to.equal('stipany');
  });
});
