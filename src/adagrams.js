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
  let chechList = [];
  for (let i = 0; i < wordlist.length; i++) {
    if (letterBankCopy.includes(wordlist[i])) {
      letterBankCopy.splice(i, 1);
      chechList.push(true);
    } else {
      chechList.push(false);
    }
    return chechList.every(Boolean);
  }
};

//...............
export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
