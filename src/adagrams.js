import collect from "collect.js";

const letterData = [
  { letter: "A", quantity: 9, value: 1 },
  { letter: "B", quantity: 2, value: 3 },
  { letter: "C", quantity: 2, value: 3 },
  { letter: "D", quantity: 4, value: 2 },
  { letter: "E", quantity: 12, value: 1 },
  { letter: "F", quantity: 2, value: 4 },
  { letter: "G", quantity: 3, value: 2 },
  { letter: "H", quantity: 2, value: 4 },
  { letter: "I", quantity: 9, value: 1 },
  { letter: "J", quantity: 1, value: 8 },
  { letter: "K", quantity: 1, value: 5 },
  { letter: "L", quantity: 4, value: 1 },
  { letter: "M", quantity: 2, value: 3 },
  { letter: "N", quantity: 6, value: 1 },
  { letter: "O", quantity: 8, value: 1 },
  { letter: "P", quantity: 2, value: 3 },
  { letter: "Q", quantity: 1, value: 10 },
  { letter: "R", quantity: 6, value: 1 },
  { letter: "S", quantity: 4, value: 1 },
  { letter: "T", quantity: 6, value: 1 },
  { letter: "U", quantity: 4, value: 1 },
  { letter: "V", quantity: 2, value: 4 },
  { letter: "W", quantity: 2, value: 4 },
  { letter: "X", quantity: 1, value: 8 },
  { letter: "Y", quantity: 2, value: 4 },
  { letter: "Z", quantity: 1, value: 10 },
];

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

const scoreChart = {
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

// converts letterPool into one array of letters according to their quantity
const letterSoup = (letterPool) => {
  let letterArray = [];

  for (const letter in letterPool) {
    for (let runner = 0; runner < letterPool[letter]; runner++) {
      letterArray.push(letter);
    }
  }
  return letterArray;
};

const todaysSoup = letterSoup(letterPool);

export const drawLetters = () => {
  // array to store ten drawn letters
  const tenLetters = [];

  // loop to randomly populate tenLetters
  while (tenLetters.length < 10) {
    // choose randomLetter from randomized index from todaysSoup array, between 0 and todaysSoup length
    let randomLetter =
      todaysSoup[Math.floor(Math.random() * todaysSoup.length + 1)];

    // check if randomLetter count within tenLetters is less than allotted letter quantity
    // if true, add randomLetter to tenLetters array
    if (collect(tenLetters).count(randomLetter) < letterPool[randomLetter]) {
      tenLetters.push(randomLetter);
    }
  }

  console.log(todaysSoup);
  console.log(tenLetters);
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // use js method on input word to ignore case: input.toUpperCase()
  // loop through input word,
  // check if letter from input is also in letterInHand
  // return False if not
  // outside of loop, return true

  const availableLetters = lettersInHand;
  console.log(availableLetters);
  const upperInput = input.toUpperCase();
  console.log(upperInput);

  for (let i = 0; i < upperInput.length; i++) {
    if (availableLetters.includes(upperInput[i])) {
      console.log(upperInput[i]);
      availableLetters.shift(upperInput[i]);
      console.log(availableLetters);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  let upperWord = word.toUpperCase();

  for (let letter of upperWord) {
    if (letter in scoreChart) {
      score += scoreChart[letter];
    }
  }

  if (word.length >= 7) {
    score += 8;
  }
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
