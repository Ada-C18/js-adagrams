export const letterPool = {
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

export const createLetterPoolArr = (letterPool) => {
  let letterPoolArr = [];
  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterPoolArr.push(letter);
    }
  }
  return letterPoolArr;
};

export const drawLetters = () => {
  const letterPoolArr = createLetterPoolArr(letterPool);
  let hand = [];
  while (hand.length < 10) {
    let randomLetter =
      letterPoolArr[Math.floor(Math.random() * letterPoolArr.length)];
    let count = hand.filter((x) => x === randomLetter).length;
    if (count < letterPool[randomLetter]) {
      hand.push(randomLetter);
    }
  }
  return hand;
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
