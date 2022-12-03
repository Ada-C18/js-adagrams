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
  let lettersStr = "";
  for (const letter in LETTER_POOL) {
    const allLetters = letter.repeat(LETTER_POOL[letter]);
    lettersStr += allLetters;
  }

  const lettersArr = lettersStr.split("");

  const drawnIndices = [];
  while (drawnIndices.length < 10) {
    const indexLetter = Math.floor(Math.random() * lettersArr.length);
    if (!drawnIndices.includes(indexLetter)) {
      drawnIndices.push(indexLetter);
    }
  }

  const drawnLetters = [];
  for (const index of drawnIndices) {
    const addLetter = lettersArr[index];
    drawnLetters.push(addLetter);
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterFrequency = {};

  for (const letter of lettersInHand) {
    if (letter in letterFrequency === false) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] += 1;
    }
  }

  for (const char of input) {
    if (letterFrequency[char] === undefined) {
      return false;
    } else if (letterFrequency[char] === 0) {
      return false;
    } else if (letterFrequency[char] >= 1) {
      letterFrequency[char] -= 1;
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
