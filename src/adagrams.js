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
  // assumes equal probabily for every letter in the alphabet (which is not true)
  // const keys = Object.keys(letterPool);
  // const pickLetter = () => {
  //   let letter = keys[Math.floor(Math.random() * keys.length)];
  //   return letter;
  // };

  // const randomLetters = [];

  // while (randomLetters.length <= 10) {
  //   if (randomLetters.length === 10) break;
  //   let letter = pickLetter();
  //   const check = randomLetters.filter((character) => character === letter);
  //   if (check.length < letterPool[letter]) {
  //     randomLetters.push(letter);
  //   }
  // }
  // return randomLetters;

  const letters = []; // created this to make a more accurate draw reflective of probability (instead of 1/26 from drawing from keys)
  for (const key of Object.keys(letterPool)) {
    const looped = letterPool[key];
    for (let i = 0; i < looped; i++) {
      letters.push(key);
    }
  }
  const pickLetter = () => {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
  };

  const randomLetters = [];

  while (randomLetters.length <= 10) {
    if (randomLetters.length === 10) break;
    let letter = pickLetter();
    const check = randomLetters.filter((character) => character === letter);
    if (check.length < letterPool[letter]) {
      randomLetters.push(letter);
    }
  }
  return randomLetters;
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
