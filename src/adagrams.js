import { keyOf } from "core-js/core/dict";

export const drawLetters = () => {
  // Implement this method for wave 1
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

  let hand = [];
  let letters = [];

  for (const [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      letters.push(key);
    }
  }
  while (hand.length < 10) {
    hand.push(letters.pop(Math.floor(Math.random() * letters.length - 1)));
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputUpper = input.toUpperCase();
  let lettersInHandCopy = [...lettersInHand];
  for (let letter of inputUpper) {
    if (lettersInHandCopy.includes(letter)) {
      let indexHand = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(indexHand, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const lettersDict = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 9,
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

  let sum = 0;

  for (let letter of word) {
    let value = lettersDict[letter.toUpperCase()];
    sum += value;
  }
  if (word.length > 6) {
    sum += 8;
  } else if (word.length == "") {
    return 0;
  }
  return sum;
};

// Pseudocode for wave 4:
// Create a dictionary that will hold our words.
// Iterate through our words and use the scoreWord function to
// get the score of our word.
// Create a variable called winner that takes the
// word in index 0 in words and the word in index 0 of our words dict.

// Iterate through the keys and values from our letterPool and check
// if our value is greater than winner. If it is, we want to set
// winner to (key, value).
// Then check if our value is equal to winner and if the lenght of
// winner is less than 10. If it is, we want to check the length
// of our key and if it is equal to 10, set that key and that value to winner.
// Then check if our key is less than our winner, and if it is, set that key
// and value to winner. Return the winner outside of the loop.

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
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
  const wordsDict = {};

  for (let word of words) {
    wordsDict[word] = scoreWord(word);
  }
  let winner = (words[0], wordsDict[words[0]]);

  for (const [key, value] of words.Object.entries(letterPool)) {
    if (value > winner[1]) {
      winner = (key, value);
    }
    if (value === winner[1] && winner[0].length < 10) {
      if (key.length == 10) {
        winner = (key, value);
      } else if (key.length < winner[0].length) {
        winner = (key, value);
      }
    }
    return winner;
  }
};
