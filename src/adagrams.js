// import { _ } from "core-js";
// import { keys } from "core-js/core/array";
// import { random } from "core-js/core/number";

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
  Z: 1,
};

export const createLetterPool = () => {
  const letterPoolList = [];
  for (const [letter, value] of Object.entries(LETTERPOOL)) {
    letterPoolList.push(...letter.repeat(value));
  }
  return letterPoolList;
};

export const findRandomLetter = (allLetters) => {
  let randomIndex = Math.floor(Math.random() * allLetters.length);
  return allLetters[randomIndex];
};

export const drawLetters = () => {
  let allLetters = createLetterPool(LETTERPOOL);
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * allLetters.length);
    hand.push(allLetters[randomIndex]);
    allLetters.splice(randomIndex, 1);
  }
  return hand;
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
