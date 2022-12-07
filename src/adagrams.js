import { parseSync } from "@babel/core";
// import { random } from "core-js/core/number";

const POOL = {
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

Object.freeze(POOL);

export const drawLetters = () => {
  let freqList = Object.entries(POOL)
    .map(([letter, value]) => Array(value).fill(letter))
    .flat();

  /* // Alternative for loop that could have generated freqList:

  for (let [key, value] of Object.entries(POOL)) {
    for (let i = 0; i < value; i++) {
      freqList.push(key);
    }
  }
  */

  let hand = Array(10)
    .fill(0)
    .map(() => {
      let index = Math.floor(Math.random() * freqList.length);
      let result = freqList[index];
      freqList.splice(index, 1);
      return result;
    });

  return hand;
};

const makeMap = (elem, mapObj) =>
  mapObj.has(elem)
    ? mapObj.set(elem, mapObj.get(elem) + 1)
    : mapObj.set(elem, 1);

const makeWordMap = (word) => {
  const wordMap = new Map();
  Array.from(word.toUpperCase()).forEach((elem) => makeMap(elem, wordMap));
  return wordMap;
};

const makeHandMap = (hand) => {
  const handMap = new Map();
  hand.forEach((elem) => makeMap(elem, handMap));
  return handMap;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let inputMap = makeWordMap(input);

  let handMap = makeHandMap(lettersInHand);

  let inputIterator = inputMap[Symbol.iterator]();

  for (let item of inputIterator) {
    let [key, value] = item;

    if (handMap.has(key)) {
      let hmVal = handMap.get(key);
      if (hmVal === 0 || hmVal - value < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

const SCORECHART = {
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

Object.freeze(SCORECHART);

export const scoreWord = (word) => {
  const bonusFloorLength = 7;
  const scoreBonus = 8;

  let score = 0;

  if (word.length >= bonusFloorLength) {
    score += scoreBonus;
  }

  let wordMap = makeWordMap(word);
  let wordIter = wordMap[Symbol.iterator]();

  for (let item of wordIter) {
    let [letter, n] = item;
    score += SCORECHART[letter] * n;
  }

  return score;

  /* // Alternative implementation using an array instead of a map object:
  const bonusFloorLength = 7;
  const scoreBonus = 8;

  let wordArr = Array.from(word.toUpperCase());

  let score = wordArr.reduce(
    (tally, letter) => tally + SCORECHART[letter],
    word.length >= bonusFloorLength ? scoreBonus : 0
  );

  return score;
  */
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
