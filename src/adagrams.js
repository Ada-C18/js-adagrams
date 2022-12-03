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
  // Implement this method for wave 1
  /*
  Creates user hand
  */
  const letterBag = createLetterBag();
  const userHand = [];

  while (userHand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterBag.length);
    userHand.push(letterBag[randomIndex]);
    letterBag.splice(randomIndex, 1);
  }
  return userHand;
};

const createLetterBag = () => {
  /* 
  Generates an array that contains an instance of every letter in 
  the LETTER_POOL object, incl duplicates
  */
  const letterBag = [];

  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterBag.push(letter);
    }
  }
  return letterBag;
};

// const generate_letter_list = () => {

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
