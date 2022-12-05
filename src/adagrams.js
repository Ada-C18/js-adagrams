import _ from "lodash";

export const drawLetters = () => {
  // Implement this method for wave 1
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
  const completeLetterList = [];
  for (let [letter, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      completeLetterList.push(letter);
    }
  }
  return _.sampleSize(completeLetterList, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  let inputLetterCount = {};
  for (let char of input) {
    if (!(char in inputLetterCount)) inputLetterCount[char] = 0;
    inputLetterCount[char]++;
  }
  for (let letter of lettersInHand) {
    if (letter in inputLetterCount) inputLetterCount[letter]--;
  }
  for (let letter in inputLetterCount) {
    if (inputLetterCount[letter] > 0) return false;
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterPool = {
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  word = word.toUpperCase();
  let totalScore = 0;
  for (let letter of word) {
    if (letter in letterPool) {
      totalScore += letterPool[letter];
    } else {
      totalScore++;
    }
  }
  if (7 <= word.length && word.length <= 10) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
