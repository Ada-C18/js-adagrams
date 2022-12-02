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

export const drawLetters = () => {
  // Implement this method for wave 1

  const letters = [];
  for (const key in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[key]; i++) {
      letters.push(key);
    }
  }

  const shuffled = letters.sort(() => 0.5 - Math.random());
  let userHand = shuffled.slice(0, 10);
  // console.log(userHand);
  return userHand;
};

// console.log(drawLetters())

const itemCounter = (array, item) => {
  let counter = 0;
  array.flat(Infinity).forEach((x) => {
    if (x == item) {
      counter++;
    }
  });
  return counter;
};

// console.log(itemCounter(["M","i","n","n","h"], "n"))

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  console.log(input);
  for (let letter of input) {
    console.log(letter);
    //  console.log(wordList)
    console.log(letter);
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      if (
        itemCounter(input.split(""), letter) >
        itemCounter(lettersInHand, letter)
      ) {
        console.log(itemCounter(input.split(""), letter));
        console.log(itemCounter(lettersInHand, letter));
        return false;
      }
    }
  }
  return true;
};
// usesAvailableLetters()

const SCORE_CHART = {
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

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const wordUpper = word.toUpperCase();
  // console.log("CAPITALIZE WORD ARE HERE",wordUpper)
  // const wordList = [];

  // for (const letter of wordUpper) {
  //   wordList.push(letter);
  // }
  // console.log(wordList)

  let score = 0;
  if (wordUpper.length < 7) {
    score += 0;
  } else {
    score += 8;
  }
  console.log("What is my score here", score);

  if (wordUpper.length === 0) {
    return score;
  } else {
    for (const letter of wordUpper ) {
      // console.log(wordUpper );
      if (letter in SCORE_CHART) {
        score += SCORE_CHART[letter];
      }
    }
  }
  return score;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
