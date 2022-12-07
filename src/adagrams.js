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

let letterPoolArray = [];
Object.keys(letterPool).forEach((letter) => {
  for (let i = 0; i < letterPool[letter]; i++) {
    letterPoolArray.push(letter);
  }
});

export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = [];
  let poolCopy = [...letterPoolArray];
  const handLength = 10;
  for (let i = 0; i < handLength; i++) {
    let arrayLength = poolCopy.length;
    let letterIndex = Math.floor(Math.random() * arrayLength);
    hand.push(poolCopy[letterIndex]);
    poolCopy.splice(letterIndex, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputUpperCase = input.toUpperCase();
  let result;
  for (let i = 0; i < input.length; i++) {
    if (inputUpperCase.includes(lettersInHand[i])) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
