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
  const freqList = Object.entries(POOL)
    .map(([letter, value]) => Array(value).fill(letter))
    .flat();

  /* // Alternative for loop that could have generated freqList:

  const freqList = [];
  for (const [key, value] of Object.entries(POOL)) {
    for (let i = 0; i < value; i++) {
      freqList.push(key);
    }
  }
  */

  const hand = Array(10)
    .fill(0)
    .map(() => {
      const index = Math.floor(Math.random() * freqList.length);
      const result = freqList[index];
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
  const inputMap = makeWordMap(input);

  const handMap = makeHandMap(lettersInHand);

  const inputIterator = inputMap[Symbol.iterator]();

  for (const item of inputIterator) {
    const [key, value] = item;

    if (handMap.has(key)) {
      const hmVal = handMap.get(key);
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

  const wordMap = makeWordMap(word);
  const wordIter = wordMap[Symbol.iterator]();

  for (const item of wordIter) {
    const [letter, n] = item;
    score += SCORECHART[letter] * n;
  }

  return score;

  /* // Alternative implementation using an array instead of a map object:
  const bonusFloorLength = 7;
  const scoreBonus = 8;

  const wordArr = Array.from(word.toUpperCase());

  const score = wordArr.reduce(
    (tally, letter) => tally + SCORECHART[letter],
    word.length >= bonusFloorLength ? scoreBonus : 0
  );

  return score;
  */
};

export const highestScoreFrom = (words) => {
  const [hsWord, highestScore] = words
    .map((word) => [word, scoreWord(word)])
    .reduce(
      (accumulator, currentValue) => {
        const [thisWord, thisScore] = currentValue;
        const [hWord, hScore] = accumulator;

        if (thisScore > hScore) {
          accumulator = [thisWord, thisScore];
        } else if (thisScore === hScore) {
          if (
            hWord.length < 10 &&
            (thisWord.length < hWord.length || thisWord.length === 10)
          ) {
            accumulator = [thisWord, thisScore];
          }
        }
        return accumulator;
      },
      ["", 0]
    );

  return { word: hsWord, score: highestScore };
};

/*
// Alternative implementation of highestScoreFrom using a for...of loop:
export const highestScoreFrom = (words) => {
  let hWord = "";
  let hScore = 0;

  const WORDS = words.map((word) => [word, scoreWord(word)]);

  for (const item of WORDS) {
    const [thisWord, thisScore] = item;

    if (thisScore > hScore) {
      [hWord, hScore] = [thisWord, thisScore];
    } else if (thisScore === hScore) {
      if (
        hWord.length < 10 &&
        (thisWord.length < hWord.length || thisWord.length === 10)
      ) {
        [hWord, hScore] = [thisWord, thisScore];
      }
    }
  }

  return { word: hWord, score: hScore };
};
*/
