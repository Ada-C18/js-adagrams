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

export const generateLetterPool = () => {
  const letterPool = [];
  const letterQuantities = Object.entries(LETTER_POOL);
  for (let [letter, quantity] of letterQuantities) {
    for (let i = 0; i < quantity; i++) {
      letterPool.push(letter);
    }
  }
  return letterPool;
};

export const drawLetters = () => {
  // no parameters, returns array of ten strings
  // draw letters from a pool of letters
  /* i want to go through each item in the letter pool and append x to
    a list y amount of times, where x is the key and y is the value
    then i want to return the list
  */
  const letterPool = generateLetterPool();
  const playerHand = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * letterPool.length);
    playerHand.push(letterPool[randomNum]);
    letterPool.splice(randomNum, 1);
  }
  return playerHand;
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
