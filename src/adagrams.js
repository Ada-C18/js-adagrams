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

const _ = require('lodash');

export const drawLetters = () => {
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
  const lettersInHand_deepcopy = _.cloneDeep(lettersInHand);
  for (let letter of input.toUpperCase()) {
    if (lettersInHand_deepcopy.includes(letter)) {
      lettersInHand_deepcopy.splice(lettersInHand_deepcopy.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;

};

export const scoreWord = (word) => {
  const values_map = new Map([
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10]
  ]);

  let word_value = 0;
    for (let letter of word) {
        let letter_value = [...values_map].find(([key, value]) => key.includes(letter.toUpperCase()))[1];
        word_value += letter_value;
    }
    if (word.length >= 7 && word.length <= 10) {
        word_value += 8;
    }
    return word_value;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
