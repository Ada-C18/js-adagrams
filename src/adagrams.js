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

const getLetters = () => {
  let multiStr = "";
  for (const letter in letterPool) {
    //let multiStr = letter.repeat(letterPool[letter]);
    multiStr += letter.repeat(letterPool[letter]);
  }
  return multiStr;
};
const letterBank = getLetters();

export const drawLetters = () => {
  // Return an array of ten strings
  const randomHand = [];
  for (let i = 0; i < 10; i++) {
    randomHand.push(letterBank[Math.floor(Math.random() * letterBank.length)]);
  }
  return randomHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  //check that letters in input are IN lettersInHand

  for (let i = 0; i < input.length; i++) {
    //letter = input[i]
    if (lettersInHand.includes(input[i]) === false) {
      console.log(input[i]);
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
