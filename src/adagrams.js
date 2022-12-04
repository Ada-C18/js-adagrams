export const drawLetters = () => {
  /*
  Input: none
  Output: array of 10 strings, where each string contains 1 letter
  */
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

  const handOfLetters = [];

  while (handOfLetters.length < 10) {
    const randomLetter = weightedRandom(LETTER_POOL);
    if (LETTER_POOL[randomLetter] != 0) {
      handOfLetters.push(randomLetter);
      LETTER_POOL[randomLetter] -= 1;
    }
  }
  return handOfLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  /*
  Input: two parameters: input, which is a string, and lettersHand, which is an array of strings
  Output: returns true is all letters in input are present in letterHand in the right quantities, or false if they are not
  */
  const usedLetters = [];
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i].toUpperCase();
    if (!lettersInHand.includes(currentLetter)) {
      return false;
    } else {
      usedLetters.push(currentLetter);
      lettersInHand.splice(lettersInHand.indexOf(currentLetter), 1);
    }
  }
  if (usedLetters.length === input.length) {
    return true;
  }
};

export const scoreWord = (word) => {
  /*
  Input: a string of characters
  Output: integer representing the number of points
  */
  const POINTS = {
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
  const bonusLengths = [7, 8, 9, 10];
  let score = 0;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    score += POINTS[currentLetter];
  }
  if (bonusLengths.includes(word.length)) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

// helper functions
const weightedRandom = (items) => {
  /*
  Input: an object
  Output: a randomly chosen item from the object keys, based on the weightings in the object values
  */
  const cummulativeWeights = [];
  const itemKeys = Object.keys(items);
  const itemValues = Object.values(items);

  for (let i = 0; i < itemValues.length; i++) {
    cummulativeWeights[i] = itemValues[i] + (cummulativeWeights[i - 1] || 0);
  }

  const randomNumber =
    Math.random() * cummulativeWeights[cummulativeWeights.length - 1];

  for (let j = 0; j < cummulativeWeights.length; j++) {
    if (cummulativeWeights[j] >= randomNumber) {
      return itemKeys[j];
    }
  }
};

Object.values = function (obj) {
  return Object.keys(obj).map((key) => obj[key]);
};
