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

// Wave 1

// if you want to make a copy of an object, use spreader function - can also add keys
export const drawLetters = () => {
  const letters = Object.keys(letterPool);
  const hand = [];
  const letterCount = {};

  while (hand.length < 10) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
    if (letterCount[letter] < letterPool[letter]) {
      hand.push(letter);
    }
  }
  return hand;
};

// Wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i in input) {
    if (lettersInHand.includes(input[i])) {
      const hand_index = lettersInHand.indexOf(input[i]);
      const remove_letter = lettersInHand.splice(hand_index, 1);
    } else {
      return false;
    }
  }
  return true;
};

// Wave 3
export const scoreWord = (word) => {};

// Wave 4
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
