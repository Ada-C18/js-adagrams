// import {
//   LETTER_POOL
// } from "data";

export const drawLetters = () => {
  // Implement this method for wave 1
  const drawPool = [];
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
  for (let [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      drawPool.push(key);
    }
  }
  const hand = []; 
  for (let i = 0; i < 10; i++) {
    let pieceIndex = Math.floor(Math.random() * drawPool.length);
    let piece = drawPool[pieceIndex];
    hand.push(piece);
    const index = drawPool.indexOf(piece);
    if (index > -1) {
      drawPool.splice(index, 1);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const uppercaseInput = input.toUpperCase();
  const lettersInHandCopy = [...lettersInHand];
  for (const letter in uppercaseInput) {
        if (lettersInHandCopy.includes(uppercaseInput[letter]) === true); {
          const index = lettersInHandCopy.indexOf(uppercaseInput[letter]);
          if (index > -1) {
            lettersInHandCopy.splice(index, 1);
          } else {
            return false;
          }
        } 
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreMap = {
        'A' : 1, 
        'E' : 1, 
        'I' : 1, 
        'O' : 1, 
        'U' : 1, 
        'L' : 1, 
        'N' : 1, 
        'R' : 1, 
        'S' : 1, 
        'T' : 1, 
        'D' : 2, 
        'G' : 2, 
        'B' : 3, 
        'C' : 3, 
        'M' : 3, 
        'P' : 3, 
        'F' : 4, 
        'H' : 4, 
        'V' : 4, 
        'W' : 4, 
        'Y' : 4, 
        'K' : 5, 
        'J' : 8, 
        'X' : 8, 
        'Q' : 10, 
        'Z' : 10
  }
  let points = 0;
  word = word.toUpperCase();
  const newWord = word.split("");
  for (const letter of newWord) {
    points += scoreMap[letter];
  } if (newWord.length >= 7) {
    points += 8;
  }    
  return points;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
