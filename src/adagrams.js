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

It passes the tests but I'm not certain if it meets the requirements 
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
  const freqMapHand = {};
  lettersInHand.forEach(function (letter) {
    freqMapHand[letter]
      ? (freqMapHand[letter] += 1)
      : (freqMapHand[letter] = 1);
  });
  for (const letter of input) {
    if (!freqMapHand[letter]) {
      return false;
    } else {
      freqMapHand[letter] -= 1;
    }
  }
  return true;
};

// #### Score chart

// |            Letter            | Value |
// | :--------------------------: | :---: |
// | A, E, I, O, U, L, N, R, S, T |   1   |
// |             D, G             |   2   |
// |          B, C, M, P          |   3   |
// |        F, H, V, W, Y         |   4   |
// |              K               |   5   |
// |             J, X             |   8   |
// |             Q, Z             |  10   |

const SCORE_TABLE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

const WORD_LENGTH_BONUS = 8;
const WORD_LENGTH_THRESHOLD = 7;

/* Find the sum of a list of integers.

useful enough to pull out into a helper.
*/
const sum = function (integerList) {
  return integerList.reduce((total, curr) => total + curr, 0);
};

/* Find the total score (int) for a word (string). 

Uses SCORE_TABLE to define base score and WORD_LENGTH_BONUS and 
WORD_LENGTH_THRESHOLD to define bonus for word length. 
*/
export const scoreWord = (word) => {
  const scoreList = word
    .toUpperCase()
    .split("")
    .map((c) => SCORE_TABLE[c]);
  let wordTotal = sum(scoreList);
  // If the length of the word is 7, 8, 9, or 10,
  // then the word gets an additional 8 points
  if (word.length >= WORD_LENGTH_THRESHOLD) {
    wordTotal += WORD_LENGTH_BONUS;
  }
  return wordTotal;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
