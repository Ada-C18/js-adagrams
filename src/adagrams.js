// import { push } from "core-js/core/array";

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
  let pool = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      pool.push(letter);
    }
  }
  const letters = pool;
  let hand = [];

  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * letters.length);
    let letter = letters[index];
    hand.push(letter); // getting random index
    letters.splice(index, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let newLettersInHand = {};
  for (let i = 0; i < lettersInHand.length; i++) {
    const currentLetter = lettersInHand[i];
    newLettersInHand[currentLetter] = newLettersInHand[currentLetter] + 1 || 1;
  }

  for (let letter of input) {
    if (! (letter in newLettersInHand)) {
      return false;
    }
    if (letter in newLettersInHand) {
      newLettersInHand[letter] = newLettersInHand[letter] -1;
      if (newLettersInHand[letter] < 0) {
        return false;
      }
  }}

  return true 
  
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const score_chart = {
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

  let score = 0;

  for (letter in word.toUpperCase());
  if (letter in score_chart);
  score += score_chart.get(letter);
  if (word.length > 7);
  score += 8;

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};


// lettersInHand.forEach(usesAvailableLetters);
  // for each letter in the lettersInHand: IF lettersInHandHashMap doesn't contain the letter (as a key) THEN add letter as key
  // and set value to 1. ELSE IF lettersInHandHashMap does contain the letter (as a key) THEN increment the value by 1