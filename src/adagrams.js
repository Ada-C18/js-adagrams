import { PassThrough } from "stream";

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

const valueOfLetter = {
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
  let allLetters = "";
  for (let letter in letterPool) {
    const amountOftimes = letterPool[letter];
    for (let i = 0; i < amountOftimes; i++) {
      allLetters += letter;
    }
  }
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let letter = allLetters.charAt(
      Math.floor(Math.random() * allLetters.length)
    );
    allLetters = allLetters.replace(letter, "");
    hand.push(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let arrayOfInputValues = Array.from(input);
  let allLettersInHand = "";
  for (let letter of lettersInHand) {
    allLettersInHand += letter;
  }
  for (let i = 0; i < arrayOfInputValues.length; i++) {
    let isStringValid = allLettersInHand.includes(arrayOfInputValues[i]);
    if (isStringValid === true) {
      allLettersInHand = allLettersInHand.replace(arrayOfInputValues[i], "");
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // return the score
  let score = 0;
  word = word.toUpperCase();

  console.log(`This is the word length ${word.length}`);
  // if (word.length === 0) {
  //   return score;
  // }

  // word is a string
  // need to seperate the characters

  //This idenifies ever letter in the word
  for (let letter of word) {
    score += valueOfLetter[letter];
  }
  return score;
  //   //This idenifies ever letter in the word
  // for (let letter of word) {
  //     // console.log(letter);
  //     PassThrough;
  //   }

  //   // this identifies value of each letter
  //   for (let letter in valueOfLetter) {
  //     const letterValue = valueOfLetter[letter];
  //     console.log(letterValue);
  //   }
  // };
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
