import { parseSync } from "@babel/core";
// import { random } from "core-js/core/number";

/* Hi, Ansel!
I made a goal for this project to avoid for loops as much as possible.
Occasionally, I will include the original for loop as a comment, so that you can 
see what I originally had. If you feel that the original would have been better, 
please let me know. Thanks!
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

Object.freeze(POOL); // prevents accidental mutation of POOL
// this should hopefully not be necessary, but I'm doing it from the start, just in case

/*
const letterFreq = (POOL) => {
  const TABLE = {};
  for (let [key, value] of Object.entries(POOL)) {
    if (TABLE[value]) {
      TABLE[value].push(key);
    } else {
      TABLE[value] = [key];
    }
  }
  return TABLE;
}
*/

export const drawLetters = () => {
  /* The below creates a list from POOL such that an outer list element holds 
  each of POOL's key:value pairs separate inner list elements. I then use map to 
  take the letters and values from POOL and, for each letter, create a new array 
  of ${value} elements that are all each ${letter}. I then use flat to pull the 
  elements out of the inner lists and concatenate them into one (not nested) list. 
  I am writing this comment only so that you can know that I know what this does.*/

  let freqList = Object.entries(POOL)
    .map(([letter, value]) => Array(value).fill(letter))
    .flat();

  /*   refactored the original code in this comment so I could ditch the for loop:
  I used what's assigned to freqList (above) instead.

  for (let [key, value] of Object.entries(POOL)) {
    for (let i = 0; i < value; i++) {
      freqList.push(key);
    }
  }
  */

  /* The below creates a list of 10 empty items that are then filled with 0. I 
  then use map to replace the zeros with the randomly selected letters. Map assigns a 
  random number between [0,length of freqList) to index, which is then used to select the
  letter corresponding to that index value from freqList. I then update freqList to 
  remove the selected letter. I am writing this comment only so that you can know 
  that I know what this does. */
  let hand = Array(10)
    .fill(0)
    .map(() => {
      let index = Math.floor(Math.random() * freqList.length);
      let result = freqList[index];
      freqList = freqList
        .slice(0, index)
        .concat(freqList.slice(index + 1, freqList.length));
      return result;
    });

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
