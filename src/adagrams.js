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

const uppercaseArray = (str) => {
  let string = str.toUpperCase();
  return Array.from(string);
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
  const inputArray = uppercaseArray(input);
  for (let letter of inputArray) {
    if (lettersInHand.includes(letter) === false) {
      return false;
    }
    removeLetter(lettersInHand, letter);
  }
  return true;
};

//wave 3
export const scoreWord = (word) => {
  let score = 0;
  if (word === false) {
    return 0;
  }

  const scoreboard = {
    1: "A, E, I, O, U, L, N, R, S, T",
    2: "D, G",
    3: "B, C, M, P",
    4: "F, H, V, W, Y",
    5: "K",
    8: "J, X",
    10: "Q, Z",
  };
  const wordArray = uppercaseArray(word);

  wordArray.forEach((letter) => {
    for (const [key, value] of Object.entries(scoreboard)) {
      if (value.includes(letter)) {
        score += parseInt(key);
      }
    }
  });
  if (wordArray.length > 6) {
    score += 8;
  }
  return score;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
