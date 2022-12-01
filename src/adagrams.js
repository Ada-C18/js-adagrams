const letterPOOL = {
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
  const arrayLetter = Object.keys(letterPOOL);
  let letters = [];
  let letterFreq = {};
  for (let i = 0; i < 10; i++) {
    const letter = arrayLetter[Math.floor(Math.random() * 10)];
    // console.log(letter);
    if (letter in letterFreq) {
      letterFreq[letter] += 1;
    } else letterFreq[letter] = 1;
    if (letterFreq[letter] <= letterPOOL[letter]) {
      letters.push(letter);
    }
    if (letter.length === 10) {
      break;
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = [...lettersInHand];
  // let validInput = true;
  for (const letter of input.toUpperCase()) {
    if (!lettersInHandCopy.includes(letter)) {
      // validInput = false;
      return false;
    }
    lettersInHandCopy.splice(0, 1, letter);
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
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

  let score = 0;
  if (word.length >= 7) {
    score += 8;
  }
  for (let letter of word.toUpperCase()) {
    score += scoreChart[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // pass
};
