const letterPool = {
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

const letterValues = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

export const drawLetters = () => {
  let letterCount = {};
  let drawnLetters = [];
  while (drawnLetters.length < 10) {
    const letter =
      Object.keys(letterPool)[
        Math.floor(Math.random() * Object.keys(letterPool).length)
      ];

    if (letter in letterCount && letterCount.letter < letterPool.letter) {
      letterCount.letter += 1;
      drawnLetters.push(letter);
    } else if (!(letter in letterCount)) {
      letterCount[letter] = 1;
      drawnLetters.push(letter);
    }
  }

  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();

  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(letter, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {

  word = word.toUpperCase();
  let wordValue = 0;

  for (const letter of word) {
      if (letter in letterValues) {
          wordValue += letterValues[letter]
      }
    }
  if (word.length > 6) {
      wordValue += 8
  }
  return wordValue
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
