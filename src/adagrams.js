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

const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

export const drawLetters = () => {
  const copiedLetterPool = JSON.parse(JSON.stringify(LETTER_POOL));
  const letterBank = [];
  while (letterBank.length < 10) {
    let letter = getRandomKey(copiedLetterPool);
    if (copiedLetterPool[letter] > 0) {
      letterBank.push(letter);
      copiedLetterPool[letter] -= 1;
    }
  }
  return letterBank;
};
drawLetters();

export const usesAvailableLetters = (input, lettersInHand) => {
  const drawnLetters = lettersInHand.slice();
  for (const i of input.toUpperCase()) {
    if (!drawnLetters.includes(i)) {
      return false;
    } else {
      drawnLetters.splice(i, 1);
    }
  }
  return true;
};
usesAvailableLetters();


// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
