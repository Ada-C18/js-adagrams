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


export const drawLetters = () => {
  // Implement this method for wave 1
  const letterBank = [];
  const indexNumbersChosen = [];
  const handOfLetters = [];
  
  for (const [k, v] of Object.entries(LETTERPOOL)) {
    letterBank.push(...k.repeat(v));
  }

  while (handOfLetters.length < 10) {
    let randomIndexNumber = Math.floor(Math.random() * letterBank.length + 1);

    if (!indexNumbersChosen.includes(randomIndexNumber)) {
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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
