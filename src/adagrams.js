const LETTERPOOL = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

const LETTERPOINTS = {
  A: 1,
  N: 1,
  B: 3,
  O: 1,
  C: 3,
  P: 3,
  D: 2,
  Q: 10,
  E: 1,
  R: 1,
  F: 4,
  S: 1,
  G: 2,
  T: 1,
  H: 4,
  U: 1,
  I: 1,
  V: 4,
  J: 8,
  W: 4,
  K: 5,
  X: 8,
  L: 1,
  Y: 4,
  M: 3,
  Z: 10,
};

export const drawLetters = () => {
  let letterPool = Object.entries(LETTERPOOL);
  let hand = [];
  let i = 0;
  while (i < 10) {
    let letterIndex = Math.floor(Math.random() * 26);
    if (letterPool[letterIndex][1] > 0) {
      hand.push(letterPool[letterIndex][0]);
      letterPool[letterIndex][1] -= 1;
      i += 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let handCount = substringCount(lettersInHand);
  let inputCount = substringCount(input.toUpperCase());
  for (const letter in inputCount) {
    if (handCount[letter] || inputCount[letter] > handCount[letter]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let total_score = word
    .toUpperCase()
    .split("")
    .map((letter) => LETTERPOINTS[letter])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if (word.length > 6) {
    total_score += 8;
  }
  return total_score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

// HELPER FUNCTIONS
const substringCount = (string) => {
  let count = {};
  for (const character of string) {
    if (count[character] === undefined) {
      count[character] = 1;
    } else {
      count[character] += 1;
    }
  }
  return count;
};
