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

const SCORE_DICT = {
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
  const letterPoolArray = [];
  for (const [k, v] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < v; i++) {
      letterPoolArray.push(k);
    }
  }

  let hand = [];
  for (let i = 0; i < 10; i++) {
    const pickedLetter = letterPoolArray.pop(
      Math.floor(Math.random() * letterPoolArray.length)
    );
    hand.push(pickedLetter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1, null);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;

  word.forEach((letter) => {
    score += SCORE_DICT[letter.toUpperCase()];
  });

  if (word.length >= 7) {
    score += 8;
  }

  return score;
};

/* // alternative solution to wave 3 with forEach loop:
const scoreWord = (word) => {
  let score = 0;
  const wordArray = word.split('');

  wordArray.forEach((letter) => {
    score += SCORE_DICT[letter.toUpperCase()];
    console.log(SCORE_DICT[letter.toUpperCase()]);
  });

  if (wordArray.length >= 7) {
    score += 8;
  }

  return score;
}; */

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
