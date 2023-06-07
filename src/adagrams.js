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
  Z: 1
}

export const drawLetters = () => {

  const _ = require('lodash');
  const letterList = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)) {
    letterList.push(...Array(freq).fill(letter));
  }
  return _.sampleSize(letterList, 10);

  // build an array of letters from the letter pool
  // let letter_list = [];
  // for (let letter in LETTER_POOL) {
  //   let freq = LETTER_POOL[letter];
  //   for (let i = 0; i < freq; i++) {
  //     letter_list.push(letter);
  //   }
  // }

  // drawing letters
  // let drawn_letters = [];
  // while (letter_list.length > 0 && drawn_letters.length < 10) {
  //   let randomIndex = Math.floor(Math.random() * letter_list.length);
  //   let randomLetter = letter_list.splice(randomIndex, 1)[0];
  //   drawn_letters.push(randomLetter);
  // }

  // return drawn_letters;
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
