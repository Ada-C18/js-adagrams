const letterObj = {
  A: { frequency: 9, score: 1 },
  B: { frequency: 2, score: 3 },
  C: { frequency: 2, score: 3 },
  D: { frequency: 4, score: 2 },
  E: { frequency: 12, score: 1 },
  F: { frequency: 2, score: 4 },
  G: { frequency: 3, score: 2 },
  H: { frequency: 2, score: 4 },
  I: { frequency: 9, score: 1 },
  J: { frequency: 1, score: 8 },
  K: { frequency: 1, score: 5 },
  L: { frequency: 4, score: 1 },
  M: { frequency: 2, score: 3 },
  N: { frequency: 6, score: 1 },
  O: { frequency: 8, score: 1 },
  P: { frequency: 2, score: 3 },
  Q: { frequency: 1, score: 10 },
  R: { frequency: 6, score: 1 },
  S: { frequency: 4, score: 1 },
  T: { frequency: 6, score: 1 },
  U: { frequency: 4, score: 1 },
  V: { frequency: 2, score: 4 },
  W: { frequency: 2, score: 4 },
  X: { frequency: 1, score: 8 },
  Y: { frequency: 2, score: 4 },
  Z: { frequency: 1, score: 10 },
};

export const drawLetters = () => {
  // creates a letter pool based on the frequency of that letter in letterObj
  let letterPool = [];
  for (const letter in letterObj) {
    letterPool += letter.repeat(letterObj[letter].frequency)
  };
  letterPool = letterPool.split('');

  // draws 10 letters from letterPool based on a random index and removes drawn letters from the pool.
  let letterDraw = [];
  while (letterDraw.length < 10) {
    const randomIndex = Math.floor(letterPool.length * Math.random());
    letterDraw.push(letterPool[randomIndex]);
    letterPool.splice(randomIndex, 1)
  };
  return letterDraw
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter in input.toUpperCase()) {
    if (!lettersInHand.includes(letter)) {
      return false 
    };
    let letterIndex = lettersInHand.indexOf(letter);
    lettersInHand.splice(letterIndex, 1)
  };
  return true 
};



export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
