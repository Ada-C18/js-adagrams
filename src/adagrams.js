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

export const scoreChart = {
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
  let fixedInput = input.toUpperCase();
  for (let char of fixedInput) {
    let countCharInInput = fixedInput.split(char).length - 1;
    let countCharInHand = lettersInHand.filter((y) => y === char).length;
    if (countCharInInput !== countCharInHand) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const fixedWord = word.toUpperCase();
  let score = 0;
  for (let letter of fixedWord) {
    score += scoreChart[letter];
  }
  if (fixedWord.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
