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

export const drawLetters = () => {
  //makes copy of letter pool dict
  let newLetterPool = {};
  for (let letter in letterPool) {
    newLetterPool[letter] = letterPool[letter];
  }

  const lettersInHand = [];

  while (lettersInHand.length < 10) {
    //makes list of letter keys
    const letters = Object.keys(newLetterPool);
    //picks random letter from list
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    //adds random letter to hand if value not 0, and subtracts 1
    if (newLetterPool[randomLetter] != 0) {
      lettersInHand.push(randomLetter);
      newLetterPool[randomLetter]--;
    }
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
