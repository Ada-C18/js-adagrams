// import { random } from "core-js/core/number";

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

// create array of all letters
const createLetterList = letters => {
  const letterList = [];
  for (const letter in letters) {
    for(let i = 0; i < letters[letter]; i++) {
      letterList.push(letter);
    }
  }
  return letterList;
}

// generates random letter
const generateRandomLetter = () => {
  const letters = createLetterList(LETTER_POOL);
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

// draw 10 letters into hand
// ensure each drawn letter is drawn no more than the total amount of that letter
export const drawLetters = () => {
  // Implement this method for wave 1
  const lettersDrawnForHand = [];

  while (lettersDrawnForHand.length < 10) {
    let randomLetter = generateRandomLetter();
    const numberOfOccurences = lettersDrawnForHand.filter(element => element === randomLetter).length
    if ( numberOfOccurences < LETTER_POOL[randomLetter]){
      lettersDrawnForHand.push(randomLetter);
    }
  }
  return lettersDrawnForHand;
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
