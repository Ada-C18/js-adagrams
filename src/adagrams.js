const weightedRandom = (items) => {
  /*
  Input: an object
  Output: a weighted random item chosen from the object
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

export const drawLetters = () => {
  /*
  Input: none
  Output: array of 10 strings, where each string contains 1 letter
  */
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

  const handOfLetters = [];

  while (handOfLetters.length < 10) {
    const randomLetter = weightedRandom(letterPool);
    if (letterPool[randomLetter] != 0) {
      handOfLetters.push(randomLetter);
      letterPool[randomLetter] -= 1;
    }
  }
  return handOfLetters;
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
