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

const SCORE_CHART = {
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

export const drawLetters = () => {
  let availableLetters = [];
  let hand = [];

  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      availableLetters.push(key);
    }
  }

  for (let i = 0; i < 10; i++) {
    let letter =
      availableLetters[Math.floor(Math.random() * availableLetters.length)];
    hand.push(letter);
    let index = availableLetters.indexOf(letter);
    availableLetters.splice(index, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letters = {};
  let alphaStart = 65;
  for (let i = 0; i < 26; i += 1) {
    letters[String.fromCharCode(alphaStart + i)] = 0;
  }

  for (let letter of lettersInHand) {
    letters[letter] += 1;
  }

  for (let character of input) {
    // construct a new RegExp object. 'gi' is global, case-insensitive
    let re = new RegExp(character, "gi");
    // pass the new RegExp object into match (unable to use regular 'character' here)
    let count = input.match(re).length;
    if (count > letters[character]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;
  for (let letter of word) {
    score += SCORE_CHART[letter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
