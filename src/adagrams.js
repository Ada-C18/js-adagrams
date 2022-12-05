/* eslint-disable quotes */
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

const scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

////////////////////////////
// BEGIN HELPER FUNCTIONS //
////////////////////////////

function getRandomLetter(obj) {
  const letters = Object.keys(obj);
  return letters[Math.floor(Math.random() * letters.length) + 1];
}

function toObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key].includes(value));
}

const updateBestWord = (obj, word) => {
  obj.word = word;
  obj.score = scoreWord(word);
};

////////////////////////////
// END HELPER FUNCTIONS //
////////////////////////////

export const drawLetters = () => {
  let letterPoolcopy = JSON.parse(JSON.stringify(letterPool));
  let hand = [];
  while (hand.length < 10) {
    let drawnLetter = getRandomLetter(letterPoolcopy);
    if (letterPoolcopy[drawnLetter] > 0) {
      hand.push(drawnLetter);
      letterPoolcopy[drawnLetter] -= 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const hand = toObject(lettersInHand);
  const word = input.split("");
  for (let i = 0; i < input.length; i++) {
    if (word[i] in hand && hand[word[i]] > 0) {
      hand[word[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (word.length >= 7) {
    score += 8;
  }
  for (const letter of word) {
    score += Number(getKeyByValue(scoreChart, letter.toUpperCase()));
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const bestWord = {
    word: null,
    score: 0,
  };

  for (const word of words) {
    if (scoreWord(word) > bestWord.score) {
      updateBestWord(bestWord, word);
    } else if (bestWord.word === null) {
      updateBestWord(bestWord, word);
    } else if (
      bestWord.score === scoreWord(word) &&
      word.length < bestWord.word.length &&
      bestWord.word.length != 10
    ) {
      updateBestWord(bestWord, word);
    } else if (
      bestWord.score === scoreWord(word) &&
      word.length === 10 &&
      word.length != bestWord.word.length
    ) {
      updateBestWord(bestWord, word);
    }
  }
  return bestWord;
};
