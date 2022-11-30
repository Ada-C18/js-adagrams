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

// Helper Function
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Functions

export const drawLetters = () => {
  // Wave 1
  const letterPoolList = [];

  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterPoolList.push(key);
    }
  }
  const handList = [];
  shuffle(letterPoolList);
  for (let i = 0; i < 10; i++) {
    handList.push(letterPoolList.pop());
  }
  return handList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // wave 2
  // check to make sure each letter in input is found in letters in hand
  // assess letters in hand and make a copy of this list
  // check if letter in hand and remove from list if so
  // map function to make copy of list
  const lettersInHandCopy = Array.from(lettersInHand);
  for (let i = 0, len = input.length; i < len; i++) {
    if (lettersInHandCopy.includes(input[i])) {
      const index = lettersInHandCopy.indexOf(input[i]);
      lettersInHandCopy.splice(index, 1);
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
