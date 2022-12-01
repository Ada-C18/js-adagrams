const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

/* This function builds an array of letters from an object of letter frequencies. 

LETTER_POOL is Not A Map! So keys() and entries() don't work. 
*/

const buildDeck = function (freqsMap) {
  let deck = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const char of letters) {
    for (let i = 0; i < freqsMap[char]; i++) {
      deck.push(char);
    }
  }
  return deck;
};

/* This function draws 10 letters from a deck.

References LETTER_POOL from the outer scope. It shuffles
the deck in-place by swapping characters at the head with 
a random other character in the deck. 

It passes the test but I'm not certain if it meets the requirements 
for "draw with replacement."
*/

export const drawLetters = () => {
  let deck = buildDeck(LETTER_POOL);
  for (let i = 0; i < 10; i++) {
    // find a random index.
    let randomIndex = Math.floor(Math.random() * deck.length);

    // swap pairwise.
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
  return deck.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
