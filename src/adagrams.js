//helper functions

// const randomInt = function (max) {
//   return Math.floor(Math.random() * max);
// };
const randomInt = (max) => Math.floor(Math.random() * max);

const removeLetter = function (arr, target) {
  let i = arr.indexOf(target);
  if (i > -1) {
    arr.splice(i, 1);
  }
  return arr;
};

//main functions

//Wave 1
export const drawLetters = () => {
  const bagOfLetters = {
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
  const arrayOfLetters = [];
  Object.keys(bagOfLetters).forEach((letter) => {
    for (let i = 0; i < bagOfLetters[letter]; i++) {
      arrayOfLetters.push(letter);
    }
  });
  const hand = [];
  while (hand.length !== 10) {
    let letterIndex = randomInt(arrayOfLetters.length);
    hand.push(arrayOfLetters[letterIndex]);
    removeLetter(arrayOfLetters, arrayOfLetters[letterIndex]);
  }
  return hand;
};

//wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  const inputArray = Array.from(input);
  for (let letter of inputArray) {
    console.log(letter);
    if (lettersInHand.includes(letter) === false) {
      return false;
    }
    removeLetter(lettersInHand, letter);
  }
  return true;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
