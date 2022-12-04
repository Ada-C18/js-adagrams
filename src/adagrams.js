// import { hasOwnMetadata } from 'core-js/fn/reflect';
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
  // Implement this method for wave 1
  // Wave 1: draw_letters

  let letterArray = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < freq; i++) {
      letterArray.push(letter);
    }
  }

  let hand = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * letterArray.length);
    hand.push(letterArray[randomIndex]);
    letterArray.splice(randomIndex, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let i = 0; i < input.length; i++) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    } else if (lettersInHand.includes(input[i])) {
      lettersInHand.splice(input[i], 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let pointValues = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  };

  let score = 0;
  let upperWord = word.toUpperCase();
  if (upperWord.length >= 7) {
    score += 8;
  }
  for (let char of upperWord) {
    for (const letterVal of Object.values(pointValues)) {
      if (letterVal.includes(char)) {
        let points = getKeyByValue(pointValues, letterVal);
        let pointsInt = parseInt(points[0]);
        score += pointsInt;
      }
    }
  }
  return score;
};

function getKeyByValue(obj, letterVal) {
  return Object.entries(obj).find((i) => i[1] === letterVal);
}
// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
