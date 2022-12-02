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

const letterPoints = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
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

export const drawLetters = () => {
  // Implement this method for wave 1
  // use spread operator to make a copy
  let letterPoolCopy = { ...letterPool };
  const handList = [];
  const justLetters = Object.keys(letterPoolCopy);
  // console.log(justLetters);
  while (handList.length < 10) {
    const hand = justLetters[Math.floor(Math.random() * justLetters.length)];
    if (letterPoolCopy[hand] > 0) {
      handList.push(hand);
      letterPoolCopy[hand] -= 1;
    }
  }
  return handList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // let lettersInHandCopy = { ...lettersInHand };

  for (let letter of input.toUpperCase()) {
    if (lettersInHand.includes(letter)) {
      let index = lettersInHand.indexOf(letter);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  // let score = word.length >= 7 ? 8 : 0;
  const score = 0;
  for (let letter of word.toUpperCase()) {
    score += letterPoints[letter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
