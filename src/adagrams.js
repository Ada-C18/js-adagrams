const LETTERPOOL = {
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

// Return an array of ten strings
export const drawLetters = () => {
  const letterBank = [];
  const handOfLetters = [];

  for (const [k, v] of Object.entries(LETTERPOOL)) {
    letterBank.push(...k.repeat(v));
  }

  while (handOfLetters.length < 10) {
    let randomIndexNumber = Math.floor(Math.random() * letterBank.length);

    handOfLetters.push(letterBank[randomIndexNumber]);
    letterBank.splice(randomIndexNumber, 1);
  }
  return handOfLetters;
};

// Create an object where key is the letter and value is the number of times it appears in the hand
const countLettersInHand = (lettersInHand) => {
  const lettersInHandCount = {};

  for (const letter of lettersInHand) {
    if (letter in lettersInHandCount) {
      lettersInHandCount[letter] += 1;
    } else {
      lettersInHandCount[letter] = 1;
    }
  }
  return lettersInHandCount;
};

// Returns true if every letter in input is available (in the right quantities) in lettersInHand
// Returns false if there is a letter in input that is not present in lettersInHand or has too much
export const usesAvailableLetters = (input, lettersInHand) => {
  // Call countLettersInHand helper function to get an object that includes the letters and # of times the letter is in the hand
  const lettersInHandCount = countLettersInHand(lettersInHand);

  for (const letter of input) {
    if (!(letter in lettersInHandCount) || lettersInHandCount[letter] === 0) {
      return false;
    } else {
      lettersInHandCount[letter] -= 1;
    }
  }
  return true;
};

// Returns score of a given word
export const scoreWord = (word) => {
  const wordInUpper = word.toUpperCase();
  let score = 0;

  for (const letter of wordInUpper) {
    score += SCORECHART[letter];
  }

  if (wordInUpper.length > 6 && wordInUpper.length < 11) {
    score += 8;
  }

  return score;
};

//Returns winning word
export const highestScoreFrom = (words) => {
  const wordScores = {};
  let maxScore = 0;
  const maxScoreWordsList = [];

  words.forEach((word) => {
    let score = scoreWord(word);
    wordScores[word] = score;

    if (score > maxScore) {
      maxScore = score;
    }
  });

  for (const [word, score] of Object.entries(wordScores)) {
    if (score === maxScore) {
      if (word.length === 10) {
        return { word: word, score: score };
      }
      maxScoreWordsList.push(word);
    }
  }
  const sortedMaxScoreWords = maxScoreWordsList.sort().reverse();
  return { word: sortedMaxScoreWords[0], score: maxScore };
};
