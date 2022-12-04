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
  let alphabet = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };
  let lettersInHand = [];
  while (lettersInHand.length < 10) {
    let letterIndex = Math.floor(Math.random() * 26);
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[letterIndex];
    if (alphabet[letter] < LETTER_POOL[letter]) {
      alphabet[letter]++;
      lettersInHand.push(letter);
    }
  }
  console.log(lettersInHand);
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyHand = lettersInHand.slice();
  for (let i = 0; i < input.length; i++) {
    let currentLetterIndex = copyHand.indexOf(input[i]);
    if (currentLetterIndex > -1) {
      copyHand.splice(currentLetterIndex, 1);
    } else {
      return false;
    }
  }
  console.log(pizza);
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
