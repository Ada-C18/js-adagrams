import { parseSync } from "@babel/core";
// import { random } from "core-js/core/number";

/* Hi, Ansel!
I made a personal goal for this project to avoid for loops as much as possible.
Occasionally, I will include an alternative for loop as a comment, for comparison. 
If you feel that the for loop would have been better code, please let me know. Thanks!

I use some data structures and methods that were not covered in class. To avoid 
this file becoming cluttered with comments, I have created an additional file, 
comments.md (in the root folder) with explanations of my understandings of these 
structures and methods as they appear in this file, ordered by line number in this file. 
If you would like to check on my understanding of anything here, please refer to 
that file.
*/

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

  /*   alternative for loop that could have generated freqList:

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

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
