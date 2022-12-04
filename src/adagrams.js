// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const lettersFrequency = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
// for (let i = 0; i < alphabet.length; i++) {
//   letterPool[alphabet[i]] = lettersFrequency[i];
// }
const LETTERPOOL = {
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
};

const SCORECHART = {
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
  Z: 10
}

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterBank = [];
  const indexNumbersChosen = [];
  const handOfLetters = [];
  
  for (const [k, v] of Object.entries(LETTERPOOL)) {
    letterBank.push(...k.repeat(v));
  }

  while (handOfLetters.length < 10) {
    let randomIndexNumber = Math.floor(Math.random() * letterBank.length);

    if (!(randomIndexNumber in indexNumbersChosen)) {
      handOfLetters.push(letterBank[randomIndexNumber]);
      indexNumbersChosen.push(randomIndexNumber);
    }
  }
  return handOfLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCount = {};
  for (const letter of lettersInHand) {
    if (lettersInHandCount.hasOwnProperty(letter)) {
      lettersInHandCount[letter] += 1;
    } else {
      lettersInHandCount[letter] = 1;
    }
  }

  for (const letter of input) {
    if (!(lettersInHandCount.hasOwnProperty(letter)) || lettersInHandCount[letter] === 0) {
      return false;
    } else {
      lettersInHandCount[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const wordInUpper = word.toUpperCase();
  let score = 0;

  for (const letter of wordInUpper) {
    score += SCORECHART[letter];
  }

  if (wordInUpper.length > 6 && wordInUpper.length < 11) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
