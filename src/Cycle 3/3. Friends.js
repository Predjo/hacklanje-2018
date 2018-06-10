
const { expect } = require('chai');

// Since a new social network called Happy Society has emerged, N members
// labeled with numbers from 1 to N have created new accounts. Each member
// can add other members as their friends. Friendships are mutual, meaning
// if person A is a friend to person B, then person B is a friend to person A.

// Due to a promo campaign on the social network to increase the total number
// of friendships, all members decided to get involved. Every morning, each member
// goes through their friends' friend list and writes all members' labels on a piece of paper.
// To be more precise, member A will write down member C's label if C is not friend of A, but
// there is a member B that is a mutual friend of A and C. In the evening, each member will send
// friend requests to all the members he marked earlier that day.

// Given the initial list of friendships, determine the number of days that will pass until
// everyone is friends with everyone else.

// INPUT
// First line contains natural numbers N (1 <= N <= 4000) and M (1 <= M <= 10000),
// the number of users and friendships.
// M lines follow, each representing one friendship in form of two numbers A and
// B (1 <= A, B <= N, A != B), as the labels of two users that are friends at
// the beginning of the campaign.

// OUTPUT
// Print the number of days from the task description. If it's not possible to
// make everyone friends with everyone else, print -1.

/*
  let inputLine, lines = [];

  while (inputLine = readline()) {
      lines.push(inputLine)
  }

  print(processLines(lines));
*/

function processLines(lines) {
}

describe('Cycle 3: Friends', () => {
  it('Requires 2 days', () => {
    expect(processLines(['4 3', '1 2', '2 3', '3 4'])).to.equal('2');
  });

  it('Requires 0 days', () => {
    expect(processLines(['3 3', '1 2', '2 3', '1 3'])).to.equal('0');
  });

  it('Users can never become friends', () => {
    expect(processLines(['4 2', '1 2', '3 4'])).to.equal('-1');
  });
});
