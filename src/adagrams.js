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

export const drawLetters = () => {
  /*
  (1-1) create letter bank from LETTER_POOL
  (1-2) letter cannot repeat greater than quantity of LETTER_POOL
  */
  let letters = [];
  let letterPool = LETTER_POOL;
  let i = 0;
  while (i < 10) {
    let letter =
      Object.keys(LETTER_POOL)[
        Math.floor(Math.random() * Object.keys(LETTER_POOL).length)
      ];
    if (letterPool[letter] > 0) {
      letters.push(letter);
      letterPool[letter] = letterPool[letter] - 1;
    }
    i++;
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  /*
  (1) read letter from word (in str) from user
  (2) read letter_bank (in list) from the output of draw_letters()
  (3) check if each letter in the letter_bank
  */

  input = input.toUpperCase();
  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      let i = lettersInHand.indexOf(letter);
      lettersInHand.splice(i, 1);
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
