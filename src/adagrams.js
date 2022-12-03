// import { all } from "core-js/fn/promise";

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

//Helper Function................
const createWordList = function (word) {
  let wordlist = [];
  for (let each of word) {
    wordlist.push(each.toUpperCase());
  }
  return wordlist;
};

//...........................

// ..........wave1...............
export const drawLetters = () => {
  let hand = [];
  while (hand.length < 10 || !hand.length) {
    const p = Object.keys(LETTER_POOL);
    const letter = p[Math.floor(Math.random() * p.length)];
    if (hand.filter((x) => x == letter).length < LETTER_POOL[letter]) {
      hand.push(letter);
    }
  }
  return hand;
};
//............. wave2.......................

export const usesAvailableLetters = (word, letterBank) => {
  const wordlist = createWordList(word);
  const letterBankCopy = [...letterBank];
  let checkList = [];
  for (let i = 0; i < wordlist.length; i++) {
    if (letterBankCopy.includes(wordlist[i])) {
      letterBankCopy.splice(word[i], 1);
      checkList.push(true);
    } else {
      checkList.push(false);
    }
  }
  return checkList.every(Boolean);
};

//...............wave 3............................

const SCORE_CHART = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const scoreWord = (word) => {
  const wordList = createWordList(word);
  let score = 0;
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] in SCORE_CHART) {
      score += SCORE_CHART[wordList[i]];
    }
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

// ....................................................
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
